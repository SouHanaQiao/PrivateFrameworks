// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("worldticketshop.com-cancellation-it",function(e){return/^Il vostro ordine \xe8 respinta/.test(e.subject)},function(e){if(/^Il vostro ordine \xe8 respinta/.test(e.subject)){var t="it_IT",r={};r.reservationId="Dettagli respinto ordine";var n=loadHelper("worldtickets.com-cancellation-skeleton.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1454/1455","SGdee3344d"),new ReverseTemplate("worldticketshop.com-change-en",function(e){return/^\s?$/.test(e.subject)},function(e){if(/^\s?$/.test(e.subject)&&/We would like to inform you of an alteration to the event/.test(e.plain)){var t="en_US",r={};r.reservationId=/alteration to the event details of the event you booked tickets\s+for.\s+#(.*) N\xfamero/,r.eventName="Event name",r.date="Date",r.time="Time",r.location="Location";var n=Scanner.fromMessage(e);n.setLocale(t);var o,a,i,s,c,p,d,l,m,u,v,f,h,g,k,S;if(s=n.getSpan().innerCapture(r.reservationId,1),m=n.getSpan().innerCapture(regExpFormatted(/\1\: (.*)/,r.eventName),1),f=n.getSpan().innerCapture(regExpFormatted(/\1\: (.*)/,r.date),1),v=n.getSpan().innerCapture(regExpFormatted(/\1\: (.*)/,r.time),1),k=n.getSpan().innerCapture(regExpFormatted(/\1\: (.*)/,r.location),1),f=n.getDetachedSpan(""+f+" "+v).innerDate(),ASSERT(f,m))return[{"@context":"http://schema.org","@type":"http://schema.org/EventReservation",name:o,totalPrice:a,priceCurrency:i,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:s,ticketToken:c,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:p,seatRow:d,seatSection:l}},reservationFor:{"@type":"http://schema.org/Event",eventStatus:"http://schema.org/EventConfirmed",name:m,url:u,startDate:f,endDate:h,location:{"@type":"http://schema.org/Place",name:k,telephone:g,address:S}}}]}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1454/1456","SGab684e2d"),new ReverseTemplate("worldticketshop.com-confirmation-es",function(e){return/^Reserva confirmada/.test(e.subject)},function(e){if(/^Reserva confirmada/.test(e.subject)){var t="es_ES",r={};r.reservationId="N\xfamero de pedido",r.price="Total";var n=loadHelper("worldticketshop.com-confirmation-skeleton.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1454/1457","SGa6f59312"),new ReverseTemplate("worldticketshop.com-confirmation-it",function(e){return/^Conferma dell\'ordine/.test(e.subject)},function(e){if(/^Conferma dell\'ordine/.test(e.subject)){var t="it_IT",r={};r.reservationId="Numero d'Ordine",r.price="Totale";var n=loadHelper("worldticketshop.com-confirmation-skeleton.js");return n(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1454/1458","SG316f8605")]);
