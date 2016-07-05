// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("hotwire.com-flight-change-en",function(e){return/^Your flight itinerary to.*is changed$/.test(e.subject)},function(e){if(/^Your flight itinerary to.*is changed/.test(e.subject)){var t="en_US",r={};r.passengers="Traveler(s)",r.name="Traveler:",r.ticketNumber="Airline Ticket No.:",r.itinerary="Revised Itinerary",r.departureTime="Depart",r.arrivalTime="Arrive",r.flight="Flight";var i=loadHelper("hotwire.com-flight-change-skeleton.js");return i(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1116/1117","SGc3b08351"),new ReverseTemplate("hotwire.com-flight-confirmation-en",function(e){return int(e.epoch)<1356998400?!1:/^Your Hotwire Trip to/.test(e.subject)||/^Hotwire Flight Purchase Confirmation/.test(e.subject)||/^Hotwire travel confirmation/.test(e.subject)},function(e){if(int(e.epoch)<1356998400)return CONTINUE;var t="en_US",r={};if((/^Your Hotwire Trip to/.test(e.subject)||/^Hotwire Flight Purchase Confirmation/.test(e.subject))&&/flight is confirmed/.test(e.plain)){r.customerInformationHeader="Customer Information",r.passengerNamePrefix="Passenger name",r.tripSummaryHeader="Trip Details",r.spans="Flight",r.flightSummaryHeader="Flight",r.ticketNumberPrefix="Ticket number",r.flightNumberPrefix="Flight",r.fromPrefix="From:",r.toPrefix="To:",r.departureDTPrefix="Departs:",r.reservationIdPrefix="Hotwire Itinerary:",r.frequentFlyerPrefix="Frequent flyer program",r.pricePrefix="Trip total:";var i=loadHelper("hotwire.com-flight-confirmation-skeleton.js");return i(e,t,r)}if(/^Hotwire travel confirmation/.test(e.subject)){r.travellers=/Travell?er Information/,r.priceSummary="Price Summary",r.totalPrice="Total:",r.priceCurrency="All prices quoted in",r.reservationId="Itinerary #",r.cancelled=/This reservation has been fully cancell?ed/,r.noProgramName="No frequent flyer details provided",r.ticketNumber="Ticket #",r.totalTravelTime="Total travel time",r.seat="Seat";var a=loadHelper("hotwire.com-flight-confirmation-skeleton-alternative.js");return a(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1116/1118","SGca6790a8"),new ReverseTemplate("hotwire.com-hotel-confirmation-en",function(e){return/^Hotwire travel confirmation/.test(e.subject)||/Updated Itinerary/.test(e.subject)||/View hotel details/.test(e.plain)},function(e){if((/^Hotwire travel confirmation/.test(e.subject)||/Updated Itinerary/.test(e.subject))&&/View hotel details/.test(e.plain)){var t="en_US",r={},i=loadHelper("hotwire.com-hotel-confirmation-skeleton-S24.js"),r={};return r.hotelName_preffix=/Itinerary:/,r.underPersonName_preffix=/Reserved for/,r.reservationId_preffix=/Itinerary #/,r.hotelAddress_preffix=/View hotel details/,i(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1116/1120","SGe3356d52")]);
