// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("marriott-cancellation-en",function(e){return/Reservation Cancellation/.test(e.subject)},function(e){if(/Reservation Cancellation/.test(e.subject)){var t="en_US",o={};if(/^Reservation Cancellation \#/.test(e.subject)){o.emailTitelConfirmation=/Reservation Confirmation/,o.reservationId=/Reservation Confirmation\: (.+)/,o.checkInDate=/CHECK-IN DATE/,o.checkInTime=/CHECK-IN TIME/,o.checkOutDate=/CHECK-OUT DATE/,o.checkOutTime=/CHECK-OUT TIME/,o.guestName=/(?:Dear (.+)\,|Hello (.+))/,o.modifyUrl=/Modify your reservation/,o.cancelUrl=/Cancel your reservation/,o.price=/Total for stay/,o.hotelInfo=/Please review your reservation details|We have canceled your reservation/,o.emailTitelCancelConfirmation=/Reservation Cancellation/,o.cancelReservationId=/RESERVATION CANCELLED/,o.cancelPrice=/Rate Information/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,o)}if(/.* Reservation Cancellation/.test(e.subject)){o.cancellationInformation="Cancellation Information",o.rateInformation="Rate Information",/\* Cancellation number:/.test(e.plain)?(o.version="html",o.reservationCancellationTitle="Reservation cancellation for",o.reservationCancellation="Reservation Cancellation",o.reservationCancelled="* Reservation cancelled:",o.checkin="* Check-in:",o.checkout="* Check-out:",o.hotelName="* Your hotel:",o.phone="Phone:",o.fax="Fax:"):(o.version="txt",o.name="Dear",o.reservationId="Reservation cancelled:",o.checkin="Check-in:",o.checkout="Check-out:",o.hotelName="Your hotel:");var r=loadHelper("marriott-cancellation-skeleton.js");return r(e,t,o)}}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/863","SGeec4b645"),new ReverseTemplate("marriott-confirmation-en",function(e){return/.*Reservation Confirmation/.test(e.subject)},function(e){if(/Reservation Confirmation/.test(e.subject)){var t="en_US",o={};if(/^Reservation Confirmation \#/.test(e.subject)){o.emailTitelConfirmation=/Reservation Confirmation/,o.reservationId=/Reservation Confirmation\: (.+)/,o.checkInDate=/CHECK-IN DATE/,o.checkInTime=/CHECK-IN TIME/,o.checkOutDate=/CHECK-OUT DATE/,o.checkOutTime=/CHECK-OUT TIME/,o.guestName=/(?:Dear (.+)\,|Hello (.+))/,o.modifyUrl=/Modify your reservation/,o.cancelUrl=/Cancel your reservation/,o.price=/Total for stay/,o.hotelInfo=/Please review your reservation details|We have canceled your reservation/,o.emailTitelCancelConfirmation=/Reservation Cancellation/,o.cancelReservationId=/RESERVATION CANCELLED/,o.cancelPrice=/Rate Information/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,o)}/\* Confirmation Number:/.test(e.plain)?(o.version="html",o.confirmationNumber="* Confirmation Number:",o.checkin="* Check-in:",o.checkout="* Check-out:",o.modifyReservationUrl="Modify or Cancel reservation <",o.hotelUrl="View hotel website <",o.summary="Summary of Room Charges",o.hotelName="* Your hotel:",o.name="* Guest name:",o.fax="Fax:",o.reservationDetails="Reservation Details",o.totalPrice="Total for stay",o.priceCurrency="Cost per night per room",o.phone="Phone:"):(o.version="txt",o.planningYourTrip="Planning Your Trip",o.confirmationNumber="Confirmation Number:",o.checkin="Check-in:",o.checkout="Check-out:",o.guestName="Guest name:",o.hotelUrl="View hotel website",o.modifyUrl="To modify or cancel this reservation",o.reservationDetails="Reservation Details",o.totalPrice="Total for stay",o.priceCurrency="Cost per night per room",o.phone="Phone:");var r=loadHelper("marriott-confirmation-skeleton.js");return r(e,t,o)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/867","SG2cc34379"),new ReverseTemplate("marriott-reminder-en",function(e){return/^Your stay \+ things to do/.test(e.subject)},function(e){if(/^Your stay \+ things to do/.test(e.subject)){var t="en_US",o={};o.emailTitelConfirmation=/Reservation Confirmation/,o.reservationId=/Reservation Confirmation\: (.+)/,o.checkInDate=/CHECK-IN DATE/,o.checkInTime=/CHECK-IN TIME/,o.checkOutDate=/CHECK-OUT DATE/,o.checkOutTime=/CHECK-OUT TIME/,o.guestName=/(?:Dear (.+)\,|Hello (.+))/,o.modifyUrl=/Modify your reservation/,o.cancelUrl=/Cancel your reservation/,o.price=/Total for stay/,o.hotelInfo=/Please review your reservation details|We have canceled your reservation/,o.hotelAddress=/Travel Brilliantly/,o.emailTitelCancelConfirmation=/Reservation Cancellation/,o.cancelReservationId=/RESERVATION CANCELLED/,o.cancelPrice=/Rate Information/,o.reminderReservationId=/RESERVATION CONFIRMATION/,o.reminderHotelName=/Your reservation.*at the (.*) begins soon\./,o.reminderHotelName_2=/Your stay \+ things to do\: (.*) \u2013 begins/,o.reminderHotelName_3=/See you soon,/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,o)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/871","SG45d7056a")]);
