// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("eventim-confirmation-nl",function(e){return/Je bestelling bij Eventim met ordernummer/.test(e.subject)},function(e){if(!/Je bestelling bij Eventim met ordernummer/.test(e.subject))return CONTINUE;var t={};t.hello="Beste",t.total="Totaal (inclusief BTW):",t.number="Je ordernummer is:",t.date="Datum/Tijd evenement:",t.place="Locatie",t.block="Type",t.row="Rij",t.seatNumber="Plaats";var n="nl_NL",r=loadHelper("eventim-confirmation-skeleton.js");return r(e,n,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1336/1374/1377","SG3b47cd52")]);
