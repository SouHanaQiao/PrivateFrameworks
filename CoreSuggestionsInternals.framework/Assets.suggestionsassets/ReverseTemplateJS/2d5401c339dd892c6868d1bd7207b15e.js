// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("ctrip.com-flight-confirmation-zh",function(e){return/\u673a\u7968\u786e\u8ba4\u5355/.test(e.subject)},function(e){if(/\u673a\u7968\u786e\u8ba4\u5355/.test(e.subject)&&/\u8ba2\u5355\u5df2\u7ecf\u51fa\u7968\u6210\u529f\u3002/.test(e.plain)){var r=(Scanner.fromMessage(e),"zh_Hans_CN"),t={};t.reservationIdPrefix="\u8ba2\u5355\u53f7\uff1a",t.singleTripPrefix="\u5355\u7a0b",t.roundTripPrefix="\u5f80\u8fd4\u7a0b",t.conjectionPrefix="\u8054\u7a0b",t.legPrefix="\u822a\u7a0b",t.ticketPrefix="\u7968\u53f7\uff1a",t.totalCostPrefix="\u603b\u91d1\u989d\uff1a";var a=loadHelper("ctrip-flight-confirmation-skeleton.js");return a(e,r,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1040/1042","SG29101cff"),new ReverseTemplate("ctrip.com-flight-order-en",function(e){return/Ctrip flight order \(.*\) is being processed/.test(e.subject)},function(e){if(/Ctrip flight order \(.*\) is being processed/.test(e.subject)){var r=(Scanner.fromMessage(e),"en_US"),t={};t.itinerayHeader="Flight details:",t.legPrefix="Route #",t.flightPrefix="Flight no:",t.departurePrefix="Departure:",t.arrivalPrefix="Arrival:",t.totalCostPrefix="Total Amount:",t.passengerHeader="Passenger info:",t.passengerPrefix="Passenger #";var a=loadHelper("ctrip-flight-order-skeleton.js");return a(e,r,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1040/1043","SGf59b9a5a"),new ReverseTemplate("ctrip.com-flight-order-zh",function(e){return/\u651c\u7a0b\u6a5f\u7968\u8a02\u55ae.*\u6b63\u5728\u8655\u7406\u4e2d/.test(e.subject)},function(e){if(/\u651c\u7a0b\u6a5f\u7968\u8a02\u55ae.*\u6b63\u5728\u8655\u7406\u4e2d/.test(e.subject)){var r=(Scanner.fromMessage(e),"zh_Hans_CN"),t={};t.itinerayHeader="\u822a\u73ed\u8a73\u60c5\uff1a",t.legPrefix="\u822a\u7a0b#",t.flightPrefix="\u822a\u73ed\u7de8\u865f:",t.departurePrefix="\u51fa\u767c:",t.arrivalPrefix="\u5230\u9054:",t.totalCostPrefix="\u7e3d\u50f9:",t.passengerHeader="\u65c5\u5ba2\u8cc7\u6599:",t.passengerPrefix="\u65c5\u5ba2#";var a=loadHelper("ctrip-flight-order-skeleton.js");return a(e,r,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1040/1044","SG458568bf"),new ReverseTemplate("ctrip.com-flight-reservation-en",function(e){return/reservation confirmation/.test(e.subject)},function(e){if(/Ctrip flight order \(.*\) reservation confirmation/.test(e.subject)){var r=(Scanner.fromMessage(e),"en_US"),t={};t.itineraryHeader="Thank you for using Ctrip.",t.reservationIdPrefix="Order No:",t.totalCostPrefix="Total amount:",t.passengerHeader="Passenger info:";var a=loadHelper("ctrip-flight-reservation-skeleton.js");return a(e,r,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1040/1045","SG9e781172"),new ReverseTemplate("ctrip.com-flight-zh",function(e){return/\u673a\u7968\u786e\u8ba4\u5355/.test(e.subject)},function(e){if(/\u673a\u7968\u786e\u8ba4\u5355/.test(e.subject)&&/\u673a\u7968\u786e\u8ba4\u5355/.test(e.plain)){var r=Scanner.fromMessage(e);r.setLocale("zh_Hans_CN");var t,a,i,n,s,o,l,p,u,c,f,g,m,h,d,v=[],T={};t=r.getSpan().innerCapture(/\u8ba2\u5355\u53f7\uff1a (\d+)/,1),l=r.getSpan().nextText("\u7968\u6b3e\u603b\u8ba1:").nextTag("td1").tagContents().innerCapture(/($<priceCurrency>[A-Z]{3}) ($<totalPrice>[\d,.]+)$/),u=l?l.$priceCurrency:null,p=l?l.$totalPrice:null,i=r.getSpan().nextText("\u4e58\u673a\u4eba\u59d3\u540d").parentTag("table1").allInnerTags("tr1").map(function(e){return e.allInnerTagsFiltered("td1")});for(var b=1;i.length>b;b++)T[""+i[b][0]]={name:i[b][0],ticketNumber:i[b][1],totalPrice:p,priceCurrency:u,seats:{},seatingType:{}};s=r.getSpan().nextText("\u822a\u7a0b").nextText("\u822a\u73ed\u53f7").nextText("\u51fa\u53d1\u57ce\u5e02").parentTag("table1").allInnerTags("tr1").map(function(e){return e.allInnerTagsFiltered("td1")});for(var b=1;s.length>b;b++)n=s[b],c=n[1].innerCapture(/($<airlineCode>\D+)($<flightNumber>\d+)/),f=c?c.$airlineCode:null,o=c?c.$flightNumber:null,m=n[2],d=n[3],g=n[4].innerDate(),h=n[5].innerDate(),ASSERT(f,o,m,g,d,h)&&v.push({airlineCode:f,flightNumber:o,departureAirport:m,departureTime:g,arrivalAirport:d,arrivalTime:h,passengers:T});for(var C,x=[],b=0;v.length>b;b++)for(var P=v[b],N=Object.keys(P.passengers),y=0;N.length>y;y++){var S=P.passengers[N[y]];C={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineCode:P.airlineCode,flightNumber:P.flightNumber,departureAirportFuzzy:P.departureAirport,departureAirportCode:P.departureCode,departureTime:P.departureTime,arrivalAirportFuzzy:P.arrivalAirport,arrivalAirportCode:P.arrivalCode,arrivalTime:P.arrivalTime},underName:{"@type":"http://schema.org/Person",name:S.name},checkinUrl:a,reservationId:t,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:S.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:S.seats[P.flightNumber],seatingType:S.seatingType[P.flightNumber]}},totalPrice:S.totalPrice,priceCurrency:S.priceCurrency,reservationStatus:"http://schema.org/ReservationConfirmed"},valid(S.membershipNumber,S.programName)&&(C.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:S.membershipNumber,programName:S.programName}),x.push(C)}if(x.length)return x}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1040/1046","SGea24a503")]);
