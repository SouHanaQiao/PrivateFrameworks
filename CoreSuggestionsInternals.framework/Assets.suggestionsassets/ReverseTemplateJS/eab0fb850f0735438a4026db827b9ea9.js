// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("airbnb.com-cancelled-de",function(e){return/^Airbnb-Buchung wurde storniert/.test(e.subject)},function(e){if(/^Airbnb-Buchung wurde storniert/.test(e.subject)){var r="de_DE",n={};n.name="Hallo",n.reg=/Du hast vor Kurzem Deine Buchung f\xfcr ($<hotelName>.*) vom ($<arrival>.*) bis zum ($<departure>.*) storniert/;var t=loadHelper("airbnb.com-cancellation-skeleton.js");return t(e,r,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/679/682","SG157f0d79"),new ReverseTemplate("airbnb.com-cancelled-en",function(e){return/^Airbnb Reservation Cancell?ed/.test(e.subject)},function(e){if(/^Airbnb Reservation Cancell?ed/.test(e.subject)){var r="en_US",n={};n.name="Hi",n.reg=/You recently canceled your reservation at ($<hotelName>.*) from ($<arrival>.*) to ($<departure>.*)/;var t=loadHelper("airbnb.com-cancellation-skeleton.js");return t(e,r,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/679/683","SG66bbee1a")]);
