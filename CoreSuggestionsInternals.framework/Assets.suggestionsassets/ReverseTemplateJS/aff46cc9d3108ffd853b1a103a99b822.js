// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("delta.com-checkin-or-upgrade-en",function(e){return/^It's Time To Check-In/i.test(e.subject)||/^Your upgrade is now confirmed/.test(e.subject)},function(e){if(/^It's Time To Check-In/i.test(e.subject)||/^Your upgrade is now confirmed/.test(e.subject)){var t,r="en_US",a={};return a.name="Hello,",a.reservationId=/Delta\s+Confirmation\s+\#\:/,a.departure=/DEPART/,a.seat="Seat",(t=/Hello,/.test(e.plain)?loadHelper("delta.com-checkin-skeleton.js"):loadHelper("delta.com-checkin-skeleton-2013-2014.js"))(e,r,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/401/402","SG4072af47"),new ReverseTemplate("delta.com-confirmation-en",function(e){return!0},function(e){if(/Flight Receipt and Itinerary/.test(e.html)||/Award Flight Receipt/.test(e.html)){var t="en_US",r=loadHelper("delta.com-vocabulary-skeleton-en.js")(),a=loadHelper("delta.com-skeleton.js");return a(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/401/403","SGb56f64b6"),new ReverseTemplate("delta.com-itinerary-receipt-en",function(e){var t=Scanner.fromMessage({plain:e.subject});return t.setLocale("en_US"),t.getSpan().innerDate().exists()||/^Delta Reservation Itinerary/.test(e.subject)},function(e){if(/Delta\s+Reservation\s+Itinerary/.test(e.subject)&&/Hello\,/.test(e.html)){var t="en_US",r=loadHelper("delta.com-vocabulary-skeleton-en.js")(),a=loadHelper("delta.com-skeleton.js");return a(e,t,r)}var n=Scanner.fromMessage(e);if(n.setLocale("en_US"),n.getSpan().nextRegExp(/YOUR ITINERARY AND (?:RECEIPT|PASSENGER DETAILS)/).exists()){var i,o,s,l,p,u,m,c,g,d,h,b=[],f={};if(o=n.getSpan().innerCapture(/\bFlight Confirmation #: (\S+)/,1),s=o.parentTag("table4").withStart(o.getStart()).innerLink(),i=n.getSpan().innerCapture(/\bTicket #: (\d+)/,1),not(o)&&(o=n.getSpan().innerCapture(/\bYour Delta Confirmation #: (\S+)/,1)),d=n.getSpan().nextText("Passenger Details").nextTag("table5").tagContents().innerCapture(/\b($<name>.*)\s?(?:\bSkyMiles #($<membershipNumber>.*?)($<programName>\s?[A-z]*?) <)?/)){l=d.$name.trim(),l.innerCapture(/.*? </)&&(l=l.innerCapture(/(.*?) </,1));var v=""+l;f[v]={name:l,programName:d.$programName.exists()?"SkyMiles"+d.$programName:"",membershipNumber:""+d.$membershipNumber,seats:{},seatingType:{}};var T=n.getSpan().nextText("Passenger Details").nextTag("table6").allInnerTagsFiltered("td6");if(T.length&&T.length%2===0)for(var C=0,S=T.length/2;S>C;C++)/(?:See delta\.com|Not Assigned)/.test(T[2*C+1])||(c=""+T[2*C].innerCapture(/([\d]+)/,1),p=T[2*C+1].innerCapture(/(\d+[A-Z])/,1),f[v].seats[""+c]=p);g=n.getSpan().nextRegExp(/\b(?:Ticket Amount|Total):/).nextTag("td4").tagContents().innerCapture(/($<totalPrice>[\d,.]+)\s?($<priceCurrency>[A-Z]{3})?/),g&&(f[v].totalPrice=g.$totalPrice,f[v].priceCurrency=g.$priceCurrency)}m=n.getSpan().nextText("Your Flight Information").nextTag("table4").allInnerTagsFiltered("td4");for(var N,y,A,R,k=/\b($<date>(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) \d{2}(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))/,j=/\b($<type>LV|AR) ($<time>\d{1,2}:\d{2}(?:am|pm|N))/,x=/\b($<airlineName>.*) ($<flightNumber>[\d]+)/,$={},I={},C=0;y=m[C++];)if(y.innerCapture(j)){if(A=y.innerCapture(j),N=""+A.$type=="LV"?"departure":"arrival",y.innerCapture(k)&&(u=y.innerCapture(k,1)),valid(u,A.$time)){var E=""+A.$time;"12:00N"===E&&(E="12:00pm"),R=n.getDetachedSpan(""+u+" "+E),$[N+"Time"]=R.innerDate()}}else y.innerCapture(k)?u=y.innerCapture(k,1):y.innerCapture(x)?(h=y.innerCapture(x),h&&($.airlineName=h.$airlineName,$.flightNumber=h.$flightNumber,$.airlineCode=/delta/gi.test($.airlineName)?"DL":null),ASSERT($.departureTime,$.arrivalTime,$.departureAirport,$.arrivalAirport,$.airlineName,$.flightNumber)&&(I[""+$.airlineName]=!0,$.passengers=f,b.push($)),$={}):N&&($[N+"Airport"]=""+y,N=null);var F=[],D=n.getSpan().nextText("Baggage Fees"),P=D.nextRegExp(/1[:)]On Delta[- ]operated flights/).previousTag("table4").collapseToEnd();P.exists()&&(D=D.withEnd(P.getStart()));for(var A,Y=D.allInnerDates(),U=function(e){return 3===(""+e).length?e:""},C=0;Y.length>C;C++)for(var H,L=Y[C],w=Y[C+1]||P,R=L.super(w),M=R.allInnerTagsFiltered("td5"),z=0;H=M[z];z++)I[H]&&M.length>z+2&&F.push([U(M[z+1]),U(M[z+2])]);if(F.length===b.length)for(var C=0,S=b.length;S>C;C++)b[C].departureCode=F[C][0],b[C].arrivalCode=F[C][1];for(var O=[],C=0;b.length>C;C++){var $=b[C];ASSERT(OR($.airlineCode,AND($.departureCode,$.arrivalCode)));for(var _=Object.keys($.passengers),z=0;_.length>z;z++){var G=$.passengers[_[z]],J={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:$.airlineName,airlineCode:$.airlineCode,flightNumber:$.flightNumber,departureAirportFuzzy:$.departureAirport,departureAirportCode:$.departureCode,departureTime:$.departureTime,arrivalAirportFuzzy:$.arrivalAirport,arrivalAirportCode:$.arrivalCode,arrivalTime:$.arrivalTime},underName:{"@type":"http://schema.org/Person",name:G.name},checkinUrl:s,reservationId:o,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:G.totalPrice,priceCurrency:G.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:i,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:G.seats[$.flightNumber],seatingType:G.seatingType[$.flightNumber]}}};valid(G.membershipNumber,G.programName)&&(J.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:G.membershipNumber,programName:G.programName}),O.push(J)}}if(O.length)return O}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/401/406","SGfeea000c"),new ReverseTemplate("jetblue.com-itinerary-checkin-2014",function(e){return/^(?:Your\s)?Itinerary for your upcoming trip$/i.test(e.subject)||/^Check in for your flight to/.test(e.subject)||/^Your Flight Receipt/.test(e.subject)},function(e){if(/^(?:Your\s)?Itinerary for your upcoming trip$/i.test(e.subject)||/^Check in for your flight to/.test(e.subject)||/^Your Flight Receipt/.test(e.subject)){var t,r="en_US",a={};return/^Your/.test(e.subject)?(a.terminal="TERMINAL",a.to="to",a.select_seat=/select seat/,a.total=/TOTAL/,a.reservationId=/Your confirmation code is\s+(.*)\s+</,t=loadHelper("jetblue-itinerary-skeleton-2015.js")):t=loadHelper("jetblue-itinerary-skeleton-2014.js"),t(e,a,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/465/467","SG8f76c399")]);
