// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("expediamail.com-travel-confirmation-es_MX",function(e){return/^Confirmaci\xf3n de viaje de Expedia.mx/.test(e.subject)},function(e){if(/^Confirmaci\xf3n de viaje de Expedia.mx/.test(e.subject)){var a={flight:{},hotel:{},car:{}};a.reservationId="N\xfamero de itinerario:",a.totalPrice=/(?:Costo|Viaje) total:/,a.taxes=/(?:Tarifas|Impuestos)/,a.flight.names=/\sTravell?er names?:/,a.flight.to="to",a.hotel.name="Reserva de habitaci\xf3n:",a.hotel.totalPrice="Lodging total:",a.hotel.telephone="Tel\xe9fono:",a.hotel.checkin=/(?:Llegada|Entrada):/,a.hotel.checkout="Salida:",a.car.name="Conductor:",a.car.totalPrice="Car total:",a.car.provider="Auto:",a.car.pickup=/Fecha de entrega del auto:/i,a.car.dropoff=/Devoluci\xf3n:/i;var t="es_MX",o=loadHelper("expediamail.com-travel-confirmation-skeleton.js");return o(e,t,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1064/1106","SG9d0708e2")]);
