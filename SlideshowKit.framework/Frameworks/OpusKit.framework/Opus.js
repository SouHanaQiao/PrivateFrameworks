/**
 *
 * Copyright © 2013 Apple Inc.  All rights reserved.
 *
 **/

var OK={};

OK.VERSION="0.1";

function playAllWidgetsSequentially(document, page, widgetNames)
{
	if (page.data == null)
	{
		page.data = {mediaIndex: 0, startTime: (Date.now() * .001)};
	}

	var isFinished = true;
	for (i=page.data.mediaIndex; i<widgetNames.length; i++)
	{
		var widget = page.widgets[widgetNames[i]];
		
		var time = widget.remainingPlayDuration();
		if (time > 0.)
		{
			isFinished = false;
			page.data.mediaIndex = i;
			document.replayStep(time);
			widget.play();
			break;
		}
	}
	
	if (isFinished)
	{
		var remainingDuration = document.currentCouchStepDuration() - (Date.now() * .001 - page.data.startTime);
		document.gotoNextStep(Math.max(0., remainingDuration));
		page.data = null;
	}
}

function playAllWidgetsTogetherWithEarlyCompletionNotice(document, page, widgetNames, earliness)
{
	if (page.data == null)
	{
		page.data = {startTime: (Date.now() * .001)};
	}

	var maxTime = 0.;
	
	for (i=0; i<widgetNames.length; i++)
	{
		var widget = page.widgets[widgetNames[i]];
		
		var time = widget.remainingPlayDuration();
		if (time > 0.)
		{
			maxTime = Math.max(maxTime, time);
			widget.play();
		}
	}

	maxTime -= earliness;

	if (maxTime > 0.)
	{
		document.replayStep(maxTime);
	}
	else
	{
		var remainingDuration = document.currentCouchStepDuration() - (Date.now() * .001 - page.data.startTime);
		remainingDuration -= earliness;
		document.gotoNextStep(Math.max(0., remainingDuration));
		page.data = null;
	}
}

