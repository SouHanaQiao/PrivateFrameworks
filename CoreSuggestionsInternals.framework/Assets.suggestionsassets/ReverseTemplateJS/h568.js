// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var a=Scanner.fromMessage(e);a.setLocale(t);var r,o,i,p,c,s,g,m,d,h,u,v,x,k,l;return p=a.getSpan().next(n.ticketNumber).parentAnyTag("td").tagContents().innerCapture(regExpFormatted(/\1\s+(.*)/,n.ticketNumber),1),h=a.getSpan().nextTag("table2").nextTag("table2"),d=h.innerDate(),u=combineDateAndTime(d,d.nextDate()),g=d.parentAnyTag("td").tagContents().innerCapture(/(.*)/,1),m=h.previousLink(),c=h.next(n.ticketToken).nextLink(),l=h.innerCapture(regExpFormatted(/(.*)\s+\1/,n.place),1),k=l.nextAddress(),r=a.getSpan().next(n.price).nextAnyTag("td").tagContents(),i=r.innerCapture(/([\d,.]+)/,1),o=r.innerCapture(/([^\d,.]+)/,1),s=a.getSpan().innerCapture(regExpFormatted(/\1\s+(.*)/,n.seat),1),ASSERT(u,g)?[{"@context":"http://schema.org","@type":"http://schema.org/EventReservation",totalPrice:i,priceCurrency:o,reservedTicket:{"@type":"http://schema.org/Ticket",ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:s},ticketToken:c,ticketNumber:p},reservationFor:{"@type":"http://schema.org/MovieShowing",eventStatus:"http://schema.org/EventConfirmed",url:m,startDate:u,endDate:v,movie:{"@type":"http://schema.org/Movie",name:g},location:{"@type":"http://schema.org/Place",name:l,telephone:x,address:k}}}]:void 0}}).call();
