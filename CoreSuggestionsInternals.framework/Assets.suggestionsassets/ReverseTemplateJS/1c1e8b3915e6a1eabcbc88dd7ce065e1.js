// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("accorhotels.cn",function(e){return/Your Accor Reservation/.test(e.subject)},function(e){var r="zh_Hans_CN",c={};c.emailTitelConfirmation=/Your Accor Reservation/,c.reservationName=/\u5165\u4f4f\u5ba2\u4eba\u59d3\u540d:/,c.reservationId=/\u60a8\u7684\u9884\u8ba2\u786e\u8ba4\u53f7\s+(.+)/,c.checkInDate=/\u5165\u4f4f\u65e5\u671f/,c.price=/\u603b\u623f\u4ef7\:/,c.hotelAddress=/\u9152\u5e97\u5730\u5740\:/,c.hotelPhone=/\u9152\u5e97\u7535\u8bdd\u53f7\u7801/,c.checkInPolicy=/\u5165\u4f4f\u653f\u7b56/,c.checkOutPolicy=/\u7ed3\u8d26\u653f\u7b56/;var o=loadHelper("accorhotels.cn.js");return o(e,r,c)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/651/652/654","SG3720031c")]);
