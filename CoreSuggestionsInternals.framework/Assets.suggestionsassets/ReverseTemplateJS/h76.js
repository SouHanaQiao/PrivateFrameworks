// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,r){var a=Scanner.fromMessage(e);a.setLocale(t);var n=a.getSpan().innerCapture(regExpFormatted(/\1(.*),/,r.namePrefix),1).trim(),o=a.getSpan().nextText(r.pickUpDatePrefix).nextDate(),p=a.getSpan().innerCapture(regExpFormatted(/\1(.*)/,r.reservationIdPrefix),1).trim();return ASSERT(p,n,o)?[{"@context":"http://schema.org","@type":"http://schema.org/RentalCarReservation",reservationId:p,reservationStatus:"http://schema.org/ReservationCancelled",underName:{"@type":"http://schema.org/Person",name:n},provider:{"@type":"http://schema.org/Organization",name:"Enterprise"},pickupLocation:{"@type":"http://schema.org/Place"},dropoffLocation:{"@type":"http://schema.org/Place"},pickupTime:o}]:void 0}}).call();
