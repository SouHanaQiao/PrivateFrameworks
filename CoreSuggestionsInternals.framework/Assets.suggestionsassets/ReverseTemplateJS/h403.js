// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,r,t){var a=Scanner.fromMessage(e),i=a.getSpan();a.setLocale(r);var p,n,l,o,m;n=i.innerCapture(regExpFormatted(/\n\1 (.+)\n/,t.reservationIdPrefix),1),p=(""+i.nextText(t.underPersonNamePrefix).nextTag("table1").lastInnerTag("tr1").allInnerTagsFiltered("td1")).split(","),p.pop(),p=(""+p).replace(/\,/g," "),l=(""+i.nextText(t.pricePrefix).nextTag("table1").lastInnerTag("tr1").allInnerTagsFiltered("th1")).split(","),l.shift(),o=l[0],l=l[1];var u=(""+i.nextText(t.itineraryPrefix).nextTag("table1").allInnerTagsFiltered("tr1")).split(",");u.shift();var d=[],s=0,g={},h=[];for(s=0;u.length>s;s++){u[s]=(""+u[s]).replace(/\[(.+?)\]/g,",");var c=u[s].split(", ,");g.airlineName=c[0],g.airlineCode=c[1],g.flightNumber=c[1].match(/([1-9]+)/)[1],g.airlineCode=c[1].replace(g.flightNumber,""),g.departureAirport=c[3],g.departureTime=c[4],g.arrivalAirport=c[5],g.arrivalTime=c[6],g.departureTime=getFuzzyDate(a.getDetachedSpan(""+g.departureTime)),g.arrivalTime=getFuzzyDate(a.getDetachedSpan(""+g.arrivalTime)),ASSERT(g.departureAirport,g.arrivalAirport,g.departureTime,g.arrivalTime,g.flightNumber)&&d.push(g)}for(s=0;d.length>s;s++){var T=d[s],v={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:T.airlineName,airlineCode:T.airlineCode,flightNumber:T.flightNumber,departureAirportFuzzy:T.departureAirport,departureAirportCode:T.departureAirportCode,departureTime:T.departureTime,arrivalAirportFuzzy:T.arrivalAirport,arrivalAirportCode:T.arrivalAirportCode,arrivalTime:T.arrivalTime},underName:{"@type":"http://schema.org/Person",name:p},reservationId:n,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:l,priceCurrency:o,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:m,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:""}}};h.push(v)}return h}}).call();
