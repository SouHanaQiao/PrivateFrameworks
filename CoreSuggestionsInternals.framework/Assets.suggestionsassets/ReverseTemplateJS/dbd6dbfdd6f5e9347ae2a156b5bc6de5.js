// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("wazoo.jp-invitation-jp",function(e){return/\u30a4\u30d9\u30f3\u30c8\u62db\u5f85\u72b6/.test(e.subject)},function(e){if(!/\u30a4\u30d9\u30f3\u30c8\u62db\u5f85\u72b6/.test(e.subject))return CONTINUE;var t="ja_JP",a={};a.eventName="\u30a4\u30d9\u30f3\u30c8",a.dateFormat=/($<date>.*)\s+($<meridian>(?:AM|PM))\s+($<time>.*)/,a.startDate="\u958b\u59cb\u6642\u9593",a.endDate="\u7d42\u4e86\u6642\u9593",a.addressPrefix="\u958b\u50ac\u5834\u6240",a.eventUrl="\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u8a73\u7d30\u306f\u3053\u3061\u3089";var n=loadHelper("wazoo.jp-invitation-skeleton.js");return n(e,t,a)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/978/1006/1007","SG96905ed8")]);
