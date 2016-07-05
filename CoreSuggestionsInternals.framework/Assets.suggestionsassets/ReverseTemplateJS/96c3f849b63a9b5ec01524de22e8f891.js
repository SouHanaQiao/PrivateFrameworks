// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("cathaypacific.com-cancellation-de",function(e){return/^Cathay Pacific Buchung stornieren$/.test(e.subject)},function(e){if(/^Cathay Pacific Buchung stornieren$/.test(e.subject)){var a={};a.bookingReference="Buchungsnummer:",a.passengers="Passagiere",a.refundRegExp=/Prozeduren zu Erstattung und Umbuchung\s+F\xfcr Erstattungen/,a.itineraryDetails="Details zu Ihrem Reiseplan";var n="de_DE",t=loadHelper("cathaypacific.com-cancellation.js");return t(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/388","SG25acdf95"),new ReverseTemplate("cathaypacific.com-cancellation-en",function(e){return/^Cathay Pacific Booking Cancellation$/.test(e.subject)},function(e){if(/^Cathay Pacific Booking Cancellation$/.test(e.subject)){var a={};a.bookingReference="Booking Reference Number:",a.passengers="Passengers",a.refundRegExp=/Procedures on Refund and Rebooking\s+For refund arrangement/,a.itineraryDetails="Itinerary Details";var n="en_US",t=loadHelper("cathaypacific.com-cancellation.js");return t(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/389","SG515faf9a"),new ReverseTemplate("cathaypacific.com-cancellation-fr",function(e){return/^Annulation d'une r\xe9servation Cathay Pacific/.test(e.subject)},function(e){if(/^Annulation d'une r\xe9servation Cathay Pacific/.test(e.subject)){var a="fr_FR",n={};n.bookingReference="Num\xe9ro de r\xe9servation:",n.passengers="Passager",n.refundRegExp=/Proc\xe9dures de Remboursement et de \u200b\u200bChangement de R\xe9servation\s+Pour le remboursement/,n.itineraryDetails="D\xe9tails de l'itin\xe9raire";var t=loadHelper("cathaypacific.com-cancellation.js");return t(e,a,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/390","SG1777d6b4"),new ReverseTemplate("cathaypacific.com-cancellation-jp",function(e){return/^\u30ad\u30e3\u30bb\u30a4\u30d1\u30b7\u30d5\u30a3\u30c3\u30af\u822a\u7a7a\u3000\u3054\u4e88\u7d04\u53d6\u308a\u6d88\u3057\u5b8c\u4e86$/.test(e.subject)},function(e){if(/^\u30ad\u30e3\u30bb\u30a4\u30d1\u30b7\u30d5\u30a3\u30c3\u30af\u822a\u7a7a\u3000\u3054\u4e88\u7d04\u53d6\u308a\u6d88\u3057\u5b8c\u4e86$/.test(e.subject)){var a={};a.bookingReference="\u4e88\u7d04\u756a\u53f7",a.passengers="\u642d\u4e57\u8005",a.refundRegExp=/\u6255\u3044\u623b\u3057\u3068\u518d\u4e88\u7d04\u306e\u624b\u7d9a\u304d\u306b\u3064\u3044\u3066\s+\u6255\u3044\u623b\u3057\u624b\u7d9a\u304d\u306b/,a.itineraryDetails="\u65c5\u7a0b\u8a73\u7d30";var n="ja_JP",t=loadHelper("cathaypacific.com-cancellation.js");return t(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/391","SG270a0c91"),new ReverseTemplate("cathaypacific.com-confirmation-de",function(e){return/^Best\xe4tigung$/.test(e.subject)},function(e){if(/^Best\xe4tigung$/.test(e.subject)){var a={};a.bookingReference="Buchungsnummer:",a.passengers="Passagiere",a.totalFare="Gesamtbetrag:",a.itineraryDetails="Reisedetails",a.NA="-";var n="de_DE",t=loadHelper("cathaypacific.com-confirmation.js");return t(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/392","SG8161eacf"),new ReverseTemplate("cathaypacific.com-confirmation-en",function(e){return/^Confirmation/.test(e.subject)},function(e){if(/^Confirmation/.test(e.subject)&&/Itinerary Details/.test(e.plain)){var a={};a.bookingReference="Booking Reference Number:",a.checkinUrl="Online Check-In <",a.passengers="Passengers",a.totalFare="Total Fare:",a.itineraryDetails="Itinerary Details",a.NA="N/A";var n="en_US",t=loadHelper("cathaypacific.com-confirmation.js");return t(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/393","SG16c98fc9"),new ReverseTemplate("cathaypacific.com-confirmation-fr",function(e){return/^Confirmation/.test(e.subject)},function(e){if(/^Confirmation/.test(e.subject)&&/D\xe9tails de l'itin\xe9raire/.test(e.plain)){var a={};a.bookingReference="N\xb0 de dossier de r\xe9servation :",a.checkinUrl="Enregistrement en ligne <",a.passengers="Passagers",a.totalFare=/(?:Montant total \:|Total frais de modification)/,a.itineraryDetails="D\xe9tails de l'itin\xe9raire",a.NA="Non applicable";var n="fr_FR",t=loadHelper("cathaypacific.com-confirmation.js");return t(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/394","SGe6280eac"),new ReverseTemplate("cathaypacific.com-confirmation-jp",function(e){return/^\u3054\u8cfc\u5165\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f$/.test(e.subject)},function(e){if(/^\u3054\u8cfc\u5165\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f$/.test(e.subject)){var a={};a.bookingReference="\u4e88\u7d04\u756a\u53f7\uff1a",a.checkinUrl="Online Check-In <",a.passengers="\u3054\u642d\u4e57\u8005",a.totalFare="\u5408\u8a08\u904b\u8cc3\uff1a",a.itineraryDetails="\u65c5\u7a0b\u8868",a.NA="\u8a72\u5f53\u7121\u3057";var n="ja_JP",t=loadHelper("cathaypacific.com-confirmation.js");return t(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/395","SG0ddba51d"),new ReverseTemplate("cathaypacific.com-confirmation-zh",function(e){return/^\u786e\u8ba4$/.test(e.subject)},function(e){if(/^\u786e\u8ba4$/.test(e.subject)){var a={};a.bookingReference="\u9884\u8ba2\u53c2\u8003\u7f16\u53f7\uff1a",a.checkinUrl="Online Check-In <",a.passengers="\u4e58\u5ba2",a.totalFare="\u603b\u8ba1\uff1a",a.itineraryDetails="\u884c\u7a0b\u7ec6\u8282",a.NA="\u4e0d\u9002\u7528";var n="zh_Hans_CN",t=loadHelper("cathaypacific.com-confirmation.js");return t(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/241/387/396","SG872e8850")]);
