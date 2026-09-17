/* ============================================================
   Diva Patong Hotel: confirmation email content (PREPARED, NOT SENT).

   This file only builds the subject/body text for the guest's
   booking-request confirmation email. It does not send anything,
   there is no backend yet (see Step 9) and no email service is
   connected. Actually dispatching this is Step 9's job, once a
   real backend exists to send it server-side.

   Do not wire this into a client-side email service without being
   asked to. See the Step 8 conversation for why: sending is meant
   to wait for a real backend rather than a browser-side workaround.
   ============================================================ */
window.DivaEmailTemplates = (function(){

  // state: the booking object from DivaBooking (must include .reference).
  function bookingConfirmationEmail(state){
    var s = window.DivaBooking.computeSummary(state);
    var g = state.guest;
    var roomsText = s.lines.map(function(l){
      var price = l.lineTotal != null ? window.DivaBooking.formatTHB(l.lineTotal) : 'rate to be confirmed';
      return l.qty + '× ' + l.room.name + ' (' + price + ')';
    }).join('\n  ');

    var subtotalLine = window.DivaBooking.formatTHB(s.subtotal) + (s.hasUnconfirmed ? ' (partial, some room rates are not yet confirmed)' : '');

    var subject = 'Your booking request: Diva Patong Hotel (Ref: ' + state.reference + ')';

    var body =
'Dear ' + g.fullName + ',\n\n' +
'Thank you for your booking request with Diva Patong Hotel. Here is what you submitted:\n\n' +
'Reference: ' + state.reference + '\n' +
'Check-in: ' + state.checkin + '\n' +
'Check-out: ' + state.checkout + ' (' + s.nights + ' night' + (s.nights===1?'':'s') + ')\n' +
'Guests: ' + state.adults + ' adult' + (state.adults===1?'':'s') + (state.children ? ', ' + state.children + ' child' + (state.children===1?'':'ren') : '') + '\n' +
'Room(s):\n  ' + roomsText + '\n' +
'Subtotal: ' + subtotalLine + '. Excludes any taxes or fees, which the hotel will confirm directly.\n' +
'Payment: Pay at the property. No payment has been collected online, and no online payment method is offered by this site.\n\n' +
'IMPORTANT, please read:\n' +
'This message confirms that your request has been received; it is not yet a guaranteed reservation. To secure your room, please contact us before your scheduled arrival date to confirm your stay or to arrange an alternative payment method. If we do not hear from you, or do not receive confirmation, before or at the time of your scheduled arrival, we reserve the right to release the room and offer it to another guest. Depending on availability at the time of your arrival, we may be able to offer alternative options, but this cannot be guaranteed.\n\n' +
'To confirm your booking or discuss payment options, please contact us directly:\n' +
'Phone: +66 (0) 65 740 1917\n' +
'Email: reservation@diva-patong-hotel.com\n\n' +
'We look forward to welcoming you to Diva Patong Hotel.\n\n' +
'Warm regards,\n' +
'Diva Patong Hotel\n' +
'Nanai Road, Patong Beach, Phuket, Thailand';

    return { to: g.email, subject: subject, body: body };
  }

  return { bookingConfirmationEmail: bookingConfirmationEmail };
})();
