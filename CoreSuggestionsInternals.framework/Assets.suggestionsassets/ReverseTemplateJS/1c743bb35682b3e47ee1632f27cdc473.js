// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("lastminute.com-flight-confirmation-de",function(e){return/^Anmeldung\/Auftrag/.test(e.subject)},function(e){if(!/^Anmeldung\/Auftrag/.test(e.subject))return CONTINUE;var r="de_DE",t={};t.flightDetailsHeader="Details",t.fromPrefix="Ab:",t.flightNumberPrefix="Flugnummer",t.airlineNamePrefix="Durchgef\xfchrt von",t.toPrefix="An:",t.reservationIdPrefix="Flugreferenznummer",t.pricePrefix="Gesamtpreis",t.passengerDetailsHeader="Ihre Daten",t.passengerNamePrefix="Reisende",t.passengerEmailPrefix="E-mail";var i=loadHelper("lastminute.com-flight-confirmation_de.js");return i(e,r,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1137/1142","SGc30db027")]);
