// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("lastminute.com-hotel-confirmation-de",function(e){return/^Ihre Buchungsbest\xe4tigung/.test(e.subject)},function(e){if(!/^Ihre Buchungsbest\xe4tigung/.test(e.subject))return CONTINUE;var t="de_DE",r={};r.hotelNamePrefix="Ihre Buchung:",r.hotelPhonePrefix="Tel.:",r.hotelDescriptionHeader="Hotelbeschreibung",r.nightsIntervalPrefix="Reisezeitraum",r.reservationIdPrefix="Buchungsnr.",r.emailPrefix="E-Mail",r.phoneNumberPrefix="Telefon",r.roomPrefix="Zimmer1",r.guestNamePrefix="Kontakt:",r.pricePrefix="Gesamtpreis";var i=loadHelper("lastminute.com-hotel-confirmation-skeleton-de.js");return i(e,t,r)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1137/1148","SG0afa7141")]);
