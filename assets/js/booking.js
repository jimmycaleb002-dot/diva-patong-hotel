/* ============================================================
   Diva Patong Hotel: booking flow shared state & helpers.
   This is an interactive PROTOTYPE: state lives only in this
   browser tab's sessionStorage, not on any server. See Step 9
   for what a real backend would add. Never treat DIVA_BOOKING
   as a real reservation record.
   ============================================================ */
window.DivaBooking = (function(){
  var KEY = 'divaBookingV1';

  function load(){
    try{
      var raw = sessionStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    }catch(e){ return null; }
  }

  function save(state){
    try{ sessionStorage.setItem(KEY, JSON.stringify(state)); }catch(e){ /* storage unavailable, flow still works within the page */ }
  }

  function clear(){
    try{ sessionStorage.removeItem(KEY); }catch(e){}
  }

  function nights(checkin, checkout){
    if(!checkin || !checkout) return 0;
    var a = new Date(checkin + 'T00:00:00');
    var b = new Date(checkout + 'T00:00:00');
    var diff = Math.round((b - a) / 86400000);
    return diff > 0 ? diff : 0;
  }

  function formatTHB(n){
    return '฿' + Math.round(n).toLocaleString('en-US');
  }

  function roomBySlug(slug){
    return (window.DIVA_ROOMS || []).filter(function(r){ return r.slug === slug; })[0] || null;
  }

  // Returns {lines:[{room,qty,nightly,lineTotal|null}], subtotal, hasUnconfirmed, totalRooms}
  function computeSummary(state){
    var n = nights(state.checkin, state.checkout);
    var lines = [];
    var subtotal = 0;
    var hasUnconfirmed = false;
    var totalRooms = 0;
    (state.rooms || []).forEach(function(sel){
      if(!sel.qty) return;
      var room = roomBySlug(sel.slug);
      if(!room) return;
      totalRooms += sel.qty;
      var lineTotal = null;
      if(room.price != null){
        lineTotal = room.price * sel.qty * n;
        subtotal += lineTotal;
      } else {
        hasUnconfirmed = true;
      }
      lines.push({ room: room, qty: sel.qty, lineTotal: lineTotal });
    });
    return { nights: n, lines: lines, subtotal: subtotal, hasUnconfirmed: hasUnconfirmed, totalRooms: totalRooms };
  }

  function makeReference(){
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var out = 'DP-';
    for(var i=0;i<6;i++){ out += chars[Math.floor(Math.random()*chars.length)]; }
    return out;
  }

  return {
    load: load, save: save, clear: clear,
    nights: nights, formatTHB: formatTHB,
    roomBySlug: roomBySlug, computeSummary: computeSummary,
    makeReference: makeReference
  };
})();
