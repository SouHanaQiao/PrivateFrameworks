// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("qunar-car-confirmation-zh",function(e){return!0},function(e){if(!/\u3010\u53bb\u54ea\u513f\u7f51\u3011/.test(e.plain))return CONTINUE;if(!/\u60a8\u5df2\u6210\u529f\u9884\u8ba2.+\u53d6\u8f66\u65f6\u8bf7\u60a8\u643a\u5e26\u76f8\u5e94\u79df\u8f66\u8bc1\u4ef6/.test(e.plain))return CONTINUE;var t="zh_Hans_CN",r=Scanner.fromMessage(e);r.setLocale(t);var n,a,o,i,p,s,c=r.getSpan(),h=c.innerCapture(/\u60a8\u5df2\u6210\u529f\u9884\u8ba2(\d{1,2}\u6708\d{1,2}\u65e5\d{1,2}:\d{2})\uff0c(.+(?:\u670d\u52a1\u70b9|\u70b9|\u5e97))(.+)\u7528\u8f66\uff0c\u5730\u5740(.+)\uff0c\u7535\u8bdd([\d\-\(\)]+)\uff0c/);return h&&6===h.length&&(n=c.innerCapture(/\u3010(.+)\u3011/,1),a=h[1],o=h[2],i=h[3],p=h[4],s=h[5]),ASSERT(a,o||p)?[{"@context":"http://schema.org","@type":"http://schema.org/RentalCarReservation",reservationStatus:"http://schema.org/ReservationConfirmed",underName:{"@type":"http://schema.org/Person"},provider:{"@type":"http://schema.org/Organization",name:n},pickupTime:a,pickupLocation:{"@type":"http://schema.org/Place",name:o,telephone:s,address:p}}]:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/71/93/94","SG7dd5c2d9")]);
