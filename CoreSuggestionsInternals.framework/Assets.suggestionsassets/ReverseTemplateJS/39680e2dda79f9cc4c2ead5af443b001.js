// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("mytable.com-cancellation-it",function(e){return/annullamento della prenotazione - MyTable/.test(e.subject)},function(e){if(/annullamento della prenotazione - MyTable/.test(e.subject)){var a="it_IT",t={};t.number=/(\d+)\spers\./,t.under=/(.*?),/,t.data=/Di seguito ti riportiamo i dati relativi/,t.phone=/<tel:(.*)>/,t.name=/Di seguito ti riportiamo i dati relativi:\s\n\n(.*?)\n/,t.cancel="annullare la prenotazione vai";var n=loadHelper("mytable.com-2015-skeleton.js");return n(e,a,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1259/1264","SG95b00203"),new ReverseTemplate("mytable.com-confirmation-it",function(e){return/.*stata (?:confermata|modificata) - MyTable$/.test(e.subject)},function(e){if(/.*stata (?:confermata|modificata) - MyTable$/.test(e.subject)){var a="it_IT",t={};t.number=/(\d+)\spers\./,t.under=/(.*?),/,t.data=/(?:Dettagli della|Dati nuova) prenotazione/,t.phone=/<tel:(.*)>/,t.name=/(?:Dettagli della|Dati nuova) prenotazione:\s\n\n(.*?)\n/,t.cancel="annullare la prenotazione vai";var n=loadHelper("mytable.com-2015-skeleton.js");return n(e,a,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1215/1259/1269","SG4a57f69b")]);
