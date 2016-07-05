// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("travelocity.com-2016-hotel",function(e){return/(^Travelocity travel confirmation|Itinerary\s*#)/.test(e.subject)&&/^Travelocity travel confirmation/.test(e.subject)&&/Hotel overview/.test(e.plain)},function(e){if(/(^Travelocity travel confirmation|Itinerary\s*#)/.test(e.subject)&&/^Travelocity travel confirmation/.test(e.subject)&&/Hotel overview/.test(e.plain)){var t,r,a;return t="en_US",r={},r.underPersonName="Reserved for",r.reservationId="Itin#",r.hotelDetails="Hotel overview",r.dates="Reservation dates",r.checkIn="Check-in time",r.checkOut="Check-out time",r.total="Total",r.cancelled=/All rooms in this reservation have been cancelled/,(a=loadHelper("travelocity-hotel-skeleton-2016.js"))(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1186/1190","SG896b2056"),new ReverseTemplate("travelocity.com-car-confirmation-en",function(e){return/^Travelocity\s+travel confirmation/.test(e.subject)&&/Car rental/i.test(e.html)||/Car rental/i.test(e.subject)},function(e){if(/^Travelocity\s+travel confirmation/.test(e.subject)&&/Car rental/i.test(e.html)||/Car rental/i.test(e.subject)){var t,r="en_US",a={};return int(e.epoch)<1404172800?(a.carRentalSummary="Car rental summary",a.provider="Reservation has been sent to",a.reservationId="confirmation number:",a.travelerDetails="Traveler and cost summary",a.name="Driver:",a.price="Car rental total",a.rentalSummary="Car rental summary",a.pickupTime="Pick up:",a.dropoffTime="Drop off:",a.pickupAddress="Location:",a.cancellationUrl="Remember to cancel this car reservation",t=loadHelper("travelocity-car-skeleton-old.js")):/Your .* reservation is confirmed!/.test(e.plain)?(a=loadHelper("travelocity.com-vocabulary-en.js")(),t=loadHelper("travelocity-car-skeleton-2.js")):(a=loadHelper("travelocity.com-vocabulary-en.js")().car,t=loadHelper("travelocity-car-skeleton-new.js")),t(e,r,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1186/1192","SG3b95d9da"),new ReverseTemplate("travelocity.com-flight-cancellation-en",function(e){return/Itinerary#/.test(e.subject)},function(e){if(/This reservation has been fully cancelled/.test(e.plain)){var t="en_US",r={};r.flightSummary="Airline Rules & Regulations",r.names="Traveler Information",r.price="Price Summary",r.totalPrice="Total:",r.priceCurrency="All prices quoted in",r.frequentFlyer="No frequent flyer details",r.programName="Frequent Flyer",r.ticketNumber="Ticket",r.travelerInfo="Traveler Information",r.importantInfo="Important Information",r.reservationId="Itinerary #",r.dateSpecified=/Arrival/,r.cancelled=/This reservation has been fully cancelled/;var a=loadHelper("travelocity-flight-skeleton.js");return a(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1186/1193","SGba351d1c"),new ReverseTemplate("travelocity.com-flight-confirmation-en",function(e){return/^Travelocity travel confirmation/.test(e.subject)||/Itinerary#/.test(e.subject)},function(e){if(/Travelocity travel confirmation/.test(e.subject)||/Itinerary#/.test(e.subject)&&/Additional Flight Services/.test(e.plain)){var t="en_US",r={};r.flightSummary="Airline Rules & Regulations",r.names=/Travell?er Information/,r.price="Price Summary",r.totalPrice="Total:",r.priceCurrency="All prices quoted in",r.frequentFlyer="No frequent flyer details",r.programName="Frequent Flyer",r.ticketNumber="Ticket",r.travelerInfo=/Travell?er Information/,r.importantInfo="Important Information",r.reservationId="Itinerary #",r.dateSpecified=/Arrives/,r.cancelled=/This reservation has been fully cancelled/;var a=loadHelper("travelocity-flight-skeleton.js");return a(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1186/1195","SG9d5db355"),new ReverseTemplate("travelocity.com-hotel-cancellation-en",function(e){return/^Travelocity Hotel (?:Cancellation)?\s*Confirmation/.test(e.subject)},function(e){if(/^Travelocity Hotel Cancellation Confirmation/.test(e.subject)||/All rooms in this reservation have been cancelled/.test(e.plain)){var t,r="en_US",a={};return/All rooms in this reservation have been cancelled/.test(e.plain)?(a=loadHelper("travelocity.com-vocabulary-en.js")().hotel,t=loadHelper("travelocity.com-hotel-confirmation-skeleton.js")):(a.name="Reserved for",a.reservationId="Travelocity Itinerary number:",t=loadHelper("travelocity.com-hotel-cancellation-skeleton.js")),t(e,r,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1186/1197","SG35a02756"),new ReverseTemplate("travelocity.com-hotel-confirmation-en",function(e){return/(^Travelocity travel confirmation|Itinerary\s*#)/.test(e.subject)},function(e){if(/(^Travelocity travel confirmation|Itinerary\s*#)/.test(e.subject)){var t,r,a;if(!/car rental/i.test(e.html)&&/Additional Hotel Services/.test(e.plain))return t="en_US",r=loadHelper("travelocity.com-vocabulary-en.js")().hotel,(a=loadHelper("travelocity.com-hotel-confirmation-skeleton.js"))(e,t,r);if(/^Travelocity travel confirmation/.test(e.subject)&&/Hotel overview/.test(e.plain))return t="en_US",r={},r.underPersonName="Reserved for",r.reservationId="Itin#",r.hotelDetails="Hotel overview",r.dates="Reservation dates",r.checkIn="Check-in time",r.checkOut="Check-out time",r.total="Total",r.cancelled=/All rooms in this reservation have been cancelled/,(a=loadHelper("travelocity-hotel-skeleton-2.js"))(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1186/1198","SGde50f373")]);
