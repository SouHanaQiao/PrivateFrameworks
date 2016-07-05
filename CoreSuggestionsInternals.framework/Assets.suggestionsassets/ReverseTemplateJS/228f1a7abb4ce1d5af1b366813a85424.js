// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("alaskaair.com-confirmation-en",function(e){return/^Confirmation Letter - .*? - from Alaska Airlines$/.test(e.subject)},function(e){if(int(e.epoch)<1356998400)return CONTINUE;if(/^Confirmation Letter/.test(e.subject)){var r="en_US";if(/If you have trouble viewing this message, click here/.test(e.plain)){var t={};t.reservationId="Confirmation Code:",t.departs="Departs";var a=loadHelper("alaskaair.com-confirmation-skeleton.js");return a(e,r,t)}var i=Scanner.fromMessage(e);i.setLocale(r);var n,s,p,m,o,l,u,g,c,d,h,v,T,b,N,f,C,x,$,y,A,S,E=[],k={};n=i.getSpan().innerCapture(/\bConfirmation Code: (\w+)/,1),s=i.getSpan().nextText("Web Check-In").nextLink(),p=i.getSpan().nextText("SUMMARY OF AIRFARE CHARGES").withEnd(i.getSpan().nextText("Total Fare:").getStart()),d=i.getSpan().innerCapture(/Total Fare: ($<priceCurrency>[A-Z]{3}).*?($<totalPrice>[\d,.]+)\n/),c=d?d.$totalPrice:null,h=d?d.$priceCurrency:null;for(var R=/(Traveler:[\s\S]+?Traveler Total: .*)/;p.innerRegExp(R).exists();)v=p.innerCapture(/(Traveler:[\s\S]+?Traveler Total: .*)/,1),v&&(A=v.innerCapture(/Traveler Total:\s+.*?([\d,.]+)/,1),y=v.innerCapture(/Traveler: ($<name>.*?)(?:, ($<programName>.*) # ($<membershipNumber>.*))?\n/),k[""+y.$name]={name:y.$name,seats:{},seatingType:{},programName:y.$programName,membershipNumber:y.$membershipNumber,totalPrice:A.exists()?A:c,priceCurrency:h,ticketNumber:v.innerCapture(/Ticket:\s+([-\d]+)/,1)}),p=p.withStart(p.innerRegExp(R).getEnd());u=i.getSpan().nextText("FLIGHT INFORMATION").withEnd(i.getSpan().nextText("SUMMARY OF AIRFARE CHARGES").getStart());for(var F,I=concatRegExp(/Flight: ($<airlineName>.*?) ($<flightNumber>\d+)\n[^]+?/,/(?:Confirmation code: ($<tmpReservationId>\w+)\n[^]+?)?/,/Departs: ($<departureAirport>.*?) \(($<departureCode>[A-Z]{3})\) ($<departureTime>.*?)\n/,/Arrives: ($<arrivalAirport>.*?) \(($<arrivalCode>[A-Z]{3})\) ($<arrivalTime>.*?)\n/,/Class: ($<seatingType>.*?)\nSeats: ($<seats>.*?)\n/),z=[],P=/(\d{1,}[A-Z])/;u.innerRegExp(I).exists();){if(l=u.innerCapture(I),valid(l)){for(T=l.$airlineName,g=l.$flightNumber,N=l.$departureAirport,f=l.$departureCode,b=l.$departureTime,x=l.$arrivalAirport,$=l.$arrivalCode,C=l.$arrivalTime,o=l.$seatingType,m=l.$seats,z=[];m.innerRegExp(P).exists();)z.push(m.innerCapture(P,1)),m=m.withStart(m.innerRegExp(P).getEnd());if(valid(g)){p=Object.keys(k);for(var M=0;p.length>M;M++)valid(o)&&(k[p[M]].seatingType[""+g]=o),valid(z)&&(k[p[M]].seats[""+g]=z[M])}F=l.$tmpReservationId,ASSERT(T,g,f,b,$,C)&&E.push({airlineName:T,flightNumber:g,reservationId:F,departureAirport:N,departureCode:f,departureTime:b,arrivalAirport:x,arrivalCode:$,arrivalTime:C,passengers:k})}u=u.withStart(u.innerRegExp(I).getEnd())}for(var w=[],D=0;E.length>D;D++)for(var O=E[D],U=Object.keys(O.passengers),j=0;U.length>j;j++){var L=O.passengers[U[j]];/alaska/i.test(O.airlineName)&&(O.airlineCode="AS"),S={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:O.airlineName,airlineCode:O.airlineCode,flightNumber:O.flightNumber,departureAirportFuzzy:O.departureAirport,departureAirportCode:O.departureCode,departureTime:O.departureTime,arrivalAirportFuzzy:O.arrivalAirport,arrivalAirportCode:O.arrivalCode,arrivalTime:O.arrivalTime},underName:{"@type":"http://schema.org/Person",name:L.name},checkinUrl:s,reservationStatus:"http://schema.org/Reservation"+(O.reservationStatus||"Confirmed"),reservationId:valid(O.reservationId)?O.reservationId:n,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:L.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:L.seats[O.flightNumber],seatingType:L.seatingType[O.flightNumber]}},totalPrice:L.totalPrice,priceCurrency:L.priceCurrency},not(L.membershipNumber)||(S.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:L.membershipNumber,programName:L.programName}),w.push(S)}if(w.length)return w}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/334/336","SG7a84053e"),new ReverseTemplate("alaskaair.com-itineraries-receipts-en",function(e){return/^(?:Receipt|Itinerary)? sent from alaskaair\.com/.test(e.subject)},function(e){function r(e,r,t,a,i,n,p,m){s=Object.keys(p);for(var o=0;s.length>o;o++)not(m)||(p[s[o]].seatingType[""+r]=m),p[s[o]].seats[r]=p[s[o]].seatList[A.length];ASSERT(e,r,t,a,i,n)&&A.push({airlineName:e,flightNumber:r,departureCode:t,departureTime:a,arrivalCode:i,arrivalTime:n,passengers:p})}if(int(e.epoch)<1356998400)return CONTINUE;var t=Scanner.fromMessage(e);t.setLocale("en_US");var a,i,n,s,p,m,o,l,u,g,c,d,h,v,T,b,N,f,C,x,$,y,A=[],S={};if(/^(?:Receipt|Itinerary) sent from alaskaair\.com/.test(e.subject)){s=t.getSpan().nextText("Traveler Information").nextTag("table1").allInnerTags("tr1").map(function(e){return e.allInnerTagsFiltered("td1")});for(var E=1;s.length>E;E++)s[E].length>2&&(u=s[E][0].innerCapture(/\bName:\s+($<name>.*)\s+MP#:\s+(?:($<membershipNumber>.*)\s+-\s+($<programName>.*)\s+)?E-Ticket:(?:\s+($<ticketNumber>\d+))?/),u&&(n=(""+u.$name.trim()).replace(/\s{2,}/," "),N=u.$programName.trim(),f=u.$membershipNumber,C=u.$ticketNumber),x=s[E][1].split(",").map(function(e){return""+e.trim()=="No Seats"?"":e.trim()}),valid(n)&&(l=t.getSpan().nextRegExp(RegExp("Airfare for "+regExpEscape(n))).parentTag("tr1").lastInnerTag("td1").tagContents().innerCapture(/([\d,.]+)/,1),not(l)&&(l=t.getSpan().innerCapture(/Total per Traveler\s+.*?([\d,.]+)/,1)),S[n]={name:n,programName:N,membershipNumber:f,ticketNumber:C,totalPrice:l,seatList:x,seats:{},seatingType:{}}));if(m=t.getSpan().nextText("Departs").nextText("Arrives").parentTag("table1").allInnerTags("td1").filter(function(e){return e.innerTag("table2").exists()}),0===m.length)for(m=t.getSpan().nextText("Departs").nextText("Arrives").parentTag("table1").allInnerTags("td1").filter(function(e){return e.innerText("Details for Flights").exists()}),y=0;m.length>y;y++)p=m[y],g=p.innerCapture(/($<name>.*)\s+($<flightNumber>\d+)/),c=g?g.$name.trim():null,o=g?g.$flightNumber.trim():null,h=p.innerCapture(/Depart (?:.*)\(([A-Z]{3})\)/,1),d=getFuzzyDate(p.innerCapture(regExpFormatted(/\(\1\)\s+(.*)/,""+h),1)),T=p.innerCapture(/Arrive (?:.*)\(([A-Z]{3})\)/,1),v=getFuzzyDate(p.innerCapture(regExpFormatted(/\(\1\)\s+(.*)/,""+T),1)),b=null,valid(c,o)&&(b=p.innerCapture(RegExp(regExpEscape(""+c)+"\\s+"+regExpEscape(""+o)+"\\s+(.*?)\\s+\\|"),1)),r(c,o,h,d,T,v,S,b);else for(y=0;m.length>y;y++)p=m[y].innerTag("table2").allInnerTagsFiltered("td2"),p.length>=5&&(g=p[0].innerCapture(/($<name>.*)\s+($<flightNumber>\d+)/),c=g?g.$name.trim():null,o=g?g.$flightNumber:null,h=p[1].innerCapture(/\(([A-Z]{3})\)/,1),d=getFuzzyDate(p[2]),T=p[3].innerCapture(/\(([A-Z]{3})\)/,1),v=getFuzzyDate(p[4]),b=null,valid(c,o)&&(b=m[y].innerCapture(RegExp(regExpEscape(""+c)+"\\s+"+regExpEscape(""+o)+"\\s+(.*?)\\s+\\|"),1)),r(c,o,h,d,T,v,S,b))}var k=[];for(y=0;A.length>y;y++)for(var R=A[y],F=Object.keys(R.passengers),I=0;F.length>I;I++){var z=R.passengers[F[I]];/alaska/i.test(R.airlineName)&&(R.airlineCode="AS"),$={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:R.airlineName,airlineCode:R.airlineCode,flightNumber:R.flightNumber,departureAirportFuzzy:R.departureAirport,departureAirportCode:R.departureCode,departureTime:R.departureTime,arrivalAirportFuzzy:R.arrivalAirport,arrivalAirportCode:R.arrivalCode,arrivalTime:R.arrivalTime},underName:{"@type":"http://schema.org/Person",name:z.name},checkinUrl:i,reservationStatus:"http://schema.org/Reservation"+(R.reservationStatus||"Confirmed"),reservationId:valid(R.reservationId)?R.reservationId:a,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:z.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:z.seats[R.flightNumber],seatingType:z.seatingType[R.flightNumber]}},totalPrice:z.totalPrice,priceCurrency:z.priceCurrency},not(z.membershipNumber)||($.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:z.membershipNumber,programName:z.programName}),k.push($)}return k.length?k:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/334/337","SGcbe9a31a")]);
