// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("huazhu-confirmation-zh",function(e){return!0},function(e){if(!/\u3010\u534e\u4f4f\u9152\u5e97\u96c6\u56e2\u3011/.test(e.plain))return CONTINUE;if(!/\u534e\u4f4f\u9152\u5e97\u96c6\u56e2/.test(e.plain))return CONTINUE;if(!/\u786e\u8ba4/.test(e.plain))return CONTINUE;var t="zh_Hans_CN",r=Scanner.fromMessage(e);r.setLocale(t);var n,a,i,s,o,p,c,h,u,d,m=r.getSpan(),g=m.innerCapture(/(?:\u3010.+\u3011)?(.+\u9152\u5e97).*(\d{1,2}[\/|\.]\d{1,2}).*?(\d+)\u665a.*\u5730\u5740\uff1a(.+)[\uff0c|,]/);return g&&5===g.length&&(n=m.innerCapture(/\u3010(.+)\u3011/,1),[,a,i,o,d]=g),/\//.test(i)?i=r.getDetachedSpan((""+i).replace(/(\d{1,2})\/(\d{1,2})/,function(e,t,r){return t+"\u6708"+r+"\u65e5"})):/\./.test(i)&&(i=r.getDetachedSpan((""+i).replace(/(\d{1,2})\.(\d{1,2})/,function(e,t,r){return t+"\u6708"+r+"\u65e5"}))),o&&(s=modifyDate(i,int(""+o))),/http/.test(d)?[,d,h]=d.innerCapture(/(.+),(http.+)\uff1b/):/\uff0c/.test(d)&&(d=d.innerCapture(/(.+?)\uff0c/,1)),ASSERT(a,i,d)?[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person"},provider:{"@type":"http://schema.org/Person",name:n},totalPrice:p,priceCurrency:c,checkinTime:i,checkoutTime:s,reservationStatus:"http://schema.org/ReservationConfirmed",reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:a,url:h,telephone:u,address:d}}]:void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/63/66/67","SG072edfb1")]);
