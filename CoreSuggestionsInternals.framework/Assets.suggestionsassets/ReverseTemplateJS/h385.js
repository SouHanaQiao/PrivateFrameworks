// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,a,r){if(!e||!t||!a)return CONTINUE;var n=Scanner.fromMessage(e);n.setLocale(t);var s,o,l,c,i,d,p;return i=loadHelper("address.js")(a,n),d=loadHelper("name.js")(e.subject,a,n),o=loadHelper("starttime.js")(t,a,n),l=loadHelper("endtime.js")(t,a,n),ASSERT(d,o)?[{"@context":"http://schema.org","@type":"http://schema.org/EventReservation",reservationStatus:"http://schema.org/Reservation"+(p||"Pending"),reservationFor:{url:c,"@type":"http://schema.org/SocialEvent",name:d,startDate:o,endDate:l,location:valid(s)?{"@type":"http://schema.org/Place",name:s,address:i}:i}}]:void 0}}).call();
