/**
 * WDHTMLIncrementalSearch.js
 *
 * This is a simple incremental search intended for use in HTML web pages.
 *
 * Created by David Harrison, March 2016
 * Copyright (c) Apple Inc.
 */

"use strict;"

var maxNodesPerSearch = 500;
var hitClass = "hit";
var currentHitClass = "curhit";

var searchController = {
    currentSearchNode: null,  // Parent of current search node
    currentChildIndex: 0,     // Current child of parent
    domSpotStack: [],         // Stack of { parentNode, childIndex }
    editedNodes: [],          // Array of { parentNode, firstChildIndex, originalNode, spanNode }
    currentRegex: null,       // Contains current regular expression for search
    currentHitIndex: 0,

    init: function() {  // Called exactly once on import (see bottom of file).
        this._reset()
        this._installStyles();
    },

    setSearchPattern: function(pattern, optionStr) {  // Sets the pattern for search and does one round of search.
        this._reset();
        this.currentSearchNode = document.body;
        this.currentChildIndex = 0;
        if (pattern.length > 0) {
            this.currentRegex = new RegExp('^(.*?)('+pattern+')(.*)$', optionStr);
            return this.continueSearch();
        } else {
            this.currentRegex = null;
            this._toggleBodyBackground(false);
            return "-1";
        }
    },

    continueSearch: function() {  // Moves search along a fixed number of nodes.  Returns number of hits found.  -1 means the end.
        var nodesSearched = 0;
        var hitsFound = 0;
        while (nodesSearched < maxNodesPerSearch) {
            var childNodes = this.currentSearchNode.childNodes;
            if (this.currentChildIndex < childNodes.length) {
                var currentNode = childNodes[this.currentChildIndex];
                if (currentNode.nodeType === Node.TEXT_NODE) {
                    if (this._searchTextNode(currentNode)) {
                        // We have inserted nodes to represent the hit.
                        this.currentChildIndex += 2;
                        ++hitsFound;
                    } else {
                        ++this.currentChildIndex;
                    }                   
                } else {
                    if (currentNode.hasChildNodes()) {
                        var currentSpot = { parentNode: this.currentSearchNode, childIndex: this.currentChildIndex+1 };
                        this.domSpotStack.push(currentSpot);
                        this.currentSearchNode = currentNode;
                        this.currentChildIndex = 0;
                    } else {
                        ++this.currentChildIndex;
                    }
                }
                ++nodesSearched;
            } else {
                if (this.domSpotStack.length > 0) {
                    var poppedSpot = this.domSpotStack.pop();
                    this.currentSearchNode = poppedSpot.parentNode;
                    this.currentChildIndex = poppedSpot.childIndex;
                } else {
                    break
                }
            }
        }
        if ((nodesSearched == 0) && (hitsFound == 0)) {
            if (this.editedNodes.length == 0) {
                this._toggleBodyBackground(false);
            }
            return "-1";
        } else {
            return hitsFound.toString();
        }
    },

    nextHit: function() {  // Advances highlighting to next hit.
        if (this.currentHitIndex < this.editedNodes.length-1) {
            var currentNode = this.editedNodes[this.currentHitIndex].spanNode;
            var nextNode = this.editedNodes[this.currentHitIndex+1].spanNode;
            this._changeHitMode(currentNode, false);
            this._changeHitMode(nextNode, true);
            ++this.currentHitIndex;
            nextNode.scrollIntoView(false);
        }
    },

    previousHit: function() { // Moves back to the previous hit.
        if (this.currentHitIndex > 0) {
            var currentNode = this.editedNodes[this.currentHitIndex].spanNode;
            var prevNode = this.editedNodes[this.currentHitIndex-1].spanNode;
            this._changeHitMode(currentNode, false);
            this._changeHitMode(prevNode, true);
            --this.currentHitIndex;
            prevNode.scrollIntoView(true);
        }
    },

    // Internal methods follow.

    _searchTextNode: function(currentNode) {  // Searches text node for regex and edits DOM to represent hit.
        var textString = currentNode.nodeValue;
        var match = this.currentRegex.exec(textString)
        if (match !== null) {
            var before = match[1]
            var hit = match[2]
            var after = match[3]
            var beforeTextElement = document.createTextNode(before);
            var afterTextElement = document.createTextNode(after);
            var spanElement = document.createElement("span");
            spanElement.setAttribute("class", hitClass);
            var spanText = document.createTextNode(hit);
            spanElement.appendChild(spanText)

            var oldTextNode = this.currentSearchNode.replaceChild(afterTextElement, currentNode);
            var spanElementInserted = this.currentSearchNode.insertBefore(spanElement, afterTextElement);
            var beforeElementInserted = this.currentSearchNode.insertBefore(beforeTextElement, spanElementInserted);

            this._addEdit(oldTextNode, spanElement);
            return true;
        } else {
            return false;
        }
    },

    _addEdit: function(oldTextNode, spanElement) {  // Adds an edit record to the list of hits found.
        var editInfo = { parentNode: this.currentSearchNode, firstChildIndex: this.currentChildIndex, originalNode: oldTextNode, spanNode: spanElement };
        if (this.editedNodes.length == 0) {
            this._toggleBodyBackground(true);
            this._changeHitMode(spanElement, true);
            spanElement.scrollIntoView(true);
        }
        this.editedNodes.push(editInfo);
    },

    _reverseEdit: function(edit) {  // Reverses one edit record.
        // Three nodes must be replaced with the original node: before, span, after
        var childNodes = edit.parentNode.childNodes;
        edit.parentNode.removeChild(childNodes[edit.firstChildIndex]);  // before
        edit.parentNode.removeChild(childNodes[edit.firstChildIndex]);  // span
        edit.parentNode.removeChild(childNodes[edit.firstChildIndex]);  // after
        if (edit.firstChildIndex < childNodes.length) {
            edit.parentNode.insertBefore(edit.originalNode, childNodes[edit.firstChildIndex]);
        } else {
            edit.parentNode.appendChild(edit.originalNode);
        }
    },

    _changeHitMode: function(spanElement, currentHit) {  // Sets the highlighing mode for a hit span element.
        var className = (currentHit ? currentHitClass : hitClass);
        spanElement.setAttribute("class", className);
    },

    _toggleBodyBackground: function(hitsDisplayed) {  // Toggles the background of the page based on whether hits are displayed.
        var body = document.body;
        if (hitsDisplayed) {
            body.setAttribute("style", "background-color: rgb(78%,78%,78%);");
        } else {
            body.removeAttribute("style");
        }
    },

    _installStyles: function() {  // Installs the styles for showing hits and current hit
        var htmlTag = document.documentElement;
        var firstStyleTag = null;
        var headTags = htmlTag.getElementsByTagName("head");
        if (headTags.length == 1) {
            var firstHeadTag = headTags[0];
            firstHeadTag.appendChild(this._styleElement(hitClass, "rgb(100%,100%,100%)"));
            firstHeadTag.appendChild(this._styleElement(currentHitClass, "rgb(100%,100%,1%)"));
        }
    },

    _styleElement: function(name, backgroundColor) {  // Creates a new  style.
        var result = document.createElement("style");
        var styleContent = '.' + name + ' { background-color: ' + backgroundColor + '; }';
        var textElement = document.createTextNode(styleContent);
        result.appendChild(textElement);
        result.setAttribute("type", "text/css");
        return result; 
    },

    _reset: function() {  // Resets the state to ground zero.
        this.domSpotStack = [];
        this.currentRegex = null;
        this.currentHitIndex = 0;
        if (this.editedNodes.length > 0) {
            while (this.editedNodes.length > 0) {
                var item = this.editedNodes.pop();
                this._reverseEdit(item);
            }
        }    
    },

};

searchController.init();
