// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,r,t){var a=Scanner.fromMessage(e);a.setLocale(r);var n,i,p,s,g,d,o,m,u,l,h,c,T,C,v,x,y,N,b,f,A=[],S={};u="asiana airlines",m=a.getSpan(),d=m.next(t.reservationId_prefix).nextTag("td1"),i=d.innerCapture(/([\d\w]+)\(.*\)/,1),d=d.nextTag("td1").nextTag("td1"),s=d.tagContents(),d=d.nextTag("td1"),n=d.innerCapture(/([\d]+)\s+/,1),d=d.nextTag("td1").nextTag("td1"),N=d.innerCapture(/([\w]+)\s+(\d+)/,1),y=d.innerCapture(/([\w]+)\s+(\d+)/,2);var z=m.next(t.flightSummary).nextTag("table1");d=z.nextTag("tr1").nextTag("tr1");do{o=d.nextTag("th1").tagContents(),l=o.innerCapture(/\s*([A-z]+)(\d+)/,1),o=o.innerCapture(/\s*([A-z]+)(\d+)/,2),g=d.nextTag("td1").tagContents().innerCapture(/\s*([\d\w]+)\(.*/,1);var k=g.innerCapture(/(\d+)([A-Z]+)(\d+)/);g=k[1]+" "+k[2]+" "+k[3],c=d.nextTag("td1").nextTag("td1").tagContents(),x=c.innerCapture(/\s*(.*)\((.{3})\)\s.*\s(.*)\((.{3})\)/),c=x[1],T=x[2],v=x[3],x=x[4],d=d.nextTag("td1").nextTag("td1").nextTag("td1"),f=d.tagContents(),h=g+" "+f.innerCapture(/\s*(\d+\:\d+)/,1),h=getFuzzyDate(a.getDetachedSpan(h).firstDate()),d=d.nextTag("td1"),C=g+" "+d.innerCapture(/\s*(\d+\:\d+)/,1),C=a.getDetachedSpan(C).innerDate(),b=d.nextTag("td1").tagContents().innerCapture(/(.*)\sOK/,1),ASSERT(l,o,c,h,v,C)&&A.push({reservationId:i,airlineName:u,airlineCode:l,flightNumber:o,departureAirport:c,departureCode:T,departureTime:h,arrivalAirport:v,arrivalCode:x,arrivalTime:C,passengers:S}),d=d.nextTag("tr1")}while(d.nextTag("th1")!=a.getNullSpan());ASSERT(s)&&(S[""+s]={name:s,seats:{},seatingType:b,ticketNumber:null,totalPrice:y,priceCurrency:N});for(var F=[],w=0;A.length>w;w++)for(var D=A[w],P=Object.keys(D.passengers),I=0;P.length>I;I++){var R=D.passengers[P[I]],M={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:D.airlineName,airlineCode:D.airlineCode,flightNumber:D.flightNumber,departureAirportFuzzy:D.departureAirport,departureAirportCode:D.departureCode,departureTime:D.departureTime,arrivalAirportFuzzy:D.arrivalAirport,arrivalAirportCode:D.arrivalCode,arrivalTime:D.arrivalTime},underName:{"@type":"http://schema.org/Person",name:R.name},checkinUrl:p,reservationId:D.reservationId,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:R.totalPrice,priceCurrency:R.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:n,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:R.seats[D.flightNumber],seatingType:R.seatingType}}};valid(R.membershipNumber,R.programName)&&(M.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:R.membershipNumber,programName:R.programName}),F.push(M)}return F.length?F:void 0}}).call();
