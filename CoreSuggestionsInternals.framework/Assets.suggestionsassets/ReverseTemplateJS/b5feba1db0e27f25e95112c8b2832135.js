// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("kayak.com-hotel-cancellation-en",function(e){return/^Your KAYAK booking(?: receipt)? for/.test(e.subject)},function(e){if(/^Your KAYAK booking(?: receipt)? for/.test(e.subject)&&/Room Type/.test(e.plain)&&/has been canceled$/.test(e.subject)){var t="en_US",n={};n.cancellation=/has been canceled$/,n.reservationId="Your confirmation number:",n.reservationDetails="Reservation Details",n.checkIn="Check-in",n.checkOut="Check-out",n.guestDetails="Guest Details",n.underName="Guest",n.email="Email",n.price="Total Cost";var o=loadHelper("kayak.com-hotel-skeleton.js");return o(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1129/1135","SGca8d3ecf"),new ReverseTemplate("kayak.com-hotel-confirmation-en",function(e){return/^Your KAYAK booking receipt for/.test(e.subject)},function(e){if(/^Your KAYAK booking receipt for/.test(e.subject)&&!/has been canceled$/.test(e.subject)&&/You're booked\./.test(e.plain)){var t="en_US",n={};n.cancellation=/has been canceled$/,n.reservationId="Your confirmation number:",n.reservationDetails="Reservation Details",n.checkIn="Check-in",n.checkOut="Check-out",n.guestDetails="Guest Details",n.underName="Guest",n.email="Email",n.price="Total Cost";var o=loadHelper("kayak.com-hotel-skeleton.js");return o(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1129/1136","SG3984eb25")]);
