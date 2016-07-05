// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e){if(e.html){var r,t=e.html.replace('style="display:none>','style="display:none">'),a=parseMicrodata(t);if(a.length){for(var o=!1,n=0;a.length>n;n++){if("http://schema.org/FoodEstablishmentReservation"!==a[n]["@type"]){o=!0;break}a[n]["@context"]="http://schema.org",ASSERT(OR(a[n].reservationId,a[n].reservationNumber),a[n].startTime,a[n].reservationFor)}if(!o)return a}else{if(r=/<script type="application\/ld\+json">(?:[\s\S]*<\!\[CDATA\[)?([\s\S]+?)(?:\]\]>[\s\S]*)?<\/script>/.exec(e.html),!r)return r;if(a=JSON.parse(r[1].replace(/[\r\n]/g," ").replace(/\\\'/g,"'").replace(/  /g," ")),ASSERT(a.reservationNumber,a.pickupTime,a.underName.name,a.reservationFor.rentalCompany)){var i={"@context":"http://schema.org","@type":"http://schema.org/RentalCarReservation",totalPrice:a.price,priceCurrency:a.priceCurrency,reservationId:a.reservationNumber,reservationStatus:a.reservationStatus,checkinUrl:a.checkinUrl,modifyReservationUrl:a.modifyReservationUrl,cancelReservationUrl:a.cancelReservationUrl,underName:{"@type":"http://schema.org/Person",name:a.underName.name},provider:{"@type":"http://schema.org/Organization",name:a.reservationFor.rentalCompany.name},pickupTime:a.pickupTime,pickupLocation:{"@type":"http://schema.org/Place",name:a.pickupLocation.name,telephone:a.pickupLocation.telephone,address:a.pickupLocation.address},dropoffTime:a.dropoffTime,dropoffLocation:{"@type":"http://schema.org/Place",name:a.dropoffLocation.name,telephone:a.dropoffLocation.telephone,address:a.dropoffLocation.address},reservationFor:{"@type":"http://schema.org/Car",brand:{"@type":"http://schema.org/Organization",name:a.reservationFor.brand.name},license:a.license,color:a.color}};return i.dropoffLocation.address["@type"]=i.pickupLocation.address["@type"]="http://schema.org/PostalAddress",[i]}}}}}).call();
