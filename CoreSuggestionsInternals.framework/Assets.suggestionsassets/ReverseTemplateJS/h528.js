// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n,r){if(!(e&&t&&n&&r))return CONTINUE;var a=Scanner.fromMessage(e);a.setLocale(t);var o,i,p,s,x,g,m,h,c,d,u,S;return p=a.getSpan().nextText(n.table).nextRegExp(regExpFormatted(/\d+/)),i=a.getSpan().innerCapture(regExpFormatted(/(.*)\1/,n.confirmation),1).trim(),u=a.getSpan().nextText(n.cancel),s=u.previousLink(),m=u.previousAddress(),g=a.getSpan().nextText(n.phone),g=a.getSpan().withInterval(g.getEnd(),g.nextText("\n").getStart()).trim(),g.exists()||(g=a.getSpan().nextText(n.otherPhone).nextPhoneNumber()),S=a.getSpan().nextText(n.time),x=a.getDetachedSpan(S.previousDate()+" "+S.nextDate()),o=a.getSpan().nextText(n.booking).nextText(":").nextRegExp(regExpFormatted(/(.*)/)).trim(),c=u.nextLink(),h=c,ASSERT(i,x,o)?[{"@context":"http://schema.org","@type":"http://schema.org/FoodEstablishmentReservation",partySize:p,reservationId:d,reservationStatus:"http://schema.org/Reservation"+r,reservationFor:{"@type":"http://schema.org/FoodEstablishment",name:i,url:s,telephone:g,address:m},startTime:x,bookingAgent:{"@type":"http://schema.org/Organization",name:"Obee",url:"http://www.obee.com.au"},underName:{"@type":"http://schema.org/Person",name:o},cancelReservationUrl:c,modifyReservationUrl:h}]:CONTINUE}}).call();
