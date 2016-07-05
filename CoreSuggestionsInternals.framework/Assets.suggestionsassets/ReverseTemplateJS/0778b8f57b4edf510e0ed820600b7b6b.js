// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("jetstart-confirmation-en",function(t){return/^Jetstar Flight Itinerary for \(Booking ref#/.test(t.subject)},function(t){if(/^Jetstar Flight Itinerary for \(Booking ref#/.test(t.subject)){var e=Scanner.fromMessage(t);e.setLocale("en_US");var r,a,n,i,s,g,o,d,l,T,p,x,c,h,u,m,C,v,f,y,S,b,F=e.getSpan(),k=[],A={};a=F.nextText("Booking Reference").nextTag("td6").tagContents().trim(),d=F.nextText("Payment \u2013").nextTag("td4").tagContents().innerCapture(/($<priceCurrency>[\W]{1})($<totalPrice>[\d,.]+)/),l=d?d.$totalPrice:null,T=d?d.$priceCurrency:null,i=F.withInterval(F.nextText("In-Flight Services").getEnd(),F.nextText("Want to add more for your flight?").getStart()).allInnerTagsFiltered("td3");var I=i[0].allInnerTagsFiltered("td4");for(S=4;I.length>S;S++){var N=I[S];/kg/.test(N)||/Add Seat/.test(N)||/Book Below/.test(N)||/\(.+\)/.test(N)||(A[""+N]={name:N,totalPrice:l,priceCurrency:T,seats:{}})}for(g=F.nextText("Flight Details").withEnd(e.getSpan().nextText("Save time with Web check-in").getStart()).allInnerTagsFiltered("tr3"),g.shift(),g.pop(),S=0;g.length>S;S++){[,p,o]=g[S].nextTag("td3").tagContents().innerCapture(/([0-9A-Z]{2})(\d+)\s/),x=g[S].nextTag("td3").nextTag("td3").innerDate(),[,c,h]=/-/.test(g[S].nextTag("td3").nextTag("td3").tagContents())||/,/.test(g[S].nextTag("td3").nextTag("td3").tagContents())?g[S].nextTag("td3").nextTag("td3").tagContents().innerCapture(/hr \/ (.+)\s(.+)[-,]/):g[S].nextTag("td3").nextTag("td3").tagContents().innerCapture(/hr \/ (.+)\s(.+)\s/),m=g[S].nextTag("td3").nextTag("td3").nextTag("td3").innerDate(),/-/.test(g[S].nextTag("td3").nextTag("td3").nextTag("td3").tagContents())||/,/.test(g[S].nextTag("td3").nextTag("td3").nextTag("td3").tagContents())?[,C,v]=g[S].nextTag("td3").nextTag("td3").nextTag("td3").tagContents().innerCapture(/hr \/ (.+)\s(.+)[-,]/):/hr \/ (.+)\s(.+)\s/.test(g[S].nextTag("td3").nextTag("td3").nextTag("td3").tagContents())?[,C,v]=g[S].nextTag("td3").nextTag("td3").nextTag("td3").tagContents().innerCapture(/hr \/ (.+)\s(.+)\s/):[,v,C]=g[S].nextTag("td3").nextTag("td3").nextTag("td3").tagContents().innerCapture(/(.+)\s.*\s.*hr \/ (.+)/),C=combineDateAndTime(m,C),c=combineDateAndTime(x,c),s="";var P=0;for(I=i[S].allInnerTagsFiltered("td4"),y=Object.keys(A),b=4;I.length>b;b++){var w=I[b];/\(.+\)/.test(w)&&(A[y[P]].seats[""+o]=(""+w).match(/\((.+)\)/)[1],P++)}ASSERT(p,o,c,C)&&k.push({airlineCode:p,flightNumber:o,departureTime:c,departureCode:u,departureAirport:h.trim(),arrivalTime:C,arrivalCode:f,arrivalAirport:v.trim(),passengers:A})}var z=[];for(S=0;k.length>S;S++){var R=k[S],j=Object.keys(R.passengers);for(b=0;j.length>b;b++){y=R.passengers[j[b]];var B={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:R.airlineName,airlineCode:R.airlineCode,flightNumber:R.flightNumber,departureAirportFuzzy:R.departureAirport,departureAirportCode:R.departureCode,departureTime:R.departureTime,arrivalAirportFuzzy:R.arrivalAirport,arrivalAirportCode:R.arrivalCode,arrivalTime:R.arrivalTime},underName:{"@type":"http://schema.org/Person",name:y.name},checkinUrl:n,reservationId:a,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:y.totalPrice,priceCurrency:y.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:r,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:y.seats[""+R.flightNumber],seatingType:""}}};z.push(B)}}if(z.length)return z}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/468/469","SGa18bd319")]);
