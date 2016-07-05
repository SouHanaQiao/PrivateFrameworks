// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,r){function a(e){return/AMERICAN\s*(?:AIRLINES)?/i.test(""+e)?"AA":/US AIRWAYS/i.test(""+e)?"US":""}var n=Scanner.fromMessage(e);n.setLocale(t);var i,o,p,m,g,s,d,l,u,h,A,c,T,v,y,C,x=[];for(h=n.getSpan().nextText(r.travelerInformation).nextTag("table2").allInnerTags("tr2"),l=n.getSpan().allInnerCapture(regExpFormatted(/(\1)/,r.date),1),m=0;l.length>m;m++)g=l[m].nextAnyTag("td").tagContents().innerDate(),A=g.next(r.flight).nextAnyTag("td").tagContents(),c=a(A),s=A.nextAnyTag("td").tagContents(),v=s.next(r.departure).nextAnyTag("td").tagContents(),T=combineDateAndTime(g,v.nextAnyTag("td").tagContents()),C=v.next(r.arrival).nextAnyTag("td").tagContents(),y=combineDateAndTime(g,C.nextAnyTag("td").tagContents()),d=C.next(r.name).nextAnyTag("td").tagContents(),u=d.nextAnyTag("td").nextAnyTag("td").tagContents(),ASSERT(s,c,v,C,T,y)&&x.push({airlineName:A,airlineCode:c,flightNumber:s,reservationId:i,departureAirport:v,departureTime:T,arrivalAirport:C,arrivalTime:y,passengerName:d,seatingType:u});i=n.getSpan().innerCapture(regExpFormatted(/\1\s([^\[\s]*)/,r.reservationId),1);var N=[];for(m=0;x.length>m;m++){var b=x[m],S={},f={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:b.airlineName,airlineCode:b.airlineCode||"AA",flightNumber:b.flightNumber,departureAirportFuzzy:b.departureAirport,departureAirportCode:b.departureCode,departureTime:b.departureTime,arrivalAirportFuzzy:b.arrivalAirport,arrivalAirportCode:b.arrivalCode,arrivalTime:b.arrivalTime},underName:{"@type":"http://schema.org/Person",name:b.passengerName},checkinUrl:o,reservationId:i,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:S.totalPrice,priceCurrency:p,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:S.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatingType:b.seatingType,seatNumber:S.seat}}};valid(S.membershipNumber)&&(f.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:S.membershipNumber,programName:S.programName}),N.push(f)}return N.length?N:void 0}}).call();
