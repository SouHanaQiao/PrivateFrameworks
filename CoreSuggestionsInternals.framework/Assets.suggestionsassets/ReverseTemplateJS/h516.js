// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){if(!e||!t||!n)return CONTINUE;var r=Scanner.fromMessage(e);r.setLocale(t);var a,s,p,o,i,g,d,m,h,l,u,x;if(o=r.getSpan().nextText(n.person+"\uff1a").collapseToEnd().withEnd(r.getSpan().nextText(n.person).nextText(n.name).getStart()).trim(),s=r.getSpan().innerCapture(regExpFormatted(/\1.(\w+)/,n.number),1),p=r.getSpan().innerCapture(regExpFormatted(/\1.(.+)/,n.restaurant),1).trim(),d=r.getSpan().nextText(n.phone).nextPhoneNumber().innerCapture(/([\d\s-,\.]+)/,1).trim(),m=r.getSpan().innerCapture(n.address,1).innerAddress(),m.exists()||(m=r.getSpan().innerCapture(n.address,1)),a=r.getSpan().innerCapture(regExpFormatted(/\1.(.+)/,n.underName),1),l=r.getSpan().nextText(n.cancel).nextLink(),h=l,u=r.getSpan().nextText(n.date),x=r.getSpan().withInterval(u.previousText("\n").getEnd(),u.nextText("\n").getStart()).allInnerDates(),x.length>0){var S,c;x=r.getSpan().withStart(x[0].getStart()).withEnd(x[x.length-1].getEnd()),S=(""+x).replace(/[^\d\sa-zA-z:]+/g," ").replace(/\s+/g," ").replace(/^(\d+)\s(\d+)\s/,"$1/$2/").trim(),c=S.lastIndexOf(" "),S=S.substr(0,c)+":"+S.substr(c+1),g=getFuzzyDate(r.getDetachedSpan(S))}return ASSERT(o,p,g,a)?[{"@context":"http://schema.org","@type":"http://schema.org/FoodEstablishmentReservation",partySize:o,reservationId:s,reservationStatus:"http://schema.org/ReservationConfirmed",reservationFor:{"@type":"http://schema.org/FoodEstablishment",name:p,url:i,telephone:d,address:m},startTime:g,bookingAgent:{"@type":"http://schema.org/Organization",name:"Hot Pepper",url:"https://www.hotpepper.jp/"},underName:{"@type":"http://schema.org/Person",name:a},cancelReservationUrl:l,modifyReservationUrl:h}]:CONTINUE}}).call();
