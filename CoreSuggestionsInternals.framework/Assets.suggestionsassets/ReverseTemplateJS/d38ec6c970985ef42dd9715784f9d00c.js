// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("testing",function(e){return/^TemplateTest/.test(e.subject)},function(e){if(/^TemplateTest/.test(e.subject)){var t=Scanner.fromMessage(e);t.setLocale("en_US");var n=t.getSpan().innerCapture(/Dear (.+?),/,1),a=t.getSpan().innerCapture(/Failure is a (.+?)\./,1);ASSERT(n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/965/974/975","SG7deb3178")]);
