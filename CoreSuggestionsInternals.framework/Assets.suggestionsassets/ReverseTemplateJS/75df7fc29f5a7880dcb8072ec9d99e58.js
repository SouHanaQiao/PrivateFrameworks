// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("jetblue.com-change-en",function(e){return/^Your Upcoming Flight Time has Changed$/.test(e.subject)},function(e){var r="en_US",t={};t.reservationId="Your Confirmation Number",t.itinerary="Your new flight itinerary:",t.passengers="Your seats:";var a,n,i,o,p,m,g,s,l,d,h,u=[],c={},T=Scanner.fromMessage(e);for(T.setLocale(r),a=T.getSpan().next(t.reservationId).nextAnyTag("td").tagContents(),o=T.getSpan().next(t.itinerary).parentAnyTag("table").allInnerTagsFiltered("tr1"),p=2;o.length>p;p++)g={},s=o[p],l=s.firstDate(),g.flightNumber=l.nextAnyTag("td").tagContents(),g.airlineName=g.flightNumber.nextAnyTag("td").tagContents(),g.departureAirport=g.airlineName.nextAnyTag("td").tagContents(),g.departureTime=combineDateAndTime(l,g.departureAirport.nextAnyTag("td").tagContents()),g.arrivalAirport=g.departureAirport.nextAnyTag("td").nextAnyTag("td").tagContents(),g.arrivalTime=combineDateAndTime(l,g.arrivalAirport.nextAnyTag("td").tagContents()),g.airlineCode="B6",ASSERT(g.flightNumber,g.airlineCode,g.departureTime,g.arrivalTime,g.departureAirport,g.arrivalAirport)&&u.push(g);for(h=T.getSpan().next(t.passengers).parentAnyTag("table").allInnerTags("tr1"),p=3;h.length>p;p++)if(s=h[p].allInnerTags("td1"),s.length>0){for(n=s[0].tagContents(),d={},m=1;s.length>m;m++)d[u[m-1].flightNumber]=s[m].tagContents();c[n]=d}var v=[];for(p=0;u.length>p;p++){g=u[p];var b=Object.keys(c);for(m=0;b.length>m;m++){var h=c[b[m]],A={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:g.airlineName,airlineCode:g.airlineCode,flightNumber:g.flightNumber,departureAirportFuzzy:g.departureAirport,departureAirportCode:g.departureCode,departureTime:g.departureTime,arrivalAirportFuzzy:g.arrivalAirport,arrivalAirportCode:g.arrivalCode,arrivalTime:g.arrivalTime},underName:{"@type":"http://schema.org/Person",name:b[m]},checkinUrl:i,reservationId:a,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:h.totalPrice,priceCurrency:h.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:h[g.flightNumber]}}};valid(h.membershipNumber,h.programName)&&(A.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:h.membershipNumber,programName:h.programName}),v.push(A)}}return v.length?v:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/465/466","SG6db232bc")]);
