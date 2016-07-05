// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,r,t){var a=Scanner.fromMessage(e);if(a.setLocale(t),a.getSpan().nextRegExp(/Ticket number\(s\)/).exists()){var n,i,l,o,p,s,m,u,g,d,c,h,b,T,v,f,C,y,A,N,x,k,S=[],$={};n=a.getSpan().innerCapture(/\bYour confirmation number is (\w+)[.\s]/,1),i=a.getSpan().nextText("Skip the line, check in now!").nextTag("td2").innerLink(),not(i)&&(i=a.getSpan().nextText("Your confirmation number is").nextTag("table3").allInnerLinks(),i=5===i.length?i[1]:null),c=a.getSpan().nextRegExp(/Ticket number\(s\)/).parentTag("table3").allInnerTagsFiltered("td3").slice(2);for(var F=0;c.length>F;F++)c[F].innerCapture(/($<name>.*) <.*?>/)&&(d=c[F].innerCapture(/($<name>.*) <.*?>/,1),h=c[F+1]&&c[F+1].innerCapture(/^(\d+)$/,1)),valid(d)&&($[""+d]={name:d,ticketNumber:h,seats:{},seatingType:{}}),d=null;for(T=a.getSpan().nextText("Your itinerary").nextAnyTag("table"),s=T.getTagNumber(),T=T.allInnerTags("tr"+s).map(function(e){return e.allInnerTags("td"+s).map(function(e){return e.innerTag("td"+(int(s)+1)).exists()?e.allInnerTagsFiltered("td"+(int(s)+1)):e.tagContents()})}).filter(function(e){return e.length>=6}),l=0;T.length>l;l++){for(g=[],o=0;T[l].length>o;o++)T[l][o]instanceof Array?g=g.concat(T[l][o]):g.push(T[l][o]);T[l]=g}for(l=0;T.length>l;l++)if(T[l][0].innerDate().exists()){for(b=T[l],f=combineDateAndTime(b[0].lastInnerDate(),b[1].innerDate()),A=combineDateAndTime(b[0].lastInnerDate(),b[1].lastInnerDate()),g=b[2].innerCapture(/^($<departureAirport>.*?)(?:\s+\(($<departureCode>[A-Z]{3})\))?\s+to\s+($<arrivalAirport>.*?)(?:\s+\(($<arrivalCode>[A-Z]{3})\))?$/),C=g?g.$departureAirport:null,y=g?g.$departureCode:null,N=g?g.$arrivalAirport:null,x=g?g.$arrivalCode:null,v=b[3],k=Object.keys($),p=0;k.length>p;p++)u=""+b[3].next(k[p]).nextAnyTag("td").nextAnyTag("td").tagContents(),$[k[p]].seats[""+v]=/Select seat/.test(u)?"":u,m=""+b[3].next(k[p]).nextAnyTag("td").tagContents(),$[k[p]].membershipNumber="N/A"===m?"":m,valid(m)&&($[k[p]].programName="Frequent Flyer");ASSERT(v,f,C,A,N)&&S.push({airlineName:"JetBlue",airlineCode:"B6",flightNumber:v,departureTime:f,departureCode:y,departureAirport:C,arrivalTime:A,arrivalCode:x,arrivalAirport:N,passengers:$})}var I=[];for(l=0;S.length>l;l++){var D=S[l];for(k=Object.keys(D.passengers),o=0;k.length>o;o++){var z=D.passengers[k[o]],R={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:D.airlineName,airlineCode:D.airlineCode,flightNumber:D.flightNumber,departureAirportFuzzy:D.departureAirport,departureAirportCode:D.departureCode,departureTime:D.departureTime,arrivalAirportFuzzy:D.arrivalAirport,arrivalAirportCode:D.arrivalCode,arrivalTime:D.arrivalTime},underName:{"@type":"http://schema.org/Person",name:z.name},checkinUrl:i,reservationId:n,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:z.totalPrice,priceCurrency:z.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:z.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:z.seats[D.flightNumber],seatingType:z.seatingType[D.flightNumber]}}};valid(z.membershipNumber,z.programName)&&(R.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:z.membershipNumber,programName:z.programName}),I.push(R)}}if(I.length)return I}}}).call();
