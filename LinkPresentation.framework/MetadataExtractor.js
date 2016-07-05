//
//  LinkPresentation
//  Copyright © 2015-2016 Apple Inc. All rights reserved.
//

// FIXME: Twitter equivalents?

var MetadataExtractor = {
    doc : undefined,
    responseURL : undefined,
    result : {},

    resolveURL : function (URLString) {
        // Don't absolutize empty strings.
        if (URLString == "" || !URLString)
            return URLString;

        var URL = new window.URL(URLString, this.responseURL);
        return URL.toString();
    },

    extractAndSortIconsWithSelector : function (selector) {
        var extractedIcons = this.doc.head.querySelectorAll(selector);
        if (!extractedIcons.length)
            return [];

        const IconTypeFavicon = 0;
        const IconTypeAppleTouchIcon = 1;
        const IconTypeAppleTouchIconPrecomposed = 2;

        const AppleTouchIconDefaultWidth = 60;

        function getIconType(icon) {
            var iconTypeString = icon.getAttribute("rel");
            if (iconTypeString === "apple-touch-icon")
                return IconTypeAppleTouchIcon;

            if (iconTypeString === "apple-touch-icon-precomposed")
                return IconTypeAppleTouchIconPrecomposed;

            return IconTypeFavicon;
        }

        function compareIconsDescending(icon1, icon2) {
            var icon1Type = getIconType(icon1);
            var icon2Type = getIconType(icon2);

            // Apple Touch icons always come first.
            if (icon1Type === IconTypeFavicon && icon2Type !== IconTypeFavicon)
                return 1;
            if (icon2Type === IconTypeFavicon && icon1Type !== IconTypeFavicon)
                return -1;

            var icon1Size = icon1.getAttribute("sizes");
            var icon2Size = icon2.getAttribute("sizes");
            var icon1Width = 0;
            var icon2Width = 0;

            if (icon1Size)
                icon1Width = parseInt(icon1Size);
            else if (!icon1Size && (icon1Type === IconTypeAppleTouchIcon || icon1Type === IconTypeAppleTouchIconPrecomposed))
                icon1Width = AppleTouchIconDefaultWidth;

            if (icon2Size)
                icon2Width = parseInt(icon2Size);
            else if (!icon2Size && (icon2Type === IconTypeAppleTouchIcon || icon2Type === IconTypeAppleTouchIconPrecomposed))
                icon2Width = AppleTouchIconDefaultWidth;

            if (icon2Width > icon1Width)
                return 1;
            if (icon2Width < icon1Width)
                return -1;

            // A Precomposed icon should come first if both icons have the same size.
            if (icon1Type !== IconTypeAppleTouchIconPrecomposed && icon2Type === IconTypeAppleTouchIconPrecomposed)
                return 1;
            if (icon2Type !== IconTypeAppleTouchIconPrecomposed && icon1Type === IconTypeAppleTouchIconPrecomposed)
                return -1;

            return 0;
        }

        return Array.prototype.slice.call(extractedIcons).sort(compareIconsDescending);
    },

    extractTouchIconURLs : function () {
        var icons = this.extractAndSortIconsWithSelector("link[rel=apple-touch-icon], link[rel=apple-touch-icon-precomposed]");
        var urls = [];
        for (var i = 0; i < icons.length; ++i) {
            var url = icons[i].href;
            if (url)
                urls.push(this.resolveURL(url));
        }

        return urls;
    },

    extractFavIconURLs : function () {
        var icons = this.extractAndSortIconsWithSelector("link[rel=icon], link[rel='shortcut icon']");
        var urls = [];
        for (var i = 0; i < icons.length; ++i) {
            var url = icons[i].href;
            if (url)
                urls.push(this.resolveURL(url));
        }

        return urls;
    }
}

var propertiesDefinitions = {
    LPMetadataURL : {
        properties : ["og:url"],
        transformationFunction : function(val) { return val ? MetadataExtractor.resolveURL(val) : MetadataExtractor.responseURL; }
    },

    LPMetadataTitle : {
        properties : ["og:title", "twitter:title"],
        transformationFunction : function(val) { return val ? val : MetadataExtractor.doc.title; }
    },

    LPMetadataDescription : {
        properties : ["og:description", "twitter:description", "Description", "description"]
    },

    LPMetadataSiteName : {
        properties : ["og:site_name"]
    },

    LPMetadataItemType : {
        properties : ["og:type"]
    },

    LPMetadataRelatedURL : {
        properties : ["og:see_also"],
        transformationFunction : function(val) { return MetadataExtractor.resolveURL(val); }
    },

    LPMetadataCreator : {
        properties : ["author"]
    },

    LPMetadataCreatorFacebookProfile : {
        properties : ["article:author"]
    },

    LPMetadataCreatorTwitterUsername : {
        properties : ["twitter:creator", "twitter:creator:id"]
    },

    LPMetadataImages : {
        repeatProperties : ["og:image:secure_url", "og:image", "og:image:url", "twitter:image", "image"],
        properties : ["og:image:secure_url", "og:image", "og:image:url", "og:image:width", "og:image:height", "og:image:type", "twitter:image", "image"],
        children : {
            LPMetadataImageURL : {
                properties : ["og:image:secure_url", "og:image", "og:image:url", "twitter:image", "image"],
                transformationFunction : function(val) { return MetadataExtractor.resolveURL(val); }
            },

            LPMetadataImageWidth : {
                properties : ["og:image:width"],
                transformationFunction : function(val) { return parseInt(val, 10); }
            },

            LPMetadataImageHeight : {
                properties : ["og:image:height"],
                transformationFunction : function(val) { return parseInt(val, 10); }
            },

            LPMetadataImageType : {
                properties : ["og:image:type"]
            }
        }
    },

    LPMetadataVideos : {
        repeatProperties : ["og:video:secure_url", "og:video", "og:video:url"],
        properties : ["og:video:secure_url", "og:video", "og:video:url", "og:video:width", "og:video:height", "og:video:type"],
        children : {
            LPMetadataVideoURL : {
                properties : ["og:video:secure_url", "og:video", "og:video:url"],
                transformationFunction : function(val) { return MetadataExtractor.resolveURL(val) }
            },

            LPMetadataVideoWidth : {
                properties : ["og:video:width"],
                transformationFunction : function(val) { return parseInt(val, 10) }
            },

            LPMetadataVideoHeight : {
                properties : ["og:video:height"],
                transformationFunction : function(val) { return parseInt(val, 10) }
            },

            LPMetadataVideoType : {
                properties : ["og:video:type"]
            }
        }
    },

    LPMetadataStreamingVideos : {
        repeatProperties : ["twitter:player:stream"],
        properties : ["twitter:player:stream", "twitter:player:stream:content_type"],
        children : {
            LPMetadataVideoURL : {
                properties : ["twitter:player:stream"],
                transformationFunction : function(val) { return MetadataExtractor.resolveURL(val) }
            },

            LPMetadataVideoType : {
                properties : ["twitter:player:stream:content_type"]
            }
        }
    },

    LPMetadataAudios : {
        repeatProperties : ["og:audio:secure_url", "og:audio", "og:audio:url"],
        properties : ["og:audio:secure_url", "og:audio", "og:audio:url", "og:audio:type"],
        children : {
            LPMetadataAudioURL : {
                properties : ["og:audio:secure_url", "og:audio", "og:audio:url"],
                transformationFunction : function(val) { return MetadataExtractor.resolveURL(val) }
            },

            LPMetadataAudioType : {
                properties : ["og:audio:type"]
            }
        }
    }
}

function propertyDefinitionNameForProperty(key)
{
    for (var propertyDefinitionName in propertiesDefinitions) {
        if (!propertiesDefinitions[propertyDefinitionName].properties.includes(key))
            continue;
        return propertyDefinitionName;
    }

    return undefined;
}

function resolvePropertyWithDefinition(result, values, propertyDefinition, propertyDefinitionName)
{
    var value = undefined;
    for (var propertyName of propertyDefinition.properties)
    {
        value = values[propertyName];
        if (value)
            break;
    }

    var transformationFunction = propertyDefinition.transformationFunction;
    if (transformationFunction)
        value = transformationFunction(value);

    if (value)
        result[propertyDefinitionName] = value;
}

function resolveProperties(result, collectedValues, definitions)
{
    for (var propertyDefinitionName in definitions) {
        var propertyDefinition = definitions[propertyDefinitionName];
        if (!propertyDefinition)
            continue;

        resolvePropertyWithDefinition(result, collectedValues, propertyDefinition, propertyDefinitionName);
    }
}

function resolveRepeatedProperty(collectedValues, repeatedPropertyName)
{
    var result = {};
    resolveProperties(result, collectedValues, propertiesDefinitions[repeatedPropertyName].children)

    if (!MetadataExtractor.result.hasOwnProperty(repeatedPropertyName))
        MetadataExtractor.result[repeatedPropertyName] = [];
    MetadataExtractor.result[repeatedPropertyName].push(result);
}

function hasAnyKeysNotInArray(dict, arr)
{
    for (var key in dict) {
        if (!arr.includes(key))
            return true;
    }
    return false;
}

function decodeHTMLEntities(rawString)
{
    var el = document.createElement("textarea");
    el.innerHTML = rawString;
    return el.value;
}

function parseMetaTags()
{
    var allMetaElements = MetadataExtractor.doc.getElementsByTagName("meta");
    var rootCollectedValues = {};
    var childCollectedValues = {};

    for (var i = 0; i < allMetaElements.length; i++) {
        var el = allMetaElements[i];
        var property = el.getAttribute("property") || el.getAttribute("name") || el.getAttribute("itemprop");
        var content = decodeHTMLEntities(el.content);
        if (!property || !content)
            continue;
        var propertyDefinitionName = propertyDefinitionNameForProperty(property);
        if (!propertyDefinitionName)
            continue;
        var propertyDefinition = propertiesDefinitions[propertyDefinitionName];
        if (!propertyDefinition)
            continue;

        if (!propertyDefinition.hasOwnProperty("repeatProperties")) {
            // Not a repeating property, so take the first value.
            if (!rootCollectedValues.hasOwnProperty(property))
                rootCollectedValues[property] = content;
        } else {
            // A repeating property.
            if (propertyDefinition.repeatProperties.includes(property)) {
                var collectedValuesForProperty = childCollectedValues[propertyDefinitionName];
                if (collectedValuesForProperty && (hasAnyKeysNotInArray(collectedValuesForProperty, propertyDefinition.repeatProperties) || Object.keys(collectedValuesForProperty).includes(property))) {
                    resolveRepeatedProperty(collectedValuesForProperty, propertyDefinitionName);
                    childCollectedValues[propertyDefinitionName] = {};
                }
            }

            if (!childCollectedValues.hasOwnProperty(propertyDefinitionName))
                childCollectedValues[propertyDefinitionName] = {};

            childCollectedValues[propertyDefinitionName][property] = content;    
        }
    }

    for (var propertyDefinitionName in childCollectedValues)
        resolveRepeatedProperty(childCollectedValues[propertyDefinitionName], propertyDefinitionName);

    resolveProperties(MetadataExtractor.result, rootCollectedValues, propertiesDefinitions);
}

function fetchMetadataForMainFrame()
{
    MetadataExtractor.responseURL = window.location.href;
    MetadataExtractor.doc = document;

    try {
        parseMetaTags();
        var touchIcons = MetadataExtractor.extractTouchIconURLs();
        var favIcons = MetadataExtractor.extractFavIconURLs();

        // FIXME: We should also support the device-specific touch icons that MobileSafari fetches.
        var potentialImplicitTouchIcons = [MetadataExtractor.resolveURL("/apple-touch-icon-precomposed.png"), MetadataExtractor.resolveURL("/apple-touch-icon.png")];
        var potentialImplicitFavIcons = [MetadataExtractor.resolveURL("/favicon.ico")];

        MetadataExtractor.result["LPMetadataIcons"] = touchIcons.concat(potentialImplicitTouchIcons).concat(favIcons).concat(potentialImplicitFavIcons);

        MetadataExtractor.result["LPMetadataSelectedText"] = window.getSelection().toString();

        return MetadataExtractor.result;
    } catch(e) {
        return { error: "Exception: " + e };
    }
}
