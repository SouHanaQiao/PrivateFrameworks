// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("delta.com-itinerary-change-en",function(e){return/^Your Delta itinerary has changed/.test(e.subject)},function(e){if(/^Your Delta itinerary has changed/.test(e.subject)){var r=Scanner.fromMessage(e);r.setLocale("en_US");var t,a,i,n,p,s,m,o,l,u,g,h,d,c,v,b,N,y=[],T={};for(n=r.getSpan().innerCapture(/\bDear (.*),/,1),n.exists()&&(T[n]={name:n,seats:{},seatingType:{}}),a=r.getSpan().innerCapture(/\bDelta confirmation # (.*)\s/,1),m=r.getSpan().nextText("Updated Itinerary");m.nextText("Flight:").exists();)m=m.nextText("Flight:"),p=m.previousDate(),s=m.parentTag("table2").allInnerTagsFiltered("td2"),10===s.length&&(l=s[1].innerCapture(/($<airlineName>.*)\s+($<flightNumber>\d+)/),u=l?l.$airlineName:null,o=l?l.$flightNumber:null,g=/delta/gi.test(u)?"DL":null,h=s[3].innerCapture(/($<time>\d{1,2}:\d{2} (?:am|pm))\s+from\s+($<airport>.*)/),h&&(d=r.getDetachedSpan(""+p+" "+h.$time).innerDate(),c=h.$airport),v=s[5].innerCapture(/($<time>\d{1,2}:\d{2} (?:am|pm))\s+at\s+($<airport>.*)/),v&&(b=r.getDetachedSpan(""+p+" "+v.$time).innerDate(),N=v.$airport),valid(o,T[n])&&(T[n].seats[o]=s[7]),ASSERT(u,o,c,d,N,b)&&y.push({airlineName:u,airlineCode:g,flightNumber:o,departureAirport:c,departureTime:d,arrivalAirport:N,arrivalTime:b,passengers:T}));for(var f=[],C=0;y.length>C;C++)for(var S=y[C],$=Object.keys(S.passengers),D=0;$.length>D;D++){var x=S.passengers[$[D]],A={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:S.airlineName,airlineCode:S.airlineCode,flightNumber:S.flightNumber,departureAirportFuzzy:S.departureAirport,departureAirportCode:S.departureCode,departureTime:S.departureTime,arrivalAirportFuzzy:S.arrivalAirport,arrivalAirportCode:S.arrivalCode,arrivalTime:S.arrivalTime},underName:{"@type":"http://schema.org/Person",name:x.name},checkinUrl:i,reservationId:a,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:x.totalPrice,priceCurrency:x.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:t,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:x.seats[S.flightNumber],seatingType:x.seatingType[S.flightNumber]}}};valid(x.membershipNumber,x.programName)&&(A.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:x.membershipNumber,programName:x.programName}),f.push(A)}if(f.length)return f}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/401/405","SGed79a963")]);
