// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("agoda.com-cancellation-es",function(e){return/^Cancelacion de la Reserva/.test(e.subject)},function(e){if(!/^Cancelacion de la Reserva/.test(e.subject))return CONTINUE;var a="en_US",l={firstName:"Nombre del cliente",lastName:"Apellido del cliente",reservationId:"Identificador de la reserva",hotelName:"Hotel",checkInDate:"Llegada",checkOutDate:"Salida",originalBookingDetails:"Detalles de la reserva original",cancellationDetails:"Detalles de la cancelaci\xf3n"};return loadHelper("agoda.com-cancellation-skeleton.js")(e,a,l)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/662/664","SGcca882fb")]);
