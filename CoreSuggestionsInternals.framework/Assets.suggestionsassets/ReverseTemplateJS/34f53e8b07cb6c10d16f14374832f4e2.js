// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("lafourchette.com-cancellation-en",function(e){return/^Your booking(.*)was cancelled/.test(e.subject)||/cancelled the table/.test(e.subject)},function(e){if(/^Your booking(.*)was cancelled/.test(e.subject)||/cancelled the table/.test(e.subject)){var t={};t.emailType="Your booking",t.hello="Dear",t.underNameSuffix="cancelled the table they booked at",t.restaurantInformationBlockLabel="Restaurant :",t.restaurantUrlPrefix="More information";var a="en_US",n=loadHelper("lafourchette.com-cancellation-skeleton.js");return n(e,a,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1246/1247","SG16e1cc0b"),new ReverseTemplate("lafourchette.com-cancellation-it",function(e){return/^Cancellazione della prenotazione/.test(e.subject)||/(.*)ha cancellato la prenotazione/.test(e.subject)},function(e){if(/^Cancellazione della prenotazione/.test(e.subject)||/(.*)ha cancellato la prenotazione/.test(e.subject)){var t={};t.emailType="Cancellazione della prenotazione",t.hello="Ciao",t.underNameSuffix="ha cancellato la prenotazione al ristorante",t.restaurantInformationBlockLabel="Ristorante:",t.restaurantUrlPrefix="Altre info";var a="it_IT",n=loadHelper("lafourchette.com-cancellation-skeleton.js");return n(e,a,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1246/1250","SGc1869d53"),new ReverseTemplate("lafourchette.com-confirmation-it",function(e){return/^Conferma della prenotazione presso/.test(e.subject)||/^Ho prenotato un ristorante/.test(e.subject)},function(e){if(/^Conferma della prenotazione presso/.test(e.subject)||/^Ho prenotato un ristorante/.test(e.subject)){var t={};t.emailType="Conferma",t.hello="Ciao",t.underNameSuffix="ti ha invitato al ristorante",t.reservationIdPrefix="Numero prenotazione:",t.restaurantInformationBlockLabel="Ristorante:",t.restaurantUrlPrefix="Altre info",t.reservationCancelLabel="Cancella prenotazione",t.dontUseMicrodataStartTime=!0;var a="it_IT",n=loadHelper("lafourchette.com-confirmation-skeleton.js");return n(e,a,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1246/1255","SG7b96aa26")]);
