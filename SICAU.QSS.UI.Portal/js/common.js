/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		11: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"index","1":"login","2":"user","3":"show","4":"org_info","5":"org_create","6":"notices","7":"email_register","8":"create","9":"change_pwd","10":"syslog"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {/**
 * @file common js file
 * @author lyle(lj.jeyden@gmail.com)
 * @version 1.0.1
 */


 var myEchar=__webpack_require__(8);

var gRootDomain = "http://test.qss.ydath.cn"; //@temporary 

/**
 * export api
 *
 * @exports fn
 */
 var fn={

 };
 
/**
 * judge whether the type of obj is htmlElement
 *
 * @param {obj} p1 the element to be judged
 * @exports isDom
 * @return {boolean} 
 */
 fn.isDom=function(obj){
 	if(obj && (typeof HTMLElement==="function" || typeof HTMLElement==="object") && obj instanceof HTMLElement){ 
 		return true; 
 	}else{ 
 		return (obj && obj.nodeType && obj.nodeType===1) ? true : false; 
 	}; 
 }


 /**
 * judge whether the jquery has been included
 *
 * @exports isLoadJquery
 * @return {boolean}
 */
 fn.isLoadJquery=function(){
 	typeof jQuery === 'undefined'?false:true;
 }


/**
 * ajax request,jquery must be included
 *
 * @param {obj} p1 one json object which be set ajax request
 * @exports request
 * @return {void}
 */
 fn.request=function(obj){
 	try{
 		if(obj.data.constructor != Object){
 			throw 'data type error';
 		}
 		if(obj.url.constructor!=String || obj.url===''){
 			throw 'url error';
 		}
 		if(fn.isLoadJquery()){
 			throw 'jquery missing';
 		}
 	}
 	catch(e){
 		console.log(e);
 	}
 	$.ajax({
 		crossDomain: true, //@temporary 
 		type: 'POST',
 		url: gRootDomain + obj.url,
 		data: obj.data,
 		dataType: 'json',
 		error: function(e) {
 			if(obj.error.constructor===Function)
 				obj.error(e);
 		},
 		success: function(data) {
 			if(data.Type==='Danger'){
 				window.location.href=data.Message;
 			}
 			if(data.Type==='Fail'){
 				alert(data.Message);
 			}
 			if(obj.callBack.constructor===Function){
 				if(typeof(obj.args)==='undefined'){
 					obj.callBack(data);
 				}
 				else{
 					obj.callBack(data,obj.args);
 				}
 			}

 		}
 	});
 }


/**
 * format the timestamp 
 *
 * @param {date} timestamp a timestamp
 * @exports formatTime
 * @return {string} the string of timestamp formated
 */
 fn.formatTime=function(timestamp) {
 	return timestamp;
 	// var difftime = 0;
 	// parseInt(data.Global.EndTime.replace(/\D/ig, ''))
 	// var date=new Date(timestamp);
 	// return (difftime = Math.abs(Date.parse(new Date()) - timestamp + 10000)) > 259200000 ? (date.getMonth() + '月' + date.getDate() + '日') : (difftime > 86400000 ? parseInt(difftime / 86400000).toString() + '天前' : (difftime > 3600000 ? parseInt(difftime / 3600000).toString() + '小时前' : (difftime > 60000 ? parseInt(difftime / 60000).toString() + '分钟前' : parseInt(difftime / 1000).toString() + '秒前')));
 }


/**
 * define fullscreen loading animation
 *
 * @param {string} status the type of loading
 * @exports loading
 * @return {Object} void
 */
 fn.loading=function(status){

 	if(status==='loading'){
 		if ($('body').attr('class')!='preload-wrapper') {
 			$('body').attr('class','preload-wrapper');
 		}
 		$('#preloader').css('display','block');
 	}

 	else if(status==='finish'){
 		if ($('body').attr('class')==='preload-wrapper') {
 			$('body').removeAttr('class');
 		}
 		$("#preloader").delay(800).fadeOut(400);
 	}
 	else{
 		console('undefined loading type');
 	}
 }


/**
 * display questinnaire or vote to view result or fill
 *
 * @param {string} status the type of loading
 * @exports view module
 * @return {Object} void
 * @temp
 */
 fn.view=function(type,id,data_t){
 	switch(type){
 		case "wtQues":
 		v_ques(id,data_t);
 		break;
 		case "wtVote":
 		v_vote(id,data_t);
 		break;
 		default:
 		console("undefined view type");
 	}
 }
 

/**
 * display questinnaire and only access to view
 *
 * @param {string} id id of questionnaire
 * @param {dom} data_t the dom which will to be append
 * @return {Object} void
 * @temp
 */
 function v_ques(id,data_t){
 	fn.request({
 		"data":{"Id":id},
 		"url":'/Question/GetQuestion',
 		"callBack":function(data){
 			data_t.empty();
 			var $v=$("<div class=\"h-p\"><div class=\"h-t page-heading\"><h2 style=\"text-align:center\"><\/h2><p class=\"instro\"><\/p><small class=\"info\">发起者：<span class=\"text\"><\/span>发布时间：<span class=\"text\"><\/span>结束时间：<span class=\"text\"><\/span><\/small><\/div><div class=\"h-b page-body\"><\/div><div class=\"h-f page-footer\"><\/div><\/div>");

 			//questionniare header infomation
 			$v.find('.h-p').attr({'data-id':data.Global.Id,'data-type':'ques'});
 			var $h_i=v.find('.text');
 			$h_i[0].innerHTML=data.Global.Publisher;
 			$h_i[1].innerHTML=fn.formatTime(data.Global.BeginTime);
 			$h_i[2].innerHTML=fn.formatTime(data.Global.EndTime);
 			$v.find('h2').html(data.Global.Title);

 			//item information
 			var $item=null;
 			var $option=null;
 			for(var i=0;i<data.Global.Num;++i){
 				$item=$("<div class=\"i-w panel\" data-type=\"\"><h4><span class=\"i-n\"><\/span><\/h4><div class=\"i-b\"><\/div><\/div>");
 				$item.attr({'data-id':data.Subjects[i].Id,'data-type':data.Subjects[i].Type});
 				$item.find('.i-n').html('【'+(i+1).toString()+'】');
 				$item.find('h4').append(data.Subjects[i].Content);
 				if (data.Subjects[i].Type==='Subjective') {
 					$option=$("<textarea class=\"form-control\" rows=\"3\"><\/textarea>");
 					$item.find('.i-b').append($option);
 				}
 				else{
 					for (var j = 0; j <data.Subjects[i].Num; ++j) {
 						$option=$("<p class=\"o-w\" data-id=\"\" style=\"margin-left: 10px;\"><input type=\"\" name=\"\"> <span class=\"o-n\"><\/span><\/p>");
 						$option.find('input').attr({'type':data.Subjects[i].Type==='Radio'?'radio':'checkbox','name':data.Subjects[i].Id});
 						$option.attr('data-id',data.Subjects[i].Options[j].Id);
 						$option.find('.o-n').html(String.fromCharCode('A'.charCodeAt(0)+j));
 						$option.append(data.Subjects[i].Options[j].Content);
 						$item.find('.i-b').append($option);
 					}
 				}
 				$v.find('.h-b').append($item);
 			}
 			data_t.append($v);
 		}
 	} );
 }

var gRootDomain = "http://test.qss.ydath.cn"; //@temporary 

function extend(Child, Parent) {　　　　
	var F = function() {};
	F.prototype = Parent.prototype;　　　　
	Child.prototype = new F();　　　　
	Child.prototype.constructor = Child;　　　　
	Child.uber = Parent.prototype;　　
}

function req() {}
req.prototype.ajaxReq = function() {
	$.each(this.handles, function(index, handle) {
		$.ajax({
			crossDomain: true, //temporary 
			type: handle.type,
			url: gRootDomain + handle.url,
			data: handle.data,
			dataType: "json",
			async: true,
			error: function(e) {
				handle.error(e);
			},
			success: function(data) {
				if(data.Type==='Danger'){
					window.location.href=data.Message;
				}
				else if(data.Type==='Fail'){
					alert(data.Message);
				}
				else{
					handle.callBack(data, handle.objId);
				}
			},
		});
	});
};

function source(handles) {
	this.handles = [];
	for(var i = handles.length - 1; i >= 0; --i) {
		this.handles.push({
			'data': handles[i].data,
			'url': handles[i].url,
			'type': handles[i].type,
			'error': handles[i].error,
			'callBack': handles[i].callBack,
			'objId': handles[i].objId
		});
	}
};

extend(source, req);
/*================================================================================================================*/

function isDom(obj){
	if(obj && (typeof HTMLElement==="function" || typeof HTMLElement==="object") && obj instanceof HTMLElement){ 
		return true; 
	}else{ 
		return (obj && obj.nodeType && obj.nodeType===1) ? true : false; 
	}; 
}

function formatBeginTime(beginTimestamp) {
	return beginTimestamp;
	// var difftime = 0;
	// var date=new Date(beginTimestamp);
	// return (difftime = Date.parse(new Date()) - beginTimestamp + 10000) > 259200000 ? (date.getMonth() + '月' + date.getDate() + '日') : (difftime > 86400000 ? parseInt(difftime / 86400000).toString() + '天前' : (difftime > 3600000 ? parseInt(difftime / 3600000).toString() + '小时前' : (difftime > 60000 ? parseInt(difftime / 60000).toString() + '分钟前' : parseInt(difftime / 1000).toString() + '秒前')));
}

function formatEndTime(timestamp) {
	return timestamp;
	// var date=new Date(timestamp);
	// return date.getFullYear()+'年'+date.getMonth()+'月'+date.getDate()+'日 '+date.getHours()+':'+date.getMinutes();
}

fn.p=function(value1,value2){ // to lazy
	return {'name':value1,'value':value2};
}

var optionalIndex = ['A', 'B', 'C', "D", 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
var countItem = 0;
var countOption = 0;
var count=0;
var req=new source([{'data': {}, 'url': '', 'type': 'post', 'callBack': null, 'error': null, 'objId': ''}]);  //global req variable

function searchCondate(content, id) {
	req.handles=[{
		'data': {
			'organize': content
		},
		'url': '/Organize/SearchOrganize',
		'type': 'post',
		'callBack': searchFill,
		'error': function(e) {},
		'objId': id
	}];
	req.ajaxReq();
}

function searchFill(data, id) {
	$(id).empty();
	for(var i = data.length - 1; i >= 0; i--)
		$(id).append('<li><a>' + data[i].Name + '</a></li>');
	$(id + ' li a').mousedown(function() {
		$('#dropdownMenuSearch').val($(this).html());
	});
}

function addOption(item) {
	var option = $('#optionDemo').clone();
	var o = null,
	t = null,
	r = null;
	if((o = item.find('.option-container .option').length) <= 10 || item.find('.panel-heading').length===0) {
		option.removeAttr('id');
		option.attr('data-id', (item.attr('data-id')) + countOption.toString());
		if(item.find('.panel-heading').length!=0)
			option.find('.optional-num').html(optionalIndex[o]);
		(o = option.find('.collapse')).attr('id', o.attr('id') + countOption.toString());
		(t = option.find('.option-edit')).attr('href', '#' + o.attr('id'));
		countOption++;
		t.click(function() {
			if((r = option.find('textarea')).val() != '')
				option.find('.optional-content-dis').html(r.val());
		});
		option.find('.option-del').click(function() {
			option.remove();
			if(item.find('.panel-heading').length!=0)
				item.find('.optional-num').each(function(index) {
					$(this).html(optionalIndex[index++]);
				});
		});
		option.find('.option-add').click(function() {
			addOption(item);
		});
		item.find('.option-container').append(option);
	} else {
		alert('添加选项数达上限');
	}
}

function addItem(itemType, QVId) {
	if(itemType === "radio" || itemType === "checkbox" || itemType === "subjective") {
		var item = $(itemType === "subjective" ? '#subjectiveDemo' : '#selectiveDemo').clone();
		var dataId = QVId + (Date.parse(new Date()) + parseInt(Math.random() * 100000)).toString();
		var o = null,
		t = null,
		r = null;
		item.removeAttr('id');
		item.attr('item-type', itemType);
		item.attr('data-id', (dataId));
		item.find('.item-num').html($('#QVPageBody').find('.panel').length + 1);
		item.find('.item-type').html(itemType === "subjective" ? "【主观题】" : function() {
			addOption(item);
			return itemType === "radio" ? "【单选题】" : "【多选题】"
		});
		(o = item.find('.panel-heading .collapse')).attr('id', o.attr('id') + countItem.toString());
		(t = item.find('.item-title .item-edit')).attr('href', '#' + o.attr('id'));
		(r = o.find('textarea')).attr('id', r.attr('id') + countItem.toString());
		countItem++;
		t.click(function() {
			if(r.val() != '')
				item.find('.item-title-dis').html(r.val());
		});
		item.find('.item-del').click(function() {
			item.remove();
			$('#QVPageBody .item-num').each(function(index) {
				$(this).html(++index);
			});
		});
		$('#QVPageBody').append(item);
	} else {
		console.log("undefined item type");
	}
}



/*===========================================================================================
=======================================page Class========================================*/
var page=function(htmlDOM){
	this.page=$('<div class="page"><div class="page-header"><h2 class="page-title"></h2><p class="instro"></p><small class="info"><span class="time"></span><span class="time"></span><span class="author"></span></small></div><div class="page-body"></div><div class="page-footer"><small class="footnote"></small></div></div>"');
	this.body=this.page.find('.page-body');
	this.title=this.page.find('.page-title');
	this.instro=this.page.find('.page-header .instro');
	this.footnote=this.page.find('.page-footer .footnote');
	this.footer=this.page.find('.page-footer');
	this.info=this.page.find('.page-header .info');
	htmlDOM.empty();
	htmlDOM.append(this.page);
}
page.prototype.setOptions=function(options){
	if(typeof(options.title)!='undefined')
		this.title.html(options.title)
	if(typeof(options.instro)!='undefined')
		this.instro.html(options.instro);
	if(typeof(options.footnote)!='undefined')
		this.footnote.html(options.footnote);
	if(typeof(options.footerButton)!='undefined'){
		if(options.footerButton===false){
			if(this.footer.find('.bottom-button').length!=0)
				this.footer.find('.bottom-button').remove()
		}
		else{
			if (this.footer.find('.bottom-button').length===0)
				this.footer.prepend('<fieldset class="form-group bottom-button"></fieldset>');
			this.footer.find('.bottom-button').empty();
			for(var i=options.footerButton.length()-1;i>=0;i--){
				this.footer.prepend('<a class="btn '+options.footerButton[i].btn+'" id="voteNextStep">'+options.footerButton[i].content+'</a>');
			}
		}
	}
	if(typeof(options.time)!='undefined'){
		this.info.append('<span class="time">'+options.time+'</span>')
	}
	if(typeof(options.author)!='undefined'){
		this.info.append('<span class="author">'+options.author+'</span>')
	}
}
/*=======================================page Class========================================
===========================================================================================*/


/*===========================================================================================
=======================================editor Class========================================*/
function editor1(obj){
	if(typeof(obj.target)!='undefined'){
		this.editor=obj.target;
	}
	else{
		obj.dom.wrap('<div class="wrap"></div>');
		this.editor=obj.dom.parent();
	}
	var _target=this.editor;
	typeof(obj.dis)!='undefined'?(this.dis=obj.dis):(this.dis=obj.dom);
	var _dis=this.dis;

	obj.dom.attr({
		"href":"#editor"+count.toString(),
		"data-toggle":"collapse",
		"aria-expanded":"false",
		"style":"cursor:pointer"
	});
	_target.append($('<div class="collapse" id="editor'+count.toString()+'"><textarea class="form-control editor"></textarea></div>'));
	obj.dom.click(function(){
		if(editor1.prototype.getContent(_target)!='')
			_dis.html(editor1.prototype.getContent(_target));
	})
	count++;
}
/*****************************
*options: {
	"width":num
	"height":num
	"editable":true or false
}
*****************************/
editor1.prototype.setOptions=function(options){
	if(typeof(options.width)!='undefined')
		this.editor.find('textarea').css('width',options.width);
	if (typeof(options.height)!='undefined')
		this.editor.find('textarea').css('height',options.height);
	if (typeof(options.editable)!='undefined')
		options.editable?this.editor.find('textarea').removeAttr('readonly style'):this.editor.find('textarea').attr({"readonly":"readonly","style":"border:none;box-shadow:none;background:none"})
}
editor1.prototype.getContent=function(ed){
	if(typeof(ed)==='undefined')
		return this.editor.find('textarea').val();
	else
		return ed.find('textarea').val();
}
editor1.prototype.bindContent=function(ed){
	if(typeof(ed)==='undefined')
		return this.editor.find('textarea').val();
	else
		return ed.find('textarea').val();
}
var editor={
	'editor1':function(obj){
		return new editor1(obj);
	},
	'editor2':function(obj){
		alert("此编辑样式暂未开放");
		// htmlDOM.append('<textarea id="'+count+'" class="form-control card card-block" rows="2"></textarea>');
		// tinymce.init({selector: '#'+count.toString()});
		// ++count;
		return null;
	}
}
editor.init=function(args,type){
	return typeof(type)==='undefined'?editor['editor1'](args):editor[type](args);
}
/*=======================================editor Class========================================
===========================================================================================*/


/*===========================================================================================
=======================================dis Class========================================*/
function dis1(obj){
	try{
		if(typeof(obj.proportion)==='undefined')
			throw 'data is not set';
		obj.dom.empty();
		this.dis=$('<div class="progress dis"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:'+obj.proportion+'"><span>'+obj.proportion+'</span></div></div>');
		obj.dom.append(this.dis);
	}
	catch(e){
		console.log(e);
	}
}
var dis={
	'dis1':function(obj){
		return new dis1(obj);
	}
}

dis.init=function(args,type){
	return typeof(type)==='undefined'?dis['dis1'](args):dis[type](args);
}

/*=======================================dis Class========================================
===========================================================================================*/


/*===========================================================================================
=======================================option Class========================================*/
function option(htmlDOM,options){
	this.container=htmlDOM;
	this.option=$('<div class="option"><span class="option-content"></span></div>');
	var _this=this;
	this.container.append(this.option);
	if (typeof(options)!='undefined') {
		this.config=options;
		option.prototype.setOptions(options,_this)
	}
	//this.container.empty();
	
}
option.prototype.setOptions=function(options,_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(typeof(options.type)!='undefined'){
		__this.setType(options.type,_this);
	}
	if(typeof(options.editable)!='undefined'){
		__this.setEditable(options.editable,_this);
	}
	if(typeof(options.edit)!='undefined'){
		__this.setEdit(options.edit,_this);
	}
	if(typeof(options.numable)!='undefined'){
		__this.setNumable(options.numable,_this);
	}
	if(typeof(options.content)!='undefined'){
		__this.option.find('.option-content').html(options.content)
	}
}

option.prototype.setType=function(type,_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(typeof(type.type)!='undefined'){
		__this.option.attr('class',type.type);
		if(__this.option.find('input').length===0){
			__this.option.prepend('<input type="'+type.type+'"/>')
		}
	}
	if(typeof(type.value)!='undefined' && __this.option.find('input').length!=0){
		__this.option.find('input').attr("value",type.value)
	}
	if(typeof(type.name)!='undefined' && __this.option.find('input').length!=0){
		__this.option.find('input').attr("name",type.name)
	}
}
option.prototype.delType=function(){
	if(this.option.find('input').length!=0)
		this.option.find('input').remove()
}
option.prototype.setEditable=function(editable,_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(editable){
		if(__this.option.find('.edit').length===0)
			__this.option.append('<span class="edit"></span>')
	}
	else{
		if(__this.option.find('.edit').length!=0)
			__this.option.find('.edit').remove()
	}
}
option.prototype.setNum=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	__this.container.find('.option-num').each(function(index){
		$(this).html(optionalIndex[index]);
	})
}
option.prototype.setNumable=function(numable,_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(numable){
		if(__this.option.find('span.option-num').length===0){
			__this.option.find('.option-content').before('<span class="option-num"></span>');
			__this.setNum();
		}
	}
	else{
		if(__this.option.find('span.option-num').length!=0)
			__this.option.find('span.option-num').remove()
	}
}
option.prototype.setEdit=function(edit,_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(typeof(edit.edit)!='undefined'){
		if(edit.edit){
			if(__this.option.find('.option-edit').length===0){
				__this.edit(_this);
			}
		}
		else{
			if(__this.option.find('.option-edit').length!=0){
				__this.option.find('.option-edit').remove();
			}
		}
	}
	if(typeof(edit.add)!='undefined'){
		if(edit.add){
			if(__this.option.find('.option-add').length===0){
				__this.add(_this);
			}
		}
		else{
			if(__this.option.find('.option-add').length!=0){
				__this.option.find('.option-add').remove();
			}
		}
	}
	if(typeof(edit.del)!='undefined'){
		if(edit.del){
			if(__this.option.find('.option-del').length===0){
				__this.del(_this);
			}
		}
		else{
			if(__this.option.find('.option-del').length!=0){
				__this.option.find('.option-del').remove();
			}
		}
	}
}
option.prototype.getOptions=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	var options={}
    //TO DO
}
option.prototype.add=function(_this,options){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(__this.option.find('.edit').length!=0&&__this.option.find('.edit .option-add').length===0){
		__this.option.find('.edit').append('<span class="glyphicon glyphicon-plus option-add"></span>');
		__this.option.find('.option-add').click(function(){
			new option(__this.container,__this.config);
		})
	}
	
}
option.prototype.edit=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(__this.option.find('.edit').length!=0&&__this.option.find('.edit .option-edit').length===0){
		__this.option.find('.edit').append('<span class="glyphicon glyphicon-pencil option-edit"></span>');
		editor.init({"dom":__this.option.find('.option-edit'),"target":__this.option,"dis":__this.option.find('.option-content')});
	}
}
option.prototype.del=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(__this.option.find('.edit').length!=0&&__this.option.find('.edit .option-del').length===0){
		__this.option.find('.edit').append('<span class="glyphicon glyphicon-trash option-del"></span>');
		__this.option.find('.edit .option-del').click(function(){
			__this.option.remove();
			__this.setNum();
		})
	}
}
/*=======================================option Class========================================
===========================================================================================*/


/*===========================================================================================
=======================================item Class========================================*/
function item(htmlDOM,options){
	this.config=options;
	this.container=htmlDOM;
	this.item=$('<div class="panel item"><div class="panel-heading"><h4 class="panel-title" style="margin-bottom:10px"><span class="title-content"></span></h4></div><div class="panel-body"></div><div class="panel-footer"></div');
	this.title=this.item.find('.panel-title');
	this.header=this.item.find('.panel-heading');
	this.container.append(this.item);
	this.body=this.item.find('.panel-body');
	this.itemTypes={"Radio":"单选题","Multiselect":"多选题","Subjective":"主观题"};
	if(typeof(options)!='undefined'){
		if(typeof(options.type)!='undefined'){
			this.item.attr('item-type',options.type);
			this.title.prepend('<span class="item-type">【'+this.itemTypes[this.item.attr('item-type')]+'】</span')
		}
		if(typeof(options.id)!='undefined'){
			this.item.attr('data-id',options.id)
		}
		if(typeof(options.title)!='undefined'){
			this.title.find('.title-content').html(options.title)
		}
		if(typeof(options.numable)!='undefined'){
			this.title.prepend('<span class="item-num"></span>');
			this.setNum(this);
		}
		if(typeof(options.edit)!='undefined'){
			this.edit(this);
			this.del(this);
		}

	}
}
item.prototype.setNum=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	__this.container.find('.item-num').each(function(index){
		$(this).html(++index);
	})
}
item.prototype.add=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(__this.item.find('.item-add').length===0){
		__this.title.append('<span class="glyphicon glyphicon-plus item-add"></span>');
		__this.item.find('.item-add').click(function(){
			new item(__this.container,__this.config);
			__this.setNum();
		})
	}
	
}
item.prototype.edit=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(__this.item.find('.item-edit').length===0){
		__this.title.append('<span class="glyphicon glyphicon-pencil item-edit"></span>');
		editor.init({"dom":__this.item.find('.item-edit'),"target":__this.header,"dis":__this.item.find('.title-content')});
	}
}
item.prototype.del=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(__this.item.find('.item-del').length===0){
		__this.title.append('<span class="glyphicon glyphicon-trash item-del"></span>');
		__this.item.find('.item-del').click(function(){
			__this.item.remove();
			__this.setNum();
		})
	}
}
/*=======================================item Class========================================
===========================================================================================*/


/*===========================================================================================
=======================================vote Class========================================*/
var vote=function(type,htmlDOM,data){
	this.data=data;
	this.htmlDOM=htmlDOM;

	var _this=this;
	switch(type){
		case 'create':
		vote.prototype.create(_this);
		break;
		case 'fill':
		vote.prototype.fill(_this);
		break;
		case 'dis':
		if($('.page').attr('data-type')==='lgVote'){
			this.type='11';
		}
		_this=this;
		vote.prototype.dis(_this);
		break;
		default:
		;
	}
	
}
vote.prototype.fillRecord=function(htmlDOM,data){
//TO DO
}
vote.prototype.getReleaseID=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	request({
		"data":{"Id":__this.data.Global.BelongTo},
		"url":__this.data.Global.IsBelongOrganize?'/Organize/GetName':'/Account/GetNameById',
		"callBack":function(data){
			__this.myPage.info.append('&nbsp;&nbsp;发起者：');
			__this.myPage.setOptions({"author":data.Message});
		}
	})
}
vote.prototype.dis=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	try{
		if(typeof(__this.data)==='undefined')
			throw 'data is not defined'
		else{
			
			__this.myPage=new page(__this.htmlDOM); 
			__this.myPage.setOptions({"title":__this.data.Global.Title,"instro":__this.data.Global.Introduct,"footnote":"四川农业大学问卷投票系统"});
			__this.myPage.info.append('发布时间：');
			__this.myPage.setOptions({"time":formatBeginTime(__this.data.Global.BeginTime)});
			__this.myPage.info.append('&nbsp;&nbsp;结束时间：');
			__this.myPage.setOptions({"time":formatEndTime(__this.data.Global.EndTime)});
			__this.myPage.info.append('&nbsp;&nbsp;发起者：');
			__this.myPage.setOptions({"author":__this.data.Global.Publisher});
			//__this.getReleaseID();
			for(var i=__this.data.Options.length-1,total=0;i>=0;i--){
				total+=parseInt(__this.data.Options[i].Num);
			}
			i=0;
			var ans=[]
			if(__this.type==='11'){
				$.each(__this.data.Answers,function(key,value){
					ans.push(value.Id);
				});
			}
			for(var j=__this.data.Options.length,t=null;i<j;i++){
				t=new option(__this.myPage.body,{"content":__this.data.Options[i].Content});
				t.option.wrap('<div class="row"></div>');
				t.option.addClass('col-md-4');
				if(ans.indexOf(__this.data.Options[i].Id)!=-1 && __this.type==='11'){
					t.option.append('<span class="glyphicon glyphicon-ok" style="color:#5cb85c"></span>');
				}
				t.option.parent().append('<div class="view col-md-4"></div>');
				dis.init({"dom":t.option.parent().find('.view'),"proportion":(__this.data.Options[i].Num/total*100).toFixed(1).toString()+'%'})
			}
			if($('#myModal').length>0){
				$('.page .page-footer').empty();
				$('.page input').attr('disabled',true);
			}
		}
	}
	catch(e){
		console.log(e);
	}
}
vote.prototype.create=function(_this){	
	var __this=typeof(_this)==='undefined'?this:_this;
	__this.myPage=new page(__this.htmlDOM); 
	__this.myPage.setOptions({"title":"点击填写投票标题","instro":"点击填写投票介绍","footnote":"四川农业大学问卷投票系统"});
	editor.init({"dom":__this.myPage.title});
	editor.init({"dom":__this.myPage.instro}).setOptions({"height":100});
	// {"numable":false,"type":{"name":"radio1","value":"1"},"editable":true,"edit":{"edit":true,"add":true,"del":true}}
	var op=new option(__this.myPage.body,{"editable":true,"edit":{"edit":true,"add":true,"del":true},"content":"点击添加选项内容"});
	__this.myPage.body.prepend('<fieldset class="form-group"> <label>设置最多可选项数：</label><input type="number" class="form-control editor" id="option-nums" style="max-width:200px"><small class="text-muted"></small></fieldset>');
	__this.myPage.footer.prepend('<fieldset class="form-group bottom-button"><a class="btn btn-success">下一步</a> <a class="btn btn-primary" href="/">取消</a></fieldset>');
	__this.myPage.footer.find('.bottom-button a.btn-success').click(function(){
		if(__this.check('create')){
			$('#QVCreatPage').css('display','none');$('#QVSetPage').css('display','block');
		}
		//TO DO
	})
}
vote.prototype.getCreateData=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(__this.check('create')){
		var _data={
			"Global":{
				"Title":__this.myPage.title.closest('.wrap').find('textarea').val(),
				"Introduct":__this.myPage.instro.closest('.wrap').find('textarea').val(),
				"MaxNum":Number(__this.myPage.body.find('#option-nums').val()),
				"Num":__this.myPage.body.find('.option').length
			},
			// "Subjects":{},
			"Option":[]
		};
		__this.myPage.body.find('.option').each(function(){
			_data.Option.push({"Content":$(this).find('textarea.editor').val()})
		})
		return _data;
	}
	else{
		return null;
	}
}
vote.prototype.fill=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	try{
		if(typeof(__this.data)==='undefined')
			throw 'data is not defined'
		else{
			

			__this.myPage=new page(__this.htmlDOM); 
			__this.myPage.setOptions({"title":__this.data.Global.Title,"instro":__this.data.Global.Introduct,"footnote":"四川农业大学问卷投票系统"});
			__this.myPage.info.append('发布时间：');
			__this.myPage.setOptions({"time":formatBeginTime(__this.data.Global.BeginTime)});
			__this.myPage.info.append('&nbsp;&nbsp;结束时间：');
			__this.myPage.setOptions({"time":formatEndTime(__this.data.Global.EndTime)});
			__this.myPage.info.append('&nbsp;&nbsp;发起者：');
			__this.myPage.setOptions({"author":__this.data.Global.Publisher});
			//__this.getReleaseID();
			__this.myPage.body.prepend('<fieldset class="form-group"> <label>最多选择【'+__this.data.Global.MaxNum+'】项</label><small class="text-muted"></small></fieldset>');
			for(var i=0,j=__this.data.Options.length,t=null;i<j;i++){
				t=new option(__this.myPage.body,{"content":__this.data.Options[i].Content,"type":{"type":"checkbox","name":"voteing","value":__this.data.Options[i].Id}});

			}
			__this.myPage.footer.prepend('<fieldset class="form-group bottom-button"><a class="btn btn-success">提交</a> <a class="btn btn-primary" href="/">取消</a></fieldset>');
			
			__this.myPage.footer.find('.bottom-button a.btn-success').click(function(){
				if(__this.myPage.body.find('.checkbox input[name="voteing"]:checked').length>__this.data.Global.MaxNum){
					__this.myPage.footnote.html('最多选择'+__this.data.Global.MaxNum+'项！');
					__this.myPage.footnote.css('color','red');
				}
				else if (__this.myPage.body.find('.checkbox input[name="voteing"]:checked').length===0) {
					__this.myPage.footnote.html('选项不能为空！');
					__this.myPage.footnote.css('color','red');
				}
				else{
					__this.myPage.footnote.removeAttr('style');
					__this.myPage.footnote.html('四川农业大学问卷投票系统');
					var data={
						"Id":__this.data.Global.Id,
						"Option":[]
					};
					__this.myPage.body.find('.checkbox input[name="voteing"]:checked').each(function(){
						data.Option.push({"Id":$(this).val()})
					});
					fn.request({
						"data":{"content":JSON.stringify(data)},
						"url":'/Vote/SaveVote',
						"callBack":function(data){
							if(data.Type==='Success'){
								alert("提交成功")
								window.location.href=data.Message
							}
						}
					})
				}

			})
			
			__this.myPage.body.find('.checkbox input[name="voteing"]').click(function(){
				if(__this.myPage.body.find('.checkbox input[name="voteing"]:checked').length>=__this.data.Global.MaxNum){
					__this.myPage.body.find('.checkbox input[name="voteing"]').attr("disabled",true);
					__this.myPage.body.find('.checkbox input[name="voteing"]:checked').attr("disabled",false);
				}
				else{
					__this.myPage.body.find('.checkbox input[name="voteing"]').attr("disabled",false);
				}

			})
		}
	}
	catch(e){
		console.log(e);
	}
}
vote.prototype.check=function(type,_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(type==='create'){
		var ed=__this.myPage.page.find('.editor');
		if(ed.length<=0)
			return false;
		for (var i = ed.length-1; i >=0; i--) {
			if(ed[i].value===''){
				__this.myPage.footnote.html('请填写所有项！');
				__this.myPage.footnote.css('color','red');
				return false;
			}
		}
		if((Number($('#option-nums').val())|0)!=Number($('#option-nums').val())||Number($('#option-nums').val())<=0||Number($('#option-nums').val())>__this.myPage.body.find('.option').length){
			__this.myPage.footnote.html('请设置合法的可选项数');
			__this.myPage.footnote.css('color','red');
			return false;
		}
		__this.myPage.footnote.html('四川农业大学问卷投票系统');
		__this.myPage.footnote.removeAttr('style');
		return true;
	}
	else{
		console.log('error');
	}
}
/*=======================================vote Class========================================
===========================================================================================*/


/*===========================================================================================
=======================================ques Class========================================*/
var ques=function(type,htmlDOM,data){
	this.data=data;
	this.htmlDOM=htmlDOM;
	var _this=this;
	switch(type){
		case 'create':
		ques.prototype.create(_this);
		break;
		case 'fill':
		ques.prototype.fill(htmlDOM,data);
		break;
		default:
		;
	}
}
ques.prototype.fillRecord=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;

}
ques.prototype.getReleaseID=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;

}
ques.prototype.dis=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;

}
ques.prototype.create=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	__this.myPage=new page(__this.htmlDOM); 
	__this.myPage.setOptions({"title":"点击填写问卷标题","instro":"点击填写问卷简介","footnote":"四川农业大学问卷投票系统"});
	editor.init({"dom":__this.myPage.title});
	editor.init({"dom":__this.myPage.instro}).setOptions({"height":100});
	__this.myPage.footer.prepend('<fieldset class="form-group bottom-button"><a class="btn btn-success">下一步</a> <a class="btn btn-primary" href="/">取消</a></fieldset>');
	__this.myPage.footer.find('.bottom-button a.btn-success').click(function(){
		if(__this.check('create')){
			$('#QVCreatPage').css('display','none');$('#QVSetPage').css('display','block');
		}
		//TO DO
	})
	__this.itemContainer=__this.myPage.body;
	if(__this.data.radio!=undefined){
		__this.data.radio.click(function(){
			__this.radio();
		})
	}
	if(__this.data.checkbox!=undefined){
		__this.data.checkbox.click(function(){
			__this.checkbox();
		})
	}
	if(__this.data.subjective!=undefined){
		__this.data.subjective.click(function(){
			__this.subjective();
		})
	}
}
ques.prototype.fill=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;

}
ques.prototype.getCreateData=function(){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(__this.check('create')){
		var _data={
			"Global":{
				"Title":__this.myPage.title.closest('.wrap').find('textarea').val(),
				"Introduct":__this.myPage.instro.closest('.wrap').find('textarea').val(),
				"Num":__this.myPage.body.find('.item').length
			},
			"Subjects":[]
		};
		__this.myPage.body.find('.item').each(function(){
			var options=[];
			$(this).find('.option').each(function(){
				options.push({"Content":$(this).find('textarea.editor').val()})
			})
			_data.Subjects.push({
				"Type":$(this).attr('item-type'),
				"Num":$(this).find('.option').length,
				"Content":$(this).find('.panel-heading textarea.editor').val(),
				"Options":options
			})
		})
		return _data;
	}
	else{
		return null;
	}
}
ques.prototype.check=function(type,_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	if(type==='create'){
		var ed=__this.myPage.page.find('.editor');
		if(ed.length<=0)
			return false;
		for (var i = ed.length-1; i >=0; i--) {
			if(ed[i].value===''){
				__this.myPage.footnote.html('请填写所有项！');
				__this.myPage.footnote.css('color','red');
				return false;
			}
		}
		if(__this.myPage.page.find('.item').length===0){
			__this.myPage.footnote.html('请先添加内容！');
			__this.myPage.footnote.css('color','red');
			return false;
		}
		__this.myPage.footnote.html('四川农业大学问卷投票系统');
		__this.myPage.footnote.removeAttr('style');
		return true;
	}
	else{
		console.log('error');
	}
}
ques.prototype.radio=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	var m=new item(__this.itemContainer,{"type":"Radio","edit":true,"numable":true,"title":"点击添加题目内容"});
	new option(m.body,{"editable":true,"numable":true,"edit":{"edit":true,"add":true,"del":true},"content":"点击添加选项内容"});
	m.item.find('.panel-footer').remove();
}
ques.prototype.checkbox=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	var m=new item(__this.itemContainer,{"type":"Multiselect","edit":true,"numable":true,"title":"点击添加题目内容"});
	new option(m.body,{"editable":true,"numable":true,"edit":{"edit":true,"add":true,"del":true},"content":"点击添加选项内容"});
	m.item.find('.panel-footer').remove();
}
ques.prototype.subjective=function(_this){
	var __this=typeof(_this)==='undefined'?this:_this;
	var m=new item(__this.itemContainer,{"type":"Subjective","edit":true,"numable":true,"title":"点击添加题目内容"});
	m.header.find('textarea').height(100);
	m.item.find('.panel-footer').remove();
}
/*=======================================ques Class========================================
===========================================================================================*/


//check title is here

function settingCheck(data,type,title){
	var _data=data;
	fn.request({
		"data":title,
		"url":type==='vote'?'/Vote/CheckTitle':'/Question/CheckTitle',
		"callBack":function(data){
			try{
				if (data.Type==='Success') {
					var setting=$('#QVSetPage');
					_data.Global.IsBelongOrganize=$('#identitySelections option:selected').attr("data-type") === 'personal'?false:true;
					_data.Global.BelongTo=_data.Global.IsBelongOrganize?$('#identitySelections option:selected').attr("data-id"):$('#user').attr('data-id');

					if ($('#accessibleOrgTable tbody input[data-type="fill"]:checked').length>0&&$('#accessibleOrgTable tbody input[data-type="view"]:checked').length>0 || $('#identitySelections option:selected').attr('data-type')==='temp') {
						var wtOrg = [],rdOrg = [];
						if($('#identitySelections option:selected').attr('data-type')==='temp'){
							wtOrg.push({"Id":$('#identitySelections option:selected').attr('data-id')});
							rdOrg.push({"Id":$('#identitySelections option:selected').attr('data-id')});
						}
						else{
							$('#accessibleOrgTable tbody tr').each(function() {
								if($(this).find('input')[0].checked)
									wtOrg.push({
										'Id': $(this).attr('data-id')
									});
								if($(this).find('input')[1].checked)
									rdOrg.push({
										'Id': $(this).attr('data-id')
									});
							});
						}
						
						_data.Global.RdOrganize=rdOrg;
						_data.Global.WtOrganize=wtOrg;
						if($('#releaseTime').val()!=''&&$('#endTime').val()!=''){
							_data.Global.BeginTime=Date.parse($('#releaseTime').val());
							_data.Global.EndTime=Date.parse($('#endTime').val());
							fn.request({
								"data":{"content":JSON.stringify(_data)},
								"url":type==='vote'?'/Vote/Create':'/Question/Create',
								"callBack":function(data){
									if(data.Type === 'Success') {
										alert('提交成功');
										window.location.href = data.Message;
									}
								}
							})
						}
						else{
							alert('请选择开始与结束时间');
						}
					}
					else{
						alert("请设定组织权限")
					}
				}

				else{
					alert('投票名错误！')
				}
				return null;
			}
			catch(e){
				console.log(e)
			}

		}
	})
}
/*========================================ceate Class========================================*/
var create=function(htmlDOM,type) {
	this.type=(typeof(type)==='undefined'?'vote':type);
	switch(this.type){
		case 'vote':
		this.create=new vote('create',htmlDOM,null);
		break;
		case 'ques':
		this.create=new ques('create',htmlDOM,{"radio":$('#itemTypes [item-type="radio"]'),"checkbox":$('#itemTypes [item-type="checkbox"]'),"subjective":$('#itemTypes [item-type="subjective"]')});
		break;
		default:
		console.log('undefined type');
	}
}
create.prototype.submitCheck=function(type){

}
create.prototype.submit = function(type) {//ques or vote
	settingCheck(this.create.getCreateData(),this.type,$(this.create.myPage.title.attr('href')).find('textarea').val());
};

create.prototype.callBack = function() {};
create.prototype.callBack.getJoinOrg = function(data, objectId) {
	var joinOrgNode = $("#identitySelections");
	joinOrgNode.empty();
	joinOrgNode.append('<option data-type="personal">个人</option>');
	for(var i = data.length - 1; i >= 0; --i) {
		if(data[i].IsTemp){
			joinOrgNode.append('<option data-type="temp" data-id="' + data[i].Id + '" data-attr="' + data[i].IsTemp + '">' + data[i].Name + '</option>');
		}
		else{
			joinOrgNode.append('<option data-type="org" data-id="' + data[i].Id + '" data-attr="' + data[i].IsTemp + '">' + data[i].Name + '</option>');
		}
		
	}
};
create.prototype.callBack.getOrgByType = function(data, objectId) {
	var accessibleOrgContainer = $("#accessibleOrgTable tbody");
	var trList = accessibleOrgContainer.find('tr');
	var flag = null;
	for(var i = trList.length - 1; i >= 0; i--) {
		if(!(trList[i].querySelectorAll('input')[0].checked || trList[i].querySelectorAll('input')[1].checked))
			trList[i].parentNode.removeChild(trList[i]);
	}
	trList = accessibleOrgContainer.find('tr');
	for(i = data.length - 1; i >= 0; i--) {
		flag = false;
		for(var j = trList.length - 1; j >= 0; j--) {
			if(trList[j].getAttribute('data-id') == (data[i].Id)) {
				flag = true;
				break;
			}
		}
		if(!flag)
			accessibleOrgContainer.append('<tr data-id="' + data[i].Id + '"><td>' + data[i].Name + '</td><td><input type="checkbox" data-type="fill"></td><td><input type="checkbox" data-type="view"></td>');
	}
};
create.prototype.callBack.checkTitle = function(data, objectId) {
	data.Type === 'Fail' ? alert(data.Message) : create.submit($('#QVPage').attr('data-type'));
}
create.prototype.callBack.submit = function(data, objectId) {
	if(data.Type === 'Success') {
		alert('提交成功');
		window.location.href = data.Message;
	}
}
create.prototype.handle = {
	'getJoinOrg': {
		'data': null,
		'url': '/Organize/GetJoinOrganize',
		'type': 'post',
		'callBack': create.prototype.callBack.getJoinOrg,
		'error': null,
		'objId': null
	},
	'getOrg': {
		'data': {
			'type': ''
		},
		'url': '/Organize/GetOrganize',
		'type': 'post',
		'callBack': create.prototype.callBack.getOrgByType,
		'error': null,
		'objId': null
	},
	'searchOrg': {
		'data': {
			'organize': ''
		},
		'url': '/Organize/SearchOrganize',
		'type': 'post',
		'callBack': create.prototype.callBack.getOrgByType,
		'error': null,
		'objId': null
	},
	'checkTitle': {
		'data': {
			'title': ''
		},
		'url': '/Vote/CheckTitle',
		'type': 'post',
		'callBack': create.prototype.callBack.checkTitle,
		'error': null,
		'objId': null
	},
	'creatQues': {
		'data': {},
		'url': '/Question/Create',
		'type': 'post',
		'callBack': create.prototype.callBack.submit,
		'error': null,
		'objId': null
	},
	'show': {
		'data': {
			'Id': ''
		},
		'url': '/Question/GetQuestion',
		'type': 'post',
		'callBack': create.prototype.callBack.show,
		'error': function(e) {},
		'objId': '00'
	},
	'fillResultSubmit': {
		'data': {},
		'url': '/Question/SaveQuestion',
		'type': 'post',
		'callBack': create.prototype.callBack.submit,
		'error': function(e) {},
		'objId': '00'
	}
};
/*========================================ceate Class========================================*/
/*========================================Show Class========================================*/
function show() {}

show.getReleaseID = function(id, IsBelongOrganize) {
	req.handles=[{
		'data': {
			'Id': id
		},
		'url': '/Account/GetNameById',
		'type': 'post',
		'callBack': function(data) {
			$('.page .page-header .author').html(data.Message);
		},
		'error': null,
		'objId': null
	}];
	req.handles[0].url = IsBelongOrganize ? '/Organize/GetName' : '/Account/GetNameById';
	req.ajaxReq();
}
show.prototype.checkFill=function(){
	$('.page .page-body .panel').each(function(){
		if($(this).find('textarea').length>0?($(this).find('textarea')[0].value===''?true:false):($(this).find('input:checked').length===0?true:false)){
			if($(this).find('.panel-title .glyphicon-alert').length===0)
				$(this).find('.panel-title').append('<span class="glyphicon glyphicon-alert" style="color:red"></span>');
		}
		else{
			if($(this).find('.panel-title .glyphicon-alert').length!=0)
				$(this).find('span.glyphicon-alert').remove();
		}
	});
	return !Boolean($('.page .page-body .panel .glyphicon-alert').length||$('.page .page-body .panel .glyphicon-ok').length||$('.page .page-body .panel .chart-container').length);
}
show.prototype.submit = function() {
	if(show.prototype.checkFill()){
		var data = {
			"Id": ($('#page-container').attr('data-id')),
			"Subjects": []
		};
		var o = $('.page .page-body .panel');
		var options = null;
		for(var i = o.length - 1; i >= 0; --i) {
			if(o[i].getAttribute('item-type') === 'Subjective') {
				data.Subjects.push({
					'Id': (o[i].getAttribute('data-id')),
					'Type': o[i].getAttribute('item-type'),
					'Content': o[i].querySelector('textarea').value
				})
			} else {
				options = [];
				$.each(o[i].querySelectorAll('input:checked'), function() {
					options.push({
						'Id': (($(this).val()))
					});
				});
				data.Subjects.push({
					'Id': (o[i].getAttribute('data-id')),
					'Type': o[i].getAttribute('item-type'),// === 'Subjective' ? 'Subjective' : (o[i].getAttribute('item-type') === 'radio' ? 'Radio' : 'Multiselect'),
					'Options': options
				})
			}
		}
		show.handle.fillQuesResultSubmit.data = {"content":JSON.stringify(data)};
		req.handles=[show.handle.fillQuesResultSubmit];
		req.ajaxReq();
	}
}

show.prototype.showControler=function(t){
	var type=null;
	switch(t){
		case 'wtQues':
		type='00';
		break;
		case 'lgQues':
		type='01';
		break;
		case 'showQues':
		type='02';
		break;
		case 'wtVote':
		type='10';
		break;
		case 'lgVote':
		type='11';
		break;
		case 'showVote':
		type='12';
		break;
		default:
		type='00';
	}
	req.handles=[type[0]==='0'?(type[1]==='0'?show.handle.showQues:(type[1]==='1'?show.handle.getQuesFillRecord:show.handle.getQuesResult)):(type[1]==='0'?show.handle.showVote:(type[1]==='1'?show.handle.getVoteFillRecord:show.handle.getVoteResult))];
	req.handles[0].data.Id=$('#page-container').attr('data-id');
	if($('#myModal').length>0){
		req.handles[0].data.Id=$('#page-container').attr('data-id');
	}
	req.handles[0].objId=type;
	req.ajaxReq();
}
show.prototype.setFooter=function(type){
	var footer=$('#page-footer');
	if (type==='20') {
		footer.find('#submit').innerHTML='通过';
		footer.find('#submit').click(function(){
			req.handles=[show.handle.reviewPass];

		});
	}
}
show.prototype.callBack = function() {};
show.prototype.callBack.submit = function(data, objectId) {
	if(data.Type === 'Success') {
		alert('提交成功');
		if($('#myModal').length!=0)
			$('#myModal').modal('hide');
		window.location.href = data.Message;
		
	}
	else{
//TO DO
}
};

show.prototype.callBack.show = function(data,type) {
	if(typeof(type)!='undefined'&&type[0]==='1'){
		if(type[1]==='0'){
			fn.request({
				"data":{"id":$('#page-container').attr('data-id')},
				"url":'/Vote/GetVote',
				"callBack":function(data){
					var v=new vote('fill',$('#page-container'),data);
					if($('#myModal').length>0){
						$('.page .page-footer').empty();
						$('.page input').attr('disabled',true);
					}
				}
			});
		}
		else if(type[1]==='1'){
			fn.request({
				"data":{"id":$('#page-container').attr('data-id')},
				"url":'/Vote/GetWtLog',
				"callBack":function(data){
					var v=new vote('dis',$('#page-container'),data);
					if($('#myModal').length>0){
						$('.page .page-footer').empty();
						$('.page input').attr('disabled',true);
					}
				}
			});
		}
		else if(type[1]==='2'){
			fn.request({
				"data":{"id":$('.page').attr('data-id')},
				"url":'/Vote/GetResult',
				"callBack":function(data){
					var v=new vote('dis',$('#page-container'),data);
				}
			});
		}
		else{
			console.log('type error!');
		}
// var v=new vote('dis',$('.page-container'),data);
}
else{
	var o = null,
	r = 1,
	t = 0;
	var p=new page($('#page-container'));
	// $('#page-container').append(p.page);
	$('.page').attr('data-id', (data.Global.Id));
	(o = $('.page .page-header')).find('h2')[0].innerHTML = data.Global.Title;
	o.find(".instro").html(data.Global.Introduct);
	o.find('.time')[0].innerHTML = '发布时间：'+formatBeginTime(data.Global.BeginTime)+'&nbsp;&nbsp;';
	o.find('.time')[1].innerHTML = '结束时间：'+formatEndTime(data.Global.EndTime)+'&nbsp;&nbsp;';
	$('.page .page-header .author').html('发布者：'+data.Global.Publisher);
	// show.getReleaseID(data.Global.BelongTo, Boolean(data.Global.IsBelongOrganize));
	if (type[1]==='2') {
		var option = {
			baseOption: {
				title: {
					subtext: '',
					x: 'center'
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					top: 'middle',
					data: []
				},
				series: [{
					name: '占比',
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: [],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}]
			}
		};
	}
	for(var i = data.Subjects.length - 1, r = 1; i >= 0; --i) {

		o = $('#panelDisDemo').clone();
		o.removeAttr('id');
		o.removeAttr('style');
		o.attr('data-id', (data.Subjects[i].Id));
		o.attr('item-type', data.Subjects[i].Type);
		o.find('.panel-heading .item-num')[0].innerHTML = r.toString();
		r++;
		o.find('.panel-title').append(o.attr('item-type') === "Subjective" ? "【主观题】" : function() {
			return o.attr('item-type') === "Radio" ? "【单选题】" : "【多选题】"
		});
		o.find('.panel-title')[0].append(data.Subjects[i].Content);
		if(data.Subjects[i].Type === 'Subjective') {
			if(!(type[1]==='2')){
				data.Subjects[i].SubAnswers?o.find('.panel-body').html(data.Subjects[i].SubAnswers):o.children('.panel-body').append('<textarea class="form-control" rows="5"></textarea>');
			}
			else{
				o.find('.panel-body').append(t=$('#collapseExampleDemo').clone());
				t.attr('id', t.attr('id')+r.toString());
				t.removeAttr('style');
				o.children('.panel-heading').find('.panel-title').attr('href','#'+ t.attr('id'));
				o.children('.panel-heading').find('.panel-title').css('cursor','pointer');
				t.find('#accordion').attr('id',t.find('#accordion')[0].getAttribute('id')+r.toString());
				$.each(data.Subjects[i].SubAnswers.split('@@@@@'),function(key,value) {
					t.children('div[role="tablist"]').append('<div class="panel" style="margin-bottom: 0;"> <div class="panel-heading" role="tab"> <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion'+r.toString()+'" href="#collapse'+key.toString()+'" aria-expanded="false" aria-controls="collapseOne">'+value+'</a></h4> </div> <div id="collapse'+key.toString()+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">'+value+'</div> </div>');
				});
			}
		} 
		else {

			if(data.Subjects[i].Options){
				for(var j = data.Subjects[i].Options.length - 1, t = 0,total=0; j >= 0; --j,t++) {
					o.children('.panel-body').append('<div class="' + (data.Subjects[i].Type === 'Radio' ? 'radio' : 'checkbox') + '"><label><input type="' + (data.Subjects[i].Type === 'Radio' ? 'radio' : 'checkbox') + '" name="option' + (data.Subjects[i].Id) + '" value="' + (data.Subjects[i].Options[j].Id) + '"><span class="optional-num">' + optionalIndex[t] + '</span>' + data.Subjects[i].Options[j].Content + '</label></div>');
					if(type[1]==='2'){
						option.baseOption.legend.data.push(optionalIndex[t]);option.baseOption.series[0].data.push(fn.p(optionalIndex[t],data.Subjects[i].Options[j].Num));total+=data.Subjects[i].Options[j].Num;
					}

				}
				if(type[1]==='2')
					option.baseOption.title.subtext='总计'+total.toString();
			}
			if (data.Subjects[i].ObjAnswers) {
				for(j=data.Subjects[i].ObjAnswers.length-1;j>=0;--j){
					o.find('input[value="'+(data.Subjects[i].ObjAnswers[j].Id)+'"]').closest('label').append('<span class="glyphicon glyphicon-ok" style="color:#5cb85c"></span>');
				}
			}
			if (type[1]!='0') {
				o.find('input').remove();
			}

		}
		$('.page .page-body').append(o);
		if($('#myModal').length>0){
			$('.page .page-footer').empty();
			$('.page input').attr('disabled',true);
		}
		if(type[1]==='2'&&data.Subjects[i].Type != 'Subjective'){

			o.find('.panel-body').append('<div class="col-md-12 chart-container" id="result-container-dis" style="height:200px"></div>');
			myEchar.init(document.getElementById('result-container-dis')).setOption(option);
			o.find('#result-container-dis').attr('id',o.find('#result-container-dis')[0].getAttribute('id')+r.toString());
			option.baseOption.legend.data=[];option.baseOption.series[0].data=[];
		}
	}
}
	// show.setFooter();
}
show.prototype.review=function(){

}
show.handle = {
	'showQues': {
		'data': {
			'Id': ''
		},
		'url': '/Question/GetQuestion',
		'type': 'post',
		'callBack': show.prototype.callBack.show,
		'error': function(e) {},
		'objId': '00'
	},
	'showVote': {
		'data': {
			'Id': ''
		},
		'url': '/Vote/GetVote',
		'type': 'post',
		'callBack': show.prototype.callBack.show,
		'error': function(e) {},
		'objId': ''
	},
	'fillQuesResultSubmit': {
		'data': {},
		'url': '/Question/SaveQuestion',
		'type': 'post',
		'callBack': show.prototype.callBack.submit,
		'error': function(e) {},
		'objId': '00'
	},
	'getQuesFillRecord': {
		'data': {'Id':'1'},
		'url': '/Question/GetWtLog',
		'type': 'post',
		'callBack': show.prototype.callBack.show,
		'error': function(e) {},
		'objId': '' //temperary
	},
	'getQuesResult': {
		'data': {'Id':''},
		'url': '/Question/GetResult',
		'type': 'post',
		'callBack': show.prototype.callBack.show,
		'error': function(e) {},
		'objId': ''
	},
	'getVoteFillRecord': {
		'data': {'Id':''},
		'url': '/Vote/GetWtLog',
		'type': 'post',
		'callBack': show.prototype.callBack.show,
		'error': function(e) {},
		'objId': '' 
	},
	'getVoteResult': {
		'data': {'Id':''},
		'url': '/Vote/GetResult',
		'type': 'post',
		'callBack': show.prototype.callBack.show,
		'error': function(e) {},
		'objId': '' 
	},
	'reviewPass': {
		'data': {'Id':''},
		'url': '/Users/AuditPass',
		'type': 'post',
		'callBack': show.prototype.callBack.submit,
		'error': function(e) {},
		'objId': '' 
	},
	'reviewDeny': {
		'data': {'Id':''},
		'url': '/Users/AuditNotPass',
		'type': 'post',
		'callBack': show.prototype.callBack.submit,
		'error': function(e) {},
		'objId': '' 
	},
};
/*========================================Show Class========================================*/

/*========================================Org Class========================================*/
var org={
	"status":['加入','退出'],
	"JQ":function(obj){
		fn.request({
			"data":{"id":obj.closest('tr').attr('data-id')},
			"url":obj.attr('data-toggle')==='true'?'/Organize/QuitOrganize':'/Organize/JoinOrganize',
			"callBack":function(data){
				if(data.Type==="Fail"){
					alert(data.Message)
				}
				if(data.Type==="Success"){
					obj.attr('data-toggle',obj.attr('data-toggle')==='true'?'false':'true');
					obj.html(org.status[obj.attr('data-toggle')==='true'?1:0]);
				}
			}
		});
	},
	"del":function(obj){
		fn.request({
			"data":{"id":obj.closest('tr').attr('data-id')},
			"url":'/Organize/DeleteOrganize',
			"callBack":function(data){
				if(data.Type==="Fail"){
					alert(data.Message)
				}
				if(data.Type==="Success"){
					obj.closest('tr').remove();
				}
			}
		});
	},
	"change":function(obj){
		fn.request({
			"data":{"id":obj.closest('tr').attr('data-id')},
			"url":'/Organize/Edit',
			"callBack":function(data){
				if(data.Type==="Fail"){
					alert(data.Message)
				}
				if(data.Type==="Success"){
					obj.closest('tr').remove();
				}
			}
		});
	}
}
/*========================================Org Class========================================*/

/*========================================Review Class========================================*/
function review(){};
review.prototype.view=function(type){

}


fn.show=new show();
fn.req=new source([{'data': {}, 'url': '', 'type': 'post', 'callBack': null, 'error': null, 'objId': ''}]);
fn.create=create;
fn.org=org;
module.exports=fn;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.echarts=e():t.echarts=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(2),n(108),n(102),n(112),n(191),n(207),n(232),n(55),n(209),n(208),n(223),n(216),n(215),n(214),n(197),n(224),n(240)},function(t,e){function n(t){if(null==t||"object"!=typeof t)return t;var e=t,i=R.call(t);if("[object Array]"===i){e=[];for(var r=0,o=t.length;r<o;r++)e[r]=n(t[r])}else if(N[i])e=t.constructor.from(t);else if(!E[i]&&!k(t)&&!T(t)){e={};for(var a in t)t.hasOwnProperty(a)&&(e[a]=n(t[a]))}return e}function i(t,e,r){if(!M(e)||!M(t))return r?n(e):t;for(var o in e)if(e.hasOwnProperty(o)){var a=t[o],s=e[o];!M(s)||!M(a)||_(s)||_(a)||T(s)||T(a)||S(s)||S(a)||k(s)||k(a)?!r&&o in t||(t[o]=n(e[o],!0)):i(a,s,r)}return t}function r(t,e){for(var n=t[0],r=1,o=t.length;r<o;r++)n=i(n,t[r],e);return n}function o(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function a(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function s(){return document.createElement("canvas")}function l(){return z||(z=U.createCanvas().getContext("2d")),z}function u(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function h(t,e){function n(){}var i=t.prototype;n.prototype=e.prototype,t.prototype=new n;for(var r in i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function c(t,e,n){t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,a(t,e,n)}function d(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function f(t,e,n){if(t&&e)if(t.forEach&&t.forEach===V)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,t)}function p(t,e,n){if(t&&e){if(t.map&&t.map===H)return t.map(e,n);for(var i=[],r=0,o=t.length;r<o;r++)i.push(e.call(n,t[r],r,t));return i}}function g(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===W)return t.reduce(e,n,i);for(var r=0,o=t.length;r<o;r++)n=e.call(i,n,t[r],r,t);return n}}function m(t,e,n){if(t&&e){if(t.filter&&t.filter===F)return t.filter(e,n);for(var i=[],r=0,o=t.length;r<o;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function v(t,e,n){if(t&&e)for(var i=0,r=t.length;i<r;i++)if(e.call(n,t[i],i,t))return t[i]}function y(t,e){var n=G.call(arguments,2);return function(){return t.apply(e,n.concat(G.call(arguments)))}}function x(t){var e=G.call(arguments,1);return function(){return t.apply(this,e.concat(G.call(arguments)))}}function _(t){return"[object Array]"===R.call(t)}function b(t){return"function"==typeof t}function w(t){return"[object String]"===R.call(t)}function M(t){var e=typeof t;return"function"===e||!!t&&"object"==e}function S(t){return!!E[R.call(t)]}function T(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function A(t){return t!==t}function I(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]}function C(){return Function.call.apply(G,arguments)}function P(t,e){if(!t)throw new Error(e)}function D(t){t[Z]=!0}function k(t){return t[Z]}function L(t){t&&f(t,function(t,e){this.set(e,t)},this)}function O(t){return new L(t)}var z,E={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},N={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},R=Object.prototype.toString,B=Array.prototype,V=B.forEach,F=B.filter,G=B.slice,H=B.map,W=B.reduce,Z="__ec_primitive__",q="_ec_",j=4;L.prototype={constructor:L,get:function(t){return this[q+t]},set:function(t,e){return this[q+t]=e,e},each:function(t,e){void 0!==e&&(t=y(t,e));for(var n in this)this.hasOwnProperty(n)&&t(this[n],n.slice(j))},removeKey:function(t){delete this[t]}};var U={inherits:h,mixin:c,clone:n,merge:i,mergeAll:r,extend:o,defaults:a,getContext:l,createCanvas:s,indexOf:u,slice:C,find:v,isArrayLike:d,each:f,map:p,reduce:g,filter:m,bind:y,curry:x,isArray:_,isString:w,isObject:M,isFunction:b,isBuiltInObject:S,isDom:T,eqNaN:A,retrieve:I,assert:P,setAsPrimitive:D,createHashMap:O,noop:function(){}};t.exports=U},function(t,e,n){function i(t){return function(e,n,i){e=e&&e.toLowerCase(),B.prototype[t].call(this,e,n,i)}}function r(){B.call(this)}function o(t,e,n){function i(t,e){return t.prio-e.prio}n=n||{},"string"==typeof e&&(e=lt[e]),this.id,this.group,this._dom=t;var o=this._zr=E.init(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=z.throttle(N.bind(o.flush,o),17),this._theme=N.clone(e),this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new A,this._api=b(this),B.call(this),this._messageCenter=new r,this._initEvents(),this.resize=N.bind(this.resize,this),this._pendingActions=[],V(st,i),V(rt,i),o.animation.on("frame",this._onframe,this),N.setAsPrimitive(this)}function a(t,e,n){var i,r=this._model,o=this._coordSysMgr.getCoordinateSystems();e=O.parseFinder(r,e);for(var a=0;a<o.length;a++){var s=o[a];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function s(t,e,n,i,r){function o(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}var a=t._model;if(!i)return void F(t._componentsViews.concat(t._chartsViews),o);var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r),a&&a.eachComponent(l,function(e,n){o(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}function l(t,e){var n=t.type,i=t.escapeConnect,r=nt[n],o=r.actionInfo,a=(o.update||"update").split(":"),l=a.pop();a=null!=a[0]&&G(a[0]),this[Y]=!0;var u=[t],h=!1;t.batch&&(h=!0,u=N.map(t.batch,function(e){return e=N.defaults(N.extend({},e),t),e.batch=null,e}));var c,d=[],f="highlight"===n||"downplay"===n;F(u,function(t){c=r.action(t,this._model,this._api),c=c||N.extend({},t),c.type=o.event||c.type,d.push(c),f?s(this,l,t,"series"):a&&s(this,l,t,a.main,a.sub)},this),"none"===l||f||a||(this[K]?(tt.prepareAndUpdate.call(this,t),this[K]=!1):tt[l].call(this,t)),c=h?{type:o.event||n,escapeConnect:i,batch:d}:d[0],this[Y]=!1,!e&&this._messageCenter.trigger(c.type,c)}function u(t){for(var e=this._pendingActions;e.length;){var n=e.shift();l.call(this,n,t)}}function h(t){!t&&this.trigger("updated")}function c(t,e,n){var i=this._api;F(this._componentsViews,function(r){var o=r.__model;r[t](o,e,i,n),_(o,r)},this),e.eachSeries(function(r,o){var a=this._chartsMap[r.__viewId];a[t](r,e,i,n),_(r,a),x(r,a)},this),y(this._zr,e),F(at,function(t){t(e,i)})}function d(t,e){for(var n="component"===t,i=n?this._componentsViews:this._chartsViews,r=n?this._componentsMap:this._chartsMap,o=this._zr,a=0;a<i.length;a++)i[a].__alive=!1;e[n?"eachComponent":"eachSeries"](function(t,a){if(n){if("series"===t)return}else a=t;var s="_ec_"+a.id+"_"+a.type,l=r[s];if(!l){var u=G(a.type),h=n?D.getClass(u.main,u.sub):k.getClass(u.sub);if(!h)return;l=new h,l.init(e,this._api),r[s]=l,i.push(l),o.add(l.group)}a.__viewId=l.__id=s,l.__alive=!0,l.__model=a,l.group.__ecComponentInfo={mainType:a.mainType,index:a.componentIndex}},this);for(var a=0;a<i.length;){var s=i[a];s.__alive?a++:(o.remove(s.group),s.dispose(e,this._api),i.splice(a,1),delete r[s.__id],s.__id=s.group.__ecComponentInfo=null)}}function f(t,e){F(rt,function(n){n.func(t,e)})}function p(t){var e={};t.eachSeries(function(t){var n=t.get("stack"),i=t.getData();if(n&&"list"===i.type){var r=e[n];e.hasOwnProperty(n)&&r&&(i.stackedOn=r),e[n]=i}})}function g(t,e){var n=this._api;F(st,function(i){i.isLayout&&i.func(t,n,e)})}function m(t,e,n){var i=this._api;t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()}),F(st,function(r){(!n||!r.isLayout)&&r.func(t,i,e)})}function v(t,e){var n=this._api;F(this._componentsViews,function(i){var r=i.__model;i.render(r,t,n,e),_(r,i)},this),F(this._chartsViews,function(t){t.__alive=!1},this),t.eachSeries(function(i,r){var o=this._chartsMap[i.__viewId];o.__alive=!0,o.render(i,t,n,e),o.group.silent=!!i.get("silent"),_(i,o),x(i,o)},this),y(this._zr,t),F(this._chartsViews,function(e){e.__alive||e.remove(t,n)},this)}function y(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!M.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function x(t,e){var n=0;e.group.traverse(function(t){"group"===t.type||t.ignore||n++});var i=+t.get("progressive"),r=n>t.get("progressiveThreshold")&&i&&!M.node;r&&e.group.traverse(function(t){t.isGroup||(t.progressive=r?Math.floor(n++/i):-1,r&&t.stopAnimation(!0))});var o=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.setStyle("blend",o)})}function _(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function b(t){var e=t._coordSysMgr;return N.extend(new T(t),{getCoordinateSystems:N.bind(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function w(t){function e(t,e){for(var n=0;n<t.length;n++){var i=t[n];i[o]=e}}var n=0,i=1,r=2,o="__connectUpdateStatus";N.each(it,function(a,s){t._messageCenter.on(s,function(a){if(ct[t.group]&&t[o]!==n){if(a&&a.escapeConnect)return;var s=t.makeActionFromEvent(a),l=[];N.each(ht,function(e){e!==t&&e.group===t.group&&l.push(e)}),e(l,n),F(l,function(t){t[o]!==i&&t.dispatchAction(s)}),e(l,r)}})})}/*!
	 * ECharts, a javascript interactive chart library.
	 *
	 * Copyright (c) 2015, Baidu Inc.
	 * All rights reserved.
	 *
	 * LICENSE
	 * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
	 */
var M=n(9),S=n(137),T=n(101),A=n(26),I=n(138),C=n(13),P=n(17),D=n(65),k=n(30),L=n(3),O=n(5),z=n(37),E=n(88),N=n(1),R=n(22),B=n(23),V=n(51),F=N.each,G=C.parseClassType,H=1e3,W=5e3,Z=1e3,q=2e3,j=3e3,U=4e3,X=5e3,Y="__flagInMainProcess",$="__hasGradientOrPatternBg",K="__optionUpdated",Q=/^[a-zA-Z0-9_]+$/;r.prototype.on=i("on"),r.prototype.off=i("off"),r.prototype.one=i("one"),N.mixin(r,B);var J=o.prototype;J._onframe=function(){if(this[K]){var t=this[K].silent;this[Y]=!0,tt.prepareAndUpdate.call(this),this[Y]=!1,this[K]=!1,u.call(this,t),h.call(this,t)}},J.getDom=function(){return this._dom},J.getZr=function(){return this._zr},J.setOption=function(t,e,n){var i;if(N.isObject(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[Y]=!0,!this._model||e){var r=new I(this._api),o=this._theme,a=this._model=new S(null,null,o,r);a.init(null,null,o,r)}this._model.setOption(t,ot),n?(this[K]={silent:i},this[Y]=!1):(tt.prepareAndUpdate.call(this),this._zr.flush(),this[K]=!1,this[Y]=!1,u.call(this,i),h.call(this,i))},J.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},J.getModel=function(){return this._model},J.getOption=function(){return this._model&&this._model.getOption()},J.getWidth=function(){return this._zr.getWidth()},J.getHeight=function(){return this._zr.getHeight()},J.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},J.getRenderedCanvas=function(t){if(M.canvasSupported){t=t||{},t.pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor");var e=this._zr,n=e.storage.getDisplayList();return N.each(n,function(t){t.stopAnimation(!0)}),e.painter.getRenderedCanvas(t)}},J.getDataURL=function(t){t=t||{};var e=t.excludeComponents,n=this._model,i=[],r=this;F(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var o=this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return F(i,function(t){t.group.ignore=!1}),o},J.getConnectedDataURL=function(t){if(M.canvasSupported){var e=this.group,n=Math.min,i=Math.max,r=1/0;if(ct[e]){var o=r,a=r,s=-r,l=-r,u=[],h=t&&t.pixelRatio||1;N.each(ht,function(r,h){if(r.group===e){var c=r.getRenderedCanvas(N.clone(t)),d=r.getDom().getBoundingClientRect();o=n(d.left,o),a=n(d.top,a),s=i(d.right,s),l=i(d.bottom,l),u.push({dom:c,left:d.left,top:d.top})}}),o*=h,a*=h,s*=h,l*=h;var c=s-o,d=l-a,f=N.createCanvas();f.width=c,f.height=d;var p=E.init(f);return F(u,function(t){var e=new L.Image({style:{x:t.left*h-o,y:t.top*h-a,image:t.dom}});p.add(e)}),p.refreshImmediately(),f.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},J.convertToPixel=N.curry(a,"convertToPixel"),J.convertFromPixel=N.curry(a,"convertFromPixel"),J.containPixel=function(t,e){var n,i=this._model;return t=O.parseFinder(i,t),N.each(t,function(t,i){i.indexOf("Models")>=0&&N.each(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var o=this._chartsMap[t.__viewId];o&&o.containPoint&&(n|=o.containPoint(e,t))}},this)},this),!!n},J.getVisual=function(t,e){var n=this._model;t=O.parseFinder(n,t,{defaultMainType:"series"});var i=t.seriesModel,r=i.getData(),o=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?r.indexOfRawIndex(t.dataIndex):null;return null!=o?r.getItemVisual(o,e):r.getVisual(e)},J.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},J.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var tt={update:function(t){var e=this._model,n=this._api,i=this._coordSysMgr,r=this._zr;if(e){e.restoreData(),i.create(this._model,this._api),f.call(this,e,n),p.call(this,e),i.update(e,n),m.call(this,e,t),v.call(this,e,t);var o=e.get("backgroundColor")||"transparent",a=r.painter;if(a.isSingleCanvas&&a.isSingleCanvas())r.configLayer(0,{clearColor:o});else{if(!M.canvasSupported){var s=R.parse(o);o=R.stringify(s,"rgb"),0===s[3]&&(o="transparent")}o.colorStops||o.image?(r.configLayer(0,{clearColor:o}),this[$]=!0,this._dom.style.background="transparent"):(this[$]&&r.configLayer(0,{clearColor:null}),this[$]=!1,this._dom.style.background=o)}F(at,function(t){t(e,n)})}},updateView:function(t){var e=this._model;e&&(e.eachSeries(function(t){t.getData().clearAllVisual()}),m.call(this,e,t),c.call(this,"updateView",e,t))},updateVisual:function(t){var e=this._model;e&&(e.eachSeries(function(t){t.getData().clearAllVisual()}),m.call(this,e,t,!0),c.call(this,"updateVisual",e,t))},updateLayout:function(t){var e=this._model;e&&(g.call(this,e,t),c.call(this,"updateLayout",e,t))},prepareAndUpdate:function(t){var e=this._model;d.call(this,"component",e),d.call(this,"chart",e),tt.update.call(this,t)}};J.resize=function(t){this[Y]=!0,this._zr.resize(t);var e=this._model&&this._model.resetOption("media"),n=e?"prepareAndUpdate":"update";tt[n].call(this),this._loadingFX&&this._loadingFX.resize(),this[Y]=!1;var i=t&&t.silent;u.call(this,i),h.call(this,i)},J.showLoading=function(t,e){if(N.isObject(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),ut[t]){var n=ut[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},J.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},J.makeActionFromEvent=function(t){var e=N.extend({},t);return e.type=it[t.type],e},J.dispatchAction=function(t,e){if(N.isObject(e)||(e={silent:!!e}),nt[t.type]){if(this[Y])return void this._pendingActions.push(t);l.call(this,t,e.silent),e.flush?this._zr.flush(!0):e.flush!==!1&&M.browser.weChat&&this._throttledZrFlush(),u.call(this,e.silent),h.call(this,e.silent)}},J.on=i("on"),J.off=i("off"),J.one=i("one");var et=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];J._initEvents=function(){F(et,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var o=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=o&&o.getDataParams(r.dataIndex,r.dataType)||{}}else r&&r.eventData&&(n=N.extend({},r.eventData));n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),F(it,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},J.isDisposed=function(){return this._disposed},J.clear=function(){this.setOption({series:[]},!0)},J.dispose=function(){if(!this._disposed){this._disposed=!0;var t=this._api,e=this._model;F(this._componentsViews,function(n){n.dispose(e,t)}),F(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete ht[this.id]}},N.mixin(o,B);var nt={},it={},rt=[],ot=[],at=[],st=[],lt={},ut={},ht={},ct={},dt=new Date-0,ft=new Date-0,pt="_echarts_instance_",gt={version:"3.6.2",dependencies:{zrender:"3.5.2"}};gt.init=function(t,e,n){var i=gt.getInstanceByDom(t);if(i)return i;var r=new o(t,e,n);return r.id="ec_"+dt++,ht[r.id]=r,t.setAttribute?t.setAttribute(pt,r.id):t[pt]=r.id,w(r),r},gt.connect=function(t){if(N.isArray(t)){var e=t;t=null,N.each(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+ft++,N.each(e,function(e){e.group=t})}return ct[t]=!0,t},gt.disConnect=function(t){ct[t]=!1},gt.disconnect=gt.disConnect,gt.dispose=function(t){"string"==typeof t?t=ht[t]:t instanceof o||(t=gt.getInstanceByDom(t)),t instanceof o&&!t.isDisposed()&&t.dispose()},gt.getInstanceByDom=function(t){var e;return e=t.getAttribute?t.getAttribute(pt):t[pt],ht[e]},gt.getInstanceById=function(t){return ht[t]},gt.registerTheme=function(t,e){lt[t]=e},gt.registerPreprocessor=function(t){ot.push(t)},gt.registerProcessor=function(t,e){"function"==typeof t&&(e=t,t=H),rt.push({prio:t,func:e})},gt.registerPostUpdate=function(t){at.push(t)},gt.registerAction=function(t,e,n){"function"==typeof e&&(n=e,e="");var i=N.isObject(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,N.assert(Q.test(i)&&Q.test(e)),nt[i]||(nt[i]={action:n,actionInfo:t}),it[e]=i},gt.registerCoordinateSystem=function(t,e){A.register(t,e)},gt.getCoordinateSystemDimensions=function(t){var e=A.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},gt.registerLayout=function(t,e){"function"==typeof t&&(e=t,t=Z),st.push({prio:t,func:e,isLayout:!0})},gt.registerVisual=function(t,e){"function"==typeof t&&(e=t,t=j),st.push({prio:t,func:e})},gt.registerLoading=function(t,e){ut[t]=e},gt.extendComponentModel=function(t){return C.extend(t)},gt.extendComponentView=function(t){return D.extend(t)},gt.extendSeriesModel=function(t){return P.extend(t)},gt.extendChartView=function(t){return k.extend(t)},gt.setCanvasCreator=function(t){N.createCanvas=t},gt.registerVisual(q,n(151)),gt.registerPreprocessor(n(145)),gt.registerLoading("default",n(136)),gt.registerAction({type:"highlight",event:"highlight",update:"highlight"},N.noop),gt.registerAction({type:"downplay",event:"downplay",update:"downplay"},N.noop),gt.zrender=E,gt.List=n(14),gt.Model=n(10),gt.Axis=n(33),gt.graphic=n(3),gt.number=n(4),gt.format=n(7),gt.throttle=z.throttle,gt.matrix=n(19),gt.vector=n(6),gt.color=n(22),gt.util={},F(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){gt.util[t]=N[t]}),gt.helper=n(135),gt.PRIORITY={PROCESSOR:{FILTER:H,STATISTIC:W},VISUAL:{LAYOUT:Z,GLOBAL:q,CHART:j,COMPONENT:U,BRUSH:X}},t.exports=gt},function(t,e,n){"use strict";function i(t){return null!=t&&"none"!=t}function r(t){return"string"==typeof t?x.lift(t,-.1):t}function o(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,o=t.__hoverStl;o.fill=o.fill||(i(n)?r(n):null),o.stroke=o.stroke||(i(e)?r(e):null);var a={};for(var s in o)o.hasOwnProperty(s)&&(a[s]=t.style[s]);t.__normalStl=a,t.__hoverStlDirty=!1}}function a(t){t.__isHover||(o(t),t.useHoverLayer?t.__zr&&t.__zr.addHover(t,t.__hoverStl):(t.setStyle(t.__hoverStl),t.z2+=1),t.__isHover=!0)}function s(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function l(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&a(t)}):a(t)}function u(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&s(t)}):s(t)}function h(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&o(t)}function c(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&l(this)}function d(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&u(this)}function f(){this.__isEmphasis=!0,l(this)}function p(){this.__isEmphasis=!1,u(this)}function g(t,e,n,i,r,o){"function"==typeof r&&(o=r,r=null);var a=i&&i.isAnimationEnabled();if(a){var s=t?"Update":"",l=i.getShallow("animationDuration"+s),u=i.getShallow("animationEasing"+s),h=i.getShallow("animationDelay"+s);"function"==typeof h&&(h=h(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof l&&(l=l(r)),l>0?e.animateTo(n,l,h||0,u,o):(e.stopAnimation(),e.attr(n),o&&o())}else e.stopAnimation(),e.attr(n),o&&o()}var m=n(1),v=n(180),y=n(8),x=n(22),_=n(19),b=n(6),w=n(58),M=n(11),S=Math.round,T=Math.max,A=Math.min,I={};I.Group=n(36),I.Image=n(53),I.Text=n(86),I.Circle=n(171),I.Sector=n(177),I.Ring=n(176),I.Polygon=n(173),I.Polyline=n(174),I.Rect=n(175),I.Line=n(172),I.BezierCurve=n(170),I.Arc=n(169),I.CompoundPath=n(164),I.LinearGradient=n(100),I.RadialGradient=n(165),I.BoundingRect=M,I.extendShape=function(t){return y.extend(t)},I.extendPath=function(t,e){return v.extendFromString(t,e)},I.makePath=function(t,e,n,i){var r=v.createFromString(t,e),o=r.getBoundingRect();if(n){var a=o.width/o.height;if("center"===i){var s,l=n.height*a;l<=n.width?s=n.height:(l=n.width,s=l/a);var u=n.x+n.width/2,h=n.y+n.height/2;n.x=u-l/2,n.y=h-s/2,n.width=l,n.height=s}I.resizePath(r,n)}return r},I.mergePath=v.mergePath,I.resizePath=function(t,e){if(t.applyTransform){var n=t.getBoundingRect(),i=n.calculateTransform(e);t.applyTransform(i)}},I.subPixelOptimizeLine=function(t){var e=I.subPixelOptimize,n=t.shape,i=t.style.lineWidth;return S(2*n.x1)===S(2*n.x2)&&(n.x1=n.x2=e(n.x1,i,!0)),S(2*n.y1)===S(2*n.y2)&&(n.y1=n.y2=e(n.y1,i,!0)),t},I.subPixelOptimizeRect=function(t){var e=I.subPixelOptimize,n=t.shape,i=t.style.lineWidth,r=n.x,o=n.y,a=n.width,s=n.height;return n.x=e(n.x,i,!0),n.y=e(n.y,i,!0),n.width=Math.max(e(r+a,i,!1)-n.x,0===a?0:1),n.height=Math.max(e(o+s,i,!1)-n.y,0===s?0:1),t},I.subPixelOptimize=function(t,e,n){var i=S(2*t);return(i+S(e))%2===0?i/2:(i+(n?1:-1))/2},I.setHoverStyle=function(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&h(t,e)}):h(t,e),t.on("mouseover",c).on("mouseout",d),t.on("emphasis",f).on("normal",p)},I.setText=function(t,e,n){var i=e.getShallow("position")||"inside",r=e.getShallow("offset"),o=i.indexOf("inside")>=0?"white":n,a=e.getModel("textStyle");m.extend(t,{textDistance:e.getShallow("distance")||5,textFont:a.getFont(),textPosition:i,textOffset:r,textFill:a.getTextColor()||o})},I.getFont=function(t,e){var n=e&&e.getModel("textStyle");return[t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" ")},I.updateProps=function(t,e,n,i,r){g(!0,t,e,n,i,r)},I.initProps=function(t,e,n,i,r){g(!1,t,e,n,i,r)},I.getTransform=function(t,e){for(var n=_.identity([]);t&&t!==e;)_.mul(n,t.getLocalTransform(),n),t=t.parent;return n},I.applyTransform=function(t,e,n){return e&&!m.isArrayLike(e)&&(e=w.getLocalTransform(e)),n&&(e=_.invert([],e)),b.applyTransform([],t,e)},I.transformDirection=function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return o=I.applyTransform(o,e,n),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top"},I.groupTransition=function(t,e,n,i){function r(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}function o(t){var e={position:b.clone(t.position),rotation:t.rotation};return t.shape&&(e.shape=m.extend({},t.shape)),e}if(t&&e){var a=r(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=a[t.anid];if(e){var i=o(t);t.attr(o(e)),I.updateProps(t,i,n,t.dataIndex)}}})}},I.clipPointsByRect=function(t,e){return m.map(t,function(t){var n=t[0];n=T(n,e.x),n=A(n,e.x+e.width);var i=t[1];return i=T(i,e.y),i=A(i,e.y+e.height),[n,i]})},I.clipRectByRect=function(t,e){var n=T(t.x,e.x),i=A(t.x+t.width,e.x+e.width),r=T(t.y,e.y),o=A(t.y+t.height,e.y+e.height);if(i>=n&&o>=r)return{x:n,y:r,width:i-n,height:o-r}},t.exports=I},function(t,e,n){function i(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function r(t){return Math.floor(Math.log(t)/Math.LN10)}var o=n(1),a={},s=1e-4;a.linearMap=function(t,e,n,i){var r=e[1]-e[0],o=n[1]-n[0];if(0===r)return 0===o?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*o+n[0]},a.parsePercent=function(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?i(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t},a.round=function(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t},a.asc=function(t){return t.sort(function(t,e){return t-e}),t},a.getPrecision=function(t){if(t=+t,isNaN(t))return 0;for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++;return n},a.getPrecisionSafe=function(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r},a.getPixelPrecision=function(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),o=Math.round(n(Math.abs(e[1]-e[0]))/i),a=Math.min(Math.max(-r+o,0),20);return isFinite(a)?a:20},a.getPercentWithPrecision=function(t,e,n){if(!t[e])return 0;var i=o.reduce(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),a=o.map(t,function(t){return(isNaN(t)?0:t)/i*r*100}),s=100*r,l=o.map(a,function(t){return Math.floor(t)}),u=o.reduce(l,function(t,e){return t+e},0),h=o.map(a,function(t,e){return t-l[e]});u<s;){for(var c=Number.NEGATIVE_INFINITY,d=null,f=0,p=h.length;f<p;++f)h[f]>c&&(c=h[f],d=f);++l[d],h[d]=0,++u}return l[e]/r},a.MAX_SAFE_INTEGER=9007199254740991,a.remRadian=function(t){var e=2*Math.PI;return(t%e+e)%e},a.isRadianAroundZero=function(t){return t>-s&&t<s};var l=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;a.getTimezoneOffset=function(){return(new Date).getTimezoneOffset()},a.parseDate=function(t){if(t instanceof Date)return t;if("string"==typeof t){var e=l.exec(t);if(!e)return new Date(NaN);var n=a.getTimezoneOffset(),i=e[8]?"Z"===e[8].toUpperCase()?n:60*+e[8].slice(0,3)+n:0;return new Date((+e[1]),+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0)-i,+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))},a.quantity=function(t){return Math.pow(10,r(t))},a.nice=function(t,e){var n,i=r(t),o=Math.pow(10,i),a=t/o;return n=e?a<1.5?1:a<2.5?2:a<4?3:a<7?5:10:a<1?1:a<2?2:a<3?3:a<5?5:10,t=n*o,i>=-20?+t.toFixed(i<0?-i:0):t},a.reformIntervals=function(t){function e(t,n,i){return t.interval[i]<n.interval[i]||t.interval[i]===n.interval[i]&&(t.close[i]-n.close[i]===(i?-1:1)||!i&&e(t,n,1))}t.sort(function(t,n){return e(t,n,0)?-1:1});for(var n=-(1/0),i=1,r=0;r<t.length;){for(var o=t[r].interval,a=t[r].close,s=0;s<2;s++)o[s]<=n&&(o[s]=n,a[s]=s?1:1-i),n=o[s],i=a[s];o[0]===o[1]&&a[0]*a[1]!==1?t.splice(r,1):r++}return t},a.isNumeric=function(t){return t-parseFloat(t)>=0},t.exports=a},function(t,e,n){function i(t,e){return t&&t.hasOwnProperty(e)}var r=n(7),o=n(4),a=n(10),s=n(1),l=s.each,u=s.isObject,h={};h.normalizeToArray=function(t){return t instanceof Array?t:null==t?[]:[t]},h.defaultEmphasis=function(t,e){if(t){var n=t.emphasis=t.emphasis||{},i=t.normal=t.normal||{};l(e,function(t){var e=s.retrieve(n[t],i[t]);null!=e&&(n[t]=e)})}},h.LABEL_OPTIONS=["position","offset","show","textStyle","distance","formatter"],h.getDataItemValue=function(t){return t&&(null==t.value?t:t.value)},h.isDataItemOption=function(t){return u(t)&&!(t instanceof Array)},h.converDataValue=function(t,e){var n=e&&e.type;return"ordinal"===n?t:("time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+o.parseDate(t)),null==t||""===t?NaN:+t)},h.createDataFormatModel=function(t,e){var n=new a;return s.mixin(n,h.dataFormatMixin),n.seriesIndex=e.seriesIndex,n.name=e.name||"",n.mainType=e.mainType,n.subType=e.subType,n.getData=function(){return t},n},h.dataFormatMixin={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),o=n.getRawIndex(t),a=n.getName(t,!0),s=n.getRawDataItem(t),l=n.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:a,dataIndex:o,data:s,dataType:e,value:i,color:l,marker:r.getTooltipMarker(l),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,o){e=e||"normal";var a=this.getData(n),s=a.getItemModel(t),l=this.getDataParams(t,n);null!=i&&l.value instanceof Array&&(l.value=l.value[i]);var u=s.get([o||"label",e,"formatter"]);return"function"==typeof u?(l.status=e,u(l)):"string"==typeof u?r.formatTpl(u,l):void 0},getRawValue:function(t,e){var n=this.getData(e),i=n.getRawDataItem(t);if(null!=i)return!u(i)||i instanceof Array?i:i.value},formatTooltip:s.noop},h.mappingToExists=function(t,e){e=(e||[]).slice();var n=s.map(t||[],function(t,e){return{exist:t}});return l(e,function(t,i){if(u(t)){for(var r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var o=n[r].exist;if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||h.isIdInner(t)||h.isIdInner(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),l(e,function(t,e){if(u(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!h.isIdInner(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n},h.makeIdAndName=function(t){var e=s.createHashMap();l(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),l(t,function(t,n){var i=t.option;s.assert(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),!t.keyInfo&&(t.keyInfo={})}),l(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo;if(u(r)){if(o.name=null!=r.name?r.name+"":i?i.name:"\0-",i)o.id=i.id;else if(null!=r.id)o.id=r.id+"";else{var a=0;do o.id="\0"+o.name+"\0"+a++;while(e.get(o.id))}e.set(o.id,t)}})},h.isIdInner=function(t){return u(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")},h.compressBatches=function(t,e){function n(t,e,n){for(var i=0,r=t.length;i<r;i++)for(var o=t[i].seriesId,a=h.normalizeToArray(t[i].dataIndex),s=n&&n[o],l=0,u=a.length;l<u;l++){var c=a[l];s&&s[c]?s[c]=null:(e[o]||(e[o]={}))[c]=1}}function i(t,e){var n=[];for(var r in t)if(t.hasOwnProperty(r)&&null!=t[r])if(e)n.push(+r);else{var o=i(t[r],!0);o.length&&n.push({seriesId:r,dataIndex:o})}return n}var r={},o={};return n(t||[],r),n(e||[],o,r),[i(r),i(o)]},h.queryDataIndex=function(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?s.isArray(e.dataIndex)?s.map(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?s.isArray(e.name)?s.map(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0},h.makeGetter=function(){var t=0;return function(){var e="\0__ec_prop_getter_"+t++;return function(t){return t[e]||(t[e]={})}}}(),h.parseFinder=function(t,e,n){if(s.isString(e)){var r={};r[e+"Index"]=0,e=r}var o=n&&n.defaultMainType;!o||i(e,o+"Index")||i(e,o+"Id")||i(e,o+"Name")||(e[o+"Index"]=0);var a={};return l(e,function(i,r){var i=e[r];if("dataIndex"===r||"dataIndexInside"===r)return void(a[r]=i);var o=r.match(/^(\w+)(Index|Id|Name)$/)||[],l=o[1],u=(o[2]||"").toLowerCase();if(!(!l||!u||null==i||"index"===u&&"none"===i||n&&n.includeMainTypes&&s.indexOf(n.includeMainTypes,l)<0)){var h={mainType:l};"index"===u&&"all"===i||(h[u]=i);var c=t.queryComponents(h);a[l+"Models"]=c,a[l+"Model"]=c[0]}}),a},h.dataDimToCoordDim=function(t,e){var n=t.dimensions;e=t.getDimension(e);for(var i=0;i<n.length;i++){var r=t.getDimensionInfo(n[i]);if(r.name===e)return r.coordDim}},h.coordDimToDataDim=function(t,e){var n=[];return l(t.dimensions,function(i){var r=t.getDimensionInfo(i);r.coordDim===e&&(n[r.coordDimIndex]=r.name)}),n},h.otherDimToDataDim=function(t,e){var n=[];return l(t.dimensions,function(i){var r=t.getDimensionInfo(i),o=r.otherDims,a=o[e];null!=a&&a!==!1&&(n[a]=r.name)}),n},t.exports=h},function(t,e){var n="undefined"==typeof Float32Array?Array:Float32Array,i={create:function(t,e){var i=new n(2);return null==t&&(t=0),null==e&&(e=0),i[0]=t,i[1]=e,i},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t},clone:function(t){var e=new n(2);return e[0]=t[0],e[1]=t[1],e},set:function(t,e,n){return t[0]=e,t[1]=n,t},add:function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t},scaleAndAdd:function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},sub:function(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t},len:function(t){return Math.sqrt(this.lenSquare(t))},lenSquare:function(t){return t[0]*t[0]+t[1]*t[1]},mul:function(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t},div:function(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t},normalize:function(t,e){var n=i.len(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t},distance:function(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))},distanceSquare:function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])},negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:function(t,e,n,i){return t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t},applyTransform:function(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t},min:function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t},max:function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}};i.length=i.len,i.lengthSquare=i.lenSquare,i.dist=i.distance,i.distSquare=i.distanceSquare,t.exports=i},function(t,e,n){var i=n(1),r=n(4),o=n(16),a={};a.addCommas=function(t){return isNaN(t)?"-":(t=(t+"").split("."),t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:""))},a.toCamelCase=function(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t},a.normalizeCssArray=function(t){var e=t.length;return"number"==typeof t?[t,t,t,t]:2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t};var s=a.encodeHTML=function(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},l=["a","b","c","d","e","f","g"],u=function(t,e){return"{"+t+(null==e?"":e)+"}"};a.formatTpl=function(t,e,n){i.isArray(e)||(e=[e]);var r=e.length;if(!r)return"";for(var o=e[0].$vars||[],a=0;a<o.length;a++){var h=l[a],c=u(h,0);t=t.replace(u(h),n?s(c):c)}for(var d=0;d<r;d++)for(var f=0;f<o.length;f++){var c=e[d][o[f]];t=t.replace(u(l[f],d),n?s(c):c)}return t},a.formatTplSimple=function(t,e,n){return i.each(e,function(e,i){t=t.replace("{"+i+"}",n?s(e):e)}),t},a.getTooltipMarker=function(t,e){return t?'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+a.encodeHTML(t)+";"+(e||"")+'"></span>':""};var h=function(t){return t<10?"0"+t:t};a.formatTime=function(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=r.parseDate(e),o=n?"UTC":"",a=i["get"+o+"FullYear"](),s=i["get"+o+"Month"]()+1,l=i["get"+o+"Date"](),u=i["get"+o+"Hours"](),c=i["get"+o+"Minutes"](),d=i["get"+o+"Seconds"]();return t=t.replace("MM",h(s)).toLowerCase().replace("yyyy",a).replace("yy",a%100).replace("dd",h(l)).replace("d",l).replace("hh",h(u)).replace("h",u).replace("mm",h(c)).replace("m",c).replace("ss",h(d)).replace("s",d)},a.capitalFirst=function(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t},a.truncateText=o.truncateText,t.exports=a},function(t,e,n){function i(t){r.call(this,t),this.path=null}var r=n(38),o=n(1),a=n(27),s=n(161),l=n(72),u=l.prototype.getCanvasPattern,h=Math.abs,c=new a((!0));i.prototype={constructor:i,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n=this.style,i=this.path||c,r=n.hasStroke(),o=n.hasFill(),a=n.fill,s=n.stroke,l=o&&!!a.colorStops,h=r&&!!s.colorStops,d=o&&!!a.image,f=r&&!!s.image;if(n.bind(t,this,e),this.setTransform(t),this.__dirty){var p;l&&(p=p||this.getBoundingRect(),this._fillGradient=n.getGradient(t,a,p)),h&&(p=p||this.getBoundingRect(),this._strokeGradient=n.getGradient(t,s,p))}l?t.fillStyle=this._fillGradient:d&&(t.fillStyle=u.call(a,t)),h?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=u.call(s,t));var g=n.lineDash,m=n.lineDashOffset,v=!!t.setLineDash,y=this.getGlobalScale();i.setScale(y[0],y[1]),this.__dirtyPath||g&&!v&&r?(i.beginPath(t),g&&!v&&(i.setLineDash(g),i.setLineDashOffset(m)),this.buildPath(i,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),o&&i.fill(t),g&&v&&(t.setLineDash(g),t.lineDashOffset=m),r&&i.stroke(t),g&&v&&t.setLineDash([]),this.restoreTransform(t),null!=n.text&&this.drawRectText(t,this.getBoundingRect())},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new a},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new a),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var o=e.lineWidth,s=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),s>1e-10&&(r.width+=o/s,r.height+=o/s,r.x-=o/s/2,r.y-=o/s/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var o=this.path.data;if(r.hasStroke()){var a=r.lineWidth,l=r.strokeNoScale?this.getLineScale():1;if(l>1e-10&&(r.hasFill()||(a=Math.max(a,this.strokeContainThreshold)),s.containStroke(o,a/l,t,e)))return!0}if(r.hasFill())return s.contain(o,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):r.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(o.isObject(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&h(t[0]-1)>1e-10&&h(t[3]-1)>1e-10?Math.sqrt(h(t[0]*t[3]-t[2]*t[1])):1}},i.extend=function(t){var e=function(e){i.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var r=this.shape;for(var o in n)!r.hasOwnProperty(o)&&n.hasOwnProperty(o)&&(r[o]=n[o])}t.init&&t.init.call(this,e)};o.inherits(e,i);for(var n in t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},o.inherits(i,r),t.exports=i},function(t,e){function n(t){var e={},n={},i=t.match(/Firefox\/([\d.]+)/),r=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),o=t.match(/Edge\/([\d.]+)/),a=/micromessenger/i.test(t);return i&&(n.firefox=!0,n.version=i[1]),r&&(n.ie=!0,n.version=r[1]),o&&(n.edge=!0,n.version=o[1]),a&&(n.weChat=!0),{browser:n,os:e,node:!1,canvasSupported:!!document.createElement("canvas").getContext,touchEventsSupported:"ontouchstart"in window&&!n.ie&&!n.edge,pointerEventsSupported:"onpointerdown"in window&&(n.edge||n.ie&&n.version>=11)}}var i={};i="undefined"==typeof navigator?{browser:{},os:{},node:!0,canvasSupported:!0}:n(navigator.userAgent),t.exports=i},function(t,e,n){function i(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function r(t,e,n){for(var i=0;i<e.length&&(!e[i]||(t=t&&"object"==typeof t?t[e[i]]:null,null!=t));i++);return null==t&&n&&(t=n.get(e)),t}function o(t,e){var n=s.get(t,"getParent");return n?n.call(t,e):t.parentModel}var a=n(1),s=n(15),l=n(9);i.prototype={constructor:i,init:null,mergeOption:function(t){a.merge(this.option,t,!0)},get:function(t,e){return null==t?this.option:r(this.option,this.parsePath(t),!e&&o(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&o(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,a=null==t?this.option:r(this.option,t=this.parsePath(t));return e=e||(n=o(this,t))&&n.getModel(t),new i(a,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){var t=this.constructor;return new t(a.clone(this.option))},setReadOnly:function(t){s.setReadOnly(this,t)},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){s.set(this,"getParent",t)},isAnimationEnabled:function(){if(!l.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},s.enableClassExtend(i);var u=a.mixin;u(i,n(143)),u(i,n(140)),u(i,n(144)),u(i,n(142)),t.exports=i},function(t,e,n){"use strict";function i(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}var r=n(6),o=n(19),a=r.applyTransform,s=Math.min,l=Math.max;i.prototype={constructor:i,union:function(t){var e=s(t.x,this.x),n=s(t.y,this.y);this.width=l(t.x+t.width,this.x+this.width)-e,
this.height=l(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,a(t,t,r),a(e,e,r),a(n,n,r),a(i,i,r),this.x=s(t[0],e[0],n[0],i[0]),this.y=s(t[1],e[1],n[1],i[1]);var o=l(t[0],e[0],n[0],i[0]),u=l(t[1],e[1],n[1],i[1]);this.width=o-this.x,this.height=u-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=o.create();return o.translate(r,r,[-e.x,-e.y]),o.scale(r,r,[n,i]),o.translate(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof i||(t=i.create(t));var e=this,n=e.x,r=e.x+e.width,o=e.y,a=e.y+e.height,s=t.x,l=t.x+t.width,u=t.y,h=t.y+t.height;return!(r<s||l<n||a<u||h<o)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new i(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},i.create=function(t){return new i(t.x,t.y,t.width,t.height)},t.exports=i},function(t,e,n){"use strict";function i(t,e,n,i,r){var o=0,a=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var h,c,d=l.position,f=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var m=f.width+(g?-g.x+f.x:0);h=o+m,h>i||l.newline?(o=0,h=m,a+=s+n,s=f.height):s=Math.max(s,f.height)}else{var v=f.height+(g?-g.y+f.y:0);c=a+v,c>r||l.newline?(o+=s+n,a=0,c=v,s=f.width):s=Math.max(s,f.width)}l.newline||(d[0]=o,d[1]=a,"horizontal"===t?o=h+n:a=c+n)})}var r=n(1),o=n(11),a=n(4),s=n(7),l=a.parsePercent,u=r.each,h={},c=h.LOCATION_PARAMS=["left","right","top","bottom","width","height"],d=h.HV_NAMES=[["width","left","right"],["height","top","bottom"]];h.box=i,h.vbox=r.curry(i,"vertical"),h.hbox=r.curry(i,"horizontal"),h.getAvailableSize=function(t,e,n){var i=e.width,r=e.height,o=l(t.x,i),a=l(t.y,r),u=l(t.x2,i),h=l(t.y2,r);return(isNaN(o)||isNaN(parseFloat(t.x)))&&(o=0),(isNaN(u)||isNaN(parseFloat(t.x2)))&&(u=i),(isNaN(a)||isNaN(parseFloat(t.y)))&&(a=0),(isNaN(h)||isNaN(parseFloat(t.y2)))&&(h=r),n=s.normalizeCssArray(n||0),{width:Math.max(u-o-n[1]-n[3],0),height:Math.max(h-a-n[0]-n[2],0)}},h.getLayoutRect=function(t,e,n){n=s.normalizeCssArray(n||0);var i=e.width,r=e.height,a=l(t.left,i),u=l(t.top,r),h=l(t.right,i),c=l(t.bottom,r),d=l(t.width,i),f=l(t.height,r),p=n[2]+n[0],g=n[1]+n[3],m=t.aspect;switch(isNaN(d)&&(d=i-h-g-a),isNaN(f)&&(f=r-c-p-u),isNaN(d)&&isNaN(f)&&(m>i/r?d=.8*i:f=.8*r),null!=m&&(isNaN(d)&&(d=m*f),isNaN(f)&&(f=d/m)),isNaN(a)&&(a=i-h-d-g),isNaN(u)&&(u=r-c-f-p),t.left||t.right){case"center":a=i/2-d/2-n[3];break;case"right":a=i-d-g}switch(t.top||t.bottom){case"middle":case"center":u=r/2-f/2-n[0];break;case"bottom":u=r-f-p}a=a||0,u=u||0,isNaN(d)&&(d=i-a-(h||0)),isNaN(f)&&(f=r-u-(c||0));var v=new o(a+n[3],u+n[0],d,f);return v.margin=n,v},h.positionElement=function(t,e,n,i,a){var s=!a||!a.hv||a.hv[0],l=!a||!a.hv||a.hv[1],u=a&&a.boundingMode||"all";if(s||l){var c;if("raw"===u)c="group"===t.type?new o(0,0,+e.width||0,+e.height||0):t.getBoundingRect();else if(c=t.getBoundingRect(),t.needLocalTransform()){var d=t.getLocalTransform();c=c.clone(),c.applyTransform(d)}e=h.getLayoutRect(r.defaults({width:c.width,height:c.height},e),n,i);var f=t.position,p=s?e.x-c.x:0,g=l?e.y-c.y:0;t.attr("position","raw"===u?[p,g]:[f[0]+p,f[1]+g])}},h.sizeCalculable=function(t,e){return null!=t[d[e][0]]||null!=t[d[e][1]]&&null!=t[d[e][2]]},h.mergeLayoutParam=function(t,e,n){function i(n,i){var r={},s=0,h={},c=0,d=2;if(u(n,function(e){h[e]=t[e]}),u(n,function(t){o(e,t)&&(r[t]=h[t]=e[t]),a(r,t)&&s++,a(h,t)&&c++}),l[i])return a(e,n[1])?h[n[2]]=null:a(e,n[2])&&(h[n[1]]=null),h;if(c!==d&&s){if(s>=d)return r;for(var f=0;f<n.length;f++){var p=n[f];if(!o(r,p)&&o(t,p)){r[p]=t[p];break}}return r}return h}function o(t,e){return t.hasOwnProperty(e)}function a(t,e){return null!=t[e]&&"auto"!==t[e]}function s(t,e,n){u(t,function(t){e[t]=n[t]})}!r.isObject(n)&&(n={});var l=n.ignoreSize;!r.isArray(l)&&(l=[l,l]);var h=i(d[0],0),c=i(d[1],1);s(d[0],t,h),s(d[1],t,c)},h.getLayoutParams=function(t){return h.copyLayoutParams({},t)},h.copyLayoutParams=function(t,e){return e&&t&&u(c,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t},t.exports=h},function(t,e,n){function i(t){var e=[];return o.each(h.getClassesByMainType(t),function(t){a.apply(e,t.prototype.dependencies||[])}),o.map(e,function(t){return l.parseClassType(t).main})}var r=n(10),o=n(1),a=Array.prototype.push,s=n(49),l=n(15),u=n(12),h=r.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){r.call(this,t,e,n,i),this.uid=s.getUID("componentModel")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?u.getLayoutParams(t):{},r=e.getTheme();o.merge(t,r.get(this.mainType)),o.merge(t,this.getDefaultOption()),n&&u.mergeLayoutParam(t,i,n)},mergeOption:function(t,e){o.merge(this.option,t,!0);var n=this.layoutMode;n&&u.mergeLayoutParam(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){if(!l.hasOwn(this,"__defaultOption")){for(var t=[],e=this.constructor;e;){var n=e.prototype.defaultOption;n&&t.push(n),e=e.superClass}for(var i={},r=t.length-1;r>=0;r--)i=o.merge(i,t[r],!0);l.set(this,"__defaultOption",i)}return l.get(this,"__defaultOption")},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});l.enableClassManagement(h,{registerWhenExtend:!0}),s.enableSubTypeDefaulter(h),s.enableTopologicalTravel(h,i),o.mixin(h,n(141)),t.exports=h},function(t,e,n){(function(e){function i(t,e){p.each(v.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods}function r(t){this._array=t||[]}function o(t){return p.isArray(t)||(t=[t]),t}function a(t,e){var n=t.dimensions,r=new y(p.map(n,t.getDimensionInfo,t),t.hostModel);i(r,t);for(var o=r._storage={},a=t._storage,s=0;s<n.length;s++){var l=n[s],u=a[l];p.indexOf(e,l)>=0?o[l]=new u.constructor(a[l].length):o[l]=a[l]}return r}var s="undefined",l="undefined"==typeof window?e:window,u=typeof l.Float64Array===s?Array:l.Float64Array,h=typeof l.Int32Array===s?Array:l.Int32Array,c={"float":u,"int":h,ordinal:Array,number:Array,time:Array},d=n(10),f=n(48),p=n(1),g=n(5),m=p.isObject,v=["stackedOn","hasItemOption","_nameList","_idList","_rawData"];r.prototype.pure=!1,r.prototype.count=function(){return this._array.length},r.prototype.getItem=function(t){return this._array[t]};var y=function(t,e){t=t||["x","y"];for(var n={},i=[],r=0;r<t.length;r++){var o,a={};"string"==typeof t[r]?(o=t[r],a={name:o,coordDim:o,coordDimIndex:0,stackable:!1,type:"number"}):(a=t[r],o=a.name,a.type=a.type||"number",a.coordDim||(a.coordDim=o,a.coordDimIndex=0)),a.otherDims=a.otherDims||{},i.push(o),n[o]=a}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this.indices=[],this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this.stackedOn=null,this._visual={},this._layout={},this._itemVisuals=[],this._itemLayouts=[],this._graphicEls=[],this._rawData,this._extent},x=y.prototype;x.type="list",x.hasItemOption=!0,x.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},x.getDimensionInfo=function(t){return p.clone(this._dimensionInfos[this.getDimension(t)])},x.initData=function(t,e,n){t=t||[];var i=p.isArray(t);i&&(t=new r(t)),this._rawData=t;var o,a=this._storage={},s=this.indices=[],l=this.dimensions,u=this._dimensionInfos,h=t.count(),d=[],f={};e=e||[];for(var m=0;m<l.length;m++){var v=u[l[m]];0===v.otherDims.itemName&&(o=m);var y=c[v.type];a[l[m]]=new y(h)}var x=this;n||(x.hasItemOption=!1),n=n||function(t,e,n,i){var r=g.getDataItemValue(t);return g.isDataItemOption(t)&&(x.hasItemOption=!0),g.converDataValue(r instanceof Array?r[i]:r,u[e])};for(var m=0;m<h;m++){for(var _=t.getItem(m),b=0;b<l.length;b++){var w=l[b],M=a[w];M[m]=n(_,w,m,b)}s.push(m)}for(var m=0;m<h;m++){var _=t.getItem(m);!e[m]&&_&&(null!=_.name?e[m]=_.name:null!=o&&(e[m]=a[l[o]][m]));var S=e[m]||"",T=_&&_.id;!T&&S&&(f[S]=f[S]||0,T=S,f[S]>0&&(T+="__ec__"+f[S]),f[S]++),T&&(d[m]=T)}this._nameList=e,this._idList=d},x.count=function(){return this.indices.length},x.get=function(t,e,n){var i=this._storage,r=this.indices[e];if(null==r||!i[t])return NaN;var o=i[t][r];if(n){var a=this._dimensionInfos[t];if(a&&a.stackable)for(var s=this.stackedOn;s;){var l=s.get(t,e);(o>=0&&l>0||o<=0&&l<0)&&(o+=l),s=s.stackedOn}}return o},x.getValues=function(t,e,n){var i=[];p.isArray(t)||(n=e,e=t,t=this.dimensions);for(var r=0,o=t.length;r<o;r++)i.push(this.get(t[r],e,n));return i},x.hasValue=function(t){for(var e=this.dimensions,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},x.getDataExtent=function(t,e,n){t=this.getDimension(t);var i=this._storage[t],r=this.getDimensionInfo(t);e=r&&r.stackable&&e;var o,a=(this._extent||(this._extent={}))[t+!!e];if(a)return a;if(i){for(var s=1/0,l=-(1/0),u=0,h=this.count();u<h;u++)o=this.get(t,u,e),n&&!n(o,t,u)||(o<s&&(s=o),o>l&&(l=o));return this._extent[t+!!e]=[s,l]}return[1/0,-(1/0)]},x.getSum=function(t,e){var n=this._storage[t],i=0;if(n)for(var r=0,o=this.count();r<o;r++){var a=this.get(t,r,e);isNaN(a)||(i+=a)}return i},x.indexOf=function(t,e){var n=this._storage,i=n[t],r=this.indices;if(i)for(var o=0,a=r.length;o<a;o++){var s=r[o];if(i[s]===e)return o}return-1},x.indexOfName=function(t){for(var e=this.indices,n=this._nameList,i=0,r=e.length;i<r;i++){var o=e[i];if(n[o]===t)return i}return-1},x.indexOfRawIndex=function(t){var e=this.indices,n=e[t];if(null!=n&&n===t)return t;for(var i=0,r=e.length-1;i<=r;){var o=(i+r)/2|0;if(e[o]<t)i=o+1;else{if(!(e[o]>t))return o;r=o-1}}return-1},x.indicesOfNearest=function(t,e,n,i){var r=this._storage,o=r[t],a=[];if(!o)return a;null==i&&(i=1/0);for(var s=Number.MAX_VALUE,l=-1,u=0,h=this.count();u<h;u++){var c=e-this.get(t,u,n),d=Math.abs(c);c<=i&&d<=s&&((d<s||c>=0&&l<0)&&(s=d,l=c,a.length=0),a.push(u))}return a},x.getRawIndex=function(t){var e=this.indices[t];return null==e?-1:e},x.getRawDataItem=function(t){return this._rawData.getItem(this.getRawIndex(t))},x.getName=function(t){return this._nameList[this.indices[t]]||""},x.getId=function(t){return this._idList[this.indices[t]]||this.getRawIndex(t)+""},x.each=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),t=p.map(o(t),this.getDimension,this);var r=[],a=t.length,s=this.indices;i=i||this;for(var l=0;l<s.length;l++)switch(a){case 0:e.call(i,l);break;case 1:e.call(i,this.get(t[0],l,n),l);break;case 2:e.call(i,this.get(t[0],l,n),this.get(t[1],l,n),l);break;default:for(var u=0;u<a;u++)r[u]=this.get(t[u],l,n);r[u]=l,e.apply(i,r)}},x.filterSelf=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),t=p.map(o(t),this.getDimension,this);var r=[],a=[],s=t.length,l=this.indices;i=i||this;for(var u=0;u<l.length;u++){var h;if(s)if(1===s)h=e.call(i,this.get(t[0],u,n),u);else{for(var c=0;c<s;c++)a[c]=this.get(t[c],u,n);a[c]=u,h=e.apply(i,a)}else h=e.call(i,u);h&&r.push(l[u])}return this.indices=r,this._extent={},this},x.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]);var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n,i),r},x.map=function(t,e,n,i){t=p.map(o(t),this.getDimension,this);var r=a(this,t),s=r.indices=this.indices,l=r._storage,u=[];return this.each(t,function(){var n=arguments[arguments.length-1],i=e&&e.apply(this,arguments);if(null!=i){"number"==typeof i&&(u[0]=i,i=u);for(var r=0;r<i.length;r++){var o=t[r],a=l[o],h=s[n];a&&(a[h]=i[r])}}},n,i),r},x.downSample=function(t,e,n,i){for(var r=a(this,[t]),o=this._storage,s=r._storage,l=this.indices,u=r.indices=[],h=[],c=[],d=Math.floor(1/e),f=s[t],p=this.count(),g=0;g<o[t].length;g++)s[t][g]=o[t][g];for(var g=0;g<p;g+=d){d>p-g&&(d=p-g,h.length=d);for(var m=0;m<d;m++){var v=l[g+m];h[m]=f[v],c[m]=v}var y=n(h),v=c[i(h,y)||0];f[v]=y,u.push(v)}return r},x.getItemModel=function(t){var e=this.hostModel;return t=this.indices[t],new d(this._rawData.getItem(t),e,e&&e.ecModel)},x.diff=function(t){var e,n=this._idList,i=t&&t._idList,r="e\0\0";return new f(t?t.indices:[],this.indices,function(t){return null!=(e=i[t])?e:r+t},function(t){return null!=(e=n[t])?e:r+t})},x.getVisual=function(t){var e=this._visual;return e&&e[t]},x.setVisual=function(t,e){if(m(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},x.setLayout=function(t,e){if(m(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},x.getLayout=function(t){return this._layout[t]},x.getItemLayout=function(t){return this._itemLayouts[t]},x.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?p.extend(this._itemLayouts[t]||{},e):e},x.clearItemLayouts=function(){this._itemLayouts.length=0},x.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},x.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{};if(this._itemVisuals[t]=i,m(e))for(var r in e)e.hasOwnProperty(r)&&(i[r]=e[r]);else i[e]=n},x.clearAllVisual=function(){this._visual={},this._itemVisuals=[]};var _=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};x.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(_,e)),this._graphicEls[t]=e},x.getItemGraphicEl=function(t){return this._graphicEls[t]},x.eachItemGraphicEl=function(t,e){p.each(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},x.cloneShallow=function(){var t=p.map(this.dimensions,this.getDimensionInfo,this),e=new y(t,this.hostModel);return e._storage=this._storage,i(e,this),e.indices=this.indices.slice(),this._extent&&(e._extent=p.extend({},this._extent)),e},x.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(p.slice(arguments)))})},x.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],x.CHANGABLE_METHODS=["filterSelf"],t.exports=y}).call(e,function(){return this}())},function(t,e,n){function i(t){a.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function r(t,e){var n=a.slice(arguments,2);return this.superClass.prototype[e].apply(t,n)}function o(t,e,n){return this.superClass.prototype[e].apply(t,n)}var a=n(1),s={},l=".",u="___EC__COMPONENT__CONTAINER___",h="\0ec_\0";s.set=function(t,e,n){return t[h+e]=n},s.get=function(t,e){return t[h+e]},s.hasOwn=function(t,e){return t.hasOwnProperty(h+e)};var c=s.parseClassType=function(t){var e={main:"",sub:""};return t&&(t=t.split(l),e.main=t[0]||"",e.sub=t[1]||""),e};s.enableClassExtend=function(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return a.extend(n.prototype,t),n.extend=this.extend,n.superCall=r,n.superApply=o,a.inherits(n,this),n.superClass=e,n}},s.enableClassManagement=function(t,e){function n(t){var e=r[t.main];return e&&e[u]||(e=r[t.main]={},e[u]=!0),e}e=e||{};var r={};if(t.registerClass=function(t,e){if(e)if(i(e),e=c(e),e.sub){if(e.sub!==u){var o=n(e);o[e.sub]=t}}else r[e.main]=t;return t},t.getClass=function(t,e,n){var i=r[t];if(i&&i[u]&&(i=e?i[e]:null),n&&!i)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return i},t.getClassesByMainType=function(t){t=c(t);var e=[],n=r[t.main];return n&&n[u]?a.each(n,function(t,n){n!==u&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=c(t),!!r[t.main]},t.getAllClassMainTypes=function(){var t=[];return a.each(r,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=c(t);var e=r[t.main];return e&&e[u]},t.parseClassType=c,e.registerWhenExtend){var o=t.extend;o&&(t.extend=function(e){var n=o.call(this,e);return t.registerClass(n,e.type)})}return t},s.setReadOnly=function(t,e){},t.exports=s},function(t,e,n){function i(t,e){var n=t+":"+e;if(l[n])return l[n];for(var i=(t+"").split("\n"),r=0,o=0,a=i.length;o<a;o++)r=Math.max(p.measureText(i[o],e).width,r);return u>h&&(u=0,l={}),u++,l[n]=r,r}function r(t,e,n,r){var o=((t||"")+"").split("\n").length,a=i(t,e),s=i("国",e),l=o*s,u=new d(0,0,a,l);switch(u.lineHeight=s,r){case"bottom":case"alphabetic":u.y-=s;break;case"middle":u.y-=s/2}switch(n){case"end":case"right":u.x-=u.width;break;case"center":u.x-=u.width/2}return u}function o(t,e,n,i){var r=e.x,o=e.y,a=e.height,s=e.width,l=n.height,u=n.lineHeight,h=a/2-l/2+u,c="left";switch(t){case"left":r-=i,o+=h,c="right";break;case"right":r+=i+s,o+=h,c="left";break;case"top":r+=s/2,o-=i+l-u,c="center";break;case"bottom":r+=s/2,o+=a+i+u,c="center";break;case"inside":r+=s/2,o+=h,c="center";break;case"insideLeft":r+=i,o+=h,c="left";break;case"insideRight":r+=s-i,o+=h,c="right";break;case"insideTop":r+=s/2,o+=i+u,c="center";break;case"insideBottom":r+=s/2,o+=a-l-i+u,c="center";break;case"insideTopLeft":r+=i,o+=i+u,c="left";break;case"insideTopRight":r+=s-i,o+=i+u,c="right";break;case"insideBottomLeft":r+=i,o+=a-l-i+u;break;case"insideBottomRight":r+=s-i,o+=a-l-i+u,c="right"}return{x:r,y:o,textAlign:c,textBaseline:"alphabetic"}}function a(t,e,n,r,o){if(!e)return"";o=o||{},r=f(r,"...");for(var a=f(o.maxIterations,2),l=f(o.minChar,0),u=i("国",n),h=i("a",n),c=f(o.placeholder,""),d=e=Math.max(0,e-1),p=0;p<l&&d>=h;p++)d-=h;var g=i(r);g>d&&(r="",g=0),d=e-g;for(var m=(t+"").split("\n"),p=0,v=m.length;p<v;p++){var y=m[p],x=i(y,n);if(!(x<=e)){for(var _=0;;_++){if(x<=d||_>=a){y+=r;break}var b=0===_?s(y,d,h,u):x>0?Math.floor(y.length*d/x):0;y=y.substr(0,b),x=i(y,n)}""===y&&(y=c),m[p]=y}}return m.join("\n")}function s(t,e,n,i){for(var r=0,o=0,a=t.length;o<a&&r<e;o++){var s=t.charCodeAt(o);r+=0<=s&&s<=127?n:i}return o}var l={},u=0,h=5e3,c=n(1),d=n(11),f=c.retrieve,p={getWidth:i,getBoundingRect:r,adjustTextPositionOnRect:o,truncateText:a,measureText:function(t,e){var n=c.getContext();return n.font=e||"12px sans-serif",n.measureText(t)}};t.exports=p},function(t,e,n){"use strict";var i=n(1),r=n(7),o=n(15),a=n(5),s=n(13),l=n(62),u=n(9),h=n(12),c=o.set,d=o.get,f=r.encodeHTML,p=r.addCommas,g=s.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.normal.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.mergeDefaultAndTheme(t,n);var r=this.getInitialData(t,n);c(this,"dataBeforeProcessed",r),this.restoreData()},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,r=n?h.getLayoutParams(t):{};i.merge(t,e.getTheme().get(this.subType)),i.merge(t,this.getDefaultOption()),a.defaultEmphasis(t.label,a.LABEL_OPTIONS),this.fillDataTextStyle(t.data),n&&h.mergeLayoutParam(t,r,n)},mergeOption:function(t,e){t=i.merge(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&h.mergeLayoutParam(this.option,t,n);var r=this.getInitialData(t,e);r&&(c(this,"data",r),c(this,"dataBeforeProcessed",r.cloneShallow()))},fillDataTextStyle:function(t){if(t)for(var e=0;e<t.length;e++)t[e]&&t[e].label&&a.defaultEmphasis(t[e].label,a.LABEL_OPTIONS)},getInitialData:function(){},getData:function(t){var e=d(this,"data");return null==t?e:e.getLinkedData(t)},setData:function(t){c(this,"data",t)},getRawData:function(){return d(this,"dataBeforeProcessed")},coordDimToDataDim:function(t){return a.coordDimToDataDim(this.getData(),t)},dataDimToCoordDim:function(t){return a.dataDimToCoordDim(this.getData(),t)},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){function o(n){function o(t,n){var i=s.getDimensionInfo(n);if(i&&i.otherDims.tooltip!==!1){var o=i.type,a=(l?"- "+(i.tooltipName||i.name)+": ":"")+("ordinal"===o?t+"":"time"===o?e?"":r.formatTime("yyyy/MM/dd hh:mm:ss",t):p(t));a&&u.push(f(a))}}var l=i.reduce(n,function(t,e,n){var i=s.getDimensionInfo(n);return t|=i&&i.tooltip!==!1&&null!=i.tooltipName},0),u=[],h=a.otherDimToDataDim(s,"tooltip");return h.length?i.each(h,function(e){o(s.get(e,t),e)}):i.each(n,o),(l?"<br/>":"")+u.join(l?"<br/>":", ")}var s=d(this,"data"),l=this.getRawValue(t),u=i.isArray(l)?o(l):f(p(l)),h=s.getName(t),c=s.getItemVisual(t,"color");i.isObject(c)&&c.colorStops&&(c=(c.colorStops[0]||{}).color),c=c||"transparent";var g=r.getTooltipMarker(c),m=this.name;return"\0-"===m&&(m=""),m=m?f(m)+(e?": ":"<br/>"):"",e?g+m+u:m+g+(h?f(h)+": "+u:u)},isAnimationEnabled:function(){if(u.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){c(this,"data",d(this,"dataBeforeProcessed").cloneShallow())},getColorFromPalette:function(t,e){var n=this.ecModel,i=l.getColorFromPalette.call(this,t,e);return i||(i=n.getColorFromPalette(t,e)),i},getAxisTooltipData:null,getTooltipPosition:null});i.mixin(g,a.dataFormatMixin),i.mixin(g,l),t.exports=g},function(t,e,n){var i=n(149),r=n(43);n(150),n(148);var o=n(34),a=n(4),s=n(1),l=n(16),u={};u.getScaleExtent=function(t,e){var n,i,r,o=t.type,l=e.getMin(),u=e.getMax(),h=null!=l,c=null!=u,d=t.getExtent();return"ordinal"===o?n=(e.get("data")||[]).length:(i=e.get("boundaryGap"),s.isArray(i)||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=a.parsePercent(i[0],1),i[1]=a.parsePercent(i[1],1),r=d[1]-d[0]||Math.abs(d[0])),null==l&&(l="ordinal"===o?n?0:NaN:d[0]-i[0]*r),null==u&&(u="ordinal"===o?n?n-1:NaN:d[1]+i[1]*r),"dataMin"===l&&(l=d[0]),"dataMax"===u&&(u=d[1]),(null==l||!isFinite(l))&&(l=NaN),(null==u||!isFinite(u))&&(u=NaN),t.setBlank(s.eqNaN(l)||s.eqNaN(u)),e.getNeedCrossZero()&&(l>0&&u>0&&!h&&(l=0),l<0&&u<0&&!c&&(u=0)),[l,u]},u.niceScaleExtent=function(t,e){var n=u.getScaleExtent(t,e),i=null!=e.getMin(),r=null!=e.getMax(),o=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase")),t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:o,fixMin:i,fixMax:r,minInterval:"interval"===t.type?e.get("minInterval"):null});var a=e.get("interval");null!=a&&t.setInterval&&t.setInterval(a)},u.createScaleByModel=function(t,e){if(e=e||t.get("type"))switch(e){case"category":return new i(t.getCategories(),[1/0,-(1/0)]);case"value":return new r;default:return(o.getClass(e)||r).create(t)}},u.ifAxisCrossZero=function(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)},u.getAxisLabelInterval=function(t,e,n,i){var r,o=0,a=0,s=1;e.length>40&&(s=Math.floor(e.length/40));for(var u=0;u<t.length;u+=s){var h=t[u],c=l.getBoundingRect(e[u],n,"center","top");c[i?"x":"y"]+=h,c[i?"width":"height"]*=1.3,r?r.intersect(c)?(a++,o=Math.max(o,a)):(r.union(c),a=0):r=c.clone()}return 0===o&&s>1?s:(o+1)*s-1},u.getFormattedLabels=function(t,e){var n=t.scale,i=n.getTicksLabels(),r=n.getTicks();return"string"==typeof e?(e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e),s.map(i,e)):"function"==typeof e?s.map(r,function(n,i){return e(u.getAxisRawValue(t,n),i)},this):i},u.getAxisRawValue=function(t,e){return"category"===t.type?t.scale.getLabel(e):e},t.exports=u},function(t,e){var n="undefined"==typeof Float32Array?Array:Float32Array,i={create:function(){var t=new n(6);return i.identity(t),t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},mul:function(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],o=e[0]*n[2]+e[2]*n[3],a=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t},translate:function(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t},rotate:function(t,e,n){var i=e[0],r=e[2],o=e[4],a=e[1],s=e[3],l=e[5],u=Math.sin(n),h=Math.cos(n);return t[0]=i*h+a*u,t[1]=-i*u+a*h,t[2]=r*h+s*u,t[3]=-r*u+h*s,t[4]=h*o+u*l,t[5]=h*l-u*o,t},scale:function(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t},invert:function(t,e){var n=e[0],i=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=n*a-o*i;return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-a*r)*l,t[5]=(o*r-n*s)*l,t):null}};t.exports=i},function(t,e,n){"use strict";function i(t){return t>-w&&t<w}function r(t){return t>w||t<-w}function o(t,e,n,i,r){var o=1-r;return o*o*(o*t+3*r*e)+r*r*(r*i+3*o*n)}function a(t,e,n,i,r){var o=1-r;return 3*(((e-t)*o+2*(n-e)*r)*o+(i-n)*r*r)}function s(t,e,n,r,o,a){var s=r+3*(e-n)-t,l=3*(n-2*e+t),u=3*(e-t),h=t-o,c=l*l-3*s*u,d=l*u-9*s*h,f=u*u-3*l*h,p=0;if(i(c)&&i(d))if(i(l))a[0]=0;else{var g=-u/l;g>=0&&g<=1&&(a[p++]=g)}else{var m=d*d-4*c*f;if(i(m)){var v=d/c,g=-l/s+v,y=-v/2;g>=0&&g<=1&&(a[p++]=g),y>=0&&y<=1&&(a[p++]=y)}else if(m>0){var x=b(m),w=c*l+1.5*s*(-d+x),M=c*l+1.5*s*(-d-x);w=w<0?-_(-w,T):_(w,T),M=M<0?-_(-M,T):_(M,T);var g=(-l-(w+M))/(3*s);g>=0&&g<=1&&(a[p++]=g)}else{var A=(2*c*l-3*s*d)/(2*b(c*c*c)),I=Math.acos(A)/3,C=b(c),P=Math.cos(I),g=(-l-2*C*P)/(3*s),y=(-l+C*(P+S*Math.sin(I)))/(3*s),D=(-l+C*(P-S*Math.sin(I)))/(3*s);g>=0&&g<=1&&(a[p++]=g),y>=0&&y<=1&&(a[p++]=y),D>=0&&D<=1&&(a[p++]=D)}}return p}function l(t,e,n,o,a){var s=6*n-12*e+6*t,l=9*e+3*o-3*t-9*n,u=3*e-3*t,h=0;if(i(l)){if(r(s)){var c=-u/s;c>=0&&c<=1&&(a[h++]=c)}}else{var d=s*s-4*l*u;if(i(d))a[0]=-s/(2*l);else if(d>0){var f=b(d),c=(-s+f)/(2*l),p=(-s-f)/(2*l);c>=0&&c<=1&&(a[h++]=c),p>=0&&p<=1&&(a[h++]=p)}}return h}function u(t,e,n,i,r,o){var a=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-a)*r+a,h=(l-s)*r+s,c=(h-u)*r+u;o[0]=t,o[1]=a,o[2]=u,o[3]=c,o[4]=c,o[5]=h,o[6]=l,o[7]=i}function h(t,e,n,i,r,a,s,l,u,h,c){var d,f,p,g,m,v=.005,y=1/0;A[0]=u,A[1]=h;for(var _=0;_<1;_+=.05)I[0]=o(t,n,r,s,_),I[1]=o(e,i,a,l,_),g=x(A,I),g<y&&(d=_,y=g);y=1/0;for(var w=0;w<32&&!(v<M);w++)f=d-v,p=d+v,I[0]=o(t,n,r,s,f),I[1]=o(e,i,a,l,f),g=x(I,A),f>=0&&g<y?(d=f,y=g):(C[0]=o(t,n,r,s,p),C[1]=o(e,i,a,l,p),m=x(C,A),p<=1&&m<y?(d=p,y=m):v*=.5);return c&&(c[0]=o(t,n,r,s,d),c[1]=o(e,i,a,l,d)),b(y)}function c(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function d(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function f(t,e,n,o,a){var s=t-2*e+n,l=2*(e-t),u=t-o,h=0;if(i(s)){if(r(l)){var c=-u/l;c>=0&&c<=1&&(a[h++]=c)}}else{var d=l*l-4*s*u;if(i(d)){var c=-l/(2*s);c>=0&&c<=1&&(a[h++]=c)}else if(d>0){var f=b(d),c=(-l+f)/(2*s),p=(-l-f)/(2*s);c>=0&&c<=1&&(a[h++]=c),p>=0&&p<=1&&(a[h++]=p)}}return h}function p(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function g(t,e,n,i,r){var o=(e-t)*i+t,a=(n-e)*i+e,s=(a-o)*i+o;r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=n}function m(t,e,n,i,r,o,a,s,l){var u,h=.005,d=1/0;A[0]=a,A[1]=s;for(var f=0;f<1;f+=.05){I[0]=c(t,n,r,f),I[1]=c(e,i,o,f);var p=x(A,I);p<d&&(u=f,d=p)}d=1/0;for(var g=0;g<32&&!(h<M);g++){var m=u-h,v=u+h;I[0]=c(t,n,r,m),I[1]=c(e,i,o,m);var p=x(I,A);if(m>=0&&p<d)u=m,d=p;else{C[0]=c(t,n,r,v),C[1]=c(e,i,o,v);var y=x(C,A);v<=1&&y<d?(u=v,d=y):h*=.5}}return l&&(l[0]=c(t,n,r,u),l[1]=c(e,i,o,u)),b(d)}var v=n(6),y=v.create,x=v.distSquare,_=Math.pow,b=Math.sqrt,w=1e-8,M=1e-4,S=b(3),T=1/3,A=y(),I=y(),C=y();t.exports={cubicAt:o,cubicDerivativeAt:a,cubicRootAt:s,cubicExtrema:l,cubicSubdivide:u,cubicProjectPoint:h,quadraticAt:c,quadraticDerivativeAt:d,quadraticRootAt:f,quadraticExtremum:p,quadraticSubdivide:g,quadraticProjectPoint:m}},function(t,e,n){"use strict";function i(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function r(t,e,n,i){return n=n||{},i||!h.canvasSupported?o(t,e,n):h.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):o(t,e,n),n}function o(t,e,n){var r=i(t);n.zrX=e.clientX-r.left,n.zrY=e.clientY-r.top}function a(t,e,n){if(e=e||window.event,null!=e.zrX)return e;var i=e.type,o=i&&i.indexOf("touch")>=0;if(o){var a="touchend"!=i?e.targetTouches[0]:e.changedTouches[0];a&&r(t,a,e,n)}else r(t,e,e,n),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;return e}function s(t,e,n){c?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function l(t,e,n){c?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}var u=n(23),h=n(9),c="undefined"!=typeof window&&!!window.addEventListener,d=c?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0};t.exports={clientToLocal:r,normalizeEvent:a,addEventListener:s,removeEventListener:l,stop:d,Dispatcher:u}},function(t,e,n){function i(t){return t=Math.round(t),t<0?0:t>255?255:t}function r(t){return t=Math.round(t),t<0?0:t>360?360:t}function o(t){return t<0?0:t>1?1:t}function a(t){return i(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function s(t){return o(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function l(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function u(t,e,n){return t+(e-t)*n}function h(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function c(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function d(t,e){A&&c(A,e),A=T.put(t,A||e.slice())}function f(t,e){if(t){e=e||[];var n=T.get(t);if(n)return c(e,n);t+="";var i=t.replace(/ /g,"").toLowerCase();if(i in S)return c(e,S[i]),d(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),o=i.indexOf(")");if(r!==-1&&o+1===i.length){var l=i.substr(0,r),u=i.substr(r+1,o-(r+1)).split(","),f=1;switch(l){case"rgba":if(4!==u.length)return void h(e,0,0,0,1);f=s(u.pop());case"rgb":return 3!==u.length?void h(e,0,0,0,1):(h(e,a(u[0]),a(u[1]),a(u[2]),f),d(t,e),e);case"hsla":return 4!==u.length?void h(e,0,0,0,1):(u[3]=s(u[3]),p(u,e),d(t,e),e);case"hsl":return 3!==u.length?void h(e,0,0,0,1):(p(u,e),d(t,e),e);default:return}}h(e,0,0,0,1)}else{if(4===i.length){var g=parseInt(i.substr(1),16);return g>=0&&g<=4095?(h(e,(3840&g)>>4|(3840&g)>>8,240&g|(240&g)>>4,15&g|(15&g)<<4,1),d(t,e),e):void h(e,0,0,0,1)}if(7===i.length){var g=parseInt(i.substr(1),16);return g>=0&&g<=16777215?(h(e,(16711680&g)>>16,(65280&g)>>8,255&g,1),d(t,e),e):void h(e,0,0,0,1)}}}}function p(t,e){var n=(parseFloat(t[0])%360+360)%360/360,r=s(t[1]),o=s(t[2]),a=o<=.5?o*(r+1):o+r-o*r,u=2*o-a;return e=e||[],h(e,i(255*l(u,a,n+1/3)),i(255*l(u,a,n)),i(255*l(u,a,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function g(t){if(t){var e,n,i=t[0]/255,r=t[1]/255,o=t[2]/255,a=Math.min(i,r,o),s=Math.max(i,r,o),l=s-a,u=(s+a)/2;if(0===l)e=0,n=0;else{n=u<.5?l/(s+a):l/(2-s-a);var h=((s-i)/6+l/2)/l,c=((s-r)/6+l/2)/l,d=((s-o)/6+l/2)/l;i===s?e=d-c:r===s?e=1/3+h-d:o===s&&(e=2/3+c-h),e<0&&(e+=1),e>1&&(e-=1)}var f=[360*e,n,u];return null!=t[3]&&f.push(t[3]),f}}function m(t,e){var n=f(t);if(n){for(var i=0;i<3;i++)e<0?n[i]=n[i]*(1-e)|0:n[i]=(255-n[i])*e+n[i]|0;return w(n,4===n.length?"rgba":"rgb")}}function v(t,e){var n=f(t);if(n)return((1<<24)+(n[0]<<16)+(n[1]<<8)+ +n[2]).toString(16).slice(1)}function y(t,e,n){if(e&&e.length&&t>=0&&t<=1){n=n||[];var r=t*(e.length-1),a=Math.floor(r),s=Math.ceil(r),l=e[a],h=e[s],c=r-a;return n[0]=i(u(l[0],h[0],c)),n[1]=i(u(l[1],h[1],c)),n[2]=i(u(l[2],h[2],c)),n[3]=o(u(l[3],h[3],c)),n}}function x(t,e,n){if(e&&e.length&&t>=0&&t<=1){var r=t*(e.length-1),a=Math.floor(r),s=Math.ceil(r),l=f(e[a]),h=f(e[s]),c=r-a,d=w([i(u(l[0],h[0],c)),i(u(l[1],h[1],c)),i(u(l[2],h[2],c)),o(u(l[3],h[3],c))],"rgba");return n?{color:d,leftIndex:a,rightIndex:s,value:r}:d}}function _(t,e,n,i){if(t=f(t))return t=g(t),null!=e&&(t[0]=r(e)),null!=n&&(t[1]=s(n)),null!=i&&(t[2]=s(i)),w(p(t),"rgba")}function b(t,e){if(t=f(t),t&&null!=e)return t[3]=o(e),w(t,"rgba")}function w(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}var M=n(70),S={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],
aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},T=new M(20),A=null;t.exports={parse:f,lift:m,toHex:v,fastMapToColor:y,mapToColor:x,modifyHSL:_,modifyAlpha:b,stringify:w}},function(t,e){var n=Array.prototype.slice,i=function(){this._$handlers={}};i.prototype={constructor:i,one:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,o=n[t].length;r<o;r++)n[t][r].h!=e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,i=e.length;i>3&&(e=n.call(e,1));for(var r=this._$handlers[t],o=r.length,a=0;a<o;){switch(i){case 1:r[a].h.call(r[a].ctx);break;case 2:r[a].h.call(r[a].ctx,e[1]);break;case 3:r[a].h.call(r[a].ctx,e[1],e[2]);break;default:r[a].h.apply(r[a].ctx,e)}r[a].one?(r.splice(a,1),o--):a++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,i=e.length;i>4&&(e=n.call(e,1,e.length-1));for(var r=e[e.length-1],o=this._$handlers[t],a=o.length,s=0;s<a;){switch(i){case 1:o[s].h.call(r);break;case 2:o[s].h.call(r,e[1]);break;case 3:o[s].h.call(r,e[1],e[2]);break;default:o[s].h.apply(r,e)}o[s].one?(o.splice(s,1),a--):s++}}return this}},t.exports=i},function(t,e,n){"use strict";var i=n(3),r=n(11),o=i.extendShape({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i+o),t.lineTo(n-r,i+o),t.closePath()}}),a=i.extendShape({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i),t.lineTo(n,i+o),t.lineTo(n-r,i),t.closePath()}}),s=i.extendShape({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=i-o+a+s,u=Math.asin(s/a),h=Math.cos(u)*a,c=Math.sin(u),d=Math.cos(u);t.arc(n,l,a,Math.PI-u,2*Math.PI+u);var f=.6*a,p=.7*a;t.bezierCurveTo(n+h-c*f,l+s+d*f,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-h+c*f,l+s+d*f,n-h,l+s),t.closePath()}}),l=i.extendShape({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,o=e.y,a=i/3*2;t.moveTo(r,o),t.lineTo(r+a,o+n),t.lineTo(r,o+n/4*3),t.lineTo(r-a,o+n),t.lineTo(r,o),t.closePath()}}),u={line:i.Line,rect:i.Rect,roundRect:i.Rect,square:i.Rect,circle:i.Circle,diamond:a,pin:s,arrow:l,triangle:o},h={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var o=Math.min(n,i);r.x=t,r.y=e,r.width=o,r.height=o},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},c={};for(var d in u)u.hasOwnProperty(d)&&(c[d]=new u[d]);var f=i.extendShape({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style,e=this.shape;"pin"===e.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=c[i];"none"!==e.symbolType&&(r||(i="rect",r=c[i]),h[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),p=function(t){if("image"!==this.type){var e=this.style,n=this.shape;n&&"line"===n.symbolType?e.stroke=t:this.__isEmptyBrush?(e.stroke=t,e.fill="#fff"):(e.fill&&(e.fill=t),e.stroke&&(e.stroke=t)),this.dirty(!1)}},g={createSymbol:function(t,e,n,o,a,s){var l=0===t.indexOf("empty");l&&(t=t.substr(5,1).toLowerCase()+t.substr(6));var u;return u=0===t.indexOf("image://")?new i.Image({style:{image:t.slice(8),x:e,y:n,width:o,height:a}}):0===t.indexOf("path://")?i.makePath(t.slice(7),{},new r(e,n,o,a)):new f({shape:{symbolType:t,x:e,y:n,width:o,height:a}}),u.__isEmptyBrush=l,u.setColor=p,u.setColor(s),u}};t.exports=g},function(t,e,n){function i(t,e,n){function i(t,e,n){c[e]?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,m.set(e,!0))}function a(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}e=e||[],n=n||{},t=(t||[]).slice();var f=(n.dimsDef||[]).slice(),p=o.createHashMap(n.encodeDef),g=o.createHashMap(),m=o.createHashMap(),v=[],y=n.dimCount;if(null==y){var x=r(e[0]);y=Math.max(o.isArray(x)&&x.length||1,t.length,f.length),s(t,function(t){var e=t.dimsDef;e&&(y=Math.max(y,e.length))})}for(var _=0;_<y;_++){var b=l(f[_])?{name:f[_]}:f[_]||{},w=b.name,M=v[_]={otherDims:{}};null!=w&&null==g.get(w)&&(M.name=M.tooltipName=w,g.set(w,_)),null!=b.type&&(M.type=b.type)}p.each(function(t,e){t=p.set(e,h(t).slice()),s(t,function(n,r){l(n)&&(n=g.get(n)),null!=n&&n<y&&(t[r]=n,i(v[n],e,r))})});var S=0;s(t,function(t,e){var n,t,r,a;l(t)?(n=t,t={}):(n=t.name,t=o.clone(t),r=t.dimsDef,a=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null);var c=h(p.get(n));if(!c.length)for(var d=0;d<(r&&r.length||1);d++){for(;S<v.length&&null!=v[S].coordDim;)S++;S<v.length&&c.push(S++)}s(c,function(e,o){var s=v[e];i(u(s,t),n,o),null==s.name&&r&&(s.name=s.tooltipName=r[o]),a&&u(s.otherDims,a)})});for(var T=n.extraPrefix||"value",A=0;A<y;A++){var M=v[A]=v[A]||{},I=M.coordDim;null==I&&(M.coordDim=a(T,m,n.extraFromZero),M.coordDimIndex=0,M.isExtraCoord=!0),null==M.name&&(M.name=a(M.coordDim,g)),null==M.type&&d(e,A)&&(M.type="ordinal")}return v}function r(t){return o.isArray(t)?t:o.isObject(t)?t.value:t}var o=n(1),a=n(5),s=o.each,l=o.isString,u=o.defaults,h=a.normalizeToArray,c={tooltip:1,label:1,itemName:1},d=i.guessOrdinal=function(t,e){for(var n=0,i=t.length;n<i;n++){var a=r(t[n]);if(!o.isArray(a))return!1;var a=a[e];if(null!=a&&isFinite(a))return!1;if(l(a)&&"-"!==a)return!0}return!1};t.exports=i},function(t,e,n){"use strict";function i(){this._coordinateSystems=[]}var r=n(1),o={};i.prototype={constructor:i,create:function(t,e){var n=[];r.each(o,function(i,r){var o=i.create(t,e);n=n.concat(o||[])}),this._coordinateSystems=n},update:function(t,e){r.each(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},i.register=function(t,e){o[t]=e},i.get=function(t){return o[t]},t.exports=i},function(t,e,n){"use strict";var i=n(20),r=n(6),o=n(85),a=n(11),s=n(35).devicePixelRatio,l={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},u=[],h=[],c=[],d=[],f=Math.min,p=Math.max,g=Math.cos,m=Math.sin,v=Math.sqrt,y=Math.abs,x="undefined"!=typeof Float32Array,_=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};_.prototype={constructor:_,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=y(1/s/t)||0,this._uy=y(1/s/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(l.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=y(t-this._xi)>this._ux||y(e-this._yi)>this._uy||this._len<5;return this.addData(l.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,o){return this.addData(l.C,t,e,n,i,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,o):this._ctx.bezierCurveTo(t,e,n,i,r,o)),this._xi=r,this._yi=o,this},quadraticCurveTo:function(t,e,n,i){return this.addData(l.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,o){return this.addData(l.A,t,e,n,n,i,r-i,0,o?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,o),this._xi=g(r)*n+t,this._yi=m(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(l.R,t,e,n,i),this},closePath:function(){this.addData(l.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!x||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();x&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n));for(var r=0;r<e;r++)for(var o=t[r].data,a=0;a<o.length;a++)this.data[i++]=o[a];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,o=this._dashOffset,a=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,d=v(h*h+c*c),g=l,m=u,y=a.length;for(h/=d,c/=d,o<0&&(o=r+o),o%=r,g-=o*h,m-=o*c;h>0&&g<=t||h<0&&g>=t||0==h&&(c>0&&m<=e||c<0&&m>=e);)i=this._dashIdx,n=a[i],g+=h*n,m+=c*n,this._dashIdx=(i+1)%y,h>0&&g<l||h<0&&g>l||c>0&&m<u||c<0&&m>u||s[i%2?"moveTo":"lineTo"](h>=0?f(g,t):p(g,t),c>=0?f(m,e):p(m,e));h=g-t,c=m-e,this._dashOffset=-v(h*h+c*c)},_dashedBezierTo:function(t,e,n,r,o,a){var s,l,u,h,c,d=this._dashSum,f=this._dashOffset,p=this._lineDash,g=this._ctx,m=this._xi,y=this._yi,x=i.cubicAt,_=0,b=this._dashIdx,w=p.length,M=0;for(f<0&&(f=d+f),f%=d,s=0;s<1;s+=.1)l=x(m,t,n,o,s+.1)-x(m,t,n,o,s),u=x(y,e,r,a,s+.1)-x(y,e,r,a,s),_+=v(l*l+u*u);for(;b<w&&(M+=p[b],!(M>f));b++);for(s=(M-f)/_;s<=1;)h=x(m,t,n,o,s),c=x(y,e,r,a,s),b%2?g.moveTo(h,c):g.lineTo(h,c),s+=p[b]/_,b=(b+1)%w;b%2!==0&&g.lineTo(o,a),l=o-h,u=a-c,this._dashOffset=-v(l*l+u*u)},_dashedQuadraticTo:function(t,e,n,i){var r=n,o=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,o)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,x&&(this.data=new Float32Array(t)))},getBoundingRect:function(){u[0]=u[1]=c[0]=c[1]=Number.MAX_VALUE,h[0]=h[1]=d[0]=d[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,s=0,f=0;f<t.length;){var p=t[f++];switch(1==f&&(e=t[f],n=t[f+1],i=e,s=n),p){case l.M:i=t[f++],s=t[f++],e=i,n=s,c[0]=i,c[1]=s,d[0]=i,d[1]=s;break;case l.L:o.fromLine(e,n,t[f],t[f+1],c,d),e=t[f++],n=t[f++];break;case l.C:o.fromCubic(e,n,t[f++],t[f++],t[f++],t[f++],t[f],t[f+1],c,d),e=t[f++],n=t[f++];break;case l.Q:o.fromQuadratic(e,n,t[f++],t[f++],t[f],t[f+1],c,d),e=t[f++],n=t[f++];break;case l.A:var v=t[f++],y=t[f++],x=t[f++],_=t[f++],b=t[f++],w=t[f++]+b,M=(t[f++],1-t[f++]);1==f&&(i=g(b)*x+v,s=m(b)*_+y),o.fromArc(v,y,x,_,b,w,M,c,d),e=g(w)*x+v,n=m(w)*_+y;break;case l.R:i=e=t[f++],s=n=t[f++];var S=t[f++],T=t[f++];o.fromLine(i,s,i+S,s+T,c,d);break;case l.Z:e=i,n=s}r.min(u,u,c),r.max(h,h,d)}return 0===f&&(u[0]=u[1]=h[0]=h[1]=0),new a(u[0],u[1],h[0]-u[0],h[1]-u[1])},rebuildPath:function(t){for(var e,n,i,r,o,a,s=this.data,u=this._ux,h=this._uy,c=this._len,d=0;d<c;){var f=s[d++];switch(1==d&&(i=s[d],r=s[d+1],e=i,n=r),f){case l.M:e=i=s[d++],n=r=s[d++],t.moveTo(i,r);break;case l.L:o=s[d++],a=s[d++],(y(o-i)>u||y(a-r)>h||d===c-1)&&(t.lineTo(o,a),i=o,r=a);break;case l.C:t.bezierCurveTo(s[d++],s[d++],s[d++],s[d++],s[d++],s[d++]),i=s[d-2],r=s[d-1];break;case l.Q:t.quadraticCurveTo(s[d++],s[d++],s[d++],s[d++]),i=s[d-2],r=s[d-1];break;case l.A:var p=s[d++],v=s[d++],x=s[d++],_=s[d++],b=s[d++],w=s[d++],M=s[d++],S=s[d++],T=x>_?x:_,A=x>_?1:x/_,I=x>_?_/x:1,C=Math.abs(x-_)>.001,P=b+w;C?(t.translate(p,v),t.rotate(M),t.scale(A,I),t.arc(0,0,T,b,P,1-S),t.scale(1/A,1/I),t.rotate(-M),t.translate(-p,-v)):t.arc(p,v,T,b,P,1-S),1==d&&(e=g(b)*x+p,n=m(b)*_+v),i=g(P)*x+p,r=m(P)*_+v;break;case l.R:e=i=s[d],n=r=s[d+1],t.rect(s[d++],s[d++],s[d++],s[d++]);break;case l.Z:t.closePath(),i=e,r=n}}}},_.CMD=l,t.exports=_},function(t,e,n){"use strict";function i(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function r(t){var e=i(t);return null!=e&&!c.isArray(p(e))}function o(t,e,n){t=t||[];var i=e.get("coordinateSystem"),o=m[i],a=f.get(i),s={encodeDef:e.get("encode"),dimsDef:e.get("dimensions")},v=o&&o(t,e,n,s),y=v&&v.dimensions;y||(y=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"],y=h(y,t,s));var x=v?v.categoryIndex:-1,_=new u(y,e),b=l(v,t),w={},M=x>=0&&r(t)?function(t,e,n,i){return d.isDataItemOption(t)&&(_.hasItemOption=!0),i===x?n:g(p(t),y[i])}:function(t,e,n,i){var r=p(t),o=g(r&&r[i],y[i]);d.isDataItemOption(t)&&(_.hasItemOption=!0);var a=v&&v.categoryAxesModels;return a&&a[e]&&"string"==typeof o&&(w[e]=w[e]||a[e].getCategories(),o=c.indexOf(w[e],o),o<0&&!isNaN(o)&&(o=+o)),o};return _.hasItemOption=!1,_.initData(t,b,M),_}function a(t){return"category"!==t&&"time"!==t}function s(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function l(t,e){var n,i=[],r=t&&t.dimensions[t.categoryIndex];if(r&&(n=t.categoryAxesModels[r.name]),n){var o=n.getCategories();if(o){var a=e.length;if(c.isArray(e[0])&&e[0].length>1){i=[];for(var s=0;s<a;s++)i[s]=o[e[s][t.categoryIndex||0]]}else i=o.slice(0)}}return i}var u=n(14),h=n(25),c=n(1),d=n(5),f=n(26),p=d.getDataItemValue,g=d.converDataValue,m={cartesian2d:function(t,e,n,i){var r=c.map(["xAxis","yAxis"],function(t){return n.queryComponents({mainType:t,index:e.get(t+"Index"),id:e.get(t+"Id")})[0]}),o=r[0],l=r[1],u=o.get("type"),d=l.get("type"),f=[{name:"x",type:s(u),stackable:a(u)},{name:"y",type:s(d),stackable:a(d)}],p="category"===u,g="category"===d;f=h(f,t,i);var m={};return p&&(m.x=o),g&&(m.y=l),{dimensions:f,categoryIndex:p?0:g?1:-1,categoryAxesModels:m}},singleAxis:function(t,e,n,i){var r=n.queryComponents({mainType:"singleAxis",index:e.get("singleAxisIndex"),id:e.get("singleAxisId")})[0],o=r.get("type"),l="category"===o,u=[{name:"single",type:s(o),stackable:a(o)}];u=h(u,t,i);var c={};return l&&(c.single=r),{dimensions:u,categoryIndex:l?0:-1,categoryAxesModels:c}},polar:function(t,e,n,i){var r=n.queryComponents({mainType:"polar",index:e.get("polarIndex"),id:e.get("polarId")})[0],o=r.findAxisModel("angleAxis"),l=r.findAxisModel("radiusAxis"),u=l.get("type"),c=o.get("type"),d=[{name:"radius",type:s(u),stackable:a(u)},{name:"angle",type:s(c),stackable:a(c)}],f="category"===c,p="category"===u;d=h(d,t,i);var g={};return p&&(g.radius=l),f&&(g.angle=o),{dimensions:d,categoryIndex:f?1:p?0:-1,categoryAxesModels:g}},geo:function(t,e,n,i){return{dimensions:h([{name:"lng"},{name:"lat"}],t,i)}}};t.exports=o},function(t,e){"use strict";var n={};t.exports={register:function(t,e){n[t]=e},get:function(t){return n[t]}}},function(t,e,n){function i(){this.group=new a,this.uid=s.getUID("viewChart")}function r(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)r(t.childAt(n),e)}function o(t,e,n){var i=u.queryDataIndex(t,e);null!=i?h.each(u.normalizeToArray(i),function(e){r(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){r(t,n)})}var a=n(36),s=n(49),l=n(15),u=n(5),h=n(1);i.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){o(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){o(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){}};var c=i.prototype;c.updateView=c.updateLayout=c.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},l.enableClassExtend(i,["dispose"]),l.enableClassManagement(i,{registerWhenExtend:!0}),t.exports=i},function(t,e,n){var i=n(1);t.exports=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n){for(var r={},o=0;o<t.length;o++){var a=t[o][1];if(!(e&&i.indexOf(e,a)>=0||n&&i.indexOf(n,a)<0)){var s=this.getShallow(a);null!=s&&(r[t[o][0]]=s)}}return r}}},function(t,e,n){"use strict";var i=n(3),r=n(1),o=n(2);n(57),n(117),o.extendComponentView({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new i.Rect({shape:t.coordinateSystem.getRect(),style:r.defaults({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),o.registerPreprocessor(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})})},function(t,e,n){function i(t,e){var n=t[1]-t[0],i=e,r=n/i/2;t[0]+=r,t[1]-=r}var r=n(4),o=r.linearMap,a=n(1),s=n(18),l=[0,1],u=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1,this._labelInterval};u.prototype={constructor:u,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return r.getPixelPrecision(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,r=this.scale;return t=r.normalize(t),this.onBand&&"ordinal"===r.type&&(n=n.slice(),i(n,r.count())),o(t,l,n,e)},coordToData:function(t,e){var n=this._extent,r=this.scale;this.onBand&&"ordinal"===r.type&&(n=n.slice(),i(n,r.count()));var a=o(t,n,l,e);return this.scale.scale(a)},pointToData:function(t,e){},getTicksCoords:function(t){if(this.onBand&&!t){for(var e=this.getBands(),n=[],i=0;i<e.length;i++)n.push(e[i][0]);return e[i-1]&&n.push(e[i-1][1]),n}return a.map(this.scale.getTicks(),this.dataToCoord,this)},getLabelsCoords:function(){return a.map(this.scale.getTicks(),this.dataToCoord,this)},getBands:function(){for(var t=this.getExtent(),e=[],n=this.scale.count(),i=t[0],r=t[1],o=r-i,a=0;a<n;a++)e.push([o*a/n+i,o*(a+1)/n+i]);return e},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},getLabelInterval:function(){var t=this._labelInterval;if(!t){var e=this.model,n=e.getModel("axisLabel"),i=n.get("interval");"category"!==this.type||"auto"!==i?t="auto"===i?0:i:this.isHorizontal&&(t=s.getAxisLabelInterval(a.map(this.scale.getTicks(),this.dataToCoord,this),e.getFormattedLabels(),n.getModel("textStyle").getFont(),this.isHorizontal())),this._labelInterval=t}return t}},t.exports=u},function(t,e,n){function i(t){this._setting=t||{},this._extent=[1/0,-(1/0)],this._interval=0,this.init&&this.init.apply(this,arguments)}var r=n(15),o=i.prototype;o.parse=function(t){return t},o.getSetting=function(t){return this._setting[t]},o.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},o.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},o.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},o.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},o.unionExtentFromData=function(t,e){this.unionExtent(t.getDataExtent(e,!0))},o.getExtent=function(){return this._extent.slice()},o.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},o.getTicksLabels=function(){for(var t=[],e=this.getTicks(),n=0;n<e.length;n++)t.push(this.getLabel(e[n]));return t},o.isBlank=function(){return this._isBlank},o.setBlank=function(t){this._isBlank=t},r.enableClassExtend(i),r.enableClassManagement(i,{registerWhenExtend:!0}),t.exports=i},function(t,e){var n=1;"undefined"!=typeof window&&(n=Math.max(window.devicePixelRatio||1,1));var i={debugMode:0,devicePixelRatio:n};t.exports=i},function(t,e,n){var i=n(1),r=n(66),o=n(11),a=function(t){t=t||{},r.call(this,t);for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};a.prototype={constructor:a,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof a&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,r=this._children,o=i.indexOf(r,t);return o<0?this:(r.splice(o,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof a&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof a&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof a&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof a&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new o(0,0,0,0),i=t||this._children,r=[],a=0;a<i.length;a++){var s=i[a];if(!s.ignore&&!s.invisible){var l=s.getBoundingRect(),u=s.getLocalTransform(r);u?(n.copy(l),n.applyTransform(u),e=e||n.clone(),e.union(n)):(e=e||l.clone(),e.union(l))}}return e||n}},i.inherits(a,r),t.exports=a},function(t,e){var n={},i="\0__throttleOriginMethod",r="\0__throttleRate",o="\0__throttleType";n.throttle=function(t,e,n){function i(){h=(new Date).getTime(),c=null,t.apply(a,s||[])}var r,o,a,s,l,u=0,h=0,c=null;e=e||0;var d=function(){r=(new Date).getTime(),a=this,s=arguments;var t=l||e,d=l||n;l=null,o=r-(d?u:h)-t,clearTimeout(c),d?c=setTimeout(i,t):o>=0?i():c=setTimeout(i,-o),u=r};return d.clear=function(){c&&(clearTimeout(c),c=null)},d.debounceNextCall=function(t){l=t},d},n.createOrUpdate=function(t,e,a,s){var l=t[e];if(l){var u=l[i]||l,h=l[o],c=l[r];if(c!==a||h!==s){if(null==a||!s)return t[e]=u;l=t[e]=n.throttle(u,a,"debounce"===s),l[i]=u,l[o]=s,l[r]=a}return l}},n.clear=function(t,e){var n=t[e];n&&n[i]&&(t[e]=n[i])},t.exports=n},function(t,e,n){function i(t){t=t||{},a.call(this,t);for(var e in t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new o(t.style),this._rect=null,this.__clipPaths=[]}var r=n(1),o=n(73),a=n(66),s=n(87);i.prototype={constructor:i,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:-1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect();return i.contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?a.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new o(t),this.dirty(!1),this}},r.inherits(i,a),r.mixin(i,s),t.exports=i},function(t,e){var n=function(t){this.colorStops=t||[]};n.prototype={constructor:n,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}},t.exports=n},function(t,e,n){function i(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function r(t,e,n,i){var r,o,a=f(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return p(a-x/2)?(o=l?"bottom":"top",r="center"):p(a-1.5*x)?(o=l?"top":"bottom",r="center"):(o="middle",r=a<1.5*x&&a>x/2?l?"left":"right":l?"right":"left"),{rotation:a,textAlign:r,textVerticalAlign:o}}function o(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function a(t,e){var n=t.get("axisLabel.showMinLabel"),i=t.get("axisLabel.showMaxLabel"),r=e[0],o=e[1],a=e[e.length-1],l=e[e.length-2];n===!1?r.ignore=!0:null!=t.getMin()&&s(r,o)&&(n?o.ignore=!0:r.ignore=!0),i===!1?a.ignore=!0:null!=t.getMax()&&s(l,a)&&(i?l.ignore=!0:a.ignore=!0)}function s(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone();if(i&&r){var o=m.identity([]);return m.rotate(o,o,-t.rotation),i.applyTransform(m.mul([],o,t.getLocalTransform())),r.applyTransform(m.mul([],o,e.getLocalTransform())),i.intersect(r)}}var l=n(1),u=n(7),h=n(3),c=n(10),d=n(4),f=d.remRadian,p=d.isRadianAroundZero,g=n(6),m=n(19),v=g.applyTransform,y=l.retrieve,x=Math.PI,_=function(t,e){this.opt=e,this.axisModel=t,l.defaults(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new h.Group;var n=new h.Group({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};_.prototype={constructor:_,hasBuilder:function(t){return!!b[t]},add:function(t){b[t].call(this)},getGroup:function(){return this.group}};var b={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],o=[n[1],0];i&&(v(r,r,i),v(o,o,i)),this.group.add(new h.Line(h.subPixelOptimizeLine({anid:"line",shape:{x1:r[0],y1:r[1],x2:o[0],y2:o[1]},style:l.extend({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle()),strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})))}},axisTick:function(){var t=this.axisModel,e=t.axis;if(t.get("axisTick.show")&&!e.scale.isBlank())for(var n=t.getModel("axisTick"),i=this.opt,r=n.getModel("lineStyle"),o=n.get("length"),a=S(n,i.labelInterval),s=e.getTicksCoords(n.get("alignWithLabel")),u=e.scale.getTicks(),c=[],d=[],f=this._transform,p=0;p<s.length;p++)if(!M(e,p,a)){var g=s[p];c[0]=g,c[1]=0,d[0]=g,d[1]=i.tickDirection*o,f&&(v(c,c,f),v(d,d,f)),this.group.add(new h.Line(h.subPixelOptimizeLine({anid:"tick_"+u[p],shape:{x1:c[0],y1:c[1],x2:d[0],y2:d[1]},style:l.defaults(r.getLineStyle(),{stroke:t.get("axisLine.lineStyle.color")}),z2:2,silent:!0})))}},axisLabel:function(){var t=this.opt,e=this.axisModel,n=e.axis,r=y(t.axisLabelShow,e.get("axisLabel.show"));if(r&&!n.scale.isBlank()){var s=e.getModel("axisLabel"),u=s.getModel("textStyle"),d=s.get("margin"),f=n.scale.getTicks(),p=e.getFormattedLabels(),g=(y(t.labelRotate,s.get("rotate"))||0)*x/180,m=w(t.rotation,g,t.labelDirection),v=e.get("data"),_=[],b=o(e),S=e.get("triggerEvent");l.each(f,function(r,o){if(!M(n,o,t.labelInterval)){var a=u;v&&v[r]&&v[r].textStyle&&(a=new c(v[r].textStyle,u,e.ecModel));var s=a.getTextColor()||e.get("axisLine.lineStyle.color"),l=n.dataToCoord(r),f=[l,t.labelOffset+t.labelDirection*d],g=n.scale.getLabel(r),y=new h.Text({anid:"label_"+r,style:{text:p[o],textAlign:a.get("align",!0)||m.textAlign,textVerticalAlign:a.get("baseline",!0)||m.textVerticalAlign,textFont:a.getFont(),fill:"function"==typeof s?s("category"===n.type?g:"value"===n.type?r+"":r,o):s
},position:f,rotation:m.rotation,silent:b,z2:10});S&&(y.eventData=i(e),y.eventData.targetType="axisLabel",y.eventData.value=g),this._dumbGroup.add(y),y.updateTransform(),_.push(y),this.group.add(y),y.decomposeTransform()}},this),a(e,_)}},axisName:function(){var t=this.opt,e=this.axisModel,n=y(t.axisName,e.get("name"));if(n){var a,s=e.get("nameLocation"),c=t.nameDirection,d=e.getModel("nameTextStyle"),f=e.get("nameGap")||0,p=this.axisModel.axis.getExtent(),g=p[0]>p[1]?-1:1,m=["start"===s?p[0]-g*f:"end"===s?p[1]+g*f:(p[0]+p[1])/2,"middle"===s?t.labelOffset+c*f:0],v=e.get("nameRotate");null!=v&&(v=v*x/180);var _;"middle"===s?a=w(t.rotation,null!=v?v:t.rotation,c):(a=r(t,s,v||0,p),_=t.axisNameAvailableWidth,null!=_&&(_=Math.abs(_/Math.sin(a.rotation)),!isFinite(_)&&(_=null)));var b=d.getFont(),M=e.get("nameTruncate",!0)||{},S=M.ellipsis,T=y(t.nameTruncateMaxWidth,M.maxWidth,_),A=null!=S&&null!=T?u.truncateText(n,T,b,S,{minChar:2,placeholder:M.placeholder}):n,I=e.get("tooltip",!0),C=e.mainType,P={componentType:C,name:n,$vars:["name"]};P[C+"Index"]=e.componentIndex;var D=new h.Text({anid:"name",__fullText:n,__truncatedText:A,style:{text:A,textFont:b,fill:d.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:a.textAlign,textVerticalAlign:a.textVerticalAlign},position:m,rotation:a.rotation,silent:o(e),z2:1,tooltip:I&&I.show?l.extend({content:n,formatter:function(){return n},formatterParams:P},I):null});e.get("triggerEvent")&&(D.eventData=i(e),D.eventData.targetType="axisName",D.eventData.name=n),this._dumbGroup.add(D),D.updateTransform(),this.group.add(D),D.decomposeTransform()}}},w=_.innerTextLayout=function(t,e,n){var i,r,o=f(e-t);return p(o)?(r=n>0?"top":"bottom",i="center"):p(o-x)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=o>0&&o<x?n>0?"right":"left":n>0?"left":"right"),{rotation:o,textAlign:i,textVerticalAlign:r}},M=_.ifIgnoreOnTick=function(t,e,n){var i,r=t.scale;return"ordinal"===r.type&&("function"==typeof n?(i=r.getTicks()[e],!n(i,r.getLabel(i))):e%(n+1))},S=_.getInterval=function(t,e){var n=t.get("interval");return null!=n&&"auto"!=n||(n=e),n};t.exports=_},function(t,e,n){function i(t,e,n,i,s,l){var u=a.getAxisPointerClass(t.axisPointerClass);if(u){var h=o.getAxisPointerModel(e);h?(t._axisPointer||(t._axisPointer=new u)).render(e,h,i,l):r(t,i)}}function r(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}var o=n(45),a=n(2).extendComponentView({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,r){this.axisPointerClass&&o.fixValue(t),a.superApply(this,"render",arguments),i(this,t,e,n,r,!0)},updateAxisPointer:function(t,e,n,r,o){i(this,t,e,n,r,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),a.superApply(this,"remove",arguments)},dispose:function(t,e){r(this,e),a.superApply(this,"dispose",arguments)}}),s=[];a.registerAxisPointerClass=function(t,e){s[t]=e},a.getAxisPointerClass=function(t){return t&&s[t]},t.exports=a},function(t,e,n){function i(t){return r.isObject(t)&&null!=t.value?t.value:t+""}var r=n(1),o=n(18);t.exports={getFormattedLabels:function(){return o.getFormattedLabels(this.axis,this.get("axisLabel.formatter"))},getCategories:function(){return"category"===this.get("type")&&r.map(this.get("data"),i)},getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&!r.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&!r.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:r.noop,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}}},function(t,e,n){var i=n(4),r=n(7),o=n(34),a=n(64),s=i.round,l=o.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),l.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=a.getIntervalPrecision(t)},getTicks:function(){return a.intervalScaleGetTicks(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getTicksLabels:function(){for(var t=[],e=this.getTicks(),n=0;n<e.length;n++)t.push(this.getLabel(e[n]));return t},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=i.getPrecisionSafe(t)||0:"auto"===n&&(n=this._intervalPrecision),t=s(t,n,!0),r.addCommas(t)},niceTicks:function(t,e){t=t||5;var n=this._extent,i=n[1]-n[0];if(isFinite(i)){i<0&&(i=-i,n.reverse());var r=a.intervalScaleNiceTicks(n,t,e);this._intervalPrecision=r.intervalPrecision,this._interval=r.interval,this._niceExtent=r.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval);var r=this._interval;t.fixMin||(e[0]=s(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=s(Math.ceil(e[1]/r)*r))}});l.create=function(){return new l},t.exports=l},function(t,e,n){function i(t){this.group=new o.Group,this._symbolCtor=t||a}function r(t,e,n){var i=t.getItemLayout(e);return i&&!isNaN(i[0])&&!isNaN(i[1])&&!(n&&n(e))&&"none"!==t.getItemVisual(e,"symbol")}var o=n(3),a=n(54),s=i.prototype;s.updateData=function(t,e){var n=this.group,i=t.hostModel,a=this._data,s=this._symbolCtor,l={itemStyle:i.getModel("itemStyle.normal").getItemStyle(["color"]),hoverItemStyle:i.getModel("itemStyle.emphasis").getItemStyle(),symbolRotate:i.get("symbolRotate"),symbolOffset:i.get("symbolOffset"),hoverAnimation:i.get("hoverAnimation"),labelModel:i.getModel("label.normal"),hoverLabelModel:i.getModel("label.emphasis"),cursorStyle:i.get("cursor")};t.diff(a).add(function(i){var o=t.getItemLayout(i);if(r(t,i,e)){var a=new s(t,i,l);a.attr("position",o),t.setItemGraphicEl(i,a),n.add(a)}}).update(function(u,h){var c=a.getItemGraphicEl(h),d=t.getItemLayout(u);return r(t,u,e)?(c?(c.updateData(t,u,l),o.updateProps(c,{position:d},i)):(c=new s(t,u),c.attr("position",d)),n.add(c),void t.setItemGraphicEl(u,c)):void n.remove(c)}).remove(function(t){var e=a.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},s.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},s.remove=function(t){var e=this.group,n=this._data;n&&(t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll())},t.exports=i},function(t,e,n){function i(t,e,n){var i=e.getComponent("tooltip"),o=e.getComponent("axisPointer"),s=o.get("link",!0)||[],u=[];c(n.getCoordinateSystems(),function(n){function h(i,h,c){var d=c.model.getModel("axisPointer",o),f=d.get("show");if(f&&("auto"!==f||i||l(d))){null==h&&(h=d.get("triggerTooltip")),d=i?r(c,v,o,e,i,h):d;var m=d.get("snap"),y=p(c.model),x=h||m||"category"===c.type,_=t.axesInfo[y]={key:y,axis:c,coordSys:n,axisPointerModel:d,triggerTooltip:h,involveSeries:x,snap:m,useHandle:l(d),seriesModels:[]};g[y]=_,t.seriesInvolved|=x;var b=a(s,c);if(null!=b){var w=u[b]||(u[b]={axesInfo:{}});w.axesInfo[y]=_,w.mapper=s[b].mapper,_.linkGroup=w}}}if(n.axisPointerEnabled){var f=p(n.model),g=t.coordSysAxesInfo[f]={};t.coordSysMap[f]=n;var m=n.model,v=m.getModel("tooltip",i);if(c(n.getAxes(),d(h,!1,null)),n.getTooltipAxes&&i&&v.get("show")){var y="axis"===v.get("trigger"),x="cross"===v.get("axisPointer.type"),_=n.getTooltipAxes(v.get("axisPointer.axis"));(y||x)&&c(_.baseAxes,d(h,!x||"cross",y)),x&&c(_.otherAxes,d(h,"cross",!1))}}})}function r(t,e,n,i,r,o){var a=e.getModel("axisPointer"),s={};c(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){s[t]=u.clone(a.get(t))}),s.snap="category"!==t.type&&!!o,"cross"===a.get("type")&&(s.type="line");var l=s.label||(s.label={});if(null==l.show&&(l.show=!1),"cross"===r&&(l.show=!0,!o)){var d=s.lineStyle=a.get("crossStyle");d&&u.defaults(l.textStyle||(l.textStyle={}),d.textStyle)}return t.model.getModel("axisPointer",new h(s,n,i))}function o(t,e){e.eachSeries(function(e){var n=e.coordinateSystem,i=e.get("tooltip.trigger",!0),r=e.get("tooltip.show",!0);n&&"none"!==i&&i!==!1&&"item"!==i&&r!==!1&&e.get("axisPointer.show",!0)!==!1&&c(t.coordSysAxesInfo[p(n.model)],function(t){var i=t.axis;n.getAxis(i.dim)===i&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())})},this)}function a(t,e){for(var n=e.model,i=e.dim,r=0;r<t.length;r++){var o=t[r]||{};if(s(o[i+"AxisId"],n.id)||s(o[i+"AxisIndex"],n.componentIndex)||s(o[i+"AxisName"],n.name))return r}}function s(t,e){return"all"===t||u.isArray(t)&&u.indexOf(t,e)>=0||t===e}function l(t){return!!t.get("handle.show")}var u=n(1),h=n(10),c=u.each,d=u.curry,f={};f.collect=function(t,e){var n={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}};return i(n,t,e),n.seriesInvolved&&o(n,t),n},f.fixValue=function(t){var e=f.getAxisInfo(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,o=n.get("status"),a=n.get("value");null!=a&&(a=i.parse(a));var s=l(n);null==o&&(r.status=s?"show":"hide");var u=i.getExtent().slice();u[0]>u[1]&&u.reverse(),(null==a||a>u[1])&&(a=u[1]),a<u[0]&&(a=u[0]),r.value=a,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}},f.getAxisInfo=function(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[p(t)]},f.getAxisPointerModel=function(t){var e=f.getAxisInfo(t);return e&&e.axisPointerModel};var p=f.makeKey=function(t){return t.type+"||"+t.id};t.exports=f},function(t,e,n){function i(t){var e={};return c(["start","end","startValue","endValue","throttle"],function(n){t.hasOwnProperty(n)&&(e[n]=t[n])}),e}function r(t,e){c([["start","startValue"],["end","endValue"]],function(n,i){var r=t._rangePropMode;null!=e[n[0]]?r[i]="percent":null!=e[n[1]]&&(r[i]="value")})}var o=n(1),a=n(9),s=n(2),l=n(5),u=n(77),h=n(198),c=o.each,d=u.eachAxisDim,f=s.extendComponentModel({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis","singleAxis","series"],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,filterMode:"filter",throttle:null,start:0,end:100,startValue:null,endValue:null,minSpan:null,maxSpan:null,minValueSpan:null,maxValueSpan:null},init:function(t,e,n){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this.textStyleModel,this._autoThrottle=!0,this._rangePropMode=["percent","percent"];var r=i(t);this.mergeDefaultAndTheme(t,n),this.doInit(r)},mergeOption:function(t){var e=i(t);o.merge(this.option,t,!0),this.doInit(e)},doInit:function(t){var e=this.option;a.canvasSupported||(e.realtime=!1),this._setDefaultThrottle(t),r(this,t),c([["start","startValue"],["end","endValue"]],function(t,n){"value"===this._rangePropMode[n]&&(e[t[0]]=null)},this),this.textStyleModel=this.getModel("textStyle"),this._resetTarget(),this._giveAxisProxies()},_giveAxisProxies:function(){var t=this._axisProxies;this.eachTargetAxis(function(e,n,i,r){var o=this.dependentModels[e.axis][n],a=o.__dzAxisProxy||(o.__dzAxisProxy=new h(e.name,n,this,r));t[e.name+"_"+n]=a},this)},_resetTarget:function(){var t=this.option,e=this._judgeAutoMode();d(function(e){var n=e.axisIndex;t[n]=l.normalizeToArray(t[n])},this),"axisIndex"===e?this._autoSetAxisIndex():"orient"===e&&this._autoSetOrient()},_judgeAutoMode:function(){var t=this.option,e=!1;d(function(n){null!=t[n.axisIndex]&&(e=!0)},this);var n=t.orient;return null==n&&e?"orient":e?void 0:(null==n&&(t.orient="horizontal"),"axisIndex")},_autoSetAxisIndex:function(){var t=!0,e=this.get("orient",!0),n=this.option,i=this.dependentModels;if(t){var r="vertical"===e?"y":"x";i[r+"Axis"].length?(n[r+"AxisIndex"]=[0],t=!1):c(i.singleAxis,function(i){t&&i.get("orient",!0)===e&&(n.singleAxisIndex=[i.componentIndex],t=!1)})}t&&d(function(e){if(t){var i=[],r=this.dependentModels[e.axis];if(r.length&&!i.length)for(var o=0,a=r.length;o<a;o++)"category"===r[o].get("type")&&i.push(o);n[e.axisIndex]=i,i.length&&(t=!1)}},this),t&&this.ecModel.eachSeries(function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&d(function(e){var i=n[e.axisIndex],r=t.get(e.axisIndex),a=t.get(e.axisId),s=t.ecModel.queryComponents({mainType:e.axis,index:r,id:a})[0];r=s.componentIndex,o.indexOf(i,r)<0&&i.push(r)})},this)},_autoSetOrient:function(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name)},this),this.option.orient="y"===t?"vertical":"horizontal"},_isSeriesHasAllAxesTypeOf:function(t,e){var n=!0;return d(function(i){var r=t.get(i.axisIndex),o=this.dependentModels[i.axis][r];o&&o.get("type")===e||(n=!1)},this),n},_setDefaultThrottle:function(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option;this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20}},getFirstTargetAxisModel:function(){var t;return d(function(e){if(null==t){var n=this.get(e.axisIndex);n.length&&(t=this.dependentModels[e.axis][n[0]])}},this),t},eachTargetAxis:function(t,e){var n=this.ecModel;d(function(i){c(this.get(i.axisIndex),function(r){t.call(e,i,r,this,n)},this)},this)},getAxisProxy:function(t,e){return this._axisProxies[t+"_"+e]},getAxisModel:function(t,e){var n=this.getAxisProxy(t,e);return n&&n.getAxisModel()},setRawRange:function(t,e){c(["start","end","startValue","endValue"],function(e){this.option[e]=t[e]},this),!e&&r(this,t)},getPercentRange:function(){var t=this.findRepresentativeAxisProxy();if(t)return t.getDataPercentWindow()},getValueRange:function(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var n=this.findRepresentativeAxisProxy();return n?n.getDataValueWindow():void 0},findRepresentativeAxisProxy:function(t){if(t)return t.__dzAxisProxy;var e=this._axisProxies;for(var n in e)if(e.hasOwnProperty(n)&&e[n].hostedBy(this))return e[n];for(var n in e)if(e.hasOwnProperty(n)&&!e[n].hostedBy(this))return e[n]},getRangePropMode:function(){return this._rangePropMode.slice()}});t.exports=f},function(t,e,n){var i=n(65);t.exports=i.extend({type:"dataZoom",render:function(t,e,n,i){this.dataZoomModel=t,this.ecModel=e,this.api=n},getTargetCoordInfo:function(){function t(t,e,n,i){for(var r,o=0;o<n.length;o++)if(n[o].model===t){r=n[o];break}r||n.push(r={model:t,axisModels:[],coordIndex:i}),r.axisModels.push(e)}var e=this.dataZoomModel,n=this.ecModel,i={};return e.eachTargetAxis(function(e,r){var o=n.getComponent(e.axis,r);if(o){var a=o.getCoordSysModel();a&&t(a,o,i[a.mainType]||(i[a.mainType]=[]),a.componentIndex)}},this),i}})},function(t,e){"use strict";function n(t){return t}function i(t,e,i,r){this._old=t,this._new=e,this._oldKeyGetter=i||n,this._newKeyGetter=r||n}function r(t,e,n,i){for(var r=0;r<t.length;r++){var o="_ec_"+i(t[r],r),a=e[o];null==a?(n.push(o),e[o]=r):(a.length||(e[o]=a=[a]),a.push(r))}}i.prototype={constructor:i,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t,e=this._old,n=this._new,i=this._oldKeyGetter,o=this._newKeyGetter,a={},s={},l=[],u=[];for(r(e,a,l,i),r(n,s,u,o),t=0;t<e.length;t++){var h=l[t],c=s[h];if(null!=c){var d=c.length;d?(1===d&&(s[h]=null),c=c.unshift()):s[h]=null,this._update&&this._update(c,t)}else this._remove&&this._remove(t)}for(var t=0;t<u.length;t++){var h=u[t];if(s.hasOwnProperty(h)){var c=s[h];if(null==c)continue;if(c.length)for(var f=0,d=c.length;f<d;f++)this._add&&this._add(c[f]);else this._add&&this._add(c)}}}},t.exports=i},function(t,e,n){var i=n(1),r=n(15),o=r.parseClassType,a=0,s={},l="_";s.getUID=function(t){return[t||"",a++,Math.random()].join(l)},s.enableSubTypeDefaulter=function(t){var e={};return t.registerSubTypeDefaulter=function(t,n){t=o(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var a=o(n).main;t.hasSubTypes(n)&&e[a]&&(r=e[a](i))}return r},t},s.enableTopologicalTravel=function(t,e){function n(t){var n={},a=[];return i.each(t,function(s){var l=r(n,s),u=l.originalDeps=e(s),h=o(u,t);l.entryCount=h.length,0===l.entryCount&&a.push(s),i.each(h,function(t){i.indexOf(l.predecessor,t)<0&&l.predecessor.push(t);var e=r(n,t);i.indexOf(e.successor,t)<0&&e.successor.push(s)})}),{graph:n,noEntryList:a}}function r(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function o(t,e){var n=[];return i.each(t,function(t){i.indexOf(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,r,o){function a(t){u[t].entryCount--,0===u[t].entryCount&&h.push(t)}function s(t){c[t]=!0,a(t)}if(t.length){var l=n(e),u=l.graph,h=l.noEntryList,c={};for(i.each(t,function(t){c[t]=!0});h.length;){var d=h.pop(),f=u[d],p=!!c[d];p&&(r.call(o,d,f.originalDeps.slice()),delete c[d]),i.each(f.successor,p?s:a)}i.each(c,function(){throw new Error("Circle dependency may exists")})}}},t.exports=s},function(t,e){t.exports=function(t,e,n,i,r){i.eachRawSeriesByType(t,function(t){var r=t.getData(),o=t.get("symbol")||e,a=t.get("symbolSize");r.setVisual({legendSymbol:n||o,symbol:o,symbolSize:a}),i.isSeriesFiltered(t)||("function"==typeof a&&r.each(function(e){var n=t.getRawValue(e),i=t.getDataParams(e);r.setItemVisual(e,"symbolSize",a(n,i))}),r.each(function(t){var e=r.getItemModel(t),n=e.getShallow("symbol",!0),i=e.getShallow("symbolSize",!0);null!=n&&r.setItemVisual(t,"symbol",n),null!=i&&r.setItemVisual(t,"symbolSize",i)}))})}},function(t,e){function n(t){for(var e=0;t>=h;)e|=1&t,t>>=1;return t+e}function i(t,e,n,i){var o=e+1;if(o===n)return 1;if(i(t[o++],t[e])<0){for(;o<n&&i(t[o],t[o-1])<0;)o++;r(t,e,o)}else for(;o<n&&i(t[o],t[o-1])>=0;)o++;return o-e}function r(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}function o(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var o,a=t[i],s=e,l=i;s<l;)o=s+l>>>1,r(a,t[o])<0?l=o:s=o+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=a}}function a(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])>0){for(s=i-r;l<s&&o(t,e[n+r+l])>0;)a=l,l=(l<<1)+1,l<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}else{for(s=r+1;l<s&&o(t,e[n+r-l])<=0;)a=l,l=(l<<1)+1,l<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}for(a++;a<l;){var h=a+(l-a>>>1);o(t,e[n+h])>0?a=h+1:l=h}return l}function s(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])<0){for(s=r+1;l<s&&o(t,e[n+r-l])<0;)a=l,l=(l<<1)+1,l<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}else{for(s=i-r;l<s&&o(t,e[n+r+l])>=0;)a=l,l=(l<<1)+1,l<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}for(a++;a<l;){var h=a+(l-a>>>1);o(t,e[n+h])<0?l=h:a=h+1}return l}function l(t,e){function n(t,e){h[y]=t,f[y]=e,y+=1}function i(){for(;y>1;){var t=y-2;if(t>=1&&f[t-1]<=f[t]+f[t+1]||t>=2&&f[t-2]<=f[t]+f[t-1])f[t-1]<f[t+1]&&t--;else if(f[t]>f[t+1])break;o(t)}}function r(){for(;y>1;){var t=y-2;t>0&&f[t-1]<f[t+1]&&t--,o(t)}}function o(n){var i=h[n],r=f[n],o=h[n+1],c=f[n+1];f[n]=r+c,n===y-3&&(h[n+1]=h[n+2],f[n+1]=f[n+2]),y--;var d=s(t[o],t,i,r,0,e);i+=d,r-=d,0!==r&&(c=a(t[i+r-1],t,o,c,c-1,e),0!==c&&(r<=c?l(i,r,o,c):u(i,r,o,c)))}function l(n,i,r,o){var l=0;for(l=0;l<i;l++)x[l]=t[n+l];var u=0,h=r,d=n;if(t[d++]=t[h++],0!==--o){if(1===i){for(l=0;l<o;l++)t[d+l]=t[h+l];return void(t[d+o]=x[u])}for(var f,g,m,v=p;;){f=0,g=0,m=!1;do if(e(t[h],x[u])<0){if(t[d++]=t[h++],g++,f=0,0===--o){m=!0;break}}else if(t[d++]=x[u++],f++,g=0,1===--i){m=!0;break}while((f|g)<v);if(m)break;do{if(f=s(t[h],x,u,i,0,e),0!==f){for(l=0;l<f;l++)t[d+l]=x[u+l];if(d+=f,u+=f,i-=f,i<=1){m=!0;break}}if(t[d++]=t[h++],0===--o){m=!0;break}if(g=a(x[u],t,h,o,0,e),0!==g){for(l=0;l<g;l++)t[d+l]=t[h+l];if(d+=g,h+=g,o-=g,0===o){m=!0;break}}if(t[d++]=x[u++],1===--i){m=!0;break}v--}while(f>=c||g>=c);if(m)break;v<0&&(v=0),v+=2}if(p=v,p<1&&(p=1),1===i){for(l=0;l<o;l++)t[d+l]=t[h+l];t[d+o]=x[u]}else{if(0===i)throw new Error;for(l=0;l<i;l++)t[d+l]=x[u+l]}}else for(l=0;l<i;l++)t[d+l]=x[u+l]}function u(n,i,r,o){var l=0;for(l=0;l<o;l++)x[l]=t[r+l];var u=n+i-1,h=o-1,d=r+o-1,f=0,g=0;if(t[d--]=t[u--],0!==--i){if(1===o){for(d-=i,u-=i,g=d+1,f=u+1,l=i-1;l>=0;l--)t[g+l]=t[f+l];return void(t[d]=x[h])}for(var m=p;;){var v=0,y=0,_=!1;do if(e(x[h],t[u])<0){if(t[d--]=t[u--],v++,y=0,0===--i){_=!0;break}}else if(t[d--]=x[h--],y++,v=0,1===--o){_=!0;break}while((v|y)<m);if(_)break;do{if(v=i-s(x[h],t,n,i,i-1,e),0!==v){for(d-=v,u-=v,i-=v,g=d+1,f=u+1,l=v-1;l>=0;l--)t[g+l]=t[f+l];if(0===i){_=!0;break}}if(t[d--]=x[h--],1===--o){_=!0;break}if(y=o-a(t[u],x,0,o,o-1,e),0!==y){for(d-=y,h-=y,o-=y,g=d+1,f=h+1,l=0;l<y;l++)t[g+l]=x[f+l];if(o<=1){_=!0;break}}if(t[d--]=t[u--],0===--i){_=!0;break}m--}while(v>=c||y>=c);if(_)break;m<0&&(m=0),m+=2}if(p=m,p<1&&(p=1),1===o){for(d-=i,u-=i,g=d+1,f=u+1,l=i-1;l>=0;l--)t[g+l]=t[f+l];t[d]=x[h]}else{if(0===o)throw new Error;for(f=d-(o-1),l=0;l<o;l++)t[f+l]=x[l]}}else for(f=d-(o-1),l=0;l<o;l++)t[f+l]=x[l]}var h,f,p=c,g=0,m=d,v=0,y=0;g=t.length,g<2*d&&(m=g>>>1);var x=[];v=g<120?5:g<1542?10:g<119151?19:40,h=[],f=[],this.mergeRuns=i,this.forceMergeRuns=r,this.pushRun=n}function u(t,e,r,a){r||(r=0),a||(a=t.length);var s=a-r;if(!(s<2)){var u=0;if(s<h)return u=i(t,r,a,e),void o(t,r,a,r+u,e);var c=new l(t,e),d=n(s);do{if(u=i(t,r,a,e),u<d){var f=s;f>d&&(f=d),o(t,r,r+f,r+u,e),u=f}c.pushRun(r,u),c.mergeRuns(),s-=u,r+=u}while(0!==s);c.forceMergeRuns()}}var h=32,c=7,d=256;t.exports=u},function(t,e,n){var i=n(35);t.exports=function(){if(0!==i.debugMode)if(1==i.debugMode)for(var t in arguments)throw new Error(arguments[t]);else if(i.debugMode>1)for(var t in arguments)console.log(arguments[t])}},function(t,e,n){function i(t){r.call(this,t)}var r=n(38),o=n(11),a=n(1),s=n(70),l=new s(50);i.prototype={constructor:i,type:"image",brush:function(t,e){var n,i=this.style,r=i.image;if(i.bind(t,this,e),n="string"==typeof r?this._image:r,!n&&r){var o=l.get(r);if(!o)return n=new Image,n.onload=function(){n.onload=null;for(var t=0;t<o.pending.length;t++)o.pending[t].dirty()},o={image:n,pending:[this]},n.src=r,l.put(r,o),void(this._image=n);if(n=o.image,this._image=n,!n.width||!n.height)return void o.pending.push(this)}if(n){var a=i.x||0,s=i.y||0;if(!n.width||!n.height)return;var u=i.width,h=i.height,c=n.width/n.height;if(null==u&&null!=h?u=h*c:null==h&&null!=u?h=u/c:null==u&&null==h&&(u=n.width,h=n.height),this.setTransform(t),i.sWidth&&i.sHeight){var d=i.sx||0,f=i.sy||0;t.drawImage(n,d,f,i.sWidth,i.sHeight,a,s,u,h)}else if(i.sx&&i.sy){var d=i.sx,f=i.sy,p=u-d,g=h-f;t.drawImage(n,d,f,p,g,a,s,u,h)}else t.drawImage(n,a,s,u,h);this.restoreTransform(t),null!=i.text&&this.drawRectText(t,this.getBoundingRect())}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new o(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},a.inherits(i,r),t.exports=i},function(t,e,n){function i(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]}function r(t){return[t[0]/2,t[1]/2]}function o(t,e,n){u.Group.call(this),this.updateData(t,e,n)}function a(t,e){this.parent.drift(t,e)}var s=n(1),l=n(24),u=n(3),h=n(4),c=n(92),d=o.prototype;d._createSymbol=function(t,e,n,i){this.removeAll();var o=e.hostModel,s=e.getItemVisual(n,"color"),h=l.createSymbol(t,-1,-1,2,2,s);h.attr({z2:100,culling:!0,scale:[0,0]}),h.drift=a,u.initProps(h,{scale:r(i)},o,n),this._symbolType=t,this.add(h)},d.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},d.getSymbolPath=function(){return this.childAt(0)},d.getScale=function(){return this.childAt(0).scale},d.highlight=function(){this.childAt(0).trigger("emphasis")},d.downplay=function(){this.childAt(0).trigger("normal")},d.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},d.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},d.updateData=function(t,e,n){this.silent=!1;var o=t.getItemVisual(e,"symbol")||"circle",a=t.hostModel,s=i(t,e);if(o!==this._symbolType)this._createSymbol(o,t,e,s);else{var l=this.childAt(0);l.silent=!1,u.updateProps(l,{scale:r(s)},a,e)}this._updateCommon(t,e,s,n),this._seriesModel=a};var f=["itemStyle","normal"],p=["itemStyle","emphasis"],g=["label","normal"],m=["label","emphasis"];d._updateCommon=function(t,e,n,i){var o=this.childAt(0),a=t.hostModel,l=t.getItemVisual(e,"color");"image"!==o.type&&o.useStyle({strokeNoScale:!0}),i=i||null;var d=i&&i.itemStyle,v=i&&i.hoverItemStyle,y=i&&i.symbolRotate,x=i&&i.symbolOffset,_=i&&i.labelModel,b=i&&i.hoverLabelModel,w=i&&i.hoverAnimation,M=i&&i.cursorStyle;if(!i||t.hasItemOption){var S=t.getItemModel(e);d=S.getModel(f).getItemStyle(["color"]),v=S.getModel(p).getItemStyle(),y=S.getShallow("symbolRotate"),x=S.getShallow("symbolOffset"),_=S.getModel(g),b=S.getModel(m),w=S.getShallow("hoverAnimation"),M=S.getShallow("cursor")}else v=s.extend({},v);var T=o.style;o.attr("rotation",(y||0)*Math.PI/180||0),x&&o.attr("position",[h.parsePercent(x[0],n[0]),h.parsePercent(x[1],n[1])]),M&&o.attr("cursor",M),o.setColor(l),o.setStyle(d);var A=t.getItemVisual(e,"opacity");null!=A&&(T.opacity=A);var I=c.findLabelValueDim(t);c.setTextToStyle(t,e,I,T,a,_,l),c.setTextToStyle(t,e,I,v,a,b,l),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),o.hoverStyle=v,u.setHoverStyle(o);var C=r(n);if(w&&a.isAnimationEnabled()){var P=function(){var t=C[1]/C[0];this.animateTo({scale:[Math.max(1.1*C[0],C[0]+3),Math.max(1.1*C[1],C[1]+3*t)]},400,"elasticOut")},D=function(){this.animateTo({scale:C},400,"elasticOut")};o.on("mouseover",P).on("mouseout",D).on("emphasis",P).on("normal",D)}},d.fadeOut=function(t){var e=this.childAt(0);this.silent=e.silent=!0,e.style.text="",u.updateProps(e,{scale:[0,0]},this._seriesModel,this.dataIndex,t)},s.inherits(o,u.Group),t.exports=o},function(t,e,n){var i=n(2),r=n(45),o=n(196),a=n(1);n(194),n(195),n(120),i.registerPreprocessor(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={});var e=t.axisPointer.link;e&&!a.isArray(e)&&(t.axisPointer.link=[e])}}),i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=r.collect(t,e)}),i.registerAction({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},o)},function(t,e){function n(t,e){var n=t[e]-t[1-e];return{span:Math.abs(n),sign:n>0?-1:n<0?1:e?-1:1}}function i(t,e){return Math.min(e[1],Math.max(e[0],t))}t.exports=function(t,e,r,o,a,s){e[0]=i(e[0],r),e[1]=i(e[1],r),t=t||0;var l=r[1]-r[0];null!=a&&(a=i(a,[0,l])),null!=s&&(s=Math.max(s,null!=a?a:0)),"all"===o&&(a=s=Math.abs(e[1]-e[0]),o=0);var u=n(e,o);e[o]+=t;var h=a||0,c=r.slice();u.sign<0?c[0]+=h:c[1]-=h,e[o]=i(e[o],c);var d=n(e,o);null!=a&&(d.sign!==u.sign||d.span<a)&&(e[1-o]=e[o]+u.sign*a);var d=n(e,o);return null!=s&&d.span>s&&(e[1-o]=e[o]+d.sign*s),e}},function(t,e,n){function i(t,e,n){return t.getCoordSysModel()===e}function r(t){var e,n=t.model,i=n.getFormattedLabels(),r=n.getModel("axisLabel.textStyle"),o=1,a=i.length;a>40&&(o=Math.ceil(a/40));for(var s=0;s<a;s+=o)if(!t.isLabelIgnored(s)){var l=r.getTextRect(i[s]);e?e.union(l):e=l}return e}function o(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function a(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function s(t,e){return c.map(y,function(e){var n=t.getReferringComponents(e)[0];return n})}function l(t){return"cartesian2d"===t.get("coordinateSystem")}var u=n(12),h=n(18),c=n(1),d=n(133),f=n(131),p=c.each,g=h.ifAxisCrossZero,m=h.niceScaleExtent;n(134);var v=o.prototype;v.type="grid",v.axisPointerEnabled=!0,v.getRect=function(){return this._rect},v.update=function(t,e){function n(t){var e=i[t];for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];if(r&&("category"===r.type||"time"===r.type||!g(r)))return!0}return!1}var i=this._axesMap;this._updateScale(t,this.model),p(i.x,function(t){m(t.scale,t.model)}),p(i.y,function(t){m(t.scale,t.model)}),p(i.x,function(t){n("y")&&(t.onZero=!1)}),p(i.y,function(t){n("x")&&(t.onZero=!1)}),this.resize(this.model,e)},v.resize=function(t,e,n){function i(){p(s,function(t){var e=t.isHorizontal(),n=e?[0,o.width]:[0,o.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),a(t,e?o.x:o.y)})}var o=u.getLayoutRect(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=o;var s=this._axesList;i(),!n&&t.get("containLabel")&&(p(s,function(t){if(!t.model.get("axisLabel.inside")){var e=r(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");o[n]-=e[n]+i,"top"===t.position?o.y+=e.height+i:"left"===t.position&&(o.x+=e.width+i)}}}),i())},v.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},v.getAxes=function(){return this._axesList.slice()},v.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}c.isObject(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},v.getCartesians=function(){return this._coordsList.slice()},v.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},v.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},v._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,o=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],a=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;if(r)n=r.coordinateSystem,c.indexOf(l,n)<0&&(n=null);else if(o&&a)n=this.getCartesian(o.componentIndex,a.componentIndex);else if(o)i=this.getAxis("x",o.componentIndex);else if(a)i=this.getAxis("y",a.componentIndex);else if(s){var u=s.coordinateSystem;u===this&&(n=this._coordsList[0])}return{cartesian:n,axis:i}},v.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},v._initCartesian=function(t,e,n){function r(n){return function(r,l){if(i(r,t,e)){var u=r.get("position");"x"===n?"top"!==u&&"bottom"!==u&&(u="bottom",o[u]&&(u="top"===u?"bottom":"top")):"left"!==u&&"right"!==u&&(u="left",o[u]&&(u="left"===u?"right":"left")),o[u]=!0;var c=new f(n,h.createScaleByModel(r),[0,0],r.get("type"),u),d="category"===c.type;c.onBand=d&&r.get("boundaryGap"),c.inverse=r.get("inverse"),c.onZero=r.get("axisLine.onZero"),r.axis=c,c.model=r,c.grid=this,c.index=l,this._axesList.push(c),a[n][l]=c,s[n]++}}}var o={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},s={x:0,y:0};return e.eachComponent("xAxis",r("x"),this),e.eachComponent("yAxis",r("y"),this),s.x&&s.y?(this._axesMap=a,void p(a.x,function(e,n){p(a.y,function(i,r){var o="x"+n+"y"+r,a=new d(o);a.grid=this,a.model=t,this._coordsMap[o]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(i)},this)},this)):(this._axesMap={},void(this._axesList=[]))},v._updateScale=function(t,e){function n(t,e,n){p(n.coordDimToDataDim(e.dim),function(n){e.scale.unionExtentFromData(t,n)})}c.each(this._axesList,function(t){t.scale.setExtent(1/0,-(1/0))}),t.eachSeries(function(r){if(l(r)){var o=s(r,t),a=o[0],u=o[1];if(!i(a,e,t)||!i(u,e,t))return;var h=this.getCartesian(a.componentIndex,u.componentIndex),c=r.getData(),d=h.getAxis("x"),f=h.getAxis("y");"list"===c.type&&(n(c,d,r),n(c,f,r))}},this)},v.getTooltipAxes=function(t){var e=[],n=[];return p(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(r);c.indexOf(e,r)<0&&e.push(r),c.indexOf(n,o)<0&&n.push(o)}),{baseAxes:e,otherAxes:n}};var y=["xAxis","yAxis"];o.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var a=new o(i,t,e);a.name="grid_"+r,
a.resize(i,e,!0),i.coordinateSystem=a,n.push(a)}),t.eachSeries(function(e){if(l(e)){var n=s(e,t),i=n[0],r=n[1],o=i.getCoordSysModel(),a=o.coordinateSystem;e.coordinateSystem=a.getCartesian(i.componentIndex,r.componentIndex)}}),n},o.dimensions=o.prototype.dimensions=d.prototype.dimensions,n(26).register("cartesian2d",o),t.exports=o},function(t,e,n){"use strict";function i(t){return t>s||t<-s}var r=n(19),o=n(6),a=r.identity,s=5e-5,l=function(t){t=t||{},t.position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},u=l.prototype;u.transform=null,u.needLocalTransform=function(){return i(this.rotation)||i(this.position[0])||i(this.position[1])||i(this.scale[0]-1)||i(this.scale[1]-1)},u.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;return n||e?(i=i||r.create(),n?this.getLocalTransform(i):a(i),e&&(n?r.mul(i,t.transform,i):r.copy(i,t.transform)),this.transform=i,this.invTransform=this.invTransform||r.create(),void r.invert(this.invTransform,i)):void(i&&a(i))},u.getLocalTransform=function(t){return l.getLocalTransform(this,t)},u.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},u.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var h=[];u.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(r.mul(h,t.invTransform,e),e=h);var n=e[0]*e[0]+e[1]*e[1],o=e[2]*e[2]+e[3]*e[3],a=this.position,s=this.scale;i(n-1)&&(n=Math.sqrt(n)),i(o-1)&&(o=Math.sqrt(o)),e[0]<0&&(n=-n),e[3]<0&&(o=-o),a[0]=e[4],a[1]=e[5],s[0]=n,s[1]=o,this.rotation=Math.atan2(-e[1]/o,e[0]/n)}},u.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},u.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&o.applyTransform(n,n,i),n},u.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&o.applyTransform(n,n,i),n},l.getLocalTransform=function(t,e){e=e||[],a(e);var n=t.origin,i=t.scale||[1,1],o=t.rotation||0,s=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),r.scale(e,e,i),o&&r.rotate(e,e,o),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=s[0],e[5]+=s[1],e},t.exports=l},function(t,e,n){var i=n(96),r=n(1),o=n(13),a=n(12),s=["value","category","time","log"];t.exports=function(t,e,n,l){r.each(s,function(o){e.extend({type:t+"Axis."+o,mergeDefaultAndTheme:function(e,i){var s=this.layoutMode,l=s?a.getLayoutParams(e):{},u=i.getTheme();r.merge(e,u.get(o+"Axis")),r.merge(e,this.getDefaultOption()),e.type=n(t,e),s&&a.mergeLayoutParam(e,l,s)},defaultOption:r.mergeAll([{},i[o+"Axis"],l],!0)})}),o.registerSubTypeDefaulter(t+"Axis",r.curry(n,t))}},function(t,e,n){"use strict";function i(t,e){return e.type||(e.data?"category":"value")}var r=n(13),o=n(1),a=n(59),s=r.extend({type:"cartesian2dAxis",axis:null,init:function(){s.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){s.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){s.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});o.merge(s.prototype,n(42));var l={offset:0};a("x",s,i,l),a("y",s,i,l),t.exports=s},function(t,e){t.exports=function(t,e){e.eachSeriesByType(t,function(t){var e=t.getData(),n=t.coordinateSystem;if(n){for(var i=[],r=n.dimensions,o=0;o<r.length;o++)i.push(t.coordDimToDataDim(n.dimensions[o])[0]);1===i.length?e.each(i[0],function(t,i){e.setItemLayout(i,isNaN(t)?[NaN,NaN]:n.dataToPoint(t))}):2===i.length&&e.each(i,function(t,i,r){e.setItemLayout(r,isNaN(t)||isNaN(i)?[NaN,NaN]:n.dataToPoint([t,i]))},!0)}})}},function(t,e,n){var i=n(15),r=i.set,o=i.get;t.exports={clearColorPalette:function(){r(this,"colorIdx",0),r(this,"colorNameMap",{})},getColorFromPalette:function(t,e){e=e||this;var n=o(e,"colorIdx")||0,i=o(e,"colorNameMap")||r(e,"colorNameMap",{});if(i.hasOwnProperty(t))return i[t];var a=this.get("color",!0)||[];if(a.length){var s=a[n];return t&&(i[t]=s),r(e,"colorIdx",(n+1)%a.length),s}}}},function(t,e){t.exports=function(t,e){var n=e.findComponents({mainType:"legend"});n&&n.length&&e.eachSeriesByType(t,function(t){var e=t.getData();e.filterSelf(function(t){for(var i=e.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(i))return!1;return!0},this)},this)}},function(t,e,n){function i(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}var r=n(4),o=r.round,a={};a.intervalScaleNiceTicks=function(t,e,n){var i={},s=t[1]-t[0],l=i.interval=r.nice(s/e,!0);null!=n&&l<n&&(l=i.interval=n);var u=i.intervalPrecision=a.getIntervalPrecision(l),h=i.niceTickExtent=[o(Math.ceil(t[0]/l)*l,u),o(Math.floor(t[1]/l)*l,u)];return a.fixExtent(h,t),i},a.getIntervalPrecision=function(t){return r.getPrecisionSafe(t)+2},a.fixExtent=function(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),i(t,0,e),i(t,1,e),t[0]>t[1]&&(t[0]=t[1])},a.intervalScaleGetTicks=function(t,e,n,i){var r=[];if(!t)return r;var a=1e4;e[0]<n[0]&&r.push(e[0]);for(var s=n[0];s<=n[1]&&(r.push(s),s=o(s+t,i),s!==r[r.length-1]);)if(r.length>a)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r},t.exports=a},function(t,e,n){var i=n(36),r=n(49),o=n(15),a=function(){this.group=new i,this.uid=r.getUID("viewComponent")};a.prototype={constructor:a,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}};var s=a.prototype;s.updateView=s.updateLayout=s.updateVisual=function(t,e,n,i){},o.enableClassExtend(a),o.enableClassManagement(a,{registerWhenExtend:!0}),t.exports=a},function(t,e,n){"use strict";var i=n(71),r=n(23),o=n(58),a=n(178),s=n(1),l=function(t){o.call(this,t),r.call(this,t),a.call(this,t),this.id=t.id||i()};l.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(s.isObject(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},s.mixin(l,a),s.mixin(l,o),s.mixin(l,r),t.exports=l},function(t,e,n){function i(t,e){return t[e]}function r(t,e,n){t[e]=n}function o(t,e,n){return(e-t)*n+t}function a(t,e,n){return n>.5?e:t}function s(t,e,n,i,r){var a=t.length;if(1==r)for(var s=0;s<a;s++)i[s]=o(t[s],e[s],n);else for(var l=a&&t[0].length,s=0;s<a;s++)for(var u=0;u<l;u++)i[s][u]=o(t[s][u],e[s][u],n)}function l(t,e,n){var i=t.length,r=e.length;if(i!==r){var o=i>r;if(o)t.length=r;else for(var a=i;a<r;a++)t.push(1===n?e[a]:_.call(e[a]))}for(var s=t[0]&&t[0].length,a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a]);else for(var l=0;l<s;l++)isNaN(t[a][l])&&(t[a][l]=e[a][l])}function u(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(var r=0;r<i;r++)if(t[r]!==e[r])return!1}else for(var o=t[0].length,r=0;r<i;r++)for(var a=0;a<o;a++)if(t[r][a]!==e[r][a])return!1;return!0}function h(t,e,n,i,r,o,a,s,l){var u=t.length;if(1==l)for(var h=0;h<u;h++)s[h]=c(t[h],e[h],n[h],i[h],r,o,a);else for(var d=t[0].length,h=0;h<u;h++)for(var f=0;f<d;f++)s[h][f]=c(t[h][f],e[h][f],n[h][f],i[h][f],r,o,a)}function c(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function d(t){if(x(t)){var e=t.length;if(x(t[0])){for(var n=[],i=0;i<e;i++)n.push(_.call(t[i]));return n}return _.call(t)}return t}function f(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function p(t){var e=t[t.length-1].value;return x(e&&e[0])?2:1}function g(t,e,n,i,r){var d=t._getter,g=t._setter,y="spline"===e,_=i.length;if(_){var b,w=i[0].value,M=x(w),S=!1,T=!1,A=M?p(i):0;i.sort(function(t,e){return t.time-e.time}),b=i[_-1].time;for(var I=[],C=[],P=i[0].value,D=!0,k=0;k<_;k++){I.push(i[k].time/b);var L=i[k].value;if(M&&u(L,P,A)||!M&&L===P||(D=!1),P=L,"string"==typeof L){var O=v.parse(L);O?(L=O,S=!0):T=!0}C.push(L)}if(!D){for(var z=C[_-1],k=0;k<_-1;k++)M?l(C[k],z,A):!isNaN(C[k])||isNaN(z)||T||S||(C[k]=z);M&&l(d(t._target,r),z,A);var E,N,R,B,V,F,G=0,H=0;if(S)var W=[0,0,0,0];var Z=function(t,e){var n;if(e<0)n=0;else if(e<H){for(E=Math.min(G+1,_-1),n=E;n>=0&&!(I[n]<=e);n--);n=Math.min(n,_-2)}else{for(n=G;n<_&&!(I[n]>e);n++);n=Math.min(n-1,_-2)}G=n,H=e;var i=I[n+1]-I[n];if(0!==i)if(N=(e-I[n])/i,y)if(B=C[n],R=C[0===n?n:n-1],V=C[n>_-2?_-1:n+1],F=C[n>_-3?_-1:n+2],M)h(R,B,V,F,N,N*N,N*N*N,d(t,r),A);else{var l;if(S)l=h(R,B,V,F,N,N*N,N*N*N,W,1),l=f(W);else{if(T)return a(B,V,N);l=c(R,B,V,F,N,N*N,N*N*N)}g(t,r,l)}else if(M)s(C[n],C[n+1],N,d(t,r),A);else{var l;if(S)s(C[n],C[n+1],N,W,1),l=f(W);else{if(T)return a(C[n],C[n+1],N);l=o(C[n],C[n+1],N)}g(t,r,l)}},q=new m({target:t._target,life:b,loop:t._loop,delay:t._delay,onframe:Z,ondestroy:n});return e&&"spline"!==e&&(q.easing=e),q}}}var m=n(157),v=n(22),y=n(1),x=y.isArrayLike,_=Array.prototype.slice,b=function(t,e,n,o){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||i,this._setter=o||r,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};b.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:d(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t){var e,n=this,i=0,r=function(){i--,i||n._doneCallback()};for(var o in this._tracks)if(this._tracks.hasOwnProperty(o)){var a=g(this,t,r,this._tracks[o],o);a&&(this._clipList.push(a),i++,this.animation&&this.animation.addClip(a),e=a)}if(e){var s=e.onframe;e.onframe=function(t,e){s(t,e);for(var i=0;i<n._onframeList.length;i++)n._onframeList[i](t,e)}}return i||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}},t.exports=b},function(t,e){t.exports="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)}},function(t,e){var n=2*Math.PI;t.exports={normalizeRadian:function(t){return t%=n,t<0&&(t+=n),t}}},function(t,e){var n=function(){this.head=null,this.tail=null,this._len=0},i=n.prototype;i.insert=function(t){var e=new r(t);return this.insertEntry(e),e},i.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},i.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},i.len=function(){return this._len},i.clear=function(){this.head=this.tail=null,this._len=0};var r=function(t){this.value=t,this.next,this.prev},o=function(t){this._list=new n,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},a=o.prototype;a.put=function(t,e){var n=this._list,i=this._map,o=null;if(null==i[t]){var a=n.len(),s=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var l=n.head;n.remove(l),delete i[l.key],o=l.value,this._lastRemovedEntry=l}s?s.value=e:s=new r(e),s.key=t,n.insertEntry(s),i[t]=s}return o},a.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},a.clear=function(){this._list.clear(),this._map={}},t.exports=o},function(t,e){var n=2311;t.exports=function(){return n++}},function(t,e){var n=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};n.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")},t.exports=n},function(t,e){function n(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,o=null==e.y?0:e.y,a=null==e.y2?0:e.y2;e.global||(i=i*n.width+n.x,r=r*n.width+n.x,o=o*n.height+n.y,a=a*n.height+n.y);var s=t.createLinearGradient(i,o,r,a);return s}function i(t,e,n){var i=n.width,r=n.height,o=Math.min(i,r),a=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;e.global||(a=a*i+n.x,s=s*r+n.y,l*=o);var u=t.createRadialGradient(a,s,0,a,s,l);return u}var r=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],o=function(t){this.extendFrom(t)};o.prototype={constructor:o,fill:"#000000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,textFill:"#000",textStroke:null,textPosition:"inside",textPositionRect:null,textOffset:null,textBaseline:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textTransform:!1,textRotation:0,blend:null,bind:function(t,e,n){for(var i=this,o=n&&n.style,a=!o,s=0;s<r.length;s++){var l=r[s],u=l[0];(a||i[u]!==o[u])&&(t[u]=i[u]||l[1])}if((a||i.fill!==o.fill)&&(t.fillStyle=i.fill),(a||i.stroke!==o.stroke)&&(t.strokeStyle=i.stroke),(a||i.opacity!==o.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(a||i.blend!==o.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var h=i.lineWidth;t.lineWidth=h/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t){var n=this;for(var i in t)!t.hasOwnProperty(i)||!e&&n.hasOwnProperty(i)||(n[i]=t[i])}},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,r){for(var o="radial"===e.type?i:n,a=o(t,e,r),s=e.colorStops,l=0;l<s.length;l++)a.addColorStop(s[l].offset,s[l].color);return a}};for(var a=o.prototype,s=0;s<r.length;s++){var l=r[s];l[0]in a||(a[l[0]]=l[1])}o.getGradient=a.getGradient,t.exports=o},function(t,e,n){var i=n(168),r=n(167);t.exports={buildPath:function(t,e,n){var o=e.points,a=e.smooth;if(o&&o.length>=2){if(a&&"spline"!==a){var s=r(o,a,n,e.smoothConstraint);t.moveTo(o[0][0],o[0][1]);for(var l=o.length,u=0;u<(n?l:l-1);u++){var h=s[2*u],c=s[2*u+1],d=o[(u+1)%l];t.bezierCurveTo(h[0],h[1],c[0],c[1],d[0],d[1])}}else{"spline"===a&&(o=i(o,n)),t.moveTo(o[0][0],o[0][1]);for(var u=1,f=o.length;u<f;u++)t.lineTo(o[u][0],o[u][1])}n&&t.closePath()}}}},function(t,e,n){var i=n(1),r={};r.layout=function(t,e,n){function r(t,e){var n=o.getAxis(t);return n.toGlobalCoord(n.dataToCoord(0))}n=n||{};var o=t.coordinateSystem,a=e.axis,s={},l=a.position,u=a.onZero?"onZero":l,h=a.dim,c=o.getRect(),d=[c.x,c.x+c.width,c.y,c.y+c.height],f=e.get("offset")||0,p={x:{top:d[2]-f,bottom:d[3]+f},y:{left:d[0]-f,right:d[1]+f}};p.x.onZero=Math.max(Math.min(r("y"),p.x.bottom),p.x.top),p.y.onZero=Math.max(Math.min(r("x"),p.y.right),p.y.left),s.position=["y"===h?p.y[u]:d[0],"x"===h?p.x[u]:d[3]],s.rotation=Math.PI/2*("x"===h?0:1);var g={top:-1,bottom:1,left:-1,right:1};s.labelDirection=s.tickDirection=s.nameDirection=g[l],s.labelOffset=a.onZero?p[h][l]-p[h].onZero:0,e.get("axisTick.inside")&&(s.tickDirection=-s.tickDirection),i.retrieve(n.labelInside,e.get("axisLabel.inside"))&&(s.labelDirection=-s.labelDirection);var m=e.get("axisLabel.rotate");return s.labelRotate="top"===u?-m:m,s.labelInterval=a.getLabelInterval(),s.z2=1,s},t.exports=r},function(t,e,n){"use strict";function i(t,e,n,i){var r=i.getWidth(),o=i.getHeight();t[0]=Math.min(t[0]+e,r)-e,t[1]=Math.min(t[1]+n,o)-n,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}var r=n(1),o=n(3),a=n(16),s=n(7),l=n(19),u=n(18),h=n(40),c={};c.buildElStyle=function(t){var e,n=t.get("type"),i=t.getModel(n+"Style");return"line"===n?(e=i.getLineStyle(),e.fill=null):"shadow"===n&&(e=i.getAreaStyle(),e.stroke=null),e},c.buildLabelElOption=function(t,e,n,r,o){var l=n.get("value"),u=c.getValueLabel(l,e.axis,e.ecModel,n.get("seriesDataIndices"),{precision:n.get("label.precision"),formatter:n.get("label.formatter")}),h=n.getModel("label"),d=h.getModel("textStyle"),f=s.normalizeCssArray(h.get("padding")||0),p=d.getFont(),g=a.getBoundingRect(u,p,o.textAlign,o.textBaseline),m=o.position,v=g.width+f[1]+f[3],y=g.height+f[0]+f[2],x=o.align;"right"===x&&(m[0]-=v),"center"===x&&(m[0]-=v/2);var _=o.verticalAlign;"bottom"===_&&(m[1]-=y),"middle"===_&&(m[1]-=y/2),i(m,v,y,r);var b=h.get("backgroundColor");b&&"auto"!==b||(b=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:v,height:y,r:h.get("borderRadius")},position:m.slice(),style:{text:u,textFont:p,textFill:d.getTextColor(),textPosition:"inside",fill:b,stroke:h.get("borderColor")||"transparent",lineWidth:h.get("borderWidth")||0,shadowBlur:h.get("shadowBlur"),shadowColor:h.get("shadowColor"),shadowOffsetX:h.get("shadowOffsetX"),shadowOffsetY:h.get("shadowOffsetY")},z2:10}},c.getValueLabel=function(t,e,n,i,o){var a=e.scale.getLabel(t,{precision:o.precision}),s=o.formatter;if(s){var l={value:u.getAxisRawValue(e,t),seriesData:[]};r.each(i,function(t){var e=n.getSeriesByIndex(t.seriesIndex),i=t.dataIndexInside,r=e&&e.getDataParams(i);r&&l.seriesData.push(r)}),r.isString(s)?a=s.replace("{value}",a):r.isFunction(s)&&(a=s(l))}return a},c.getTransformedPosition=function(t,e,n){var i=l.create();return l.rotate(i,i,n.rotation),l.translate(i,i,n.position),o.applyTransform([t.dataToCoord(e),(n.labelOffset||0)+(n.labelDirection||1)*(n.labelMargin||0)],i)},c.buildCartesianSingleLabelElOption=function(t,e,n,i,r,o){var a=h.innerTextLayout(n.rotation,0,n.labelDirection);n.labelMargin=r.get("label.margin"),c.buildLabelElOption(e,i,r,o,{position:c.getTransformedPosition(i.axis,t,n),align:a.textAlign,verticalAlign:a.textVerticalAlign})},c.makeLineShape=function(t,e,n){return n=n||0,{x1:t[n],y1:t[1-n],x2:e[n],y2:e[1-n]}},c.makeRectShape=function(t,e,n){return n=n||0,{x:t[n],y:t[1-n],width:e[n],height:e[1-n]}},c.makeSectorShape=function(t,e,n,i,r,o){return{cx:t,cy:e,r0:n,r:i,startAngle:r,endAngle:o,clockwise:!0}},t.exports=c},function(t,e,n){var i=n(7),r=n(1),o={},a=["x","y","z","radius","angle","single"],s=["cartesian2d","polar","singleAxis"];o.isCoordSupported=function(t){return r.indexOf(s,t)>=0},o.createNameEach=function(t,e){t=t.slice();var n=r.map(t,i.capitalFirst);e=(e||[]).slice();var o=r.map(e,i.capitalFirst);return function(i,a){r.each(t,function(t,r){for(var s={name:t,capital:n[r]},l=0;l<e.length;l++)s[e[l]]=t+o[l];i.call(a,s)})}},o.eachAxisDim=o.createNameEach(a,["axisIndex","axis","index","id"]),o.createLinkedNodesFinder=function(t,e,n){function i(t,e){return r.indexOf(e.nodes,t)>=0}function o(t,i){var o=!1;return e(function(e){r.each(n(t,e)||[],function(t){i.records[e.name][t]&&(o=!0)})}),o}function a(t,i){i.nodes.push(t),e(function(e){r.each(n(t,e)||[],function(t){i.records[e.name][t]=!0})})}return function(n){function r(t){!i(t,s)&&o(t,s)&&(a(t,s),l=!0)}var s={nodes:[],records:{}};if(e(function(t){s.records[t.name]={}}),!n)return s;a(n,s);var l;do l=!1,t(r);while(l);return s}},t.exports=o},function(t,e,n){var i=n(1);t.exports={updateSelectedMap:function(t){this._selectTargetMap=i.reduce(t||[],function(t,e){return t.set(e.name,e),t},i.createHashMap())},select:function(t){var e=this._selectTargetMap,n=e.get(t),i=this.get("selectedMode");"single"===i&&e.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t){var e=this._selectTargetMap.get(t);e&&(e.selected=!1)},toggleSelected:function(t){var e=this._selectTargetMap.get(t);if(null!=e)return this[e.selected?"unSelect":"select"](t),e.selected},isSelected:function(t){var e=this._selectTargetMap.get(t);return e&&e.selected}}},function(t,e,n){function i(t){r.defaultEmphasis(t.label,r.LABEL_OPTIONS)}var r=n(5),o=n(1),a=n(9),s=n(7),l=s.addCommas,u=s.encodeHTML,h=n(2).extendComponentModel({type:"marker",dependencies:["series","grid","polar","geo"],init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n),this.mergeOption(t,n,i.createdBySelf,!0)},isAnimationEnabled:function(){if(a.node)return!1;var t=this.__hostSeries;return this.getShallow("animation")&&t&&t.isAnimationEnabled()},mergeOption:function(t,e,n,r){var a=this.constructor,s=this.mainType+"Model";n||e.eachSeries(function(t){var n=t.get(this.mainType),l=t[s];return n&&n.data?(l?l.mergeOption(n,e,!0):(r&&i(n),o.each(n.data,function(t){t instanceof Array?(i(t[0]),i(t[1])):i(t)}),l=new a(n,this,e),o.extend(l,{mainType:this.mainType,seriesIndex:t.seriesIndex,name:t.name,createdBySelf:!0}),l.__hostSeries=t),void(t[s]=l)):void(t[s]=null)},this)},formatTooltip:function(t){var e=this.getData(),n=this.getRawValue(t),i=o.isArray(n)?o.map(n,l).join(", "):l(n),r=e.getName(t),a=u(this.name);return(null!=n||r)&&(a+="<br />"),r&&(a+=u(r),null!=n&&(a+=" : ")),null!=n&&(a+=u(i)),a},getData:function(){return this._data},setData:function(t){this._data=t}});o.mixin(h,r.dataFormatMixin),t.exports=h},function(t,e,n){var i=n(1);t.exports=n(2).extendComponentView({type:"marker",init:function(){this.markerGroupMap=i.createHashMap()},render:function(t,e,n){var i=this.markerGroupMap;i.each(function(t){t.__keep=!1});var r=this.type+"Model";e.eachSeries(function(t){var i=t[r];i&&this.renderSeries(t,i,e,n)},this),i.each(function(t){!t.__keep&&this.group.remove(t.group)},this)},renderSeries:function(){}})},function(t,e,n){function i(t){return!(isNaN(parseFloat(t.x))&&isNaN(parseFloat(t.y)))}function r(t){return!isNaN(parseFloat(t.x))&&!isNaN(parseFloat(t.y))}function o(t,e,n){var i=-1;do i=Math.max(l.getPrecision(t.get(e,n)),i),t=t.stackedOn;while(t);return i}function a(t,e,n,i,r,a){var s=[],l=m(e,i,t),u=e.indicesOfNearest(i,l,!0)[0];s[r]=e.get(n,u,!0),s[a]=e.get(i,u,!0);var h=o(e,i,u);return h>=0&&(s[a]=+s[a].toFixed(h)),s}var s=n(1),l=n(4),u=s.indexOf,h=s.curry,c={min:h(a,"min"),max:h(a,"max"),average:h(a,"average")},d=function(t,e){var n=t.getData(),i=t.coordinateSystem;if(e&&!r(e)&&!s.isArray(e.coord)&&i){var o=i.dimensions,a=f(e,n,i,t);if(e=s.clone(e),e.type&&c[e.type]&&a.baseAxis&&a.valueAxis){var l=u(o,a.baseAxis.dim),h=u(o,a.valueAxis.dim);e.coord=c[e.type](n,a.baseDataDim,a.valueDataDim,l,h),e.value=e.coord[h]}else{for(var d=[null!=e.xAxis?e.xAxis:e.radiusAxis,null!=e.yAxis?e.yAxis:e.angleAxis],p=0;p<2;p++)if(c[d[p]]){var g=t.coordDimToDataDim(o[p])[0];d[p]=m(n,g,d[p])}e.coord=d}}return e},f=function(t,e,n,i){var r={};return null!=t.valueIndex||null!=t.valueDim?(r.valueDataDim=null!=t.valueIndex?e.getDimension(t.valueIndex):t.valueDim,r.valueAxis=n.getAxis(i.dataDimToCoordDim(r.valueDataDim)),r.baseAxis=n.getOtherAxis(r.valueAxis),r.baseDataDim=i.coordDimToDataDim(r.baseAxis.dim)[0]):(r.baseAxis=i.getBaseAxis(),r.valueAxis=n.getOtherAxis(r.baseAxis),r.baseDataDim=i.coordDimToDataDim(r.baseAxis.dim)[0],r.valueDataDim=i.coordDimToDataDim(r.valueAxis.dim)[0]),r},p=function(t,e){return!(t&&t.containData&&e.coord&&!i(e))||t.containData(e.coord)},g=function(t,e,n,i){return i<2?t.coord&&t.coord[i]:t.value},m=function(t,e,n){if("average"===n){var i=0,r=0;return t.each(e,function(t,e){isNaN(t)||(i+=t,r++)},!0),i/r}return t.getDataExtent(e,!0)["max"===n?1:0]};t.exports={dataTransform:d,dataFilter:p,dimValueGetter:g,getAxisInfo:f,numCalculate:m}},function(t,e,n){"use strict";function i(t){return t.get("stack")||d+t.seriesIndex}function r(t){return t.dim+t.index}function o(t,e){var n=[],i=t.axis,r="axis0";if("category"===i.type){for(var o=i.getBandWidth(),a=0;a<t.count;a++)n.push(u.defaults({bandWidth:o,axisKey:r,stackId:d+a},t));for(var l=s(n,e),h=[],a=0;a<t.count;a++){var c=l[r][d+a];c.offsetCenter=c.offset+c.width/2,h.push(c)}return h}}function a(t,e){var n=u.map(t,function(t){var e=t.getData(),n=t.coordinateSystem,o=n.getBaseAxis(),a=o.getExtent(),s="category"===o.type?o.getBandWidth():Math.abs(a[1]-a[0])/e.count(),l=c(t.get("barWidth"),s),u=c(t.get("barMaxWidth"),s),h=t.get("barGap"),d=t.get("barCategoryGap");return{bandWidth:s,barWidth:l,barMaxWidth:u,barGap:h,barCategoryGap:d,axisKey:r(o),stackId:i(t)}});return s(n,e)}function s(t,e){var n={};u.each(t,function(t,e){var i=t.axisKey,r=t.bandWidth,o=n[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},a=o.stacks;n[i]=o;var s=t.stackId;a[s]||o.autoWidthCount++,a[s]=a[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!a[s].width&&(l=Math.min(o.remainedWidth,l),a[s].width=l,o.remainedWidth-=l);var u=t.barMaxWidth;u&&(a[s].maxWidth=u);var h=t.barGap;null!=h&&(o.gap=h);var c=t.barCategoryGap;null!=c&&(o.categoryGap=c)});var i={};return u.each(n,function(t,e){i[e]={};var n=t.stacks,r=t.bandWidth,o=c(t.categoryGap,r),a=c(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,h=(s-o)/(l+(l-1)*a);h=Math.max(h,0),u.each(n,function(t,e){var n=t.maxWidth;n&&n<h&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)}),h=(s-o)/(l+(l-1)*a),h=Math.max(h,0);var d,f=0;u.each(n,function(t,e){t.width||(t.width=h),d=t,f+=t.width*(1+a)}),d&&(f-=d.width*a);var p=-f/2;u.each(n,function(t,n){i[e][n]=i[e][n]||{offset:p,width:t.width},p+=t.width*(1+a)})}),i}function l(t,e,n){var o=a(u.filter(e.getSeriesByType(t),function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type})),s={},l={};e.eachSeriesByType(t,function(t){if("cartesian2d"===t.coordinateSystem.type){var e=t.getData(),n=t.coordinateSystem,a=n.getBaseAxis(),u=i(t),h=o[r(a)][u],c=h.offset,d=h.width,f=n.getOtherAxis(a),p=t.get("barMinHeight")||0,g=a.onZero?f.toGlobalCoord(f.dataToCoord(0)):f.getGlobalExtent()[0],m=n.dataToPoints(e,!0);s[u]=s[u]||[],l[u]=l[u]||[],e.setLayout({offset:c,size:d}),e.each(f.dim,function(t,n){if(!isNaN(t)){s[u][n]||(s[u][n]={p:g,n:g},l[u][n]={p:g,n:g});var i,r,o,a,h=t>=0?"p":"n",v=m[n],y=s[u][n][h],x=l[u][n][h];f.isHorizontal()?(i=y,r=v[1]+c,o=v[0]-x,a=d,l[u][n][h]+=o,Math.abs(o)<p&&(o=(o<0?-1:1)*p),s[u][n][h]+=o):(i=v[0]+c,r=y,o=d,a=v[1]-x,l[u][n][h]+=a,Math.abs(a)<p&&(a=(a<=0?-1:1)*p),s[u][n][h]+=a),e.setItemLayout(n,{x:i,y:r,width:o,height:a})}},!0)}},this)}var u=n(1),h=n(4),c=h.parsePercent,d="__ec_stack_";l.getLayoutOnAxis=o,t.exports=l},,function(t,e){t.exports=function(t,e){var n={};e.eachRawSeriesByType(t,function(t){var i=t.getRawData(),r={};if(!e.isSeriesFiltered(t)){var o=t.getData();o.each(function(t){var e=o.getRawIndex(t);r[e]=t}),i.each(function(e){var a=r[e],s=null!=a&&o.getItemVisual(a,"color",!0);if(s)i.setItemVisual(e,"color",s);else{var l=i.getItemModel(e),u=l.get("itemStyle.normal.color")||t.getColorFromPalette(i.getName(e),n);i.setItemVisual(e,"color",u),null!=a&&o.setItemVisual(a,"color",u)}})}})}},function(t,e,n){var i=n(6),r=n(20),o={},a=Math.min,s=Math.max,l=Math.sin,u=Math.cos,h=i.create(),c=i.create(),d=i.create(),f=2*Math.PI;o.fromPoints=function(t,e,n){if(0!==t.length){var i,r=t[0],o=r[0],l=r[0],u=r[1],h=r[1];for(i=1;i<t.length;i++)r=t[i],o=a(o,r[0]),l=s(l,r[0]),u=a(u,r[1]),h=s(h,r[1]);e[0]=o,e[1]=u,n[0]=l,n[1]=h}},o.fromLine=function(t,e,n,i,r,o){r[0]=a(t,n),r[1]=a(e,i),o[0]=s(t,n),o[1]=s(e,i)};var p=[],g=[];o.fromCubic=function(t,e,n,i,o,l,u,h,c,d){var f,m=r.cubicExtrema,v=r.cubicAt,y=m(t,n,o,u,p);for(c[0]=1/0,c[1]=1/0,d[0]=-(1/0),d[1]=-(1/0),f=0;f<y;f++){var x=v(t,n,o,u,p[f]);c[0]=a(x,c[0]),d[0]=s(x,d[0])}for(y=m(e,i,l,h,g),f=0;f<y;f++){var _=v(e,i,l,h,g[f]);c[1]=a(_,c[1]),d[1]=s(_,d[1])}c[0]=a(t,c[0]),d[0]=s(t,d[0]),c[0]=a(u,c[0]),d[0]=s(u,d[0]),c[1]=a(e,c[1]),d[1]=s(e,d[1]),c[1]=a(h,c[1]),d[1]=s(h,d[1])},o.fromQuadratic=function(t,e,n,i,o,l,u,h){var c=r.quadraticExtremum,d=r.quadraticAt,f=s(a(c(t,n,o),1),0),p=s(a(c(e,i,l),1),0),g=d(t,n,o,f),m=d(e,i,l,p);u[0]=a(t,o,g),u[1]=a(e,l,m),h[0]=s(t,o,g),h[1]=s(e,l,m)},o.fromArc=function(t,e,n,r,o,a,s,p,g){var m=i.min,v=i.max,y=Math.abs(o-a);if(y%f<1e-4&&y>1e-4)return p[0]=t-n,p[1]=e-r,g[0]=t+n,void(g[1]=e+r);if(h[0]=u(o)*n+t,h[1]=l(o)*r+e,c[0]=u(a)*n+t,c[1]=l(a)*r+e,m(p,h,c),v(g,h,c),o%=f,o<0&&(o+=f),a%=f,a<0&&(a+=f),o>a&&!s?a+=f:o<a&&s&&(o+=f),s){var x=a;a=o,o=x}for(var _=0;_<a;_+=Math.PI/2)_>o&&(d[0]=u(_)*n+t,d[1]=l(_)*r+e,m(p,d,p),v(g,d,g))},t.exports=o},function(t,e,n){var i=n(38),r=n(1),o=n(16),a=function(t){i.call(this,t)};a.prototype={constructor:a,type:"text",brush:function(t,e){var n=this.style,i=n.x||0,r=n.y||0,a=n.text;if(null!=a&&(a+=""),n.bind(t,this,e),a){this.setTransform(t);var s,l=n.textAlign,u=n.textFont||n.font;if(n.textVerticalAlign){var h=o.getBoundingRect(a,u,n.textAlign,"top");switch(s="middle",n.textVerticalAlign){case"middle":r-=h.height/2-h.lineHeight/2;break;case"bottom":r-=h.height-h.lineHeight/2;break;default:r+=h.lineHeight/2}}else s=n.textBaseline;t.font=u||"12px sans-serif",t.textAlign=l||"left",t.textAlign!==l&&(t.textAlign="left"),t.textBaseline=s||"alphabetic",t.textBaseline!==s&&(t.textBaseline="alphabetic");for(var c=o.measureText("国",t.font).width,d=a.split("\n"),f=0;f<d.length;f++)n.hasStroke()&&t.strokeText(d[f],i,r),n.hasFill()&&t.fillText(d[f],i,r),r+=c;this.restoreTransform(t)}},getBoundingRect:function(){var t=this.style;if(!this._rect){var e=t.textVerticalAlign,n=o.getBoundingRect(t.text+"",t.textFont||t.font,t.textAlign,e?"top":t.textBaseline);switch(e){case"middle":n.y-=n.height/2;break;case"bottom":n.y-=n.height}if(n.x+=t.x||0,n.y+=t.y||0,t.hasStroke()){var i=t.lineWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},r.inherits(a,i),t.exports=a},function(t,e,n){function i(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}var r=n(16),o=n(11),a=new o,s=function(){};s.prototype={constructor:s,drawRectText:function(t,e,n){var o=this.style,s=o.text;if(null!=s&&(s+=""),s){t.save();var l,u,h=o.textPosition,c=o.textOffset,d=o.textDistance,f=o.textAlign,p=o.textFont||o.font,g=o.textBaseline,m=o.textVerticalAlign;e=o.textPositionRect||e,n=n||r.getBoundingRect(s,p,f,g);var v=this.transform;if(o.textTransform?this.setTransform(t):v&&(a.copy(e),a.applyTransform(v),e=a),h instanceof Array){if(l=e.x+i(h[0],e.width),u=e.y+i(h[1],e.height),f=f||"left",g=g||"top",m){switch(m){case"middle":u-=n.height/2-n.lineHeight/2;break;case"bottom":u-=n.height-n.lineHeight/2;break;default:u+=n.lineHeight/2}g="middle"}}else{var y=r.adjustTextPositionOnRect(h,e,n,d);l=y.x,u=y.y,f=f||y.textAlign,g=g||y.textBaseline}c&&(l+=c[0],u+=c[1]),t.textAlign=f||"left",t.textBaseline=g||"alphabetic";var x=o.textFill,_=o.textStroke;
x&&(t.fillStyle=x),_&&(t.strokeStyle=_),t.font=p||"12px sans-serif",t.shadowBlur=o.textShadowBlur,t.shadowColor=o.textShadowColor||"transparent",t.shadowOffsetX=o.textShadowOffsetX,t.shadowOffsetY=o.textShadowOffsetY;var b=s.split("\n");o.textRotation&&(v&&t.translate(v[4],v[5]),t.rotate(o.textRotation),v&&t.translate(-v[4],-v[5]));for(var w=0;w<b.length;w++)_&&t.strokeText(b[w],l,u),x&&t.fillText(b[w],l,u),u+=n.lineHeight;t.restore()}}},t.exports=s},function(t,e,n){function i(t){delete f[t]}/*!
	 * ZRender, a high performance 2d drawing library.
	 *
	 * Copyright (c) 2013, Baidu Inc.
	 * All rights reserved.
	 *
	 * LICENSE
	 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
	 */
var r=n(71),o=n(9),a=n(1),s=n(152),l=n(155),u=n(156),h=n(163),c=!o.canvasSupported,d={canvas:n(154)},f={},p={};p.version="3.5.2",p.init=function(t,e){var n=new g(r(),t,e);return f[n.id]=n,n},p.dispose=function(t){if(t)t.dispose();else{for(var e in f)f.hasOwnProperty(e)&&f[e].dispose();f={}}return p},p.getInstance=function(t){return f[t]},p.registerPainter=function(t,e){d[t]=e};var g=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new l,f=n.renderer;if(c){if(!d.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");f="vml"}else f&&d[f]||(f="canvas");var p=new d[f](e,r,n);this.storage=r,this.painter=p;var g=o.node?null:new h(p.getViewportRoot());this.handler=new s(r,p,g,p.root),this.animation=new u({stage:{update:a.bind(this.flush,this)}}),this.animation.start(),this._needsRefresh;var m=r.delFromStorage,v=r.addToStorage;r.delFromStorage=function(t){m.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){v.call(r,t),t.addSelfToZr(i)}};g.prototype={constructor:g,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer(t,e),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){this._needsRefresh&&this.refreshImmediately(),this._needsRefreshHover&&this.refreshHoverImmediately()},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,i(this.id)}},t.exports=p},function(t,e,n){var i=n(2),r=n(1);t.exports=function(t,e){r.each(e,function(e){e.update="updateView",i.registerAction(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r}})})}},function(t,e,n){"use strict";var i=n(17),r=n(28);t.exports=i.extend({type:"series.__base_bar__",getInitialData:function(t,e){return r(t.data,this,e)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(t,!0),i=this.getData(),r=i.getLayout("offset"),o=i.getLayout("size"),a=e.getBaseAxis().isHorizontal()?0:1;return n[a]+=r+o/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,itemStyle:{normal:{},emphasis:{}}}})},function(t,e,n){function i(t,e,n,i,r){o.setText(t,e,n),t.text=i,"outside"===t.textPosition&&(t.textPosition=r)}var r=n(1),o=n(3),a={};a.setLabel=function(t,e,n,o,a,s,l){var u=n.getModel("label.normal"),h=n.getModel("label.emphasis");u.get("show")?i(t,u,o,r.retrieve(a.getFormattedLabel(s,"normal"),a.getRawValue(s)),l):t.text="",h.get("show")?i(e,h,o,r.retrieve(a.getFormattedLabel(s,"emphasis"),a.getRawValue(s)),l):e.text=""},t.exports=a},function(t,e,n){var i=n(3),r=n(1),o=n(5),a={};a.findLabelValueDim=function(t){var e,n=o.otherDimToDataDim(t,"label");if(n.length)e=n[0];else for(var i,r=t.dimensions.slice();r.length&&(e=r.pop(),i=t.getDimensionInfo(e).type,"ordinal"===i||"time"===i););return e},a.setTextToStyle=function(t,e,n,o,a,s,l){null!=n&&s.getShallow("show")?(i.setText(o,s,l),o.text=r.retrieve(a.getFormattedLabel(e,"normal"),t.get(n,e))):o.text=""},t.exports=a},function(t,e,n){function i(t){return isNaN(t[0])||isNaN(t[1])}function r(t,e,n,r,o,a,g,m,v,y,x){for(var _=0,b=n,w=0;w<r;w++){var M=e[b];if(b>=o||b<0)break;if(i(M)){if(x){b+=a;continue}break}if(b===n)t[a>0?"moveTo":"lineTo"](M[0],M[1]),c(f,M);else if(v>0){var S=b+a,T=e[S];if(x)for(;T&&i(e[S]);)S+=a,T=e[S];var A=.5,I=e[_],T=e[S];if(!T||i(T))c(p,M);else{i(T)&&!x&&(T=M),s.sub(d,T,I);var C,P;if("x"===y||"y"===y){var D="x"===y?0:1;C=Math.abs(M[D]-I[D]),P=Math.abs(M[D]-T[D])}else C=s.dist(M,I),P=s.dist(M,T);A=P/(P+C),h(p,M,d,-v*(1-A))}l(f,f,m),u(f,f,g),l(p,p,m),u(p,p,g),t.bezierCurveTo(f[0],f[1],p[0],p[1],M[0],M[1]),h(f,M,d,v*A)}else t.lineTo(M[0],M[1]);_=b,b+=a}return w}function o(t,e){var n=[1/0,1/0],i=[-(1/0),-(1/0)];if(e)for(var r=0;r<t.length;r++){var o=t[r];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1])}return{min:e?n:i,max:e?i:n}}var a=n(8),s=n(6),l=s.min,u=s.max,h=s.scaleAndAdd,c=s.copy,d=[],f=[],p=[];t.exports={Polyline:a.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},buildPath:function(t,e){var n=e.points,a=0,s=n.length,l=o(n,e.smoothConstraint);if(e.connectNulls){for(;s>0&&i(n[s-1]);s--);for(;a<s&&i(n[a]);a++);}for(;a<s;)a+=r(t,n,a,s,s,1,l.min,l.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Polygon:a.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},buildPath:function(t,e){var n=e.points,a=e.stackedOnPoints,s=0,l=n.length,u=e.smoothMonotone,h=o(n,e.smoothConstraint),c=o(a,e.smoothConstraint);if(e.connectNulls){for(;l>0&&i(n[l-1]);l--);for(;s<l&&i(n[s]);s++);}for(;s<l;){var d=r(t,n,s,l,l,1,h.min,h.max,e.smooth,u,e.connectNulls);r(t,a,s+d-1,d,l,-1,c.min,c.max,e.stackedOnSmooth,u,e.connectNulls),s+=d+1,t.closePath()}}})}},,function(t,e,n){function i(t){this.pointerChecker,this._zr=t,this._opt={};var e=d.bind,n=e(r,this),i=e(o,this),u=e(a,this),h=e(s,this),f=e(l,this);c.call(this),this.setPointerChecker=function(t){this.pointerChecker=t},this.enable=function(e,r){this.disable(),this._opt=d.defaults(d.clone(r)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,preventDefaultMouseMove:!0}),null==e&&(e=!0),e!==!0&&"move"!==e&&"pan"!==e||(t.on("mousedown",n),t.on("mousemove",i),t.on("mouseup",u)),e!==!0&&"scale"!==e&&"zoom"!==e||(t.on("mousewheel",h),t.on("pinch",f))},this.disable=function(){t.off("mousedown",n),t.off("mousemove",i),t.off("mouseup",u),t.off("mousewheel",h),t.off("pinch",f)},this.dispose=this.disable,this.isDragging=function(){return this._dragging},this.isPinching=function(){return this._pinching}}function r(t){if(!t.target||!t.target.draggable){var e=t.offsetX,n=t.offsetY;this.pointerChecker&&this.pointerChecker(t,e,n)&&(this._x=e,this._y=n,this._dragging=!0)}}function o(t){if(h(this,"moveOnMouseMove",t)&&this._dragging&&"pinch"!==t.gestureEvent&&!p.isTaken(this._zr,"globalPan")){var e=t.offsetX,n=t.offsetY,i=this._x,r=this._y,o=e-i,a=n-r;this._x=e,this._y=n,this._opt.preventDefaultMouseMove&&f.stop(t.event),this.trigger("pan",o,a,i,r,e,n)}}function a(t){this._dragging=!1}function s(t){if(h(this,"zoomOnMouseWheel",t)&&0!==t.wheelDelta){var e=t.wheelDelta>0?1.1:1/1.1;u.call(this,t,e,t.offsetX,t.offsetY)}}function l(t){if(!p.isTaken(this._zr,"globalPan")){var e=t.pinchScale>1?1.1:1/1.1;u.call(this,t,e,t.pinchX,t.pinchY)}}function u(t,e,n,i){this.pointerChecker&&this.pointerChecker(t,n,i)&&(f.stop(t.event),this.trigger("zoom",e,n,i))}function h(t,e,n){var i=t._opt[e];return i&&(!d.isString(i)||n.event[i+"Key"])}var c=n(23),d=n(1),f=n(21),p=n(129);d.mixin(i,c),t.exports=i},function(t,e,n){var i=n(1),r={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,lineStyle:{color:"#333",width:1,type:"solid"}},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},o=i.merge({boundaryGap:!0,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},r),a=i.merge({boundaryGap:[0,0],splitNumber:5},r),s=i.defaults({scale:!0,min:"dataMin",max:"dataMax"},a),l=i.defaults({scale:!0,logBase:10},a);t.exports={categoryAxis:o,valueAxis:a,timeAxis:s,logAxis:l}},function(t,e){t.exports={containStroke:function(t,e,n,i,r,o,a){if(0===r)return!1;var s=r,l=0,u=t;if(a>e+s&&a>i+s||a<e-s&&a<i-s||o>t+s&&o>n+s||o<t-s&&o<n-s)return!1;if(t===n)return Math.abs(o-t)<=s/2;l=(e-i)/(t-n),u=(t*i-n*e)/(t-n);var h=l*o-a+u,c=h*h/(l*l+1);return c<=s/2*s/2}}},function(t,e,n){var i=n(20);t.exports={containStroke:function(t,e,n,r,o,a,s,l,u){if(0===s)return!1;var h=s;if(u>e+h&&u>r+h&&u>a+h||u<e-h&&u<r-h&&u<a-h||l>t+h&&l>n+h&&l>o+h||l<t-h&&l<n-h&&l<o-h)return!1;var c=i.quadraticProjectPoint(t,e,n,r,o,a,l,u,null);return c<=h/2}}},function(t,e){t.exports=function(t,e,n,i,r,o){if(o>e&&o>i||o<e&&o<i)return 0;if(i===e)return 0;var a=i<e?1:-1,s=(o-e)/(i-e);1!==s&&0!==s||(a=i<e?.5:-.5);var l=s*(n-t)+t;return l>r?a:0}},function(t,e,n){"use strict";var i=n(1),r=n(39),o=function(t,e,n,i,o,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=a||!1,r.call(this,o)};o.prototype={constructor:o},i.inherits(o,r),t.exports=o},function(t,e,n){"use strict";function i(t){r.each(o,function(e){this[e]=r.bind(t[e],t)},this)}var r=n(1),o=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"];t.exports=i},function(t,e,n){var i=n(1);n(57),n(103),n(104);var r=n(82),o=n(2);o.registerLayout(i.curry(r,"bar")),o.registerVisual(function(t){t.eachSeriesByType("bar",function(t){var e=t.getData();e.setVisual("legendSymbol","roundRect")})}),n(32)},function(t,e,n){t.exports=n(90).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect"})},function(t,e,n){"use strict";function i(t,e,n){n.style.text="",l.updateProps(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function r(t,e,n){n.style.text="",l.updateProps(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function o(t,e,n,i,r,o,a,h){var c=e.getItemVisual(n,"color"),d=e.getItemVisual(n,"opacity"),f=i.getModel("itemStyle.normal"),p=i.getModel("itemStyle.emphasis").getBarItemStyle();h||t.setShape("r",f.get("barBorderRadius")||0),t.useStyle(s.defaults({fill:c,opacity:d},f.getBarItemStyle()));var g=i.getShallow("cursor");g&&t.attr("cursor",g);var m=a?r.height>0?"bottom":"top":r.width>0?"left":"right";h||u.setLabel(t.style,p,i,c,o,n,m),l.setHoverStyle(t,p)}function a(t,e){var n=t.get(h)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}var s=n(1),l=n(3),u=n(91),h=["itemStyle","normal","barBorderWidth"];s.extend(n(10).prototype,n(105));var c=n(2).extendChartView({type:"bar",render:function(t,e,n){var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||this._render(t,e,n),this.group},dispose:s.noop,_render:function(t,e,n){var a,s=this.group,u=t.getData(),h=this._data,c=t.coordinateSystem,p=c.getBaseAxis();"cartesian2d"===c.type?a=p.isHorizontal():"polar"===c.type&&(a="angle"===p.dim);var g=t.isAnimationEnabled()?t:null;u.diff(h).add(function(e){if(u.hasValue(e)){var n=u.getItemModel(e),i=f[c.type](u,e,n),r=d[c.type](u,e,n,i,a,g);u.setItemGraphicEl(e,r),s.add(r),o(r,u,e,n,i,t,a,"polar"===c.type)}}).update(function(e,n){var i=h.getItemGraphicEl(n);if(!u.hasValue(e))return void s.remove(i);var r=u.getItemModel(e),p=f[c.type](u,e,r);i?l.updateProps(i,{shape:p},g,e):i=d[c.type](u,e,r,p,a,g,!0),u.setItemGraphicEl(e,i),s.add(i),o(i,u,e,r,p,t,a,"polar"===c.type)}).remove(function(t){var e=h.getItemGraphicEl(t);"cartesian2d"===c.type?e&&i(t,g,e):e&&r(t,g,e)}).execute(),this._data=u},remove:function(t,e){var n=this.group,o=this._data;t.get("animation")?o&&o.eachItemGraphicEl(function(e){"sector"===e.type?r(e.dataIndex,t,e):i(e.dataIndex,t,e)}):n.removeAll()}}),d={cartesian2d:function(t,e,n,i,r,o,a){var u=new l.Rect({shape:s.extend({},i)});if(o){var h=u.shape,c=r?"height":"width",d={};h[c]=0,d[c]=i[c],l[a?"updateProps":"initProps"](u,{shape:d},o,e)}return u},polar:function(t,e,n,i,r,o,a){var u=new l.Sector({shape:s.extend({},i)});if(o){var h=u.shape,c=r?"r":"endAngle",d={};h[c]=r?0:i.startAngle,d[c]=i[c],l[a?"updateProps":"initProps"](u,{shape:d},o,e)}return u}},f={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=a(n,i),o=i.width>0?1:-1,s=i.height>0?1:-1;return{x:i.x+o*r/2,y:i.y+s*r/2,width:i.width-o*r,height:i.height-s*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}};t.exports=c},function(t,e,n){var i=n(31)([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]);t.exports={getBarItemStyle:function(t){var e=i.call(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}}},function(t,e,n){function i(t){return"_"+t+"Type"}function r(t,e,n){var i=e.getItemVisual(n,"color"),r=e.getItemVisual(n,t),o=e.getItemVisual(n,t+"Size");if(r&&"none"!==r){f.isArray(o)||(o=[o,o]);var a=u.createSymbol(r,-o[0]/2,-o[1]/2,o[0],o[1],i);return a.name=t,a}}function o(t){var e=new c({name:"line"});return a(e.shape,t),e}function a(t,e){var n=e[0],i=e[1],r=e[2];t.x1=n[0],t.y1=n[1],t.x2=i[0],t.y2=i[1],t.percent=1,r?(t.cpx1=r[0],t.cpy1=r[1]):(t.cpx1=NaN,t.cpy1=NaN)}function s(){var t=this,e=t.childOfName("fromSymbol"),n=t.childOfName("toSymbol"),i=t.childOfName("label");if(e||n||!i.ignore){for(var r=1,o=this.parent;o;)o.scale&&(r/=o.scale[0]),o=o.parent;var a=t.childOfName("line");if(this.__dirty||a.__dirty){var s=a.shape.percent,l=a.pointAt(0),u=a.pointAt(s),c=h.sub([],u,l);if(h.normalize(c,c),e){e.attr("position",l);var d=a.tangentAt(0);e.attr("rotation",Math.PI/2-Math.atan2(d[1],d[0])),e.attr("scale",[r*s,r*s])}if(n){n.attr("position",u);var d=a.tangentAt(1);n.attr("rotation",-Math.PI/2-Math.atan2(d[1],d[0])),n.attr("scale",[r*s,r*s])}if(!i.ignore){i.attr("position",u);var f,p,g,m=5*r;if("end"===i.__position)f=[c[0]*m+u[0],c[1]*m+u[1]],p=c[0]>.8?"left":c[0]<-.8?"right":"center",g=c[1]>.8?"top":c[1]<-.8?"bottom":"middle";else if("middle"===i.__position){var v=s/2,d=a.tangentAt(v),y=[d[1],-d[0]],x=a.pointAt(v);y[1]>0&&(y[0]=-y[0],y[1]=-y[1]),f=[x[0]+y[0]*m,x[1]+y[1]*m],p="center",g="bottom";var _=-Math.atan2(d[1],d[0]);u[0]<l[0]&&(_=Math.PI+_),i.attr("rotation",_)}else f=[-c[0]*m+l[0],-c[1]*m+l[1]],p=c[0]>.8?"right":c[0]<-.8?"left":"center",g=c[1]>.8?"bottom":c[1]<-.8?"top":"middle";i.attr({style:{textVerticalAlign:i.__verticalAlign||g,textAlign:i.__textAlign||p},position:f,scale:[r,r]})}}}}function l(t,e,n){d.Group.call(this),this._createLine(t,e,n)}var u=n(24),h=n(6),c=n(190),d=n(3),f=n(1),p=n(4),g=["fromSymbol","toSymbol"],m=l.prototype;m.beforeUpdate=s,m._createLine=function(t,e,n){var a=t.hostModel,s=t.getItemLayout(e),l=o(s);l.shape.percent=0,d.initProps(l,{shape:{percent:1}},a,e),this.add(l);var u=new d.Text({name:"label"});this.add(u),f.each(g,function(n){var o=r(n,t,e);this.add(o),this[i(n)]=t.getItemVisual(e,n)},this),this._updateCommonStl(t,e,n)},m.updateData=function(t,e,n){var o=t.hostModel,s=this.childOfName("line"),l=t.getItemLayout(e),u={shape:{}};a(u.shape,l),d.updateProps(s,u,o,e),f.each(g,function(n){var o=t.getItemVisual(e,n),a=i(n);if(this[a]!==o){this.remove(this.childOfName(n));var s=r(n,t,e);this.add(s)}this[a]=o},this),this._updateCommonStl(t,e,n)},m._updateCommonStl=function(t,e,n){var i=t.hostModel,r=this.childOfName("line"),o=n&&n.lineStyle,a=n&&n.hoverLineStyle,s=n&&n.labelModel,l=n&&n.hoverLabelModel;if(!n||t.hasItemOption){var u=t.getItemModel(e);o=u.getModel("lineStyle.normal").getLineStyle(),a=u.getModel("lineStyle.emphasis").getLineStyle(),s=u.getModel("label.normal"),l=u.getModel("label.emphasis")}var h=t.getItemVisual(e,"color"),c=f.retrieve(t.getItemVisual(e,"opacity"),o.opacity,1);r.useStyle(f.defaults({strokeNoScale:!0,fill:"none",stroke:h,opacity:c},o)),r.hoverStyle=a,f.each(g,function(t){var e=this.childOfName(t);e&&(e.setColor(h),e.setStyle({opacity:c}))},this);var m,v,y=s.getShallow("show"),x=l.getShallow("show"),_=this.childOfName("label");if(y||x){var b=i.getRawValue(e);v=null==b?v=t.getName(e):isFinite(b)?p.round(b):b,m=h||"#000"}if(y){var w=s.getModel("textStyle");_.setStyle({text:f.retrieve(i.getFormattedLabel(e,"normal",t.dataType),v),textFont:w.getFont(),fill:w.getTextColor()||m}),_.__textAlign=w.get("align"),_.__verticalAlign=w.get("baseline"),_.__position=s.get("position")}else _.setStyle("text","");if(x){var M=l.getModel("textStyle");_.hoverStyle={text:f.retrieve(i.getFormattedLabel(e,"emphasis",t.dataType),v),textFont:M.getFont(),fill:M.getTextColor()||m}}else _.hoverStyle={text:""};_.ignore=!y&&!x,d.setHoverStyle(this)},m.updateLayout=function(t,e){this.setLinePoints(t.getItemLayout(e))},m.setLinePoints=function(t){var e=this.childOfName("line");a(e.shape,t),e.dirty()},f.inherits(l,d.Group),t.exports=l},function(t,e,n){function i(t){return isNaN(t[0])||isNaN(t[1])}function r(t){return!i(t[0])&&!i(t[1])}function o(t){this._ctor=t||s,this.group=new a.Group}var a=n(3),s=n(106),l=o.prototype;l.updateData=function(t){var e=this._lineData,n=this.group,i=this._ctor,o=t.hostModel,a={lineStyle:o.getModel("lineStyle.normal").getLineStyle(),hoverLineStyle:o.getModel("lineStyle.emphasis").getLineStyle(),labelModel:o.getModel("label.normal"),hoverLabelModel:o.getModel("label.emphasis")};t.diff(e).add(function(e){if(r(t.getItemLayout(e))){var o=new i(t,e,a);t.setItemGraphicEl(e,o),n.add(o)}}).update(function(o,s){var l=e.getItemGraphicEl(s);return r(t.getItemLayout(o))?(l?l.updateData(t,o,a):l=new i(t,o,a),t.setItemGraphicEl(o,l),void n.add(l)):void n.remove(l)}).remove(function(t){n.remove(e.getItemGraphicEl(t))}).execute(),this._lineData=t},l.updateLayout=function(){var t=this._lineData;t.eachItemGraphicEl(function(e,n){e.updateLayout(t,n)},this)},l.remove=function(){this.group.removeAll()},t.exports=o},function(t,e,n){var i=n(1),r=n(2),o=r.PRIORITY;n(109),n(110),r.registerVisual(i.curry(n(50),"line","circle","line")),r.registerLayout(i.curry(n(61),"line")),r.registerProcessor(o.PROCESSOR.STATISTIC,i.curry(n(147),"line")),n(32)},function(t,e,n){"use strict";var i=n(28),r=n(17);t.exports=r.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return i(t.data,this,e)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{normal:{position:"top"}},lineStyle:{normal:{width:2,type:"solid"}},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:!1,connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}})},function(t,e,n){"use strict";function i(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function r(t){return"number"==typeof t?t:t?.3:0}function o(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function a(t){return t>=0?1:-1}function s(t,e){var n=t.getBaseAxis(),i=t.getOtherAxis(n),r=n.onZero?0:i.scale.getExtent()[0],o=i.dim,s="x"===o||"radius"===o?1:0;return e.mapArray([o],function(i,l){for(var u,h=e.stackedOn;h&&a(h.get(o,l))===a(i);){u=h;break}var c=[];return c[s]=e.get(n.dim,l),c[1-s]=u?u.get(o,l,!0):r,t.dataToPoint(c)},!0)}function l(t,e,n){var i=o(t.getAxis("x")),r=o(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),s=Math.min(i[0],i[1]),l=Math.min(r[0],r[1]),u=Math.max(i[0],i[1])-s,h=Math.max(r[0],r[1])-l,c=n.get("lineStyle.normal.width")||2,d=n.get("clipOverflow")?c/2:Math.max(u,h);a?(l-=d,h+=2*d):(s-=d,u+=2*d);var f=new v.Rect({shape:{x:s,y:l,width:u,height:h}});return e&&(f.shape[a?"width":"height"]=0,v.initProps(f,{shape:{width:u,height:h}},n)),f}function u(t,e,n){var i=t.getAngleAxis(),r=t.getRadiusAxis(),o=r.getExtent(),a=i.getExtent(),s=Math.PI/180,l=new v.Sector({shape:{cx:t.cx,cy:t.cy,r0:o[0],r:o[1],startAngle:-a[0]*s,endAngle:-a[1]*s,clockwise:i.inverse}});return e&&(l.shape.endAngle=-a[0]*s,v.initProps(l,{shape:{endAngle:-a[1]*s}},n)),l}function h(t,e,n){return"polar"===t.type?u(t,e,n):l(t,e,n)}function c(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,o=[],a=0;a<t.length-1;a++){var s=t[a+1],l=t[a];o.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],o.push(u);break;case"middle":var h=(l[r]+s[r])/2,c=[];u[r]=c[r]=h,u[1-r]=l[1-r],c[1-r]=s[1-r],o.push(u),o.push(c);break;default:u[r]=l[r],u[1-r]=s[1-r],o.push(u)}}return t[a]&&o.push(t[a]),o}function d(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()){for(var i,r=n.length-1;r>=0;r--)if(n[r].dimension<2){i=n[r];break}if(i&&"cartesian2d"===e.type){var o=i.dimension,a=t.dimensions[o],s=e.getAxis(a),l=f.map(i.stops,function(t){return{coord:s.toGlobalCoord(s.dataToCoord(t.value)),color:t.color}}),u=l.length,h=i.outerColors.slice();u&&l[0].coord>l[u-1].coord&&(l.reverse(),h.reverse());var c=10,d=l[0].coord-c,p=l[u-1].coord+c,g=p-d;if(g<.001)return"transparent";f.each(l,function(t){t.offset=(t.coord-d)/g}),l.push({offset:u?l[u-1].offset:.5,color:h[1]||"transparent"}),l.unshift({offset:u?l[0].offset:.5,color:h[0]||"transparent"});var m=new v.LinearGradient(0,0,0,0,l,(!0));return m[a]=d,m[a+"2"]=p,m}}}var f=n(1),p=n(44),g=n(54),m=n(111),v=n(3),y=n(5),x=n(93),_=n(30);t.exports=_.extend({type:"line",init:function(){var t=new v.Group,e=new p;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var o=t.coordinateSystem,a=this.group,l=t.getData(),u=t.getModel("lineStyle.normal"),p=t.getModel("areaStyle.normal"),g=l.mapArray(l.getItemLayout,!0),m="polar"===o.type,v=this._coordSys,y=this._symbolDraw,x=this._polyline,_=this._polygon,b=this._lineGroup,w=t.get("animation"),M=!p.isEmpty(),S=s(o,l),T=t.get("showSymbol"),A=T&&!m&&!t.get("showAllSymbol")&&this._getSymbolIgnoreFunc(l,o),I=this._data;I&&I.eachItemGraphicEl(function(t,e){t.__temp&&(a.remove(t),I.setItemGraphicEl(e,null))}),T||y.remove(),a.add(b);var C=!m&&t.get("step");x&&v.type===o.type&&C===this._step?(M&&!_?_=this._newPolygon(g,S,o,w):_&&!M&&(b.remove(_),_=this._polygon=null),b.setClipPath(h(o,!1,t)),T&&y.updateData(l,A),l.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),i(this._stackedOnPoints,S)&&i(this._points,g)||(w?this._updateAnimation(l,S,o,n,C):(C&&(g=c(g,o,C),S=c(S,o,C)),x.setShape({points:g}),_&&_.setShape({points:g,stackedOnPoints:S})))):(T&&y.updateData(l,A),C&&(g=c(g,o,C),S=c(S,o,C)),x=this._newPolyline(g,o,w),M&&(_=this._newPolygon(g,S,o,w)),b.setClipPath(h(o,!0,t)));var P=d(l,o)||l.getVisual("color");x.useStyle(f.defaults(u.getLineStyle(),{fill:"none",stroke:P,lineJoin:"bevel"}));var D=t.get("smooth");if(D=r(t.get("smooth")),x.setShape({smooth:D,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),_){var k=l.stackedOn,L=0;if(_.useStyle(f.defaults(p.getAreaStyle(),{fill:P,opacity:.7,lineJoin:"bevel"})),k){var O=k.hostModel;L=r(O.get("smooth"))}_.setShape({smooth:D,stackedOnSmooth:L,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=l,this._coordSys=o,this._stackedOnPoints=S,this._points=g,this._step=C},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),o=y.queryDataIndex(r,i);if(!(o instanceof Array)&&null!=o&&o>=0){var a=r.getItemGraphicEl(o);if(!a){var s=r.getItemLayout(o);if(!s)return;a=new g(r,o),a.position=s,a.setZ(t.get("zlevel"),t.get("z")),a.ignore=isNaN(s[0])||isNaN(s[1]),a.__temp=!0,r.setItemGraphicEl(o,a),a.stopSymbolAnimation(!0),this.group.add(a)}a.highlight()}else _.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),o=y.queryDataIndex(r,i);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay())}else _.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new x.Polyline({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new x.Polygon({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_getSymbolIgnoreFunc:function(t,e){var n=e.getAxesByScale("ordinal")[0];if(n&&n.isLabelIgnored)return f.bind(n.isLabelIgnored,n)},_updateAnimation:function(t,e,n,i,r){var o=this._polyline,a=this._polygon,s=t.hostModel,l=m(this._data,t,this._stackedOnPoints,e,this._coordSys,n),u=l.current,h=l.stackedOnCurrent,d=l.next,f=l.stackedOnNext;r&&(u=c(l.current,n,r),h=c(l.stackedOnCurrent,n,r),d=c(l.next,n,r),f=c(l.stackedOnNext,n,r)),o.shape.__points=l.current,o.shape.points=u,v.updateProps(o,{shape:{points:d}},s),a&&(a.setShape({points:u,stackedOnPoints:h}),v.updateProps(a,{shape:{points:d,stackedOnPoints:f}},s));for(var p=[],g=l.status,y=0;y<g.length;y++){var x=g[y].cmd;if("="===x){var _=t.getItemGraphicEl(g[y].idx1);_&&p.push({el:_,ptIdx:y})}}o.animators&&o.animators.length&&o.animators[0].during(function(){for(var t=0;t<p.length;t++){var e=p[t].el;e.attr("position",o.shape.__points[p[t].ptIdx])}})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}})},function(t,e){function n(t){return t>=0?1:-1}function i(t,e,i){for(var r,o=t.getBaseAxis(),a=t.getOtherAxis(o),s=o.onZero?0:a.scale.getExtent()[0],l=a.dim,u="x"===l||"radius"===l?1:0,h=e.stackedOn,c=e.get(l,i);h&&n(h.get(l,i))===n(c);){r=h;break}var d=[];return d[u]=e.get(o.dim,i),d[1-u]=r?r.get(l,i,!0):s,t.dataToPoint(d)}function r(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}t.exports=function(t,e,n,o,a,s){for(var l=r(t,e),u=[],h=[],c=[],d=[],f=[],p=[],g=[],m=s.dimensions,v=0;v<l.length;v++){var y=l[v],x=!0;switch(y.cmd){case"=":var _=t.getItemLayout(y.idx),b=e.getItemLayout(y.idx1);(isNaN(_[0])||isNaN(_[1]))&&(_=b.slice()),u.push(_),h.push(b),c.push(n[y.idx]),d.push(o[y.idx1]),g.push(e.getRawIndex(y.idx1));break;case"+":var w=y.idx;u.push(a.dataToPoint([e.get(m[0],w,!0),e.get(m[1],w,!0)])),h.push(e.getItemLayout(w).slice()),c.push(i(a,e,w)),d.push(o[w]),g.push(e.getRawIndex(w));break;case"-":var w=y.idx,M=t.getRawIndex(w);M!==w?(u.push(t.getItemLayout(w)),h.push(s.dataToPoint([t.get(m[0],w,!0),t.get(m[1],w,!0)])),c.push(n[w]),d.push(i(s,t,w)),g.push(M)):x=!1}x&&(f.push(y),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});for(var S=[],T=[],A=[],I=[],C=[],v=0;v<p.length;v++){var w=p[v];S[v]=u[w],T[v]=h[w],A[v]=c[w],I[v]=d[w],C[v]=f[w]}return{current:S,next:T,stackedOnCurrent:A,stackedOnNext:I,status:C}}},function(t,e,n){var i=n(1),r=n(2);n(113),n(114),n(89)("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),r.registerVisual(i.curry(n(84),"pie")),r.registerLayout(i.curry(n(116),"pie")),r.registerProcessor(i.curry(n(63),"pie"))},function(t,e,n){"use strict";var i=n(14),r=n(1),o=n(5),a=n(4),s=n(25),l=n(78),u=n(2).extendSeriesModel({type:"series.pie",init:function(t){u.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(t.data),this._defaultLabelLine(t)},mergeOption:function(t){u.superCall(this,"mergeOption",t),this.updateSelectedMap(this.option.data)},getInitialData:function(t,e){var n=s(["value"],t.data),r=new i(n,this);return r.initData(t.data),r},getDataParams:function(t){var e=this.getData(),n=u.superCall(this,"getDataParams",t),i=[];return e.each("value",function(t){i.push(t)}),n.percent=a.getPercentWithPrecision(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){o.defaultEmphasis(t.labelLine,["show"]);var e=t.labelLine.normal,n=t.labelLine.emphasis;e.show=e.show&&t.label.normal.show,n.show=n.show&&t.label.emphasis.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{normal:{rotate:!1,show:!0,position:"outer"},emphasis:{}},labelLine:{normal:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderWidth:1},emphasis:{}},animationType:"expansion",animationEasing:"cubicOut",data:[]}});r.mixin(u,l),t.exports=u},function(t,e,n){function i(t,e,n,i){var o=e.getData(),a=this.dataIndex,s=o.getName(a),l=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:s,seriesId:e.id}),o.each(function(t){r(o.getItemGraphicEl(t),o.getItemLayout(t),e.isSelected(o.getName(t)),l,n)})}function r(t,e,n,i,r){var o=(e.startAngle+e.endAngle)/2,a=Math.cos(o),s=Math.sin(o),l=n?i:0,u=[a*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function o(t,e){function n(){o.ignore=o.hoverIgnore,a.ignore=a.hoverIgnore}function i(){o.ignore=o.normalIgnore,a.ignore=a.normalIgnore}s.Group.call(this);var r=new s.Sector({z2:2}),o=new s.Polyline,a=new s.Text;this.add(r),this.add(o),this.add(a),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function a(t,e,n,i,r){var o=i.getModel("textStyle"),a="inside"===r||"inner"===r;return{fill:o.getTextColor()||(a?"#fff":t.getItemVisual(e,"color")),opacity:t.getItemVisual(e,"opacity"),textFont:o.getFont(),text:l.retrieve(t.hostModel.getFormattedLabel(e,n),t.getName(e))}}var s=n(3),l=n(1),u=o.prototype;u.updateData=function(t,e,n){function i(){a.stopAnimation(!0),a.animateTo({shape:{r:c.r+10}},300,"elasticOut")}function o(){a.stopAnimation(!0),a.animateTo({shape:{r:c.r}},300,"elasticOut")}var a=this.childAt(0),u=t.hostModel,h=t.getItemModel(e),c=t.getItemLayout(e),d=l.extend({},c);if(d.label=null,n){a.setShape(d);var f=u.getShallow("animationType");"scale"===f?(a.shape.r=c.r0,s.initProps(a,{shape:{r:c.r}},u,e)):(a.shape.endAngle=c.startAngle,s.updateProps(a,{shape:{endAngle:c.endAngle}},u,e))}else s.updateProps(a,{shape:d},u,e);var p=h.getModel("itemStyle"),g=t.getItemVisual(e,"color");a.useStyle(l.defaults({lineJoin:"bevel",fill:g},p.getModel("normal").getItemStyle())),a.hoverStyle=p.getModel("emphasis").getItemStyle();var m=h.getShallow("cursor");m&&a.attr("cursor",m),r(this,t.getItemLayout(e),h.get("selected"),u.get("selectedOffset"),u.get("animation")),a.off("mouseover").off("mouseout").off("emphasis").off("normal"),h.get("hoverAnimation")&&u.isAnimationEnabled()&&a.on("mouseover",i).on("mouseout",o).on("emphasis",i).on("normal",o),
this._updateLabel(t,e),s.setHoverStyle(this)},u._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,o=t.getItemModel(e),l=t.getItemLayout(e),u=l.label,h=t.getItemVisual(e,"color");s.updateProps(n,{shape:{points:u.linePoints||[[u.x,u.y],[u.x,u.y],[u.x,u.y]]}},r,e),s.updateProps(i,{style:{x:u.x,y:u.y}},r,e),i.attr({style:{textVerticalAlign:u.verticalAlign,textAlign:u.textAlign,textFont:u.font},rotation:u.rotation,origin:[u.x,u.y],z2:10});var c=o.getModel("label.normal"),d=o.getModel("label.emphasis"),f=o.getModel("labelLine.normal"),p=o.getModel("labelLine.emphasis"),g=c.get("position")||d.get("position");i.setStyle(a(t,e,"normal",c,g)),i.ignore=i.normalIgnore=!c.get("show"),i.hoverIgnore=!d.get("show"),n.ignore=n.normalIgnore=!f.get("show"),n.hoverIgnore=!p.get("show"),n.setStyle({stroke:h,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(f.getModel("lineStyle").getLineStyle()),i.hoverStyle=a(t,e,"emphasis",d,g),n.hoverStyle=p.getModel("lineStyle").getLineStyle();var m=f.get("smooth");m&&m===!0&&(m=.4),n.setShape({smooth:m})},l.inherits(o,s.Group);var h=n(30).extend({type:"pie",init:function(){var t=new s.Group;this._sectorGroup=t},render:function(t,e,n,r){if(!r||r.from!==this.uid){var a=t.getData(),s=this._data,u=this.group,h=e.get("animation"),c=!s,d=t.get("animationType"),f=l.curry(i,this.uid,t,h,n),p=t.get("selectedMode");if(a.diff(s).add(function(t){var e=new o(a,t);c&&"scale"!==d&&e.eachChild(function(t){t.stopAnimation(!0)}),p&&e.on("click",f),a.setItemGraphicEl(t,e),u.add(e)}).update(function(t,e){var n=s.getItemGraphicEl(e);n.updateData(a,t),n.off("click"),p&&n.on("click",f),u.add(n),a.setItemGraphicEl(t,n)}).remove(function(t){var e=s.getItemGraphicEl(t);u.remove(e)}).execute(),h&&c&&a.count()>0&&"scale"!==d){var g=a.getItemLayout(0),m=Math.max(n.getWidth(),n.getHeight())/2,v=l.bind(u.removeClipPath,u);u.setClipPath(this._createClipPath(g.cx,g.cy,m,g.startAngle,g.clockwise,v,t))}this._data=a}},dispose:function(){},_createClipPath:function(t,e,n,i,r,o,a){var l=new s.Sector({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return s.initProps(l,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},a,o),l},containPoint:function(t,e){var n=e.getData(),i=n.getItemLayout(0);if(i){var r=t[0]-i.cx,o=t[1]-i.cy,a=Math.sqrt(r*r+o*o);return a<=i.r&&a>=i.r0}}});t.exports=h},function(t,e,n){"use strict";function i(t,e,n,i,r,o,a){function s(e,n,i,r){for(var o=e;o<n;o++)if(t[o].y+=i,o>e&&o+1<n&&t[o+1].y>t[o].y+t[o].height)return void l(o,i/2);l(n-1,i/2)}function l(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function u(t,e,n,i,r,o){for(var a=o>0?e?Number.MAX_VALUE:0:e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-i),h=t[s].len,c=t[s].len2,d=u<r+h?Math.sqrt((r+h+c)*(r+h+c)-u*u):Math.abs(t[s].x-n);e&&d>=a&&(d=a-10),!e&&d<=a&&(d=a+10),t[s].x=n+d*o,a=d}}t.sort(function(t,e){return t.y-e.y});for(var h,c=0,d=t.length,f=[],p=[],g=0;g<d;g++)h=t[g].y-c,h<0&&s(g,d,-h,r),c=t[g].y+t[g].height;a-c<0&&l(d-1,c-a);for(var g=0;g<d;g++)t[g].y>=n?p.push(t[g]):f.push(t[g]);u(f,!1,e,n,i,r),u(p,!0,e,n,i,r)}function r(t,e,n,r,o,a){for(var s=[],l=[],u=0;u<t.length;u++)t[u].x<e?s.push(t[u]):l.push(t[u]);i(l,e,n,r,1,o,a),i(s,e,n,r,-1,o,a);for(var u=0;u<t.length;u++){var h=t[u].linePoints;if(h){var c=h[1][0]-h[2][0];t[u].x<e?h[2][0]=t[u].x+3:h[2][0]=t[u].x-3,h[1][1]=h[2][1]=t[u].y,h[1][0]=h[2][0]+c}}}var o=n(16);t.exports=function(t,e,n,i){var a,s,l=t.getData(),u=[],h=!1;l.each(function(n){var i,r,c,d,f=l.getItemLayout(n),p=l.getItemModel(n),g=p.getModel("label.normal"),m=g.get("position")||p.get("label.emphasis.position"),v=p.getModel("labelLine.normal"),y=v.get("length"),x=v.get("length2"),_=(f.startAngle+f.endAngle)/2,b=Math.cos(_),w=Math.sin(_);a=f.cx,s=f.cy;var M="inside"===m||"inner"===m;if("center"===m)i=f.cx,r=f.cy,d="center";else{var S=(M?(f.r+f.r0)/2*b:f.r*b)+a,T=(M?(f.r+f.r0)/2*w:f.r*w)+s;if(i=S+3*b,r=T+3*w,!M){var A=S+b*(y+e-f.r),I=T+w*(y+e-f.r),C=A+(b<0?-1:1)*x,P=I;i=C+(b<0?-5:5),r=P,c=[[S,T],[A,I],[C,P]]}d=M?"center":b>0?"left":"right"}var D=g.getModel("textStyle").getFont(),k=g.get("rotate")?b<0?-_+Math.PI:-_:0,L=t.getFormattedLabel(n,"normal")||l.getName(n),O=o.getBoundingRect(L,D,d,"top");h=!!k,f.label={x:i,y:r,position:m,height:O.height,len:y,len2:x,linePoints:c,textAlign:d,verticalAlign:"middle",font:D,rotation:k},M||u.push(f.label)}),!h&&t.get("avoidLabelOverlap")&&r(u,a,s,e,n,i)}},function(t,e,n){var i=n(4),r=i.parsePercent,o=n(115),a=n(1),s=2*Math.PI,l=Math.PI/180;t.exports=function(t,e,n,u){e.eachSeriesByType(t,function(t){var e=t.get("center"),u=t.get("radius");a.isArray(u)||(u=[0,u]),a.isArray(e)||(e=[e,e]);var h=n.getWidth(),c=n.getHeight(),d=Math.min(h,c),f=r(e[0],h),p=r(e[1],c),g=r(u[0],d/2),m=r(u[1],d/2),v=t.getData(),y=-t.get("startAngle")*l,x=t.get("minAngle")*l,_=0;v.each("value",function(t){!isNaN(t)&&_++});var b=v.getSum("value"),w=Math.PI/(b||_)*2,M=t.get("clockwise"),S=t.get("roseType"),T=t.get("stillShowZeroSum"),A=v.getDataExtent("value");A[0]=0;var I=s,C=0,P=y,D=M?1:-1;if(v.each("value",function(t,e){var n;if(isNaN(t))return void v.setItemLayout(e,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:M,cx:f,cy:p,r0:g,r:S?NaN:m});n="area"!==S?0===b&&T?w:t*w:s/_,n<x?(n=x,I-=x):C+=t;var r=P+D*n;v.setItemLayout(e,{angle:n,startAngle:P,endAngle:r,clockwise:M,cx:f,cy:p,r0:g,r:S?i.linearMap(t,A,[g,m]):m}),P=r},!0),I<s&&_)if(I<=.001){var k=s/_;v.each("value",function(t,e){if(!isNaN(t)){var n=v.getItemLayout(e);n.angle=k,n.startAngle=y+D*e*k,n.endAngle=y+D*(e+1)*k}})}else w=I/C,P=y,v.each("value",function(t,e){if(!isNaN(t)){var n=v.getItemLayout(e),i=n.angle===x?x:t*w;n.startAngle=P,n.endAngle=P+D*i,P+=D*i}});o(t,m,h,c)})}},function(t,e,n){"use strict";n(60),n(118)},function(t,e,n){var i=n(1),r=n(3),o=n(40),a=n(41),s=n(75),l=o.ifIgnoreOnTick,u=o.getInterval,h=["axisLine","axisLabel","axisTick","axisName"],c=["splitArea","splitLine"],d=a.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,a){this.group.removeAll();var l=this._axisGroup;if(this._axisGroup=new r.Group,this.group.add(this._axisGroup),t.get("show")){var u=t.getCoordSysModel(),f=s.layout(u,t),p=new o(t,f);i.each(h,p.add,p),this._axisGroup.add(p.getGroup()),i.each(c,function(e){t.get(e+".show")&&this["_"+e](t,u,f.labelInterval)},this),r.groupTransition(l,this._axisGroup,t),d.superCall(this,"render",t,e,n,a)}},_splitLine:function(t,e,n){var o=t.axis;if(!o.scale.isBlank()){var a=t.getModel("splitLine"),s=a.getModel("lineStyle"),h=s.get("color"),c=u(a,n);h=i.isArray(h)?h:[h];for(var d=e.coordinateSystem.getRect(),f=o.isHorizontal(),p=0,g=o.getTicksCoords(),m=o.scale.getTicks(),v=[],y=[],x=s.getLineStyle(),_=0;_<g.length;_++)if(!l(o,_,c)){var b=o.toGlobalCoord(g[_]);f?(v[0]=b,v[1]=d.y,y[0]=b,y[1]=d.y+d.height):(v[0]=d.x,v[1]=b,y[0]=d.x+d.width,y[1]=b);var w=p++%h.length;this._axisGroup.add(new r.Line(r.subPixelOptimizeLine({anid:"line_"+m[_],shape:{x1:v[0],y1:v[1],x2:y[0],y2:y[1]},style:i.defaults({stroke:h[w]},x),silent:!0})))}}},_splitArea:function(t,e,n){var o=t.axis;if(!o.scale.isBlank()){var a=t.getModel("splitArea"),s=a.getModel("areaStyle"),h=s.get("color"),c=e.coordinateSystem.getRect(),d=o.getTicksCoords(),f=o.scale.getTicks(),p=o.toGlobalCoord(d[0]),g=o.toGlobalCoord(d[0]),m=0,v=u(a,n),y=s.getAreaStyle();h=i.isArray(h)?h:[h];for(var x=1;x<d.length;x++)if(!l(o,x,v)){var _,b,w,M,S=o.toGlobalCoord(d[x]);o.isHorizontal()?(_=p,b=c.y,w=S-_,M=c.height):(_=c.x,b=g,w=c.width,M=S-b);var T=m++%h.length;this._axisGroup.add(new r.Rect({anid:"area_"+f[x],shape:{x:_,y:b,width:w,height:M},style:i.defaults({fill:h[T]},y),silent:!0})),p=_+w,g=b+M}}}});d.extend({type:"xAxis"}),d.extend({type:"yAxis"})},function(t,e,n){"use strict";function i(){}function r(t,e,n,i){o(f(n).lastProp,i)||(f(n).lastProp=i,e?d.updateProps(n,i,t):(n.stopAnimation(),n.attr(i)))}function o(t,e){if(h.isObject(t)&&h.isObject(e)){var n=!0;return h.each(e,function(e,i){n&=o(t[i],e)}),!!n}return t===e}function a(t,e){t[e.get("label.show")?"show":"hide"]()}function s(t){return{position:t.position.slice(),rotation:t.rotation||0}}function l(t,e){var n=t.get("icon"),i={x:-1,y:-1,width:2,height:2},r=h.extend({style:{strokeNoScale:!0},rectHover:!0,cursor:"move",draggable:!0},e);return 0===n.indexOf("image://")?(i.image=n.slice(8),r.style=i,new d.Image(r)):d.makePath(n.replace("path://",""),r,i,"center")}function u(t,e,n){var i=e.get("z"),r=e.get("zlevel");t&&t.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=r&&(t.zlevel=r),t.silent=n)})}var h=n(1),c=n(15),d=n(3),f=n(5).makeGetter(),p=n(45),g=n(21),m=n(37),v=h.clone,y=h.bind;i.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function(t,e,n,i){var o=e.get("value"),a=e.get("status");if(this._axisModel=t,this._axisPointerModel=e,this._api=n,i||this._lastValue!==o||this._lastStatus!==a){this._lastValue=o,this._lastStatus=a;var s=this._group,l=this._handle;if(!a||"hide"===a)return s&&s.hide(),void(l&&l.hide());s&&s.show(),l&&l.show();var c={};this.makeElOption(c,o,t,e,n);var f=c.graphicKey;f!==this._lastGraphicKey&&this.clear(n),this._lastGraphicKey=f;var p=this._moveAnimation=this.determineAnimation(t,e);if(s){var g=h.curry(r,e,p);this.updatePointerEl(s,c,g,e),this.updateLabelEl(s,c,g,e)}else s=this._group=new d.Group,this.createPointerEl(s,c,t,e),this.createLabelEl(s,c,t,e),n.getZr().add(s);u(s,e,!0),this._renderHandle(o)}},remove:function(t){this.clear(t)},dispose:function(t){this.clear(t)},determineAnimation:function(t,e){var n=e.get("animation"),i=t.axis,r="category"===i.type,o=e.get("snap");if(!o&&!r)return!1;if("auto"===n||null==n){var a=this.animationThreshold;if(r&&i.getBandWidth()>a)return!0;if(o){var s=p.getAxisInfo(t).seriesDataCount,l=i.getExtent();return Math.abs(l[0]-l[1])/s>a}return!1}return n===!0},makeElOption:function(t,e,n,i,r){},createPointerEl:function(t,e,n,i){var r=e.pointer;if(r){var o=f(t).pointerEl=new d[r.type](v(e.pointer));t.add(o)}},createLabelEl:function(t,e,n,i){if(e.label){var r=f(t).labelEl=new d.Rect(v(e.label));t.add(r),a(r,i)}},updatePointerEl:function(t,e,n){var i=f(t).pointerEl;i&&(i.setStyle(e.pointer.style),n(i,{shape:e.pointer.shape}))},updateLabelEl:function(t,e,n,i){var r=f(t).labelEl;r&&(r.setStyle(e.label.style),n(r,{shape:e.label.shape,position:e.label.position}),a(r,i))},_renderHandle:function(t){if(!this._dragging&&this.updateHandleTransform){var e=this._axisPointerModel,n=this._api.getZr(),i=this._handle,r=e.getModel("handle"),o=e.get("status");if(!r.get("show")||!o||"hide"===o)return i&&n.remove(i),void(this._handle=null);var a;this._handle||(a=!0,i=this._handle=l(r,{onmousemove:function(t){g.stop(t.event)},onmousedown:y(this._onHandleDragMove,this,0,0),drift:y(this._onHandleDragMove,this),ondragend:y(this._onHandleDragEnd,this)}),n.add(i)),u(i,e,!1);var s=["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];i.setStyle(r.getItemStyle(null,s));var c=r.get("size");h.isArray(c)||(c=[c,c]),i.attr("scale",[c[0]/2,c[1]/2]),m.createOrUpdate(this,"_doDispatchAxisPointer",r.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,a)}},_moveHandleToValue:function(t,e){r(this._axisPointerModel,!e&&this._moveAnimation,this._handle,s(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},_onHandleDragMove:function(t,e){var n=this._handle;if(n){this._dragging=!0;var i=this.updateHandleTransform(s(n),[t,e],this._axisModel,this._axisPointerModel);this._payloadInfo=i,n.stopAnimation(),n.attr(s(i)),f(n).lastProp=null,this._doDispatchAxisPointer()}},_doDispatchAxisPointer:function(){var t=this._handle;if(t){var e=this._payloadInfo,n=this._axisModel;this._api.dispatchAction({type:"updateAxisPointer",x:e.cursorPoint[0],y:e.cursorPoint[1],tooltipOption:e.tooltipOption,axesInfo:[{axisDim:n.axis.dim,axisIndex:n.componentIndex}]})}},_onHandleDragEnd:function(t){this._dragging=!1;var e=this._handle;if(e){var n=this._axisPointerModel.get("value");this._moveHandleToValue(n),this._api.dispatchAction({type:"hideTip"})}},getHandleTransform:null,updateHandleTransform:null,clear:function(t){this._lastValue=null,this._lastStatus=null;var e=t.getZr(),n=this._group,i=this._handle;e&&n&&(this._lastGraphicKey=null,n&&e.remove(n),i&&e.remove(i),this._group=null,this._handle=null,this._payloadInfo=null)},doClear:function(){},buildLabel:function(t,e,n){return n=n||0,{x:t[n],y:t[1-n],width:e[n],height:e[1-n]}}},i.prototype.constructor=i,c.enableClassExtend(i),t.exports=i},function(t,e,n){"use strict";function i(t,e){var n={};return n[e.dim+"AxisIndex"]=e.index,t.getCartesian(n)}function r(t){return"x"===t.dim?0:1}var o=n(3),a=n(119),s=n(76),l=n(75),u=n(41),h=a.extend({makeElOption:function(t,e,n,r,o){var a=n.axis,u=a.grid,h=r.get("type"),d=i(u,a).getOtherAxis(a).getGlobalExtent(),f=a.toGlobalCoord(a.dataToCoord(e,!0));if(h&&"none"!==h){var p=s.buildElStyle(r),g=c[h](a,f,d,p);g.style=p,t.graphicKey=g.type,t.pointer=g}var m=l.layout(u.model,n);s.buildCartesianSingleLabelElOption(e,t,m,n,r,o)},getHandleTransform:function(t,e,n){var i=l.layout(e.axis.grid.model,e,{labelInside:!1});return i.labelMargin=n.get("handle.margin"),{position:s.getTransformedPosition(e.axis,t,i),rotation:i.rotation+(i.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,n,r){var o=n.axis,a=o.grid,s=o.getGlobalExtent(!0),l=i(a,o).getOtherAxis(o).getGlobalExtent(),u="x"===o.dim?0:1,h=t.position;h[u]+=e[u],h[u]=Math.min(s[1],h[u]),h[u]=Math.max(s[0],h[u]);var c=(l[1]+l[0])/2,d=[c,c];d[u]=h[u];var f=[{verticalAlign:"middle"},{align:"center"}];return{position:h,rotation:t.rotation,cursorPoint:d,tooltipOption:f[u]}}}),c={line:function(t,e,n,i){var a=s.makeLineShape([e,n[0]],[e,n[1]],r(t));return o.subPixelOptimizeLine({shape:a,style:i}),{type:"Line",shape:a}},shadow:function(t,e,n,i){var o=t.getBandWidth(),a=n[1]-n[0];return{type:"Rect",shape:s.makeRectShape([e-o/2,n[0]],[o,a],r(t))}}};u.registerAxisPointerClass("CartesianAxisPointer",h),t.exports=h},function(t,e,n){var i=n(1),r=n(5);t.exports=function(t,e){var n,o=[],a=t.seriesIndex;if(null==a||!(n=e.getSeriesByIndex(a)))return{point:[]};var s=n.getData(),l=r.queryDataIndex(s,t);if(null==l||i.isArray(l))return{point:[]};var u=s.getItemGraphicEl(l),h=n.coordinateSystem;if(n.getTooltipPosition)o=n.getTooltipPosition(l)||[];else if(h&&h.dataToPoint)o=h.dataToPoint(s.getValues(i.map(h.dimensions,function(t){return n.coordDimToDataDim(t)[0]}),l,!0))||[];else if(u){var c=u.getBoundingRect().clone();c.applyTransform(u.transform),o=[c.x+c.width/2,c.y+c.height/2]}return{point:o,el:u}}},function(t,e,n){function i(t,e){function n(n,i){t.on(n,function(n){var o=s(e);c(h(t).records,function(t){t&&i(t,n,o.dispatchAction)}),r(o.pendings,e)})}h(t).initialized||(h(t).initialized=!0,n("click",u.curry(a,"click")),n("mousemove",u.curry(a,"mousemove")),n("globalout",o))}function r(t,e){var n,i=t.showTip.length,r=t.hideTip.length;i?n=t.showTip[i-1]:r&&(n=t.hideTip[r-1]),n&&(n.dispatchAction=null,e.dispatchAction(n))}function o(t,e,n){t.handler("leave",null,n)}function a(t,e,n,i){e.handler(t,n,i)}function s(t){var e={showTip:[],hideTip:[]},n=function(i){var r=e[i.type];r?r.push(i):(i.dispatchAction=n,t.dispatchAction(i))};return{dispatchAction:n,pendings:e}}var l=n(9),u=n(1),h=n(5).makeGetter(),c=u.each,d={};d.register=function(t,e,n){if(!l.node){var r=e.getZr();h(r).records||(h(r).records={}),i(r,e);var o=h(r).records[t]||(h(r).records[t]={});o.handler=n}},d.unregister=function(t,e){if(!l.node){var n=e.getZr(),i=(h(n).records||{})[t];i&&(h(n).records[t]=null)}},t.exports=d},function(t,e,n){var i=n(1),r=n(77),o=n(2);o.registerAction("dataZoom",function(t,e){var n=r.createLinkedNodesFinder(i.bind(e.eachComponent,e,"dataZoom"),r.eachAxisDim,function(t,e){return t.get(e.axisIndex)}),o=[];e.eachComponent({mainType:"dataZoom",query:t},function(t,e){o.push.apply(o,n(t).nodes)}),i.each(o,function(e,n){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})})})},function(t,e,n){function i(t,e,n){n.getAxisProxy(t.name,e).reset(n)}function r(t,e,n){n.getAxisProxy(t.name,e).filterData(n)}var o=n(2);o.registerProcessor(function(t,e){t.eachComponent("dataZoom",function(t){t.eachTargetAxis(i),t.eachTargetAxis(r)}),t.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy(),n=e.getDataPercentWindow(),i=e.getDataValueWindow();t.setRawRange({start:n[0],end:n[1],startValue:i[0],endValue:i[1]},!0)})})},function(t,e,n){function i(t){var e=t[a];return e||(e=t[a]=[{}]),e}var r=n(1),o=r.each,a="\0_ec_hist_store",s={push:function(t,e){var n=i(t);o(e,function(e,i){for(var r=n.length-1;r>=0;r--){var o=n[r];if(o[i])break}if(r<0){var a=t.queryComponents({mainType:"dataZoom",subType:"select",id:i})[0];if(a){var s=a.getPercentRange();n[0][i]={dataZoomId:i,start:s[0],end:s[1]}}}}),n.push(e)},pop:function(t){var e=i(t),n=e[e.length-1];e.length>1&&e.pop();var r={};return o(n,function(t,n){for(var i=e.length-1;i>=0;i--){var t=e[i][n];if(t){r[n]=t;break}}}),r},clear:function(t){t[a]=null},count:function(t){return i(t).length}};t.exports=s},function(t,e,n){n(13).registerSubTypeDefaulter("dataZoom",function(t){return"slider"})},function(t,e,n){function i(t){B.call(this),this._zr=t,this.group=new F.Group,this._brushType,this._brushOption,this._panels,this._track=[],this._dragging,this._covers=[],this._creatingCover,this._creatingPanel,this._enableGlobalPan,this._uid="brushController_"+nt++,this._handlers={},Z(it,function(t,e){this._handlers[e]=V.bind(t,this)},this)}function r(t,e){var n=t._zr;t._enableGlobalPan||G.take(n,Q,t._uid),Z(t._handlers,function(t,e){n.on(e,t)}),t._brushType=e.brushType,t._brushOption=V.merge(V.clone(et),e,!0)}function o(t){var e=t._zr;G.release(e,Q,t._uid),Z(t._handlers,function(t,n){e.off(n,t)}),t._brushType=t._brushOption=null}function a(t,e){var n=rt[e.brushType].createCover(t,e);return n.__brushOption=e,u(n,e),t.group.add(n),n}function s(t,e){var n=c(e);return n.endCreating&&(n.endCreating(t,e),u(e,e.__brushOption)),e}function l(t,e){var n=e.__brushOption;c(e).updateCoverShape(t,e,n.range,n)}function u(t,e){var n=e.z;null==n&&(n=Y),t.traverse(function(t){t.z=n,t.z2=n})}function h(t,e){c(e).updateCommon(t,e),l(t,e)}function c(t){return rt[t.__brushOption.brushType]}function d(t,e,n){var i=t._panels;if(!i)return!0;var r,o=t._transform;return Z(i,function(t){t.isTargetByCursor(e,n,o)&&(r=t)}),r}function f(t,e){var n=t._panels;if(!n)return!0;var i=e.__brushOption.panelId;return null==i||n[i]}function p(t){var e=t._covers,n=e.length;return Z(e,function(e){t.group.remove(e)},t),e.length=0,!!n}function g(t,e){var n=q(t._covers,function(t){var e=t.__brushOption,n=V.clone(e.range);return{brushType:e.brushType,panelId:e.panelId,range:n}});t.trigger("brush",n,{isEnd:!!e.isEnd,removeOnClick:!!e.removeOnClick})}function m(t){var e=t._track;if(!e.length)return!1;var n=e[e.length-1],i=e[0],r=n[0]-i[0],o=n[1]-i[1],a=X(r*r+o*o,.5);return a>$}function v(t){var e=t.length-1;return e<0&&(e=0),[t[0],t[e]]}function y(t,e,n,i){var r=new F.Group;return r.add(new F.Rect({name:"main",style:w(n),silent:!0,draggable:!0,cursor:"move",drift:W(t,e,r,"nswe"),ondragend:W(g,e,{isEnd:!0})})),Z(i,function(n){r.add(new F.Rect({name:n,style:{opacity:0},draggable:!0,silent:!0,invisible:!0,drift:W(t,e,r,n),ondragend:W(g,e,{isEnd:!0})}))}),r}function x(t,e,n,i){var r=i.brushStyle.lineWidth||0,o=U(r,K),a=n[0][0],s=n[1][0],l=a-r/2,u=s-r/2,h=n[0][1],c=n[1][1],d=h-o+r/2,f=c-o+r/2,p=h-a,g=c-s,m=p+r,v=g+r;b(t,e,"main",a,s,p,g),i.transformable&&(b(t,e,"w",l,u,o,v),b(t,e,"e",d,u,o,v),b(t,e,"n",l,u,m,o),b(t,e,"s",l,f,m,o),b(t,e,"nw",l,u,o,o),b(t,e,"ne",d,u,o,o),b(t,e,"sw",l,f,o,o),b(t,e,"se",d,f,o,o))}function _(t,e){var n=e.__brushOption,i=n.transformable,r=e.childAt(0);r.useStyle(w(n)),r.attr({silent:!i,cursor:i?"move":"default"}),Z(["w","e","n","s","se","sw","ne","nw"],function(n){var r=e.childOfName(n),o=T(t,n);r&&r.attr({silent:!i,invisible:!i,cursor:i?tt[o]+"-resize":null})})}function b(t,e,n,i,r,o,a){var s=e.childOfName(n);s&&s.setShape(D(P(t,e,[[i,r],[i+o,r+a]])))}function w(t){return V.defaults({strokeNoScale:!0},t.brushStyle)}function M(t,e,n,i){var r=[j(t,n),j(e,i)],o=[U(t,n),U(e,i)];return[[r[0],o[0]],[r[1],o[1]]]}function S(t){return F.getTransform(t.group)}function T(t,e){if(e.length>1){e=e.split("");var n=[T(t,e[0]),T(t,e[1])];return("e"===n[0]||"w"===n[0])&&n.reverse(),n.join("")}var i={w:"left",e:"right",n:"top",s:"bottom"},r={left:"w",right:"e",top:"n",bottom:"s"},n=F.transformDirection(i[e],S(t));return r[n]}function A(t,e,n,i,r,o,a,s){var l=i.__brushOption,u=t(l.range),c=C(n,o,a);Z(r.split(""),function(t){var e=J[t];u[e[0]][e[1]]+=c[e[0]]}),l.range=e(M(u[0][0],u[1][0],u[0][1],u[1][1])),h(n,i),g(n,{isEnd:!1})}function I(t,e,n,i,r){var o=e.__brushOption.range,a=C(t,n,i);Z(o,function(t){t[0]+=a[0],t[1]+=a[1]}),h(t,e),g(t,{isEnd:!1})}function C(t,e,n){var i=t.group,r=i.transformCoordToLocal(e,n),o=i.transformCoordToLocal(0,0);return[r[0]-o[0],r[1]-o[1]]}function P(t,e,n){var i=f(t,e);return i&&i!==!0?i.clipPath(n,t._transform):V.clone(n)}function D(t){var e=j(t[0][0],t[1][0]),n=j(t[0][1],t[1][1]),i=U(t[0][0],t[1][0]),r=U(t[0][1],t[1][1]);return{x:e,y:n,width:i-e,height:r-n}}function k(t,e,n){if(t._brushType){var i=t._zr,r=t._covers,o=d(t,e,n);if(!t._dragging)for(var a=0;a<r.length;a++){var s=r[a].__brushOption;if(o&&(o===!0||s.panelId===o.panelId)&&rt[s.brushType].contain(r[a],n[0],n[1]))return}o&&i.setCursorStyle("crosshair")}}function L(t){var e=t.event;e.preventDefault&&e.preventDefault()}function O(t,e,n){return t.childOfName("main").contain(e,n)}function z(t,e,n,i){var r,o=t._creatingCover,u=t._creatingPanel,h=t._brushOption;if(t._track.push(n.slice()),m(t)||o){if(u&&!o){"single"===h.brushMode&&p(t);var c=V.clone(h);c.brushType=E(c.brushType,u),c.panelId=u===!0?null:u.panelId,o=t._creatingCover=a(t,c),t._covers.push(o)}if(o){var f=rt[E(t._brushType,u)],g=o.__brushOption;g.range=f.getCreatingRange(P(t,o,t._track)),i&&(s(t,o),f.updateCommon(t,o)),l(t,o),r={isEnd:i}}}else i&&"single"===h.brushMode&&h.removeOnClick&&d(t,e,n)&&p(t)&&(r={isEnd:i,removeOnClick:!0});return r}function E(t,e){return"auto"===t?e.defaultBrushType:t}function N(t){if(this._dragging){L(t);var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY),n=z(this,t,e,!0);this._dragging=!1,this._track=[],this._creatingCover=null,n&&g(this,n)}}function R(t){return{createCover:function(e,n){return y(W(A,function(e){var n=[e,[0,100]];return t&&n.reverse(),n},function(e){return e[t]}),e,n,[["w","e"],["n","s"]][t])},getCreatingRange:function(e){var n=v(e),i=j(n[0][t],n[1][t]),r=U(n[0][t],n[1][t]);return[i,r]},updateCoverShape:function(e,n,i,r){var o,a=f(e,n);if(a!==!0&&a.getLinearBrushOtherExtent)o=a.getLinearBrushOtherExtent(t,e._transform);else{var s=e._zr;o=[0,[s.getWidth(),s.getHeight()][1-t]]}var l=[i,o];t&&l.reverse(),x(e,n,l,r)},updateCommon:_,contain:O}}var B=n(23),V=n(1),F=n(3),G=n(129),H=n(48),W=V.curry,Z=V.each,q=V.map,j=Math.min,U=Math.max,X=Math.pow,Y=1e4,$=6,K=6,Q="globalPan",J={w:[0,0],e:[0,1],n:[1,0],s:[1,1]},tt={w:"ew",e:"ew",n:"ns",s:"ns",ne:"nesw",sw:"nesw",nw:"nwse",se:"nwse"},et={brushStyle:{lineWidth:2,stroke:"rgba(0,0,0,0.3)",fill:"rgba(0,0,0,0.1)"},transformable:!0,brushMode:"single",removeOnClick:!1},nt=0;i.prototype={constructor:i,enableBrush:function(t){return this._brushType&&o(this),t.brushType&&r(this,t),this},setPanels:function(t){if(t&&t.length){var e=this._panels={};V.each(t,function(t){e[t.panelId]=V.clone(t)})}else this._panels=null;return this},mount:function(t){t=t||{},this._enableGlobalPan=t.enableGlobalPan;var e=this.group;return this._zr.add(e),e.attr({position:t.position||[0,0],rotation:t.rotation||0,scale:t.scale||[1,1]}),this._transform=e.getLocalTransform(),this},eachCover:function(t,e){Z(this._covers,t,e)},updateCovers:function(t){function e(t,e){return(null!=t.id?t.id:o+e)+"-"+t.brushType}function n(t,n){return e(t.__brushOption,n)}function i(e,n){var i=t[e];if(null!=n&&l[n]===d)u[e]=l[n];else{var r=u[e]=null!=n?(l[n].__brushOption=i,l[n]):s(c,a(c,i));h(c,r)}}function r(t){l[t]!==d&&c.group.remove(l[t])}t=V.map(t,function(t){return V.merge(V.clone(et),t,!0)});var o="\0-brush-index-",l=this._covers,u=this._covers=[],c=this,d=this._creatingCover;return new H(l,t,n,e).add(i).update(i).remove(r).execute(),this},unmount:function(){return this.enableBrush(!1),p(this),this._zr.remove(this.group),this},dispose:function(){this.unmount(),this.off()}},V.mixin(i,B);var it={mousedown:function(t){if(this._dragging)N.call(this,t);else if(!t.target||!t.target.draggable){L(t);var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);this._creatingCover=null;var n=this._creatingPanel=d(this,t,e);n&&(this._dragging=!0,this._track=[e.slice()])}},mousemove:function(t){var e=this.group.transformCoordToLocal(t.offsetX,t.offsetY);if(k(this,t,e),this._dragging){L(t);var n=z(this,t,e,!1);n&&g(this,n)}},mouseup:N},rt={lineX:R(0),lineY:R(1),rect:{createCover:function(t,e){return y(W(A,function(t){return t},function(t){return t}),t,e,["w","e","n","s","se","sw","ne","nw"])},getCreatingRange:function(t){var e=v(t);return M(e[1][0],e[1][1],e[0][0],e[0][1])},updateCoverShape:function(t,e,n,i){x(t,e,n,i)},updateCommon:_,contain:O},polygon:{createCover:function(t,e){var n=new F.Group;return n.add(new F.Polyline({name:"main",style:w(e),silent:!0})),n},getCreatingRange:function(t){return t},endCreating:function(t,e){e.remove(e.childAt(0)),e.add(new F.Polygon({name:"main",draggable:!0,drift:W(I,t,e),ondragend:W(g,t,{isEnd:!0})}))},updateCoverShape:function(t,e,n,i){e.childAt(0).setShape({points:P(t,e,n)})},updateCommon:_,contain:O}};t.exports=i},function(t,e){var n={},i={axisPointer:1,tooltip:1,brush:1};n.onIrrelevantElement=function(t,e,n){var r=e.getComponentByElement(t.topTarget),o=r&&r.coordinateSystem;return r&&r!==n&&!i[r.mainType]&&o&&o.model!==n},t.exports=n},function(t,e,n){function i(t){return t[r]||(t[r]={})}var r="\0_ec_interaction_mutex",o={take:function(t,e,n){var r=i(t);r[e]=n},release:function(t,e,n){var r=i(t),o=r[e];o===n&&(r[e]=null)},isTaken:function(t,e){return!!i(t)[e]}};n(2).registerAction({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},function(){}),t.exports=o},function(t,e,n){function i(t,e,n){r.positionElement(t,e.getBoxLayoutParams(),{width:n.getWidth(),height:n.getHeight()},e.get("padding"))}var r=n(12),o=n(7),a=n(3);t.exports={layout:function(t,e,n){var o=r.getLayoutRect(e.getBoxLayoutParams(),{width:n.getWidth(),height:n.getHeight()},e.get("padding"));r.box(e.get("orient"),t,e.get("itemGap"),o.width,o.height),i(t,e,n)},addBackground:function(t,e){var n=o.normalizeCssArray(e.get("padding")),i=t.getBoundingRect(),r=e.getItemStyle(["color","opacity"]);r.fill=e.get("backgroundColor");var s=new a.Rect({shape:{x:i.x-n[3],y:i.y-n[0],width:i.width+n[1]+n[3],height:i.height+n[0]+n[2]},style:r,silent:!0,z2:-1});a.subPixelOptimizeRect(s),t.add(s)}}},function(t,e,n){var i=n(1),r=n(33),o=function(t,e,n,i,o){r.call(this,t,e,n),this.type=i||"value",this.position=o||"bottom"};o.prototype={constructor:o,index:0,onZero:!1,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},isLabelIgnored:function(t){if("category"===this.type){var e=this.getLabelInterval();return"function"==typeof e&&!e(t,this.scale.getLabel(t))||t%(e+1)}},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},i.inherits(o,r),t.exports=o},function(t,e,n){"use strict";function i(t){return this._axes[t]}var r=n(1),o=function(t){this._axes={},this._dimList=[],this.name=t||""};o.prototype={constructor:o,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return r.map(this._dimList,i,this)},getAxesByScale:function(t){return t=t.toLowerCase(),r.filter(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var o=n[r],a=this._axes[o];i[o]=a[e](t[o])}return i}},t.exports=o},function(t,e,n){"use strict";function i(t){o.call(this,t)}var r=n(1),o=n(132);i.prototype={constructor:i,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoints:function(t,e){return t.mapArray(["x","y"],function(t,e){return this.dataToPoint([t,e])},e,this)},dataToPoint:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return[n.toGlobalCoord(n.dataToCoord(t[0],e)),i.toGlobalCoord(i.dataToCoord(t[1],e))]},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return[n.coordToData(n.toLocalCoord(t[0]),e),i.coordToData(i.toLocalCoord(t[1]),e)]},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},r.inherits(i,o),t.exports=i},function(t,e,n){"use strict";n(60);var i=n(13);t.exports=i.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}})},function(t,e,n){var i=n(28),r=n(24),o=n(18),a=n(42),s=n(10),l=n(1);t.exports={createList:function(t){var e=t.get("data");return i(e,t,t.ecModel)},completeDimensions:n(25),createSymbol:r.createSymbol,createScale:function(t,e){var n=e;e instanceof s||(n=new s(e),l.mixin(n,a));var i=o.createScaleByModel(n);return i.setExtent(t[0],t[1]),o.niceScaleExtent(i,n),i},mixinAxisModelCommonMethods:function(t){l.mixin(t,a)}}},function(t,e,n){var i=n(3),r=n(1),o=Math.PI;t.exports=function(t,e){e=e||{},r.defaults(e,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new i.Rect({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),a=new i.Arc({shape:{startAngle:-o/2,endAngle:-o/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),s=new i.Rect({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});a.animateShape(!0).when(1e3,{endAngle:3*o/2}).start("circularInOut"),a.animateShape(!0).when(1e3,{startAngle:3*o/2}).delay(300).start("circularInOut");var l=new i.Group;return l.add(a),l.add(s),l.add(n),l.resize=function(){var e=t.getWidth()/2,i=t.getHeight()/2;a.setShape({cx:e,cy:i});var r=a.shape.r;s.setShape({x:e-r,y:i-r,width:2*r,height:2*r}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},l.resize(),l}},function(t,e,n){function i(t,e){h.each(e,function(e,n){x.hasClass(n)||("object"==typeof e?t[n]=t[n]?h.merge(t[n],e,!1):h.clone(e):null==t[n]&&(t[n]=e))})}function r(t){t=t,this.option={},this.option[b]=1,this._componentsMap=h.createHashMap({series:[]}),this._seriesIndices=null,i(t,this._theme.option),h.merge(t,_,!1),this.mergeOption(t)}function o(t,e){h.isArray(e)||(e=e?[e]:[]);var n={};return f(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function a(t,e,n){var i=e.type?e.type:n?n.subType:x.determineSubType(t,e);return i}function s(t){return g(t,function(t){return t.componentIndex})||[]}function l(t,e){return e.hasOwnProperty("subType")?p(t,function(t){return t.subType===e.subType}):t}function u(t){}var h=n(1),c=n(5),d=n(10),f=h.each,p=h.filter,g=h.map,m=h.isArray,v=h.indexOf,y=h.isObject,x=n(13),_=n(139),b="\0_ec_inner",w=d.extend({
constructor:w,init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new d(n),this._optionManager=i},setOption:function(t,e){h.assert(!(b in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):r.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var o=n.getTimelineOption(this);o&&(this.mergeOption(o),e=!0)}if(!t||"recreate"===t||"media"===t){var a=n.getMediaOption(this,this._api);a.length&&f(a,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){function e(e,r){var l=c.normalizeToArray(t[e]),u=c.mappingToExists(i.get(e),l);c.makeIdAndName(u),f(u,function(t,n){var i=t.option;y(i)&&(t.keyInfo.mainType=e,t.keyInfo.subType=a(e,i,t.exist))});var d=o(i,r);n[e]=[],i.set(e,[]),f(u,function(t,r){var o=t.exist,a=t.option;if(h.assert(y(a)||o,"Empty component definition"),a){var s=x.getClass(e,t.keyInfo.subType,!0);if(o&&o instanceof s)o.name=t.keyInfo.name,o.mergeOption(a,this),o.optionUpdated(a,!1);else{var l=h.extend({dependentModels:d,componentIndex:r},t.keyInfo);o=new s(a,this,this,l),h.extend(o,l),o.init(a,this,this,l),o.optionUpdated(null,!0)}}else o.mergeOption({},this),o.optionUpdated({},!1);i.get(e)[r]=o,n[e][r]=o.option},this),"series"===e&&(this._seriesIndices=s(i.get("series")))}var n=this.option,i=this._componentsMap,r=[];f(t,function(t,e){null!=t&&(x.hasClass(e)?r.push(e):n[e]=null==n[e]?h.clone(t):h.merge(n[e],t,!0))}),x.topologicalTravel(r,x.getAllClassMainTypes(),e,this),this._seriesIndices=this._seriesIndices||[]},getOption:function(){var t=h.clone(this.option);return f(t,function(e,n){if(x.hasClass(n)){for(var e=c.normalizeToArray(e),i=e.length-1;i>=0;i--)c.isIdInner(e[i])&&e.splice(i,1);t[n]=e}}),delete t[b],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n=t.index,i=t.id,r=t.name,o=this._componentsMap.get(e);if(!o||!o.length)return[];var a;if(null!=n)m(n)||(n=[n]),a=p(g(n,function(t){return o[t]}),function(t){return!!t});else if(null!=i){var s=m(i);a=p(o,function(t){return s&&v(i,t.id)>=0||!s&&t.id===i})}else if(null!=r){var u=m(r);a=p(o,function(t){return u&&v(r,t.name)>=0||!u&&t.name===r})}else a=o.slice();return l(a,t)},findComponents:function(t){function e(t){var e=r+"Index",n=r+"Id",i=r+"Name";return!t||null==t[e]&&null==t[n]&&null==t[i]?null:{mainType:r,index:t[e],id:t[n],name:t[i]}}function n(e){return t.filter?p(e,t.filter):e}var i=t.query,r=t.mainType,o=e(i),a=o?this.queryComponents(o):this._componentsMap.get(r);return n(l(a,t))},eachComponent:function(t,e,n){var i=this._componentsMap;if("function"==typeof t)n=e,e=t,i.each(function(t,i){f(t,function(t,r){e.call(n,i,t,r)})});else if(h.isString(t))f(i.get(t),e,n);else if(y(t)){var r=this.findComponents(t);f(r,e,n)}},getSeriesByName:function(t){var e=this._componentsMap.get("series");return p(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){var e=this._componentsMap.get("series");return p(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},eachSeries:function(t,e){u(this),f(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){f(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){u(this),f(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return f(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return u(this),h.indexOf(this._seriesIndices,t.componentIndex)<0},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){u(this);var n=p(this._componentsMap.get("series"),t,e);this._seriesIndices=s(n)},restoreData:function(){var t=this._componentsMap;this._seriesIndices=s(t.get("series"));var e=[];t.each(function(t,n){e.push(n)}),x.topologicalTravel(e,x.getAllClassMainTypes(),function(e,n){f(t.get(e),function(t){t.restoreData()})})}});h.mixin(w,n(62)),t.exports=w},function(t,e,n){function i(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function r(t,e,n){var i,r,o=[],a=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},o=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;d(l,function(t){t&&t.option&&(t.query?a.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),d([r].concat(o).concat(u.map(a,function(t){return t.option})),function(t){d(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:o,mediaDefault:i,mediaList:a}}function o(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return u.each(t,function(t,e){var n=e.match(m);if(n&&n[1]&&n[2]){var o=n[1],s=n[2].toLowerCase();a(i[s],t,o)||(r=!1)}}),r}function a(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e}function s(t,e){return t.join(",")===e.join(",")}function l(t,e){e=e||{},d(e,function(e,n){if(null!=e){var i=t[n];if(c.hasClass(n)){e=h.normalizeToArray(e),i=h.normalizeToArray(i);var r=h.mappingToExists(i,e);t[n]=p(r,function(t){return t.option&&t.exist?g(t.exist,t.option,!0):t.exist||t.option})}else t[n]=g(i,e,!0)}})}var u=n(1),h=n(5),c=n(13),d=u.each,f=u.clone,p=u.map,g=u.merge,m=/^(min|max)?(.+)$/;i.prototype={constructor:i,setOption:function(t,e){t=f(t,!0);var n=this._optionBackup,i=r.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(l(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=p(e.timelineOptions,f),this._mediaList=p(e.mediaList,f),this._mediaDefault=f(e.mediaDefault),this._currentMediaIndices=[],f(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=f(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,a=[],l=[];if(!i.length&&!r)return l;for(var u=0,h=i.length;u<h;u++)o(i[u].query,e,n)&&a.push(u);return!a.length&&r&&(a=[-1]),a.length&&!s(a,this._currentMediaIndices)&&(l=p(a,function(t){return f(t===-1?r.option:i[t].option)})),this._currentMediaIndices=a,l}},t.exports=i},function(t,e){var n="";"undefined"!=typeof navigator&&(n=navigator.platform||""),t.exports={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],textStyle:{fontFamily:n.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1}},function(t,e,n){t.exports={getAreaStyle:n(31)([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]])}},function(t,e){t.exports={getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}},function(t,e,n){var i=n(31)([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]);t.exports={getItemStyle:function(t,e){var n=i.call(this,t,e),r=this.getBorderLineDash();return r&&(n.lineDash=r),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}}},function(t,e,n){var i=n(31)([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]);t.exports={getLineStyle:function(t){var e=i.call(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}}},function(t,e,n){var i=n(16),r=n(3);t.exports={getTextColor:function(){var t=this.ecModel;return this.getShallow("color")||t&&t.get("textStyle.color")},getFont:function(){return r.getFont({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return i.getBoundingRect(t,this.getFont(),this.getShallow("align"),this.getShallow("baseline"))},truncateText:function(t,e,n,r){return i.truncateText(t,e,this.getFont(),n,r)}}},function(t,e,n){function i(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&(n=n&&n[e[i]],null!=n);i++);return n}function r(t,e,n,i){e=e.split(",");for(var r,o=t,a=0;a<e.length-1;a++)r=e[a],null==o[r]&&(o[r]={}),o=o[r];(i||null==o[e[a]])&&(o[e[a]]=n)}function o(t){c(l,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}var a=n(1),s=n(146),l=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],u=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],h=["bar","boxplot","candlestick","chord","effectScatter","funnel","gauge","lines","graph","heatmap","line","map","parallel","pie","radar","sankey","scatter","treemap"],c=a.each;t.exports=function(t){c(t.series,function(t){if(a.isObject(t)){var e=t.type;if(s(t),"pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=i(t,"pointer.color");null!=n&&r(t,"itemStyle.normal.color",n)}for(var l=0;l<h.length;l++)if(h[l]===t.type){o(t);break}}}),t.dataRange&&(t.visualMap=t.dataRange),c(u,function(e){var n=t[e];n&&(a.isArray(n)||(n=[n]),c(n,function(t){o(t)}))})}},function(t,e,n){function i(t){var e=t&&t.itemStyle;e&&r.each(o,function(n){var i=e.normal,o=e.emphasis;i&&i[n]&&(t[n]=t[n]||{},t[n].normal?r.merge(t[n].normal,i[n]):t[n].normal=i[n],i[n]=null),o&&o[n]&&(t[n]=t[n]||{},t[n].emphasis?r.merge(t[n].emphasis,o[n]):t[n].emphasis=o[n],o[n]=null)})}var r=n(1),o=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"];t.exports=function(t){if(t){i(t),i(t.markPoint),i(t.markLine);var e=t.data;if(e){for(var n=0;n<e.length;n++)i(e[n]);var o=t.markPoint;if(o&&o.data)for(var a=o.data,n=0;n<a.length;n++)i(a[n]);var s=t.markLine;if(s&&s.data)for(var l=s.data,n=0;n<l.length;n++)r.isArray(l[n])?(i(l[n][0]),i(l[n][1])):i(l[n])}}}},function(t,e){var n={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-(1/0),n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return e},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return e},nearest:function(t){return t[0]}},i=function(t,e){return Math.round(t.length/2)};t.exports=function(t,e,r){e.eachSeriesByType(t,function(t){var e=t.getData(),r=t.get("sampling"),o=t.coordinateSystem;if("cartesian2d"===o.type&&r){var a=o.getBaseAxis(),s=o.getOtherAxis(a),l=a.getExtent(),u=l[1]-l[0],h=Math.round(e.count()/u);if(h>1){var c;"string"==typeof r?c=n[r]:"function"==typeof r&&(c=r),c&&(e=e.downSample(s.dim,1/h,c,i),t.setData(e))}}},this)}},function(t,e,n){function i(t,e){return c(t,h(e))}var r=n(1),o=n(34),a=n(4),s=n(43),l=o.prototype,u=s.prototype,h=a.getPrecisionSafe,c=a.round,d=Math.floor,f=Math.ceil,p=Math.pow,g=Math.log,m=o.extend({type:"log",base:10,$constructor:function(){o.apply(this,arguments),this._originalScale=new s},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return r.map(u.getTicks.call(this),function(r){var o=a.round(p(this.base,r));return o=r===e[0]&&t.__fixMin?i(o,n[0]):o,o=r===e[1]&&t.__fixMax?i(o,n[1]):o},this)},getLabel:u.getLabel,scale:function(t){return t=l.scale.call(this,t),p(this.base,t)},setExtent:function(t,e){var n=this.base;t=g(t)/g(n),e=g(e)/g(n),u.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=l.getExtent.call(this);e[0]=p(t,e[0]),e[1]=p(t,e[1]);var n=this._originalScale,r=n.getExtent();return n.__fixMin&&(e[0]=i(e[0],r[0])),n.__fixMax&&(e[1]=i(e[1],r[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=g(t[0])/g(e),t[1]=g(t[1])/g(e),l.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getDataExtent(e,!0,function(t){return t>0}))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var i=a.quantity(n),r=t/n*i;for(r<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var o=[a.round(f(e[0]/i)*i),a.round(d(e[1]/i)*i)];this._interval=i,this._niceExtent=o}},niceExtent:function(t){u.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});r.each(["contain","normalize"],function(t){m.prototype[t]=function(e){return e=g(e)/g(this.base),l[t].call(this,e)}}),m.create=function(){return new m},t.exports=m},function(t,e,n){var i=n(1),r=n(34),o=r.prototype,a=r.extend({type:"ordinal",init:function(t,e){this._data=t,this._extent=e||[0,t.length-1]},parse:function(t){return"string"==typeof t?i.indexOf(this._data,t):Math.round(t)},contain:function(t){return t=this.parse(t),o.contain.call(this,t)&&null!=this._data[t]},normalize:function(t){return o.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(o.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){return this._data[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getDataExtent(e,!1))},niceTicks:i.noop,niceExtent:i.noop});a.create=function(){return new a},t.exports=a},function(t,e,n){var i=n(1),r=n(4),o=n(7),a=n(64),s=n(43),l=s.prototype,u=Math.ceil,h=Math.floor,c=1e3,d=60*c,f=60*d,p=24*f,g=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][2]<e?n=r+1:i=r}return n},m=s.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return o.formatTime(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=p,e[1]+=p),e[1]===-(1/0)&&e[0]===1/0){var n=new Date;e[1]=new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-p}this.niceTicks(t.splitNumber);var i=this._interval;t.fixMin||(e[0]=r.round(h(e[0]/i)*i)),t.fixMax||(e[1]=r.round(u(e[1]/i)*i))},niceTicks:function(t){var e=this.getSetting("useUTC")?0:60*r.getTimezoneOffset()*1e3;t=t||10;var n=this._extent,i=n[1]-n[0],o=i/t,s=v.length,l=g(v,o,0,s),c=v[Math.min(l,s-1)],d=c[2];if("year"===c[0]){var f=i/d,p=r.nice(f/t,!0);d*=p}var m=[Math.round(u((n[0]-e)/d)*d+e),Math.round(h((n[1]-e)/d)*d+e)];a.fixExtent(m,n),this._stepLvl=c,this._interval=d,this._niceExtent=m},parse:function(t){return+r.parseDate(t)}});i.each(["contain","normalize"],function(t){m.prototype[t]=function(e){return l[t].call(this,this.parse(e))}});var v=[["hh:mm:ss",1,c],["hh:mm:ss",5,5*c],["hh:mm:ss",10,10*c],["hh:mm:ss",15,15*c],["hh:mm:ss",30,30*c],["hh:mm\nMM-dd",1,d],["hh:mm\nMM-dd",5,5*d],["hh:mm\nMM-dd",10,10*d],["hh:mm\nMM-dd",15,15*d],["hh:mm\nMM-dd",30,30*d],["hh:mm\nMM-dd",1,f],["hh:mm\nMM-dd",2,2*f],["hh:mm\nMM-dd",6,6*f],["hh:mm\nMM-dd",12,12*f],["MM-dd\nyyyy",1,p],["week",7,7*p],["month",1,31*p],["quarter",3,380*p/4],["half-year",6,380*p/2],["year",1,380*p]];m.create=function(t){return new m({useUTC:t.ecModel.get("useUTC")})},t.exports=m},function(t,e,n){var i=n(39);t.exports=function(t){function e(e){var n=(e.visualColorAccessPath||"itemStyle.normal.color").split("."),r=e.getData(),o=e.get(n)||e.getColorFromPalette(e.get("name"));r.setVisual("color",o),t.isSeriesFiltered(e)||("function"!=typeof o||o instanceof i||r.each(function(t){r.setItemVisual(t,"color",o(e.getDataParams(t)))}),r.each(function(t){var e=r.getItemModel(t),i=e.get(n,!0);null!=i&&r.setItemVisual(t,"color",i)}))}t.eachRawSeries(e)}},function(t,e,n){"use strict";function i(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch}}function r(){}function o(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||u}return!1}var a=n(1),s=n(179),l=n(23),u="silent";r.prototype.dispose=function(){};var h=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],c=function(t,e,n,i){l.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new r,this.proxy=n,n.handler=this,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,s.call(this),a.each(h,function(t){n.on&&n.on(t,this[t],this)},this)};c.prototype={constructor:c,mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=this._hovered=this.findHover(e,n),o=r.target,a=i.target,s=this.proxy;s.setCursor&&s.setCursor(o?o.cursor:"default"),a&&o!==a&&a.__zr&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(r,"mousemove",t),o&&o!==a&&this.dispatchToElement(r,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do n=n&&n.parentNode;while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){t=t||{};for(var r="on"+e,o=i(e,t,n),a=t.target;a&&(a[r]&&(o.cancelBubble=a[r].call(a,o)),a.trigger(e,o),a=a.parent,!o.cancelBubble););o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o)}))},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={},a=i.length-1;a>=0;a--){var s;if(i[a]!==n&&!i[a].ignore&&(s=o(i[a],t,e))&&(!r.topTarget&&(r.topTarget=i[a]),s!==u)){r.target=i[a];break}}return r}},a.each(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){c.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downel=i,this._upel=i;else if("mosueup"===t)this._upel=i;else if("click"===t&&this._downel!==this._upel)return;this.dispatchToElement(n,t,e)}}),a.mixin(c,l),a.mixin(c,s),t.exports=c},function(t,e,n){function i(){return!1}function r(t,e,n,i){var r=document.createElement(e),o=n.getWidth(),a=n.getHeight(),s=r.style;return s.position="absolute",s.left=0,s.top=0,s.width=o+"px",s.height=a+"px",r.width=o*i,r.height=a*i,r.setAttribute("data-zr-dom-id",t),r}var o=n(1),a=n(35),s=n(73),l=n(72),u=function(t,e,n){var s;n=n||a.devicePixelRatio,"string"==typeof t?s=r(t,"canvas",e,n):o.isObject(t)&&(s=t,t=s.id),this.id=t,this.dom=s;var l=s.style;l&&(s.onselectstart=i,l["-webkit-user-select"]="none",l["user-select"]="none",l["-webkit-touch-callout"]="none",l["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",l.padding=0,l.margin=0,l["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};u.prototype={constructor:u,elCount:0,__dirty:!0,initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=r("back-"+this.id,"canvas",this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,o=this.domBack;r.width=t+"px",r.height=e+"px",i.width=t*n,i.height=e*n,o&&(o.width=t*n,o.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t){var e=this.dom,n=this.ctx,i=e.width,r=e.height,o=this.clearColor,a=this.motionBlur&&!t,u=this.lastFrameAlpha,h=this.dpr;if(a&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(e,0,0,i/h,r/h)),n.clearRect(0,0,i,r),o){var c;o.colorStops?(c=o.__canvasGradient||s.getGradient(n,o,{x:0,y:0,width:i,height:r}),o.__canvasGradient=c):o.image&&(c=l.prototype.getCanvasPattern.call(o,n)),n.save(),n.fillStyle=c||o,n.fillRect(0,0,i,r),n.restore()}if(a){var d=this.domBack;n.save(),n.globalAlpha=u,n.drawImage(d,0,0,i,r),n.restore()}}},t.exports=u},function(t,e,n){"use strict";function i(t){return parseInt(t,10)}function r(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function o(t){t.__unusedCount++}function a(t){1==t.__unusedCount&&t.clear()}function s(t,e,n){return x.copy(t.getBoundingRect()),t.transform&&x.applyTransform(t.transform),_.width=e,_.height=n,!x.intersect(_)}function l(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}function u(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function h(t,e){var n=document.createElement("div");return n.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}var c=n(35),d=n(1),f=n(52),p=n(11),g=n(51),m=n(153),v=n(68),y=5,x=new p(0,0,0,0),_=new p(0,0,0,0),b=function(t,e,n){var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=d.extend({},n||{}),this.dpr=n.devicePixelRatio||c.devicePixelRatio,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var o=this._zlevelList=[],a=this._layers={};if(this._layerConfig={},i){null!=n.width&&(t.width=n.width),null!=n.height&&(t.height=n.height);var s=t.width,l=t.height;this._width=s,this._height=l;var u=new m(t,this,1);u.initContext(),a[0]=u,o.push(0),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var f=this._domRoot=h(this._width,this._height);t.appendChild(f)}this._progressiveLayers=[],this._hoverlayer,this._hoverElements=[]};b.prototype={constructor:b,isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._paintList(e,t);for(var i=0;i<n.length;i++){var r=n[i],o=this._layers[r];!o.__builtin__&&o.refresh&&o.refresh()}return this.refreshHover(),this._progressiveLayers.length&&this._startProgessive(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape});n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=d.indexOf(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){g(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;r<e;){var o=t[r],a=o.__from;a&&a.__zr?(r++,a.invisible||(o.transform=a.transform,o.invTransform=a.invTransform,o.__clipPaths=a.__clipPaths,this._doPaintEl(o,n,!0,i))):(t.splice(r,1),a.__hoverMir=null,e--)}n.ctx.restore()}},_startProgessive:function(){function t(){n===e._progressiveToken&&e.storage&&(e._doPaintList(e.storage.getDisplayList()),e._furtherProgressive?(e._progress++,v(t)):e._progressiveToken=-1)}var e=this;if(e._furtherProgressive){var n=e._progressiveToken=+new Date;e._progress++,v(t)}},_clearProgressive:function(){this._progressiveToken=-1,this._progress=0,d.each(this._progressiveLayers,function(t){t.__dirty&&t.clear()})},_paintList:function(t,e){null==e&&(e=!1),this._updateLayerStatus(t),this._clearProgressive(),this.eachBuiltinLayer(o),this._doPaintList(t,e),this.eachBuiltinLayer(a)},_doPaintList:function(t,e){function n(t){var e=o.dpr||1;o.save(),o.globalAlpha=1,o.shadowBlur=0,i.__dirty=!0,o.setTransform(1,0,0,1,0,0),o.drawImage(t.dom,0,0,h*e,c*e),o.restore()}for(var i,r,o,a,s,l,u=0,h=this._width,c=this._height,p=this._progress,g=0,m=t.length;g<m;g++){var v=t[g],x=this._singleCanvas?0:v.zlevel,_=v.__frame;if(_<0&&s&&(n(s),s=null),r!==x&&(o&&o.restore(),a={},r=x,i=this.getLayer(r),i.__builtin__||f("ZLevel "+r+" has been used by unkown layer "+i.id),o=i.ctx,o.save(),i.__unusedCount=0,(i.__dirty||e)&&i.clear()),i.__dirty||e){if(_>=0){if(!s){if(s=this._progressiveLayers[Math.min(u++,y-1)],s.ctx.save(),s.renderScope={},s&&s.__progress>s.__maxProgress){g=s.__nextIdxNotProg-1;continue}l=s.__progress,s.__dirty||(p=l),s.__progress=p+1}_===p&&this._doPaintEl(v,s,!0,s.renderScope)}else this._doPaintEl(v,i,e,a);v.__dirty=!1}}s&&n(s),o&&o.restore(),this._furtherProgressive=!1,d.each(this._progressiveLayers,function(t){t.__maxProgress>=t.__progress&&(this._furtherProgressive=!0)},this)},_doPaintEl:function(t,e,n,i){var r=e.ctx,o=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!o||o[0]||o[3])&&(!t.culling||!s(t,this._width,this._height))){var a=t.__clipPaths;(i.prevClipLayer!==e||l(a,i.prevElClipPaths))&&(i.prevElClipPaths&&(i.prevClipLayer.ctx.restore(),i.prevClipLayer=i.prevElClipPaths=null,i.prevEl=null),a&&(r.save(),u(a,r),i.prevClipLayer=e,i.prevElClipPaths=a)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t){if(this._singleCanvas)return this._layers[0];var e=this._layers[t];return e||(e=new m("zr_"+t,this,this.dpr),e.__builtin__=!0,this._layerConfig[t]&&d.merge(e,this._layerConfig[t],!0),this.insertLayer(t,e),e.initContext()),e},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,o=i.length,a=null,s=-1,l=this._domRoot;if(n[t])return void f("ZLevel "+t+" has been used already");if(!r(e))return void f("Layer of zlevel "+t+" is not valid");if(o>0&&t>i[0]){for(s=0;s<o-1&&!(i[s]<t&&i[s+1]>t);s++);a=n[i[s]]}if(i.splice(s+1,0,t),n[t]=e,!e.virtual)if(a){var u=a.dom;u.nextSibling?l.insertBefore(e.dom,u.nextSibling):l.appendChild(e.dom)}else l.firstChild?l.insertBefore(e.dom,l.firstChild):l.appendChild(e.dom)},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],n=this._layers[i],n.__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],n=this._layers[i],n.__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){var e=this._layers,n=this._progressiveLayers,i={},r={};this.eachBuiltinLayer(function(t,e){i[e]=t.elCount,t.elCount=0,t.__dirty=!1}),d.each(n,function(t,e){r[e]=t.elCount,t.elCount=0,t.__dirty=!1});for(var o,a,s=0,l=0,u=0,h=t.length;u<h;u++){var c=t[u],f=this._singleCanvas?0:c.zlevel,p=e[f],g=c.progressive;if(p&&(p.elCount++,p.__dirty=p.__dirty||c.__dirty),g>=0){a!==g&&(a=g,l++);var v=c.__frame=l-1;if(!o){var x=Math.min(s,y-1);o=n[x],o||(o=n[x]=new m("progressive",this,this.dpr),o.initContext()),o.__maxProgress=0}o.__dirty=o.__dirty||c.__dirty,o.elCount++,o.__maxProgress=Math.max(o.__maxProgress,v),o.__maxProgress>=o.__progress&&(p.__dirty=!0)}else c.__frame=-1,o&&(o.__nextIdxNotProg=u,s++,o=null)}o&&(s++,o.__nextIdxNotProg=u),this.eachBuiltinLayer(function(t,e){i[e]!==t.elCount&&(t.__dirty=!0)}),n.length=Math.min(s,y),d.each(n,function(t,e){r[e]!==t.elCount&&(c.__dirty=!0),t.__dirty&&(t.__progress=0)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?d.merge(n[t],e,!0):n[t]=e;var i=this._layers[t];i&&d.merge(i,n[t],!0)}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(d.indexOf(n,t),1))},resize:function(t,e){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){n.style.width=t+"px",n.style.height=e+"px";for(var r in this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);d.each(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}return this._width=t,this._height=e,this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){function e(t,e){var i=a._zlevelList;null==t&&(t=-(1/0));for(var r,o=0;o<i.length;o++){var s=i[o],l=a._layers[s];if(!l.__builtin__&&s>t&&s<e){r=l;break}}r&&r.renderToCanvas&&(n.ctx.save(),r.renderToCanvas(n.ctx),n.ctx.restore())}if(t=t||{},this._singleCanvas)return this._layers[0].dom;var n=new m("image",this,t.pixelRatio||this.dpr);n.initContext(),n.clearColor=t.backgroundColor,n.clear();for(var i,r=this.storage.getDisplayList(!0),o={},a=this,s=0;s<r.length;s++){var l=r[s];l.zlevel!==i&&(e(i,l.zlevel),i=l.zlevel),this._doPaintEl(l,n,!0,o)}return e(i,1/0),n.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,n=["width","height"][t],r=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[n]&&"auto"!==e[n])return parseFloat(e[n]);var s=this.root,l=document.defaultView.getComputedStyle(s);return(s[r]||i(l[n])||i(s.style[n]))-(i(l[o])||0)-(i(l[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=document.createElement("canvas"),r=i.getContext("2d"),o=t.getBoundingRect(),a=t.style,s=a.shadowBlur,l=a.shadowOffsetX,u=a.shadowOffsetY,h=a.hasStroke()?a.lineWidth:0,c=Math.max(h/2,-l+s),d=Math.max(h/2,l+s),f=Math.max(h/2,-u+s),p=Math.max(h/2,u+s),g=o.width+c+d,m=o.height+f+p;i.width=g*e,i.height=m*e,r.scale(e,e),r.clearRect(0,0,g,m),r.dpr=e;var v={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[c-o.x,f-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=n(53),x=new y({style:{x:0,y:0,image:i}});return null!=v.position&&(x.position=t.position=v.position),null!=v.rotation&&(x.rotation=t.rotation=v.rotation),null!=v.scale&&(x.scale=t.scale=v.scale),x}},t.exports=b},function(t,e,n){"use strict";function i(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}var r=n(1),o=n(9),a=n(36),s=n(51),l=function(){this._roots=[],this._displayList=[],this._displayListLen=0};l.prototype={constructor:l,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,r=0,a=e.length;r<a;r++)this._updateAndAddDisplayable(e[r],null,t);n.length=this._displayListLen,o.canvasSupported&&s(n,i)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,o=t;r;)r.parent=o,r.updateTransform(),e.push(r),o=r,r=r.clipPath}if(t.isGroup){for(var a=t._children,s=0;s<a.length;s++){var l=a[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,
this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof a&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(var e=0;e<this._roots.length;e++){var n=this._roots[e];n instanceof a&&n.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var e=0,i=t.length;e<i;e++)this.delRoot(t[e]);else{var o=r.indexOf(this._roots,t);o>=0&&(this.delFromStorage(t),this._roots.splice(o,1),t instanceof a&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t.__storage=this,t.dirty(!1),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:i},t.exports=l},function(t,e,n){"use strict";var i=n(1),r=n(21).Dispatcher,o=n(68),a=n(67),s=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,r.call(this)};s.prototype={constructor:s,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=i.indexOf(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],o=[],a=0;a<i;a++){var s=n[a],l=s.step(t,e);l&&(r.push(l),o.push(s))}for(var a=0;a<i;)n[a]._needsRemove?(n[a]=n[i-1],n.pop(),i--):a++;i=r.length;for(var a=0;a<i;a++)o[a].fire(r[a]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(o(t),!e._paused&&e._update())}var e=this;this._running=!0,o(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},animate:function(t,e){e=e||{};var n=new a(t,e.loop,e.getter,e.setter);return this.addAnimator(n),n}},i.mixin(s,r),t.exports=s},function(t,e,n){function i(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}var r=n(158);i.prototype={constructor:i,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)return void(this._pausedTime+=e);var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,o="string"==typeof i?r[i]:i,a="function"==typeof o?o(n):n;return this.fire("frame",a),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){t="on"+t,this[t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}},t.exports=i},function(t,e){var n={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),-(n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)))},elasticOut:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},elasticInOut:function(t){var e,n=.1,i=.4;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?-.5*(n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)):n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-n.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*n.bounceIn(2*t):.5*n.bounceOut(2*t-1)+.5}};t.exports=n},function(t,e,n){var i=n(69).normalizeRadian,r=2*Math.PI;t.exports={containStroke:function(t,e,n,o,a,s,l,u,h){if(0===l)return!1;var c=l;u-=t,h-=e;var d=Math.sqrt(u*u+h*h);if(d-c>n||d+c<n)return!1;if(Math.abs(o-a)%r<1e-4)return!0;if(s){var f=o;o=i(a),a=i(f)}else o=i(o),a=i(a);o>a&&(a+=r);var p=Math.atan2(h,u);return p<0&&(p+=r),p>=o&&p<=a||p+r>=o&&p+r<=a}}},function(t,e,n){var i=n(20);t.exports={containStroke:function(t,e,n,r,o,a,s,l,u,h,c){if(0===u)return!1;var d=u;if(c>e+d&&c>r+d&&c>a+d&&c>l+d||c<e-d&&c<r-d&&c<a-d&&c<l-d||h>t+d&&h>n+d&&h>o+d&&h>s+d||h<t-d&&h<n-d&&h<o-d&&h<s-d)return!1;var f=i.cubicProjectPoint(t,e,n,r,o,a,s,l,h,c,null);return f<=d/2}}},function(t,e,n){"use strict";function i(t,e){return Math.abs(t-e)<x}function r(){var t=b[0];b[0]=b[1],b[1]=t}function o(t,e,n,i,o,a,s,l,u,h){if(h>e&&h>i&&h>a&&h>l||h<e&&h<i&&h<a&&h<l)return 0;var c=g.cubicRootAt(e,i,a,l,h,_);if(0===c)return 0;for(var d,f,p=0,m=-1,v=0;v<c;v++){var y=_[v],x=0===y||1===y?.5:1,w=g.cubicAt(t,n,o,s,y);w<u||(m<0&&(m=g.cubicExtrema(e,i,a,l,b),b[1]<b[0]&&m>1&&r(),d=g.cubicAt(e,i,a,l,b[0]),m>1&&(f=g.cubicAt(e,i,a,l,b[1]))),p+=2==m?y<b[0]?d<e?x:-x:y<b[1]?f<d?x:-x:l<f?x:-x:y<b[0]?d<e?x:-x:l<d?x:-x)}return p}function a(t,e,n,i,r,o,a,s){if(s>e&&s>i&&s>o||s<e&&s<i&&s<o)return 0;var l=g.quadraticRootAt(e,i,o,s,_);if(0===l)return 0;var u=g.quadraticExtremum(e,i,o);if(u>=0&&u<=1){for(var h=0,c=g.quadraticAt(e,i,o,u),d=0;d<l;d++){var f=0===_[d]||1===_[d]?.5:1,p=g.quadraticAt(t,n,r,_[d]);p<a||(h+=_[d]<u?c<e?f:-f:o<c?f:-f)}return h}var f=0===_[0]||1===_[0]?.5:1,p=g.quadraticAt(t,n,r,_[0]);return p<a?0:o<e?f:-f}function s(t,e,n,i,r,o,a,s){if(s-=e,s>n||s<-n)return 0;var l=Math.sqrt(n*n-s*s);_[0]=-l,_[1]=l;var u=Math.abs(i-r);if(u<1e-4)return 0;if(u%y<1e-4){i=0,r=y;var h=o?1:-1;return a>=_[0]+t&&a<=_[1]+t?h:0}if(o){var l=i;i=p(r),r=p(l)}else i=p(i),r=p(r);i>r&&(r+=y);for(var c=0,d=0;d<2;d++){var f=_[d];if(f+t>a){var g=Math.atan2(s,f),h=o?1:-1;g<0&&(g=y+g),(g>=i&&g<=r||g+y>=i&&g+y<=r)&&(g>Math.PI/2&&g<1.5*Math.PI&&(h=-h),c+=h)}}return c}function l(t,e,n,r,l){for(var h=0,p=0,g=0,y=0,x=0,_=0;_<t.length;){var b=t[_++];switch(b===u.M&&_>1&&(n||(h+=m(p,g,y,x,r,l))),1==_&&(p=t[_],g=t[_+1],y=p,x=g),b){case u.M:y=t[_++],x=t[_++],p=y,g=x;break;case u.L:if(n){if(v(p,g,t[_],t[_+1],e,r,l))return!0}else h+=m(p,g,t[_],t[_+1],r,l)||0;p=t[_++],g=t[_++];break;case u.C:if(n){if(c.containStroke(p,g,t[_++],t[_++],t[_++],t[_++],t[_],t[_+1],e,r,l))return!0}else h+=o(p,g,t[_++],t[_++],t[_++],t[_++],t[_],t[_+1],r,l)||0;p=t[_++],g=t[_++];break;case u.Q:if(n){if(d.containStroke(p,g,t[_++],t[_++],t[_],t[_+1],e,r,l))return!0}else h+=a(p,g,t[_++],t[_++],t[_],t[_+1],r,l)||0;p=t[_++],g=t[_++];break;case u.A:var w=t[_++],M=t[_++],S=t[_++],T=t[_++],A=t[_++],I=t[_++],C=(t[_++],1-t[_++]),P=Math.cos(A)*S+w,D=Math.sin(A)*T+M;_>1?h+=m(p,g,P,D,r,l):(y=P,x=D);var k=(r-w)*T/S+w;if(n){if(f.containStroke(w,M,T,A,A+I,C,e,k,l))return!0}else h+=s(w,M,T,A,A+I,C,k,l);p=Math.cos(A+I)*S+w,g=Math.sin(A+I)*T+M;break;case u.R:y=p=t[_++],x=g=t[_++];var L=t[_++],O=t[_++],P=y+L,D=x+O;if(n){if(v(y,x,P,x,e,r,l)||v(P,x,P,D,e,r,l)||v(P,D,y,D,e,r,l)||v(y,D,y,x,e,r,l))return!0}else h+=m(P,x,P,D,r,l),h+=m(y,D,y,x,r,l);break;case u.Z:if(n){if(v(p,g,y,x,e,r,l))return!0}else h+=m(p,g,y,x,r,l);p=y,g=x}}return n||i(g,x)||(h+=m(p,g,y,x,r,l)||0),0!==h}var u=n(27).CMD,h=n(97),c=n(160),d=n(98),f=n(159),p=n(69).normalizeRadian,g=n(20),m=n(99),v=h.containStroke,y=2*Math.PI,x=1e-4,_=[-1,-1,-1],b=[-1,-1];t.exports={contain:function(t,e,n){return l(t,0,!1,e,n)},containStroke:function(t,e,n,i){return l(t,e,!0,n,i)}}},function(t,e,n){"use strict";function i(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function r(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}var o=n(21),a=function(){this._track=[]};a.prototype={constructor:a,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},a=0,s=i.length;a<s;a++){var l=i[a],u=o.clientToLocal(n,l,{});r.points.push([u.zrX,u.zrY]),r.touches.push(l)}this._track.push(r)}},_recognize:function(t){for(var e in s)if(s.hasOwnProperty(e)){var n=s[e](this._track,t);if(n)return n}}};var s={pinch:function(t,e){var n=t.length;if(n){var o=(t[n-1]||{}).points,a=(t[n-2]||{}).points||o;if(a&&a.length>1&&o&&o.length>1){var s=i(o)/i(a);!isFinite(s)&&(s=1),e.pinchScale=s;var l=r(o);return e.pinchX=l[0],e.pinchY=l[1],{type:"pinch",target:t[0].target,event:e}}}}};t.exports=a},function(t,e,n){function i(t){return"mousewheel"===t&&d.browser.firefox?"DOMMouseScroll":t}function r(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var o=r.type;e.gestureEvent=o,t.handler.dispatchToElement({target:r.target},o,r.event)}}function o(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function a(t){var e=t.pointerType;return"pen"===e||"touch"===e}function s(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}h.each(x,function(e){t._handlers[e]=h.bind(w[e],t)}),h.each(b,function(e){t._handlers[e]=h.bind(w[e],t)}),h.each(y,function(n){t._handlers[n]=e(w[n],t)})}function l(t){function e(e,n){h.each(e,function(e){p(t,i(e),n._handlers[e])},n)}c.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new f,this._handlers={},s(this),d.pointerEventsSupported?e(b,this):(d.touchEventsSupported&&e(x,this),e(y,this))}var u=n(21),h=n(1),c=n(23),d=n(9),f=n(162),p=u.addEventListener,g=u.removeEventListener,m=u.normalizeEvent,v=300,y=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],x=["touchstart","touchend","touchmove"],_={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},b=h.map(y,function(t){var e=t.replace("mouse","pointer");return _[e]?e:t}),w={mousemove:function(t){t=m(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){t=m(this.dom,t);var e=t.toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){t=m(this.dom,t),t.zrByTouch=!0,this._lastTouchMoment=new Date,r(this,t,"start"),w.mousemove.call(this,t),w.mousedown.call(this,t),o(this)},touchmove:function(t){t=m(this.dom,t),t.zrByTouch=!0,r(this,t,"change"),w.mousemove.call(this,t),o(this)},touchend:function(t){t=m(this.dom,t),t.zrByTouch=!0,r(this,t,"end"),w.mouseup.call(this,t),+new Date-this._lastTouchMoment<v&&w.click.call(this,t),o(this)},pointerdown:function(t){w.mousedown.call(this,t)},pointermove:function(t){a(t)||w.mousemove.call(this,t)},pointerup:function(t){w.mouseup.call(this,t)},pointerout:function(t){a(t)||w.mouseout.call(this,t)}};h.each(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){w[t]=function(e){e=m(this.dom,e),this.trigger(t,e)}});var M=l.prototype;M.dispose=function(){for(var t=y.concat(x),e=0;e<t.length;e++){var n=t[e];g(this.dom,i(n),this._handlers[n])}},M.setCursor=function(t){this.dom.style.cursor=t||"default"},h.mixin(l,c),t.exports=l},function(t,e,n){var i=n(8);t.exports=i.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths,e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),i.prototype.getBoundingRect.call(this)}})},function(t,e,n){"use strict";var i=n(1),r=n(39),o=function(t,e,n,i,o){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=o||!1,r.call(this,i)};o.prototype={constructor:o},i.inherits(o,r),t.exports=o},function(t,e){t.exports={buildPath:function(t,e){var n,i,r,o,a=e.x,s=e.y,l=e.width,u=e.height,h=e.r;l<0&&(a+=l,l=-l),u<0&&(s+=u,u=-u),"number"==typeof h?n=i=r=o=h:h instanceof Array?1===h.length?n=i=r=o=h[0]:2===h.length?(n=r=h[0],i=o=h[1]):3===h.length?(n=h[0],i=o=h[1],r=h[2]):(n=h[0],i=h[1],r=h[2],o=h[3]):n=i=r=o=0;var c;n+i>l&&(c=n+i,n*=l/c,i*=l/c),r+o>l&&(c=r+o,r*=l/c,o*=l/c),i+r>u&&(c=i+r,i*=u/c,r*=u/c),n+o>u&&(c=n+o,n*=u/c,o*=u/c),t.moveTo(a+n,s),t.lineTo(a+l-i,s),0!==i&&t.quadraticCurveTo(a+l,s,a+l,s+i),t.lineTo(a+l,s+u-r),0!==r&&t.quadraticCurveTo(a+l,s+u,a+l-r,s+u),t.lineTo(a+o,s+u),0!==o&&t.quadraticCurveTo(a,s+u,a,s+u-o),t.lineTo(a,s+n),0!==n&&t.quadraticCurveTo(a,s,a+n,s)}}},function(t,e,n){var i=n(6),r=i.min,o=i.max,a=i.scale,s=i.distance,l=i.add;t.exports=function(t,e,n,u){var h,c,d,f,p=[],g=[],m=[],v=[];if(u){d=[1/0,1/0],f=[-(1/0),-(1/0)];for(var y=0,x=t.length;y<x;y++)r(d,d,t[y]),o(f,f,t[y]);r(d,d,u[0]),o(f,f,u[1])}for(var y=0,x=t.length;y<x;y++){var _=t[y];if(n)h=t[y?y-1:x-1],c=t[(y+1)%x];else{if(0===y||y===x-1){p.push(i.clone(t[y]));continue}h=t[y-1],c=t[y+1]}i.sub(g,c,h),a(g,g,e);var b=s(_,h),w=s(_,c),M=b+w;0!==M&&(b/=M,w/=M),a(m,g,-b),a(v,g,w);var S=l([],_,m),T=l([],_,v);u&&(o(S,S,d),r(S,S,f),o(T,T,d),r(T,T,f)),p.push(S),p.push(T)}return n&&p.push(p.shift()),p}},function(t,e,n){function i(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}var r=n(6);t.exports=function(t,e){for(var n=t.length,o=[],a=0,s=1;s<n;s++)a+=r.distance(t[s-1],t[s]);var l=a/2;l=l<n?n:l;for(var s=0;s<l;s++){var u,h,c,d=s/(l-1)*(e?n:n-1),f=Math.floor(d),p=d-f,g=t[f%n];e?(u=t[(f-1+n)%n],h=t[(f+1)%n],c=t[(f+2)%n]):(u=t[0===f?f:f-1],h=t[f>n-2?n-1:f+1],c=t[f>n-3?n-1:f+2]);var m=p*p,v=p*m;o.push([i(u[0],g[0],h[0],c[0],p,m,v),i(u[1],g[1],h[1],c[1],p,m,v)])}return o}},function(t,e,n){t.exports=n(8).extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),u=Math.sin(o);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,o,a,!s)}})},function(t,e,n){"use strict";function i(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?c:u)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?c:u)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?h:l)(t.x1,t.cpx1,t.x2,e),(n?h:l)(t.y1,t.cpy1,t.y2,e)]}var r=n(20),o=n(6),a=r.quadraticSubdivide,s=r.cubicSubdivide,l=r.quadraticAt,u=r.cubicAt,h=r.quadraticDerivativeAt,c=r.cubicDerivativeAt,d=[];t.exports=n(8).extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,l=e.cpx1,u=e.cpy1,h=e.cpx2,c=e.cpy2,f=e.percent;0!==f&&(t.moveTo(n,i),null==h||null==c?(f<1&&(a(n,l,r,f,d),l=d[1],r=d[2],a(i,u,o,f,d),u=d[1],o=d[2]),t.quadraticCurveTo(l,u,r,o)):(f<1&&(s(n,l,h,r,f,d),l=d[1],h=d[2],r=d[3],s(i,u,c,o,f,d),u=d[1],c=d[2],o=d[3]),t.bezierCurveTo(l,u,h,c,r,o)))},pointAt:function(t){return i(this.shape,t,!1)},tangentAt:function(t){var e=i(this.shape,t,!0);return o.normalize(e,e)}})},function(t,e,n){"use strict";t.exports=n(8).extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}})},function(t,e,n){t.exports=n(8).extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.percent;0!==a&&(t.moveTo(n,i),a<1&&(r=n*(1-a)+r*a,o=i*(1-a)+o*a),t.lineTo(r,o))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}})},function(t,e,n){var i=n(74);t.exports=n(8).extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){i.buildPath(t,e,!0)}})},function(t,e,n){var i=n(74);t.exports=n(8).extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){i.buildPath(t,e,!1)}})},function(t,e,n){var i=n(166);t.exports=n(8).extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,r=e.y,o=e.width,a=e.height;e.r?i.buildPath(t,e):t.rect(n,r,o,a),t.closePath()}})},function(t,e,n){t.exports=n(8).extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}})},function(t,e,n){var i=n(9),r=n(8),o=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]];t.exports=r.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:i.browser.ie&&i.browser.version>=11?function(){var t,e=this.__clipPaths,n=this.style;if(e)for(var i=0;i<e.length;i++){var a=e[i]&&e[i].shape;if(a&&a.startAngle===a.endAngle){for(var s=0;s<o.length;s++)o[s][2]=n[o[s][0]],n[o[s][0]]=o[s][1];t=!0;break}}if(r.prototype.brush.apply(this,arguments),t)for(var s=0;s<o.length;s++)n[o[s][0]]=o[s][2]}:r.prototype.brush,buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(a),h=Math.sin(a);t.moveTo(u*r+n,h*r+i),t.lineTo(u*o+n,h*o+i),t.arc(n,i,o,a,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,a,l),t.closePath()}})},function(t,e,n){"use strict";var i=n(67),r=n(1),o=r.isString,a=r.isFunction,s=r.isObject,l=n(52),u=function(){this.animators=[]};u.prototype={constructor:u,animate:function(t,e){var n,o=!1,a=this,s=this.__zr;if(t){var u=t.split("."),h=a;o="shape"===u[0];for(var c=0,d=u.length;c<d;c++)h&&(h=h[u[c]]);h&&(n=h)}else n=a;if(!n)return void l('Property "'+t+'" is not existed in element '+a.id);var f=a.animators,p=new i(n,e);return p.during(function(t){a.dirty(o)}).done(function(){f.splice(r.indexOf(f,p),1)}),f.push(p),s&&s.animation.addAnimator(p),p},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r){function s(){u--,u||r&&r()}o(n)?(r=i,i=n,n=0):a(i)?(r=i,i="linear",n=0):a(n)?(r=n,n=0):a(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n,i,r);var l=this.animators.slice(),u=l.length;u||r&&r();for(var h=0;h<l.length;h++)l[h].done(s).start(i)},_animateToShallow:function(t,e,n,i,o){var a={},l=0;for(var u in n)if(n.hasOwnProperty(u))if(null!=e[u])s(n[u])&&!r.isArrayLike(n[u])?this._animateToShallow(t?t+"."+u:u,e[u],n[u],i,o):(a[u]=n[u],l++);else if(null!=n[u])if(t){var h={};h[t]={},h[t][u]=n[u],this.attr(h)}else this.attr(u,n[u]);return l>0&&this.animate(t,!1).when(null==i?500:i,a).delay(o||0),this}},t.exports=u},function(t,e){function n(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function i(t,e){return{target:t,topTarget:e&&e.topTarget}}n.prototype={constructor:n,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(i(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,r=t.offsetY,o=n-this._x,a=r-this._y;this._x=n,this._y=r,e.drift(o,a,t),this.dispatchToElement(i(e,t),"drag",t.event);var s=this.findHover(n,r,e).target,l=this._dropTarget;this._dropTarget=s,e!==s&&(l&&s!==l&&this.dispatchToElement(i(l,t),"dragleave",t.event),s&&s!==l&&this.dispatchToElement(i(s,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(i(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(i(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}},t.exports=n},function(t,e,n){function i(t,e,n,i,r,o,a,s,l,u,p){var v=l*(f/180),y=d(v)*(t-n)/2+c(v)*(e-i)/2,x=-1*c(v)*(t-n)/2+d(v)*(e-i)/2,_=y*y/(a*a)+x*x/(s*s);_>1&&(a*=h(_),s*=h(_));var b=(r===o?-1:1)*h((a*a*(s*s)-a*a*(x*x)-s*s*(y*y))/(a*a*(x*x)+s*s*(y*y)))||0,w=b*a*x/s,M=b*-s*y/a,S=(t+n)/2+d(v)*w-c(v)*M,T=(e+i)/2+c(v)*w+d(v)*M,A=m([1,0],[(y-w)/a,(x-M)/s]),I=[(y-w)/a,(x-M)/s],C=[(-1*y-w)/a,(-1*x-M)/s],P=m(I,C);g(I,C)<=-1&&(P=f),g(I,C)>=1&&(P=0),0===o&&P>0&&(P-=2*f),1===o&&P<0&&(P+=2*f),p.addData(u,S,T,a,s,A,P,v,o)}function r(t){if(!t)return[];var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<u.length;e++)n=n.replace(new RegExp(u[e],"g"),"|"+u[e]);var r,o=n.split("|"),a=0,l=0,h=new s,c=s.CMD;for(e=1;e<o.length;e++){var d,f=o[e],p=f.charAt(0),g=0,m=f.slice(1).replace(/e,-/g,"e-").split(",");m.length>0&&""===m[0]&&m.shift();for(var v=0;v<m.length;v++)m[v]=parseFloat(m[v]);for(;g<m.length&&!isNaN(m[g])&&!isNaN(m[0]);){var y,x,_,b,w,M,S,T=a,A=l;switch(p){case"l":a+=m[g++],l+=m[g++],d=c.L,h.addData(d,a,l);break;case"L":a=m[g++],l=m[g++],d=c.L,h.addData(d,a,l);break;case"m":a+=m[g++],l+=m[g++],d=c.M,h.addData(d,a,l),p="l";break;case"M":a=m[g++],l=m[g++],d=c.M,h.addData(d,a,l),p="L";break;case"h":a+=m[g++],d=c.L,h.addData(d,a,l);break;case"H":a=m[g++],d=c.L,h.addData(d,a,l);break;case"v":l+=m[g++],d=c.L,h.addData(d,a,l);break;case"V":l=m[g++],d=c.L,h.addData(d,a,l);break;case"C":d=c.C,h.addData(d,m[g++],m[g++],m[g++],m[g++],m[g++],m[g++]),a=m[g-2],l=m[g-1];break;case"c":d=c.C,h.addData(d,m[g++]+a,m[g++]+l,m[g++]+a,m[g++]+l,m[g++]+a,m[g++]+l),a+=m[g-2],l+=m[g-1];break;case"S":y=a,x=l;var I=h.len(),C=h.data;r===c.C&&(y+=a-C[I-4],x+=l-C[I-3]),d=c.C,T=m[g++],A=m[g++],a=m[g++],l=m[g++],h.addData(d,y,x,T,A,a,l);break;case"s":y=a,x=l;var I=h.len(),C=h.data;r===c.C&&(y+=a-C[I-4],x+=l-C[I-3]),d=c.C,T=a+m[g++],A=l+m[g++],a+=m[g++],l+=m[g++],h.addData(d,y,x,T,A,a,l);break;case"Q":T=m[g++],A=m[g++],a=m[g++],l=m[g++],d=c.Q,h.addData(d,T,A,a,l);break;case"q":T=m[g++]+a,A=m[g++]+l,a+=m[g++],l+=m[g++],d=c.Q,h.addData(d,T,A,a,l);break;case"T":y=a,x=l;var I=h.len(),C=h.data;r===c.Q&&(y+=a-C[I-4],x+=l-C[I-3]),a=m[g++],l=m[g++],d=c.Q,h.addData(d,y,x,a,l);break;case"t":y=a,x=l;var I=h.len(),C=h.data;r===c.Q&&(y+=a-C[I-4],x+=l-C[I-3]),a+=m[g++],l+=m[g++],d=c.Q,h.addData(d,y,x,a,l);break;case"A":_=m[g++],b=m[g++],w=m[g++],M=m[g++],S=m[g++],T=a,A=l,a=m[g++],l=m[g++],d=c.A,i(T,A,a,l,M,S,_,b,w,d,h);break;case"a":_=m[g++],b=m[g++],w=m[g++],M=m[g++],S=m[g++],T=a,A=l,a+=m[g++],l+=m[g++],d=c.A,i(T,A,a,l,M,S,_,b,w,d,h)}}"z"!==p&&"Z"!==p||(d=c.Z,h.addData(d)),r=d}return h.toStatic(),h}function o(t,e){var n=r(t);return e=e||{},e.buildPath=function(t){if(t.setData){t.setData(n.data);var e=t.getContext();e&&t.rebuildPath(e)}else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){l(n,t),this.dirty(!0)},e}var a=n(8),s=n(27),l=n(181),u=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],h=Math.sqrt,c=Math.sin,d=Math.cos,f=Math.PI,p=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},g=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(p(t)*p(e))},m=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(g(t,e))};t.exports={createFromString:function(t,e){return new a(o(t,e))},extendFromString:function(t,e){return a.extend(o(t,e))},mergePath:function(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var o=t[r];o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var s=new a(e);return s.createPathProxy(),s.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},s}}},function(t,e,n){function i(t,e){var n,i,o,h,c,d,f=t.data,p=r.M,g=r.C,m=r.L,v=r.R,y=r.A,x=r.Q;for(o=0,h=0;o<f.length;){switch(n=f[o++],h=o,i=0,n){case p:i=1;break;case m:i=1;break;case g:i=3;break;case x:i=2;break;case y:var _=e[4],b=e[5],w=l(e[0]*e[0]+e[1]*e[1]),M=l(e[2]*e[2]+e[3]*e[3]),S=u(-e[1]/M,e[0]/w);f[o]*=w,f[o++]+=_,f[o]*=M,f[o++]+=b,f[o++]*=w,f[o++]*=M,f[o++]+=S,f[o++]+=S,o+=2,h=o;break;case v:d[0]=f[o++],d[1]=f[o++],a(d,d,e),f[h++]=d[0],f[h++]=d[1],d[0]+=f[o++],d[1]+=f[o++],a(d,d,e),f[h++]=d[0],f[h++]=d[1]}for(c=0;c<i;c++){var d=s[c];d[0]=f[o++],d[1]=f[o++],a(d,d,e),f[h++]=d[0],f[h++]=d[1]}}}var r=n(27).CMD,o=n(6),a=o.applyTransform,s=[[],[],[]],l=Math.sqrt,u=Math.atan2;t.exports=i},function(t,e,n){if(!n(9).canvasSupported){var i,r="urn:schemas-microsoft-com:vml",o=window,a=o.document,s=!1;try{!a.namespaces.zrvml&&a.namespaces.add("zrvml",r),i=function(t){return a.createElement("<zrvml:"+t+' class="zrvml">')}}catch(l){i=function(t){return a.createElement("<"+t+' xmlns="'+r+'" class="zrvml">')}}var u=function(){if(!s){s=!0;var t=a.styleSheets;t.length<31?a.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)")}};t.exports={doc:a,initVML:u,createNode:i}}},,function(t,e,n){function i(t,e,n){var i=this._targetInfoList=[],r={},a=o(e,t);p(_,function(t,e){(!n||!n.include||g(n.include,e)>=0)&&t(a,i,r)})}function r(t){return t[0]>t[1]&&t.reverse(),t}function o(t,e){return d.parseFinder(t,e,{includeMainTypes:y})}function a(t,e,n,i){var o=n.getAxis(["x","y"][t]),a=r(h.map([0,1],function(t){return e?o.coordToData(o.toLocalCoord(i[t])):o.toGlobalCoord(o.dataToCoord(i[t]))})),s=[];return s[t]=a,s[1-t]=[NaN,NaN],{values:a,xyMinMax:s}}function s(t,e,n,i){return[e[0]-i[t]*n[0],e[1]-i[t]*n[1]]}function l(t,e){var n=u(t),i=u(e),r=[n[0]/i[0],n[1]/i[1]];return isNaN(r[0])&&(r[0]=1),isNaN(r[1])&&(r[1]=1),r}function u(t){return t?[t[0][1]-t[0][0],t[1][1]-t[1][0]]:[NaN,NaN]}var h=n(1),c=n(3),d=n(5),f=n(185),p=h.each,g=h.indexOf,m=h.curry,v=["dataToPoint","pointToData"],y=["grid","xAxis","yAxis","geo","graph","polar","radiusAxis","angleAxis","bmap"],x=i.prototype;x.setOutputRanges=function(t,e){this.matchOutputRanges(t,e,function(t,e,n){if((t.coordRanges||(t.coordRanges=[])).push(e),!t.coordRange){t.coordRange=e;var i=M[t.brushType](0,n,e);t.__rangeOffset={offset:S[t.brushType](i.values,t.range,[1,1]),xyMinMax:i.xyMinMax}}})},x.matchOutputRanges=function(t,e,n){p(t,function(t){var i=this.findTargetInfo(t,e);i&&i!==!0&&h.each(i.coordSyses,function(i){var r=M[t.brushType](1,i,t.range);n(t,r.values,i,e)})},this)},x.setInputRanges=function(t,e){p(t,function(t){var n=this.findTargetInfo(t,e);if(t.range=t.range||[],n&&n!==!0){t.panelId=n.panelId;var i=M[t.brushType](0,n.coordSys,t.coordRange),r=t.__rangeOffset;t.range=r?S[t.brushType](i.values,r.offset,l(i.xyMinMax,r.xyMinMax)):i.values}},this)},x.makePanelOpts=function(t,e){return h.map(this._targetInfoList,function(n){var i=n.getPanelRect();return{panelId:n.panelId,defaultBrushType:e&&e(n),clipPath:f.makeRectPanelClipPath(i),isTargetByCursor:f.makeRectIsTargetByCursor(i,t,n.coordSysModel),getLinearBrushOtherExtent:f.makeLinearBrushOtherExtent(i)}})},x.controlSeries=function(t,e,n){var i=this.findTargetInfo(t,n);return i===!0||i&&g(i.coordSyses,e.coordinateSystem)>=0},x.findTargetInfo=function(t,e){for(var n=this._targetInfoList,i=o(e,t),r=0;r<n.length;r++){var a=n[r],s=t.panelId;if(s){if(a.panelId===s)return a}else for(var r=0;r<b.length;r++)if(b[r](i,a))return a}return!0};var _={grid:function(t,e){var n=t.xAxisModels,i=t.yAxisModels,r=t.gridModels,o=h.createHashMap(),a={},s={};(n||i||r)&&(p(n,function(t){var e=t.axis.grid.model;o.set(e.id,e),a[e.id]=!0}),p(i,function(t){var e=t.axis.grid.model;o.set(e.id,e),s[e.id]=!0}),p(r,function(t){o.set(t.id,t),a[t.id]=!0,s[t.id]=!0}),o.each(function(t){var r=t.coordinateSystem,o=[];p(r.getCartesians(),function(t,e){(g(n,t.getAxis("x").model)>=0||g(i,t.getAxis("y").model)>=0)&&o.push(t)}),e.push({panelId:"grid--"+t.id,gridModel:t,coordSysModel:t,coordSys:o[0],coordSyses:o,getPanelRect:w.grid,xAxisDeclared:a[t.id],yAxisDeclared:s[t.id]})}))},geo:function(t,e){p(t.geoModels,function(t){var n=t.coordinateSystem;e.push({panelId:"geo--"+t.id,geoModel:t,coordSysModel:t,coordSys:n,coordSyses:[n],getPanelRect:w.geo})})}},b=[function(t,e){var n=t.xAxisModel,i=t.yAxisModel,r=t.gridModel;return!r&&n&&(r=n.axis.grid.model),!r&&i&&(r=i.axis.grid.model),r&&r===e.gridModel},function(t,e){var n=t.geoModel;return n&&n===e.geoModel}],w={grid:function(){return this.coordSys.grid.getRect().clone()},geo:function(){var t=this.coordSys,e=t.getBoundingRect().clone();return e.applyTransform(c.getTransform(t)),e}},M={lineX:m(a,0),lineY:m(a,1),rect:function(t,e,n){var i=e[v[t]]([n[0][0],n[1][0]]),o=e[v[t]]([n[0][1],n[1][1]]),a=[r([i[0],o[0]]),r([i[1],o[1]])];return{values:a,xyMinMax:a}},polygon:function(t,e,n){var i=[[1/0,-(1/0)],[1/0,-(1/0)]],r=h.map(n,function(n){var r=e[v[t]](n);return i[0][0]=Math.min(i[0][0],r[0]),i[1][0]=Math.min(i[1][0],r[1]),i[0][1]=Math.max(i[0][1],r[0]),i[1][1]=Math.max(i[1][1],r[1]),r});return{values:r,xyMinMax:i}}},S={lineX:m(s,0),lineY:m(s,1),rect:function(t,e,n){return[[t[0][0]-n[0]*e[0][0],t[0][1]-n[0]*e[0][1]],[t[1][0]-n[1]*e[1][0],t[1][1]-n[1]*e[1][1]]]},polygon:function(t,e,n){return h.map(t,function(t,i){return[t[0]-n[0]*e[i][0],t[1]-n[1]*e[i][1]]})}};t.exports=i},function(t,e,n){function i(t){return o.create(t)}var r=n(128),o=n(11),a=n(3),s={};s.makeRectPanelClipPath=function(t){return t=i(t),function(e,n){return a.clipPointsByRect(e,t)}},s.makeLinearBrushOtherExtent=function(t,e){return t=i(t),function(n){var i=null!=e?e:n,r=i?t.width:t.height,o=i?t.x:t.y;return[o,o+(r||0)]}},s.makeRectIsTargetByCursor=function(t,e,n){return t=i(t),function(i,o,a){return t.contain(o[0],o[1])&&!r.onIrrelevantElement(i,e,n)}},t.exports=s},,,function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(t){if(h===setTimeout)return setTimeout(t,0);if((h===n||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function o(t){if(c===clearTimeout)return clearTimeout(t);if((c===i||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{return c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}function a(){g&&f&&(g=!1,f.length?p=f.concat(p):m=-1,p.length&&s())}function s(){if(!g){var t=r(a);g=!0;for(var e=p.length;e;){for(f=p,p=[];++m<e;)f&&f[m].run();m=-1,e=p.length}f=null,g=!1,o(t)}}function l(t,e){
this.fun=t,this.array=e}function u(){}var h,c,d=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:n}catch(t){h=n}try{c="function"==typeof clearTimeout?clearTimeout:i}catch(t){c=i}}();var f,p=[],g=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new l(t,e)),1!==p.length||g||r(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){function i(){this.group=new r.Group,this._symbolEl=new a({})}var r=n(3),o=n(24),a=r.extendShape({shape:{points:null,sizes:null},symbolProxy:null,buildPath:function(t,e){for(var n=e.points,i=e.sizes,r=this.symbolProxy,o=r.shape,a=0;a<n.length;a++){var s=n[a];if(!isNaN(s[0])&&!isNaN(s[1])){var l=i[a];l[0]<4?t.rect(s[0]-l[0]/2,s[1]-l[1]/2,l[0],l[1]):(o.x=s[0]-l[0]/2,o.y=s[1]-l[1]/2,o.width=l[0],o.height=l[1],r.buildPath(t,o,!0))}}},findDataIndex:function(t,e){for(var n=this.shape,i=n.points,r=n.sizes,o=i.length-1;o>=0;o--){var a=i[o],s=r[o],l=a[0]-s[0]/2,u=a[1]-s[1]/2;if(t>=l&&e>=u&&t<=l+s[0]&&e<=u+s[1])return o}return-1}}),s=i.prototype;s.updateData=function(t){this.group.removeAll();var e=this._symbolEl,n=t.hostModel;e.setShape({points:t.mapArray(t.getItemLayout),sizes:t.mapArray(function(e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array||(n=[n,n]),n})}),e.symbolProxy=o.createSymbol(t.getVisual("symbol"),0,0,0,0),e.setColor=e.symbolProxy.setColor,e.useStyle(n.getModel("itemStyle.normal").getItemStyle(["color"]));var i=t.getVisual("color");i&&e.setColor(i),e.seriesIndex=n.seriesIndex,e.on("mousemove",function(t){e.dataIndex=null;var n=e.findDataIndex(t.offsetX,t.offsetY);n>=0&&(e.dataIndex=n)}),this.group.add(e)},s.updateLayout=function(t){var e=t.getData();this._symbolEl.setShape({points:e.mapArray(e.getItemLayout)})},s.remove=function(){this.group.removeAll()},t.exports=i},function(t,e,n){function i(t){return isNaN(+t.cpx1)||isNaN(+t.cpy1)}var r=n(3),o=n(6),a=r.Line.prototype,s=r.BezierCurve.prototype;t.exports=r.extendShape({type:"ec-line",style:{stroke:"#000",fill:null},shape:{x1:0,y1:0,x2:0,y2:0,percent:1,cpx1:null,cpy1:null},buildPath:function(t,e){(i(e)?a:s).buildPath(t,e)},pointAt:function(t){return i(this.shape)?a.pointAt.call(this,t):s.pointAt.call(this,t)},tangentAt:function(t){var e=this.shape,n=i(e)?[e.x2-e.x1,e.y2-e.y1]:s.tangentAt.call(this,t);return o.normalize(n,n)}})},function(t,e,n){var i=n(1),r=n(2);n(192),n(193),r.registerVisual(i.curry(n(50),"scatter","circle",null)),r.registerLayout(i.curry(n(61),"scatter")),n(32)},function(t,e,n){"use strict";var i=n(28),r=n(17);t.exports=r.extend({type:"series.scatter",dependencies:["grid","polar","geo","singleAxis","calendar"],getInitialData:function(t,e){return i(t.data,this,e)},brushSelector:"point",defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{normal:{opacity:.8}}}})},function(t,e,n){var i=n(44),r=n(189);n(2).extendChartView({type:"scatter",init:function(){this._normalSymbolDraw=new i,this._largeSymbolDraw=new r},render:function(t,e,n){var i=t.getData(),r=this._largeSymbolDraw,o=this._normalSymbolDraw,a=this.group,s=t.get("large")&&i.count()>t.get("largeThreshold")?r:o;this._symbolDraw=s,s.updateData(i),a.add(s.group),a.remove(s===r?o.group:r.group)},updateLayout:function(t){this._symbolDraw.updateLayout(t)},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(e,!0)},dispose:function(){}})},function(t,e,n){var i=n(2),r=i.extendComponentModel({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,textStyle:{color:"#fff"},padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}});t.exports=r},function(t,e,n){var i=n(122),r=n(2).extendComponentView({type:"axisPointer",render:function(t,e,n){var r=e.getComponent("tooltip"),o=t.get("triggerOn")||r&&r.get("triggerOn")||"mousemove|click";i.register("axisPointer",n,function(t,e,n){"none"!==o&&("leave"===t||o.indexOf(t)>=0)&&n({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})})},remove:function(t,e){i.disopse(e.getZr(),"axisPointer"),r.superApply(this._model,"remove",arguments)},dispose:function(t,e){i.unregister("axisPointer",e),r.superApply(this._model,"dispose",arguments)}})},function(t,e,n){function i(t,e,n){var i=t.currTrigger,o=[t.x,t.y],g=t,m=t.dispatchAction||p.bind(n.dispatchAction,n),_=e.getComponent("axisPointer").coordSysAxesInfo;f(o)&&(o=v({seriesIndex:g.seriesIndex,dataIndex:g.dataIndex},e).point);var b=f(o),w=g.axesInfo,M=_.axesInfo,S="leave"===i||f(o),T={},A={},I={list:[],map:{}},C={showPointer:x(a,A),showTooltip:x(s,I)};y(_.coordSysMap,function(t,e){var n=b||t.containPoint(o);y(_.coordSysAxesInfo[e],function(t,e){var i=t.axis,a=c(w,t);if(!S&&n&&(!w||a)){var s=a&&a.value;null!=s||b||(s=i.pointToData(o)),null!=s&&r(t,s,C,!1,T)}})});var P={};return y(M,function(t,e){var n=t.linkGroup;n&&!A[e]&&y(n.axesInfo,function(e,i){var r=A[i];if(e!==t&&r){var o=r.value;n.mapper&&(o=t.axis.scale.parse(n.mapper(o,d(e),d(t)))),P[t.key]=o}})}),y(P,function(t,e){r(M[e],t,C,!0,T)}),l(A,M,T),u(I,o,t,m),h(M,m,n),T}function r(t,e,n,i,r){var a=t.axis;if(!a.scale.isBlank()&&a.containData(e)){if(!t.involveSeries)return void n.showPointer(t,e);var s=o(e,t),l=s.payloadBatch,u=s.snapToValue;l[0]&&null==r.seriesIndex&&p.extend(r,l[0]),!i&&t.snap&&a.containData(u)&&null!=u&&(e=u),n.showPointer(t,e,l,r),n.showTooltip(t,s,u)}}function o(t,e){var n=e.axis,i=n.dim,r=t,o=[],a=Number.MAX_VALUE,s=-1;return y(e.seriesModels,function(e,l){var u,h,c=e.coordDimToDataDim(i);if(e.getAxisTooltipData){var d=e.getAxisTooltipData(c,t,n);h=d.dataIndices,u=d.nestestValue}else{if(h=e.getData().indicesOfNearest(c[0],t,!1,"category"===n.type?.5:null),!h.length)return;u=e.getData().get(c[0],h[0])}if(null!=u&&isFinite(u)){var f=t-u,p=Math.abs(f);p<=a&&((p<a||f>=0&&s<0)&&(a=p,s=f,r=u,o.length=0),y(h,function(t){o.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})}))}}),{payloadBatch:o,snapToValue:r}}function a(t,e,n,i){t[e.key]={value:n,payloadBatch:i}}function s(t,e,n,i){var r=n.payloadBatch,o=e.axis,a=o.model,s=e.axisPointerModel;if(e.triggerTooltip&&r.length){var l=e.coordSys.model,u=m.makeKey(l),h=t.map[u];h||(h=t.map[u]={coordSysId:l.id,coordSysIndex:l.componentIndex,coordSysType:l.type,coordSysMainType:l.mainType,dataByAxis:[]},t.list.push(h)),h.dataByAxis.push({axisDim:o.dim,axisIndex:a.componentIndex,axisType:a.type,axisId:a.id,value:i,valueLabelOpt:{precision:s.get("label.precision"),formatter:s.get("label.formatter")},seriesDataIndices:r.slice()})}}function l(t,e,n){var i=n.axesInfo=[];y(e,function(e,n){var r=e.axisPointerModel.option,o=t[n];o?(!e.useHandle&&(r.status="show"),r.value=o.value,r.seriesDataIndices=(o.payloadBatch||[]).slice()):!e.useHandle&&(r.status="hide"),"show"===r.status&&i.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:r.value})})}function u(t,e,n,i){if(f(e)||!t.list.length)return void i({type:"hideTip"});var r=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};i({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:n.tooltipOption,position:n.position,dataIndexInside:r.dataIndexInside,dataIndex:r.dataIndex,seriesIndex:r.seriesIndex,dataByCoordSys:t.list})}function h(t,e,n){var i=n.getZr(),r="axisPointerLastHighlights",o=_(i)[r]||{},a=_(i)[r]={};y(t,function(t,e){var n=t.axisPointerModel.option;"show"===n.status&&y(n.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex;a[e]=t})});var s=[],l=[];p.each(o,function(t,e){!a[e]&&l.push(t)}),p.each(a,function(t,e){!o[e]&&s.push(t)}),l.length&&n.dispatchAction({type:"downplay",escapeConnect:!0,batch:l}),s.length&&n.dispatchAction({type:"highlight",escapeConnect:!0,batch:s})}function c(t,e){for(var n=0;n<(t||[]).length;n++){var i=t[n];if(e.axis.dim===i.axisDim&&e.axis.model.componentIndex===i.axisIndex)return i}}function d(t){var e=t.axis.model,n={},i=n.axisDim=t.axis.dim;return n.axisIndex=n[i+"AxisIndex"]=e.componentIndex,n.axisName=n[i+"AxisName"]=e.name,n.axisId=n[i+"AxisId"]=e.id,n}function f(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}var p=n(1),g=n(5),m=n(45),v=n(121),y=p.each,x=p.curry,_=g.makeGetter();t.exports=i},function(t,e,n){n(126),n(46),n(47),n(203),n(204),n(199),n(200),n(124),n(123)},function(t,e,n){function i(t,e,n){var i=[1/0,-(1/0)];return h(n,function(t){var n=t.getData();n&&h(t.coordDimToDataDim(e),function(t){var e=n.getDataExtent(t);e[0]<i[0]&&(i[0]=e[0]),e[1]>i[1]&&(i[1]=e[1])})}),i[1]<i[0]&&(i=[NaN,NaN]),r(t,i),i}function r(t,e){var n=t.getAxisModel(),i=n.getMin(!0),r="category"===n.get("type"),o=r&&(n.get("data")||[]).length;null!=i&&"dataMin"!==i?e[0]=i:r&&(e[0]=o>0?0:NaN);var a=n.getMax(!0);return null!=a&&"dataMax"!==a?e[1]=a:r&&(e[1]=o>0?o-1:NaN),n.get("scale",!0)||(e[0]>0&&(e[0]=0),e[1]<0&&(e[1]=0)),e}function o(t,e){var n=t.getAxisModel(),i=t._percentWindow,r=t._valueWindow;if(i){var o=l.getPixelPrecision(r,[0,500]),a=e||0===i[0]&&100===i[1];n.setRange(a?null:+r[0].toFixed(o),a?null:+r[1].toFixed(o))}}function a(t){var e=t._minMaxSpan={},n=t._dataZoomModel;h(["min","max"],function(i){e[i+"Span"]=n.get(i+"Span");var r=n.get(i+"ValueSpan");null!=r&&(e[i+"ValueSpan"]=r,r=t.getAxisModel().axis.scale.parse(r),null!=r&&(e[i+"Span"]=l.linearMap(r,t._dataExtent,[0,100],!0)))})}var s=n(1),l=n(4),u=n(77),h=s.each,c=l.asc,d=function(t,e,n,i){this._dimName=t,this._axisIndex=e,this._valueWindow,this._percentWindow,this._dataExtent,this._minMaxSpan,this.ecModel=i,this._dataZoomModel=n};d.prototype={constructor:d,hostedBy:function(t){return this._dataZoomModel===t},getDataValueWindow:function(){return this._valueWindow.slice()},getDataPercentWindow:function(){return this._percentWindow.slice()},getTargetSeriesModels:function(){var t=[],e=this.ecModel;return e.eachSeries(function(n){if(u.isCoordSupported(n.get("coordinateSystem"))){var i=this._dimName,r=e.queryComponents({mainType:i+"Axis",index:n.get(i+"AxisIndex"),id:n.get(i+"AxisId")})[0];this._axisIndex===(r&&r.componentIndex)&&t.push(n)}},this),t},getAxisModel:function(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex)},getOtherAxisModel:function(){var t,e,n=this._dimName,i=this.ecModel,r=this.getAxisModel(),o="x"===n||"y"===n;o?(e="gridIndex",t="x"===n?"y":"x"):(e="polarIndex",t="angle"===n?"radius":"angle");var a;return i.eachComponent(t+"Axis",function(t){(t.get(e)||0)===(r.get(e)||0)&&(a=t)}),a},getMinMaxSpan:function(){return s.clone(this._minMaxSpan)},calculateDataWindow:function(t){var e=this._dataExtent,n=this.getAxisModel(),i=n.axis.scale,r=this._dataZoomModel.getRangePropMode(),o=[0,100],a=[t.start,t.end],s=[];return h(["startValue","endValue"],function(e){s.push(null!=t[e]?i.parse(t[e]):null)}),h([0,1],function(t){var n=s[t],u=a[t];"percent"===r[t]?(null==u&&(u=o[t]),n=i.parse(l.linearMap(u,o,e,!0))):u=l.linearMap(n,e,o,!0),s[t]=n,a[t]=u}),{valueWindow:c(s),percentWindow:c(a)}},reset:function(t){if(t===this._dataZoomModel){this._dataExtent=i(this,this._dimName,this.getTargetSeriesModels());var e=this.calculateDataWindow(t.option);this._valueWindow=e.valueWindow,this._percentWindow=e.percentWindow,a(this),o(this)}},restore:function(t){t===this._dataZoomModel&&(this._valueWindow=this._percentWindow=null,o(this,!0))},filterData:function(t){function e(t){return t>=o[0]&&t<=o[1]}if(t===this._dataZoomModel){var n=this._dimName,i=this.getTargetSeriesModels(),r=t.get("filterMode"),o=this._valueWindow;if("none"!==r){var a=this.getOtherAxisModel();t.get("$fromToolbox")&&a&&"category"===a.get("type")&&(r="empty"),h(i,function(t){var i=t.getData(),a=t.coordDimToDataDim(n);"weakFilter"===r?i&&i.filterSelf(function(t){for(var e,n,r,s=0;s<a.length;s++){var l=i.get(a[s],t),u=!isNaN(l),h=l<o[0],c=l>o[1];if(u&&!h&&!c)return!0;u&&(r=!0),h&&(e=!0),c&&(n=!0)}return r&&e&&n}):i&&h(a,function(n){"empty"===r?t.setData(i.map(n,function(t){return e(t)?t:NaN})):i.filterSelf(n,e)})})}}}},t.exports=d},function(t,e,n){t.exports=n(46).extend({type:"dataZoom.inside",defaultOption:{disabled:!1,zoomLock:!1,zoomOnMouseWheel:!0,moveOnMouseMove:!0,preventDefaultMouseMove:!0}})},function(t,e,n){var i=n(47),r=n(1),o=n(56),a=n(205),s=r.bind,l=i.extend({type:"dataZoom.inside",init:function(t,e){this._range},render:function(t,e,n,i){l.superApply(this,"render",arguments),a.shouldRecordRange(i,t.id)&&(this._range=t.getPercentRange()),r.each(this.getTargetCoordInfo(),function(e,i){var o=r.map(e,function(t){return a.generateCoordId(t.model)});r.each(e,function(e){var r=e.model,l=t.option;a.register(n,{coordId:a.generateCoordId(r),allCoordIds:o,containsPoint:function(t,e,n){return r.coordinateSystem.containPoint([e,n])},dataZoomId:t.id,throttleRate:t.get("throttle",!0),panGetRange:s(this._onPan,this,e,i),zoomGetRange:s(this._onZoom,this,e,i),zoomLock:l.zoomLock,disabled:l.disabled,roamControllerOpt:{zoomOnMouseWheel:l.zoomOnMouseWheel,moveOnMouseMove:l.moveOnMouseMove,preventDefaultMouseMove:l.preventDefaultMouseMove}})},this)},this)},dispose:function(){a.unregister(this.api,this.dataZoomModel.id),l.superApply(this,"dispose",arguments),this._range=null},_onPan:function(t,e,n,i,r,a,s,l,h){var c=this._range.slice(),d=t.axisModels[0];if(d){var f=u[e]([a,s],[l,h],d,n,t),p=f.signal*(c[1]-c[0])*f.pixel/f.pixelLength;return o(p,c,[0,100],"all"),this._range=c}},_onZoom:function(t,e,n,i,r,a){var s=this._range.slice(),l=t.axisModels[0];if(l){var h=u[e](null,[r,a],l,n,t),c=(h.signal>0?h.pixelStart+h.pixelLength-h.pixel:h.pixel-h.pixelStart)/h.pixelLength*(s[1]-s[0])+s[0];i=Math.max(1/i,0),s[0]=(s[0]-c)*i+c,s[1]=(s[1]-c)*i+c;var d=this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();return o(0,s,[0,100],0,d.minSpan,d.maxSpan),this._range=s}}}),u={grid:function(t,e,n,i,r){var o=n.axis,a={},s=r.model.coordinateSystem.getRect();return t=t||[0,0],"x"===o.dim?(a.pixel=e[0]-t[0],a.pixelLength=s.width,a.pixelStart=s.x,a.signal=o.inverse?1:-1):(a.pixel=e[1]-t[1],a.pixelLength=s.height,a.pixelStart=s.y,a.signal=o.inverse?-1:1),a},polar:function(t,e,n,i,r){var o=n.axis,a={},s=r.model.coordinateSystem,l=s.getRadiusAxis().getExtent(),u=s.getAngleAxis().getExtent();return t=t?s.pointToCoord(t):[0,0],e=s.pointToCoord(e),"radiusAxis"===n.mainType?(a.pixel=e[0]-t[0],a.pixelLength=l[1]-l[0],a.pixelStart=l[0],a.signal=o.inverse?1:-1):(a.pixel=e[1]-t[1],a.pixelLength=u[1]-u[0],a.pixelStart=u[0],a.signal=o.inverse?-1:1),a},singleAxis:function(t,e,n,i,r){var o=n.axis,a=r.model.coordinateSystem.getRect(),s={};return t=t||[0,0],"horizontal"===o.orient?(s.pixel=e[0]-t[0],s.pixelLength=a.width,s.pixelStart=a.x,s.signal=o.inverse?1:-1):(s.pixel=e[1]-t[1],s.pixelLength=a.height,s.pixelStart=a.y,s.signal=o.inverse?-1:1),s}};t.exports=l},function(t,e,n){var i=n(46);t.exports=i.extend({type:"dataZoom.select"})},function(t,e,n){t.exports=n(47).extend({type:"dataZoom.select"})},function(t,e,n){var i=n(46),r=i.extend({type:"dataZoom.slider",layoutMode:"box",defaultOption:{show:!0,right:"ph",top:"ph",width:"ph",height:"ph",left:null,bottom:null,backgroundColor:"rgba(47,69,84,0)",dataBackground:{lineStyle:{color:"#2f4554",width:.5,opacity:.3},areaStyle:{color:"rgba(47,69,84,0.3)",opacity:.3}},borderColor:"#ddd",fillerColor:"rgba(167,183,204,0.4)",handleIcon:"M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",handleSize:"100%",handleStyle:{color:"#a7b7cc"},labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}}});t.exports=r},function(t,e,n){function i(t){var e={x:"y",y:"x",radius:"angle",angle:"radius"};return e[t]}var r=n(1),o=n(3),a=n(37),s=n(47),l=o.Rect,u=n(4),h=u.linearMap,c=n(12),d=n(56),f=n(21),p=u.asc,g=r.bind,m=r.each,v=7,y=1,x=30,_="horizontal",b="vertical",w=5,M=["line","bar","candlestick","scatter"],S=s.extend({type:"dataZoom.slider",init:function(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._handleWidth,this._handleHeight,this._location,this._dragging,this._dataShadowInfo,this.api=e},render:function(t,e,n,i){return S.superApply(this,"render",arguments),a.createOrUpdate(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get("orient"),this.dataZoomModel.get("show")===!1?void this.group.removeAll():(i&&"dataZoom"===i.type&&i.from===this.uid||this._buildView(),void this._updateView())},remove:function(){S.superApply(this,"remove",arguments),a.clear(this,"_dispatchZoomAction")},dispose:function(){S.superApply(this,"dispose",arguments),a.clear(this,"_dispatchZoomAction")},_buildView:function(){var t=this.group;t.removeAll(),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new o.Group;this._renderBackground(),this._renderHandle(),this._renderDataShadow(),t.add(e),this._positionGroup()},_resetLocation:function(){var t=this.dataZoomModel,e=this.api,n=this._findCoordRect(),i={width:e.getWidth(),height:e.getHeight()},o=this._orient===_?{right:i.width-n.x-n.width,top:i.height-x-v,width:n.width,height:x}:{right:v,top:n.y,width:x,height:n.height},a=c.getLayoutParams(t.option);r.each(["right","top","width","height"],function(t){"ph"===a[t]&&(a[t]=o[t])});var s=c.getLayoutRect(a,i,t.padding);this._location={x:s.x,y:s.y},this._size=[s.width,s.height],this._orient===b&&this._size.reverse()},_positionGroup:function(){var t=this.group,e=this._location,n=this._orient,i=this.dataZoomModel.getFirstTargetAxisModel(),r=i&&i.get("inverse"),o=this._displayables.barGroup,a=(this._dataShadowInfo||{}).otherAxisInverse;o.attr(n!==_||r?n===_&&r?{scale:a?[-1,1]:[-1,-1]}:n!==b||r?{scale:a?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:a?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:a?[1,1]:[1,-1]});var s=t.getBoundingRect([o]);t.attr("position",[e.x-s.x,e.y-s.y])},_getViewExtent:function(){return[0,this._size[0]]},_renderBackground:function(){var t=this.dataZoomModel,e=this._size,n=this._displayables.barGroup;n.add(new l({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get("backgroundColor")},z2:-40})),n.add(new l({shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:"transparent"},z2:0,onclick:r.bind(this._onClickPanelClick,this)}))},_renderDataShadow:function(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,n=t.series,i=n.getRawData(),a=n.getShadowDim?n.getShadowDim():t.otherDim;if(null!=a){var s=i.getDataExtent(a),l=.3*(s[1]-s[0]);s=[s[0]-l,s[1]+l];var u,c=[0,e[1]],d=[0,e[0]],f=[[e[0],0],[0,0]],p=[],g=d[1]/(i.count()-1),m=0,v=Math.round(i.count()/e[0]);i.each([a],function(t,e){if(v>0&&e%v)return void(m+=g);var n=null==t||isNaN(t)||""===t,i=n?0:h(t,s,c,!0);n&&!u&&e?(f.push([f[f.length-1][0],0]),p.push([p[p.length-1][0],0])):!n&&u&&(f.push([m,0]),p.push([m,0])),f.push([m,i]),p.push([m,i]),m+=g,u=n});var y=this.dataZoomModel;this._displayables.barGroup.add(new o.Polygon({shape:{points:f},style:r.defaults({fill:y.get("dataBackgroundColor")},y.getModel("dataBackground.areaStyle").getAreaStyle()),silent:!0,z2:-20})),this._displayables.barGroup.add(new o.Polyline({shape:{points:p},style:y.getModel("dataBackground.lineStyle").getLineStyle(),silent:!0,z2:-19}))}}},_prepareDataShadowInfo:function(){var t=this.dataZoomModel,e=t.get("showDataShadow");if(e!==!1){var n,o=this.ecModel;return t.eachTargetAxis(function(a,s){var l=t.getAxisProxy(a.name,s).getTargetSeriesModels();r.each(l,function(t){if(!(n||e!==!0&&r.indexOf(M,t.get("type"))<0)){var l,u=o.getComponent(a.axis,s).axis,h=i(a.name),c=t.coordinateSystem;null!=h&&c.getOtherAxis&&(l=c.getOtherAxis(u).inverse),n={thisAxis:u,series:t,thisDim:a.name,otherDim:h,otherAxisInverse:l}}},this)},this),n}},_renderHandle:function(){var t=this._displayables,e=t.handles=[],n=t.handleLabels=[],i=this._displayables.barGroup,r=this._size,a=this.dataZoomModel;i.add(t.filler=new l({draggable:!0,cursor:"move",drift:g(this._onDragMove,this,"all"),onmousemove:function(t){f.stop(t.event)},ondragstart:g(this._showDataInfo,this,!0),ondragend:g(this._onDragEnd,this),onmouseover:g(this._showDataInfo,this,!0),onmouseout:g(this._showDataInfo,this,!1),style:{fill:a.get("fillerColor"),textPosition:"inside"}})),i.add(new l(o.subPixelOptimizeRect({silent:!0,shape:{x:0,y:0,width:r[0],height:r[1]},style:{stroke:a.get("dataBackgroundColor")||a.get("borderColor"),lineWidth:y,fill:"rgba(0,0,0,0)"}})));var s=a.get("handleIcon");m([0,1],function(t){var r={style:{strokeNoScale:!0},rectHover:!0,cursor:"vertical"===this._orient?"ns-resize":"ew-resize",draggable:!0,drift:g(this._onDragMove,this,t),onmousemove:function(t){f.stop(t.event)},ondragend:g(this._onDragEnd,this),onmouseover:g(this._showDataInfo,this,!0),onmouseout:g(this._showDataInfo,this,!1)},l={x:-1,y:0,width:2,height:2},h=0===s.indexOf("image://")?(l.image=s.slice(8),r.style=l,new o.Image(r)):o.makePath(s.replace("path://",""),r,l,"center"),c=h.getBoundingRect();this._handleHeight=u.parsePercent(a.get("handleSize"),this._size[1]),this._handleWidth=c.width/c.height*this._handleHeight,h.setStyle(a.getModel("handleStyle").getItemStyle());var d=a.get("handleColor");null!=d&&(h.style.fill=d),i.add(e[t]=h);var p=a.textStyleModel;this.group.add(n[t]=new o.Text({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textVerticalAlign:"middle",textAlign:"center",fill:p.getTextColor(),textFont:p.getFont()},z2:10}))},this)},_resetInterval:function(){var t=this._range=this.dataZoomModel.getPercentRange(),e=this._getViewExtent();this._handleEnds=[h(t[0],[0,100],e,!0),h(t[1],[0,100],e,!0)]},_updateInterval:function(t,e){var n=this.dataZoomModel,i=this._handleEnds,r=this._getViewExtent(),o=n.findRepresentativeAxisProxy().getMinMaxSpan(),a=[0,100];d(e,i,r,n.get("zoomLock")?"all":t,null!=o.minSpan?h(o.minSpan,a,r,!0):null,null!=o.maxSpan?h(o.maxSpan,a,r,!0):null),this._range=p([h(i[0],r,a,!0),h(i[1],r,a,!0)])},_updateView:function(t){var e=this._displayables,n=this._handleEnds,i=p(n.slice()),r=this._size;m([0,1],function(t){var i=e.handles[t],o=this._handleHeight;i.attr({scale:[o/2,o/2],position:[n[t],r[1]/2-o/2]})},this),e.filler.setShape({x:i[0],y:0,width:i[1]-i[0],height:r[1]}),this._updateDataInfo(t)},_updateDataInfo:function(t){function e(t){var e=o.getTransform(i.handles[t].parent,this.group),n=o.transformDirection(0===t?"right":"left",e),l=this._handleWidth/2+w,u=o.applyTransform([d[t]+(0===t?-l:l),this._size[1]/2],e);r[t].setStyle({x:u[0],y:u[1],textVerticalAlign:a===_?"middle":n,textAlign:a===_?n:"center",text:s[t]})}var n=this.dataZoomModel,i=this._displayables,r=i.handleLabels,a=this._orient,s=["",""];if(n.get("showDetail")){var l=n.findRepresentativeAxisProxy();if(l){var u=l.getAxisModel().axis,h=this._range,c=t?l.calculateDataWindow({start:h[0],end:h[1]}).valueWindow:l.getDataValueWindow();s=[this._formatLabel(c[0],u),this._formatLabel(c[1],u)]}}var d=p(this._handleEnds.slice());e.call(this,0),e.call(this,1)},_formatLabel:function(t,e){var n=this.dataZoomModel,i=n.get("labelFormatter"),o=n.get("labelPrecision");null!=o&&"auto"!==o||(o=e.getPixelPrecision());var a=null==t||isNaN(t)?"":"category"===e.type||"time"===e.type?e.scale.getLabel(Math.round(t)):t.toFixed(Math.min(o,20));return r.isFunction(i)?i(t,a):r.isString(i)?i.replace("{value}",a):a},_showDataInfo:function(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr("invisible",!t),e[1].attr("invisible",!t)},_onDragMove:function(t,e,n){this._dragging=!0;var i=this._displayables.barGroup.getLocalTransform(),r=o.applyTransform([e,n],i,!0);this._updateInterval(t,r[0]);var a=this.dataZoomModel.get("realtime");this._updateView(!a),a&&a&&this._dispatchZoomAction()},_onDragEnd:function(){this._dragging=!1,this._showDataInfo(!1),this._dispatchZoomAction()},_onClickPanelClick:function(t){var e=this._size,n=this._displayables.barGroup.transformCoordToLocal(t.offsetX,t.offsetY);if(!(n[0]<0||n[0]>e[0]||n[1]<0||n[1]>e[1])){var i=this._handleEnds,r=(i[0]+i[1])/2;this._updateInterval("all",n[0]-r),this._updateView(),this._dispatchZoomAction()}},_dispatchZoomAction:function(){var t=this._range;this.api.dispatchAction({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]})},_findCoordRect:function(){var t;if(m(this.getTargetCoordInfo(),function(e){if(!t&&e.length){var n=e[0].model.coordinateSystem;t=n.getRect&&n.getRect()}}),!t){var e=this.api.getWidth(),n=this.api.getHeight();t={x:.2*e,y:.2*n,width:.6*e,height:.6*n}}return t}});t.exports=S},function(t,e,n){function i(t){var e=t.getZr();return e[g]||(e[g]={})}function r(t,e){var n=new d(t.getZr());return n.on("pan",p(a,e)),n.on("zoom",p(s,e)),n}function o(t){c.each(t,function(e,n){e.count||(e.controller.dispose(),delete t[n])})}function a(t,e,n,i,r,o,a){l(t,function(s){return s.panGetRange(t.controller,e,n,i,r,o,a)})}function s(t,e,n,i){l(t,function(r){return r.zoomGetRange(t.controller,e,n,i)})}function l(t,e){var n=[];c.each(t.dataZoomInfos,function(t){var i=e(t);!t.disabled&&i&&n.push({dataZoomId:t.dataZoomId,start:i[0],end:i[1]})}),t.dispatchAction(n)}function u(t,e){t.dispatchAction({type:"dataZoom",batch:e})}function h(t){var e,n={},i={"true":2,move:1,"false":0,undefined:-1};return c.each(t,function(t){var r=!t.disabled&&(!t.zoomLock||"move");i[r]>i[e]&&(e=r),c.extend(n,t.roamControllerOpt)}),{controlType:e,opt:n}}var c=n(1),d=n(95),f=n(37),p=c.curry,g="\0_ec_dataZoom_roams",m={register:function(t,e){var n=i(t),a=e.dataZoomId,s=e.coordId;c.each(n,function(t,n){var i=t.dataZoomInfos;i[a]&&c.indexOf(e.allCoordIds,s)<0&&(delete i[a],t.count--)}),o(n);var l=n[s];l||(l=n[s]={coordId:s,dataZoomInfos:{},count:0},l.controller=r(t,l),l.dispatchAction=c.curry(u,t)),!l.dataZoomInfos[a]&&l.count++,l.dataZoomInfos[a]=e;var d=h(l.dataZoomInfos);l.controller.enable(d.controlType,d.opt),l.controller.setPointerChecker(e.containsPoint),f.createOrUpdate(l,"dispatchAction",e.throttleRate,"fixRate")},unregister:function(t,e){var n=i(t);c.each(n,function(t){t.controller.dispose();var n=t.dataZoomInfos;n[e]&&(delete n[e],t.count--)}),o(n)},shouldRecordRange:function(t,e){if(t&&"dataZoom"===t.type&&t.batch)for(var n=0,i=t.batch.length;n<i;n++)if(t.batch[n].dataZoomId===e)return!1;return!0},generateCoordId:function(t){return t.type+"\0_"+t.id}};t.exports=m},function(t,e,n){n(126),n(46),n(47),n(201),n(202),n(124),n(123)},function(t,e,n){function i(t,e,n,i){var r=n.type,o=f[r.charAt(0).toUpperCase()+r.slice(1)],a=new o(n);e.add(a),i.set(t,a),a.__ecGraphicId=t}function r(t,e){var n=t&&t.parent;n&&("group"===t.type&&t.traverse(function(t){r(t,e)}),e.removeKey(t.__ecGraphicId),n.remove(t))}function o(t){return t=c.extend({},t),c.each(["id","parentId","$action","hv","bounding"].concat(p.LOCATION_PARAMS),function(e){delete t[e]}),t}function a(t,e){var n;return c.each(e,function(e){null!=t[e]&&"auto"!==t[e]&&(n=!0)}),n}function s(t,e){var n=t.exist;if(e.id=t.keyInfo.id,!e.type&&n&&(e.type=n.type),null==e.parentId){var i=e.parentOption;i?e.parentId=i.id:n&&(e.parentId=n.parentId)}e.parentOption=null}function l(t,e,n){var i=c.extend({},n),r=t[e],o=n.$action||"merge";if("merge"===o)if(r){c.merge(r,i,!0),p.mergeLayoutParam(r,i,{ignoreSize:!0}),p.copyLayoutParams(n,r)}else t[e]=i;else"replace"===o?t[e]=i:"remove"===o&&r&&(t[e]=null)}function u(t,e){t&&(t.hv=e.hv=[a(e,["left","right"]),a(e,["top","bottom"])],"group"===t.type&&(null==t.width&&(t.width=e.width=0),null==t.height&&(t.height=e.height=0)))}var h=n(2),c=n(1),d=n(5),f=n(3),p=n(12);h.registerPreprocessor(function(t){var e=t.graphic;c.isArray(e)?e[0]&&e[0].elements?t.graphic=[t.graphic[0]]:t.graphic=[{elements:e}]:e&&!e.elements&&(t.graphic=[{elements:[e]}])});var g=h.extendComponentModel({type:"graphic",defaultOption:{elements:[],parentId:null},_elOptionsToUpdate:null,mergeOption:function(t){var e=this.option.elements;this.option.elements=null,g.superApply(this,"mergeOption",arguments),this.option.elements=e},optionUpdated:function(t,e){var n=this.option,i=(e?n:t).elements,r=n.elements=e?[]:n.elements,o=[];this._flatten(i,o);var a=d.mappingToExists(r,o);d.makeIdAndName(a);var h=this._elOptionsToUpdate=[];c.each(a,function(t,e){var n=t.option;n&&(h.push(n),s(t,n),l(r,e,n),u(r[e],n))},this);for(var f=r.length-1;f>=0;f--)null==r[f]?r.splice(f,1):delete r[f].$action},_flatten:function(t,e,n){c.each(t,function(t){if(t){n&&(t.parentOption=n),e.push(t);var i=t.children;"group"===t.type&&i&&this._flatten(i,e,t),delete t.children}},this)},useElOptionsToUpdate:function(){var t=this._elOptionsToUpdate;return this._elOptionsToUpdate=null,t}});h.extendComponentView({type:"graphic",init:function(t,e){this._elMap=c.createHashMap(),this._lastGraphicModel},render:function(t,e,n){t!==this._lastGraphicModel&&this._clear(),this._lastGraphicModel=t,this._updateElements(t,n),this._relocate(t,n)},_updateElements:function(t,e){var n=t.useElOptionsToUpdate();if(n){var a=this._elMap,s=this.group;c.each(n,function(t){var e=t.$action,n=t.id,l=a.get(n),u=t.parentId,h=null!=u?a.get(u):s;t.hv&&t.hv[1]&&"text"===t.type&&(t.style=c.defaults({textBaseline:"middle"},t.style),t.style.textVerticalAlign=null);var d=o(t);e&&"merge"!==e?"replace"===e?(r(l,a),i(n,h,d,a)):"remove"===e&&r(l,a):l?l.attr(d):i(n,h,d,a);var f=a.get(n);f&&(f.__ecGraphicWidth=t.width,f.__ecGraphicHeight=t.height)})}},_relocate:function(t,e){for(var n=t.option.elements,i=this.group,r=this._elMap,o=n.length-1;o>=0;o--){var a=n[o],s=r.get(a.id);if(s){var l=s.parent,u=l===i?{width:e.getWidth(),height:e.getHeight()}:{width:l.__ecGraphicWidth||0,height:l.__ecGraphicHeight||0};p.positionElement(s,a,u,null,{hv:a.hv,boundingMode:a.bounding})}}},_clear:function(){var t=this._elMap;t.each(function(e){r(e,t)}),this._elMap=c.createHashMap()},dispose:function(){this._clear()}})},function(t,e,n){n(32),n(120),n(55)},function(t,e,n){n(210),n(212),n(211);var i=n(2);i.registerProcessor(n(213))},function(t,e,n){"use strict";var i=n(1),r=n(10),o=n(2).extendComponentModel({type:"legend",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,n){this.mergeDefaultAndTheme(t,n),t.selected=t.selected||{}},mergeOption:function(t){o.superCall(this,"mergeOption",t)},optionUpdated:function(){this._updateData(this.ecModel);var t=this._data;if(t[0]&&"single"===this.get("selectedMode")){for(var e=!1,n=0;n<t.length;n++){var i=t[n].get("name");if(this.isSelected(i)){this.select(i),e=!0;break}}!e&&this.select(t[0].get("name"))}},_updateData:function(t){var e=i.map(this.get("data")||[],function(t){return"string"!=typeof t&&"number"!=typeof t||(t={name:t}),new r(t,this,this.ecModel)},this);this._data=e;var n=i.map(t.getSeries(),function(t){return t.name});t.eachSeries(function(t){if(t.legendDataProvider){var e=t.legendDataProvider();n=n.concat(e.mapArray(e.getName))}}),this._availableNames=n},getData:function(){return this._data},select:function(t){var e=this.option.selected,n=this.get("selectedMode");if("single"===n){var r=this._data;i.each(r,function(t){e[t.get("name")]=!1})}e[t]=!0},unSelect:function(t){"single"!==this.get("selectedMode")&&(this.option.selected[t]=!1)},toggleSelected:function(t){
var e=this.option.selected;e.hasOwnProperty(t)||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var e=this.option.selected;return!(e.hasOwnProperty(t)&&!e[t])&&i.indexOf(this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:"top",align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}});t.exports=o},function(t,e,n){function i(t,e){e.dispatchAction({type:"legendToggleSelect",name:t})}function r(t,e,n){var i=n.getZr().storage.getDisplayList()[0];i&&i.useHoverLayer||t.get("legendHoverLink")&&n.dispatchAction({type:"highlight",seriesName:t.name,name:e})}function o(t,e,n){var i=n.getZr().storage.getDisplayList()[0];i&&i.useHoverLayer||t.get("legendHoverLink")&&n.dispatchAction({type:"downplay",seriesName:t.name,name:e})}var a=n(1),s=n(24),l=n(3),u=n(130),h=a.curry;t.exports=n(2).extendComponentView({type:"legend",init:function(){this._symbolTypeStore={}},render:function(t,e,n){var s=this.group;if(s.removeAll(),t.get("show")){var c=t.get("selectedMode"),d=t.get("align");"auto"===d&&(d="right"===t.get("left")&&"vertical"===t.get("orient")?"right":"left");var f=a.createHashMap();a.each(t.getData(),function(a){var u=a.get("name");if(""===u||"\n"===u)return void s.add(new l.Group({newline:!0}));var p=e.getSeriesByName(u)[0];if(!f.get(u))if(p){var g=p.getData(),m=g.getVisual("color");"function"==typeof m&&(m=m(p.getDataParams(0)));var v=g.getVisual("legendSymbol")||"roundRect",y=g.getVisual("symbol"),x=this._createItem(u,a,t,v,y,d,m,c);x.on("click",h(i,u,n)).on("mouseover",h(r,p,null,n)).on("mouseout",h(o,p,null,n)),f.set(u,!0)}else e.eachRawSeries(function(e){if(!f.get(u)&&e.legendDataProvider){var s=e.legendDataProvider(),l=s.indexOfName(u);if(l<0)return;var p=s.getItemVisual(l,"color"),g="roundRect",m=this._createItem(u,a,t,g,null,d,p,c);m.on("click",h(i,u,n)).on("mouseover",h(r,e,u,n)).on("mouseout",h(o,e,u,n)),f.set(u,!0)}},this)},this),u.layout(s,t,n),u.addBackground(s,t)}},_createItem:function(t,e,n,i,r,o,u,h){var c=n.get("itemWidth"),d=n.get("itemHeight"),f=n.get("inactiveColor"),p=n.isSelected(t),g=new l.Group,m=e.getModel("textStyle"),v=e.get("icon"),y=e.getModel("tooltip"),x=y.parentModel;if(i=v||i,g.add(s.createSymbol(i,0,0,c,d,p?u:f)),!v&&r&&(r!==i||"none"==r)){var _=.8*d;"none"===r&&(r="circle"),g.add(s.createSymbol(r,(c-_)/2,(d-_)/2,_,_,p?u:f))}var b="left"===o?c+5:-5,w=o,M=n.get("formatter"),S=t;"string"==typeof M&&M?S=M.replace("{name}",null!=t?t:""):"function"==typeof M&&(S=M(t));var T=new l.Text({style:{text:S,x:b,y:d/2,fill:p?m.getTextColor():f,textFont:m.getFont(),textAlign:w,textVerticalAlign:"middle"}});g.add(T);var A=new l.Rect({shape:g.getBoundingRect(),invisible:!0,tooltip:y.get("show")?a.extend({content:t,formatter:x.get("formatter",!0)||function(){return t},formatterParams:{componentType:"legend",legendIndex:n.componentIndex,name:t,$vars:["name"]}},y.option):null});return g.add(A),g.eachChild(function(t){t.silent=!0}),A.silent=!h,this.group.add(g),l.setHoverStyle(g),g}})},function(t,e,n){function i(t,e,n){var i,r={},a="toggleSelected"===t;return n.eachComponent("legend",function(n){a&&null!=i?n[i?"select":"unSelect"](e.name):(n[t](e.name),i=n.isSelected(e.name));var s=n.getData();o.each(s,function(t){var e=t.get("name");if("\n"!==e&&""!==e){var i=n.isSelected(e);r.hasOwnProperty(e)?r[e]=r[e]&&i:r[e]=i}})}),{name:e.name,selected:r}}var r=n(2),o=n(1);r.registerAction("legendToggleSelect","legendselectchanged",o.curry(i,"toggleSelected")),r.registerAction("legendSelect","legendselected",o.curry(i,"select")),r.registerAction("legendUnSelect","legendunselected",o.curry(i,"unSelect"))},function(t,e){t.exports=function(t){var e=t.findComponents({mainType:"legend"});e&&e.length&&t.filterSeries(function(t){for(var n=0;n<e.length;n++)if(!e[n].isSelected(t.name))return!1;return!0})}},function(t,e,n){n(217),n(218),n(2).registerPreprocessor(function(t){t.markArea=t.markArea||{}})},function(t,e,n){n(219),n(220),n(2).registerPreprocessor(function(t){t.markLine=t.markLine||{}})},function(t,e,n){n(221),n(222),n(2).registerPreprocessor(function(t){t.markPoint=t.markPoint||{}})},function(t,e,n){t.exports=n(79).extend({type:"markArea",defaultOption:{zlevel:0,z:1,tooltip:{trigger:"item"},animation:!1,label:{normal:{show:!0,position:"top"},emphasis:{show:!0,position:"top"}},itemStyle:{normal:{borderWidth:0}}}})},function(t,e,n){function i(t){return!isNaN(t)&&!isFinite(t)}function r(t,e,n,r){var o=1-t;return i(e[o])&&i(n[o])}function o(t,e){var n=e.coord[0],i=e.coord[1];return!("cartesian2d"!==t.type||!n||!i||!r(1,n,i,t)&&!r(0,n,i,t))||(f.dataFilter(t,{coord:n,x:e.x0,y:e.y0})||f.dataFilter(t,{coord:i,x:e.x1,y:e.y1}))}function a(t,e,n,r,o){var a,s=r.coordinateSystem,l=t.getItemModel(e),u=h.parsePercent(l.get(n[0]),o.getWidth()),c=h.parsePercent(l.get(n[1]),o.getHeight());if(isNaN(u)||isNaN(c)){if(r.getMarkerPosition)a=r.getMarkerPosition(t.getValues(n,e));else{var d=t.get(n[0],e),f=t.get(n[1],e);a=s.dataToPoint([d,f],!0)}if("cartesian2d"===s.type){var p=s.getAxis("x"),g=s.getAxis("y"),d=t.get(n[0],e),f=t.get(n[1],e);i(d)?a[0]=p.toGlobalCoord(p.getExtent()["x0"===n[0]?0:1]):i(f)&&(a[1]=g.toGlobalCoord(g.getExtent()["y0"===n[1]?0:1]))}isNaN(u)||(a[0]=u),isNaN(c)||(a[1]=c)}else a=[u,c];return a}function s(t,e,n){var i,r,a=["x0","y0","x1","y1"];t?(i=l.map(t&&t.dimensions,function(t){var n=e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return n.name=t,n}),r=new u(l.map(a,function(t,e){return{name:t,type:i[e%2].type}}),n)):(i=[{name:"value",type:"float"}],r=new u(i,n));var s=l.map(n.get("data"),l.curry(p,e,t,n));t&&(s=l.filter(s,l.curry(o,t)));var h=t?function(t,e,n,i){return t.coord[Math.floor(i/2)][i%2]}:function(t){return t.value};return r.initData(s,null,h),r.hasItemOption=!0,r}var l=n(1),u=n(14),h=n(4),c=n(3),d=n(22),f=n(81),p=function(t,e,n,i){var r=f.dataTransform(t,i[0]),o=f.dataTransform(t,i[1]),a=l.retrieve,s=r.coord,u=o.coord;s[0]=a(s[0],-(1/0)),s[1]=a(s[1],-(1/0)),u[0]=a(u[0],1/0),u[1]=a(u[1],1/0);var h=l.mergeAll([{},r,o]);return h.coord=[r.coord,o.coord],h.x0=r.x,h.y0=r.y,h.x1=o.x,h.y1=o.y,h},g=[["x0","y0"],["x1","y0"],["x1","y1"],["x0","y1"]];n(80).extend({type:"markArea",updateLayout:function(t,e,n){e.eachSeries(function(t){var e=t.markAreaModel;if(e){var i=e.getData();i.each(function(e){var r=l.map(g,function(r){return a(i,e,r,t,n)});i.setItemLayout(e,r);var o=i.getItemGraphicEl(e);o.setShape("points",r)})}},this)},renderSeries:function(t,e,n,i){var r=t.coordinateSystem,o=t.name,u=t.getData(),h=this.markerGroupMap,f=h.get(o)||h.set(o,{group:new c.Group});this.group.add(f.group),f.__keep=!0;var p=s(r,t,e);e.setData(p),p.each(function(e){p.setItemLayout(e,l.map(g,function(n){return a(p,e,n,t,i)})),p.setItemVisual(e,{color:u.getVisual("color")})}),p.diff(f.__data).add(function(t){var e=new c.Polygon({shape:{points:p.getItemLayout(t)}});p.setItemGraphicEl(t,e),f.group.add(e)}).update(function(t,n){var i=f.__data.getItemGraphicEl(n);c.updateProps(i,{shape:{points:p.getItemLayout(t)}},e,t),f.group.add(i),p.setItemGraphicEl(t,i)}).remove(function(t){var e=f.__data.getItemGraphicEl(t);f.group.remove(e)}).execute(),p.eachItemGraphicEl(function(t,n){var i=p.getItemModel(n),r=i.getModel("label.normal"),o=i.getModel("label.emphasis"),a=p.getItemVisual(n,"color");t.useStyle(l.defaults(i.getModel("itemStyle.normal").getItemStyle(),{fill:d.modifyAlpha(a,.4),stroke:a})),t.hoverStyle=i.getModel("itemStyle.normal").getItemStyle();var s=p.getName(n)||"",u=a||t.style.fill;r.getShallow("show")?(c.setText(t.style,r,u),t.style.text=l.retrieve(e.getFormattedLabel(n,"normal"),s)):t.style.text="",o.getShallow("show")?(c.setText(t.hoverStyle,o,u),t.hoverStyle.text=l.retrieve(e.getFormattedLabel(n,"emphasis"),s)):t.hoverStyle.text="",c.setHoverStyle(t,{}),t.dataModel=e}),f.__data=p,f.group.silent=e.get("silent")||t.get("silent")}})},function(t,e,n){t.exports=n(79).extend({type:"markLine",defaultOption:{zlevel:0,z:5,symbol:["circle","arrow"],symbolSize:[8,16],precision:2,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"end"},emphasis:{show:!0}},lineStyle:{normal:{type:"dashed"},emphasis:{width:3}},animationEasing:"linear"}})},function(t,e,n){function i(t){return!isNaN(t)&&!isFinite(t)}function r(t,e,n,r){var o=1-t,a=r.dimensions[t];return i(e[o])&&i(n[o])&&e[t]===n[t]&&r.getAxis(a).containData(e[t])}function o(t,e){if("cartesian2d"===t.type){var n=e[0].coord,i=e[1].coord;if(n&&i&&(r(1,n,i,t)||r(0,n,i,t)))return!0}return c.dataFilter(t,e[0])&&c.dataFilter(t,e[1])}function a(t,e,n,r,o){var a,s=r.coordinateSystem,l=t.getItemModel(e),u=h.parsePercent(l.get("x"),o.getWidth()),c=h.parsePercent(l.get("y"),o.getHeight());if(isNaN(u)||isNaN(c)){if(r.getMarkerPosition)a=r.getMarkerPosition(t.getValues(t.dimensions,e));else{var d=s.dimensions,f=t.get(d[0],e),p=t.get(d[1],e);a=s.dataToPoint([f,p])}if("cartesian2d"===s.type){var g=s.getAxis("x"),m=s.getAxis("y"),d=s.dimensions;i(t.get(d[0],e))?a[0]=g.toGlobalCoord(g.getExtent()[n?0:1]):i(t.get(d[1],e))&&(a[1]=m.toGlobalCoord(m.getExtent()[n?0:1]))}isNaN(u)||(a[0]=u),isNaN(c)||(a[1]=c)}else a=[u,c];t.setItemLayout(e,a)}function s(t,e,n){var i;i=t?l.map(t&&t.dimensions,function(t){var n=e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return n.name=t,n}):[{name:"value",type:"float"}];var r=new u(i,n),a=new u(i,n),s=new u([],n),h=l.map(n.get("data"),l.curry(f,e,t,n));t&&(h=l.filter(h,l.curry(o,t)));var d=t?c.dimValueGetter:function(t){return t.value};return r.initData(l.map(h,function(t){return t[0]}),null,d),a.initData(l.map(h,function(t){return t[1]}),null,d),s.initData(l.map(h,function(t){return t[2]})),s.hasItemOption=!0,{from:r,to:a,line:s}}var l=n(1),u=n(14),h=n(4),c=n(81),d=n(107),f=function(t,e,n,i){var r=t.getData(),o=i.type;if(!l.isArray(i)&&("min"===o||"max"===o||"average"===o||null!=i.xAxis||null!=i.yAxis)){var a,s,u;if(null!=i.yAxis||null!=i.xAxis)s=null!=i.yAxis?"y":"x",a=e.getAxis(s),u=l.retrieve(i.yAxis,i.xAxis);else{var h=c.getAxisInfo(i,r,e,t);s=h.valueDataDim,a=h.valueAxis,u=c.numCalculate(r,s,o)}var d="x"===s?0:1,f=1-d,p=l.clone(i),g={};p.type=null,p.coord=[],g.coord=[],p.coord[f]=-(1/0),g.coord[f]=1/0;var m=n.get("precision");m>=0&&"number"==typeof u&&(u=+u.toFixed(m)),p.coord[d]=g.coord[d]=u,i=[p,g,{type:o,valueIndex:i.valueIndex,value:u}]}return i=[c.dataTransform(t,i[0]),c.dataTransform(t,i[1]),l.extend({},i[2])],i[2].type=i[2].type||"",l.merge(i[2],i[0]),l.merge(i[2],i[1]),i};n(80).extend({type:"markLine",updateLayout:function(t,e,n){e.eachSeries(function(t){var e=t.markLineModel;if(e){var i=e.getData(),r=e.__from,o=e.__to;r.each(function(e){a(r,e,!0,t,n),a(o,e,!1,t,n)}),i.each(function(t){i.setItemLayout(t,[r.getItemLayout(t),o.getItemLayout(t)])}),this.markerGroupMap.get(t.id).updateLayout()}},this)},renderSeries:function(t,e,n,i){function r(e,n,r){var o=e.getItemModel(n);a(e,n,r,t,i),e.setItemVisual(n,{symbolSize:o.get("symbolSize")||x[r?0:1],symbol:o.get("symbol",!0)||y[r?0:1],color:o.get("itemStyle.normal.color")||h.getVisual("color")})}var o=t.coordinateSystem,u=t.id,h=t.getData(),c=this.markerGroupMap,f=c.get(u)||c.set(u,new d);this.group.add(f.group);var p=s(o,t,e),g=p.from,m=p.to,v=p.line;e.__from=g,e.__to=m,e.setData(v);var y=e.get("symbol"),x=e.get("symbolSize");l.isArray(y)||(y=[y,y]),"number"==typeof x&&(x=[x,x]),p.from.each(function(t){r(g,t,!0),r(m,t,!1)}),v.each(function(t){var e=v.getItemModel(t).get("lineStyle.normal.color");v.setItemVisual(t,{color:e||g.getItemVisual(t,"color")}),v.setItemLayout(t,[g.getItemLayout(t),m.getItemLayout(t)]),v.setItemVisual(t,{fromSymbolSize:g.getItemVisual(t,"symbolSize"),fromSymbol:g.getItemVisual(t,"symbol"),toSymbolSize:m.getItemVisual(t,"symbolSize"),toSymbol:m.getItemVisual(t,"symbol")})}),f.updateData(v),p.line.eachItemGraphicEl(function(t,n){t.traverse(function(t){t.dataModel=e})}),f.__keep=!0,f.group.silent=e.get("silent")||t.get("silent")}})},function(t,e,n){t.exports=n(79).extend({type:"markPoint",defaultOption:{zlevel:0,z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"inside"},emphasis:{show:!0}},itemStyle:{normal:{borderWidth:2}}}})},function(t,e,n){function i(t,e,n){var i=e.coordinateSystem;t.each(function(r){var o,a=t.getItemModel(r),l=s.parsePercent(a.get("x"),n.getWidth()),u=s.parsePercent(a.get("y"),n.getHeight());if(isNaN(l)||isNaN(u)){if(e.getMarkerPosition)o=e.getMarkerPosition(t.getValues(t.dimensions,r));else if(i){var h=t.get(i.dimensions[0],r),c=t.get(i.dimensions[1],r);o=i.dataToPoint([h,c])}}else o=[l,u];isNaN(l)||(o[0]=l),isNaN(u)||(o[1]=u),t.setItemLayout(r,o)})}function r(t,e,n){var i;i=t?a.map(t&&t.dimensions,function(t){var n=e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0])||{};return n.name=t,n}):[{name:"value",type:"float"}];var r=new l(i,n),o=a.map(n.get("data"),a.curry(u.dataTransform,e));return t&&(o=a.filter(o,a.curry(u.dataFilter,t))),r.initData(o,null,t?u.dimValueGetter:function(t){return t.value}),r}var o=n(44),a=n(1),s=n(4),l=n(14),u=n(81);n(80).extend({type:"markPoint",updateLayout:function(t,e,n){e.eachSeries(function(t){var e=t.markPointModel;e&&(i(e.getData(),t,n),this.markerGroupMap.get(t.id).updateLayout(e))},this)},renderSeries:function(t,e,n,a){var s=t.coordinateSystem,l=t.id,u=t.getData(),h=this.markerGroupMap,c=h.get(l)||h.set(l,new o),d=r(s,t,e);e.setData(d),i(e.getData(),t,a),d.each(function(t){var n=d.getItemModel(t),i=n.getShallow("symbolSize");"function"==typeof i&&(i=i(e.getRawValue(t),e.getDataParams(t))),d.setItemVisual(t,{symbolSize:i,color:n.get("itemStyle.normal.color")||u.getVisual("color"),symbol:n.getShallow("symbol")})}),c.updateData(d),this.group.add(c.group),d.eachItemGraphicEl(function(t){t.traverse(function(t){t.dataModel=e})}),c.__keep=!0,c.group.silent=e.get("silent")||t.get("silent")}})},function(t,e,n){"use strict";var i=n(2),r=n(3),o=n(12);i.extendComponentModel({type:"title",layoutMode:{type:"box",ignoreSize:!0},defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),i.extendComponentView({type:"title",render:function(t,e,n){if(this.group.removeAll(),t.get("show")){var i=this.group,a=t.getModel("textStyle"),s=t.getModel("subtextStyle"),l=t.get("textAlign"),u=t.get("textBaseline"),h=new r.Text({style:{text:t.get("text"),textFont:a.getFont(),fill:a.getTextColor()},z2:10}),c=h.getBoundingRect(),d=t.get("subtext"),f=new r.Text({style:{text:d,textFont:s.getFont(),fill:s.getTextColor(),y:c.height+t.get("itemGap"),textBaseline:"top"},z2:10}),p=t.get("link"),g=t.get("sublink");h.silent=!p,f.silent=!g,p&&h.on("click",function(){window.open(p,"_"+t.get("target"))}),g&&f.on("click",function(){window.open(g,"_"+t.get("subtarget"))}),i.add(h),d&&i.add(f);var m=i.getBoundingRect(),v=t.getBoxLayoutParams();v.width=m.width,v.height=m.height;var y=o.getLayoutRect(v,{width:n.getWidth(),height:n.getHeight()},t.get("padding"));l||(l=t.get("left")||t.get("right"),"middle"===l&&(l="center"),"right"===l?y.x+=y.width:"center"===l&&(y.x+=y.width/2)),u||(u=t.get("top")||t.get("bottom"),"center"===u&&(u="middle"),"bottom"===u?y.y+=y.height:"middle"===u&&(y.y+=y.height/2),u=u||"top"),i.attr("position",[y.x,y.y]);var x={textAlign:l,textVerticalAlign:u};h.setStyle(x),f.setStyle(x),m=i.getBoundingRect();var _=y.margin,b=t.getItemStyle(["color","opacity"]);b.fill=t.get("backgroundColor");var w=new r.Rect({shape:{x:m.x-_[3],y:m.y-_[0],width:m.width+_[1]+_[3],height:m.height+_[0]+_[2]},style:b,silent:!0});r.subPixelOptimizeRect(w),i.add(w)}}})},function(t,e,n){n(225),n(226),n(231),n(229),n(227),n(228),n(230)},function(t,e,n){var i=n(29),r=n(1),o=n(2).extendComponentModel({type:"toolbox",layoutMode:{type:"box",ignoreSize:!0},mergeDefaultAndTheme:function(t){o.superApply(this,"mergeDefaultAndTheme",arguments),r.each(this.option.feature,function(t,e){var n=i.get(e);n&&r.merge(t,n.defaultOption)})},defaultOption:{show:!0,z:6,zlevel:0,orient:"horizontal",left:"right",top:"top",backgroundColor:"transparent",borderColor:"#ccc",borderWidth:0,padding:5,itemSize:15,itemGap:8,showTitle:!0,iconStyle:{normal:{borderColor:"#666",color:"none"},emphasis:{borderColor:"#3E98C5"}}}});t.exports=o},function(t,e,n){(function(e){function i(t){return 0===t.indexOf("my")}var r=n(29),o=n(1),a=n(3),s=n(10),l=n(48),u=n(130),h=n(16);t.exports=n(2).extendComponentView({type:"toolbox",render:function(t,e,n,c){function d(o,a){var l,u=y[o],h=y[a],d=m[u],p=new s(d,t,t.ecModel);if(u&&!h){if(i(u))l={model:p,onclick:p.option.onclick,featureName:u};else{var g=r.get(u);if(!g)return;l=new g(p,e,n)}v[u]=l}else{if(l=v[h],!l)return;l.model=p,l.ecModel=e,l.api=n}return!u&&h?void(l.dispose&&l.dispose(e,n)):!p.get("show")||l.unusable?void(l.remove&&l.remove(e,n)):(f(p,l,u),p.setIconStatus=function(t,e){var n=this.option,i=this.iconPaths;n.iconStatus=n.iconStatus||{},n.iconStatus[t]=e,i[t]&&i[t].trigger(e)},void(l.render&&l.render(p,e,n,c)))}function f(i,r,s){var l=i.getModel("iconStyle"),u=r.getIcons?r.getIcons():i.get("icon"),h=i.get("title")||{};if("string"==typeof u){var c=u,d=h;u={},h={},u[s]=c,h[s]=d}var f=i.iconPaths={};o.each(u,function(s,u){var c=l.getModel("normal").getItemStyle(),d=l.getModel("emphasis").getItemStyle(),m={x:-g/2,y:-g/2,width:g,height:g},v=0===s.indexOf("image://")?(m.image=s.slice(8),new a.Image({style:m})):a.makePath(s.replace("path://",""),{style:c,hoverStyle:d,rectHover:!0},m,"center");a.setHoverStyle(v),t.get("showTitle")&&(v.__title=h[u],v.on("mouseover",function(){var t=l.getModel("emphasis").getItemStyle();v.setStyle({text:h[u],textPosition:t.textPosition||"bottom",textFill:t.fill||t.stroke||"#000",textAlign:t.textAlign||"center"})}).on("mouseout",function(){v.setStyle({textFill:null})})),v.trigger(i.get("iconStatus."+u)||"normal"),p.add(v),v.on("click",o.bind(r.onclick,r,e,n,u)),f[u]=v})}var p=this.group;if(p.removeAll(),t.get("show")){var g=+t.get("itemSize"),m=t.get("feature")||{},v=this._features||(this._features={}),y=[];o.each(m,function(t,e){y.push(e)}),new l(this._featureNames||[],y).add(d).update(d).remove(o.curry(d,null)).execute(),this._featureNames=y,u.layout(p,t,n),u.addBackground(p,t),p.eachChild(function(t){var e=t.__title,i=t.hoverStyle;if(i&&e){var r=h.getBoundingRect(e,i.font),o=t.position[0]+p.position[0],a=t.position[1]+p.position[1]+g,s=!1;a+r.height>n.getHeight()&&(i.textPosition="top",s=!0);var l=s?-5-r.height:g+8;o+r.width/2>n.getWidth()?(i.textPosition=["100%",l],i.textAlign="right"):o-r.width/2<0&&(i.textPosition=[0,l],i.textAlign="left")}})}},updateView:function(t,e,n,i){o.each(this._features,function(t){t.updateView&&t.updateView(t.model,e,n,i)})},updateLayout:function(t,e,n,i){o.each(this._features,function(t){t.updateLayout&&t.updateLayout(t.model,e,n,i)})},remove:function(t,e){o.each(this._features,function(n){n.remove&&n.remove(t,e)}),this.group.removeAll()},dispose:function(t,e){o.each(this._features,function(n){n.dispose&&n.dispose(t,e)})}})}).call(e,n(188))},function(t,e,n){function i(t){var e={},n=[],i=[];return t.eachRawSeries(function(t){var r=t.coordinateSystem;if(!r||"cartesian2d"!==r.type&&"polar"!==r.type)n.push(t);else{var o=r.getBaseAxis();if("category"===o.type){var a=o.dim+"_"+o.index;e[a]||(e[a]={categoryAxis:o,valueAxis:r.getOtherAxis(o),series:[]},i.push({axisDim:o.dim,axisIndex:o.index})),e[a].series.push(t)}else n.push(t)}}),{seriesGroupByCategoryAxis:e,other:n,meta:i}}function r(t){var e=[];return p.each(t,function(t,n){var i=t.categoryAxis,r=t.valueAxis,o=r.dim,a=[" "].concat(p.map(t.series,function(t){return t.name})),s=[i.model.getCategories()];p.each(t.series,function(t){s.push(t.getRawData().mapArray(o,function(t){return t}))});for(var l=[a.join(v)],u=0;u<s[0].length;u++){for(var h=[],c=0;c<s.length;c++)h.push(s[c][u]);l.push(h.join(v))}e.push(l.join("\n"))}),e.join("\n\n"+m+"\n\n")}function o(t){return p.map(t,function(t){var e=t.getRawData(),n=[t.name],i=[];return e.each(e.dimensions,function(){for(var t=arguments.length,r=arguments[t-1],o=e.getName(r),a=0;a<t-1;a++)i[a]=arguments[a];n.push((o?o+v:"")+i.join(v))}),n.join("\n")}).join("\n\n"+m+"\n\n")}function a(t){var e=i(t);return{value:p.filter([r(e.seriesGroupByCategoryAxis),o(e.other)],function(t){return t.replace(/[\n\t\s]/g,"")}).join("\n\n"+m+"\n\n"),meta:e.meta}}function s(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function l(t){var e=t.slice(0,t.indexOf("\n"));if(e.indexOf(v)>=0)return!0}function u(t){for(var e=t.split(/\n+/g),n=s(e.shift()).split(y),i=[],r=p.map(n,function(t){return{name:t,data:[]}}),o=0;o<e.length;o++){var a=s(e[o]).split(y);i.push(a.shift());for(var l=0;l<a.length;l++)r[l]&&(r[l].data[o]=a[l])}return{series:r,categories:i}}function h(t){for(var e=t.split(/\n+/g),n=s(e.shift()),i=[],r=0;r<e.length;r++){var o,a=s(e[r]).split(y),l="",u=!1;isNaN(a[0])?(u=!0,l=a[0],a=a.slice(1),i[r]={name:l,value:[]},o=i[r].value):o=i[r]=[];for(var h=0;h<a.length;h++)o.push(+a[h]);1===o.length&&(u?i[r].value=o[0]:i[r]=o[0])}return{name:n,data:i}}function c(t,e){var n=t.split(new RegExp("\n*"+m+"\n*","g")),i={series:[]};return p.each(n,function(t,n){if(l(t)){var r=u(t),o=e[n],a=o.axisDim+"Axis";o&&(i[a]=i[a]||[],i[a][o.axisIndex]={data:r.categories},i.series=i.series.concat(r.series))}else{var r=h(t);i.series.push(r)}}),i}function d(t){this._dom=null,this.model=t}function f(t,e){return p.map(t,function(t,n){var i=e&&e[n];return p.isObject(i)&&!p.isArray(i)?(p.isObject(t)&&!p.isArray(t)&&(t=t.value),p.defaults({value:t},i)):t})}var p=n(1),g=n(21),m=new Array(60).join("-"),v="\t",y=new RegExp("["+v+"]+","g");d.defaultOption={show:!0,readOnly:!1,optionToContent:null,contentToOption:null,icon:"M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",title:"数据视图",lang:["数据视图","关闭","刷新"],backgroundColor:"#fff",textColor:"#000",textareaColor:"#fff",textareaBorderColor:"#333",buttonColor:"#c23531",buttonTextColor:"#fff"},d.prototype.onclick=function(t,e){function n(){i.removeChild(o),S._dom=null}var i=e.getDom(),r=this.model;this._dom&&i.removeChild(this._dom);var o=document.createElement("div");o.style.cssText="position:absolute;left:5px;top:5px;bottom:5px;right:5px;",o.style.backgroundColor=r.get("backgroundColor")||"#fff";var s=document.createElement("h4"),l=r.get("lang")||[];s.innerHTML=l[0]||r.get("title"),s.style.cssText="margin: 10px 20px;",s.style.color=r.get("textColor");var u=document.createElement("div"),h=document.createElement("textarea");u.style.cssText="display:block;width:100%;overflow:auto;";var d=r.get("optionToContent"),f=r.get("contentToOption"),m=a(t);if("function"==typeof d){var y=d(e.getOption());"string"==typeof y?u.innerHTML=y:p.isDom(y)&&u.appendChild(y)}else u.appendChild(h),h.readOnly=r.get("readOnly"),h.style.cssText="width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;",h.style.color=r.get("textColor"),h.style.borderColor=r.get("textareaBorderColor"),h.style.backgroundColor=r.get("textareaColor"),h.value=m.value;var x=m.meta,_=document.createElement("div");_.style.cssText="position:absolute;bottom:0;left:0;right:0;";var b="float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",w=document.createElement("div"),M=document.createElement("div");b+=";background-color:"+r.get("buttonColor"),b+=";color:"+r.get("buttonTextColor");var S=this;g.addEventListener(w,"click",n),g.addEventListener(M,"click",function(){var t;try{t="function"==typeof f?f(u,e.getOption()):c(h.value,x)}catch(i){throw n(),new Error("Data view format error "+i)}t&&e.dispatchAction({type:"changeDataView",newOption:t}),n()}),w.innerHTML=l[1],M.innerHTML=l[2],M.style.cssText=b,w.style.cssText=b,!r.get("readOnly")&&_.appendChild(M),_.appendChild(w),g.addEventListener(h,"keydown",function(t){if(9===(t.keyCode||t.which)){var e=this.value,n=this.selectionStart,i=this.selectionEnd;this.value=e.substring(0,n)+v+e.substring(i),this.selectionStart=this.selectionEnd=n+1,g.stop(t)}}),o.appendChild(s),o.appendChild(u),o.appendChild(_),u.style.height=i.clientHeight-80+"px",i.appendChild(o),this._dom=o},d.prototype.remove=function(t,e){this._dom&&e.getDom().removeChild(this._dom)},d.prototype.dispose=function(t,e){this.remove(t,e)},n(29).register("dataView",d),n(2).registerAction({type:"changeDataView",event:"dataViewChanged",update:"prepareAndUpdate"},function(t,e){var n=[];p.each(t.newOption.series,function(t){var i=e.getSeriesByName(t.name)[0];if(i){var r=i.get("data");n.push({name:t.name,data:f(t.data,r)})}else n.push(p.extend({type:"scatter"},t))}),e.mergeOption(p.defaults({series:n},t.newOption))}),t.exports=d},function(t,e,n){"use strict";function i(t,e,n){(this._brushController=new l(n.getZr())).on("brush",s.bind(this._onBrush,this)).mount(),this._isZoomActive}function r(t){var e={};return s.each(["xAxisIndex","yAxisIndex"],function(n){e[n]=t[n],null==e[n]&&(e[n]="all"),(e[n]===!1||"none"===e[n])&&(e[n]=[])}),e}function o(t,e){t.setIconStatus("back",h.count(e)>1?"emphasis":"normal")}function a(t,e,n,i,o){var a=n._isZoomActive;i&&"takeGlobalCursor"===i.type&&(a="dataZoomSelect"===i.key&&i.dataZoomSelectActive),n._isZoomActive=a,t.setIconStatus("zoom",a?"emphasis":"normal");var s=new u(r(t.option),e,{include:["grid"]});n._brushController.setPanels(s.makePanelOpts(o,function(t){return t.xAxisDeclared&&!t.yAxisDeclared?"lineX":!t.xAxisDeclared&&t.yAxisDeclared?"lineY":"rect"})).enableBrush(!!a&&{brushType:"auto",brushStyle:{lineWidth:0,fill:"rgba(0,0,0,0.2)"}})}var s=n(1),l=n(127),u=n(184),h=n(125),c=n(56),d=s.each;n(206);var f="\0_ec_\0toolbox-dataZoom_";i.defaultOption={show:!0,icon:{zoom:"M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",back:"M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"},title:{zoom:"区域缩放",back:"区域缩放还原"}};var p=i.prototype;p.render=function(t,e,n,i){this.model=t,this.ecModel=e,this.api=n,a(t,e,this,i,n),o(t,e)},p.onclick=function(t,e,n){g[n].call(this)},p.remove=function(t,e){this._brushController.unmount()},p.dispose=function(t,e){this._brushController.dispose()};var g={zoom:function(){var t=!this._isZoomActive;this.api.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:t})},back:function(){this._dispatchZoomAction(h.pop(this.ecModel))}};p._onBrush=function(t,e){function n(t,e,n){var r=e.getAxis(t),s=r.model,l=i(t,s,a),u=l.findRepresentativeAxisProxy(s).getMinMaxSpan();null==u.minValueSpan&&null==u.maxValueSpan||(n=c(0,n.slice(),r.scale.getExtent(),0,u.minValueSpan,u.maxValueSpan)),l&&(o[l.id]={dataZoomId:l.id,startValue:n[0],endValue:n[1]})}function i(t,e,n){var i;return n.eachComponent({mainType:"dataZoom",subType:"select"},function(n){var r=n.getAxisModel(t,e.componentIndex);r&&(i=n)}),i}if(e.isEnd&&t.length){var o={},a=this.ecModel;this._brushController.updateCovers([]);var s=new u(r(this.model.option),a,{include:["grid"]});s.matchOutputRanges(t,a,function(t,e,i){if("cartesian2d"===i.type){var r=t.brushType;"rect"===r?(n("x",i,e[0]),n("y",i,e[1])):n({lineX:"x",lineY:"y"}[r],i,e)}}),h.push(a,o),this._dispatchZoomAction(o)}},p._dispatchZoomAction=function(t){var e=[];d(t,function(t,n){e.push(s.clone(t))}),e.length&&this.api.dispatchAction({type:"dataZoom",from:this.uid,batch:e})},n(29).register("dataZoom",i),n(2).registerPreprocessor(function(t){function e(t,e){if(e){var r=t+"Index",o=e[r];null==o||"all"==o||s.isArray(o)||(o=o===!1||"none"===o?[]:[o]),n(t,function(e,n){if(null==o||"all"==o||s.indexOf(o,n)!==-1){var a={type:"select",$fromToolbox:!0,id:f+t+n};a[r]=n,i.push(a)}})}}function n(e,n){var i=t[e];s.isArray(i)||(i=i?[i]:[]),d(i,n)}if(t){var i=t.dataZoom||(t.dataZoom=[]);s.isArray(i)||(t.dataZoom=i=[i]);var r=t.toolbox;if(r&&(s.isArray(r)&&(r=r[0]),r&&r.feature)){var o=r.feature.dataZoom;e("xAxis",o),e("yAxis",o)}}}),t.exports=i},function(t,e,n){"use strict";function i(t){this.model=t}var r=n(1);i.defaultOption={show:!0,type:[],icon:{line:"M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",bar:"M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",stack:"M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",tiled:"M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"},title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"},option:{},seriesIndex:{}};var o=i.prototype;o.getIcons=function(){var t=this.model,e=t.get("icon"),n={};return r.each(t.get("type"),function(t){e[t]&&(n[t]=e[t])}),n};var a={line:function(t,e,n,i){if("bar"===t)return r.merge({id:e,type:"line",data:n.get("data"),stack:n.get("stack"),markPoint:n.get("markPoint"),markLine:n.get("markLine")},i.get("option.line")||{},!0)},bar:function(t,e,n,i){if("line"===t)return r.merge({id:e,type:"bar",data:n.get("data"),stack:n.get("stack"),markPoint:n.get("markPoint"),markLine:n.get("markLine")},i.get("option.bar")||{},!0)},stack:function(t,e,n,i){if("line"===t||"bar"===t)return r.merge({id:e,stack:"__ec_magicType_stack__"},i.get("option.stack")||{},!0)},tiled:function(t,e,n,i){if("line"===t||"bar"===t)return r.merge({id:e,stack:""},i.get("option.tiled")||{},!0)}},s=[["line","bar"],["stack","tiled"]];o.onclick=function(t,e,n){var i=this.model,o=i.get("seriesIndex."+n);if(a[n]){var l={series:[]},u=function(e){var o=e.subType,s=e.id,u=a[n](o,s,e,i);u&&(r.defaults(u,e.option),l.series.push(u));var h=e.coordinateSystem;if(h&&"cartesian2d"===h.type&&("line"===n||"bar"===n)){var c=h.getAxesByScale("ordinal")[0];if(c){var d=c.dim,f=d+"Axis",p=t.queryComponents({mainType:f,index:e.get(name+"Index"),id:e.get(name+"Id")})[0],g=p.componentIndex;l[f]=l[f]||[];for(var m=0;m<=g;m++)l[f][g]=l[f][g]||{};l[f][g].boundaryGap="bar"===n}}};r.each(s,function(t){r.indexOf(t,n)>=0&&r.each(t,function(t){i.setIconStatus(t,"normal")})}),i.setIconStatus(n,"emphasis"),t.eachComponent({mainType:"series",query:null==o?null:{seriesIndex:o}},u),e.dispatchAction({type:"changeMagicType",currentType:n,newOption:l})}};var l=n(2);l.registerAction({type:"changeMagicType",event:"magicTypeChanged",update:"prepareAndUpdate"},function(t,e){e.mergeOption(t.newOption)}),n(29).register("magicType",i),t.exports=i},function(t,e,n){"use strict";function i(t){this.model=t}var r=n(125);i.defaultOption={show:!0,icon:"M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",title:"还原"};var o=i.prototype;o.onclick=function(t,e,n){r.clear(t),e.dispatchAction({type:"restore",from:this.uid})},n(29).register("restore",i),n(2).registerAction({type:"restore",event:"restore",update:"prepareAndUpdate"},function(t,e){e.resetOption("recreate")}),t.exports=i},function(t,e,n){function i(t){this.model=t}var r=n(9);i.defaultOption={show:!0,icon:"M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",title:"保存为图片",type:"png",name:"",excludeComponents:["toolbox"],pixelRatio:1,lang:["右键另存为图片"]},i.prototype.unusable=!r.canvasSupported;var o=i.prototype;o.onclick=function(t,e){var n=this.model,i=n.get("name")||t.get("title.0.text")||"echarts",o=document.createElement("a"),a=n.get("type",!0)||"png";o.download=i+"."+a,o.target="_blank";var s=e.getConnectedDataURL({type:a,backgroundColor:n.get("backgroundColor",!0)||t.get("backgroundColor")||"#fff",excludeComponents:n.get("excludeComponents"),pixelRatio:n.get("pixelRatio")});if(o.href=s,"function"!=typeof MouseEvent||r.browser.ie||r.browser.edge){var l=n.get("lang"),u='<body style="margin:0;"><img src="'+s+'" style="max-width:100%;" title="'+(l&&l[0]||"")+'" /></body>',h=window.open();
h.document.write(u)}else{var c=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});o.dispatchEvent(c)}},n(29).register("saveAsImage",i),t.exports=i},function(t,e,n){n(55),n(234),n(235),n(2).registerAction({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),n(2).registerAction({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){})},function(t,e,n){function i(t){var e="cubic-bezier(0.23, 1, 0.32, 1)",n="left "+t+"s "+e+",top "+t+"s "+e;return s.map(p,function(t){return t+"transition:"+n}).join(";")}function r(t){var e=[],n=t.get("fontSize"),i=t.getTextColor();return i&&e.push("color:"+i),e.push("font:"+t.getFont()),n&&e.push("line-height:"+Math.round(3*n/2)+"px"),c(["decoration","align"],function(n){var i=t.get(n);i&&e.push("text-"+n+":"+i)}),e.join(";")}function o(t){var e=[],n=t.get("transitionDuration"),o=t.get("backgroundColor"),a=t.getModel("textStyle"),s=t.get("padding");return n&&e.push(i(n)),o&&(f.canvasSupported?e.push("background-Color:"+o):(e.push("background-Color:#"+l.toHex(o)),e.push("filter:alpha(opacity=70)"))),c(["width","color","radius"],function(n){var i="border-"+n,r=d(i),o=t.get(r);null!=o&&e.push(i+":"+o+("color"===n?"":"px"))}),e.push(r(a)),null!=s&&e.push("padding:"+h.normalizeCssArray(s).join("px ")+"px"),e.join(";")+";"}function a(t,e){var n=document.createElement("div"),i=this._zr=e.getZr();this.el=n,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(n),this._container=t,this._show=!1,this._hideTimeout;var r=this;n.onmouseenter=function(){r._enterable&&(clearTimeout(r._hideTimeout),r._show=!0),r._inContent=!0},n.onmousemove=function(e){if(e=e||window.event,!r._enterable){var n=i.handler;u.normalizeEvent(t,e,!0),n.dispatch("mousemove",e)}},n.onmouseleave=function(){r._enterable&&r._show&&r.hideLater(r._hideDelay),r._inContent=!1}}var s=n(1),l=n(22),u=n(21),h=n(7),c=s.each,d=h.toCamelCase,f=n(9),p=["","-webkit-","-moz-","-o-"],g="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";a.prototype={constructor:a,_enterable:!0,update:function(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),n=t.style;"absolute"!==n.position&&"absolute"!==e.position&&(n.position="relative")},show:function(t){clearTimeout(this._hideTimeout);var e=this.el;e.style.cssText=g+o(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",this._show=!0},setContent:function(t){this.el.innerHTML=null==t?"":t},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el;return[t.clientWidth,t.clientHeight]},moveTo:function(t,e){var n,i=this._zr;i&&i.painter&&(n=i.painter.getViewportRoot())&&(t+=n.offsetLeft||0,e+=n.offsetTop||0);var r=this.el.style;r.left=t+"px",r.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(s.bind(this.hide,this),t)):this.hide())},isShow:function(){return this._show}},t.exports=a},function(t,e,n){n(2).extendComponentModel({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:8,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}})},function(t,e,n){function i(t){for(var e=t.pop();t.length;){var n=t.pop();n&&(n instanceof v&&(n=n.get("tooltip",!0)),"string"==typeof n&&(n={formatter:n}),e=new v(n,e,e.ecModel))}return e}function r(t,e){return t.dispatchAction||h.bind(e.dispatchAction,e)}function o(t,e,n,i,r,o,a){var s=n.clientWidth,l=n.clientHeight;return null!=o&&(t+s+o>i?t-=s+o:t+=o),null!=a&&(e+l+a>r?e-=l+a:e+=a),[t,e]}function a(t,e,n,i,r){var o=n.clientWidth,a=n.clientHeight;return t=Math.min(t+o,i)-o,e=Math.min(e+a,r)-a,t=Math.max(t,0),e=Math.max(e,0),[t,e]}function s(t,e,n){var i=n[0],r=n[1],o=5,a=0,s=0,l=e.width,u=e.height;switch(t){case"inside":a=e.x+l/2-i/2,s=e.y+u/2-r/2;break;case"top":a=e.x+l/2-i/2,s=e.y-r-o;break;case"bottom":a=e.x+l/2-i/2,s=e.y+u+o;break;case"left":a=e.x-i-o,s=e.y+u/2-r/2;break;case"right":a=e.x+l+o,s=e.y+u/2-r/2}return[a,s]}function l(t){return"center"===t||"middle"===t}var u=n(233),h=n(1),c=n(7),d=n(4),f=n(3),p=n(121),g=n(12),m=n(9),v=n(10),y=n(122),x=n(18),_=n(76),b=h.bind,w=h.each,M=d.parsePercent,S=new f.Rect({shape:{x:-1,y:-1,width:2,height:2}});n(2).extendComponentView({type:"tooltip",init:function(t,e){if(!m.node){var n=new u(e.getDom(),e);this._tooltipContent=n}},render:function(t,e,n){if(!m.node){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=n,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent");var i=this._tooltipContent;i.update(),i.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var t=this._tooltipModel,e=t.get("triggerOn");y.register("itemTooltip",this._api,b(function(t,n,i){"none"!==e&&(e.indexOf(t)>=0?this._tryShow(n,i):"leave"===t&&this._hide(i))},this))},_keepShow:function(){var t=this._tooltipModel,e=this._ecModel,n=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var i=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){i.manuallyShowTip(t,e,n,{x:i._lastX,y:i._lastY})})}},manuallyShowTip:function(t,e,n,i){if(i.from!==this.uid&&!m.node){var o=r(i,n);this._ticket="";var a=i.dataByCoordSys;if(i.tooltip&&null!=i.x&&null!=i.y){var s=S;s.position=[i.x,i.y],s.update(),s.tooltip=i.tooltip,this._tryShow({offsetX:i.x,offsetY:i.y,target:s},o)}else if(a)this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,event:{},dataByCoordSys:i.dataByCoordSys,tooltipOption:i.tooltipOption},o);else if(null!=i.seriesIndex){if(this._manuallyAxisShowTip(t,e,n,i))return;var l=p(i,e),u=l.point[0],h=l.point[1];null!=u&&null!=h&&this._tryShow({offsetX:u,offsetY:h,position:i.position,target:l.el,event:{}},o)}else null!=i.x&&null!=i.y&&(n.dispatchAction({type:"updateAxisPointer",x:i.x,y:i.y}),this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,target:n.getZr().findHover(i.x,i.y).target,event:{}},o))}},manuallyHideTip:function(t,e,n,i){var o=this._tooltipContent;this._alwaysShowContent||o.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,i.from!==this.uid&&this._hide(r(i,n))},_manuallyAxisShowTip:function(t,e,n,r){var o=r.seriesIndex,a=r.dataIndex,s=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=o&&null!=a&&null!=s){var l=e.getSeriesByIndex(o);if(l){var u=l.getData(),t=i([u.getItemModel(a),l,(l.coordinateSystem||{}).model,t]);if("axis"===t.get("trigger"))return n.dispatchAction({type:"updateAxisPointer",seriesIndex:o,dataIndex:a,position:r.position}),!0}}},_tryShow:function(t,e){var n=t.target,i=this._tooltipModel;if(i){this._lastX=t.offsetX,this._lastY=t.offsetY;var r=t.dataByCoordSys;r&&r.length?this._showAxisTooltip(r,t):n&&null!=n.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,n,e)):n&&n.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,n,e)):(this._lastDataByCoordSys=null,this._hide(e))}},_showOrMove:function(t,e){var n=t.get("showDelay");e=h.bind(e,this),clearTimeout(this._showTimout),n>0?this._showTimout=setTimeout(e,n):e()},_showAxisTooltip:function(t,e){var n=this._ecModel,r=this._tooltipModel,o=[e.offsetX,e.offsetY],a=[],s=[],l=i([e.tooltipOption,r]);w(t,function(t){w(t.dataByAxis,function(t){var e=n.getComponent(t.axisDim+"Axis",t.axisIndex),i=t.value,r=[];if(e&&null!=i){var o=_.getValueLabel(i,e.axis,n,t.seriesDataIndices,t.valueLabelOpt);h.each(t.seriesDataIndices,function(a){var l=n.getSeriesByIndex(a.seriesIndex),u=a.dataIndexInside,h=l&&l.getDataParams(u);h.axisDim=t.axisDim,h.axisIndex=t.axisIndex,h.axisType=t.axisType,h.axisId=t.axisId,h.axisValue=x.getAxisRawValue(e.axis,i),h.axisValueLabel=o,h&&(s.push(h),r.push(l.formatTooltip(u,!0)))});var l=o;a.push((l?c.encodeHTML(l)+"<br />":"")+r.join("<br />"))}})},this),a.reverse(),a=a.join("<br /><br />");var u=e.position;this._showOrMove(l,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(l,u,o[0],o[1],this._tooltipContent,s):this._showTooltipContent(l,a,s,Math.random(),o[0],o[1],u)})},_showSeriesItemTooltip:function(t,e,n){var r=this._ecModel,o=e.seriesIndex,a=r.getSeriesByIndex(o),s=e.dataModel||a,l=e.dataIndex,u=e.dataType,h=s.getData(),c=i([h.getItemModel(l),s,a&&(a.coordinateSystem||{}).model,this._tooltipModel]),d=c.get("trigger");if(null==d||"item"===d){var f=s.getDataParams(l,u),p=s.formatTooltip(l,!1,u),g="item_"+s.name+"_"+l;this._showOrMove(c,function(){this._showTooltipContent(c,p,f,g,t.offsetX,t.offsetY,t.position,t.target)}),n({type:"showTip",dataIndexInside:l,dataIndex:h.getRawIndex(l),seriesIndex:o,from:this.uid})}},_showComponentItemTooltip:function(t,e,n){var i=e.tooltip;if("string"==typeof i){var r=i;i={content:r,formatter:r}}var o=new v(i,this._tooltipModel,this._ecModel),a=o.get("content"),s=Math.random();this._showOrMove(o,function(){this._showTooltipContent(o,a,o.get("formatterParams")||{},s,t.offsetX,t.offsetY,t.position,e)}),n({type:"showTip",from:this.uid})},_showTooltipContent:function(t,e,n,i,r,o,a,s){if(this._ticket="",t.get("showContent")&&t.get("show")){var l=this._tooltipContent,u=t.get("formatter");a=a||t.get("position");var h=e;if(u&&"string"==typeof u)h=c.formatTpl(u,n,!0);else if("function"==typeof u){var d=b(function(e,i){e===this._ticket&&(l.setContent(i),this._updatePosition(t,a,r,o,l,n,s))},this);this._ticket=i,h=u(n,i,d)}l.setContent(h),l.show(t),this._updatePosition(t,a,r,o,l,n,s)}},_updatePosition:function(t,e,n,i,r,u,c){var d=this._api.getWidth(),f=this._api.getHeight();e=e||t.get("position");var p=r.getSize(),m=t.get("align"),v=t.get("verticalAlign"),y=c&&c.getBoundingRect().clone();if(c&&y.applyTransform(c.transform),"function"==typeof e&&(e=e([n,i],u,r.el,y,{viewSize:[d,f],contentSize:p.slice()})),h.isArray(e))n=M(e[0],d),i=M(e[1],f);else if(h.isObject(e)){e.width=p[0],e.height=p[1];var x=g.getLayoutRect(e,{width:d,height:f});n=x.x,i=x.y,m=null,v=null}else if("string"==typeof e&&c){var _=s(e,y,p);n=_[0],i=_[1]}else{var _=o(n,i,r.el,d,f,m?null:20,v?null:20);n=_[0],i=_[1]}if(m&&(n-=l(m)?p[0]/2:"right"===m?p[0]:0),v&&(i-=l(v)?p[1]/2:"bottom"===v?p[1]:0),t.get("confine")){var _=a(n,i,r.el,d,f);n=_[0],i=_[1]}r.moveTo(n,i)},_updateContentNotChangedOnAxis:function(t){var e=this._lastDataByCoordSys,n=!!e&&e.length===t.length;return n&&w(e,function(e,i){var r=e.dataByAxis||{},o=t[i]||{},a=o.dataByAxis||[];n&=r.length===a.length,n&&w(r,function(t,e){var i=a[e]||{},r=t.seriesDataIndices||[],o=i.seriesDataIndices||[];n&=t.value===i.value&&t.axisType===i.axisType&&t.axisId===i.axisId&&r.length===o.length,n&&w(r,function(t,e){var i=o[e];n&=t.seriesIndex===i.seriesIndex&&t.dataIndex===i.dataIndex})})}),this._lastDataByCoordSys=t,!!n},_hide:function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},dispose:function(t,e){m.node||(this._tooltipContent.hide(),y.unregister("itemTooltip",e))}})},,,function(t,e,n){function i(t){return parseInt(t,10)}function r(t,e){s.initVML(),this.root=t,this.storage=e;var n=document.createElement("div"),i=document.createElement("div");n.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",i.style.cssText="position:absolute;left:0;top:0;",t.appendChild(n),this._vmlRoot=i,this._vmlViewport=n,this.resize();var r=e.delFromStorage,o=e.addToStorage;e.delFromStorage=function(t){r.call(e,t),t&&t.onRemove&&t.onRemove(i)},e.addToStorage=function(t){t.onAdd&&t.onAdd(i),o.call(e,t)},this._firstPaint=!0}function o(t){return function(){a('In IE8.0 VML mode painter not support method "'+t+'"')}}var a=n(52),s=n(182);r.prototype={constructor:r,getViewportRoot:function(){return this._vmlViewport},refresh:function(){var t=this.storage.getDisplayList(!0,!0);this._paintList(t)},_paintList:function(t){for(var e=this._vmlRoot,n=0;n<t.length;n++){var i=t[n];i.invisible||i.ignore?(i.__alreadyNotVisible||i.onRemove(e),i.__alreadyNotVisible=!0):(i.__alreadyNotVisible&&i.onAdd(e),i.__alreadyNotVisible=!1,i.__dirty&&(i.beforeBrush&&i.beforeBrush(),(i.brushVML||i.brush).call(i,e),i.afterBrush&&i.afterBrush())),i.__dirty=!1}this._firstPaint&&(this._vmlViewport.appendChild(e),this._firstPaint=!1)},resize:function(t,e){var t=null==t?this._getWidth():t,e=null==e?this._getHeight():e;if(this._width!=t||this._height!=e){this._width=t,this._height=e;var n=this._vmlViewport.style;n.width=t+"px",n.height=e+"px"}},dispose:function(){this.root.innerHTML="",this._vmlRoot=this._vmlViewport=this.storage=null},getWidth:function(){return this._width},getHeight:function(){return this._height},clear:function(){this._vmlViewport&&this.root.removeChild(this._vmlViewport)},_getWidth:function(){var t=this.root,e=t.currentStyle;return(t.clientWidth||i(e.width))-i(e.paddingLeft)-i(e.paddingRight)|0},_getHeight:function(){var t=this.root,e=t.currentStyle;return(t.clientHeight||i(e.height))-i(e.paddingTop)-i(e.paddingBottom)|0}};for(var l=["getLayer","insertLayer","eachLayer","eachBuiltinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],u=0;u<l.length;u++){var h=l[u];r.prototype[h]=o(h)}t.exports=r},function(t,e,n){if(!n(9).canvasSupported){var i=n(6),r=n(11),o=n(27).CMD,a=n(22),s=n(16),l=n(87),u=n(38),h=n(53),c=n(86),d=n(8),f=n(27),p=n(39),g=n(182),m=Math.round,v=Math.sqrt,y=Math.abs,x=Math.cos,_=Math.sin,b=Math.max,w=i.applyTransform,M=",",S="progid:DXImageTransform.Microsoft",T=21600,A=T/2,I=1e5,C=1e3,P=function(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=T+","+T,t.coordorigin="0,0"},D=function(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")},k=function(t,e,n){return"rgb("+[t,e,n].join(",")+")"},L=function(t,e){e&&t&&e.parentNode!==t&&t.appendChild(e)},O=function(t,e){e&&t&&e.parentNode===t&&t.removeChild(e)},z=function(t,e,n){return(parseFloat(t)||0)*I+(parseFloat(e)||0)*C+n},E=function(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t},N=function(t,e,n){var i=a.parse(e);n=+n,isNaN(n)&&(n=1),i&&(t.color=k(i[0],i[1],i[2]),t.opacity=n*i[3])},R=function(t){var e=a.parse(t);return[k(e[0],e[1],e[2]),e[3]]},B=function(t,e,n){var i=e.fill;if(null!=i)if(i instanceof p){var r,o=0,a=[0,0],s=0,l=1,u=n.getBoundingRect(),h=u.width,c=u.height;if("linear"===i.type){r="gradient";var d=n.transform,f=[i.x*h,i.y*c],g=[i.x2*h,i.y2*c];d&&(w(f,f,d),w(g,g,d));var m=g[0]-f[0],v=g[1]-f[1];o=180*Math.atan2(m,v)/Math.PI,o<0&&(o+=360),o<1e-6&&(o=0)}else{r="gradientradial";var f=[i.x*h,i.y*c],d=n.transform,y=n.scale,x=h,_=c;a=[(f[0]-u.x)/x,(f[1]-u.y)/_],d&&w(f,f,d),x/=y[0]*T,_/=y[1]*T;var M=b(x,_);s=0/M,l=2*i.r/M-s}var S=i.colorStops.slice();S.sort(function(t,e){return t.offset-e.offset});for(var A=S.length,I=[],C=[],P=0;P<A;P++){var D=S[P],k=R(D.color);C.push(D.offset*l+s+" "+k[0]),0!==P&&P!==A-1||I.push(k)}if(A>=2){var L=I[0][0],O=I[1][0],z=I[0][1]*e.opacity,E=I[1][1]*e.opacity;t.type=r,t.method="none",t.focus="100%",t.angle=o,t.color=L,t.color2=O,t.colors=C.join(","),t.opacity=E,t.opacity2=z}"radial"===r&&(t.focusposition=a.join(","))}else N(t,i,e.opacity)},V=function(t,e){null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e.stroke||e.stroke instanceof p||N(t,e.stroke,e.opacity)},F=function(t,e,n,i){var r="fill"==e,o=t.getElementsByTagName(e)[0];null!=n[e]&&"none"!==n[e]&&(r||!r&&n.lineWidth)?(t[r?"filled":"stroked"]="true",n[e]instanceof p&&O(t,o),o||(o=g.createNode(e)),r?B(o,n,i):V(o,n),L(t,o)):(t[r?"filled":"stroked"]="false",O(t,o))},G=[[],[],[]],H=function(t,e){var n,i,r,a,s,l,u=o.M,h=o.C,c=o.L,d=o.A,f=o.Q,p=[];for(a=0;a<t.length;){switch(r=t[a++],i="",n=0,r){case u:i=" m ",n=1,s=t[a++],l=t[a++],G[0][0]=s,G[0][1]=l;break;case c:i=" l ",n=1,s=t[a++],l=t[a++],G[0][0]=s,G[0][1]=l;break;case f:case h:i=" c ",n=3;var g,y,b=t[a++],S=t[a++],I=t[a++],C=t[a++];r===f?(g=I,y=C,I=(I+2*b)/3,C=(C+2*S)/3,b=(s+2*b)/3,S=(l+2*S)/3):(g=t[a++],y=t[a++]),G[0][0]=b,G[0][1]=S,G[1][0]=I,G[1][1]=C,G[2][0]=g,G[2][1]=y,s=g,l=y;break;case d:var P=0,D=0,k=1,L=1,O=0;e&&(P=e[4],D=e[5],k=v(e[0]*e[0]+e[1]*e[1]),L=v(e[2]*e[2]+e[3]*e[3]),O=Math.atan2(-e[1]/L,e[0]/k));var z=t[a++],E=t[a++],N=t[a++],R=t[a++],B=t[a++]+O,V=t[a++]+B+O;a++;var F=t[a++],H=z+x(B)*N,W=E+_(B)*R,b=z+x(V)*N,S=E+_(V)*R,Z=F?" wa ":" at ";Math.abs(H-b)<1e-4&&(Math.abs(V-B)>.01?F&&(H+=270/T):Math.abs(W-E)<1e-4?F&&H<z||!F&&H>z?S-=270/T:S+=270/T:F&&W<E||!F&&W>E?b+=270/T:b-=270/T),p.push(Z,m(((z-N)*k+P)*T-A),M,m(((E-R)*L+D)*T-A),M,m(((z+N)*k+P)*T-A),M,m(((E+R)*L+D)*T-A),M,m((H*k+P)*T-A),M,m((W*L+D)*T-A),M,m((b*k+P)*T-A),M,m((S*L+D)*T-A)),s=b,l=S;break;case o.R:var q=G[0],j=G[1];q[0]=t[a++],q[1]=t[a++],j[0]=q[0]+t[a++],j[1]=q[1]+t[a++],e&&(w(q,q,e),w(j,j,e)),q[0]=m(q[0]*T-A),j[0]=m(j[0]*T-A),q[1]=m(q[1]*T-A),j[1]=m(j[1]*T-A),p.push(" m ",q[0],M,q[1]," l ",j[0],M,q[1]," l ",j[0],M,j[1]," l ",q[0],M,j[1]);break;case o.Z:p.push(" x ")}if(n>0){p.push(i);for(var U=0;U<n;U++){var X=G[U];e&&w(X,X,e),p.push(m(X[0]*T-A),M,m(X[1]*T-A),U<n-1?M:"")}}}return p.join("")};d.prototype.brushVML=function(t){var e=this.style,n=this._vmlEl;n||(n=g.createNode("shape"),P(n),this._vmlEl=n),F(n,"fill",e,this),F(n,"stroke",e,this);var i=this.transform,r=null!=i,o=n.getElementsByTagName("stroke")[0];if(o){var a=e.lineWidth;if(r&&!e.strokeNoScale){var s=i[0]*i[3]-i[1]*i[2];a*=v(y(s))}o.weight=a+"px"}var l=this.path||(this.path=new f);this.__dirtyPath&&(l.beginPath(),this.buildPath(l,this.shape),l.toStatic(),this.__dirtyPath=!1),n.path=H(l.data,this.transform),n.style.zIndex=z(this.zlevel,this.z,this.z2),L(t,n),null!=e.text?this.drawRectText(t,this.getBoundingRect()):this.removeRectText(t)},d.prototype.onRemove=function(t){O(t,this._vmlEl),this.removeRectText(t)},d.prototype.onAdd=function(t){L(t,this._vmlEl),this.appendRectText(t)};var W=function(t){return"object"==typeof t&&t.tagName&&"IMG"===t.tagName.toUpperCase()};h.prototype.brushVML=function(t){var e,n,i=this.style,r=i.image;if(W(r)){var o=r.src;if(o===this._imageSrc)e=this._imageWidth,n=this._imageHeight;else{var a=r.runtimeStyle,s=a.width,l=a.height;a.width="auto",a.height="auto",e=r.width,n=r.height,a.width=s,a.height=l,this._imageSrc=o,this._imageWidth=e,this._imageHeight=n}r=o}else r===this._imageSrc&&(e=this._imageWidth,n=this._imageHeight);if(r){var u=i.x||0,h=i.y||0,c=i.width,d=i.height,f=i.sWidth,p=i.sHeight,y=i.sx||0,x=i.sy||0,_=f&&p,T=this._vmlEl;T||(T=g.doc.createElement("div"),P(T),this._vmlEl=T);var A,I=T.style,C=!1,D=1,k=1;if(this.transform&&(A=this.transform,D=v(A[0]*A[0]+A[1]*A[1]),k=v(A[2]*A[2]+A[3]*A[3]),C=A[1]||A[2]),C){var O=[u,h],E=[u+c,h],N=[u,h+d],R=[u+c,h+d];w(O,O,A),w(E,E,A),w(N,N,A),w(R,R,A);var B=b(O[0],E[0],N[0],R[0]),V=b(O[1],E[1],N[1],R[1]),F=[];F.push("M11=",A[0]/D,M,"M12=",A[2]/k,M,"M21=",A[1]/D,M,"M22=",A[3]/k,M,"Dx=",m(u*D+A[4]),M,"Dy=",m(h*k+A[5])),I.padding="0 "+m(B)+"px "+m(V)+"px 0",I.filter=S+".Matrix("+F.join("")+", SizingMethod=clip)"}else A&&(u=u*D+A[4],h=h*k+A[5]),I.filter="",I.left=m(u)+"px",I.top=m(h)+"px";var G=this._imageEl,H=this._cropEl;G||(G=g.doc.createElement("div"),this._imageEl=G);var Z=G.style;if(_){if(e&&n)Z.width=m(D*e*c/f)+"px",Z.height=m(k*n*d/p)+"px";else{var q=new Image,j=this;q.onload=function(){q.onload=null,e=q.width,n=q.height,Z.width=m(D*e*c/f)+"px",Z.height=m(k*n*d/p)+"px",j._imageWidth=e,j._imageHeight=n,j._imageSrc=r},q.src=r}H||(H=g.doc.createElement("div"),H.style.overflow="hidden",this._cropEl=H);var U=H.style;U.width=m((c+y*c/f)*D),U.height=m((d+x*d/p)*k),U.filter=S+".Matrix(Dx="+-y*c/f*D+",Dy="+-x*d/p*k+")",H.parentNode||T.appendChild(H),G.parentNode!=H&&H.appendChild(G)}else Z.width=m(D*c)+"px",Z.height=m(k*d)+"px",T.appendChild(G),H&&H.parentNode&&(T.removeChild(H),this._cropEl=null);var X="",Y=i.opacity;Y<1&&(X+=".Alpha(opacity="+m(100*Y)+") "),X+=S+".AlphaImageLoader(src="+r+", SizingMethod=scale)",Z.filter=X,T.style.zIndex=z(this.zlevel,this.z,this.z2),L(t,T),null!=i.text&&this.drawRectText(t,this.getBoundingRect())}},h.prototype.onRemove=function(t){O(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t)},h.prototype.onAdd=function(t){L(t,this._vmlEl),this.appendRectText(t)};var Z,q="normal",j={},U=0,X=100,Y=document.createElement("div"),$=function(t){var e=j[t];if(!e){U>X&&(U=0,j={});var n,i=Y.style;try{i.font=t,n=i.fontFamily.split(",")[0]}catch(r){}e={style:i.fontStyle||q,variant:i.fontVariant||q,weight:i.fontWeight||q,size:0|parseFloat(i.fontSize||12),family:n||"Microsoft YaHei"},j[t]=e,U++}return e};s.measureText=function(t,e){var n=g.doc;Z||(Z=n.createElement("div"),Z.style.cssText="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;",g.doc.body.appendChild(Z));try{Z.style.font=e}catch(i){}return Z.innerHTML="",Z.appendChild(n.createTextNode(t)),{width:Z.offsetWidth}};for(var K=new r,Q=function(t,e,n,i){var r=this.style,o=r.text;if(null!=o&&(o+=""),o){var a,l,u=r.textAlign,h=$(r.textFont),c=h.style+" "+h.variant+" "+h.weight+" "+h.size+'px "'+h.family+'"',d=r.textBaseline,f=r.textVerticalAlign;n=n||s.getBoundingRect(o,c,u,d);var p=this.transform;if(p&&!i&&(K.copy(e),K.applyTransform(p),e=K),i)a=e.x,l=e.y;else{var v=r.textPosition,y=r.textDistance;if(v instanceof Array)a=e.x+E(v[0],e.width),l=e.y+E(v[1],e.height),u=u||"left",d=d||"top";else{var x=s.adjustTextPositionOnRect(v,e,n,y);a=x.x,l=x.y,u=u||x.textAlign,d=d||x.textBaseline}}if(f){switch(f){case"middle":l-=n.height/2;break;case"bottom":l-=n.height}d="top"}var _=h.size;switch(d){case"hanging":case"top":l+=_/1.75;break;case"middle":break;default:l-=_/2.25}switch(u){case"left":break;case"center":a-=n.width/2;break;case"right":a-=n.width}var b,S,T,A=g.createNode,I=this._textVmlEl;I?(T=I.firstChild,b=T.nextSibling,S=b.nextSibling):(I=A("line"),b=A("path"),S=A("textpath"),T=A("skew"),S.style["v-text-align"]="left",P(I),b.textpathok=!0,S.on=!0,I.from="0 0",I.to="1000 0.05",L(I,T),L(I,b),L(I,S),this._textVmlEl=I);var C=[a,l],k=I.style;p&&i?(w(C,C,p),T.on=!0,T.matrix=p[0].toFixed(3)+M+p[2].toFixed(3)+M+p[1].toFixed(3)+M+p[3].toFixed(3)+",0,0",T.offset=(m(C[0])||0)+","+(m(C[1])||0),T.origin="0 0",k.left="0px",k.top="0px"):(T.on=!1,k.left=m(a)+"px",k.top=m(l)+"px"),S.string=D(o);try{S.style.font=c}catch(O){}F(I,"fill",{fill:i?r.fill:r.textFill,opacity:r.opacity},this),F(I,"stroke",{stroke:i?r.stroke:r.textStroke,opacity:r.opacity,lineDash:r.lineDash},this),I.style.zIndex=z(this.zlevel,this.z,this.z2),L(t,I)}},J=function(t){O(t,this._textVmlEl),this._textVmlEl=null},tt=function(t){L(t,this._textVmlEl)},et=[l,u,h,d,c],nt=0;nt<et.length;nt++){var it=et[nt].prototype;it.drawRectText=Q,it.removeRectText=J,it.appendRectText=tt}c.prototype.brushVML=function(t){var e=this.style;null!=e.text?this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this.getBoundingRect(),!0):this.removeRectText(t)},c.prototype.onRemove=function(t){this.removeRectText(t)},c.prototype.onAdd=function(t){this.appendRectText(t)}}},function(t,e,n){n(239),n(88).registerPainter("vml",n(238))}])});

/***/ })
/******/ ]);