// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("jetblue.com-itinerary-checkin-2014",function(e){return/^(?:Your\s)?Itinerary for your upcoming trip$/i.test(e.subject)||/^Check in for your flight to/.test(e.subject)||/^Your Flight Receipt/.test(e.subject)},function(e){if(/^(?:Your\s)?Itinerary for your upcoming trip$/i.test(e.subject)||/^Check in for your flight to/.test(e.subject)||/^Your Flight Receipt/.test(e.subject)){var t,r="en_US",i={};return/^Your/.test(e.subject)?(i.terminal="TERMINAL",i.to="to",i.select_seat=/select seat/,i.total=/TOTAL/,i.reservationId=/Your confirmation code is\s+(.*)\s+</,t=loadHelper("jetblue-itinerary-skeleton-2015.js")):t=loadHelper("jetblue-itinerary-skeleton-2014.js"),t(e,i,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/465/467","SG8f76c399")]);
