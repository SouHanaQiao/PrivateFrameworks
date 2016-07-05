// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("avis.com-en",function(e){return/^Avis Rent A Car:\s+(?:Cancel )?Reservation\s+(?:Confirmation|Reminder)/.test(e.subject)||/Avis Reservation Confirmation/.test(e.subject)},function(e){if(/^Avis Rent A Car:\s+(?:Cancel )?Reservation Confirmation/.test(e.subject)){var r="en_US",n={};n.version="1",n.reservationIdPrefix=/Your Confirmation Number::?/,n.pickupInformationHeader="Pick-up Information",n.returnDateRegExp=/Return(?: Information)?/,n.returnText="Return",n.cancellationHeader="YOUR RESERVATION IS CANCELLED",n.firstNameSuffix=", your reservation has been cancelled.",n.firstNamePrefix="Name:",n.emailAddressPrefix="Email Address:",n.pricingPrefix="Estimated Total",n.carPrefix="YOUR CAR";var t=loadHelper("avis.com-confirmation-skeleton.js");return t(e,r,n)}if(/Avis Reservation Confirmation/.test(e.subject)){var r="en_US",n={};n.version="2",n.reservationId=/Reservation number (.+)/,n.price=/Your estimated total (.+)/,n.dates=/Pick-Up \/ Drop-Off/,n.address=/Pick-Up \/ Drop-Off.+\n.*\.*\n.*\n.*\n([\s\S]+)\nhours/,n.guestName=/Personal Information\n.*\n(.+)/,n.brand=/Car[\s\S]+\n(.+)\n.*\nor similar/,n.cancellation=/Your reservation is canceled/;var t=loadHelper("avis.com-confirmation-skeleton.js");return t(e,r,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/47/62","SG45bd5ab6"),new ReverseTemplate("avis.com-fr",function(e){return/Confirmation de l.+annulation de r\xe9servation/.test(e.subject)||/Confirmation de r\xe9servation/.test(e.subject)},function(e){if(!/Confirmation de l.+annulation de r\xe9servation|Confirmation de r\xe9servation/.test(e.subject))return CONTINUE;var r="fr_FR",n={};n.version="1",n.reservationIdPrefix=/Votre num\xe9ro de confirmation\s:/,n.pickupInformationHeader="Informations de prise en charge",n.returnDateRegExp=/Retour/,n.returnText="Retour",n.cancellationHeader="VOTRE R\xc9SERVATION EST ANNUL\xc9E",n.firstNameSuffix=", votre r\xe9servation a \xe9t\xe9 annul\xe9e",n.firstNamePrefix="Nom :",n.emailAddressPrefix="adresse \xe9lectronique :",n.pricingPrefix="Total estim\xe9",n.carPrefix="VOTRE VOITURE";var t=loadHelper("avis.com-confirmation-skeleton.js");return t(e,r,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/47/63","SG078dd9a1"),new ReverseTemplate("avis.com-reminder-en",function(e){return/^Avis Rent A Car: Reservation Reminder/.test(e.subject)},function(e){if(/^Avis Rent A Car: Reservation Reminder/.test(e.subject)){var r="en_US",n={};n.reservationIdPrefix="Your Confirmation Number:",n.pickUpInformation="Pick-up Information",n.returnDateRegExp=/Return(?: Information)?/,n.namePrefix="Name:";var t=loadHelper("avis.com-reminder-skeleton.js");return t(e,r,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/47/64","SG746874a9")]);
