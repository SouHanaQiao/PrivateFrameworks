// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("hotpepper.jp-cancellation-jp",function(e){return/(\u3054\u4e88\u7d04\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f|\u3054\u4e88\u7d04\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f)/.test(e.subject)},function(e){if(/(\u3054\u4e88\u7d04\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f|\u3054\u4e88\u7d04\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f)/.test(e.subject)){var n={};n.person="\u3054\u5229\u7528\u4eba\u6570",n.name="\u540d",n.number="\u4e88\u7d04\u4f9d\u983c\u756a\u53f7",n.restaurant="\u3054\u4e88\u7d04\u5e97\u540d",n.phone="\u304a\u5e97\u96fb\u8a71\u756a\u53f7",n.address=/(?:\u304a\u5e97\u6240\u5728\u5730\uff1a)(.+)/,n.underName="\u4ee3\u8868\u8005\u540d",n.cancel="\u4e88\u7d04\u3092\u5909\u66f4\u30fb\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u308b\u969b\u306f\u3053\u3061\u3089\u306e\u753b\u9762\u304b\u3089\u304a\u9858\u3044\u3057\u307e\u3059",n.date="\u3054\u6765\u5e97\u65e5\u6642";var t="ja_JP",r=loadHelper("hotpepper.jp-cancellation-skeleton.js");return r(e,t,n)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1240/1241","SG97c347d6"),new ReverseTemplate("hotpepper.jp-confirmation-jp",function(e){return/(\u53d7\u3051\u4ed8\u3051\u307e\u3057|\u4e88\u7d04\u304c\u78ba\u5b9a\u3057\u307e\u3057\u305f)/.test(e.subject)},function(e){if(/(\u53d7\u3051\u4ed8\u3051\u307e\u3057|\u4e88\u7d04\u304c\u78ba\u5b9a\u3057\u307e\u3057\u305f)/.test(e.subject)){var n={};n.person=/(\u3054\u5229\u7528\u4eba\u6570\uff1a|\u3054\u4e88\u7d04\u4eba\u6570)/,n.name="\u540d",n.number=/(?:\u4e88\u7d04\u4f9d\u983c\u756a\u53f7\uff1a|\u4e88\u7d04\u4f9d\u983c\u756a\u53f7\s*)(\w+)/,n.thank=/(\u3053\u306e\u305f\u3073\u306f\u3001\u300c|\u4e88\u7d04\u53d7\u4ed8\u306e\u53ef\u5426\u306b\u3064\u3044\u3066\u3001\u300c|\u3054\u4e88\u7d04\u3055\u308c\u305f\u3001\n?)/,n.endQuote="\u300d",n.phone=/(\u304a\u5e97\u96fb\u8a71\u756a\u53f7|\u25a1\u96fb\u8a71\u756a\u53f7)/,n.address=/(?:\u304a\u5e97\u6240\u5728\u5730\uff1a)(.+)/,n.underName=/(?:\u4ee3\u8868\u8005\u540d\uff1a|\u4ee3\u8868\u8005\u306e\u304a\u540d\u524d\uff08\u6f22\u5b57\uff09\n)[\s\u3000]*(.+)/,n.cancel="\u4e88\u7d04\u3092\u5909\u66f4\u30fb\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u308b\u969b\u306f\u3053\u3061\u3089\u306e\u753b\u9762\u304b\u3089\u304a\u9858\u3044\u3057\u307e\u3059",n.date=/(\u3054\u6765\u5e97\u65e5\u6642|\u3054\u4e88\u7d04\u5e0c\u671b\u65e5|\u25a0\u3054\u4e88\u7d04\u65e5\u6642)/,n.time=/\u25c7\u3054\u4e88\u7d04\u5e0c\u671b\u6642\u9593/;var t="ja_JP",r=loadHelper("hotpepper.jp-confirmation-skeleton.js");return r(e,t,n)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1240/1242","SGb03c24a5"),new ReverseTemplate("hotpepper.jp-reservation-change-jp",function(e){return/\u5909\u66f4/.test(e.subject)},function(e){if(/\u5909\u66f4/.test(e.subject)){var n={};n.person="\u3054\u5229\u7528\u4eba\u6570",n.name="\u540d",n.number="\u4e88\u7d04\u4f9d\u983c\u756a\u53f7",n.restaurant="\u3054\u4e88\u7d04\u5e97\u540d",n.phone="\u304a\u5e97\u96fb\u8a71\u756a\u53f7",n.address=/(?:\u304a\u5e97\u6240\u5728\u5730\uff1a)(.+)/,n.underName="\u4ee3\u8868\u8005\u540d",n.date="\u3054\u6765\u5e97\u65e5\u6642";var t="ja_JP",r=loadHelper("hotpepper.jp-reservation-change-skeleton.js");return r(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1240/1243","SGd216e603")]);
