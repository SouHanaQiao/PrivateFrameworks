// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("orbitz.com-itinerary-en",function(e){return/Flight Confirmation/.test(e.subject)||/Flight Cancellation/.test(e.subject)||/Rental Car Confirmation/.test(e.subject)||/Rental Car Cancellation/.test(e.subject)||/Hotel Confirmation/.test(e.subject)||/Hotel Cancellation/.test(e.subject)||/Package Summary/.test(e.subject)||/Reservation Cancellation/.test(e.subject)},function(e){if(/Flight Confirmation/.test(e.subject)||/Flight Cancellation/.test(e.subject)||/Rental Car Confirmation/.test(e.subject)||/Rental Car Cancellation/.test(e.subject)||/Hotel Confirmation/.test(e.subject)||/Hotel Cancellation/.test(e.subject)||/Package Summary/.test(e.subject)||/Reservation Cancellation/.test(e.subject)){var t=loadHelper("orbitz.com-microdata-parser.js"),a=t(e);return a?a:CONTINUE}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1165/1166","SG5bf476c0"),new ReverseTemplate("orbitz.com-itinerary-es",function(e){return/Confirmaci\xf3n del vuelo/.test(e.subject)||/Cancelaci\xf3n de vuelo/.test(e.subject)||/Confirmaci\xf3n del alquiler/.test(e.subject)||/Cancelaci\xf3n del Alquiler/.test(e.subject)||/Confirmaci\xf3n del hotel/.test(e.subject)||/Cancelaci\xf3n de Hotel/.test(e.subject)||/Resumen del paquete/.test(e.subject)||/Cancelaci\xf3n de un paquete/.test(e.subject)||/Petici\xf3n de reserva de vuelo/.test(e.subject)},function(e){if(/Confirmaci\xf3n del vuelo/.test(e.subject)||/Cancelaci\xf3n de vuelo/.test(e.subject)||/Confirmaci\xf3n del alquiler/.test(e.subject)||/Cancelaci\xf3n del Alquiler/.test(e.subject)||/Confirmaci\xf3n del hotel/.test(e.subject)||/Cancelaci\xf3n de Hotel/.test(e.subject)||/Resumen del paquete/.test(e.subject)||/Cancelaci\xf3n de un paquete/.test(e.subject)||/Petici\xf3n de reserva de vuelo/.test(e.subject)){var t="es_ES",a=loadHelper("orbitz.com-microdata-parser.js"),n=a(e);if(n)return n;var s={};s.reservationIdPrefix="Localizador:",s.departureHeader="de Salida",s.departurePrefix="Salida",s.arrivalPrefix="Llegada",s.passengerPrefix="Pasajero 1",s.totalCostPrefix="Importe total del viaje";var i=loadHelper("orbitz.com-itinerary-skeleton.js");return i(e,t,s)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1165/1167","SG2225e6d3")]);
