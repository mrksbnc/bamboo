var CSSOM = {};


// Utility functions for CSSOM error handling

/**
 * Gets the appropriate error constructor from the global object context.
 * Tries to find the error constructor from parentStyleSheet.__globalObject,
 * then from __globalObject, then falls back to the native constructor.
 * 
 * @param {Object} context - The CSSOM object (rule, stylesheet, etc.)
 * @param {string} errorType - The error type ('TypeError', 'RangeError', 'DOMException', etc.)
 * @return {Function} The error constructor
 */
function getErrorConstructor(context, errorType) {
	// Try parentStyleSheet.__globalObject first
	if (context.parentStyleSheet && context.parentStyleSheet.__globalObject && context.parentStyleSheet.__globalObject[errorType]) {
		return context.parentStyleSheet.__globalObject[errorType];
	}
	
	// Try __parentStyleSheet (alternative naming)
	if (context.__parentStyleSheet && context.__parentStyleSheet.__globalObject && context.__parentStyleSheet.__globalObject[errorType]) {
		return context.__parentStyleSheet.__globalObject[errorType];
	}
	
	// Try __globalObject on the context itself
	if (context.__globalObject && context.__globalObject[errorType]) {
		return context.__globalObject[errorType];
	}
	
	// Fall back to native constructor
	return (typeof global !== 'undefined' && global[errorType]) || 
	       (typeof window !== 'undefined' && window[errorType]) || 
	       eval(errorType);
}

/**
 * Creates and throws an appropriate error with context-aware constructor.
 * 
 * @param {Object} context - The CSSOM object (rule, stylesheet, etc.)
 * @param {string} errorType - The error type ('TypeError', 'RangeError', 'DOMException', etc.)
 * @param {string} message - The error message
 * @param {string} [name] - Optional name for DOMException
 */
function throwError(context, errorType, message, name) {
	var ErrorConstructor = getErrorConstructor(context, errorType);
	var error = new ErrorConstructor(message, name);
	throw error;
}

/**
 * Throws a TypeError for missing required arguments.
 * 
 * @param {Object} context - The CSSOM object
 * @param {string} methodName - The method name (e.g., 'appendRule')
 * @param {string} objectName - The object name (e.g., 'CSSKeyframesRule')
 * @param {number} [required=1] - Number of required arguments
 * @param {number} [provided=0] - Number of provided arguments
 */
function throwMissingArguments(context, methodName, objectName, required, provided) {
	required = required || 1;
	provided = provided || 0;
	var message = "Failed to execute '" + methodName + "' on '" + objectName + "': " + 
	              required + " argument" + (required > 1 ? "s" : "") + " required, but only " + 
	              provided + " present.";
	throwError(context, 'TypeError', message);
}

/**
 * Throws a DOMException for parse errors.
 * 
 * @param {Object} context - The CSSOM object
 * @param {string} methodName - The method name
 * @param {string} objectName - The object name
 * @param {string} rule - The rule that failed to parse
 * @param {string} [name='SyntaxError'] - The DOMException name
 */
function throwParseError(context, methodName, objectName, rule, name) {
	var message = "Failed to execute '" + methodName + "' on '" + objectName + "': " +
	              "Failed to parse the rule '" + rule + "'.";
	throwError(context, 'DOMException', message, name || 'SyntaxError');
}

/**
 * Throws a DOMException for index errors.
 * 
 * @param {Object} context - The CSSOM object
 * @param {string} methodName - The method name
 * @param {string} objectName - The object name
 * @param {number} index - The invalid index
 * @param {number} maxIndex - The maximum valid index
 * @param {string} [name='IndexSizeError'] - The DOMException name
 */
function throwIndexError(context, methodName, objectName, index, maxIndex, name) {
	var message = "Failed to execute '" + methodName + "' on '" + objectName + "': " +
	              "The index provided (" + index + ") is larger than the maximum index (" + maxIndex + ").";
	throwError(context, 'DOMException', message, name || 'IndexSizeError');
}

var errorUtils = {
	getErrorConstructor: getErrorConstructor,
	throwError: throwError,
	throwMissingArguments: throwMissingArguments,
	throwParseError: throwParseError,
	throwIndexError: throwIndexError
};



// NOTE: Check viability to add a validation for css values or use a dependency like csstree-validator
/**
 * Regular expression to detect invalid characters in the value portion of a CSS style declaration.
 *
 * This regex matches a colon (:) that is not inside parentheses and not inside single or double quotes.
 * It is used to ensure that the value part of a CSS property does not contain unexpected colons,
 * which would indicate a malformed declaration (e.g., "color: foo:bar;" is invalid).
 *
 * The negative lookahead `(?![^(]*\))` ensures that the colon is not followed by a closing
 * parenthesis without encountering an opening parenthesis, effectively ignoring colons inside
 * function-like values (e.g., `url(data:image/png;base64,...)`).
 *
 * The lookahead `(?=(?:[^'"]|'[^']*'|"[^"]*")*$)` ensures that the colon is not inside single or double quotes,
 * allowing colons within quoted strings (e.g., `content: ":";` or `background: url("foo:bar.png");`).
 *
 * Example:
 *   "color: red;"         // valid, does not match
 *   "background: url(data:image/png;base64,...);" // valid, does not match
 *   "content: ':';"       // valid, does not match
 *   "color: foo:bar;"     // invalid, matches
 */
var basicStylePropertyValueValidationRegExp = /:(?![^(]*\))(?=(?:[^'"]|'[^']*'|"[^"]*")*$)/;

/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
 */
CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration(){
	this.length = 0;
	this.parentRule = null;

	// NON-STANDARD
	this._importants = {};
};


CSSOM.CSSStyleDeclaration.prototype = {

	constructor: CSSOM.CSSStyleDeclaration,

	/**
	 *
	 * @param {string} name
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
	 * @return {string} the value of the property if it has been explicitly set for this declaration block.
	 * Returns the empty string if the property has not been set.
	 */
	getPropertyValue: function(name) {
		return this[name] || "";
	},

	/**
	 *
	 * @param {string} name
	 * @param {string} value
	 * @param {string} [priority=null] "important" or null
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
	 */
	setProperty: function(name, value, priority, parseErrorHandler) 
	{
		// NOTE: Check viability to add a validation for css values or use a dependency like csstree-validator
		if (basicStylePropertyValueValidationRegExp.test(value)) {
			parseErrorHandler && parseErrorHandler('Invalid CSSStyleDeclaration property (name = "' + name + '", value = "' + value + '")');
		} else if (this[name]) {
			// Property already exist. Overwrite it.
			var index = Array.prototype.indexOf.call(this, name);
			if (index < 0) {
				this[this.length] = name;
				this.length++;
			}
	
			// If the priority value of the incoming property is "important",
			// or the value of the existing property is not "important", 
			// then remove the existing property and rewrite it.
			if (priority || !this._importants[name]) {
				this.removeProperty(name);
				this[this.length] = name;
				this.length++;
				this[name] = value + '';
				this._importants[name] = priority;
			}
		} else {
			// New property.
			this[this.length] = name;
			this.length++;
			this[name] = value + '';
			this._importants[name] = priority;
		}
	},

	/**
	 *
	 * @param {string} name
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
	 * @return {string} the value of the property if it has been explicitly set for this declaration block.
	 * Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
	 */
	removeProperty: function(name) {
		if (!(name in this)) {
			return "";
		}
		var index = Array.prototype.indexOf.call(this, name);
		if (index < 0) {
			return "";
		}
		var prevValue = this[name];
		this[name] = "";

		// That's what WebKit and Opera do
		Array.prototype.splice.call(this, index, 1);

		// That's what Firefox does
		//this[index] = ""

		return prevValue;
	},

	getPropertyCSSValue: function() {
		//FIXME
	},

	/**
	 *
	 * @param {String} name
	 */
	getPropertyPriority: function(name) {
		return this._importants[name] || "";
	},


	/**
	 *   element.style.overflow = "auto"
	 *   element.style.getPropertyShorthand("overflow-x")
	 *   -> "overflow"
	 */
	getPropertyShorthand: function() {
		//FIXME
	},

	isPropertyImplicit: function() {
		//FIXME
	},

	// Doesn't work in IE < 9
	get cssText(){
		var properties = [];
		for (var i=0, length=this.length; i < length; ++i) {
			var name = this[i];
			var value = this.getPropertyValue(name);
			var priority = this.getPropertyPriority(name);
			if (priority) {
				priority = " !" + priority;
			}
			properties[i] = name + ": " + value + priority + ";";
		}
		return properties.join(" ");
	},

	set cssText(text){
		var i, name;
		for (i = this.length; i--;) {
			name = this[i];
			this[name] = "";
		}
		Array.prototype.splice.call(this, 0, this.length);
		this._importants = {};

		var dummyRule = CSSOM.parse('#bogus{' + text + '}').cssRules[0].style;
		var length = dummyRule.length;
		for (i = 0; i < length; ++i) {
			name = dummyRule[i];
			this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
		}
	}
};



try {
	CSSOM.CSSStyleDeclaration = require("cssstyle").CSSStyleDeclaration;
} catch (e) {
	// ignore
}

/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-cssrule-interface
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule
 */
CSSOM.CSSRule = function CSSRule() {
  this.__parentRule = null;
  this.__parentStyleSheet = null;
};

CSSOM.CSSRule.UNKNOWN_RULE = 0; // obsolete
CSSOM.CSSRule.STYLE_RULE = 1;
CSSOM.CSSRule.CHARSET_RULE = 2; // obsolete
CSSOM.CSSRule.IMPORT_RULE = 3;
CSSOM.CSSRule.MEDIA_RULE = 4;
CSSOM.CSSRule.FONT_FACE_RULE = 5;
CSSOM.CSSRule.PAGE_RULE = 6;
CSSOM.CSSRule.KEYFRAMES_RULE = 7;
CSSOM.CSSRule.KEYFRAME_RULE = 8;
CSSOM.CSSRule.MARGIN_RULE = 9;
CSSOM.CSSRule.NAMESPACE_RULE = 10;
CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
CSSOM.CSSRule.SUPPORTS_RULE = 12;
CSSOM.CSSRule.DOCUMENT_RULE = 13;
CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
CSSOM.CSSRule.VIEWPORT_RULE = 15;
CSSOM.CSSRule.REGION_STYLE_RULE = 16;
CSSOM.CSSRule.CONTAINER_RULE = 17;
CSSOM.CSSRule.LAYER_BLOCK_RULE = 18;
CSSOM.CSSRule.STARTING_STYLE_RULE = 1002;

Object.defineProperties(CSSOM.CSSRule.prototype, {

  constructor: { value: CSSOM.CSSRule },

  parentRule: {
    get: function() {
      return this.__parentRule
    }
  },

  parentStyleSheet: {
    get: function() {
      return this.__parentStyleSheet
    }
  },
  
  UNKNOWN_RULE: { value: 0, enumerable: true }, // obsolet
  STYLE_RULE: { value: 1, enumerable: true },
  CHARSET_RULE: { value: 2, enumerable: true }, // obsolet
  IMPORT_RULE: { value: 3, enumerable: true },
  MEDIA_RULE: { value: 4, enumerable: true },
  FONT_FACE_RULE: { value: 5, enumerable: true },
  PAGE_RULE: { value: 6, enumerable: true },
  KEYFRAMES_RULE: { value: 7, enumerable: true },
  KEYFRAME_RULE: { value: 8, enumerable: true },
  MARGIN_RULE: { value: 9, enumerable: true },
  NAMESPACE_RULE: { value: 10, enumerable: true },
  COUNTER_STYLE_RULE: { value: 11, enumerable: true },
  SUPPORTS_RULE: { value: 12, enumerable: true },
  DOCUMENT_RULE: { value: 13, enumerable: true },
  FONT_FEATURE_VALUES_RULE: { value: 14, enumerable: true },
  VIEWPORT_RULE: { value: 15, enumerable: true },
  REGION_STYLE_RULE: { value: 16, enumerable: true },
  CONTAINER_RULE: { value: 17, enumerable: true },
  LAYER_BLOCK_RULE: { value: 18, enumerable: true },
  STARTING_STYLE_RULE: { value: 1002, enumerable: true },
});





/**
 * @constructor
 * @see https://drafts.csswg.org/css-nesting-1/
 */
CSSOM.CSSNestedDeclarations = function CSSNestedDeclarations() {
  CSSOM.CSSRule.call(this);
  this.__style = new CSSOM.CSSStyleDeclaration();
  this.__style.parentRule = this;
};

CSSOM.CSSNestedDeclarations.prototype = new CSSOM.CSSRule();
CSSOM.CSSNestedDeclarations.prototype.constructor = CSSOM.CSSNestedDeclarations;
CSSOM.CSSNestedDeclarations.prototype.type = 0;

Object.defineProperty(CSSOM.CSSNestedDeclarations.prototype, "style", {
	get: function() {
		return this.__style;	
	},
	set: function(value) {
		if (typeof value === "string") {
			this.__style.cssText = value;
		} else {
			this.__style = value;
		}
	}
});

Object.defineProperty(CSSOM.CSSNestedDeclarations.prototype, "cssText", {
  get: function () {
    return this.style.cssText;
  },
  configurable: true,
  enumerable: true,
});




/**
 * @constructor
 * @see https://drafts.csswg.org/cssom/#the-cssgroupingrule-interface
 */
CSSOM.CSSGroupingRule = function CSSGroupingRule() {
	CSSOM.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM.CSSGroupingRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSGroupingRule.prototype.constructor = CSSOM.CSSGroupingRule;


/**
 * Used to insert a new CSS rule to a list of CSS rules.
 *
 * @example
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}"
 *   cssGroupingRule.insertRule("img{border:none;}", 1)
 *   -> 1
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}img{border:none;}"
 *
 * @param {string} rule
 * @param {number} [index]
 * @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-insertrule
 * @return {number} The index within the grouping rule's collection of the newly inserted rule.
 */
 CSSOM.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
	if (rule === undefined && index === undefined) {
		errorUtils.throwMissingArguments(this, 'insertRule', this.constructor.name);
	}
	if (index === void 0) {
		index = 0;
	}
	index = Number(index);
	if (index < 0) {
		index = 4294967296 + index;
	}
	if (index > this.cssRules.length) {
		errorUtils.throwIndexError(this, 'insertRule', this.constructor.name, index, this.cssRules.length);
	}
	
	var ruleToParse = String(rule);
	var parsedSheet = CSSOM.parse(ruleToParse);
	if (parsedSheet.cssRules.length !== 1) {
		errorUtils.throwParseError(this, 'insertRule', this.constructor.name, ruleToParse, 'SyntaxError');
	}
	var cssRule = parsedSheet.cssRules[0];
	
	// Check for rules that cannot be inserted inside a CSSGroupingRule
	if (cssRule.constructor.name === 'CSSImportRule' || cssRule.constructor.name === 'CSSNamespaceRule') {
		var ruleKeyword = cssRule.constructor.name === 'CSSImportRule' ? '@import' : '@namespace';
		errorUtils.throwError(this, 'DOMException', 
			"Failed to execute 'insertRule' on '" + this.constructor.name + "': " +
			"'" + ruleKeyword + "' rules cannot be inserted inside a group rule.",
			'HierarchyRequestError');
	}
	
	// Check for CSSLayerStatementRule (@layer statement rules)
	if (cssRule.constructor.name === 'CSSLayerStatementRule') {
		errorUtils.throwParseError(this, 'insertRule', this.constructor.name, ruleToParse, 'SyntaxError');
	}
	
	cssRule.__parentRule = this;
	this.cssRules.splice(index, 0, cssRule);
	return index;
};

/**
 * Used to delete a rule from the grouping rule.
 *
 *   cssGroupingRule.cssText
 *   -> "img{border:none;}body{margin:0;}"
 *   cssGroupingRule.deleteRule(0)
 *   cssGroupingRule.cssText
 *   -> "body{margin:0;}"
 *
 * @param {number} index within the grouping rule's rule list of the rule to remove.
 * @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-deleterule
 */
 CSSOM.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
	if (index === undefined) {
		errorUtils.throwMissingArguments(this, 'deleteRule', this.constructor.name);
	}
	index = Number(index);
	if (index < 0) {
		index = 4294967296 + index;
	}
	if (index >= this.cssRules.length) {
		errorUtils.throwIndexError(this, 'deleteRule', this.constructor.name, index, this.cssRules.length);
	}
	this.cssRules.splice(index, 1)[0].__parentRule = null;
};





/**
 * @constructor
 * @see https://drafts.csswg.org/css-counter-styles/#the-csscounterstylerule-interface
 */
CSSOM.CSSCounterStyleRule = function CSSCounterStyleRule() {
	CSSOM.CSSRule.call(this);
    this.name = "";
};

CSSOM.CSSCounterStyleRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSCounterStyleRule.prototype.constructor = CSSOM.CSSCounterStyleRule;
CSSOM.CSSCounterStyleRule.prototype.type = 11;





/**
 * @constructor
 * @see https://www.w3.org/TR/css-conditional-3/#the-cssconditionrule-interface
 */
CSSOM.CSSConditionRule = function CSSConditionRule() {
  CSSOM.CSSGroupingRule.call(this);
  this.cssRules = [];
};

CSSOM.CSSConditionRule.prototype = new CSSOM.CSSGroupingRule();
CSSOM.CSSConditionRule.prototype.constructor = CSSOM.CSSConditionRule;
CSSOM.CSSConditionRule.prototype.conditionText = ''
CSSOM.CSSConditionRule.prototype.cssText = ''





/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssstylerule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
 */
CSSOM.CSSStyleRule = function CSSStyleRule() {
	CSSOM.CSSGroupingRule.call(this);
	this.__selectorText = "";
	this.__style = new CSSOM.CSSStyleDeclaration();
	this.__style.parentRule = this;
};

CSSOM.CSSStyleRule.prototype = new CSSOM.CSSGroupingRule();
CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;

Object.defineProperty(CSSOM.CSSStyleRule.prototype, "type", {
	value: 1,
	writable: false
});

Object.defineProperty(CSSOM.CSSStyleRule.prototype, "selectorText", {
	get: function() {
		return this.__selectorText;	
	},
	set: function(value) {
		this.__selectorText = value;
	}
});

Object.defineProperty(CSSOM.CSSStyleRule.prototype, "style", {
	get: function() {
		return this.__style;	
	},
	set: function(value) {
		if (typeof value === "string") {
			this.__style.cssText = value;
		} else {
			this.__style = value;
		}
	}
});

Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
	get: function() {
		var text;
		if (this.selectorText) {
			var values = ""
			if (this.cssRules.length) {
				var valuesArr = [" {"];
				this.style.cssText && valuesArr.push(this.style.cssText);
				valuesArr.push(this.cssRules.map(function(rule){ return rule.cssText }).join("\n  "));
				values = valuesArr.join("\n  ") + "\n}"
			} else {
				values = " {" + (this.style.cssText ? " " + this.style.cssText : "") + " }";
			}
			text = this.selectorText + values;
		} else {
			text = "";
		}
		return text;
	},
	set: function(cssText) {
		var rule = CSSOM.CSSStyleRule.parse(cssText);
		this.__style = rule.style;
		this.__selectorText = rule.selectorText;
	}
});


/**
 * NON-STANDARD
 * lightweight version of parse.js.
 * @param {string} ruleText
 * @return CSSStyleRule
 */
CSSOM.CSSStyleRule.parse = function(ruleText) {
	var i = 0;
	var state = "selector";
	var index;
	var j = i;
	var buffer = "";

	var SIGNIFICANT_WHITESPACE = {
		"selector": true,
		"value": true
	};

	var styleRule = new CSSOM.CSSStyleRule();
	var name, priority="";

	for (var character; (character = ruleText.charAt(i)); i++) {

		switch (character) {

		case " ":
		case "\t":
		case "\r":
		case "\n":
		case "\f":
			if (SIGNIFICANT_WHITESPACE[state]) {
				// Squash 2 or more white-spaces in the row into 1
				switch (ruleText.charAt(i - 1)) {
					case " ":
					case "\t":
					case "\r":
					case "\n":
					case "\f":
						break;
					default:
						buffer += " ";
						break;
				}
			}
			break;

		// String
		case '"':
			j = i + 1;
			index = ruleText.indexOf('"', j) + 1;
			if (!index) {
				throw '" is missing';
			}
			buffer += ruleText.slice(i, index);
			i = index - 1;
			break;

		case "'":
			j = i + 1;
			index = ruleText.indexOf("'", j) + 1;
			if (!index) {
				throw "' is missing";
			}
			buffer += ruleText.slice(i, index);
			i = index - 1;
			break;

		// Comment
		case "/":
			if (ruleText.charAt(i + 1) === "*") {
				i += 2;
				index = ruleText.indexOf("*/", i);
				if (index === -1) {
					throw new SyntaxError("Missing */");
				} else {
					i = index + 1;
				}
			} else {
				buffer += character;
			}
			break;

		case "{":
			if (state === "selector") {
				styleRule.selectorText = buffer.trim();
				buffer = "";
				state = "name";
			}
			break;

		case ":":
			if (state === "name") {
				name = buffer.trim();
				buffer = "";
				state = "value";
			} else {
				buffer += character;
			}
			break;

		case "!":
			if (state === "value" && ruleText.indexOf("!important", i) === i) {
				priority = "important";
				i += "important".length;
			} else {
				buffer += character;
			}
			break;

		case ";":
			if (state === "value") {
				styleRule.style.setProperty(name, buffer.trim(), priority);
				priority = "";
				buffer = "";
				state = "name";
			} else {
				buffer += character;
			}
			break;

		case "}":
			if (state === "value") {
				styleRule.style.setProperty(name, buffer.trim(), priority);
				priority = "";
				buffer = "";
			} else if (state === "name") {
				break;
			} else {
				buffer += character;
			}
			state = "selector";
			break;

		default:
			buffer += character;
			break;

		}
	}

	return styleRule;

};






/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-medialist-interface
 */
CSSOM.MediaList = function MediaList(){
	this.length = 0;
};

CSSOM.MediaList.prototype = {

	constructor: CSSOM.MediaList,

	/**
	 * @return {string}
	 */
	get mediaText() {
		return Array.prototype.join.call(this, ", ");
	},

	/**
	 * @param {string} value
	 */
	set mediaText(value) {
		var values = value.split(",");
		var length = this.length = values.length;
		for (var i=0; i<length; i++) {
			this[i] = values[i].trim();
		}
	},

	/**
	 * @param {string} medium
	 */
	appendMedium: function(medium) {
		if (Array.prototype.indexOf.call(this, medium) === -1) {
			this[this.length] = medium;
			this.length++;
		}
	},

	/**
	 * @param {string} medium
	 */
	deleteMedium: function(medium) {
		var index = Array.prototype.indexOf.call(this, medium);
		if (index !== -1) {
			Array.prototype.splice.call(this, index, 1);
		}
	}

};






/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssmediarule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule
 */
CSSOM.CSSMediaRule = function CSSMediaRule() {
	CSSOM.CSSConditionRule.call(this);
	this.media = new CSSOM.MediaList();
};

CSSOM.CSSMediaRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
CSSOM.CSSMediaRule.prototype.type = 4;

// https://opensource.apple.com/source/WebCore/WebCore-7611.1.21.161.3/css/CSSMediaRule.cpp
Object.defineProperties(CSSOM.CSSMediaRule.prototype, {
  "conditionText": {
    get: function() {
      return this.media.mediaText;
    },
    set: function(value) {
      this.media.mediaText = value;
    },
    configurable: true,
    enumerable: true
  },
  "cssText": {
    get: function() {
      var cssTexts = [];
      for (var i=0, length=this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
      }
      return "@media " + this.media.mediaText + " {" + (cssTexts.length ? "\n  " + cssTexts.join("\n  ") : "") + "\n}";
    },
    configurable: true,
    enumerable: true
  }
});






/**
 * @constructor
 * @see https://drafts.csswg.org/css-contain-3/
 * @see https://www.w3.org/TR/css-contain-3/
 */
CSSOM.CSSContainerRule = function CSSContainerRule() {
	CSSOM.CSSConditionRule.call(this);
};

CSSOM.CSSContainerRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSContainerRule.prototype.constructor = CSSOM.CSSContainerRule;
CSSOM.CSSContainerRule.prototype.type = 17;

Object.defineProperties(CSSOM.CSSContainerRule.prototype, {
  "conditionText": {
    get: function() {
      return this.containerText;
    },
    set: function(value) {
      this.containerText = value;
    },
    configurable: true,
    enumerable: true
  },
  "cssText": {
    get: function() {
      var cssTexts = [];
      for (var i=0, length=this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
      }
      return "@container " + this.containerText + " {" + (cssTexts.length ? "\n  " + cssTexts.join("\n  ") : "") + "\n}";
    },
    configurable: true,
    enumerable: true
  }
});






/**
 * @constructor
 * @see https://drafts.csswg.org/css-conditional-3/#the-csssupportsrule-interface
 */
CSSOM.CSSSupportsRule = function CSSSupportsRule() {
  CSSOM.CSSConditionRule.call(this);
};

CSSOM.CSSSupportsRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSSupportsRule.prototype.constructor = CSSOM.CSSSupportsRule;
CSSOM.CSSSupportsRule.prototype.type = 12;

Object.defineProperty(CSSOM.CSSSupportsRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];

    for (var i = 0, length = this.cssRules.length; i < length; i++) {
      cssTexts.push(this.cssRules[i].cssText);
    }

    return "@supports " + this.conditionText + " {" + (cssTexts.length ? "\n  " + cssTexts.join("\n  ") : "") + "\n}";
  }
});





/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssimportrule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule
 */
CSSOM.CSSImportRule = function CSSImportRule() {
	CSSOM.CSSRule.call(this);
	this.href = "";
	this.media = new CSSOM.MediaList();
  this.layerName = null;
  this.supportsText = null;
	this.styleSheet = new CSSOM.CSSStyleSheet();
};

CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
CSSOM.CSSImportRule.prototype.type = 3;

Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
  get: function() {
    var mediaText = this.media.mediaText;
    return "@import url(\"" + this.href + "\")" + (this.layerName !== null ? " layer" + (this.layerName && "(" + this.layerName + ")") : "" ) + (this.supportsText ? " supports(" + this.supportsText + ")" : "" ) + (mediaText ? " " + mediaText : "") + ";";
  },
  set: function(cssText) {
    var i = 0;

    /**
     * @import url(partial.css) screen, handheld;
     *        ||               |
     *        after-import     media
     *         |
     *         url
     */
    var state = '';

    var buffer = '';
    var index;

    var layerRegExp = /layer\(([^)]*)\)/;
    var layerRuleNameRegExp = /^(-?[_a-zA-Z]+(\.[_a-zA-Z]+)*[_a-zA-Z0-9-]*)$/;
    var supportsRegExp = /supports\(([^)]+)\)/;
    var doubleOrMoreSpacesRegExp = /\s{2,}/g;

    for (var character; (character = cssText.charAt(i)); i++) {

      switch (character) {
        case ' ':
        case '\t':
        case '\r':
        case '\n':
        case '\f':
          if (state === 'after-import') {
            state = 'url';
          } else {
            buffer += character;
          }
          break;

        case '@':
          if (!state && cssText.indexOf('@import', i) === i) {
            state = 'after-import';
            i += 'import'.length;
            buffer = '';
          }
          break;

        case 'u':
          if (state === 'media') {
            buffer += character;
          }
          if (state === 'url' && cssText.indexOf('url(', i) === i) {
            index = cssText.indexOf(')', i + 1);
            if (index === -1) {
              throw i + ': ")" not found';
            }
            i += 'url('.length;
            var url = cssText.slice(i, index);
            if (url[0] === url[url.length - 1]) {
              if (url[0] === '"' || url[0] === "'") {
                url = url.slice(1, -1);
              }
            }
            this.href = url;
            i = index;
            state = 'media';
          }
          break;

        case '"':
          if (state === 'after-import' || state === 'url') {
            index = cssText.indexOf('"', i + 1);
            if (!index) {
              throw i + ": '\"' not found";
            }
            this.href = cssText.slice(i + 1, index);
            i = index;
            state = 'media';
          }
          break;

        case "'":
          if (state === 'after-import' || state === 'url') {
            index = cssText.indexOf("'", i + 1);
            if (!index) {
              throw i + ': "\'" not found';
            }
            this.href = cssText.slice(i + 1, index);
            i = index;
            state = 'media';
          }
          break;

        case ';':
          if (state === 'media') {
            if (buffer) {
              var bufferTrimmed = buffer.trim();
              
              if (bufferTrimmed.indexOf('layer') === 0) {
                var layerMatch =  bufferTrimmed.match(layerRegExp);

                if (layerMatch) {
                  var layerName = layerMatch[1].trim();

                  if (layerName.match(layerRuleNameRegExp) !== null) {
                    this.layerName = layerMatch[1].trim();
                    bufferTrimmed = bufferTrimmed.replace(layerRegExp, '')
                      .replace(doubleOrMoreSpacesRegExp, ' ') // Replace double or more spaces with single space
                      .trim();
                  } else {
                    // REVIEW: In the browser, an empty layer() is not processed as a unamed layer
                    // and treats the rest of the string as mediaText, ignoring the parse of supports()
                    if (bufferTrimmed) {
                      this.media.mediaText = bufferTrimmed;
                      return;
                    }
                  }
                } else {
                  this.layerName = "";
                  bufferTrimmed = bufferTrimmed.substring('layer'.length).trim()
                }
              }

              var supportsMatch =  bufferTrimmed.match(supportsRegExp);

              if (supportsMatch && supportsMatch.index === 0) {
                // REVIEW: In the browser, an empty supports() invalidates and ignores the entire @import rule
                this.supportsText = supportsMatch[1].trim();
                bufferTrimmed = bufferTrimmed.replace(supportsRegExp, '')
                .replace(doubleOrMoreSpacesRegExp, ' ') // Replace double or more spaces with single space
                .trim();
              }

              // REVIEW: In the browser, any invalid media is replaced with 'not all'
              if (bufferTrimmed) {
                this.media.mediaText = bufferTrimmed;
              }
            }
          }
          break;

        default:
          if (state === 'media') {
            buffer += character;
          }
          break;
      }
    }
  }
});






/**
 * @constructor
 * @see https://drafts.csswg.org/cssom/#the-cssnamespacerule-interface
 */
CSSOM.CSSNamespaceRule = function CSSNamespaceRule() {
	CSSOM.CSSRule.call(this);
	this.prefix = "";
	this.namespaceURI = "";
	this.styleSheet = new CSSOM.CSSStyleSheet();
};

CSSOM.CSSNamespaceRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSNamespaceRule.prototype.constructor = CSSOM.CSSNamespaceRule;
CSSOM.CSSNamespaceRule.prototype.type = 10;

Object.defineProperty(CSSOM.CSSNamespaceRule.prototype, "cssText", {
  get: function() {
    return "@namespace" + (this.prefix && " " + this.prefix) + " url(\"" + this.namespaceURI + "\");";
  },
  set: function(cssText) {
    // Reset prefix and namespaceURI
    this.prefix = "";
    this.namespaceURI = "";

    // Remove @namespace and trim
    var text = cssText.trim();
    if (text.indexOf('@namespace') === 0) {
      text = text.slice('@namespace'.length).trim();
    }

    // Remove trailing semicolon if present
    if (text.charAt(text.length - 1) === ';') {
      text = text.slice(0, -1).trim();
    }

    // Regex to match valid namespace syntax:
    // 1. [optional prefix] url("...") or [optional prefix] url('...') or [optional prefix] url() or [optional prefix] url(unquoted)
    // 2. [optional prefix] "..." or [optional prefix] '...'
    // The prefix must be a valid CSS identifier (letters, digits, hyphens, underscores, starting with letter or underscore)
    var re = /^(?:([a-zA-Z_][a-zA-Z0-9_-]*)\s+)?(?:url\(\s*(?:(['"])(.*?)\2\s*|([^)]*?))\s*\)|(['"])(.*?)\5)$/;
    var match = text.match(re);

    if (match) {
      // If prefix is present
      if (match[1]) {
        this.prefix = match[1];
      }
      // If url(...) form with quotes
      if (typeof match[3] !== "undefined") {
        this.namespaceURI = match[3];
      }
      // If url(...) form without quotes
      else if (typeof match[4] !== "undefined") {
        this.namespaceURI = match[4].trim();
      }
      // If quoted string form
      else if (typeof match[6] !== "undefined") {
        this.namespaceURI = match[6];
      }
    } else {
      throw new DOMException("Invalid @namespace rule", "InvalidStateError");
    }
  }
});






/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#css-font-face-rule
 */
CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
	CSSOM.CSSRule.call(this);
	this.__style = new CSSOM.CSSStyleDeclaration();
	this.__style.parentRule = this;
};

CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
CSSOM.CSSFontFaceRule.prototype.type = 5;
//FIXME
//CSSOM.CSSFontFaceRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSFontFaceRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "style", {
	get: function() {
		return this.__style;	
	},
	set: function(value) {
		if (typeof value === "string") {
			this.__style.cssText = value;
		} else {
			this.__style = value;
		}
	}
});

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSFontFaceRule.cpp
Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
  get: function() {
    return "@font-face {" + (this.style.cssText ? " " + this.style.cssText : "") + " }";
  }
});






/**
 * @constructor
 * @see http://www.w3.org/TR/shadow-dom/#host-at-rule
 */
CSSOM.CSSHostRule = function CSSHostRule() {
	CSSOM.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
CSSOM.CSSHostRule.prototype.type = 1001;
//FIXME
//CSSOM.CSSHostRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSHostRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", {
	get: function() {
		var cssTexts = [];
		for (var i=0, length=this.cssRules.length; i < length; i++) {
			cssTexts.push(this.cssRules[i].cssText);
		}
		return "@host {" + (cssTexts.length ? "\n  " + cssTexts.join("\n  ") : "") + "\n}";
	}
});






/**
 * @constructor
 * @see http://www.w3.org/TR/shadow-dom/#host-at-rule
 */
CSSOM.CSSStartingStyleRule = function CSSStartingStyleRule() {
	CSSOM.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM.CSSStartingStyleRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSStartingStyleRule.prototype.constructor = CSSOM.CSSStartingStyleRule;
CSSOM.CSSStartingStyleRule.prototype.type = 1002;
//FIXME
//CSSOM.CSSStartingStyleRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSStartingStyleRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSStartingStyleRule.prototype, "cssText", {
	get: function() {
		var cssTexts = [];
		for (var i=0, length=this.cssRules.length; i < length; i++) {
			cssTexts.push(this.cssRules[i].cssText);
		}
		return "@starting-style {" + (cssTexts.length ? "\n  " + cssTexts.join("\n  ") : "") + "\n}";
	}
});






/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-stylesheet-interface
 */
CSSOM.StyleSheet = function StyleSheet() {
	this.__parentStyleSheet = null;
};

Object.defineProperties(CSSOM.StyleSheet.prototype, {
	parentStyleSheet: {
		get: function() {
			return this.__parentStyleSheet;
		}
	}
});





/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
 */
CSSOM.CSSStyleSheet = function CSSStyleSheet() {
	CSSOM.StyleSheet.call(this);
	this.cssRules = [];
};


CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;


/**
 * Used to insert a new rule into the style sheet. The new rule now becomes part of the cascade.
 *
 *   sheet = new Sheet("body {margin: 0}")
 *   sheet.toString()
 *   -> "body{margin:0;}"
 *   sheet.insertRule("img {border: none}", 0)
 *   -> 0
 *   sheet.toString()
 *   -> "img{border:none;}body{margin:0;}"
 *
 * @param {string} rule
 * @param {number} [index=0]
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
 * @return {number} The index within the style sheet's rule collection of the newly inserted rule.
 */
CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
	if (rule === undefined && index === undefined) {
		errorUtils.throwMissingArguments(this, 'insertRule', this.constructor.name);
	}
	if (index === void 0) {
		index = 0;
	}
	index = Number(index);
	if (index < 0) {
		index = 4294967296 + index;
	}
	if (index > this.cssRules.length) {
		errorUtils.throwIndexError(this, 'insertRule', this.constructor.name, index, this.cssRules.length);
	}
	
	var ruleToParse = String(rule);
	var parsedSheet = CSSOM.parse(ruleToParse);
	if (parsedSheet.cssRules.length !== 1) {
		errorUtils.throwParseError(this, 'insertRule', this.constructor.name, ruleToParse, 'SyntaxError');
	}
	var cssRule = parsedSheet.cssRules[0];
	
	// Helper function to find the last index of a specific rule constructor
	function findLastIndexOfConstructor(rules, constructorName) {
		for (var i = rules.length - 1; i >= 0; i--) {
			if (rules[i].constructor.name === constructorName) {
				return i;
			}
		}
		return -1;
	}
	
	// Helper function to find the first index of a rule that's NOT of specified constructors
	function findFirstNonConstructorIndex(rules, constructorNames) {
		for (var i = 0; i < rules.length; i++) {
			if (constructorNames.indexOf(rules[i].constructor.name) === -1) {
				return i;
			}
		}
		return rules.length;
	}
	
	// Validate rule ordering based on CSS specification
	if (cssRule.constructor.name === 'CSSImportRule') {
		// @import rules cannot be inserted after @layer rules that already exist
		// They can only be inserted at the beginning or after other @import rules
		var firstLayerIndex = findFirstNonConstructorIndex(this.cssRules, ['CSSImportRule']);
		if (firstLayerIndex < this.cssRules.length && this.cssRules[firstLayerIndex].constructor.name === 'CSSLayerStatementRule' && index > firstLayerIndex) {
			errorUtils.throwError(this, 'DOMException',
				"Failed to execute 'insertRule' on '" + this.constructor.name + "': Failed to insert the rule.",
				'HierarchyRequestError');
		}
		
		// Also cannot insert after @namespace or other rules
		var firstNonImportIndex = findFirstNonConstructorIndex(this.cssRules, ['CSSImportRule']);
		if (index > firstNonImportIndex && firstNonImportIndex < this.cssRules.length && 
		    this.cssRules[firstNonImportIndex].constructor.name !== 'CSSLayerStatementRule') {
			errorUtils.throwError(this, 'DOMException',
				"Failed to execute 'insertRule' on '" + this.constructor.name + "': Failed to insert the rule.",
				'HierarchyRequestError');
		}
	} else if (cssRule.constructor.name === 'CSSNamespaceRule') {
		// @namespace rules can come after @layer and @import, but before any other rules
		// They cannot come before @import rules
		var firstImportIndex = -1;
		for (var i = 0; i < this.cssRules.length; i++) {
			if (this.cssRules[i].constructor.name === 'CSSImportRule') {
				firstImportIndex = i;
				break;
			}
		}
		var firstNonImportNamespaceIndex = findFirstNonConstructorIndex(this.cssRules, [
			'CSSLayerStatementRule', 
			'CSSImportRule', 
			'CSSNamespaceRule'
		]);
		
		// Cannot insert before @import rules
		if (firstImportIndex !== -1 && index <= firstImportIndex) {
			errorUtils.throwError(this, 'DOMException',
				"Failed to execute 'insertRule' on '" + this.constructor.name + "': Failed to insert the rule.",
				'HierarchyRequestError');
		}
		
		// Cannot insert after other types of rules
		if (index > firstNonImportNamespaceIndex) {
			errorUtils.throwError(this, 'DOMException',
				"Failed to execute 'insertRule' on '" + this.constructor.name + "': Failed to insert the rule.",
				'HierarchyRequestError');
		}
	} else if (cssRule.constructor.name === 'CSSLayerStatementRule') {
		// @layer statement rules can be inserted anywhere before @import and @namespace
		// No additional restrictions beyond what's already handled
	} else {
		// Any other rule cannot be inserted before @import and @namespace
		var firstNonSpecialRuleIndex = findFirstNonConstructorIndex(this.cssRules, [
			'CSSLayerStatementRule',
			'CSSImportRule',
			'CSSNamespaceRule'
		]);
		
		if (index < firstNonSpecialRuleIndex) {
			errorUtils.throwError(this, 'DOMException',
				"Failed to execute 'insertRule' on '" + this.constructor.name + "': Failed to insert the rule.",
				'HierarchyRequestError');
		}
	}
	
	cssRule.__parentStyleSheet = this;
	this.cssRules.splice(index, 0, cssRule);
	return index;
};


/**
 * Used to delete a rule from the style sheet.
 *
 *   sheet = new Sheet("img{border:none} body{margin:0}")
 *   sheet.toString()
 *   -> "img{border:none;}body{margin:0;}"
 *   sheet.deleteRule(0)
 *   sheet.toString()
 *   -> "body{margin:0;}"
 *
 * @param {number} index within the style sheet's rule list of the rule to remove.
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
 */
CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
	if (index === undefined) {
		errorUtils.throwMissingArguments(this, 'deleteRule', this.constructor.name);
	}
	index = Number(index);
	if (index < 0) {
		index = 4294967296 + index;
	}
	if (index >= this.cssRules.length) {
		errorUtils.throwIndexError(this, 'deleteRule', this.constructor.name, index, this.cssRules.length);
	}
	if (this.cssRules[index] && this.cssRules[index].constructor.name == "CSSNamespaceRule") {
		var shouldContinue = this.cssRules.every(function (rule) {
			return ['CSSImportRule','CSSLayerStatementRule','CSSNamespaceRule'].indexOf(rule.constructor.name) !== -1
		});
		if (!shouldContinue) {
			errorUtils.throwError(this, 'DOMException', "Failed to execute 'deleteRule' on '" + this.constructor.name + "': Failed to delete rule.", "InvalidStateError");
		}
	}
	this.cssRules.splice(index, 1);
};


/**
 * NON-STANDARD
 * @return {string} serialize stylesheet
 */
CSSOM.CSSStyleSheet.prototype.toString = function() {
	var result = "";
	var rules = this.cssRules;
	for (var i=0; i<rules.length; i++) {
		result += rules[i].cssText + "\n";
	}
	return result;
};






/**
 * @constructor
 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframesRule
 */
CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
	CSSOM.CSSRule.call(this);
	this.name = '';
	this.cssRules = [];
	
	// Set up initial indexed access
	this._setupIndexedAccess();
	
	// Override cssRules methods after initial setup, store references as non-enumerable properties
	var self = this;
	var originalPush = this.cssRules.push;
	var originalSplice = this.cssRules.splice;
	
	// Create non-enumerable method overrides
	Object.defineProperty(this.cssRules, 'push', {
		value: function() {
			var result = originalPush.apply(this, arguments);
			self._setupIndexedAccess();
			return result;
		},
		writable: true,
		enumerable: false,
		configurable: true
	});
	
	Object.defineProperty(this.cssRules, 'splice', {
		value: function() {
			var result = originalSplice.apply(this, arguments);
			self._setupIndexedAccess();
			return result;
		},
		writable: true,
		enumerable: false,
		configurable: true
	});
};

CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
CSSOM.CSSKeyframesRule.prototype.type = 7;

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframesRule.cpp
Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
      cssTexts.push(this.cssRules[i].cssText);
    }
    var cssWideKeywords = ['initial', 'inherit', 'revert', 'revert-layer', 'unset', 'none'];
    var processedName = cssWideKeywords.includes(this.name) ? '"' + this.name + '"' : this.name;
    return "@" + (this._vendorPrefix || '') + "keyframes " + processedName + (processedName && " ") + "{" + (cssTexts.length ? "\n  " + cssTexts.join("\n  ") : "") + "\n}";
  }
});

/**
 * Appends a new keyframe rule to the list of keyframes.
 * 
 * @param {string} rule - The keyframe rule string to append (e.g., "50% { opacity: 0.5; }")
 * @see https://www.w3.org/TR/css-animations-1/#dom-csskeyframesrule-appendrule
 */
CSSOM.CSSKeyframesRule.prototype.appendRule = function appendRule(rule) {
	if (arguments.length === 0) {
		errorUtils.throwMissingArguments(this, 'appendRule', 'CSSKeyframesRule');
	}
	
	var parsedRule;
	try {
		// Parse the rule string as a keyframe rule
		var tempStyleSheet = CSSOM.parse("@keyframes temp { " + rule + " }");
		if (tempStyleSheet.cssRules.length > 0 && tempStyleSheet.cssRules[0].cssRules.length > 0) {
			parsedRule = tempStyleSheet.cssRules[0].cssRules[0];
		} else {
			throw new Error("Failed to parse keyframe rule");
		}
	} catch (e) {
		errorUtils.throwParseError(this, 'appendRule', 'CSSKeyframesRule', rule);
	}
	
	parsedRule.__parentRule = this;
	this.cssRules.push(parsedRule);
};

/**
 * Deletes a keyframe rule that matches the specified key.
 * 
 * @param {string} select - The keyframe selector to delete (e.g., "50%", "from", "to")
 * @see https://www.w3.org/TR/css-animations-1/#dom-csskeyframesrule-deleterule
 */
CSSOM.CSSKeyframesRule.prototype.deleteRule = function deleteRule(select) {
	if (arguments.length === 0) {
		errorUtils.throwMissingArguments(this, 'deleteRule', 'CSSKeyframesRule');
	}
	
	var normalizedSelect = this._normalizeKeyText(select);
	
	for (var i = 0; i < this.cssRules.length; i++) {
		var rule = this.cssRules[i];
		if (this._normalizeKeyText(rule.keyText) === normalizedSelect) {
			rule.__parentRule = null;
			this.cssRules.splice(i, 1);
			return;
		}
	}
};

/**
 * Finds and returns the keyframe rule that matches the specified key.
 * When multiple rules have the same key, returns the last one.
 * 
 * @param {string} select - The keyframe selector to find (e.g., "50%", "from", "to")
 * @return {CSSKeyframeRule|null} The matching keyframe rule, or null if not found
 * @see https://www.w3.org/TR/css-animations-1/#dom-csskeyframesrule-findrule
 */
CSSOM.CSSKeyframesRule.prototype.findRule = function findRule(select) {
	if (arguments.length === 0) {
		errorUtils.throwMissingArguments(this, 'findRule', 'CSSKeyframesRule');
	}
	
	var normalizedSelect = this._normalizeKeyText(select);
	
	// Iterate backwards to find the last matching rule
	for (var i = this.cssRules.length - 1; i >= 0; i--) {
		var rule = this.cssRules[i];
		if (this._normalizeKeyText(rule.keyText) === normalizedSelect) {
			return rule;
		}
	}
	
	return null;
};

/**
 * Normalizes keyframe selector text for comparison.
 * Handles "from" -> "0%" and "to" -> "100%" conversions and trims whitespace.
 * 
 * @private
 * @param {string} keyText - The keyframe selector text to normalize
 * @return {string} The normalized keyframe selector text
 */
CSSOM.CSSKeyframesRule.prototype._normalizeKeyText = function _normalizeKeyText(keyText) {
	if (!keyText) return '';
	
	var normalized = keyText.toString().trim().toLowerCase();
	
	// Convert keywords to percentages for comparison
	if (normalized === 'from') {
		return '0%';
	} else if (normalized === 'to') {
		return '100%';
	}
	
	return normalized;
};

/**
 * Makes CSSKeyframesRule iterable over its cssRules.
 * Allows for...of loops and other iterable methods.
 */
if (typeof Symbol !== 'undefined' && Symbol.iterator) {
	CSSOM.CSSKeyframesRule.prototype[Symbol.iterator] = function() {
		var index = 0;
		var cssRules = this.cssRules;
		
		return {
			next: function() {
				if (index < cssRules.length) {
					return { value: cssRules[index++], done: false };
				} else {
					return { done: true };
				}
			}
		};
	};
}

/**
 * Adds indexed getters for direct access to cssRules by index.
 * This enables rule[0], rule[1], etc. access patterns.
 * Works in environments where Proxy is not available (like jsdom).
 */
CSSOM.CSSKeyframesRule.prototype._setupIndexedAccess = function() {
	// Remove any existing indexed properties
	for (var i = 0; i < 1000; i++) { // reasonable upper limit
		if (this.hasOwnProperty(i)) {
			delete this[i];
		} else {
			break;
		}
	}
	
	// Add indexed getters for current cssRules
	for (var i = 0; i < this.cssRules.length; i++) {
		(function(index) {
			Object.defineProperty(this, index, {
				get: function() {
					return this.cssRules[index];
				},
				enumerable: false,
				configurable: true
			});
		}.call(this, i));
	}
	
	// Update length property
	Object.defineProperty(this, 'length', {
		get: function() {
			return this.cssRules.length;
		},
		enumerable: false,
		configurable: true
	});
};









/**
 * @constructor
 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframeRule
 */
CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
	CSSOM.CSSRule.call(this);
	this.keyText = '';
	this.__style = new CSSOM.CSSStyleDeclaration();
	this.__style.parentRule = this;
};

CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
CSSOM.CSSKeyframeRule.prototype.type = 8;
//FIXME
//CSSOM.CSSKeyframeRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSKeyframeRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "style", {
	get: function() {
		return this.__style;	
	},
	set: function(value) {
		if (typeof value === "string") {
			this.__style.cssText = value;
		} else {
			this.__style = value;
		}
	}
});

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframeRule.cpp
Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
  get: function() {
    return this.keyText + " {" + (this.style.cssText ? " " + this.style.cssText : "") + " }";
  }
});






/**
 * @constructor
 * @see https://developer.mozilla.org/en/CSS/@-moz-document
 */
CSSOM.MatcherList = function MatcherList(){
    this.length = 0;
};

CSSOM.MatcherList.prototype = {

    constructor: CSSOM.MatcherList,

    /**
     * @return {string}
     */
    get matcherText() {
        return Array.prototype.join.call(this, ", ");
    },

    /**
     * @param {string} value
     */
    set matcherText(value) {
        // just a temporary solution, actually it may be wrong by just split the value with ',', because a url can include ','.
        var values = value.split(",");
        var length = this.length = values.length;
        for (var i=0; i<length; i++) {
            this[i] = values[i].trim();
        }
    },

    /**
     * @param {string} matcher
     */
    appendMatcher: function(matcher) {
        if (Array.prototype.indexOf.call(this, matcher) === -1) {
            this[this.length] = matcher;
            this.length++;
        }
    },

    /**
     * @param {string} matcher
     */
    deleteMatcher: function(matcher) {
        var index = Array.prototype.indexOf.call(this, matcher);
        if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
        }
    }

};






/**
 * @constructor
 * @see https://developer.mozilla.org/en/CSS/@-moz-document
 */
CSSOM.CSSDocumentRule = function CSSDocumentRule() {
    CSSOM.CSSRule.call(this);
    this.matcher = new CSSOM.MatcherList();
    this.cssRules = [];
};

CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
CSSOM.CSSDocumentRule.prototype.type = 10;
//FIXME
//CSSOM.CSSDocumentRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSDocumentRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
    }
    return "@-moz-document " + this.matcher.matcherText + " {" + (cssTexts.length ? "\n  " + cssTexts.join("\n  ") : "") + "\n}";
  }
});






/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
 *
 * TODO: add if needed
 */
CSSOM.CSSValue = function CSSValue() {
};

CSSOM.CSSValue.prototype = {
	constructor: CSSOM.CSSValue,

	// @see: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
	set cssText(text) {
		var name = this._getConstructorName();

		throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
	},

	get cssText() {
		var name = this._getConstructorName();

		throw new Error('getter "cssText" of "' + name + '" is not implemented!');
	},

	_getConstructorName: function() {
		var s = this.constructor.toString(),
				c = s.match(/function\s([^\(]+)/),
				name = c[1];

		return name;
	}
};






/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/ms537634(v=vs.85).aspx
 *
 */
CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
	this._token = token;
	this._idx = idx;
};

CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;

/**
 * parse css expression() value
 *
 * @return {Object}
 *         - error:
 *         or
 *         - idx:
 *         - expression:
 *
 * Example:
 *
 * .selector {
 *		zoom: expression(documentElement.clientWidth > 1000 ? '1000px' : 'auto');
 * }
 */
CSSOM.CSSValueExpression.prototype.parse = function() {
	var token = this._token,
			idx = this._idx;

	var character = '',
			expression = '',
			error = '',
			info,
			paren = [];


	for (; ; ++idx) {
		character = token.charAt(idx);

		// end of token
		if (character === '') {
			error = 'css expression error: unfinished expression!';
			break;
		}

		switch(character) {
			case '(':
				paren.push(character);
				expression += character;
				break;

			case ')':
				paren.pop(character);
				expression += character;
				break;

			case '/':
				if ((info = this._parseJSComment(token, idx))) { // comment?
					if (info.error) {
						error = 'css expression error: unfinished comment in expression!';
					} else {
						idx = info.idx;
						// ignore the comment
					}
				} else if ((info = this._parseJSRexExp(token, idx))) { // regexp
					idx = info.idx;
					expression += info.text;
				} else { // other
					expression += character;
				}
				break;

			case "'":
			case '"':
				info = this._parseJSString(token, idx, character);
				if (info) { // string
					idx = info.idx;
					expression += info.text;
				} else {
					expression += character;
				}
				break;

			default:
				expression += character;
				break;
		}

		if (error) {
			break;
		}

		// end of expression
		if (paren.length === 0) {
			break;
		}
	}

	var ret;
	if (error) {
		ret = {
			error: error
		};
	} else {
		ret = {
			idx: idx,
			expression: expression
		};
	}

	return ret;
};


/**
 *
 * @return {Object|false}
 *          - idx:
 *          - text:
 *          or
 *          - error:
 *          or
 *          false
 *
 */
CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
	var nextChar = token.charAt(idx + 1),
			text;

	if (nextChar === '/' || nextChar === '*') {
		var startIdx = idx,
				endIdx,
				commentEndChar;

		if (nextChar === '/') { // line comment
			commentEndChar = '\n';
		} else if (nextChar === '*') { // block comment
			commentEndChar = '*/';
		}

		endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
		if (endIdx !== -1) {
			endIdx = endIdx + commentEndChar.length - 1;
			text = token.substring(idx, endIdx + 1);
			return {
				idx: endIdx,
				text: text
			};
		} else {
			var error = 'css expression error: unfinished comment in expression!';
			return {
				error: error
			};
		}
	} else {
		return false;
	}
};


/**
 *
 * @return {Object|false}
 *					- idx:
 *					- text:
 *					or 
 *					false
 *
 */
CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
	var endIdx = this._findMatchedIdx(token, idx, sep),
			text;

	if (endIdx === -1) {
		return false;
	} else {
		text = token.substring(idx, endIdx + sep.length);

		return {
			idx: endIdx,
			text: text
		};
	}
};


/**
 * parse regexp in css expression
 *
 * @return {Object|false}
 *				- idx:
 *				- regExp:
 *				or 
 *				false
 */

/*

all legal RegExp
 
/a/
(/a/)
[/a/]
[12, /a/]

!/a/

+/a/
-/a/
* /a/
/ /a/
%/a/

===/a/
!==/a/
==/a/
!=/a/
>/a/
>=/a/
</a/
<=/a/

&/a/
|/a/
^/a/
~/a/
<</a/
>>/a/
>>>/a/

&&/a/
||/a/
?/a/
=/a/
,/a/

		delete /a/
				in /a/
instanceof /a/
				new /a/
		typeof /a/
			void /a/

*/
CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
	var before = token.substring(0, idx).replace(/\s+$/, ""),
			legalRegx = [
				/^$/,
				/\($/,
				/\[$/,
				/\!$/,
				/\+$/,
				/\-$/,
				/\*$/,
				/\/\s+/,
				/\%$/,
				/\=$/,
				/\>$/,
				/<$/,
				/\&$/,
				/\|$/,
				/\^$/,
				/\~$/,
				/\?$/,
				/\,$/,
				/delete$/,
				/in$/,
				/instanceof$/,
				/new$/,
				/typeof$/,
				/void$/
			];

	var isLegal = legalRegx.some(function(reg) {
		return reg.test(before);
	});

	if (!isLegal) {
		return false;
	} else {
		var sep = '/';

		// same logic as string
		return this._parseJSString(token, idx, sep);
	}
};


/**
 *
 * find next sep(same line) index in `token`
 *
 * @return {Number}
 *
 */
CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
	var startIdx = idx,
			endIdx;

	var NOT_FOUND = -1;

	while(true) {
		endIdx = token.indexOf(sep, startIdx + 1);

		if (endIdx === -1) { // not found
			endIdx = NOT_FOUND;
			break;
		} else {
			var text = token.substring(idx + 1, endIdx),
					matched = text.match(/\\+$/);
			if (!matched || matched[0] % 2 === 0) { // not escaped
				break;
			} else {
				startIdx = endIdx;
			}
		}
	}

	// boundary must be in the same line(js sting or regexp)
	var nextNewLineIdx = token.indexOf('\n', idx + 1);
	if (nextNewLineIdx < endIdx) {
		endIdx = NOT_FOUND;
	}


	return endIdx;
};







/**
 * @constructor
 * @see https://drafts.csswg.org/css-cascade-5/#csslayerblockrule
 */
CSSOM.CSSLayerBlockRule = function CSSLayerBlockRule() {
  CSSOM.CSSGroupingRule.call(this);
  this.name = "";
  this.cssRules = [];
};

CSSOM.CSSLayerBlockRule.prototype = new CSSOM.CSSGroupingRule();
CSSOM.CSSLayerBlockRule.prototype.constructor = CSSOM.CSSLayerBlockRule;
CSSOM.CSSLayerBlockRule.prototype.type = 18;

Object.defineProperties(CSSOM.CSSLayerBlockRule.prototype, {
  cssText: {
    get: function () {
      var cssTexts = [];
      for (var i = 0, length = this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
      }
      return "@layer " + this.name + (this.name && " ") + "{" + (cssTexts.length ? "\n  " + cssTexts.join("\n  ") : "") + "\n}";
    },
    configurable: true,
    enumerable: true,
  },
});




/**
 * @constructor
 * @see https://drafts.csswg.org/css-cascade-5/#csslayerstatementrule
 */
CSSOM.CSSLayerStatementRule = function CSSLayerStatementRule() {
  CSSOM.CSSRule.call(this);
  this.nameList = [];
};

CSSOM.CSSLayerStatementRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSLayerStatementRule.prototype.constructor = CSSOM.CSSLayerStatementRule;
CSSOM.CSSLayerStatementRule.prototype.type = 0;

Object.defineProperties(CSSOM.CSSLayerStatementRule.prototype, {
  cssText: {
    get: function () {
      return "@layer " + this.nameList.join(", ") + ";";
    },
    configurable: true,
    enumerable: true,
  },
});





/**
 * Parses a CSS string and returns a CSSOM.CSSStyleSheet object representing the parsed stylesheet.
 *
 * @param {string} token - The CSS string to parse.
 * @param {object} [opts] - Optional parsing options.
 * @param {object} [opts.globalObject] - An optional global object to attach to the stylesheet. Useful on jsdom webplatform tests.
 * @param {function|boolean} [errorHandler] - Optional error handler function or `true` to use `console.error`.
 * @returns {CSSOM.CSSStyleSheet} The parsed CSSStyleSheet object.
 */
CSSOM.parse = function parse(token, opts, errorHandler) {
	errorHandler = errorHandler === true ? (console && console.error) : errorHandler;

	var i = 0;

	/**
		"before-selector" or
		"selector" or
		"atRule" or
		"atBlock" or
		"conditionBlock" or
		"before-name" or
		"name" or
		"before-value" or
		"value"
	*/
	var state = "before-selector";

	var index;
	var buffer = "";
	var valueParenthesisDepth = 0;

	var SIGNIFICANT_WHITESPACE = {
		"name": true,
		"before-name": true,
		"selector": true,
		"value": true,
		"value-parenthesis": true,
		"atRule": true,
		"importRule-begin": true,
		"importRule": true,
		"namespaceRule-begin": true,
		"namespaceRule": true,
		"atBlock": true,
		"containerBlock": true,
		"conditionBlock": true,
		"counterStyleBlock": true,
		'documentRule-begin': true,
		"layerBlock": true
	};

	var styleSheet = new CSSOM.CSSStyleSheet();

	if (opts && opts.globalObject) {
		styleSheet.__globalObject = opts.globalObject;
	}

	// @type CSSStyleSheet|CSSMediaRule|CSSContainerRule|CSSSupportsRule|CSSFontFaceRule|CSSKeyframesRule|CSSDocumentRule
	var currentScope = styleSheet;

	// @type CSSMediaRule|CSSContainerRule|CSSSupportsRule|CSSKeyframesRule|CSSDocumentRule
	var parentRule;

	var ancestorRules = [];
	var prevScope;

	var name, priority="", styleRule, mediaRule, containerRule, counterStyleRule, supportsRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule, startingStyleRule, layerBlockRule, layerStatementRule, nestedSelectorRule, namespaceRule;

	// Track defined namespace prefixes for validation
	var definedNamespacePrefixes = {};

	var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g; // Match @keyframes and vendor-prefixed @keyframes
	// Regex above is not ES5 compliant
	// var atRulesStatemenRegExp = /(?<!{.*)[;}]\s*/; // Match a statement by verifying it finds a semicolon or closing brace not followed by another semicolon or closing brace
	var beforeRulePortionRegExp = /{(?!.*{)|}(?!.*})|;(?!.*;)|\*\/(?!.*\*\/)/g; // Match the closest allowed character (a opening or closing brace, a semicolon or a comment ending) before the rule
	var beforeRuleValidationRegExp = /^[\s{};]*(\*\/\s*)?$/; // Match that the portion before the rule is empty or contains only whitespace, semicolons, opening/closing braces, and optionally a comment ending (*/) followed by whitespace
	var forwardRuleValidationRegExp = /(?:\(|\s|\/\*)/; // Match that the rule is followed by any whitespace, a opening comment or a condition opening parenthesis
	var forwardImportRuleValidationRegExp = /(?:\s|\/\*|'|")/; // Match that the rule is followed by any whitespace, an opening comment, a single quote or double quote
	var forwardRuleClosingBraceRegExp = /{[^{}]*}|}/; // Finds the next closing brace of a rule block
	var forwardRuleSemicolonAndOpeningBraceRegExp = /^.*?({|;)/; // Finds the next semicolon or opening brace after the at-rule	
	var layerRuleNameRegExp = /^(-?[_a-zA-Z]+(\.[_a-zA-Z]+)*[_a-zA-Z0-9-]*)$/; // Validates a single @layer name

	/**
	 * Searches for the first occurrence of a CSS at-rule statement terminator (`;` or `}`) 
	 * that is not inside a brace block within the given string. Mimics the behavior of a 
	 * regular expression match for such terminators, including any trailing whitespace.
	 * @param {string} str - The string to search for at-rule statement terminators.
	 * @returns {object | null} {0: string, index: number} or null if no match is found.
	 */
	function atRulesStatemenRegExpES5Alternative(ruleSlice) {
		for (var i = 0; i < ruleSlice.length; i++) {
			var char = ruleSlice[i];

			if (char === ';' || char === '}') {
				// Simulate negative lookbehind: check if there is a { before this position
				var sliceBefore = ruleSlice.substring(0, i);
				var openBraceIndex = sliceBefore.indexOf('{');

				if (openBraceIndex === -1) {
					// No { found before, so we treat it as a valid match
					var match = char;
					var j = i + 1;

					while (j < ruleSlice.length && /\s/.test(ruleSlice[j])) {
						match += ruleSlice[j];
						j++;
					}

					var matchObj = [match];
					matchObj.index = i;
					matchObj.input = ruleSlice;
					return matchObj;
				}
			}
		}

		return null;
	}

	/**
	 * Finds the first balanced block (including nested braces) in the string, starting from fromIndex.
	 * Returns an object similar to RegExp.prototype.match output.
	 * @param {string} str - The string to search.
	 * @param {number} [fromIndex=0] - The index to start searching from.
	 * @returns {object|null} - { 0: matchedString, index: startIndex, input: str } or null if not found.
	 */
	function matchBalancedBlock(str, fromIndex) {
		fromIndex = fromIndex || 0;
		var openIndex = str.indexOf('{', fromIndex);
		if (openIndex === -1) return null;
		var depth = 0;
		for (var i = openIndex; i < str.length; i++) {
			if (str[i] === '{') {
				depth++;
			} else if (str[i] === '}') {
				depth--;
				if (depth === 0) {
					var matchedString = str.slice(openIndex, i + 1);
					return {
						0: matchedString,
						index: openIndex,
						input: str
					};
				}
			}
		}
		return null;
	}

	/**
	 * Advances the index `i` to skip over a balanced block of curly braces in the given string.
	 * This is typically used to ignore the contents of a CSS rule block.
	 *
	 * @param {number} i - The current index in the string to start searching from.
	 * @param {string} str - The string containing the CSS code.
	 * @param {number} fromIndex - The index in the string where the balanced block search should begin.
	 * @returns {number} The updated index after skipping the balanced block.
	 */
	function ignoreBalancedBlock(i, str, fromIndex) {
		var ruleClosingMatch = matchBalancedBlock(str, fromIndex);
		if (ruleClosingMatch) {
			var ignoreRange = ruleClosingMatch.index + ruleClosingMatch[0].length;
			i+= ignoreRange;
			if (token.charAt(i) === '}') {
				i -= 1;
			}
		} else {
			i += str.length;
		}
		return i;	
	}

	var parseError = function(message) {
		var lines = token.substring(0, i).split('\n');
		var lineCount = lines.length;
		var charCount = lines.pop().length + 1;
		var error = new Error(message + ' (line ' + lineCount + ', char ' + charCount + ')');
		error.line = lineCount;
		/* jshint sub : true */
		error['char'] = charCount;
		error.styleSheet = styleSheet;
		// Print the error but continue parsing the sheet
		try {
			throw error;
		} catch(e) {
			errorHandler && errorHandler(e);
		}
	};

	var validateAtRule = function(atRuleKey, validCallback, cannotBeNested) {
		var isValid = false;
		var sourceRuleRegExp = atRuleKey === "@import" ? forwardImportRuleValidationRegExp : forwardRuleValidationRegExp;
		var ruleRegExp = new RegExp(atRuleKey + sourceRuleRegExp.source, sourceRuleRegExp.flags);
		var ruleSlice = token.slice(i);
		// Not all rules can be nested, if the rule cannot be nested and is in the root scope, do not perform the check
		var shouldPerformCheck = cannotBeNested && currentScope !== styleSheet ? false : true;
		// First, check if there is no invalid characters just after the at-rule
		if (shouldPerformCheck && ruleSlice.search(ruleRegExp) === 0) {
			// Find the closest allowed character before the at-rule (a opening or closing brace, a semicolon or a comment ending)
			var beforeSlice = token.slice(0, i);
			var regexBefore = new RegExp(beforeRulePortionRegExp.source, beforeRulePortionRegExp.flags);
			var matches = beforeSlice.match(regexBefore);
			var lastI = matches ? beforeSlice.lastIndexOf(matches[matches.length - 1]) : 0;
			var toCheckSlice = token.slice(lastI, i);
			// Check if we don't have any invalid in the portion before the `at-rule` and the closest allowed character
			var checkedSlice = toCheckSlice.search(beforeRuleValidationRegExp);
			if (checkedSlice === 0) {
				isValid = true;
			}
		}
		if (!isValid) {
			// If it's invalid the browser will simply ignore the entire invalid block
			// Use regex to find the closing brace of the invalid rule
			
			// Regex used above is not ES5 compliant. Using alternative.
			// var ruleStatementMatch = ruleSlice.match(atRulesStatemenRegExp); //
			var ruleStatementMatch = atRulesStatemenRegExpES5Alternative(ruleSlice);

			// If it's a statement inside a nested rule, ignore only the statement
			if (ruleStatementMatch && currentScope !== styleSheet) {
				var ignoreEnd = ruleStatementMatch[0].indexOf(";");
				i += ruleStatementMatch.index + ignoreEnd;
				return;
			}

			// Check if there's a semicolon before the invalid at-rule and the first opening brace
			if (atRuleKey === "@layer") {
				var ruleSemicolonAndOpeningBraceMatch = ruleSlice.match(forwardRuleSemicolonAndOpeningBraceRegExp);
				if (ruleSemicolonAndOpeningBraceMatch && ruleSemicolonAndOpeningBraceMatch[1] === ";" ) {
					// Ignore the rule block until the semicolon
					i += ruleSemicolonAndOpeningBraceMatch.index + ruleSemicolonAndOpeningBraceMatch[0].length;
					state = "before-selector";
					return;
				}
			}

			// Ignore the entire rule block (if it's a statement it should ignore the statement plus the next block)
			i = ignoreBalancedBlock(i, ruleSlice);
			state = "before-selector";
		} else {
			validCallback.call(this);
		}
	}

	/**
	 * Validates a basic CSS selector, allowing for deeply nested balanced parentheses in pseudo-classes.
	 * This function replaces the previous basicSelectorRegExp.
	 * 
	 * This function matches:
	 * - Type selectors (e.g., `div`, `span`)
	 * - Universal selector (`*`)
	 * - Namespace selectors (e.g., `*|div`, `custom|div`, `|div`)
	 * - ID selectors (e.g., `#header`, `#a\ b`, `#åèiöú`)
	 * - Class selectors (e.g., `.container`, `.a\ b`, `.åèiöú`)
	 * - Attribute selectors (e.g., `[type="text"]`)
	 * - Pseudo-classes and pseudo-elements (e.g., `:hover`, `::before`, `:nth-child(2)`)
	 * - Pseudo-classes with nested parentheses, including cases where parentheses are nested inside arguments,
	 *   such as `:has(.sel:nth-child(3n))`
	 * - The parent selector (`&`)
	 * - Combinators (`>`, `+`, `~`) with optional whitespace
	 * - Whitespace (descendant combinator)
	 *
	 * Unicode and escape sequences are allowed in identifiers.
	 *
	 * @param {string} selector
	 * @returns {boolean}
	 */
	function basicSelectorValidator(selector) {
		var length = selector.length;
		var i = 0;
		var stack = [];
		var inAttr = false;
		var inSingleQuote = false;
		var inDoubleQuote = false;

		while (i < length) {
			var char = selector[i];

			if (inSingleQuote) {
				if (char === "'" && selector[i - 1] !== "\\") {
					inSingleQuote = false;
				}
			} else if (inDoubleQuote) {
				if (char === '"' && selector[i - 1] !== "\\") {
					inDoubleQuote = false;
				}
			} else if (inAttr) {
				if (char === "]") {
					inAttr = false;
				} else if (char === "'") {
					inSingleQuote = true;
				} else if (char === '"') {
					inDoubleQuote = true;
				}
			} else {
				if (char === "[") {
					inAttr = true;
				} else if (char === "'") {
					inSingleQuote = true;
				} else if (char === '"') {
					inDoubleQuote = true;
				} else if (char === "(") {
					stack.push("(");
				} else if (char === ")") {
					if (!stack.length || stack.pop() !== "(") {
						return false;
					}
				}
			}
			i++;
		}

		// If any stack or quote/attr context remains, it's invalid
		if (stack.length || inAttr || inSingleQuote || inDoubleQuote) {
			return false;
		}

		// Fallback to a loose regexp for the overall selector structure (without deep paren matching)
		// This is similar to the original, but without nested paren limitations
		// Modified to support namespace selectors: *|element, prefix|element, |element
		// Fixed attribute selector regex to properly handle |=, ~=, ^=, $=, *= operators
		var looseSelectorRegExp = /^((?:(?:\*|[a-zA-Z_\u00A0-\uFFFF\\][a-zA-Z0-9_\u00A0-\uFFFF\-\\]*|)\|)?[a-zA-Z_\u00A0-\uFFFF\\][a-zA-Z0-9_\u00A0-\uFFFF\-\\]*|(?:(?:\*|[a-zA-Z_\u00A0-\uFFFF\\][a-zA-Z0-9_\u00A0-\uFFFF\-\\]*|)\|)?\*|#[a-zA-Z0-9_\u00A0-\uFFFF\-\\]+|\.[a-zA-Z0-9_\u00A0-\uFFFF\-\\]+|\[(?:[^\[\]'"]|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")*(?:\s+[iI])?\]|::?[a-zA-Z0-9_\u00A0-\uFFFF\-\\]+(?:\((.*)\))?|&|\s*[>+~]\s*|\s+)+$/;
		return looseSelectorRegExp.test(selector);
	}

	/**
	 * Regular expression to match CSS pseudo-classes with arguments.
	 *
	 * Matches patterns like `:pseudo-class(argument)`, capturing the pseudo-class name and its argument.
	 *
	 * Capture groups:
	 *   1. The pseudo-class name (letters and hyphens).
	 *   2. The argument inside the parentheses (can contain nested parentheses, quoted strings, and other characters.).
	 *
	 * Global flag (`g`) is used to find all matches in the input string.
	 *
	 * Example matches:
	 *   - :nth-child(2n+1)
	 *   - :has(.sel:nth-child(3n))
	 *   - :not(".foo, .bar")
	 * @type {RegExp}
	 */
	var globalPseudoClassRegExp = /:([a-zA-Z-]+)\(((?:[^()"]+|"[^"]*"|'[^']*'|\((?:[^()"]+|"[^"]*"|'[^']*')*\))*?)\)/g;

	/**
	 * Parses a CSS selector string and splits it into parts, handling nested parentheses.
	 *
	 * This function is useful for splitting selectors that may contain nested function-like
	 * syntax (e.g., :not(.foo, .bar)), ensuring that commas inside parentheses do not split
	 * the selector.
	 *
	 * @param {string} selector - The CSS selector string to parse.
	 * @returns {string[]} An array of selector parts, split by top-level commas, with whitespace trimmed.
	 */
	function parseAndSplitNestedSelectors(selector) {
		var depth = 0;
		var buffer = "";
		var parts = [];
		var inSingleQuote = false;
		var inDoubleQuote = false;
		var i, char;

		for (i = 0; i < selector.length; i++) {
			char = selector.charAt(i);

			if (char === "'" && !inDoubleQuote) {
				inSingleQuote = !inSingleQuote;
				buffer += char;
			} else if (char === '"' && !inSingleQuote) {
				inDoubleQuote = !inDoubleQuote;
				buffer += char;
			} else if (!inSingleQuote && !inDoubleQuote) {
				if (char === '(') {
					depth++;
					buffer += char;
				} else if (char === ')') {
					depth--;
					buffer += char;
					if (depth === 0) {
						parts.push(buffer.replace(/^\s+|\s+$/g, ""));
						buffer = "";
					}
				} else if (char === ',' && depth === 0) {
					if (buffer.replace(/^\s+|\s+$/g, "")) {
						parts.push(buffer.replace(/^\s+|\s+$/g, ""));
					}
					buffer = "";
				} else {
					buffer += char;
				}
			} else {
				buffer += char;
			}
		}

		if (buffer.replace(/^\s+|\s+$/g, "")) {
			parts.push(buffer.replace(/^\s+|\s+$/g, ""));
		}

		return parts;
	}

	/**
	 * Validates a CSS selector string, including handling of nested selectors within certain pseudo-classes.
	 *
	 * This function checks if the provided selector is valid according to the rules defined by
	 * `basicSelectorValidator`. For pseudo-classes that accept selector lists (such as :not, :is, :has, :where),
	 * it recursively validates each nested selector using the same validation logic.
	 *
	 * @param {string} selector - The CSS selector string to validate.
	 * @returns {boolean} Returns `true` if the selector is valid, otherwise `false`.
	 */

	// Cache to store validated selectors
	var validatedSelectorsCache = new Map();

	// Only pseudo-classes that accept selector lists should recurse
	var selectorListPseudoClasses = {
		'not': true,
		'is': true,
		'has': true,
		'where': true
	};

	function validateSelector(selector) {
		if (validatedSelectorsCache.has(selector)) {
			return validatedSelectorsCache.get(selector);
		}

		// Use a non-global regex to find all pseudo-classes with arguments
		var pseudoClassMatches = [];
		var pseudoClassRegExp = new RegExp(globalPseudoClassRegExp.source, globalPseudoClassRegExp.flags);
		var match;
		while ((match = pseudoClassRegExp.exec(selector)) !== null) {
			pseudoClassMatches.push(match);
		}

		for (var j = 0; j < pseudoClassMatches.length; j++) {
			var pseudoClass = pseudoClassMatches[j][1];
			if (selectorListPseudoClasses.hasOwnProperty(pseudoClass)) {
				var nestedSelectors = parseAndSplitNestedSelectors(pseudoClassMatches[j][2]);
				for (var i = 0; i < nestedSelectors.length; i++) {
					var nestedSelector = nestedSelectors[i];
					if (!validatedSelectorsCache.has(nestedSelector)) {
						var nestedSelectorValidation = validateSelector(nestedSelector);
						validatedSelectorsCache.set(nestedSelector, nestedSelectorValidation);
						if (!nestedSelectorValidation) {
							validatedSelectorsCache.set(selector, false);
							return false;
						}
					} else if (!validatedSelectorsCache.get(nestedSelector)) {
						validatedSelectorsCache.set(selector, false);
						return false;
					}
				}
			}
		}

		var basicSelectorValidation = basicSelectorValidator(selector);
		validatedSelectorsCache.set(selector, basicSelectorValidation);

		return basicSelectorValidation;
	}

	/**
	 * Validates namespace selectors by checking if the namespace prefix is defined.
	 * 
	 * @param {string} selector - The CSS selector to validate
	 * @returns {boolean} Returns true if the namespace is valid, false otherwise
	 */
	function validateNamespaceSelector(selector) {
		// Check if selector contains a namespace prefix
		// We need to ignore pipes inside attribute selectors
		var pipeIndex = -1;
		var inAttr = false;
		var inSingleQuote = false;
		var inDoubleQuote = false;
		
		for (var i = 0; i < selector.length; i++) {
			var char = selector[i];
			
			if (inSingleQuote) {
				if (char === "'" && selector[i - 1] !== "\\") {
					inSingleQuote = false;
				}
			} else if (inDoubleQuote) {
				if (char === '"' && selector[i - 1] !== "\\") {
					inDoubleQuote = false;
				}
			} else if (inAttr) {
				if (char === "]") {
					inAttr = false;
				} else if (char === "'") {
					inSingleQuote = true;
				} else if (char === '"') {
					inDoubleQuote = true;
				}
			} else {
				if (char === "[") {
					inAttr = true;
				} else if (char === "|" && !inAttr) {
					// This is a namespace separator, not an attribute operator
					pipeIndex = i;
					break;
				}
			}
		}
		
		if (pipeIndex === -1) {
			return true; // No namespace, always valid
		}
		
		var namespacePrefix = selector.substring(0, pipeIndex);
		
		// Universal namespace (*|) and default namespace (|) are always valid
		if (namespacePrefix === '*' || namespacePrefix === '') {
			return true;
		}
		
		// Check if the custom namespace prefix is defined
		return definedNamespacePrefixes.hasOwnProperty(namespacePrefix);
	}

	/**
	 * Checks if a given CSS selector text is valid by splitting it by commas
	 * and validating each individual selector using the `validateSelector` function.
	 *
	 * @param {string} selectorText - The CSS selector text to validate. Can contain multiple selectors separated by commas.
	 * @returns {boolean} Returns true if all selectors are valid, otherwise false.
	 */
	function isValidSelectorText(selectorText) {
		// Check for newlines inside single or double quotes using regex
		// This matches any quoted string (single or double) containing a newline
		var quotedNewlineRegExp = /(['"])(?:\\.|[^\\])*?\1/g;
		var match;
		while ((match = quotedNewlineRegExp.exec(selectorText)) !== null) {
			if (/\r|\n/.test(match[0].slice(1, -1))) {
				return false;
			}
		}
		// Split selectorText by commas and validate each part
		var selectors = parseAndSplitNestedSelectors(selectorText);
		for (var i = 0; i < selectors.length; i++) {
			var processedSelectors = selectors[i].trim();
			if (!validateSelector(processedSelectors) || !validateNamespaceSelector(processedSelectors)) {
				return false;
			}
		}
		return true;
	}

	var endingIndex = token.length - 1;

	for (var character; (character = token.charAt(i)); i++) {
		if (i === endingIndex) {
			switch (state) {
				case "importRule":
				case "namespaceRule":
				case "layerBlock":
					token += ";"
			}
		}
		
		switch (character) {

		case " ":
		case "\t":
		case "\r":
		case "\n":
		case "\f":
			if (SIGNIFICANT_WHITESPACE[state]) {
				buffer += character;
			}
			break;

		// String
		case '"':
			index = i + 1;
			do {
				index = token.indexOf('"', index) + 1;
				if (!index) {
					parseError('Unmatched "');
				}
			} while (token[index - 2] === '\\');
			if (index === 0) {
				break;
			}
			buffer += token.slice(i, index);
			i = index - 1;
			switch (state) {
				case 'before-value':
					state = 'value';
					break;
				case 'importRule-begin':
					state = 'importRule';
					if (i === endingIndex) {
						token += ';'
					}
					break;
				case 'namespaceRule-begin':
					state = 'namespaceRule';
					if (i === endingIndex) {
						token += ';'
					}
					break;
			}
			break;

		case "'":
			index = i + 1;
			do {
				index = token.indexOf("'", index) + 1;
				if (!index) {
					parseError("Unmatched '");
				}
			} while (token[index - 2] === '\\');
			if (index === 0) {
				break;
			}
			buffer += token.slice(i, index);
			i = index - 1;
			switch (state) {
				case 'before-value':
					state = 'value';
					break;
				case 'importRule-begin':
					state = 'importRule';
					break;
				case 'namespaceRule-begin':
					state = 'namespaceRule';
					break;
			}
			break;

		// Comment
		case "/":
			if (token.charAt(i + 1) === "*") {
				i += 2;
				index = token.indexOf("*/", i);
				if (index === -1) {
					parseError("Missing */");
				} else {
					i = index + 1;
				}
			} else {
				buffer += character;
			}
			if (state === "importRule-begin") {
				buffer += " ";
				state = "importRule";
			}
			if (state === "namespaceRule-begin") {
				buffer += " ";
				state = "namespaceRule";
			}
			break;

		// At-rule
		case "@":
			if (token.indexOf("@-moz-document", i) === i) {
				validateAtRule("@-moz-document", function(){
					state = "documentRule-begin";
					documentRule = new CSSOM.CSSDocumentRule();
					documentRule.__starts = i;
					i += "-moz-document".length;
				});
				buffer = "";
				break;
			} else if (token.indexOf("@media", i) === i) {
				validateAtRule("@media", function(){
					state = "atBlock";
					mediaRule = new CSSOM.CSSMediaRule();
					mediaRule.__starts = i;
					i += "media".length;
				});
				buffer = "";
				break;
			} else if (token.indexOf("@container", i) === i) {
				validateAtRule("@container", function(){
					state = "containerBlock";
					containerRule = new CSSOM.CSSContainerRule();
					containerRule.__starts = i;
					i += "container".length;
				});
				buffer = "";
				break;
			} else if (token.indexOf("@counter-style", i) === i) {
				validateAtRule("@counter-style", function(){
					state = "counterStyleBlock"
					counterStyleRule = new CSSOM.CSSCounterStyleRule();
					counterStyleRule.__starts = i;
					i += "counter-style".length;
				}, true);
				buffer = "";
				break;
			} else if (token.indexOf("@layer", i) === i) {
				validateAtRule("@layer", function(){
					state = "layerBlock"
					layerBlockRule = new CSSOM.CSSLayerBlockRule();
					layerBlockRule.__starts = i;
					i += "layer".length;
				});
				buffer = "";
				break;
			} else if (token.indexOf("@supports", i) === i) {
				validateAtRule("@supports", function(){
					state = "conditionBlock";
					supportsRule = new CSSOM.CSSSupportsRule();
					supportsRule.__starts = i;
					i += "supports".length;
				});
				buffer = "";
				break;
			} else if (token.indexOf("@host", i) === i) {
				validateAtRule("@host", function(){
					state = "hostRule-begin";
					i += "host".length;
					hostRule = new CSSOM.CSSHostRule();
					hostRule.__starts = i;
				});
				buffer = "";
				break;
			} else if (token.indexOf("@starting-style", i) === i) {
				validateAtRule("@starting-style", function(){
					state = "startingStyleRule-begin";
					i += "starting-style".length;
					startingStyleRule = new CSSOM.CSSStartingStyleRule();
					startingStyleRule.__starts = i;
				});
				buffer = "";
				break;
			} else if (token.indexOf("@import", i) === i) {
				buffer = "";
				validateAtRule("@import", function(){
					state = "importRule-begin";
					i += "import".length;
					buffer += "@import";
				}, true);
				break;
			} else if (token.indexOf("@namespace", i) === i) {
				buffer = "";
				validateAtRule("@namespace", function(){
					state = "namespaceRule-begin";
					i += "namespace".length;
					buffer += "@namespace";
				}, true);
				break;
			} else if (token.indexOf("@font-face", i) === i) {
				buffer = "";
				validateAtRule("@font-face", function(){
					state = "fontFaceRule-begin";
					i += "font-face".length;
					fontFaceRule = new CSSOM.CSSFontFaceRule();
					fontFaceRule.__starts = i;
				}, true);
				break;
			} else {
				atKeyframesRegExp.lastIndex = i;
				var matchKeyframes = atKeyframesRegExp.exec(token);
				if (matchKeyframes && matchKeyframes.index === i) {
					state = "keyframesRule-begin";
					keyframesRule = new CSSOM.CSSKeyframesRule();
					keyframesRule.__starts = i;
					keyframesRule._vendorPrefix = matchKeyframes[1]; // Will come out as undefined if no prefix was found
					i += matchKeyframes[0].length - 1;
					buffer = "";
					break;
				} else if (state === "selector") {
					state = "atRule";
				}
			}
			buffer += character;
			break;

		case "{":
			if (currentScope === styleSheet) {
				nestedSelectorRule = null;
			}
			if (state === 'before-selector') {
				parseError("Unexpected {");
				i = ignoreBalancedBlock(i, token.slice(i));
				break;
			}
			if (state === "selector" || state === "atRule") {
				if (!nestedSelectorRule && buffer.indexOf(";") !== -1) {
					var ruleClosingMatch = token.slice(i).match(forwardRuleClosingBraceRegExp);
					if (ruleClosingMatch) {
						styleRule = null;
						buffer = "";
						state = "before-selector";
						i += ruleClosingMatch.index + ruleClosingMatch[0].length;
						break;
					}
				}

				if (parentRule) {
					styleRule.__parentRule = parentRule;
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = styleRule;
				styleRule.selectorText = buffer.trim().replace(/(['"])(?:\\.|[^\\])*?\1|(\r\n|\r|\n)/g, function(match, _, newline) {
					if (newline) return " ";
					return match;
				});
				styleRule.style.__starts = i;
				styleRule.__parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-name";
			} else if (state === "atBlock") {
				mediaRule.media.mediaText = buffer.trim();

				if (parentRule) {
					mediaRule.__parentRule = parentRule;
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = mediaRule;
				mediaRule.__parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "containerBlock") {
				containerRule.containerText = buffer.trim();

				if (parentRule) {
					containerRule.__parentRule = parentRule;
					ancestorRules.push(parentRule);
				}
				currentScope = parentRule = containerRule;
				containerRule.__parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "counterStyleBlock") {
				// TODO: Validate counter-style name. At least that it cannot be empty nor multiple
				counterStyleRule.name = buffer.trim().replace(/\n/g, "");
				currentScope = parentRule = counterStyleRule;
				counterStyleRule.__parentStyleSheet = styleSheet;
				buffer = "";
			} else if (state === "conditionBlock") {
				supportsRule.conditionText = buffer.trim();

				if (parentRule) {
					supportsRule.__parentRule = parentRule;
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = supportsRule;
				supportsRule.__parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "layerBlock") {
				layerBlockRule.name = buffer.trim();

				var isValidName = layerBlockRule.name.length === 0 || layerBlockRule.name.match(layerRuleNameRegExp) !== null;

				if (isValidName) {
					if (parentRule) {
						layerBlockRule.__parentRule = parentRule;
						ancestorRules.push(parentRule);
					}
	
					currentScope = parentRule = layerBlockRule;
					layerBlockRule.__parentStyleSheet = styleSheet;
				}
				buffer = "";
				state = "before-selector";
			} else if (state === "hostRule-begin") {
				if (parentRule) {
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = hostRule;
				hostRule.__parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "startingStyleRule-begin") {
				if (parentRule) {
					startingStyleRule.__parentRule = parentRule;
					ancestorRules.push(parentRule);
				}

				currentScope = parentRule = startingStyleRule;
				startingStyleRule.__parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";

			} else if (state === "fontFaceRule-begin") {
				if (parentRule) {
					fontFaceRule.__parentRule = parentRule;
				}
				fontFaceRule.__parentStyleSheet = styleSheet;
				styleRule = fontFaceRule;
				buffer = "";
				state = "before-name";
			} else if (state === "keyframesRule-begin") {
				keyframesRule.name = buffer.trim();
				if (parentRule) {
					ancestorRules.push(parentRule);
					keyframesRule.__parentRule = parentRule;
				}
				keyframesRule.__parentStyleSheet = styleSheet;
				currentScope = parentRule = keyframesRule;
				buffer = "";
				state = "keyframeRule-begin";
			} else if (state === "keyframeRule-begin") {
				styleRule = new CSSOM.CSSKeyframeRule();
				styleRule.keyText = buffer.trim();
				styleRule.__starts = i;
				buffer = "";
				state = "before-name";
			} else if (state === "documentRule-begin") {
				// FIXME: what if this '{' is in the url text of the match function?
				documentRule.matcher.matcherText = buffer.trim();
				if (parentRule) {
					ancestorRules.push(parentRule);
					documentRule.__parentRule = parentRule;
				}
				currentScope = parentRule = documentRule;
				documentRule.__parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "before-name" || state === "name") {
				if (styleRule.constructor.name === "CSSNestedDeclarations") {
					if (styleRule.style.length) {
						parentRule.cssRules.push(styleRule);
						styleRule.__parentRule = parentRule;
						styleRule.__parentStyleSheet = styleSheet;
						ancestorRules.push(parentRule);
					} else {
						// If the styleRule is empty, we can assume that it's a nested selector
						ancestorRules.push(parentRule);
					}
				} else {
					currentScope = parentRule = styleRule;
					ancestorRules.push(parentRule);
					styleRule.__parentStyleSheet = styleSheet;
				}
				
				styleRule = new CSSOM.CSSStyleRule();
				var processedSelectorText = buffer.trim().replace(/(['"])(?:\\.|[^\\])*?\1|(\r\n|\r|\n)/g, function(match, _, newline) {
					if (newline) return " ";
					return match;
				});
				// In a nested selector, ensure each selector contains '&' at the beginning, except for selectors that already have '&' somewhere
				if (parentRule.constructor.name !== "CSSStyleRule" && parentRule.parentRule === null) {
					styleRule.selectorText = processedSelectorText;
				} else {
					styleRule.selectorText = parseAndSplitNestedSelectors(processedSelectorText).map(function(sel) {
							return sel.indexOf('&') === -1 ? '& ' + sel : sel;
						}).join(', ');
				}
				styleRule.style.__starts = i - buffer.length;
				styleRule.__parentRule = parentRule;
				nestedSelectorRule = styleRule;

				buffer = "";
				state = "before-name";
			}
			break;

		case ":":
			if (state === "name") {
				// It can be a nested selector, let's check
				var openBraceBeforeMatch = token.slice(i).match(/[{;}]/);
				var hasOpenBraceBefore = openBraceBeforeMatch && openBraceBeforeMatch[0] === '{';
				if (hasOpenBraceBefore) {
					// Is a selector
					buffer += character;
				} else {
					// Is a declaration
					name = buffer.trim();
					buffer = "";
					state = "before-value";
				}
			} else {
				buffer += character;
			}
			break;

		case "(":
			if (state === 'value') {
				// ie css expression mode
				if (buffer.trim() === 'expression') {
					var info = (new CSSOM.CSSValueExpression(token, i)).parse();

					if (info.error) {
						parseError(info.error);
					} else {
						buffer += info.expression;
						i = info.idx;
					}
				} else {
					state = 'value-parenthesis';
					//always ensure this is reset to 1 on transition
					//from value to value-parenthesis
					valueParenthesisDepth = 1;
					buffer += character;
				}
			} else if (state === 'value-parenthesis') {
				valueParenthesisDepth++;
				buffer += character;
			} else {
				buffer += character;
			}
			break;

		case ")":
			if (state === 'value-parenthesis') {
				valueParenthesisDepth--;
				if (valueParenthesisDepth === 0) state = 'value';
			}
			buffer += character;
			break;

		case "!":
			if (state === "value" && token.indexOf("!important", i) === i) {
				priority = "important";
				i += "important".length;
			} else {
				buffer += character;
			}
			break;

		case ";":
			switch (state) {
				case "before-value":
				case "before-name":
					parseError("Unexpected ;");
					buffer = "";
					state = "before-name";
					break;
				case "value":
					styleRule.style.setProperty(name, buffer.trim(), priority, parseError);
					priority = "";
					buffer = "";
					state = "before-name";
					break;
				case "atRule":
					buffer = "";
					state = "before-selector";
					break;
				case "importRule":
					var isValid = styleSheet.cssRules.length === 0 || styleSheet.cssRules.some(function (rule) {
						return ['CSSImportRule', 'CSSLayerStatementRule'].indexOf(rule.constructor.name) !== -1
					});
					if (isValid) {
						importRule = new CSSOM.CSSImportRule();
						importRule.__parentStyleSheet = importRule.styleSheet.__parentStyleSheet = styleSheet;
						importRule.cssText = buffer + character;
						styleSheet.cssRules.push(importRule);
					}
					buffer = "";
					state = "before-selector";
					break;
				case "namespaceRule":
					var isValid = styleSheet.cssRules.length === 0 || styleSheet.cssRules.every(function (rule) {
						return ['CSSImportRule','CSSLayerStatementRule','CSSNamespaceRule'].indexOf(rule.constructor.name) !== -1
					});
					if (isValid) {
						try {
							// Validate namespace syntax before creating the rule
							var testNamespaceRule = new CSSOM.CSSNamespaceRule();
							testNamespaceRule.cssText = buffer + character;
							
							namespaceRule = testNamespaceRule;
							namespaceRule.__parentStyleSheet = namespaceRule.styleSheet.__parentStyleSheet = styleSheet;
							styleSheet.cssRules.push(namespaceRule);
							
							// Track the namespace prefix for validation
							if (namespaceRule.prefix) {
								definedNamespacePrefixes[namespaceRule.prefix] = namespaceRule.namespaceURI;
							}
						} catch(e) {
							parseError(e.message);
						}
					}
					buffer = "";
					state = "before-selector";
					break;
				case "layerBlock":
					var nameListStr = buffer.trim().split(",").map(function (name) {
						return name.trim();
					});
					var isInvalid = parentRule !== undefined || nameListStr.some(function (name) {
						return name.trim().match(layerRuleNameRegExp) === null;
					});

					if (!isInvalid) {
						layerStatementRule = new CSSOM.CSSLayerStatementRule();
						layerStatementRule.__parentStyleSheet = styleSheet;
						layerStatementRule.__starts = layerBlockRule.__starts;
						layerStatementRule.__ends = i;
						layerStatementRule.nameList = nameListStr;
						styleSheet.cssRules.push(layerStatementRule);
					}
					buffer = "";
					state = "before-selector";
					break;
				default:
					buffer += character;
					break;
			}
			break;

		case "}":
			if (state === "counterStyleBlock") {
				// FIXME : Implement cssText get setter that parses the real implementation
				counterStyleRule.cssText = "@counter-style " + counterStyleRule.name + " { " + buffer.trim().replace(/\n/g, " ").replace(/(['"])(?:\\.|[^\\])*?\1|(\s{2,})/g, function(match, quote) {
					return quote ? match : ' ';
				}) + " }";
				buffer = "";
				state = "before-selector";
			}

			switch (state) {
				case "value":
					styleRule.style.setProperty(name, buffer.trim(), priority, parseError);
					priority = "";
					/* falls through */
				case "before-value":
				case "before-name":
				case "name":
					styleRule.__ends = i + 1;
					
					if (parentRule === styleRule) {
						parentRule = ancestorRules.pop()
					}

					if (parentRule) {
						styleRule.__parentRule = parentRule;
					}
					styleRule.__parentStyleSheet = styleSheet;

					if (currentScope === styleRule) {
						currentScope = parentRule || styleSheet;
					}

					if (styleRule.constructor.name === "CSSStyleRule" && !isValidSelectorText(styleRule.selectorText)) {
						if (styleRule === nestedSelectorRule) {
							nestedSelectorRule = null;
						}
						parseError('Invalid CSSStyleRule (selectorText = "' + styleRule.selectorText + '")');
					} else {
						currentScope.cssRules.push(styleRule);
					}
					buffer = "";
					if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
						state = "keyframeRule-begin";
					} else {
						state = "before-selector";
					}

					if (styleRule.constructor.name === "CSSNestedDeclarations") {
						if (currentScope !== styleSheet) {
							nestedSelectorRule = currentScope;
						}
						styleRule = null;
					} else {
						styleRule = null;
						break;
					}
				case "keyframeRule-begin":
				case "before-selector":
				case "selector":
					// End of media/supports/document rule.
					if (!parentRule) {
						parseError("Unexpected }");
						
						var hasPreviousStyleRule = currentScope.cssRules.length && currentScope.cssRules[currentScope.cssRules.length - 1].constructor.name === "CSSStyleRule";
						if (hasPreviousStyleRule) {
							i = ignoreBalancedBlock(i, token.slice(i), 1);
						}
						
						break;
					}


					while (ancestorRules.length > 0) {
						parentRule = ancestorRules.pop();

						if (
							parentRule.constructor.name === "CSSStyleRule"
							|| parentRule.constructor.name === "CSSMediaRule"
							|| parentRule.constructor.name === "CSSSupportsRule"
							|| parentRule.constructor.name === "CSSContainerRule"
							|| parentRule.constructor.name === "CSSLayerBlockRule"
							|| parentRule.constructor.name === "CSSStartingStyleRule"
						) {
							if (nestedSelectorRule) {
								if (nestedSelectorRule.parentRule) {
									prevScope = nestedSelectorRule;
									currentScope = nestedSelectorRule.parentRule;
									if (currentScope.cssRules.findIndex(function (rule) {
										return rule === prevScope
									}) === -1) {
										currentScope.cssRules.push(prevScope);
									}
									nestedSelectorRule = currentScope;
								}
							} else {
								prevScope = currentScope;
								currentScope = parentRule;
								currentScope !== prevScope && currentScope.cssRules.push(prevScope);
								break;
							}
						}
					}
					
					if (currentScope.parentRule == null) {
						currentScope.__ends = i + 1;
						if (currentScope !== styleSheet && styleSheet.cssRules.findIndex(function (rule) {
							return rule === currentScope
						}) === -1) {
							styleSheet.cssRules.push(currentScope);
						}
						currentScope = styleSheet;
						if (nestedSelectorRule === parentRule) {
							// Check if this selector is really starting inside another selector
							var nestedSelectorTokenToCurrentSelectorToken = token.slice(nestedSelectorRule.__starts, i + 1);
							var openingBraceMatch = nestedSelectorTokenToCurrentSelectorToken.match(/{/g);
							var closingBraceMatch = nestedSelectorTokenToCurrentSelectorToken.match(/}/g);
							var openingBraceLen = openingBraceMatch && openingBraceMatch.length;
							var closingBraceLen = closingBraceMatch && closingBraceMatch.length;

							if (openingBraceLen === closingBraceLen) {
								// If the number of opening and closing braces are equal, we can assume that the new selector is starting outside the nestedSelectorRule
								nestedSelectorRule.__ends = i + 1;
								nestedSelectorRule = null;
								parentRule = null;
							}
						} else {
							parentRule = null;

						}
					}

					buffer = "";
					state = "before-selector";
					break;
			}
			break;

		default:
			switch (state) {
				case "before-selector":
					state = "selector";
					if (styleRule && parentRule) {
						// Assuming it's a declaration inside Nested Selector OR a Nested Declaration
						// If Declaration inside Nested Selector let's keep the same styleRule
						if (
							parentRule.constructor.name === "CSSStyleRule"
							|| parentRule.constructor.name === "CSSMediaRule"
							|| parentRule.constructor.name === "CSSSupportsRule"
							|| parentRule.constructor.name === "CSSContainerRule"
							|| parentRule.constructor.name === "CSSLayerBlockRule"
							|| parentRule.constructor.name === "CSSStartingStyleRule"
						) {
							// parentRule.__parentRule = styleRule;
							state = "before-name";
							if (styleRule !== parentRule) {
								styleRule = new CSSOM.CSSNestedDeclarations();
								styleRule.__starts = i;	
							}
						}
						
					} else if (nestedSelectorRule && parentRule && (
						parentRule.constructor.name === "CSSStyleRule"
						|| parentRule.constructor.name === "CSSMediaRule"
						|| parentRule.constructor.name === "CSSSupportsRule"
						|| parentRule.constructor.name === "CSSContainerRule"
						|| parentRule.constructor.name === "CSSLayerBlockRule"
						|| parentRule.constructor.name === "CSSStartingStyleRule"
					)) {
						state = "before-name";
						if (parentRule.cssRules.length) {
							currentScope = nestedSelectorRule = parentRule;
							styleRule = new CSSOM.CSSNestedDeclarations();
							styleRule.__starts = i;	
						} else {
							if (parentRule.constructor.name === "CSSStyleRule") {
								styleRule = parentRule;
							} else {
								styleRule = new CSSOM.CSSStyleRule();
								styleRule.__starts = i;								
							}
						}
					} else {
						styleRule = new CSSOM.CSSStyleRule();
						styleRule.__starts = i;
					}
					break;
				case "before-name":
					state = "name";
					break;
				case "before-value":
					state = "value";
					break;
				case "importRule-begin":
					state = "importRule";
					break;
				case "namespaceRule-begin":
					state = "namespaceRule";
					break;
			}
			buffer += character;
			break;
		}
	}

	return styleSheet;
};






/**
 * Produces a deep copy of stylesheet — the instance variables of stylesheet are copied recursively.
 * @param {CSSStyleSheet|CSSOM.CSSStyleSheet} stylesheet
 * @nosideeffects
 * @return {CSSOM.CSSStyleSheet}
 */
CSSOM.clone = function clone(stylesheet) {

	var cloned = new CSSOM.CSSStyleSheet();

	var rules = stylesheet.cssRules;
	if (!rules) {
		return cloned;
	}

	for (var i = 0, rulesLength = rules.length; i < rulesLength; i++) {
		var rule = rules[i];
		var ruleClone = cloned.cssRules[i] = new rule.constructor();

		var style = rule.style;
		if (style) {
			var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
			for (var j = 0, styleLength = style.length; j < styleLength; j++) {
				var name = styleClone[j] = style[j];
				styleClone[name] = style[name];
				styleClone._importants[name] = style.getPropertyPriority(name);
			}
			styleClone.length = style.length;
		}

		if (rule.hasOwnProperty('keyText')) {
			ruleClone.keyText = rule.keyText;
		}

		if (rule.hasOwnProperty('selectorText')) {
			ruleClone.selectorText = rule.selectorText;
		}

		if (rule.hasOwnProperty('mediaText')) {
			ruleClone.mediaText = rule.mediaText;
		}

		if (rule.hasOwnProperty('supportsText')) {
			ruleClone.supports = rule.supports;
		}

		if (rule.hasOwnProperty('conditionText')) {
			ruleClone.conditionText = rule.conditionText;
		}

		if (rule.hasOwnProperty('layerName')) {
			ruleClone.layerName = rule.layerName;
		}

		if (rule.hasOwnProperty('href')) {
			ruleClone.href = rule.href;
		}

		if (rule.hasOwnProperty('name')) {
			ruleClone.name = rule.name;
		}

		if (rule.hasOwnProperty('nameList')) {
			ruleClone.nameList = rule.nameList;
		}

		if (rule.hasOwnProperty('cssRules')) {
			ruleClone.cssRules = clone(rule).cssRules;
		}
	}

	return cloned;

};


