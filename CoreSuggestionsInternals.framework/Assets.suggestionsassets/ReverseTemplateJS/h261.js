// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,r){var a=Scanner.fromMessage(e);a.setLocale(t);var n,o,c,i,s,p,g,h,m,u,d,l;return n=a.getSpan().innerCapture(regExpFormatted(/\1\s+(.*)\,/,r.name),1),l=a.getSpan().innerCapture(r.reg),c=l.$hotelName,h=a.getDetachedSpan(""+l.$arrival).innerDate(),m=a.getDetachedSpan(""+l.$departure).innerDate(),ASSERT(n,c,h)?[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:n,email:o},totalPrice:u,priceCurrency:d,checkinTime:h,checkoutTime:m,reservationStatus:"http://schema.org/ReservationCancelled",reservationId:g,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:c,telephone:i,url:s,address:p}}]:CONTINUE}}).call();
