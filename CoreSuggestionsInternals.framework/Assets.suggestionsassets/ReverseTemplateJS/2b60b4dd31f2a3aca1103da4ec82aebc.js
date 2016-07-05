// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("lafourchette.com-cancellation-en",function(e){return/^Your booking(.*)was cancelled/.test(e.subject)||/cancelled the table/.test(e.subject)},function(e){if(/^Your booking(.*)was cancelled/.test(e.subject)||/cancelled the table/.test(e.subject)){var t={};t.emailType="Your booking",t.hello="Dear",t.underNameSuffix="cancelled the table they booked at",t.restaurantInformationBlockLabel="Restaurant :",t.restaurantUrlPrefix="More information";var r="en_US",n=loadHelper("lafourchette.com-cancellation-skeleton.js");return n(e,r,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1246/1247","SG16e1cc0b"),new ReverseTemplate("lafourchette.com-cancellation-nl",function(e){return/^Annulering van je reservering/.test(e.subject)},function(e){if(/^Annulering van je reservering/.test(e.subject)){var t={};t.emailType="Bevestiging",t.hello="Beste",t.restaurantInformationBlockLabel="Restaurant:",t.restaurantUrlPrefix="Meer informatie";var r="nl_NL",n=loadHelper("lafourchette.com-cancellation-skeleton.js");return n(e,r,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1246/1251","SG953c03df"),new ReverseTemplate("lafourchette.com-confirmation-fr",function(e){return/^Confirmation de votre.?r\xe9servation/.test(e.subject)||/^J'ai.?r\xe9serv\xe9.?un/.test(e.subject)},function(e){if(/^Confirmation de votre.?r\xe9servation/.test(e.subject)||/^J'ai.?r\xe9serv\xe9.?un/.test(e.subject)){var t={};t.emailType="Confirmation",t.hello="Bonjour",t.underNameSuffix="vous convie au restaurant",t.reservationIdPrefix="Num\xe9ro de r\xe9servation :",t.restaurantInformationBlockLabel="Restaurant :",t.restaurantUrlPrefix="Plus d'infos",t.reservationCancelLabel="Annuler ma r\xe9servation",t.dontUseMicrodataStartTime=!0;var r="fr_FR",n=loadHelper("lafourchette.com-confirmation-skeleton.js");return n(e,r,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1246/1254","SG4d861276"),new ReverseTemplate("lafourchette.com-confirmation-nl",function(e){return/^Bevestiging van je reservering/.test(e.subject)||/^Ik heb bij een restaurant gereserveerd/.test(e.subject)},function(e){if(/^Bevestiging van je reservering/.test(e.subject)||/^Ik heb bij een restaurant gereserveerd/.test(e.subject)){var t={};t.emailType="Bevestiging",t.hello="Beste",t.underNameSuffix="nodigt je uit voor",t.reservationIdPrefix="Reserveringsnummer:",t.restaurantInformationBlockLabel="Restaurant:",t.restaurantUrlPrefix="Meer informatie",t.reservationCancelLabel="Reservering annuleren",t.dontUseMicrodataStartTime=!0;var r="nl_NL",n=loadHelper("lafourchette.com-confirmation-skeleton.js");return n(e,r,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1246/1256","SG61b6b1f1")]);
