// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("ticketmaster.com.au-confirmation-en_AU",function(e){return/^Your Ticket Order Confirmation/.test(e.subject)||/CONFIRMATION\s+ORDER/.test(e.subject)},function(e){if(/^Your Ticket Order Confirmation/.test(e.subject)||/CONFIRMATION\s+ORDER/.test(e.subject)){var t={};t.total="Total Charge",t.print="Print my tickets",t.number="Your order number for this purchase is",t.valid="valid",t.orderFor="Order for",t.seat="Seat location";var r="en_AU",o=loadHelper("ticketmaster.com-en_AU-confirmation-skeleton.js");return o(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1419/1428","SG0da2ad4b")]);
