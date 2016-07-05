// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("hotels.com-travel-cancellation-en",function(e){return/^Hotels.com cancellation confirmed/.test(e.subject)},function(e){if(/^Hotels.com cancellation confirmed/.test(e.subject)){var t="en_US",n={};n.reservationId="Itinerary number:",n.reservationDetails=/Your reservation for ($<name>.*) at ($<hotelName>.+?)\, ($<hotelAddress>.*) from ($<checkInDate>.*) to ($<checkOutDate>.*) has been canceled./;var o=Scanner.fromMessage(e);o.setLocale(t);var r,a,i,c,s,l,m,u,h,v,d,p,f,g;s=o.getSpan().next(n.reservationId).parentAnyTag("td").tagContents().innerCapture(regExpFormatted(/\1\s+(.*)/,n.reservationId),1);var I=o.getSpan().innerCapture(n.reservationDetails);if(r=I.$name,v=I.$hotelName,m=I.$checkInDate,u=I.$checkOutDate,p=I.$hotelAddress,ASSERT(m,u,p))return[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:r,email:a},totalPrice:i,priceCurrency:c,checkinTime:m,checkoutTime:u,modifyReservationUrl:f,cancelReservationUrl:g,reservationStatus:"http://schema.org/ReservationCancelled",reservationId:s,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:v,url:h,telephone:d,geo:valid(l)?{"@type":"http://schema.org/GeoCoordinates",latitude:l.$latitude,longitude:l.$longitude}:null,address:p}}]}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/784/802","SGe90b6ea1"),new ReverseTemplate("hotels.com-travel-confirmation-en",function(e){return/^Hotels\.com\s+travel\s+confirmation/.test(e.subject)},function(e){if(/^Hotels\.com\s+travel\s+confirmation/.test(e.subject)){var t="en_US",n={};n.reservationId="Hotels.com booking ID:",n.name="Main contact:",n.email="E-mail:",n.checkIn="Check in:",n.checkOut="Check out:",n.hotelDetails="Hotel summary";var o=loadHelper("hotels.com-travel-confirmation.js");return o(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/784/803","SGc21f2b63"),new ReverseTemplate("hotels.com-travel-confirmation-it",function(e){return/^Itinerario/.test(e.subject)},function(e){if(/^Itinerario/.test(e.subject)){var t="it_IT",n={};n.reservationId="Hotels.com ID prenotazione:",n.name="Contatto principale:",n.email="Posta elettronica:",n.checkIn="Arrivo:",n.checkOut="Partenza:",n.hotelDetails="Riepilogo hotel";var o=loadHelper("hotels.com-travel-confirmation.js");return o(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/784/804","SG46f6b017")]);
