// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("fandango.com-confirmation-en",function(e){return/^Fandango Purchase Confirmation - Please Read$/.test(e.subject)},function(e){var n,a="en_US",t={};return/Date\s*\:/.test(e.plain)?n=loadHelper("fandango.com-confirmation-skeleton-old.js"):(t.ticketNumber="CONFIRMATION NUMBER:",t.cancellationUrl="Can't Make The Show?",t.ticketToken="View My Fandango Ticket",t.price="My Total Order",t.seat="Seats:",t.place="View Map",n=loadHelper("fandango.com-confirmation-skeleton.js")),n(e,a,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1378/1380","SG0f3b452f")]);
