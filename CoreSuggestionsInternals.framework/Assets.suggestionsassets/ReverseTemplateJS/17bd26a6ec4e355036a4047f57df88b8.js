// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("ehotel.com-de",function(e){return/Ihre ehotel Buchung/.test(e.subject)},function(e){var n="de_DE",r={};r.emailTitelConfirmation=/Ihre ehotel Buchung/,r.guestName="Reisende(r):",r.checkIn="Anreise:",r.checkOut="Abreise:",r.totalPrice="Gesamtpreis:",r.reservationId="Ihre Buchungsnummer:",r.hotelInfo="Wir freuen uns, Ihnen folgende Reservierung best\xe4tigen zu k\xf6nnen";var t=loadHelper("emailToJsonLd_skeleton.js");return t(e,n,r)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1062/1063","SG1d919825")]);
