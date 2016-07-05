// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var a=Scanner.fromMessage(e);a.setLocale(t);var r,i,o,s,p,g,c,l,u,m,C,d,T,f;if(!n.emailTitelConfirmation.test(e.subject)&&!n.emailTitelCancelConfirmation.test(e.subject))return CONTINUE;p=a.getSpan().innerCapture(n.reservationId,1),r=a.getSpan().nextRegExp(n.guest).parentTag("td3").tagContents().innerCapture(/.+\n.*\n(.+)/,1),i=a.getSpan().nextRegExp(n.guest).parentTag("td3").tagContents().nextLink();var h=a.getSpan().nextRegExp(n.dates).parentAnyTag("td").tagContents();c=h.innerDate(),l=h.lastInnerDate();var x=a.getSpan().innerCapture(n.price,1);o=x.innerCapture(/([\d,.]+)/,1),s=x.innerCapture(/([^\d,.]+)/,1).trim(),m=a.getSpan().nextText(n.hotelName).parentAnyTag("td").tagContents().innerCapture(/.+\n(.+)/,1);var S=a.getSpan().nextRegExp(n.hotelInfo).parentAnyTag("td").tagContents();if(d=S.innerAddress(),C=S.nextPhoneNumber(),f=a.getSpan().nextRegExp(n.cancelUrl).nextLink(),n.emailTitelConfirmation.test(e.subject)){if(!ASSERT(r,p,c,l,d))return CONTINUE;g="Confirmed"}if(n.emailTitelCancelConfirmation.test(e.subject)){if(p=a.getSpan().innerCapture(n.cancelReservationId,1),!ASSERT(r,p,c,l,d))return CONTINUE;g="Cancelled"}return[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:r,email:i},totalPrice:o,priceCurrency:s,checkinTime:c,checkoutTime:l,modifyReservationUrl:T,cancelReservationUrl:f,reservationStatus:"http://schema.org/Reservation"+(g||"Confirmed"),reservationId:p,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:m,url:u,telephone:C,address:d}}]}}).call();
