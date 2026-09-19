/* ============================================================
   Diva Patong Hotel: shared site behaviour
   Loaded on every page. Every block below checks that its
   target elements exist before doing anything, so pages that
   don't have (say) a hero video or a pinned carousel are
   unaffected, safe to include everywhere.
   ============================================================ */
(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- hero video: autoplay (respecting reduced-motion) + accessible toggle ----
  var heroVideo = document.getElementById('heroVideo');
  var heroToggle = document.getElementById('heroVideoToggle');
  if(heroVideo){
    // On real load failure, fall back to the .hero section's own gradient
    // background (drop the now-broken <video> box so it doesn't sit there
    // blank) and hide the toggle, there's nothing left to play/pause.
    heroVideo.addEventListener('error', function(){
      heroVideo.style.display = 'none';
      if(heroToggle) heroToggle.style.display = 'none';
    }, true);
    if(heroVideo.readyState === 0 && heroVideo.networkState === 3){
      heroVideo.style.display = 'none';
      if(heroToggle) heroToggle.style.display = 'none';
    }

    if(heroToggle){
      var syncToggle = function(){
        var paused = heroVideo.paused;
        heroToggle.classList.toggle('is-paused', paused);
        heroToggle.setAttribute('aria-label', paused ? 'Play background video' : 'Pause background video');
      };
      heroVideo.addEventListener('play', syncToggle);
      heroVideo.addEventListener('pause', syncToggle);
      heroToggle.addEventListener('click', function(){
        if(heroVideo.paused){ heroVideo.play().catch(function(){}); }
        else { heroVideo.pause(); }
      });
      syncToggle();
    }

    if(reduceMotion){
      // Respect prefers-reduced-motion: the <video autoplay> attribute is
      // still in the HTML for browsers that don't otherwise reliably start
      // playback (see below), so explicitly stop it here rather than relying
      // on JS timing to prevent it from starting in the first place. The
      // toggle reads "Play background video" and stays that way until the
      // visitor explicitly presses it.
      heroVideo.pause();
    } else {
      // The HTML `autoplay` attribute handles the common case natively and
      // reliably, before this script even runs. This is a fallback for
      // browsers/situations where that gets blocked or interrupted, not the
      // primary mechanism.
      var tryPlay = function(){
        heroVideo.play().catch(function(){
          // Autoplay was blocked. play() sets .paused = false optimistically
          // before this rejection settles, and some browsers don't reliably
          // follow it with a 'pause' event, so re-sync the toggle by hand
          // rather than risk it being left reading "Pause" on a paused video.
          if(heroToggle) syncToggle();
        });
      };
      tryPlay();
      document.addEventListener('canplay', tryPlay, true);
      ['pointerdown','keydown','touchstart'].forEach(function(evt){
        document.addEventListener(evt, function once(){
          tryPlay();
          ['pointerdown','keydown','touchstart'].forEach(function(e2){ document.removeEventListener(e2, once); });
        }, {once:true});
      });
      document.addEventListener('visibilitychange', function(){ if(!document.hidden) tryPlay(); });
    }
  }

  // ---- room-card / attraction-card photos: hide cleanly on 404 ----
  document.querySelectorAll('.room-art img').forEach(function(img){
    img.addEventListener('error', function(){ img.style.display = 'none'; });
  });

  // ---- smooth scroll ----
  var lenis;
  if(!reduceMotion && window.Lenis){
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  // ---- crosshair cursor ----
  var cross = document.getElementById('crosshair');
  var mx=-999,my=-999,sx=-999,sy=-999;
  window.addEventListener('mousemove', function(e){ mx=e.clientX; my=e.clientY; });
  function tick(){
    sx += (mx-sx)*0.35; sy += (my-sy)*0.35;
    if(cross) cross.style.transform = 'translate(' + (sx-13) + 'px,' + (sy-13) + 'px)';
    requestAnimationFrame(tick);
  }
  if(!reduceMotion) requestAnimationFrame(tick);

  // ---- hero dissolve-to-white + nav dark/light theme switching ----
  var fadeEl = document.getElementById('mist');
  var fadeWrap = document.querySelector('.mist-wrap');
  var navEl = document.querySelector('.nav');
  var themedSections = Array.prototype.slice.call(document.querySelectorAll('[data-nav-theme]'));
  function updateFade(){
    if(fadeEl && fadeWrap){
      // .mist no longer reserves flow height for itself (see site.css), only
      // .mist-spacer does, so the wrapper's own height IS the fade's scroll
      // budget. Once progress reaches 1, hide the overlay outright instead of
      // requiring a further 100vh of scroll to clear it: .mist and .intro are
      // both solid white, so there's nothing visible to hand off.
      var wrapRect = fadeWrap.getBoundingClientRect();
      var scrollable = Math.max(wrapRect.height, 1);
      var progress = Math.min(Math.max(-wrapRect.top / scrollable, 0), 1);
      if(progress > 0 && progress < 1){
        fadeEl.style.display = 'block';
        fadeEl.style.opacity = progress;
      } else {
        fadeEl.style.display = 'none';
      }
    }
    if(navEl && themedSections.length){
      var navLine = 46; // px from top, just below the fixed nav bar
      var current = null;
      for(var i=0;i<themedSections.length;i++){
        var r = themedSections[i].getBoundingClientRect();
        if(r.top <= navLine && r.bottom >= navLine){ current = themedSections[i]; break; }
      }
      navEl.classList.toggle('is-dark', current ? current.getAttribute('data-nav-theme') === 'dark' : false);
    }
  }
  window.addEventListener('scroll', updateFade, {passive:true});
  if(lenis) lenis.on('scroll', updateFade);
  updateFade();

  // ---- pinned horizontal scroll carousels (rooms / attractions) ----
  // Deliberately NOT using CSS position:sticky here: the pin element (.rooms-pin)
  // always reserves its 100svh slot in normal flow, while its inner wrapper
  // (.rooms-pin-inner) is switched between static / fixed / absolute by JS below,
  // driven by the same scroll math that drives the horizontal translate. This
  // guarantees the "pinned" state and the translate progress can never drift apart
  // (native sticky was observed to detach early in some layouts here, leaving a
  // large blank gap before the next section).
  function isPinEnabled(){ return window.innerWidth >= 900; }

  var pins = Array.prototype.slice.call(document.querySelectorAll('.rooms-track'))
    .map(function(track){
      var inner = track.closest('.rooms-pin-inner');
      var pin = track.closest('.rooms-pin');
      var section = track.closest('.rooms');
      return { track: track, inner: inner, pin: pin, section: section };
    })
    .filter(function(p){ return p.track && p.inner && p.pin && p.section; });

  pins.forEach(function(p){
    p.basePaddingBottom = parseFloat(getComputedStyle(p.section).paddingBottom) || 0;
    p.flowOffset = p.pin.offsetTop;
    p.prevBtn = document.querySelector('.carousel-arrow.prev[data-carousel="' + p.track.id + '"]');
    p.nextBtn = document.querySelector('.carousel-arrow.next[data-carousel="' + p.track.id + '"]');
  });

  function clearInner(inner){
    inner.style.position = '';
    inner.style.top = '';
    inner.style.left = '';
    inner.style.right = '';
    inner.style.bottom = '';
  }

  function syncArrows(p){
    if(!p.prevBtn || !p.nextBtn) return;
    if(isPinEnabled()){
      var rect = p.section.getBoundingClientRect();
      var localScroll = -rect.top - p.flowOffset;
      var extra = p.extra || 0;
      p.prevBtn.disabled = localScroll <= 0.5;
      p.nextBtn.disabled = extra <= 0 || localScroll >= extra - 0.5;
    } else {
      var max = p.track.scrollWidth - p.track.clientWidth;
      p.prevBtn.disabled = p.track.scrollLeft <= 1;
      p.nextBtn.disabled = max <= 1 || p.track.scrollLeft >= max - 1;
    }
  }

  // Scrolls one card (+ its gap) in either mode: nudges the page scroll
  // position while the pin is active (desktop/tablet), or scrolls the track
  // itself natively (the swipeable mobile layout).
  function stepCarousel(p, dir){
    if(isPinEnabled()){
      var rect = p.section.getBoundingClientRect();
      var localScroll = -rect.top - p.flowOffset;
      var extra = p.extra || 0;
      var target = Math.min(Math.max(localScroll + dir * p.cardStep, 0), extra);
      var targetScrollY = window.scrollY + (target - localScroll);
      window.scrollTo({top: targetScrollY, behavior: reduceMotion ? 'auto' : 'smooth'});
      // Safety net: Lenis.scrollTo() and behavior:'smooth' were both observed
      // to silently no-op in some environments while Lenis's wheel hijacking
      // is active. If the scroll position hasn't actually moved shortly after,
      // snap straight to the target rather than leaving the click looking dead.
      setTimeout(function(){
        if(Math.abs(window.scrollY - targetScrollY) > 4){ window.scrollTo(0, targetScrollY); }
        updatePins();
      }, 550);
    } else {
      var beforeLeft = p.track.scrollLeft;
      p.track.scrollBy({left: dir * p.cardStep, behavior: reduceMotion ? 'auto' : 'smooth'});
      var targetLeft = beforeLeft + dir * p.cardStep;
      setTimeout(function(){
        if(Math.abs(p.track.scrollLeft - beforeLeft) < 4 && Math.abs(targetLeft - beforeLeft) > 4){
          p.track.scrollTo({left: targetLeft});
        }
        syncArrows(p);
      }, 550);
    }
  }

  pins.forEach(function(p){
    if(p.prevBtn) p.prevBtn.addEventListener('click', function(){ stepCarousel(p, -1); });
    if(p.nextBtn) p.nextBtn.addEventListener('click', function(){ stepCarousel(p, 1); });
    p.track.addEventListener('scroll', function(){ if(!isPinEnabled()) syncArrows(p); }, {passive:true});
  });

  // Left/Right steps the carousel when focus is anywhere inside it (the track
  // itself or its arrow buttons) — but never hijacks arrow keys while the
  // user is typing in a form field elsewhere on the page.
  document.addEventListener('keydown', function(e){
    if(e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    var active = document.activeElement;
    if(!active) return;
    var tag = active.tagName;
    if(tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || active.isContentEditable) return;
    var p = null;
    for(var i=0;i<pins.length;i++){ if(pins[i].pin.contains(active)){ p = pins[i]; break; } }
    if(!p) return;
    e.preventDefault();
    stepCarousel(p, e.key === 'ArrowLeft' ? -1 : 1);
  });

  function layout(){
    pins.forEach(function(p){
      var firstCard = p.track.children[0];
      if(firstCard){
        var gap = parseFloat(getComputedStyle(p.track).columnGap) || parseFloat(getComputedStyle(p.track).gap) || 0;
        p.cardStep = firstCard.getBoundingClientRect().width + gap;
      }
      if(!isPinEnabled()) return;
      p.extra = Math.max(p.track.scrollWidth - window.innerWidth + 160, 0);
      p.flowOffset = p.pin.offsetTop;
      p.section.style.paddingBottom = (p.extra + p.basePaddingBottom) + 'px';
    });
  }
  function updatePins(){
    pins.forEach(function(p){
      if(!isPinEnabled()){ p.track.style.transform = 'none'; clearInner(p.inner); syncArrows(p); return; }

      var extra = p.extra || 0;
      var rect = p.section.getBoundingClientRect();
      var scrolledIn = -rect.top;
      // localScroll is measured from the pin's own natural (in-flow) position,
      // not from the section top — otherwise the pin would snap to "fixed" the
      // instant the section is entered, jumping in front of the heading above it
      // instead of letting the heading scroll past normally first.
      var localScroll = scrolledIn - p.flowOffset;

      if(extra <= 0){
        p.track.style.transform = 'none';
        clearInner(p.inner);
        syncArrows(p);
        return;
      }

      var progress = Math.min(Math.max(localScroll / extra, 0), 1);
      p.track.style.transform = 'translateX(' + (-progress * extra) + 'px)';

      if(localScroll <= 0){
        // Not reached yet — render normally in flow.
        clearInner(p.inner);
      } else if(localScroll < extra){
        // Mid-scroll — pin to the viewport while the track translates.
        p.inner.style.position = 'fixed';
        p.inner.style.top = '0';
        p.inner.style.left = '0';
        p.inner.style.right = '0';
        p.inner.style.bottom = '';
      } else {
        // Fully revealed — hand off smoothly to normal document flow (a fixed
        // offset within the always-in-flow outer .rooms-pin) so it scrolls away
        // with the page instead of leaving a static/blank gap.
        p.inner.style.position = 'absolute';
        p.inner.style.top = extra + 'px';
        p.inner.style.left = '0';
        p.inner.style.right = '0';
        p.inner.style.bottom = '';
      }
      syncArrows(p);
    });
  }
  window.addEventListener('resize', function(){ layout(); updatePins(); });
  window.addEventListener('scroll', updatePins, {passive:true});
  if(lenis) lenis.on('scroll', updatePins);
  window.addEventListener('load', function(){ layout(); updatePins(); });

  // ---- restrained reveal-on-scroll (headings only) ----
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, {threshold:.3});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('is-visible'); });
  }
})();

(function(){
  var imgs=document.querySelectorAll('.gallery img'); if(!imgs.length) return;
  var d=document.createElement('dialog'); d.className='lightbox'; d.innerHTML='<img alt="">';
  document.body.appendChild(d); var big=d.firstChild;
  imgs.forEach(function(i){i.parentNode.addEventListener('click',function(){big.src=i.src;big.alt=i.alt;d.showModal();});});
  d.addEventListener('click',function(){d.close();});
})();