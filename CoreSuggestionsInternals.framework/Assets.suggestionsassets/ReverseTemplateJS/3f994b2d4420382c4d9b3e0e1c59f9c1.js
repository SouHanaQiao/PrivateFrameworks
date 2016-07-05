// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("marriott-cancellation-de",function(e){return/Reservierungsstornierung/.test(e.subject)},function(e){if(/Reservierungsstornierung/.test(e.subject)){var t="de_DE",r={};r.emailTitelConfirmation=/Reservierungsbest\xe4tigung/,r.reservationId=/Reservierungsbest\xe4tigung\: (.+)/,r.checkInDate=/Anreise/,r.checkInTime=/Ankunftszeit/,r.checkOutDate=/Abreise/,r.checkOutTime=/Check-Out/,r.guestName=/Sehr geehrte\(r\) (.+)\,/,r.modifyUrl=/\xc4nderungen an der Reservierung vornehmen/,r.cancelUrl=/Ihre Buchung stornieren/,r.price=/Gesamtkosten f\xfcr den Aufenthalt/,r.hotelInfo=/Bitte pr\xfcfen Sie die Details Ihrer Reservierung|Wir haben Ihre Reservierung storniert/,r.emailTitelCancelConfirmation=/Reservierungsstornierung/,r.cancelReservationId=/Reservierung storniert[^.]/,r.cancelPrice=/Preisinformationen/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/862","SG8f232cab"),new ReverseTemplate("marriott-cancellation-en",function(e){return/Reservation Cancellation/.test(e.subject)},function(e){if(/Reservation Cancellation/.test(e.subject)){var t="en_US",r={};if(/^Reservation Cancellation \#/.test(e.subject)){r.emailTitelConfirmation=/Reservation Confirmation/,r.reservationId=/Reservation Confirmation\: (.+)/,r.checkInDate=/CHECK-IN DATE/,r.checkInTime=/CHECK-IN TIME/,r.checkOutDate=/CHECK-OUT DATE/,r.checkOutTime=/CHECK-OUT TIME/,r.guestName=/(?:Dear (.+)\,|Hello (.+))/,r.modifyUrl=/Modify your reservation/,r.cancelUrl=/Cancel your reservation/,r.price=/Total for stay/,r.hotelInfo=/Please review your reservation details|We have canceled your reservation/,r.emailTitelCancelConfirmation=/Reservation Cancellation/,r.cancelReservationId=/RESERVATION CANCELLED/,r.cancelPrice=/Rate Information/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}if(/.* Reservation Cancellation/.test(e.subject)){r.cancellationInformation="Cancellation Information",r.rateInformation="Rate Information",/\* Cancellation number:/.test(e.plain)?(r.version="html",r.reservationCancellationTitle="Reservation cancellation for",r.reservationCancellation="Reservation Cancellation",r.reservationCancelled="* Reservation cancelled:",r.checkin="* Check-in:",r.checkout="* Check-out:",r.hotelName="* Your hotel:",r.phone="Phone:",r.fax="Fax:"):(r.version="txt",r.name="Dear",r.reservationId="Reservation cancelled:",r.checkin="Check-in:",r.checkout="Check-out:",r.hotelName="Your hotel:");var i=loadHelper("marriott-cancellation-skeleton.js");return i(e,t,r)}}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/863","SGeec4b645"),new ReverseTemplate("marriott-cancellation-jp",function(e){return/\u306e\u30ad\u30e3\u30f3\u30bb/.test(e.subject)},function(e){if(/\u306e\u30ad\u30e3\u30f3\u30bb/.test(e.subject)){var t="ja_JP",r={};r.emailTitelConfirmation=/\u4e88\u7d04\u306e\u78ba\u8a8d/,r.reservationId=/\u3054\u4e88\u7d04\u306e\u78ba\u8a8d\uff1a\s+(.+)/,r.checkInDate=/\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u65e5/,r.checkInTime=/\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u6642\u523b/,r.checkOutDate=/\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u65e5/,r.checkOutTime=/\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u6642\u523b/,r.guestName=/(.+)\s+\u69d8/,r.modifyUrl=/\u3054\u4e88\u7d04\u306e\u5909\u66f4/,r.cancelUrl=/\u3054\u4e88\u7d04\u306e\u30ad\u30e3\u30f3\u30bb\u30eb/,r.price=/\u5bbf\u6cca\u306e\u5408\u8a08\u30dd\u30a4\u30f3\u30c8/,r.hotelInfo=/\u3054\u4e88\u7d04\u306e\u8a73\u7d30|\u304a\u5ba2\u69d8\u306e\u3054\u6ede\u5728\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f/,r.emailTitelCancelConfirmation=/\u4e88\u7d04\u306e\u30ad\u30e3\u30f3\u30bb\u30eb/,r.cancelReservationId=/\u30ad\u30e3\u30f3\u30bb\u30eb\u6e08\u307f\u306e\u3054\u4e88\u7d04/,r.cancelPrice=/\u6599\u91d1\u60c5\u5831/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/864","SGef9efe35"),new ReverseTemplate("marriott-cancellation-zh",function(e){return/.*? \u9884\u8ba2\u53d6\u6d88\u53f7\u7801/.test(e.subject)},function(e){if(/.*? \u9884\u8ba2\u53d6\u6d88\u53f7\u7801/.test(e.subject)){var t={};t.cancellationInformation="\u53d6\u6d88\u4fe1\u606f",t.rateInformation="\u8d39\u7528\u4fe1\u606f",/\* \u53d6\u6d88\u53f7\u7801\uff1a/.test(e.plain)?(t.version="html",t.reservationCancellationTitle="\u9884\u8ba2\u53d6\u6d88\u5bbe\u5ba2\uff1a",t.reservationCancellation="\u9884\u8ba2\u53d6\u6d88",t.reservationCancelled="* \u5df2\u53d6\u6d88\u9884\u8ba2\uff1a",t.checkin="* \u767b\u8bb0\u5165\u4f4f\uff1a",t.checkout="* \u9000\u623f\uff1a",t.hotelName="* \u60a8\u7684\u9152\u5e97\uff1a",t.phone="\u7535\u8bdd\uff1a",t.fax="\u4f20\u771f\uff1a"):(t.version="txt",t.name="\u5c0a\u656c\u7684",t.reservationId="\u5df2\u53d6\u6d88\u9884\u8ba2\uff1a",t.checkin="\u767b\u8bb0\u5165\u4f4f\uff1a",t.checkout="\u9000\u623f\uff1a",t.hotelName="\u60a8\u7684\u9152\u5e97\uff1a");var r="zh_Hans_CN",n=loadHelper("marriott-cancellation-skeleton.js");return n(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/865","SG0184eb4e"),new ReverseTemplate("marriott-confirmation-de",function(e){return/Reservierungsbest\xe4tigung/.test(e.subject)},function(e){if(/Reservierungsbest\xe4tigung/.test(e.subject)){var t="de_DE",r={};r.emailTitelConfirmation=/Reservierungsbest\xe4tigung/,r.reservationId=/Reservierungsbest\xe4tigung\: (.+)/,r.checkInDate=/Anreise/,r.checkInTime=/Ankunftszeit/,r.checkOutDate=/Abreise/,r.checkOutTime=/Check-Out/,r.guestName=/Sehr geehrte\(r\) (.+)\,/,r.modifyUrl=/\xc4nderungen an der Reservierung vornehmen/,r.cancelUrl=/Ihre Buchung stornieren/,r.price=/Gesamtkosten f\xfcr den Aufenthalt/,r.hotelInfo=/Bitte pr\xfcfen Sie die Details Ihrer Reservierung|Wir haben Ihre Reservierung storniert/,r.emailTitelCancelConfirmation=/Reservierungsstornierung/,r.cancelReservationId=/Reservierung storniert[^.]/,r.cancelPrice=/Preisinformationen/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/866","SG74e50043"),new ReverseTemplate("marriott-confirmation-en",function(e){return/.*Reservation Confirmation/.test(e.subject)},function(e){if(/Reservation Confirmation/.test(e.subject)){var t="en_US",r={};if(/^Reservation Confirmation \#/.test(e.subject)){r.emailTitelConfirmation=/Reservation Confirmation/,r.reservationId=/Reservation Confirmation\: (.+)/,r.checkInDate=/CHECK-IN DATE/,r.checkInTime=/CHECK-IN TIME/,r.checkOutDate=/CHECK-OUT DATE/,r.checkOutTime=/CHECK-OUT TIME/,r.guestName=/(?:Dear (.+)\,|Hello (.+))/,r.modifyUrl=/Modify your reservation/,r.cancelUrl=/Cancel your reservation/,r.price=/Total for stay/,r.hotelInfo=/Please review your reservation details|We have canceled your reservation/,r.emailTitelCancelConfirmation=/Reservation Cancellation/,r.cancelReservationId=/RESERVATION CANCELLED/,r.cancelPrice=/Rate Information/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}/\* Confirmation Number:/.test(e.plain)?(r.version="html",r.confirmationNumber="* Confirmation Number:",r.checkin="* Check-in:",r.checkout="* Check-out:",r.modifyReservationUrl="Modify or Cancel reservation <",r.hotelUrl="View hotel website <",r.summary="Summary of Room Charges",r.hotelName="* Your hotel:",r.name="* Guest name:",r.fax="Fax:",r.reservationDetails="Reservation Details",r.totalPrice="Total for stay",r.priceCurrency="Cost per night per room",r.phone="Phone:"):(r.version="txt",r.planningYourTrip="Planning Your Trip",r.confirmationNumber="Confirmation Number:",r.checkin="Check-in:",r.checkout="Check-out:",r.guestName="Guest name:",r.hotelUrl="View hotel website",r.modifyUrl="To modify or cancel this reservation",r.reservationDetails="Reservation Details",r.totalPrice="Total for stay",r.priceCurrency="Cost per night per room",r.phone="Phone:");var i=loadHelper("marriott-confirmation-skeleton.js");return i(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/867","SG2cc34379"),new ReverseTemplate("marriott-confirmation-jp",function(e){return/\u306e\u3054\u4e88\u7d04\u306e\u78ba\u8a8d/.test(e.subject)},function(e){if(/\u306e\u3054\u4e88\u7d04\u306e\u78ba\u8a8d/.test(e.subject)){var t="ja_JP",r={};r.emailTitelConfirmation=/\u4e88\u7d04\u306e\u78ba\u8a8d/,r.reservationId=/\u3054\u4e88\u7d04\u306e\u78ba\u8a8d\uff1a\s+(.+)/,r.checkInDate=/\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u65e5/,r.checkInTime=/\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u6642\u523b/,r.checkOutDate=/\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u65e5/,r.checkOutTime=/\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u6642\u523b/,r.guestName=/(.+)\s+\u69d8/,r.modifyUrl=/\u3054\u4e88\u7d04\u306e\u5909\u66f4/,r.cancelUrl=/\u3054\u4e88\u7d04\u306e\u30ad\u30e3\u30f3\u30bb\u30eb/,r.price=/\u5bbf\u6cca\u306e\u5408\u8a08\u30dd\u30a4\u30f3\u30c8/,r.hotelInfo=/\u3054\u4e88\u7d04\u306e\u8a73\u7d30|\u304a\u5ba2\u69d8\u306e\u3054\u6ede\u5728\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f/,r.emailTitelCancelConfirmation=/\u4e88\u7d04\u306e\u30ad\u30e3\u30f3\u30bb\u30eb/,r.cancelReservationId=/\u30ad\u30e3\u30f3\u30bb\u30eb\u6e08\u307f\u306e\u3054\u4e88\u7d04/,r.cancelPrice=/\u6599\u91d1\u60c5\u5831/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/868","SG5ab3af50"),new ReverseTemplate("marriott-confirmation-zh",function(e){return/.*? \u9884\u8ba2\u786e\u8ba4\u53f7\u7801/.test(e.subject)},function(e){if(/.*? \u9884\u8ba2\u786e\u8ba4\u53f7\u7801/.test(e.subject)){var t={},r="zh_Hans_CN";t.reservationDetails="\u9884\u8ba2\u8be6\u60c5",t.totalPrice="\u603b\u4f4f\u5bbf\u8d39",t.priceCurrency="\u6bcf\u623f\u6bcf\u665a\u8d39\u7528",t.phone="\u7535\u8bdd\uff1a",/\* \u786e\u8ba4\u53f7\u7801\uff1a/.test(e.plain)?(t.version="html",t.confirmationNumber="* \u786e\u8ba4\u53f7\u7801\uff1a",t.checkin="\u767b\u8bb0\u5165\u4f4f\uff1a",t.checkout="\u9000\u623f\uff1a",t.modifyReservationUrl="\u66f4\u6539\u6216\u53d6\u6d88\u9884\u8ba2 <",t.hotelUrl="\u6d4f\u89c8\u9152\u5e97\u7f51\u7ad9 <",t.summary="\u5ba2\u623f\u8d39\u7528\u6458\u8981",t.hotelName="* \u60a8\u7684\u9152\u5e97\uff1a",t.name="* \u5bbe\u5ba2\u59d3\u540d\uff1a",t.fax="\u4f20\u771f\uff1a"):(t.version="txt",t.planningYourTrip="\u8ba1\u5212\u60a8\u7684\u65c5\u884c",t.confirmationNumber="\u786e\u8ba4\u53f7\u7801\uff1a",t.checkin="\u767b\u8bb0\u5165\u4f4f\uff1a",t.checkout="\u9000\u623f\uff1a",t.guestName="\u5bbe\u5ba2\u59d3\u540d\uff1a",t.hotelUrl="\u6d4f\u89c8\u9152\u5e97\u7f51\u7ad9",t.modifyUrl="\u5982\u8981\u4fee\u6539\u6216\u53d6\u6d88\u9884\u8ba2");var n=loadHelper("marriott-confirmation-skeleton.js");return n(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/869","SG728a7ee7"),new ReverseTemplate("marriott-reminder-de",function(e){return/^Erinnerung/.test(e.subject)},function(e){if(/^Erinnerung/.test(e.subject)){var t="de_DE",r={};r.emailTitelConfirmation=/Reservierungsbest\xe4tigung/,r.reservationId=/Reservierungsbest\xe4tigung\: (.+)/,r.checkInDate=/Anreise/,r.checkInTime=/Ankunftszeit/,r.checkOutDate=/Abreise/,r.checkOutTime=/Check-Out/,r.guestName=/Sehr geehrte\(r\) (.+)\,/,r.modifyUrl=/\xc4nderungen an der Reservierung vornehmen/,r.cancelUrl=/Ihre Buchung stornieren/,r.price=/Gesamtkosten f\xfcr den Aufenthalt/,r.hotelInfo=/Bitte pr\xfcfen Sie die Details Ihrer Reservierung|Wir haben Ihre Reservierung storniert/,r.hotelAddress=/Travel Brilliantly/,r.emailTitelCancelConfirmation=/Reservierungsstornierung/,r.cancelReservationId=/Reservierung storniert[^.]/,r.cancelPrice=/Preisinformationen/,r.reminderReservationId=/Reservierungsbest\xe4tigung/,r.reminderHotelName=/Ihr Zimmer mit der Reservierung.*f\xfcr das (.*) steht in K\xfcrze bereit\./;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/870","SG77cf38c8"),new ReverseTemplate("marriott-reminder-en",function(e){return/^Your stay \+ things to do/.test(e.subject)},function(e){if(/^Your stay \+ things to do/.test(e.subject)){var t="en_US",r={};r.emailTitelConfirmation=/Reservation Confirmation/,r.reservationId=/Reservation Confirmation\: (.+)/,r.checkInDate=/CHECK-IN DATE/,r.checkInTime=/CHECK-IN TIME/,r.checkOutDate=/CHECK-OUT DATE/,r.checkOutTime=/CHECK-OUT TIME/,r.guestName=/(?:Dear (.+)\,|Hello (.+))/,r.modifyUrl=/Modify your reservation/,r.cancelUrl=/Cancel your reservation/,r.price=/Total for stay/,r.hotelInfo=/Please review your reservation details|We have canceled your reservation/,r.hotelAddress=/Travel Brilliantly/,r.emailTitelCancelConfirmation=/Reservation Cancellation/,r.cancelReservationId=/RESERVATION CANCELLED/,r.cancelPrice=/Rate Information/,r.reminderReservationId=/RESERVATION CONFIRMATION/,r.reminderHotelName=/Your reservation.*at the (.*) begins soon\./,r.reminderHotelName_2=/Your stay \+ things to do\: (.*) \u2013 begins/,r.reminderHotelName_3=/See you soon,/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/871","SG45d7056a"),new ReverseTemplate("marriott-reminder-jp",function(e){return/\u3054\u6ce8\u610f/.test(e.subject)},function(e){if(/\u3054\u6ce8\u610f/.test(e.subject)){var t="ja_JP",r={};r.emailTitelConfirmation=/\u4e88\u7d04\u306e\u78ba\u8a8d/,r.reservationId=/\u3054\u4e88\u7d04\u306e\u78ba\u8a8d\uff1a\s+(.+)/,r.checkInDate=/\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u65e5/,r.checkInTime=/\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u6642\u523b/,r.checkOutDate=/\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u65e5/,r.checkOutTime=/\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u6642\u523b/,r.guestName=/(.+)\s+\u69d8/,r.modifyUrl=/\u3054\u4e88\u7d04\u306e\u5909\u66f4/,r.cancelUrl=/\u3054\u4e88\u7d04\u306e\u30ad\u30e3\u30f3\u30bb\u30eb/,r.price=/\u5bbf\u6cca\u306e\u5408\u8a08\u30dd\u30a4\u30f3\u30c8/,r.hotelInfo=/\u3054\u4e88\u7d04\u306e\u8a73\u7d30|\u304a\u5ba2\u69d8\u306e\u3054\u6ede\u5728\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f/,r.hotelAddress=/\u304d\u3089\u3081\u304f\u65c5\u3092/,r.emailTitelCancelConfirmation=/\u4e88\u7d04\u306e\u30ad\u30e3\u30f3\u30bb\u30eb/,r.cancelReservationId=/\u30ad\u30e3\u30f3\u30bb\u30eb\u6e08\u307f\u306e\u3054\u4e88\u7d04/,r.cancelPrice=/\u6599\u91d1\u60c5\u5831/,r.reminderReservationId=/\u3054\u4e88\u7d04\u306e\u78ba\u8a8d/,r.reminderHotelName=/\u304a\u5ba2\u3055\u307e\u306e(.*)\u306e\u3054\u4e88\u7d04.*\u306f\u307e\u3082\u306a\u304f\u59cb\u307e\u308a\u307e\u3059/;var n=loadHelper("marriott-skeleton-S19.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/861/872","SGae4c4a96")]);
