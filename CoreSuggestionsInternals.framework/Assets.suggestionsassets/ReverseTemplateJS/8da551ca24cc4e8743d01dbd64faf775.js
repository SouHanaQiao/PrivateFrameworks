// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("expediamail.com-travel-confirmation-fr",function(e){return/confirmation de voyage/.test(e.subject)||/Expedia voyage confirm\xe9\(e\)/.test(e.subject)},function(e){if(/confirmation de voyage/.test(e.subject)||/Expedia voyage confirm\xe9\(e\)/.test(e.subject)){if(int(e.epoch)<1388534400)return CONTINUE;var t={flight:{},hotel:{},car:{}};t.reservationId="Num\xe9ro de voyage:",t.totalPrice="-----",t.taxes="-----",t.flight.names=/-----/,t.flight.to="-----",t.hotel.name="-----",t.hotel.totalPrice="-----",t.hotel.telephone="-----",t.hotel.checkin="-----",t.hotel.checkout="-----",t.car.name="Conducteur :",t.car.totalPrice="Total de location de voiture",t.car.provider="Voiture :",t.car.pickup="Prise en charge :",t.car.dropoff="Restitution :";var o="fr_FR",a=loadHelper("expediamail.com-travel-confirmation-skeleton.js");return a(e,o,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1064/1107","SG8b40faaa")]);
