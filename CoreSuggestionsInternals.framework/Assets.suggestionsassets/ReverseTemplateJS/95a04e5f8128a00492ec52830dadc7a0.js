// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("budgetticket.nl-confirmation-nl",function(e){return/^Reserveringsbevestiging Budgetticket.nl/.test(e.subject)},function(e){if(/^Reserveringsbevestiging Budgetticket.nl/.test(e.subject)){var t="nl_NL",n={};n.reservationId="Uw ordernummer is:",n.details="Totaal",n.name="Factuuradres";var a=Scanner.fromMessage(e);a.setLocale(t);var r,s,i,o,c,g,p,m,d,l,v,u,h,S,T,k;if(o=a.getSpan().next(n.reservationId).nextAnyTag("td").tagContents(),k=a.getSpan().next(n.details).nextAnyTag("td").tagContents().innerCapture(/($<eventName>.+?)(?:\s+\[E-Ticket\])?\n($<seat>.*)\n($<startDate>.*)\n($<place>.*)/),d=k.$eventName,g=k.$seat,v=k.$startDate.innerDate(),S=k.$place,i=a.getSpan().next(n.details).next(n.details).nextAnyTag("td").tagContents(),s=i.nextAnyTag("td").tagContents(),r=a.getSpan().innerCapture(regExpFormatted(/\1\n(.*)/,n.name),1),ASSERT(v,d))return[{"@context":"http://schema.org","@type":"http://schema.org/EventReservation",name:r,totalPrice:s,priceCurrency:i,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:o,ticketToken:c,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:g,seatRow:p,seatSection:m}},reservationFor:{"@type":"http://schema.org/Event",eventStatus:"http://schema.org/EventConfirmed",name:d,url:l,startDate:v,endDate:u,location:{"@type":"http://schema.org/Place",name:S,telephone:h,address:T}}}]}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1341/1342","SG3166baaf")]);
