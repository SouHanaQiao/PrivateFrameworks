// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){if(!e||!t||!n)return CONTINUE;var r=Scanner.fromMessage(e);r.setLocale(t);var a,o,g,i,l,p,m,d,s,c,x,h,u,E,T,R;return g=r.getSpan().nextRegExp(regExpFormatted(/\1/,n.bookingNumber)).parentTag("table3"),m=g.innerRegExp(regExpFormatted(/\1/,n.bookingNumber)).nextTag("td3").tagContents(),c=getFuzzyDate(g.innerRegExp(regExpFormatted(/\1/,n.checkin)).nextTag("td3")),x=getFuzzyDate(g.innerRegExp(regExpFormatted(/\1/,n.checkout)).nextTag("td3")),i=g.nextTag("table4").innerRegExp(regExpFormatted(/\1/,n.totalPrice)).nextTag("td4").tagContents(),l=i.innerCapture(/([\d,.]+)/,1),p=i.innerCapture(/([^\d,.]+)/,1).trim(),g=g.innerRegExp(regExpFormatted(/\1/,n.bookedBy)).nextTag("td3").tagContents().innerCapture(/($<name>.*) \(($<email>.*)\)/),a=g?g.$name:null,o=g?g.$email:null,h=r.getSpan().nextRegExp(regExpFormatted(/\1/,n.reservationCancelled)).nextTag("table3").innerTag("td3").nextTag("td3").tagContents(),g=h.innerCapture(regExpFormatted(concatRegExp(/($<hotelName>.*?) <($<hotelUrl>.*)>\s+/,/($<hotelAddress>[^]+)/,/\1 ($<hotelPhone>.*)/),n.phone)),g&&(E=g.$hotelName.trim(),u=g.$hotelUrl,R=g.$hotelAddress.trim(),T=g.$hotelPhone.trim()),ASSERT(c,x,R)?[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:a,email:o},totalPrice:l,priceCurrency:p,checkinTime:c,checkoutTime:x,modifyReservationUrl:d,cancelReservationUrl:s,reservationStatus:"http://schema.org/ReservationCancelled",reservationId:m,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:E,url:u,telephone:T,address:R}}]:void 0}}).call();
