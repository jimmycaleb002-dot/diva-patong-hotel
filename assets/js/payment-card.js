/* ============================================================
   Diva Patong Hotel: card-payment module (DISABLED).

   This is a prepared but INERT integration point, not a working
   feature. Right now the site's only payment method is "pay at
   the property" (see review.html) and this module does nothing.

   Why this file exists at all: so that turning card payments on
   later is a scoped, reviewable change instead of a rewrite. The
   mount point already exists in review.html, and the gate
   lives in one place (assets/js/feature-flags.js).

   What "enabling" this would actually require, none of which
   exists yet and none of which this file does on its own:
     1. Explicit approval. Do not flip ENABLE_CARD_PAYMENTS to
        true without being asked to.
     2. A real payment processor (e.g. Omise/Stripe, common for
        Thailand): an SDK script tag, publishable key, and a
        hosted/tokenized card element. This file must never
        collect raw card numbers into this site's own DOM/JS.
     3. A real backend (see Step 9) that creates the charge
        server-side using a tokenized payment method and *itself*
        rejects any payment attempt while the flag is off. The
        client-side gate below is not a substitute for that check.
     4. Updating review.html's payment section copy and button
        label once "pay now" is a real, working action again.

   While the flag is false, mount() intentionally renders nothing
   at all: no card form, no processor branding, no SDK request,
   rather than a hidden/disabled version of one.
   ============================================================ */
window.DivaPaymentCard = (function(){
  function mount(container){
    var enabled = window.DIVA_FEATURE_FLAGS && window.DIVA_FEATURE_FLAGS.ENABLE_CARD_PAYMENTS;
    if(!enabled || !container){
      return; // Nothing rendered. No SDK loaded. No card fields exist in the DOM.
    }
    // Not implemented. Enabling the flag without building this out
    // would be worse than the current pay-at-property-only flow.
    throw new Error('ENABLE_CARD_PAYMENTS is on but no card payment integration has been built yet.');
  }
  return { mount: mount };
})();
