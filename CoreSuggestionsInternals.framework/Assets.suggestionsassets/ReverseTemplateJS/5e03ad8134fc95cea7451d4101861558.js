// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("tix.nl-flight-confirmation-nl",function(e){return/Uw E-ticket voor uw/.test(e.subject)||/Bevestiging van uw vlucht op Tix.nl/.test(e.subject)},function(e){if(/Uw E-ticket voor uw/.test(e.subject)||/Bevestiging van uw vlucht op Tix.nl/.test(e.subject)){var t="nl_NL",r={};r.underPersonBlock_prefix="Passagiersgegevens",r.underPersonFirstName_prefix="eerste voornaam",r.underPersonLastName_prefix="achternaam",r.reservationId_prefix=/Uw reserveringsnummer(?: is|\:)/,r.totalPrice_prefix="Totaal",r.checkinUrl_prefix="Online inchecken",r.reservationForBlock_prefix=/(Uw vluchtgegevens|Controleer de vluchtdetails)/,r.seatType_prefix="Klasse:",r.isReservationChange="Uw vluchtdetails zijn gewijzigd.",r.isETicket=/E-ticket/,r.underPersonNameETicket_prefix="reizigers",r.ticketNumber_prefix="E-ticket nummers";var i=loadHelper("tix.nl-flight-confirmation-skeleton.js");return i(e,t,r)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1179/1180","SG2f90c396")]);
