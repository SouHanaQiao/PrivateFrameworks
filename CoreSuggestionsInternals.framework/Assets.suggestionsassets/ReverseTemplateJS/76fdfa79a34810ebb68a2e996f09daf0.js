// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("porter-cancellation-en",function(e){return/^Your Booking .+ Has Been Cancelled/.test(e.subject)},function(e){if(!/^Your Booking .+ Has Been Cancelled/.test(e.subject))return CONTINUE;var r={};r.reservationIdPrefix="Porter confirmation number:",r.pricePrefix="Total Fare Price",r.passengerPrefix=/Passengers?/;var n="en_CA",t=loadHelper("porter-cancellation-skeleton.js");return t(e,n,r)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/522/523","SG412dca25"),new ReverseTemplate("porter-confirmation-en",function(e){return/^Porter Airlines Itinerary - /.test(e.subject)},function(e){if(!/^Porter Airlines Itinerary - /.test(e.subject))return CONTINUE;var r={};r.reservationIdPrefix="Porter confirmation number:",r.pricePrefix="Total Fare Price",r.flightDetailPrefix="We are now cash free.",r.passengerPrefix=/Passengers?/,r.flightNumberRegExp=/\b([A-Z]{2,4})\s*([0-9]{1,5})\b/,r.flightTimeAirportRegExp=/([0-9]{1,2}\:[0-9]{1,2} [A-Za-z]+)\n([^\(]+) \(([A-Z]+)\)/,r.checkinUrlPrefix="Thank you for flying Porter";var n="en_CA",t=loadHelper("porter-confirmation-skeleton.js");return t(e,n,r)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/522/524","SG9848a8b8")]);
