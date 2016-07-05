// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("usairways.com-checkin-en",function(e){return!1},function(e){return/^US Airways(?: - Web)? [Cc]heck-in reminder$/.test(e.subject)||/^Check in for your upcoming trip$/.test(e.subject)?STOP:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/620/622","SG06f09643"),new ReverseTemplate("usairways.com-travel-confirmation-en",function(e){return/^US Airways Travel Confirmation$/.test(e.subject)},function(e){if(/^US Airways Travel Confirmation$/.test(e.subject)){var r=Scanner.fromMessage(e);r.setLocale("en_US");var t,a,n,i,o,s,p,m,l,u,c,g,h,d,f,T,v=[],b={};t=r.getSpan().innerCapture(/Travel Confirmation: (\w{6})\s/,1),n=r.getSpan().nextText("Passenger Information").parentTag("table4").allInnerTags("tr4").map(function(e){return e.allInnerTags("td4").map(function(e){return e.tagContents()})}).filter(function(e){return e.length>=4});for(var y=1;n.length>y;y++)b[""+n[y][0]]={name:n[y][0],seats:{},seatingType:{},ticketNumber:n[y][2]};for(o=r.getSpan().nextText("Flight Itinerary").parentTag("table4").allInnerTags("tr4").map(function(e){return e.allInnerTags("td4").map(function(e){return e.tagContents()})}).filter(function(e){return e.length>0}),T=0;o.length>T;T++)i=o[T],i.length>=6&&i[0].innerDate().exists()&&(l=r.getDetachedSpan((""+i[0]).replace(/\n/," ")).innerDate(),s=i[1],m=i[2].innerCapture(/($<code>[A-Z]{3})\/($<airport>.*)\s/),c=m?m.$code:null,u=m?m.$airport:null,g=i[3].innerCapture(/($<code>[A-Z]{3})\/($<airport>.*)\s/),f=g?g.$code:null,d=g?g.$airport:null,h=r.getDetachedSpan((""+i[4]).replace(/\n/," ")).innerDate(),p=o[T+1]&&o[T+1][0]&&o[T+1][0].innerCapture(/FLIGHT OPERATED BY/)?o[T+1][0].innerCapture(/FLIGHT OPERATED BY (.*)/,1):"US Airways",ASSERT(p,s,c,l,f,h)&&v.push({airlineName:p,flightNumber:s,departureCode:c,departureTime:l,arrivalCode:f,arrivalTime:h,passengers:b}));var C=[];for(T=0;v.length>T;T++)for(var S=v[T],N=Object.keys(S.passengers),A=0;N.length>A;A++){var $=S.passengers[N[A]],k={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:S.airlineName,airlineCode:S.airlineCode||"US",flightNumber:S.flightNumber,departureAirportFuzzy:S.departureAirport,departureAirportCode:S.departureCode,departureTime:S.departureTime,arrivalAirportFuzzy:S.arrivalAirport,arrivalAirportCode:S.arrivalCode,arrivalTime:S.arrivalTime},underName:{"@type":"http://schema.org/Person",name:$.name,email:$.email},checkinUrl:a,reservationId:t,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:$.totalPrice,priceCurrency:$.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:$.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:$.seats[S.flightNumber],seatingType:$.seatingType[S.flightNumber]}}};valid($.membershipNumber,$.programName)&&(k.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:$.membershipNumber,programName:$.programName}),C.push(k)}if(C.length)return C}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/620/629","SG15c44b9b")]);
