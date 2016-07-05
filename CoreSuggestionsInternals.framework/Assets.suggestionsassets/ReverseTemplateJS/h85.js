// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,r,t){var a=loadHelper("hertz.com-microdata-parser.js"),n=a(e);if(n)return n;var p=Scanner.fromMessage(e);p.setLocale(r);var o,i,s,c,d,m,g,u,h,f,l,S,C,v,y,x,$,E,F,k,A,T;if(o=p.getSpan().innerCapture(/(.*)/,1),i=p.getSpan().innerCapture(regExpFormatted(/\1\s+(.*)/,t.reservationId),1),m=p.getSpan().innerCapture(regExpFormatted(/\1\s+($<totalPrice>[\d,.]+)\s+($<priceCurrency>[^\n\d,.]+)/,t.price)),g=m.$totalPrice,u=m.$priceCurrency,F=p.getSpan().innerCapture(regExpFormatted(/\1\s+($<date>.*)\s+\2\s+($<time>.*)/,t.pickupTime,t.timeSeparator)),F=p.getDetachedSpan((""+F.$date).replace(/\,/g,"")+" "+F.$time).innerDate(),y=p.getSpan().innerCapture(regExpFormatted(/\1\s+($<date>.*)\s+\2\s+($<time>.*)/,t.dropoffTime,t.timeSeparator)),y=p.getDetachedSpan((""+y.$date).replace(/\,/g,"")+" "+y.$time).innerDate(),$=p.getSpan().innerCapture(regExpFormatted(/\1([\S\s]*)\2/,t.pickupAndDropoffAddress,t.officeType),1),$.inner(t.pickupAddress).exists()?(A=$.innerCapture(regExpFormatted(/([\S\s]*)\1/,t.pickupAddress),1),C=$.innerCapture(regExpFormatted(/\1\s+(.*)/,t.dropoffAddress),1),$=$.innerCapture(regExpFormatted(/\1\s+(.*)/,t.pickupAddress),1),T=p.getSpan().innerCapture(regExpFormatted(/\1([\S\s]*)\2/,C,t.officeType),1),C=""+A+" "+C+" "+T,$=""+A+" "+$+" "+T):C=$,E=v=p.getSpan().innerCapture(regExpFormatted(/\1\s+(.*)/,t.phoneNumber),1),ASSERT(o,i,$,F)){var P={"@context":"http://schema.org","@type":"http://schema.org/RentalCarReservation",totalPrice:g,priceCurrency:u,reservationId:i,reservationStatus:"http://schema.org/Reservation"+(k||"Confirmed"),checkinUrl:s,modifyReservationUrl:c,cancelReservationUrl:d,underName:{"@type":"http://schema.org/Person",name:o},provider:{"@type":"http://schema.org/Organization",name:"Hertz"},pickupTime:F,pickupLocation:{"@type":"http://schema.org/Place",name:x,telephone:E,address:$.trim()}};return not(h)||(P.reservationFor={"@type":"http://schema.org/Car",brand:{"@type":"http://schema.org/Organization",name:h},license:f,color:l}),not(y)||not(C)||(P.dropoffTime=y,P.dropoffLocation={"@type":"http://schema.org/Place",name:S,telephone:v,address:C.trim()}),[P]}}}).call();
