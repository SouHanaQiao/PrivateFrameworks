// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,r){var a=Scanner.fromMessage(e);a.setLocale(t);var n=a.getSpan(),i=r.isCancellation?"Cancelled":"Confirmed",o=[],p=[];if(n.next("Travelers").parentAnyTag("table").allInnerTags("tr5").slice(2).forEach(function(e){o.push({name:e.nextAnyTag("td").tagContents().innerCapture(/#\d+?\s(.+)/,1)})}),0===o.length&&o.push({}),n.next(r.hotelReservationIdRegExp).exists()){var s,g,c,h,l,d;s=n.next(r.hotelReservationIdRegExp).parentAnyTag("td").tagContents().innerCapture(r.hotelReservationIdRegExp,1),[h,l,d]=s.parentAnyTag("table").allInnerTags("tr4").slice(2)[0].allInnerTags("td4").map(function(e){return e.tagContents()}),[h,g]=(""+h).split(/\s-\s/),ASSERT(l,g||h)&&o.forEach(function(e){p.push({"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:e.name},checkinTime:l,checkoutTime:d,reservationStatus:"http://schema.org/Reservation"+i,reservationId:s,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:g,telephone:c,address:h}})})}if(n.next(r.carReservationIdRegExp).exists()){var u,m,v,f,R,T,C;u=n.next(r.carReservationIdRegExp).parentAnyTag("td").tagContents().innerCapture(r.carReservationIdRegExp,1),[m,f,T]=u.parentAnyTag("table").allInnerTags("tr4").slice(2)[0].allInnerTags("td4").map(function(e){return e.tagContents()}),[,m,v]=m.innerCapture(r.carProviderNameRegExp),[f,R]=(""+f).split(/\n/).map(function(e){return a.getDetachedSpan(e)}),R=R.innerCapture(r.carLocationAddressRegExp,1),[T,C]=(""+T).split(/\n/).map(function(e){return a.getDetachedSpan(e)}),C=C.innerCapture(r.carLocationAddressRegExp,1),ASSERT(R||pickUpLocationName,f)&&o.forEach(function(e){p.push({"@context":"http://schema.org","@type":"http://schema.org/RentalCarReservation",reservationStatus:"http://schema.org/Reservation"+i,reservationId:u,underName:{"@type":"http://schema.org/Person",name:e.name},provider:{"@type":"http://schema.org/Organization",name:m},reservationFor:{"@type":"http://schema.org/Car",brand:{"@type":"http://schema.org/Organization",name:v}},pickupTime:f,pickupLocation:{"@type":"http://schema.org/Place",address:R},dropoffTime:T,dropoffLocation:{"@type":"http://schema.org/Place",address:C}})})}if(n.next(r.flightReservationIdRegExp).exists()){var x,y=[];x=n.next(r.flightReservationIdRegExp).parentAnyTag("td").tagContents().innerCapture(r.flightReservationIdRegExp,1),x.parentAnyTag("table").allInnerTags("tr4").slice(2,-1).forEach(function(e){var t,n,i,o,p,s,g,c,h=e.allInnerTags("td4").map(function(e){return e.tagContents()});[,t,n]=h[1].innerCapture(r.flightNumberRegExp),[,i,o,s,g]=h[2].innerCapture(r.flightRouteRegExp),[,p,c]=h[3].innerCapture(r.flightDateTimesRegExp),h[0]=(""+h[0]).replace(/.+ (\d{1,2})-(.+)-(\d{2})/,"$1 $2 20$3"),p=h[0]+" "+p,c=h[0]+" "+c,p=a.getDetachedSpan(p),c=a.getDetachedSpan(c),y.push({airlineCode:t,flightNumber:n,departureAirport:i,departureAirportCode:o,departureDateTime:p,arrivalAirport:s,arrivalAirportCode:g,arrivalDateTime:c})}),y.forEach(function(e){o.forEach(function(t){ASSERT(e.airlineCode,e.flightNumber,e.departureAirport,e.departureDateTime),p.push({"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineCode:e.airlineCode,airlineName:e.airlineName,flightNumber:e.flightNumber,departureAirportFuzzy:e.departureAirport,departureAirportCode:e.departureAirportCode,departureTime:e.departureDateTime,arrivalAirportFuzzy:e.arrivalAirport,arrivalAirportCode:e.arrivalAirportCode,arrivalTime:e.arrivalDateTime},underName:{"@type":"http://schema.org/Person",name:t.name},reservationId:x,reservationStatus:"http://schema.org/Reservation"+i,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:t.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:t.seat,seatingType:null}}})})})}return p}}).call();
