// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("pingg.com-invitation-en",function(e){return/^You are invited to .+/.test(e.subject)||/.+(?: ha(?:s|ve))? invited you to .+/.test(e.subject)||/.+( has)? updated your invitation to .+/.test(e.subject)},function(e){if(/^You are invited to .+/.test(e.subject)||/.+(?: ha(?:s|ve))? invited you to .+/.test(e.subject)||/.+( has)? updated your invitation to .+/.test(e.subject)){var t=Scanner.fromMessage(e);t.setLocale("en_US");var n,a,s,i,r,o,p,d,g=t.getSpan();if(d=g.nextTag("table3").innerCapture(/You (?:have been|are) invited(?: by ($<invitedBy>.*))? to ($<eventName>.*)[\.!]/),a=d?d.$eventName.trim():null,n=d?d.$invitedBy.trim():null,d=g.nextText("DATE"),d=d.parentTag("td4"),d=d.allInnerDates(),d&&2===d.length?(i=d[0].innerDate(),r=d[1].innerDate()):d&&1===d.length&&(i=d[0].innerDate()),p=g.nextText("Location:").nextTag("td3").tagContents(),not(p)&&g.nextRegExp(/\sLOCATION\s/).exists()&&(p=g.nextRegExp(/\sLOCATION\s/).parentAnyTag("td").tagContents().innerCapture(/LOCATION\s+([^]+)$/,1)),o=g.nextText("Address:").nextTag("td3"),o=o.innerAddress().exists()?o.innerAddress():o.tagContents(),not(o)&&g.nextRegExp(/\sADDRESS\s/).exists()&&(o=g.nextRegExp(/\sADDRESS\s/).parentAnyTag("td").tagContents().innerCapture(/ADDRESS\s+([^]+)$/,1)),s=g.innerCapture(/Event Web Page.? <(http.*)>/g,1).trim(),not(s)&&(s=g.innerCapture(/CLICK TO VIEW INVITATION <(.*)>/,1)),s&&s.innerText("rsvp_method").exists()&&(s=s.split("?")[0]),ASSERT(a,i))return[{"@context":"http://schema.org","@type":"http://schema.org/EventReservation",reservationStatus:"http://schema.org/ReservationPending",reservationFor:{url:s,"@type":"http://schema.org/SocialEvent",name:a,startDate:i,endDate:r,location:{"@type":"http://schema.org/Place",name:p,address:o}},appleInvitedBy:n}]}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/978/998/999","SGa3baaf61")]);
