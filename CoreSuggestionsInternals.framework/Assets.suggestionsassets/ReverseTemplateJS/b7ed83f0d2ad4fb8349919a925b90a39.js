// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("ceair-change-zh",function(e){return!0},function(e){if(!/\u3010\u4e1c\u65b9\u822a\u7a7a\u3011/.test(e.plain))return CONTINUE;if(!/(?:\u5347\u8231\u5df2\u6210\u529f\uff0c\u60a8\u5347\u8231\u540e\u7684\u65b0\u8231\u4f4d\u4e3aY\u8231\uff0c\u822a\u73ed\u4fe1\u606f\u4e3a|\u6539\u671f\u64cd\u4f5c\u5df2\u6210\u529f\uff0c\u60a8\u6539\u671f\u540e\u7684\u822a\u73ed\u4fe1\u606f\u4e3a)\uff1a/.test(e.plain))return CONTINUE;var r="zh_Hans_CN",t=Scanner.fromMessage(e);t.setLocale(r);for(var a,i=t.getSpan(),n=[],p=[],o=[],u=/\uff1a(.+?)\u5230(.+?)\uff0c.*?([0-9A-Z]{2})(\d{3,4})\u822a\u73ed\uff0c\u8d77\u98de\u65f6\u95f4\uff1a(\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{2})/,h=i.nextRegExp(u);h!==t.getNullSpan();h=h.nextRegExp(u))a=h.innerCapture(u),a&&6===a.length&&n.push({departureDateTime:a[5].innerDate(),airlineCode:a[3],flightNumber:a[4],departureAirport:a[1],arrivalAirport:a[2]});var m=/\u65c5\u5ba2:(.+?),\u7968\u53f7:([\d\-]+)/;for(h=i.nextRegExp(m);h!==t.getNullSpan();h=h.nextRegExp(m))a=h.innerCapture(m),p.push({name:a[1],ticketNumber:a[2]});return p.forEach(function(e){n.forEach(function(r){ASSERT(r.airlineCode,r.flightNumber,r.departureAirport,r.departureDateTime,r.arrivalAirport)&&o.push({"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineCode:r.airlineCode,flightNumber:r.flightNumber,departureAirportFuzzy:r.departureAirport,departureTime:r.departureDateTime,arrivalAirportFuzzy:r.arrivalAirport},underName:{"@type":"http://schema.org/Person",name:e.name},reservationStatus:"http://schema.org/ReservationConfirmed",reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:e.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat"}}})})}),o.length>=1?o:CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/21/27/28","SG530721d5"),new ReverseTemplate("ceair-confirmation-zh",function(e){return!0},function(e){if(!/\u3010\u4e1c\u65b9\u822a\u7a7a\u3011/.test(e.plain))return CONTINUE;if(/\u6539\u671f\u64cd\u4f5c\u5df2\u6210\u529f\uff0c\u60a8\u6539\u671f\u540e\u7684\u822a\u73ed\u4fe1\u606f\u4e3a\uff1a/.test(e.plain))return CONTINUE;var r="zh_Hans_CN",t=Scanner.fromMessage(e);t.setLocale(r);for(var a,i=t.getSpan(),n=[],p=[],o=[],u=/\u4ece(.+?)\u5230(.+?)\uff0c.*?([0-9A-Z]{2})(\d{3,4})\u822a\u73ed\uff0c\u8d77\u98de\u65f6\u95f4\uff1a(\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{2})/,h=i.nextRegExp(u);h!==t.getNullSpan();h=h.nextRegExp(u))a=h.innerCapture(u),a&&6===a.length&&n.push({departureDateTime:a[5].innerDate(),airlineCode:a[3],flightNumber:a[4],departureAirport:a[1],arrivalAirport:a[2]});var m=/\u65c5\u5ba2[:\uff1a](.+?)[,|\uff0c]\u7968\u53f7[:\uff1a]([\d\-]+)/;for(h=i.nextRegExp(m);h!==t.getNullSpan();h=h.nextRegExp(m))a=h.innerCapture(m),p.push({name:a[1],ticketNumber:a[2]});return p.forEach(function(e){n.forEach(function(r){ASSERT(r.airlineCode,r.flightNumber,r.departureAirport,r.departureDateTime,r.arrivalAirport)&&o.push({"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineCode:r.airlineCode,flightNumber:r.flightNumber,departureAirportFuzzy:r.departureAirport,departureTime:r.departureDateTime,arrivalAirportFuzzy:r.arrivalAirport},underName:{"@type":"http://schema.org/Person",name:e.name},reservationStatus:"http://schema.org/ReservationConfirmed",reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:e.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat"}}})})}),o.length>=1?o:CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/21/27/29","SGd5cf12ff")]);
