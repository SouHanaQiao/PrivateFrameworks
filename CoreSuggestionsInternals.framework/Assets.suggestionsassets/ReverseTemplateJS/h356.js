// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var a=Scanner.fromMessage(e);a.setLocale(t);var r,i,g,o,s,c,p,m,u,x,d,C,l,T,h,S,f,y;if(!n.emailTitelConfirmation.test(e.subject)&&!n.emailTitelCancelConfirmation.test(e.subject))return CONTINUE;s=a.getSpan().nextRegExp(n.reservationId).nextAnyTag("td").tagContents(),r=a.getSpan().nextRegExp(n.guestName).nextAnyTag("td").tagContents(),m=a.getSpan().nextRegExp(n.checkInDate).nextAnyTag("td").tagContents(),d=a.getSpan().nextRegExp(n.checkOutDate).nextAnyTag("td").tagContents(),p=a.getSpan().nextRegExp(n.checkInTime).nextAnyTag("td").tagContents().nextDate(),x=a.getSpan().nextRegExp(n.checkOutTime).nextAnyTag("td").tagContents().nextDate(),u=getFuzzyDate(a.getDetachedSpan(m+" "+p).innerDate()),C=getFuzzyDate(a.getDetachedSpan(d+" "+x).innerDate());var R=a.getSpan().nextRegExp(n.price).nextAnyTag("td").tagContents();g=R.innerCapture(/([\d,.]+)/,1),o=R.innerCapture(/([^\d,.]+)/,1).trim();var v=a.getSpan().nextRegExp(n.hotelName).nextAnyTag("td").tagContents();if(T=v.innerCapture(/(.+)/,1),S=v.innerAddress(),n.emailTitelConfirmation.test(e.subject)){if(!ASSERT(r,s,u,C,S))return CONTINUE;c="Confirmed"}if(n.emailTitelCancelConfirmation.test(e.subject)){if(r=a.getSpan().innerCapture(n.cancelGuestName,1),s=a.getSpan().innerCapture(n.cancelReservationId,1),!ASSERT(r,s,u,S))return CONTINUE;c="Cancelled"}return[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:r,email:i},totalPrice:g,priceCurrency:o,checkinTime:u,checkoutTime:C,modifyReservationUrl:f,cancelReservationUrl:y,reservationStatus:"http://schema.org/Reservation"+(c||"Confirmed"),reservationId:s,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:T,url:l,telephone:h,address:S}}]}}).call();
