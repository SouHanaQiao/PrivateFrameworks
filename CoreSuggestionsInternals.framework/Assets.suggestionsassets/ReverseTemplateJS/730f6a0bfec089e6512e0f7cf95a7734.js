// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("air_new_zealand-seat-selection-en",function(e){return/Your seat selection - booking reference/.test(e.subject)},function(e){if(/Your seat selection - booking reference/.test(e.subject)){var n="en_AU",r={};r.reservationId="Booking reference",r.itinerary="Your flight details",r.departure="Depart",r.duration="Duration",r.passengers="Passengers on this flight ";var t=loadHelper("air-new-zealand-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/332/333","SGca0df89f")]);
