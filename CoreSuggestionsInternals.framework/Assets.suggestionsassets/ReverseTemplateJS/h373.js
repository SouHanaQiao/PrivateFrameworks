// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var a=Scanner.fromMessage(e);a.setLocale(t);var r,g,i,o,s,p,c,x,u,d,C,m,h,l,D,T,S,f;if(!n.emailTitelConfirmation.test(e.subject)&&!n.emailTitelCancelConfirmation.test(e.subject))return CONTINUE;if(!n.reservationId.test(a.getSpan()))return CONTINUE;s=a.getSpan().nextRegExp(n.reservationId).tagContents().innerCapture(n.reservationId,1),r=a.getSpan().nextRegExp(n.guestName).tagContents().innerCapture(n.guestName,1),u=getFuzzyDate(a.getSpan().nextRegExp(n.checkInDate).nextAnyTag("td").tagContents()),m=getFuzzyDate(a.getSpan().nextRegExp(n.checkOutDate).nextAnyTag("td").tagContents()),0!==(""+u).length&&0!==(""+m).length||(x=a.getSpan().nextRegExp(n.checkOutDate).parentAnyTag("td").tagContents().nextDate(),c=a.getSpan().nextRegExp(n.checkOutDate).parentAnyTag("td").tagContents().nextDate().nextDate(),C=a.getSpan().nextRegExp(n.checkOutDate).parentAnyTag("td").tagContents().nextDate().nextDate().nextDate(),d=a.getSpan().nextRegExp(n.checkOutDate).parentAnyTag("td").tagContents().nextDate().nextDate().nextDate().nextDate(),u=getFuzzyDate(a.getDetachedSpan(x+" "+c).innerDate()),m=getFuzzyDate(a.getDetachedSpan(C+" "+d).innerDate()));var y=a.getSpan().nextRegExp(n.priceVersion1).previousTag("td4").tagContents();if(not(y))var y=a.getSpan().nextRegExp(n.priceVersion2).previousTag("td3").tagContents();if(i=y.innerCapture(/([\d,.]+)/,1),o=y.innerCapture(/([^\d,.]+)/,1).trim(),l=a.getSpan().nextAnyTag("td").nextAnyTag("td").tagContents(),T=a.getSpan().nextTag("td3").nextTag("td3").tagContents(),(""+T).indexOf(n.phone)&&(T=T.split(n.phone)[0].trim()),D=a.getSpan().nextPhoneNumber(),n.emailTitelConfirmation.test(e.subject)){if(!ASSERT(r,s,u,m,T))return CONTINUE;p="Confirmed"}if(n.emailTitelCancelConfirmation.test(e.subject)){if(!ASSERT(r,s,u,m,T))return CONTINUE;p="Cancelled"}return[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:r,email:g},totalPrice:i,priceCurrency:o,checkinTime:u,checkoutTime:m,modifyReservationUrl:S,cancelReservationUrl:f,reservationStatus:"http://schema.org/Reservation"+(p||"Confirmed"),reservationId:s,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:l,url:h,telephone:D,address:T}}]}}).call();
