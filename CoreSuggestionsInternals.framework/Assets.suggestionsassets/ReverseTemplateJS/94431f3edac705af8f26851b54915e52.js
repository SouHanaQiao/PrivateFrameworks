// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("qunar-hotel-confirmation-zh",function(e){return!0},function(e){if(!/\u3010\u53bb\u54ea\u513f\u7f51\u3011/.test(e.plain))return CONTINUE;if(!/\u9884\u8ba2\u6210\u529f\uff1a.+?\d{1,2}\u6708\d{1,2}\u65e5\u81f3\d+\u65e5/.test(e.plain))return CONTINUE;var t="zh_Hans_CN",n=Scanner.fromMessage(e);n.setLocale(t);var r,a,o,i,s,c,h,p=n.getSpan(),d=p.innerCapture(/\u9884\u8ba2\u6210\u529f\uff1a(.+)(\d{1,2}\u6708)(\d{1,2}\u65e5)\u81f3(\d+\u65e5)\u5165\u4f4f(.+?)\uff0c.+?([\d\.]+)(\D)\uff0c(\d{1,2}:\d{2}).+?\u7535\u8bdd\uff1a([\d\-\+]+)/);return d&&10===d.length&&(r=d[1],a=n.getDetachedSpan(d[2]+d[3]+" "+d[8]),o=n.getDetachedSpan(d[2]+d[4]),i=d[5],s=d[6],c=d[7],h=d[9]),ASSERT(r,a,o,i)?[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:r},totalPrice:s,priceCurrency:c,checkinTime:a,checkoutTime:o,reservationStatus:"http://schema.org/ReservationConfirmed",reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:i,telephone:h}}]:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/71/93/96","SGb0cbc328")]);
