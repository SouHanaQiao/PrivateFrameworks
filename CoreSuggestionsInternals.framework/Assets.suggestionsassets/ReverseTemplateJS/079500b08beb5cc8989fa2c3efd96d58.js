// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("sercotel-es",function(e){return/(?:CONFIRMACI\xd3N|MODIFICACI\xd3N|CANCELACI\xd3N) DE RESERVA/.test(e.subject)},function(e){if(/(?:CONFIRMACI\xd3N|MODIFICACI\xd3N|CANCELACI\xd3N) DE RESERVA/.test(e.subject)){var s,t="es_ES",n={};return n.bookingDetails=/Habitaciones/,n.guestName=/\s(.*)\n/,n.guestEmail=/\s(.*@.*)\n/,n.confirmation=/Localizador\s\:\s(.*?)\s/,n.hotelDetails=/INFORMACI\xd3N DEL HOTEL/,n.hotelName=/\s(.*)\n/,n.totalPrice=/Total\s\:\s($<price>.*?)\s+($<currency>.)\s/,n.isCancelled=/CANCELACI\xd3N/,(s=loadHelper("sercotel-confirmation-es-skeleton.js"))(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/905/906","SG065706fc")]);
