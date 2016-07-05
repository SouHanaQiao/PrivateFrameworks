// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("muenchenticket-confirmation-de",function(e){return/^Reservierungsbestaetigung /.test(e.subject)},function(e){var t="de_DE",n={};n.reservationIdRegExp=/Kartenbestellung Nr. (.+) vom/,n.nameRegExp=/Sehr geehrte (.+),/,n.priceRegExp=/Gesamtpreis inkl\. MwSt\.: (.+)/,n.ticketDetailsPrefix="Bestelldetails:",n.ticketDetailsSuffix="Gesamtpreis inkl. MwSt.",n.eventNameRegExp=/, [A-Z][a-z]\. (.+)/,n.ticketNumberRegExp=/(.+) \| .+ \| .+/,n.ticketVenueRegExp=/([^,\n]+),.+Reihe: (.+), Sitz: (.+)/;var r=Scanner.fromMessage(e);r.setLocale(t);var a,i,s,p,c,m,o,g,u,x,v,h,R,E,S=[];for(a=r.getSpan().innerCapture(n.reservationIdRegExp,1),i=r.getSpan().innerCapture(n.nameRegExp,1),s=r.getSpan().innerCapture(n.priceRegExp,1),s&&s.exists()&&(p=s.innerCapture(/([\d,.]+)/,1),c=s.innerCapture(/([^\d,.]+)/,1).trim()),E=r.getDetachedSpan(""+r.getSpan().next(n.ticketDetailsPrefix).withEnd(r.getSpan().next(n.ticketDetailsPrefix).next(n.ticketDetailsSuffix).getStart())),R=E.nextDate();R.exists();){if(v=r.getDetachedSpan(""+R+" "+R.nextDate()).innerDate(),R=R.next(n.eventNameRegExp),R.exists()&&(h=R.innerCapture(n.eventNameRegExp,1).trim()),R=R.next(n.ticketNumberRegExp),R.exists()&&(m=R.innerCapture(n.ticketNumberRegExp,1).trim()),R=R.next(n.ticketVenueRegExp),R.exists()&&(o=R.innerCapture(n.ticketVenueRegExp),o&&4===o.length&&(g=o[1].trim(),u=o[2].trim(),x=o[3].trim())),ASSERT(v,m)){var l={startDate:v,eventName:h,ticketNumber:m,eventLocation:g,seatRow:u,seatNumber:x};S.push(l)}R.exists()&&(R=R.nextDate())}var k=[];return S.forEach(function(e){if(ASSERT(a)){var t={"@context":"http://schema.org","@type":"http://schema.org/EventReservation",name:i,totalPrice:p,priceCurrency:c,reservationStatus:"http://schema.org/ReservationConfirmed",reservationId:a,reservedTicket:{"@type":"http://schema.org/Ticket",ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:e.seatNumber,seatRow:e.seatRow},ticketNumber:e.ticketNumber},reservationFor:{"@type":"http://schema.org/Event",eventStatus:"http://schema.org/EventConfirmed",name:e.eventName,startDate:e.startDate,location:{"@type":"http://schema.org/Place",name:e.eventLocation}}};k.push(t)}}),k.length?k:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1393/1394","SG95e716b1"),new ReverseTemplate("muenchenticket-confirmation-invoice-de",function(e){return""===e.subject},function(e){if(""!==e.subject||!/\svielen Dank f\xfcr die Bestellung von/.test(e.plain))return CONTINUE;var t="de_DE",n={};n.reservationIdRegExp=/Kartenbestellung (.+) vom/,n.nameRegExp=/Sehr geehrte (.+),/,n.priceRegExp=/insgesamt (.+) bei uns/,n.ticketDetailsPrefix="Der Inhalt Ihrer Bestellung:",n.ticketDetailsSuffix="\n--\n",n.eventNameRegExp=/, [A-Z][a-z]\. (.+)/,n.ticketNumberRegExp=/(.+) \| .+ \| .+/,n.ticketVenueRegExp=/([^,\n]+),.+Reihe: (.+), Sitz: (.+)/;var r=Scanner.fromMessage(e);r.setLocale(t);var a,i,s,p,c,m,o,g,u,x,v,h,R,E,S=[];for(a=r.getSpan().innerCapture(n.reservationIdRegExp,1),i=r.getSpan().innerCapture(n.nameRegExp,1),s=r.getSpan().innerCapture(n.priceRegExp,1),s&&s.exists()&&(p=s.innerCapture(/([\d,.]+)/,1),c=s.innerCapture(/([^\d,.]+)/,1).trim()),E=r.getDetachedSpan(""+r.getSpan().next(n.ticketDetailsPrefix).withEnd(r.getSpan().next(n.ticketDetailsPrefix).next(n.ticketDetailsSuffix).getStart())),R=E.next(n.ticketNumberRegExp);R.exists();){if(R.exists()&&(m=R.innerCapture(n.ticketNumberRegExp,1).trim()),R=R.nextDate(),v=r.getDetachedSpan(""+R+" "+R.nextDate()).innerDate(),R=R.next(n.eventNameRegExp),R.exists()&&(h=R.innerCapture(n.eventNameRegExp,1).trim()),R=R.next(n.ticketVenueRegExp),R.exists()&&(o=R.innerCapture(n.ticketVenueRegExp),o&&4===o.length&&(g=o[1].trim(),u=o[2].trim(),x=o[3].trim())),ASSERT(v,m)){var l={startDate:v,eventName:h,ticketNumber:m,eventLocation:g,seatRow:u,seatNumber:x};S.push(l)}R.exists()&&(R=R.next(n.ticketNumberRegExp))}var k=[];return S.forEach(function(e){if(ASSERT(a)){var t={"@context":"http://schema.org","@type":"http://schema.org/EventReservation",name:i,totalPrice:p,priceCurrency:c,reservationStatus:"http://schema.org/ReservationConfirmed",reservationId:a,reservedTicket:{"@type":"http://schema.org/Ticket",ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:e.seatNumber,seatRow:e.seatRow},ticketNumber:e.ticketNumber},reservationFor:{"@type":"http://schema.org/Event",eventStatus:"http://schema.org/EventConfirmed",name:e.eventName,startDate:e.startDate,location:{"@type":"http://schema.org/Place",name:e.eventLocation}}};k.push(t)}}),k.length?k:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1393/1395","SGc0de8855")]);
