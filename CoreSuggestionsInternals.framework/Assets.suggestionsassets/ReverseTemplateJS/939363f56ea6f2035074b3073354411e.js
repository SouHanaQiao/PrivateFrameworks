// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("cairnsbeachresort.com.au",function(e){return/Online Booking For/.test(e.subject)||/Online Cancellation For/.test(e.subject)},function(e){var n="en_AU",t={};t.emailTitelConfirmation=/Online Booking For/,t.reservationId=/Reference Number\:/,t.checkInDate=/Check In Date\:/,t.checkOutDate=/Check Out Date\:/,t.guestName=/Guest Name\:/,t.guestEmail=/Guest Email\:/,t.price=/Service Charges and Tax Inclusive Total\:/,t.hotelName=/Booking Details for (.+)/,t.hotelPhone=/Hotel Phone\:/,t.hotelAddress=/Hotel Address\:/,t.emailTitelCancelConfirmation=/Online Cancellation For/;var a=loadHelper("cairnsbeachresort.com.au.js");return a(e,n,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/909/911","SG780fa956")]);
