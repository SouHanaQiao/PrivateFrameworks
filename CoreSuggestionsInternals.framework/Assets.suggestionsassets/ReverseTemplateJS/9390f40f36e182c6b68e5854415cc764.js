// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("juneyao-confirmation-zh",function(e){return/\u5df2\u51fa\u7968/.test(e.subject)},function(e){if(!/\u5df2\u51fa\u7968/.test(e.subject))return CONTINUE;var t=Scanner.fromMessage(e);t.setLocale("zh_Hans_CN");for(var r=[],a=t.getSpan().allInnerTags("table5")[1].allInnerTagsFiltered("td5"),n=a[1].split(" ")[0],i=(a[2].innerCapture(/(.+)-(.+)\(/),a[3]),s="RMB",p=t.getSpan().nextText("\u822a\u73ed\u4fe1\u606f\u5982\u4e0b").nextTag("table5").nextTag("table5").allInnerTags("tr5"),o=t.getSpan().nextText("\u4e58\u5ba2\u4fe1\u606f\u5982\u4e0b").nextTag("table5").nextTag("table5").allInnerTags("tr5"),l=0;o.length>l;l++){var c=o[l].allInnerTagsFiltered("td5");if(c&&0!==c.length)for(var g=c[0],h=c[3],u=0;p.length>u;u++){var m=p[u].allInnerTagsFiltered("td5");if(m&&0!==m.length){var v,d,T=m[0];[,v,d]=m[1].innerCapture(/(\w{2})(\d+)/);var S=m[2].split("\n\u8d77\u98de\u65f6\u95f4\uff1a"),y=S[0],f=S[1],z=combineDateAndTime(T,f),F=m[3].split("\n\u62b5\u8fbe\u65f6\u95f4\uff1a"),b=F[0],I=F[1],C=combineDateAndTime(T,I);if(unSpanDate_(z)>unSpanDate_(C)&&(C=unSpanDate_(modifyDate(C,1))),ASSERT(g,a,m)){var R={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineCode:v,flightNumber:d,departureAirportFuzzy:y,departureTime:z,arrivalAirportFuzzy:b,arrivalTime:C},underName:{"@type":"http://schema.org/Person",name:g},reservationId:n,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:h,ticketedSeat:{"@type":"http://schema.org/Seat"}},totalPrice:i,priceCurrency:s,reservationStatus:"http://schema.org/ReservationPending"};r.push(R)}}}}return r.length?r:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/472/473","SGaf927c9a"),new ReverseTemplate("juneyao-pending-zh",function(e){return/\u5df2\u751f\u6210/.test(e.subject)},function(e){if(!/\u5df2\u751f\u6210/.test(e.subject))return CONTINUE;var t=Scanner.fromMessage(e);t.setLocale("zh_Hans_CN");var r=[],a=t.getSpan().innerCapture(/\u5c0a\u656c\u7684 (.+), /,1),n=t.getSpan().allInnerTags("table5")[1].allInnerTagsFiltered("td5"),i=n[1].split(" ")[0],s=n[2].innerCapture(/(.+)-(.+)\(/),p=s[1],o=s[2],l=n[3],c="RMB";if(ASSERT(a,n)){var g={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",departureAirportFuzzy:p,arrivalAirportFuzzy:o},underName:{"@type":"http://schema.org/Person",name:a},reservationId:i,reservedTicket:{"@type":"http://schema.org/Ticket",ticketedSeat:{"@type":"http://schema.org/Seat"}},totalPrice:l,priceCurrency:c,reservationStatus:"http://schema.org/ReservationPending"};r.push(g)}return r.length?r:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/472/474","SG6905b9d1")]);
