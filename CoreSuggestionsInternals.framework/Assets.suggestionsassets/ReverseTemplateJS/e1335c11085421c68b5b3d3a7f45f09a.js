// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("rakuten-hotel-cancellation-ja",function(e){return/\u30ad\u30e3\u30f3\u30bb\u30eb\u78ba\u8a8d\u30e1\u30fc\u30eb/.test(e.subject)},function(e){var t="ja_JP",n={};n.emailTitelConfirmation=/encoding error on title/,n.reservationId=/\u4e88\u7d04\u756a\u53f7/,n.guestName=/\u5bbf\u6cca\u8005\u6c0f\u540d/,n.price=/\u7dcf\u5408\u8a08/,n.checkInDate=/\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u65e5\u6642/,n.checkOutDate=/\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u65e5/,n.hotelName=/\u5bbf\u6cca\u65bd\u8a2d\u540d/,n.hotelPhone=/\u5bbf\u6cca\u65bd\u8a2d\u96fb\u8a71\u756a\u53f7/,n.hotelAddress=/\u5bbf\u6cca\u65bd\u8a2d\u4f4f\u6240/,n.emailTitelCancelConfirmation=/\u30ad\u30e3\u30f3\u30bb\u30eb\u78ba\u8a8d\u30e1\u30fc\u30eb/;var r=loadHelper("rakuten-hotel-cancellation-skeleton.js");return r(e,t,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1173/1175","SG0180a121"),new ReverseTemplate("rakuten-hotel-confirmation-ja",function(e){return/.\u697d\u5929\u30c8\u30e9\u30d9\u30eb.\u4e88\u7d04\u5b8c\u4e86\u30e1\u30fc\u30eb \(\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u65e5.\d{2}\/\d{2}\)/.test(e.subject)},function(e){if(!/.\u697d\u5929\u30c8\u30e9\u30d9\u30eb.\u4e88\u7d04\u5b8c\u4e86\u30e1\u30fc\u30eb \(\u30c1\u30a7\u30c3\u30af\u30a4\u30f3\u65e5.\d{2}\/\d{2}\)/.test(e.subject))return CONTINUE;var t="ja_JP",n={};return n.underPersonNameSuffix="\u69d8",n.reservationIdPrefix="\u4e88\u7d04\u53d7\u4ed8\u756a\u53f7",n.hotelNamePrefix="\u30db\u30c6\u30eb\u540d",n.hotelAddressPrefix="\u4f4f\u6240",n.hotelPhonePrefix="\u5bbf\u6cca\u65bd\u8a2d\u96fb\u8a71\u756a\u53f7",n.checkInDateTimePrefix="\u30c1\u30a7\u30c3\u30af\u30a4\u30f3",n.checkOutDateTimePrefix="\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8",n.priceRegExp=/\u6d88\u8cbb\u7a0e\u8fbc:([\d,.]+)\s*(\D)/,loadHelper("rakuten-hotel-confirmation-skeleton.js")(e,t,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1010/1173/1176","SG4d0b444c")]);
