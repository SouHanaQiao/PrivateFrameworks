// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,r){var a=Scanner.fromMessage(e);a.setLocale(t);var n,i,g,p,o,m,l,d=[],s=[];n=a.getSpan().next(r.reference).nextTag("td1").tagContents(),i=a.getSpan().next(r.checkIn).nextLink(),g=a.getSpan().next(r.details).nextTag("table1").nextTag("table1").allInnerTags("tr1"),o=a.getSpan().next(r.terminal);for(var u=1;g.length>u;u++){var h,c=g[u].allInnerTags("td1"),T={};9>c.length||(c.flightNumber=c[0].tagContents().innerCapture(/(\d+)/,1),c.airlineCode=c[8].tagContents(),h=c[1].innerDate(),c.departureCode=c[2].tagContents(),c.departureTime=a.getDetachedSpan(h+" "+c[3].tagContents()),c.arrivalCode=c[4].tagContents(),c.arrivalTime=a.getDetachedSpan(h+" "+c[5].tagContents()),c.arrivalTime=getFuzzyDate(c.arrivalTime),c.departureTime=getFuzzyDate(c.departureTime),c.airlineName=a.getSpan().innerCapture(regExpFormatted(/\1 (.*) \2/,r.checkOperated,r.on),1),c.airlineName.exists()||(c.airlineName=a.getSpan().next(r.operated).next(c.airlineCode).nextTag("td1").nextTag("td1").tagContents().innerCapture(/([A-Z\s]+)/,1)),c.departureTime>c.arrivalTime&&(c.arrivalTime=modifyDate(c.arrivalTime,1)),c.departureAirport=o.next(c.flightNumber).nextTag("td1").nextTag("td1").tagContents(),c.arrivalAirport=o.next(c.flightNumber).nextTag("tr1").innerTag("td1").nextTag("td1").nextTag("td1").tagContents(),ASSERT(c.departureCode,c.arrivalCode,c.arrivalTime,c.departureTime,c.flightNumber)&&d.push(c))}p=a.getSpan().next(r.passenger).parentTag("table1").allInnerTags("td1"),m=a.getSpan().next(r.fare),l=a.getSpan().next(r.ticket);for(var u=1;p.length>u;u+=2){var c={};c.name=p[u].tagContents().innerCapture(/([A-Z]+\/[A-Z]+)/,1),c.priceCurrency=m.next(c.name).next(r.total).nextTag("td1").tagContents(),c.totalPrice=c.priceCurrency.nextTag("td1").tagContents(),c.ticketNumber=l.next(c.name).nextTag("td1").tagContents(),ASSERT(c.name)&&s.push(c)}for(var C=[],u=0;d.length>u;u++)for(var T=d[u],v=0;s.length>v;v++){var x=s[v],N={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:T.airlineName,airlineCode:T.airlineCode,flightNumber:T.flightNumber,departureAirportFuzzy:T.departureAirport,departureAirportCode:T.departureCode,departureTime:T.departureTime,arrivalAirportFuzzy:T.arrivalAirport,arrivalAirportCode:T.arrivalCode,arrivalTime:T.arrivalTime},underName:{"@type":"http://schema.org/Person",name:x.name,email:x.email},checkinUrl:i,reservationId:n,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:x.totalPrice,priceCurrency:x.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:x.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:"",seatingType:""}}};x.membershipNumber&&x.programName&&(N.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:x.membershipNumber,programName:x.programName}),C.push(N)}return C.length?C:void 0}}).call();
