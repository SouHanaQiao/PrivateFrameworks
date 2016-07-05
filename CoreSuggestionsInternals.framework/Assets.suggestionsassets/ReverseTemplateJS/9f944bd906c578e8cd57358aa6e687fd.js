// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("cathaypacific.com-itinerary-fr",function(e){return!0},function(e){if(/WWW\.CATHAYPACIFIC\.COM\/FR/.test(e.plain)){var t="fr_FR",n={};n.name=/(.*)\s+TICKET\:/,n.reservationId="BOOKING REF",n.price="INVOICE TOTAL";var r=loadHelper("cathaypacific.com-itinerary-alt-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/398","SG9578d4cb"),new ReverseTemplate("klm.com-eticket-de",function(e){return/^KLM e-Ticket/.test(e.subject)},function(e){if(/^KLM e-Ticket/.test(e.subject)&&/Buchungscode:/.test(e.plain)){var t="de_DE",n={};n.confirmationCode="Buchungscode:",n.confirmationCodeRegex=/Buchungscode: (\w+)/,n.passengerInfo="Informationen f\xfcr Flugg\xe4ste",n.checkinUrl="Internet-Check-in",n.itinerary="Flugdaten",n.totalPrice="Gesamtsumme:";var r=loadHelper("klm-eticket-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/475/489","SG92e373e5"),new ReverseTemplate("klm.com-eticket-en",function(e){return/^KLM e-Ticket/.test(e.subject)},function(e){if(/^KLM e-Ticket/.test(e.subject)&&/Booking code:/.test(e.plain)){var t="en_US",n={};n.confirmationCode="Booking code:",n.confirmationCodeRegex=/Booking code: (\w+)/,n.passengerInfo="Passenger Information",n.checkinUrl="Internet check-in",n.itinerary="Itinerary Information",n.totalPrice="Total amount:";var r=loadHelper("klm-eticket-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/475/490","SGcf1da544"),new ReverseTemplate("klm.com-eticket-es",function(e){return/^KLM e-Ticket/.test(e.subject)},function(e){if(/^KLM e-Ticket/.test(e.subject)){var t="es_ES",n={};n.confirmationCode="C\xf3digo de reserva:",n.confirmationCodeRegex=/C\xf3digo de reserva: (\w+)/,n.passengerInfo="Informacion del pasajero",n.checkinUrl="Facturaci\xf3n por Internet",n.itinerary="Informacion de itinerario",n.totalPrice="Importo totale:";var r=loadHelper("klm-eticket-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/475/491","SG554e0f75"),new ReverseTemplate("klm.com-eticket-it",function(e){return/^KLM e-Ticket/.test(e.subject)},function(e){if(/^KLM e-Ticket/.test(e.subject)){var t="it_IT",n={};n.confirmationCode="Prenotazione code:",n.confirmationCodeRegex=/Prenotazione code: (\w+)/,n.passengerInfo="Informazioni del passeggero",n.checkinUrl="Check in via Internet",n.itinerary="Informazioni sul percorso",n.totalPrice="Importo totale:";var r=loadHelper("klm-eticket-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/475/492","SG85fa5815"),new ReverseTemplate("klm.com-eticket-nl",function(e){return/^KLM e-Ticket/.test(e.subject)},function(e){if(/^KLM e-Ticket/.test(e.subject)){var t="nl_NL",n={};n.confirmationCode="Boekingscode:",n.confirmationCodeRegex=/Boekingscode: (\w+)/,n.passengerInfo="PassagierInformatie",n.checkinUrl="Internet check-in",n.itinerary="Reisinformatie",n.totalPrice="Totaalbedrag:";var r=loadHelper("klm-eticket-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/475/493","SGe8db79f7")]);
