// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("e-budget.co.jp",function(e){return/\u304a\u7533\u3057\u8fbc\u307f\u5185\u5bb9\u306e\u78ba\u8a8d/.test(e.subject)||/\u4e88\u7d04\u53d6\u308a\u6d88\u3057\u5185\u5bb9\u306e\u78ba\u8a8d/.test(e.subject)},function(e){var t="ja_JP",s={};if(s.confirm=/\u304a\u7533\u3057\u8fbc\u307f\u5185\u5bb9\u306e\u78ba\u8a8d/,s.reservationId=/\uff1c\u3054\u4e88\u7d04\u756a\u53f7\uff1e\n(?:> )?(.+)/,s.guestName=/\u304a\u540d\u524d\s+\:\s(.+)/,s.guestEmail=/\uff25\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\s+\:\s(.+)/,s.car=/\u8eca\u4e21\u30af\u30e9\u30b9\s+\:\s(.+)/,s.pickup=/\u5229\u7528\u958b\u59cb\s+\:\s(.+)/,s.dropoff=/\u5229\u7528\u7d42\u4e86\s+\:\s(.+)/,s.totalPrice=/\u5408\u8a08\s+\:\s(.+)/,s.cancel=/\u4e88\u7d04\u53d6\u308a\u6d88\u3057\u5185\u5bb9\u306e\u78ba\u8a8d/,s.forcedCancel="your reservation below has canceled unfortunately",!s.confirm.test(e.subject)&&!s.cancel.test(e.subject))return CONTINUE;var n=loadHelper("budget.com-plain-confirmation-skeleton-jp.js");return n(e,t,s)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/68/77","SG93915cf3")]);
