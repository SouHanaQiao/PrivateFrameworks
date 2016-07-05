// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(r,e,t){var a=Scanner.fromMessage(r);a.setLocale(e);var i,n,p,o,u,d,l,s,g,h,m,v,c,$,C,f,A=[],S=[];i=a.getSpan().innerCapture(/(.*)\nCork Airport Business Park/,1);var N=[i];for(v=a.getSpan().innerCapture(regExpFormatted(/\1\s+(.*)/,t.reservationId),1),f=a.getSpan().innerCapture(regExpFormatted(/\1\n(.*)/,t.price),1),u=f.innerCapture(/([\d,.]+)/,1),d=f.innerCapture(/([^\d,.]+)/,1),o=a.getSpan().innerCapture(/Date of Issue.*([\s\S]+)Fare/,1),o=o.split(/\n/),c=0;o.length>c;c++)if(g=o[c],g.getLength()>0&&/\w+/.test(""+g)){var y=g.innerCapture(/($<airlineCode>[\D]{2})($<flightNumber>[\d]{4})\s+($<departureAirport>.*)\s+to\s+($<arrivalAirport>.*)\s+($<flightDate>[\d]{2}\/[\d]{2}\/[\d]{4})\s+($<departureHour>[\d]{2})($<departureMinute>[\d]{2})\s+($<arrivalHour>[\d]{2})($<arrivalMinute>[\d]{2})/);l=a.getDetachedSpan(y.$flightDate+" "+y.$departureHour+":"+y.$departureMinute).innerDate(),h=a.getDetachedSpan(y.$flightDate+" "+y.$arrivalHour+":"+y.$arrivalMinute).innerDate(),ASSERT(y.$airlineCode,y.$flightNumber,y.$departureAirport,l,y.$arrivalAirport,h)&&S.push({airlineCode:y.$airlineCode,flightNumber:y.$flightNumber,departureCode:s,departureAirport:y.$departureAirport,departureTime:l,arrivalCode:m,arrivalAirport:y.$arrivalAirport.trim(),arrivalTime:h,passengers:[i]})}for(c=0;S.length>c;c++){g=S[c];for(var T=0;N.length>T;T++){var D={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:g.airlineName,airlineCode:g.airlineCode,flightNumber:g.flightNumber,departureAirportFuzzy:g.departureAirport,departureAirportCode:g.departureCode,departureTime:g.departureTime,arrivalAirportFuzzy:g.arrivalAirport,arrivalAirportCode:g.arrivalCode,arrivalTime:g.arrivalTime},underName:{"@type":"http://schema.org/Person",name:N[T]},checkinUrl:$,reservationId:v,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:u,priceCurrency:d,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:C,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:n,seatingType:p}}};A.push(D)}}return A.length?A:void 0}}).call();
