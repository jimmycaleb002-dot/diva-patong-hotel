/* ============================================================
   Diva Patong Hotel: feature flags.
   Single place to enable/disable optional functionality. Do not
   flip ENABLE_CARD_PAYMENTS to true without explicit approval.
   See assets/js/payment-card.js for what that would actually
   require (a real payment processor + server-side enforcement,
   neither of which exists yet).
   ============================================================ */
window.DIVA_FEATURE_FLAGS = {
  ENABLE_CARD_PAYMENTS: false
};
