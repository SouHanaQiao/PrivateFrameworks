// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("dimmi.com-cancellation-en",function(e){return/is cancelled/.test(e.subject)},function(e){if(/is cancelled/.test(e.subject)){var n={};n.person="People",n.id="Booking ID",n.website="Website",n.phone="Phone",n.address="Address",n.date="Date",n.name="Name",n.cancel="please cancel";var t="en_AU",r=loadHelper("dimmi.com-skeleton.js"),i="Cancelled";return r(e,t,n,i)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1232/1233","SG1e5913da"),new ReverseTemplate("dimmi.com-confirmation-reminder-en",function(e){return/(is confirmed|reminder)/.test(e.subject)},function(e){if(/(is confirmed|reminder)/.test(e.subject)){var n={};n.person="People",n.id="Booking ID",n.website="Website",n.phone="Phone",n.address="Address",n.date="Date",n.name="Name",n.cancel="please cancel";var t="en_AU",r=loadHelper("dimmi.com-skeleton.js"),i="Confirmed";return r(e,t,n,i)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1232/1234","SGafb8fd49")]);
