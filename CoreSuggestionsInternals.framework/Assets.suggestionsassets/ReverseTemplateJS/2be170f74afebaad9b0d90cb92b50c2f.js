// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("tokyuhotels.co.jp",function(e){return/\u4e88\u7d04\u30b3\u30f3\u30d5\u30a1\u30fc\u30e0/.test(e.subject)||/CANCELLATION FOR/.test(e.subject)},function(e){var t="ja_JP",a={};a.emailTitelConfirmation=/\u4e88\u7d04\u30b3\u30f3\u30d5\u30a1\u30fc\u30e0/,a.reservationId=/\u30b3\u30f3\u30d5\u30a1\u30e1\u30fc\u30b7\u30e7\u30f3: (.+)/,a.checkinDate=/\u5230\u7740\u65e5: (.+)/,a.checkoutDate=/\u51fa\u767a\u65e5: (.+)/,a.guestName=/\u30b3\u30f3\u30d5\u30a1\u30e1\u30fc\u30b7\u30e7\u30f3.+\n\n(.+)/,a.guestEmail=/E\u30e1\u30fc\u30eb: (.+)/,a.price=/\u5408\u8a08\u91d1\u984d: (.+)/,a.modifyUrl=/simply click on the reservation link at our website (.+)/,a.hotelName=/\u30db\u30c6\u30eb: (.+)/,a.hotelAddress=/\u30b3\u30fc\u30c9: .+\n([\s\S]*?)\u96fb\u8a71:/,a.hotelPhone=/\u96fb\u8a71: (.+)/,a.emailTitelCancelConfirmation=/CANCELLATION FOR/,a.cancelHotelName=/CANCELLATION FOR (.+)/,a.cancelGuestName=/(.+)\, your reservation number (.+)/,a.cancelPrice=/for a total amount (.+)\,/,a.cancelCheckinDate=/Arrival Date\s+:\s+(.+)/;var n=loadHelper("tokyuhotels.co.jp.js");return n(e,t,a)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/931/932","SGd0ceb6a4")]);
