// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("vroomvroomvroom.com.au",function(o){return/BOOKING CONFIRMATION\: VroomVroomVroom.com.au/.test(o.subject)||/CANCEL CONFIRMATION\: VroomVroomVroom.com.au Booking/.test(o.subject)},function(o){var e,r="en_AU",t={};return t.cancellationSubject=/CANCEL CONFIRMATION\: VroomVroomVroom.com.au Booking/,t.confirmSubject=/BOOKING CONFIRMATION\: VroomVroomVroom.com.au/,t.confirmSubject.test(o.subject)||t.cancellationSubject.test(o.subject)?(t.guestName="Name:",/Thank you for booking with/.test(o.plain)?(t.reservationId="booking confirmation number",t.vehicleDetails="Vehicle details",t.pickup="Pickup location",t.dropoff="Dropoff location",t.driverDetails="Driver Info",t.name="Name",t.modifyUrl="Modify Your Booking",t.price="Total Cost",e=loadHelper("vroom.com.au-2015-skeleton.js")):(t.reservationId=/Booking Confirmation\: (.+)/,t.guestEmail="Email:",t.car="Vehicle:",t.pickup="Pickup:",t.dropoff="Return:",t.price=/Total Cost: (.+)/,t.priceAlt="Total Cost:",t.modifyUrl="To modify or cancel",t.phone="To contact VroomVroomVroom please phone :",t.cancelGuestName=/Dear\s(.+)\,/,t.cancelReservationId=/Booking Confirmation ([\d\w]+) has been successfully cancelled/,t.cancelPickup=/The booking was due to be picked up from (.+) at (.+)/,e=loadHelper("vroom.com.au-skeleton.js")),e(o,r,t)):CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/233/234","SG2f6ec9bd")]);
