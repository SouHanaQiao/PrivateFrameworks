// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("hrs.de-hotel-cancellation-de",function(e){return/^Stornierung Ihrer/.test(e.subject)},function(e){if(!/^Stornierung Ihrer/.test(e.subject))return CONTINUE;var r="de_DE",n={};n.modifyReservationUrlPrefix="\xc4ndern & Stornieren",n.hotelInformationHeader="Ihr ausgew\xe4hltes Hotel",n.phoneNumberAndFaxPrefix="Telefon | Fax",n.checkInTimePrefix="Fr\xfchester Check-In (Ortszeit)",n.bookingInformationHeader="Ihre Stornierungsdaten",n.bookingNumberPrefix="Buchungsnummer",n.guestNamePrefix="Anreisende G\xe4ste",n.stayIntervalPrefix="Anreise / Abreise",n.totalPricePrefix="Gesamtpreis";var t=loadHelper("hrs.de-hotel-cancellation-skeleton.js");return t(e,r,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1122/1123","SGfc6a6937"),new ReverseTemplate("hrs.de-hotel-confirmation-de",function(e){return/^Best\xe4tigung Ihrer Hotel-Buchung/.test(e.subject)},function(e){if(!/^Best\xe4tigung Ihrer Hotel-Buchung/.test(e.subject))return CONTINUE;var r="de_DE",n={};n.modifyReservationUrlPrefix="\xc4ndern & Stornieren",n.hotelInformationHeader="Ihr ausgew\xe4hltes Hotel",n.phoneNumberAndFaxPrefix="Telefon | Fax",n.checkInTimePrefix="Fr\xfchester Check-In (Ortszeit)",n.bookingInformationHeader="Ihre Buchungsdaten",n.bookingNumberPrefix="Buchungsnummer",n.guestNamePrefix="Anreisende G\xe4ste",n.stayIntervalPrefix="Anreise / Abreise",n.totalPricePrefix="Gesamtpreis";var t=loadHelper("hrs.de-hotel-confirmation-skeleton.js");return t(e,r,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1122/1124","SG3dc38fb2"),new ReverseTemplate("hrs.de-hotel-reservation-change-de",function(e){return/^\xc4nderung Ihrer/.test(e.subject)},function(e){if(!/^\xc4nderung Ihrer/.test(e.subject))return CONTINUE;var r="de_DE",n={};n.modifyReservationUrlPrefix="\xc4ndern & Stornieren",n.hotelInformationHeader="Ihr ausgew\xe4hltes Hotel",n.phoneNumberAndFaxPrefix="Telefon | Fax",n.checkInTimePrefix="Fr\xfchester Check-In (Ortszeit)",n.bookingInformationHeader="Ihre Buchungsdaten",n.bookingNumberPrefix="Buchungsnummer",n.guestNamePrefix="Anreisende G\xe4ste",n.stayIntervalPrefix="Anreise / Abreise",n.totalPricePrefix="Gesamtpreis";var t=loadHelper("hrs.de-hotel-reservation-change-skeleton.js");return t(e,r,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1122/1125","SG2c9f9ca0")]);
