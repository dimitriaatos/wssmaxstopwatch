/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fullscreen.js/dist/fullscreen.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/fullscreen.js/dist/fullscreen.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * fullscreen.js
 * version: 0.2.2
 * author: 橙子 <ttghost@126.com>
 * simple browser full screen library, compatible with common mainstream browsers
 */
!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){var t={FSE:["fullscreenEnabled","mozFullScreenEnabled","webkitFullscreenEnabled","msFullscreenEnabled"],FSC:["fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange"],RFS:["requestFullscreen","mozRequestFullScreen","webkitRequestFullScreen","msRequestFullscreen"],EFS:["exitFullscreen","mozCancelFullScreen","webkitCancelFullScreen","msExitFullscreen"]},r={STATICS:JSON.parse(JSON.stringify(t)),is:function(){return["fullscreen","webkitIsFullScreen","mozFullScreen"].some(function(e){return document[e]})},enabled:function(){for(var e=t.FSE,n=!1,r=0;r<e.length;r++)if(e[r]in document){n=!0;break}return n},listen:function(e){for(var n=t.FSC,r=0;r<n.length;r++){var u=n[r];if("on"+u in document){document.addEventListener(u,e,!1);break}}},request:function(){for(var e=document.documentElement,n=t.RFS,r=0;r<n.length;r++){var u=n[r];if(u in e){e[u]();break}}},exit:function(){for(var e=t.EFS,n=0;n<e.length;n++){var r=e[n];if(r in document){document[r]();break}}}};e.exports=r}])});

/***/ }),

/***/ "./node_modules/hide-mouse/dist/hide-mouse.min.js":
/*!********************************************************!*\
  !*** ./node_modules/hide-mouse/dist/hide-mouse.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=115)}([function(t,e,r){"use strict";var n=r(4),i=r(113),o=r(35),s=r(110),u=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,o=i.toSubscriber(t,e,r);if(n?n.call(o,this.source):o.add(this.source||!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.syncErrorThrown=!0,t.syncErrorValue=e,t.error(e)}},t.prototype.forEach=function(t,e){var r=this;if(e||(n.root.Rx&&n.root.Rx.config&&n.root.Rx.config.Promise?e=n.root.Rx.config.Promise:n.root.Promise&&(e=n.root.Promise)),!e)throw new Error("no Promise impl found");return new e(function(e,n){var i;i=r.subscribe(function(e){if(i)try{t(e)}catch(t){n(t),i.unsubscribe()}else t(e)},n,e)})},t.prototype._subscribe=function(t){return this.source.subscribe(t)},t.prototype[o.observable]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return 0===t.length?this:s.pipeFromArray(t)(this)},t.prototype.toPromise=function(t){var e=this;if(t||(n.root.Rx&&n.root.Rx.config&&n.root.Rx.config.Promise?t=n.root.Rx.config.Promise:n.root.Promise&&(t=n.root.Promise)),!t)throw new Error("no Promise impl found");return new t(function(t,r){var n;e.subscribe(function(t){return n=t},function(t){return r(t)},function(){return t(n)})})},t.create=function(e){return new t(e)},t}();e.Observable=u},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(22),o=r(21),s=r(37),u=r(36),c=function(t){function e(e,r,n){switch(t.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=s.empty;break;case 1:if(!e){this.destination=s.empty;break}if("object"==typeof e){if(f(e)){var i=e[u.rxSubscriber]();this.syncErrorThrowable=i.syncErrorThrowable,this.destination=i,i.add(this)}else this.syncErrorThrowable=!0,this.destination=new a(this,e);break}default:this.syncErrorThrowable=!0,this.destination=new a(this,e,r,n)}}return n(e,t),e.prototype[u.rxSubscriber]=function(){return this},e.create=function(t,r,n){var i=new e(t,r,n);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this},e}(o.Subscription);e.Subscriber=c;var a=function(t){function e(e,r,n,o){var u;t.call(this),this._parentSubscriber=e;var c=this;i.isFunction(r)?u=r:r&&(u=r.next,n=r.error,o=r.complete,r!==s.empty&&(c=Object.create(r),i.isFunction(c.unsubscribe)&&this.add(c.unsubscribe.bind(c)),c.unsubscribe=this.unsubscribe.bind(this))),this._context=c,this._next=u,this._error=n,this._complete=o}return n(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber;if(this._error)e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else{if(!e.syncErrorThrowable)throw this.unsubscribe(),t;e.syncErrorValue=t,e.syncErrorThrown=!0,this.unsubscribe()}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){throw this.unsubscribe(),t}},e.prototype.__tryOrSetError=function(t,e,r){try{e.call(this._context,r)}catch(e){return t.syncErrorValue=e,t.syncErrorThrown=!0,!0}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(c);function f(t){return t instanceof c||"syncErrorThrowable"in t&&t[u.rxSubscriber]}},function(t,e,r){var n=r(28)("wks"),i=r(27),o=r(3).Symbol,s="function"==typeof o;(t.exports=function(t){return n[t]||(n[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=n},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){"use strict";(function(t){var r="undefined"!=typeof window&&window,n="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,i=r||void 0!==t&&t||n;e.root=i,function(){if(!i)throw new Error("RxJS could not find any global context (window, self, global)")}()}).call(this,r(114))},function(t,e,r){var n=r(17),i=r(29);t.exports=r(10)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){t.exports={}},function(t,e,r){"use strict";e.isScheduler=function(t){return t&&"function"==typeof t.schedule}},function(t,e,r){"use strict";var n=r(71),i=r(69);e.async=new i.AsyncScheduler(n.AsyncAction)},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){t.exports=!r(31)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(16);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var r=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=r)},function(t,e,r){"use strict";var n=r(0),i=r(54),o=r(7),s=r(51);e.merge=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var r=Number.POSITIVE_INFINITY,u=null,c=t[t.length-1];return o.isScheduler(c)?(u=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(r=t.pop())):"number"==typeof c&&(r=t.pop()),null===u&&1===t.length&&t[0]instanceof n.Observable?t[0]:s.mergeAll(r)(new i.ArrayObservable(t,u))}},function(t,e,r){var n=r(28)("keys"),i=r(27);t.exports=function(t){return n[t]||(n[t]=i(t))}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(11),i=r(93),o=r(92),s=Object.defineProperty;e.f=r(10)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(98),i=r(18);t.exports=function(t){return n(i(t))}},function(t,e,r){"use strict";e.errorObject={e:{}}},function(t,e,r){"use strict";var n=r(112),i=r(39),o=r(22),s=r(38),u=r(20),c=r(111),a=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var r=this._parent,a=this._parents,h=this._unsubscribe,l=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var p=-1,b=a?a.length:0;r;)r.remove(this),r=++p<b&&a[p]||null;if(o.isFunction(h))s.tryCatch(h).call(this)===u.errorObject&&(e=!0,t=t||(u.errorObject.e instanceof c.UnsubscriptionError?f(u.errorObject.e.errors):[u.errorObject.e]));if(n.isArray(l))for(p=-1,b=l.length;++p<b;){var d=l[p];if(i.isObject(d))if(s.tryCatch(d.unsubscribe).call(d)===u.errorObject){e=!0,t=t||[];var y=u.errorObject.e;y instanceof c.UnsubscriptionError?t=t.concat(f(y.errors)):t.push(y)}}if(e)throw new c.UnsubscriptionError(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var r=e;switch(typeof e){case"function":r=new t(e);case"object":if(r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if("function"!=typeof r._addParent){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(r),r._addParent(this),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.prototype._addParent=function(t){var e=this._parent,r=this._parents;e&&e!==t?r?-1===r.indexOf(t)&&r.push(t):this._parents=[t]:this._parent=t},t.EMPTY=((e=new t).closed=!0,e),t}();function f(t){return t.reduce(function(t,e){return t.concat(e instanceof c.UnsubscriptionError?e.errors:e)},[])}e.Subscription=a},function(t,e,r){"use strict";e.isFunction=function(t){return"function"==typeof t}},function(t,e,r){var n=r(33),i=r(2)("toStringTag"),o="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,r){"use strict";var n=r(79)(!0);r(32)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){var n=r(17).f,i=r(9),o=r(2)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){var n=r(3),i=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(16),i=r(3).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";var n=r(97),i=r(96),o=r(91),s=r(5),u=r(6),c=r(90),a=r(25),f=r(81),h=r(2)("iterator"),l=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,r,b,d,y,v){c(r,e,b);var m,x,_,w=function(t){if(!l&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},S=e+" Iterator",O="values"==d,g=!1,T=t.prototype,E=T[h]||T["@@iterator"]||d&&T[d],j=E||w(d),P=d?O?w("entries"):j:void 0,I="Array"==e&&T.entries||E;if(I&&(_=f(I.call(new t)))!==Object.prototype&&_.next&&(a(_,S,!0),n||"function"==typeof _[h]||s(_,h,p)),O&&E&&"values"!==E.name&&(g=!0,j=function(){return E.call(this)}),n&&!v||!l&&!g&&T[h]||s(T,h,j),u[e]=j,u[S]=p,d)if(m={values:O?j:w("values"),keys:y?j:w("keys"),entries:P},v)for(x in m)x in T||o(T,x,m[x]);else i(i.P+i.F*(l||g),e,m);return m}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){r(101);for(var n=r(3),i=r(5),o=r(6),s=r(2)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var a=u[c],f=n[a],h=f&&f.prototype;h&&!h[s]&&i(h,s,a),o[a]=o.Array}},function(t,e,r){"use strict";var n=r(4);function i(t){var e,r=t.Symbol;return"function"==typeof r?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}e.getSymbolObservable=i,e.observable=i(n.root),e.$$observable=e.observable},function(t,e,r){"use strict";var n=r(4).root.Symbol;e.rxSubscriber="function"==typeof n&&"function"==typeof n.for?n.for("rxSubscriber"):"@@rxSubscriber",e.$$rxSubscriber=e.rxSubscriber},function(t,e,r){"use strict";e.empty={closed:!0,next:function(t){},error:function(t){throw t},complete:function(){}}},function(t,e,r){"use strict";var n,i=r(20);function o(){try{return n.apply(this,arguments)}catch(t){return i.errorObject.e=t,i.errorObject}}e.tryCatch=function(t){return n=t,o}},function(t,e,r){"use strict";e.isObject=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(1),o=r(8);e.debounceTime=function(t,e){return void 0===e&&(e=o.async),function(r){return r.lift(new s(t,e))}};var s=function(){function t(t,e){this.dueTime=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.dueTime,this.scheduler))},t}(),u=function(t){function e(e,r,n){t.call(this,e),this.dueTime=r,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}return n(e,t),e.prototype._next=function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(c,this.dueTime,this))},e.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},e.prototype.debouncedNext=function(){this.clearDebounce(),this.hasValue&&(this.destination.next(this.lastValue),this.lastValue=null,this.hasValue=!1)},e.prototype.clearDebounce=function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)},e}(i.Subscriber);function c(t){t.debouncedNext()}},function(t,e,r){"use strict";var n=r(8),i=r(40);e.debounceTime=function(t,e){return void 0===e&&(e=n.async),i.debounceTime(t,e)(this)}},function(t,e,r){"use strict";var n=r(0),i=r(41);n.Observable.prototype.debounceTime=i.debounceTime},function(t,e,r){"use strict";e.identity=function(t){return t}},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(){t.apply(this,arguments)}return n(e,t),e.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(r(1).Subscriber);e.OuterSubscriber=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(e,r,n){t.call(this),this.parent=e,this.outerValue=r,this.outerIndex=n,this.index=0}return n(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(r(1).Subscriber);e.InnerSubscriber=i},function(t,e,r){"use strict";var n=r(4);function i(t){var e=t.Symbol;if("function"==typeof e)return e.iterator||(e.iterator=e("iterator polyfill")),e.iterator;var r=t.Set;if(r&&"function"==typeof(new r)["@@iterator"])return"@@iterator";var n=t.Map;if(n)for(var i=Object.getOwnPropertyNames(n.prototype),o=0;o<i.length;++o){var s=i[o];if("entries"!==s&&"size"!==s&&n.prototype[s]===n.prototype.entries)return s}return"@@iterator"}e.symbolIteratorPonyfill=i,e.iterator=i(n.root),e.$$iterator=e.iterator},function(t,e,r){"use strict";e.isPromise=function(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}},function(t,e,r){"use strict";e.isArrayLike=function(t){return t&&"number"==typeof t.length}},function(t,e,r){"use strict";var n=r(4),i=r(48),o=r(47),s=r(39),u=r(0),c=r(46),a=r(45),f=r(35);e.subscribeToResult=function(t,e,r,h){var l=new a.InnerSubscriber(t,r,h);if(l.closed)return null;if(e instanceof u.Observable)return e._isScalar?(l.next(e.value),l.complete(),null):(l.syncErrorThrowable=!0,e.subscribe(l));if(i.isArrayLike(e)){for(var p=0,b=e.length;p<b&&!l.closed;p++)l.next(e[p]);l.closed||l.complete()}else{if(o.isPromise(e))return e.then(function(t){l.closed||(l.next(t),l.complete())},function(t){return l.error(t)}).then(null,function(t){n.root.setTimeout(function(){throw t})}),l;if(e&&"function"==typeof e[c.iterator])for(var d=e[c.iterator]();;){var y=d.next();if(y.done){l.complete();break}if(l.next(y.value),l.closed)break}else if(e&&"function"==typeof e[f.observable]){var v=e[f.observable]();if("function"==typeof v.subscribe)return v.subscribe(new a.InnerSubscriber(t,r,h));l.error(new TypeError("Provided object does not correctly implement Symbol.observable"))}else{var m="You provided "+(s.isObject(e)?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";l.error(new TypeError(m))}}return null}},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(49),o=r(44);e.mergeMap=function(t,e,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),function(n){return"number"==typeof e&&(r=e,e=null),n.lift(new s(t,e,r))}};var s=function(){function t(t,e,r){void 0===r&&(r=Number.POSITIVE_INFINITY),this.project=t,this.resultSelector=e,this.concurrent=r}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.project,this.resultSelector,this.concurrent))},t}();e.MergeMapOperator=s;var u=function(t){function e(e,r,n,i){void 0===i&&(i=Number.POSITIVE_INFINITY),t.call(this,e),this.project=r,this.resultSelector=n,this.concurrent=i,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}return n(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,r)},e.prototype._innerSub=function(t,e,r){this.add(i.subscribeToResult(this,t,e,r))},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete()},e.prototype.notifyNext=function(t,e,r,n,i){this.resultSelector?this._notifyResultSelector(t,e,r,n):this.destination.next(e)},e.prototype._notifyResultSelector=function(t,e,r,n){var i;try{i=this.resultSelector(t,e,r,n)}catch(t){return void this.destination.error(t)}this.destination.next(i)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(o.OuterSubscriber);e.MergeMapSubscriber=u},function(t,e,r){"use strict";var n=r(50),i=r(43);e.mergeAll=function(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),n.mergeMap(i.identity,null,t)}},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(e){t.call(this),this.scheduler=e}return n(e,t),e.create=function(t){return new e(t)},e.dispatch=function(t){t.subscriber.complete()},e.prototype._subscribe=function(t){var r=this.scheduler;if(r)return r.schedule(e.dispatch,0,{subscriber:t});t.complete()},e}(r(0).Observable);e.EmptyObservable=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(e,r){t.call(this),this.value=e,this.scheduler=r,this._isScalar=!0,r&&(this._isScalar=!1)}return n(e,t),e.create=function(t,r){return new e(t,r)},e.dispatch=function(t){var e=t.done,r=t.value,n=t.subscriber;e?n.complete():(n.next(r),n.closed||(t.done=!0,this.schedule(t)))},e.prototype._subscribe=function(t){var r=this.value,n=this.scheduler;if(n)return n.schedule(e.dispatch,0,{done:!1,value:r,subscriber:t});t.next(r),t.closed||t.complete()},e}(r(0).Observable);e.ScalarObservable=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(0),o=r(53),s=r(52),u=r(7),c=function(t){function e(e,r){t.call(this),this.array=e,this.scheduler=r,r||1!==e.length||(this._isScalar=!0,this.value=e[0])}return n(e,t),e.create=function(t,r){return new e(t,r)},e.of=function(){for(var t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r];var n=t[t.length-1];u.isScheduler(n)?t.pop():n=null;var i=t.length;return i>1?new e(t,n):1===i?new o.ScalarObservable(t[0],n):new s.EmptyObservable(n)},e.dispatch=function(t){var e=t.array,r=t.index,n=t.count,i=t.subscriber;r>=n?i.complete():(i.next(e[r]),i.closed||(t.index=r+1,this.schedule(t)))},e.prototype._subscribe=function(t){var r=this.array,n=r.length,i=this.scheduler;if(i)return i.schedule(e.dispatch,0,{array:r,index:0,count:n,subscriber:t});for(var o=0;o<n&&!t.closed;o++)t.next(r[o]);t.complete()},e}(i.Observable);e.ArrayObservable=c},function(t,e,r){"use strict";var n=r(13),i=r(13);e.mergeStatic=i.merge,e.merge=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return function(e){return e.lift.call(n.merge.apply(void 0,[e].concat(t)))}}},function(t,e,r){"use strict";var n=r(55),i=r(13);e.mergeStatic=i.merge,e.merge=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return n.merge.apply(void 0,t)(this)}},function(t,e,r){"use strict";var n=r(0),i=r(56);n.Observable.prototype.merge=i.merge},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(1);e.map=function(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new o(t,e))}};var o=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.project,this.thisArg))},t}();e.MapOperator=o;var s=function(t){function e(e,r,n){t.call(this,e),this.project=r,this.count=0,this.thisArg=n||this}return n(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(i.Subscriber)},function(t,e,r){"use strict";var n=r(58);e.map=function(t,e){return n.map(t,e)(this)}},function(t,e,r){"use strict";var n=r(0),i=r(59);n.Observable.prototype.map=i.map},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(1);e.filter=function(t,e){return function(r){return r.lift(new o(t,e))}};var o=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.predicate,this.thisArg))},t}(),s=function(t){function e(e,r,n){t.call(this,e),this.predicate=r,this.thisArg=n,this.count=0}return n(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(i.Subscriber)},function(t,e,r){"use strict";var n=r(61);e.filter=function(t,e){return n.filter(t,e)(this)}},function(t,e,r){"use strict";var n=r(0),i=r(62);n.Observable.prototype.filter=i.filter},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(1);e.pairwise=function(){return function(t){return t.lift(new o)}};var o=function(){function t(){}return t.prototype.call=function(t,e){return e.subscribe(new s(t))},t}(),s=function(t){function e(e){t.call(this,e),this.hasPrev=!1}return n(e,t),e.prototype._next=function(t){this.hasPrev?this.destination.next([this.prev,t]):this.hasPrev=!0,this.prev=t},e}(i.Subscriber)},function(t,e,r){"use strict";var n=r(64);e.pairwise=function(){return n.pairwise()(this)}},function(t,e,r){"use strict";var n=r(0),i=r(65);n.Observable.prototype.pairwise=i.pairwise},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(8),o=r(1),s=r(7);e.bufferTime=function(t){var e=arguments.length,r=i.async;s.isScheduler(arguments[arguments.length-1])&&(r=arguments[arguments.length-1],e--);var n=null;e>=2&&(n=arguments[1]);var o=Number.POSITIVE_INFINITY;return e>=3&&(o=arguments[2]),function(e){return e.lift(new u(t,n,o,r))}};var u=function(){function t(t,e,r,n){this.bufferTimeSpan=t,this.bufferCreationInterval=e,this.maxBufferSize=r,this.scheduler=n}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler))},t}(),c=function(){return function(){this.buffer=[]}}(),a=function(t){function e(e,r,n,i,o){t.call(this,e),this.bufferTimeSpan=r,this.bufferCreationInterval=n,this.maxBufferSize=i,this.scheduler=o,this.contexts=[];var s=this.openContext();if(this.timespanOnly=null==n||n<0,this.timespanOnly){var u={subscriber:this,context:s,bufferTimeSpan:r};this.add(s.closeAction=o.schedule(f,r,u))}else{var c={subscriber:this,context:s},a={bufferTimeSpan:r,bufferCreationInterval:n,subscriber:this,scheduler:o};this.add(s.closeAction=o.schedule(l,r,c)),this.add(o.schedule(h,n,a))}}return n(e,t),e.prototype._next=function(t){for(var e,r=this.contexts,n=r.length,i=0;i<n;i++){var o=r[i],s=o.buffer;s.push(t),s.length==this.maxBufferSize&&(e=o)}e&&this.onBufferFull(e)},e.prototype._error=function(e){this.contexts.length=0,t.prototype._error.call(this,e)},e.prototype._complete=function(){for(var e=this.contexts,r=this.destination;e.length>0;){var n=e.shift();r.next(n.buffer)}t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){this.contexts=null},e.prototype.onBufferFull=function(t){this.closeContext(t);var e=t.closeAction;if(e.unsubscribe(),this.remove(e),!this.closed&&this.timespanOnly){t=this.openContext();var r=this.bufferTimeSpan,n={subscriber:this,context:t,bufferTimeSpan:r};this.add(t.closeAction=this.scheduler.schedule(f,r,n))}},e.prototype.openContext=function(){var t=new c;return this.contexts.push(t),t},e.prototype.closeContext=function(t){this.destination.next(t.buffer);var e=this.contexts;(e?e.indexOf(t):-1)>=0&&e.splice(e.indexOf(t),1)},e}(o.Subscriber);function f(t){var e=t.subscriber,r=t.context;r&&e.closeContext(r),e.closed||(t.context=e.openContext(),t.context.closeAction=this.schedule(t,t.bufferTimeSpan))}function h(t){var e=t.bufferCreationInterval,r=t.bufferTimeSpan,n=t.subscriber,i=t.scheduler,o=n.openContext();n.closed||(n.add(o.closeAction=i.schedule(l,r,{subscriber:n,context:o})),this.schedule(t,e))}function l(t){var e=t.subscriber,r=t.context;e.closeContext(r)}},function(t,e,r){"use strict";var n=function(){function t(e,r){void 0===r&&(r=t.now),this.SchedulerAction=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},t.now=Date.now?Date.now:function(){return+new Date},t}();e.Scheduler=n},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(){t.apply(this,arguments),this.actions=[],this.active=!1,this.scheduled=void 0}return n(e,t),e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},e}(r(68).Scheduler);e.AsyncScheduler=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(e,r){t.call(this)}return n(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(r(21).Subscription);e.Action=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(4),o=function(t){function e(e,r){t.call(this,e,r),this.scheduler=e,this.work=r,this.pending=!1}return n(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t,this.pending=!0;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},e.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),i.root.setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;i.root.clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(r(70).Action);e.AsyncAction=o},function(t,e,r){"use strict";var n=r(8),i=r(7),o=r(67);e.bufferTime=function(t){var e=arguments.length,r=n.async;i.isScheduler(arguments[arguments.length-1])&&(r=arguments[arguments.length-1],e--);var s=null;e>=2&&(s=arguments[1]);var u=Number.POSITIVE_INFINITY;return e>=3&&(u=arguments[2]),o.bufferTime(t,s,u,r)(this)}},function(t,e,r){"use strict";var n=r(0),i=r(72);n.Observable.prototype.bufferTime=i.bufferTime},function(t,e,r){var n=r(23),i=r(2)("iterator"),o=r(6);t.exports=r(12).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){var n=r(11),i=r(74);t.exports=r(12).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},function(t,e,r){r(34),r(24),t.exports=r(75)},function(t,e,r){t.exports={default:r(76),__esModule:!0}},function(t,e,r){var n=r(23),i=r(2)("iterator"),o=r(6);t.exports=r(12).isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(n(e))}},function(t,e,r){var n=r(15),i=r(18);t.exports=function(t){return function(e,r){var o,s,u=String(i(e)),c=n(r),a=u.length;return c<0||c>=a?t?"":void 0:(o=u.charCodeAt(c))<55296||o>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):o:t?u.slice(c,c+2):s-56320+(o-55296<<10)+65536}}},function(t,e,r){var n=r(18);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(9),i=r(80),o=r(14)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,r){var n=r(3).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(15),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=n(t))<0?i(t+e,0):o(t,e)}},function(t,e,r){var n=r(15),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e,r){var n=r(19),i=r(84),o=r(83);t.exports=function(t){return function(e,r,s){var u,c=n(e),a=i(c.length),f=o(s,a);if(t&&r!=r){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){var n=r(9),i=r(19),o=r(85)(!1),s=r(14)("IE_PROTO");t.exports=function(t,e){var r,u=i(t),c=0,a=[];for(r in u)r!=s&&n(u,r)&&a.push(r);for(;e.length>c;)n(u,r=e[c++])&&(~o(a,r)||a.push(r));return a}},function(t,e,r){var n=r(86),i=r(26);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e,r){var n=r(17),i=r(11),o=r(87);t.exports=r(10)?Object.defineProperties:function(t,e){i(t);for(var r,s=o(e),u=s.length,c=0;u>c;)n.f(t,r=s[c++],e[r]);return t}},function(t,e,r){var n=r(11),i=r(88),o=r(26),s=r(14)("IE_PROTO"),u=function(){},c=function(){var t,e=r(30)("iframe"),n=o.length;for(e.style.display="none",r(82).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[o[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(u.prototype=n(t),r=new u,u.prototype=null,r[s]=t):r=c(),void 0===e?r:i(r,e)}},function(t,e,r){"use strict";var n=r(89),i=r(29),o=r(25),s={};r(5)(s,r(2)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:i(1,r)}),o(t,e+" Iterator")}},function(t,e,r){t.exports=r(5)},function(t,e,r){var n=r(16);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){t.exports=!r(10)&&!r(31)(function(){return 7!=Object.defineProperty(r(30)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(94);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(3),i=r(12),o=r(95),s=r(5),u=r(9),c=function(t,e,r){var a,f,h,l=t&c.F,p=t&c.G,b=t&c.S,d=t&c.P,y=t&c.B,v=t&c.W,m=p?i:i[e]||(i[e]={}),x=m.prototype,_=p?n:b?n[e]:(n[e]||{}).prototype;for(a in p&&(r=e),r)(f=!l&&_&&void 0!==_[a])&&u(m,a)||(h=f?_[a]:r[a],m[a]=p&&"function"!=typeof _[a]?r[a]:y&&f?o(h,n):v&&_[a]==h?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):d&&"function"==typeof h?o(Function.call,h):h,d&&((m.virtual||(m.virtual={}))[a]=h,t&c.R&&x&&!x[a]&&s(x,a,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=!0},function(t,e,r){var n=r(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(){}},function(t,e,r){"use strict";var n=r(100),i=r(99),o=r(6),s=r(19);t.exports=r(32)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,e,r){r(34),r(24),t.exports=r(78)},function(t,e,r){t.exports={default:r(102),__esModule:!0}},function(t,e,r){"use strict";e.__esModule=!0;var n=o(r(103)),i=o(r(77));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,n.default)(Object(t)))return function(t,e){var r=[],n=!0,o=!1,s=void 0;try{for(var u,c=(0,i.default)(t);!(n=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw s}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createHideMouse=void 0;var n,i=r(104),o=(n=i)&&n.__esModule?n:{default:n};r(73),r(66),r(63),r(60),r(57),r(42);e.createHideMouse=function(t){var e=t.mouseMoveSource,r=t.handleMouseMove,n=t.handleMouseMoveEndTimeout;return function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).timeout,i=void 0===t?2e3:t,s=!0,u=e.bufferTime(200).pairwise().filter(function(t){var e=(0,o.default)(t,2);e[0];return 0===e[1].length}).map(function(t){var e=(0,o.default)(t,2),r=e[0];e[1];return r.slice(-1)[0]}).filter(function(t){return t}).merge(e).debounceTime(i).filter(function(){return s}).subscribe(n),c=e.subscribe(r);return{get active(){return s},activate:function(){return s=!0},deactivate:function(){return s=!1},kill:function(){u.unsubscribe(),c.unsubscribe()}}}}},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=r(0),o=r(38),s=r(22),u=r(20),c=r(21),a=Object.prototype.toString;var f=function(t){function e(e,r,n,i){t.call(this),this.sourceObj=e,this.eventName=r,this.selector=n,this.options=i}return n(e,t),e.create=function(t,r,n,i){return s.isFunction(n)&&(i=n,n=void 0),new e(t,r,i,n)},e.setupSubscription=function(t,r,n,i,o){var s;if(function(t){return!!t&&"[object NodeList]"===a.call(t)}(t)||function(t){return!!t&&"[object HTMLCollection]"===a.call(t)}(t))for(var u=0,f=t.length;u<f;u++)e.setupSubscription(t[u],r,n,i,o);else if(function(t){return!!t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(t)){var h=t;t.addEventListener(r,n,o),s=function(){return h.removeEventListener(r,n,o)}}else if(function(t){return!!t&&"function"==typeof t.on&&"function"==typeof t.off}(t)){var l=t;t.on(r,n),s=function(){return l.off(r,n)}}else{if(!function(t){return!!t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(t))throw new TypeError("Invalid event target");var p=t;t.addListener(r,n),s=function(){return p.removeListener(r,n)}}i.add(new c.Subscription(s))},e.prototype._subscribe=function(t){var r=this.sourceObj,n=this.eventName,i=this.options,s=this.selector,c=s?function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];var n=o.tryCatch(s).apply(void 0,e);n===u.errorObject?t.error(u.errorObject.e):t.next(n)}:function(e){return t.next(e)};e.setupSubscription(r,n,c,t,i)},e}(i.Observable);e.FromEventObservable=f},function(t,e,r){"use strict";var n=r(106);e.fromEvent=n.FromEventObservable.create},function(t,e,r){"use strict";var n=r(0),i=r(107);n.Observable.fromEvent=i.fromEvent},function(t,e,r){"use strict";e.noop=function(){}},function(t,e,r){"use strict";var n=r(109);function i(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:n.noop}e.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return i(t)},e.pipeFromArray=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function n(){this.constructor=t}t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(t){function e(e){t.call(this),this.errors=e;var r=Error.call(this,e?e.length+" errors occurred during unsubscription:\n  "+e.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"");this.name=r.name="UnsubscriptionError",this.stack=r.stack,this.message=r.message}return n(e,t),e}(Error);e.UnsubscriptionError=i},function(t,e,r){"use strict";e.isArray=Array.isArray||function(t){return t&&"number"==typeof t.length}},function(t,e,r){"use strict";var n=r(1),i=r(36),o=r(37);e.toSubscriber=function(t,e,r){if(t){if(t instanceof n.Subscriber)return t;if(t[i.rxSubscriber])return t[i.rxSubscriber]()}return t||e||r?new n.Subscriber(t,e,r):new n.Subscriber(o.empty)}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.el,r=void 0===e?document.body:e,o=t.hideAfter;if(!window.getComputedStyle(r).height)throw new Error("[hide-mouse] the element needs to have an explicit height css property defined");var s=n.Observable.fromEvent(r,"mousemove");return(0,i.createHideMouse)({mouseMoveSource:s,handleMouseMove:function(){return r.style.cursor="auto"},handleMouseMoveEndTimeout:function(){return r.style.cursor="none"}})({timeout:o})};var n=r(0);r(108);var i=r(105)}])});
//# sourceMappingURL=hide-mouse.min.js.map

/***/ }),

/***/ "./node_modules/nosleep.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/nosleep.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { webm, mp4 } = __webpack_require__(/*! ./media.js */ "./node_modules/nosleep.js/src/media.js")

// Detect iOS browsers < version 10
const oldIOS = typeof navigator !== 'undefined' && parseFloat(
  ('' + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
    .replace('undefined', '3_2').replace('_', '.').replace('_', '')
) < 10 && !window.MSStream

class NoSleep {
  constructor () {
    if (oldIOS) {
      this.noSleepTimer = null
    } else {
      // Set up no sleep video element
      this.noSleepVideo = document.createElement('video')

      this.noSleepVideo.setAttribute('muted', '')
      this.noSleepVideo.setAttribute('title', 'No Sleep')
      this.noSleepVideo.setAttribute('playsinline', '')

      this._addSourceToVideo(this.noSleepVideo, 'webm', webm)
      this._addSourceToVideo(this.noSleepVideo, 'mp4', mp4)

      this.noSleepVideo.addEventListener('loadedmetadata', () => {
        if (this.noSleepVideo.duration <= 1) { // webm source
          this.noSleepVideo.setAttribute('loop', '')
        } else { // mp4 source
          this.noSleepVideo.addEventListener('timeupdate', () => {
            if (this.noSleepVideo.currentTime > 0.5) {
              this.noSleepVideo.currentTime = Math.random()
            }
          })
        }
      })
    }
  }

  _addSourceToVideo (element, type, dataURI) {
    var source = document.createElement('source')
    source.src = dataURI
    source.type = `video/${type}`
    element.appendChild(source)
  }

  enable () {
    if (oldIOS) {
      this.disable()
      console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `)
      this.noSleepTimer = window.setInterval(() => {
        if (!document.hidden) {
          window.location.href = window.location.href.split('#')[0]
          window.setTimeout(window.stop, 0)
        }
      }, 15000)
    } else {
      this.noSleepVideo.play()
    }
  }

  disable () {
    if (oldIOS) {
      if (this.noSleepTimer) {
        console.warn(`
          NoSleep now disabled for older iOS devices.
        `)
        window.clearInterval(this.noSleepTimer)
        this.noSleepTimer = null
      }
    } else {
      this.noSleepVideo.pause()
    }
  }
};

module.exports = NoSleep


/***/ }),

/***/ "./node_modules/nosleep.js/src/media.js":
/*!**********************************************!*\
  !*** ./node_modules/nosleep.js/src/media.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  webm: 'data:video/webm;base64, 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',
  mp4: 'data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw'
}


/***/ }),

/***/ "./node_modules/reconnectingwebsocket/reconnecting-websocket.js":
/*!**********************************************************************!*\
  !*** ./node_modules/reconnectingwebsocket/reconnecting-websocket.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// MIT License:
//
// Copyright (c) 2010-2012, Joe Walnes
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * This behaves like a WebSocket in every way, except if it fails to connect,
 * or it gets disconnected, it will repeatedly poll until it successfully connects
 * again.
 *
 * It is API compatible, so when you have:
 *   ws = new WebSocket('ws://....');
 * you can replace with:
 *   ws = new ReconnectingWebSocket('ws://....');
 *
 * The event stream will typically look like:
 *  onconnecting
 *  onopen
 *  onmessage
 *  onmessage
 *  onclose // lost connection
 *  onconnecting
 *  onopen  // sometime later...
 *  onmessage
 *  onmessage
 *  etc...
 *
 * It is API compatible with the standard WebSocket API, apart from the following members:
 *
 * - `bufferedAmount`
 * - `extensions`
 * - `binaryType`
 *
 * Latest version: https://github.com/joewalnes/reconnecting-websocket/
 * - Joe Walnes
 *
 * Syntax
 * ======
 * var socket = new ReconnectingWebSocket(url, protocols, options);
 *
 * Parameters
 * ==========
 * url - The url you are connecting to.
 * protocols - Optional string or array of protocols.
 * options - See below
 *
 * Options
 * =======
 * Options can either be passed upon instantiation or set after instantiation:
 *
 * var socket = new ReconnectingWebSocket(url, null, { debug: true, reconnectInterval: 4000 });
 *
 * or
 *
 * var socket = new ReconnectingWebSocket(url);
 * socket.debug = true;
 * socket.reconnectInterval = 4000;
 *
 * debug
 * - Whether this instance should log debug messages. Accepts true or false. Default: false.
 *
 * automaticOpen
 * - Whether or not the websocket should attempt to connect immediately upon instantiation. The socket can be manually opened or closed at any time using ws.open() and ws.close().
 *
 * reconnectInterval
 * - The number of milliseconds to delay before attempting to reconnect. Accepts integer. Default: 1000.
 *
 * maxReconnectInterval
 * - The maximum number of milliseconds to delay a reconnection attempt. Accepts integer. Default: 30000.
 *
 * reconnectDecay
 * - The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. Accepts integer or float. Default: 1.5.
 *
 * timeoutInterval
 * - The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. Accepts integer. Default: 2000.
 *
 */
(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function () {

    if (!('WebSocket' in window)) {
        return;
    }

    function ReconnectingWebSocket(url, protocols, options) {

        // Default settings
        var settings = {

            /** Whether this instance should log debug messages. */
            debug: false,

            /** Whether or not the websocket should attempt to connect immediately upon instantiation. */
            automaticOpen: true,

            /** The number of milliseconds to delay before attempting to reconnect. */
            reconnectInterval: 1000,
            /** The maximum number of milliseconds to delay a reconnection attempt. */
            maxReconnectInterval: 30000,
            /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
            reconnectDecay: 1.5,

            /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
            timeoutInterval: 2000,

            /** The maximum number of reconnection attempts to make. Unlimited if null. */
            maxReconnectAttempts: null
        }
        if (!options) { options = {}; }

        // Overwrite and define settings with options if they exist.
        for (var key in settings) {
            if (typeof options[key] !== 'undefined') {
                this[key] = options[key];
            } else {
                this[key] = settings[key];
            }
        }

        // These should be treated as read-only properties

        /** The URL as resolved by the constructor. This is always an absolute URL. Read only. */
        this.url = url;

        /** The number of attempted reconnects since starting, or the last successful connection. Read only. */
        this.reconnectAttempts = 0;

        /**
         * The current state of the connection.
         * Can be one of: WebSocket.CONNECTING, WebSocket.OPEN, WebSocket.CLOSING, WebSocket.CLOSED
         * Read only.
         */
        this.readyState = WebSocket.CONNECTING;

        /**
         * A string indicating the name of the sub-protocol the server selected; this will be one of
         * the strings specified in the protocols parameter when creating the WebSocket object.
         * Read only.
         */
        this.protocol = null;

        // Private state variables

        var self = this;
        var ws;
        var forcedClose = false;
        var timedOut = false;
        var eventTarget = document.createElement('div');

        // Wire up "on*" properties as event handlers

        eventTarget.addEventListener('open',       function(event) { self.onopen(event); });
        eventTarget.addEventListener('close',      function(event) { self.onclose(event); });
        eventTarget.addEventListener('connecting', function(event) { self.onconnecting(event); });
        eventTarget.addEventListener('message',    function(event) { self.onmessage(event); });
        eventTarget.addEventListener('error',      function(event) { self.onerror(event); });

        // Expose the API required by EventTarget

        this.addEventListener = eventTarget.addEventListener.bind(eventTarget);
        this.removeEventListener = eventTarget.removeEventListener.bind(eventTarget);
        this.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget);

        /**
         * This function generates an event that is compatible with standard
         * compliant browsers and IE9 - IE11
         *
         * This will prevent the error:
         * Object doesn't support this action
         *
         * http://stackoverflow.com/questions/19345392/why-arent-my-parameters-getting-passed-through-to-a-dispatched-event/19345563#19345563
         * @param s String The name that the event should use
         * @param args Object an optional object that the event will use
         */
        function generateEvent(s, args) {
        	var evt = document.createEvent("CustomEvent");
        	evt.initCustomEvent(s, false, false, args);
        	return evt;
        };

        this.open = function (reconnectAttempt) {
            ws = new WebSocket(self.url, protocols || []);

            if (reconnectAttempt) {
                if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) {
                    return;
                }
            } else {
                eventTarget.dispatchEvent(generateEvent('connecting'));
                this.reconnectAttempts = 0;
            }

            if (self.debug || ReconnectingWebSocket.debugAll) {
                console.debug('ReconnectingWebSocket', 'attempt-connect', self.url);
            }

            var localWs = ws;
            var timeout = setTimeout(function() {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'connection-timeout', self.url);
                }
                timedOut = true;
                localWs.close();
                timedOut = false;
            }, self.timeoutInterval);

            ws.onopen = function(event) {
                clearTimeout(timeout);
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onopen', self.url);
                }
                self.protocol = ws.protocol;
                self.readyState = WebSocket.OPEN;
                self.reconnectAttempts = 0;
                var e = generateEvent('open');
                e.isReconnect = reconnectAttempt;
                reconnectAttempt = false;
                eventTarget.dispatchEvent(e);
            };

            ws.onclose = function(event) {
                clearTimeout(timeout);
                ws = null;
                if (forcedClose) {
                    self.readyState = WebSocket.CLOSED;
                    eventTarget.dispatchEvent(generateEvent('close'));
                } else {
                    self.readyState = WebSocket.CONNECTING;
                    var e = generateEvent('connecting');
                    e.code = event.code;
                    e.reason = event.reason;
                    e.wasClean = event.wasClean;
                    eventTarget.dispatchEvent(e);
                    if (!reconnectAttempt && !timedOut) {
                        if (self.debug || ReconnectingWebSocket.debugAll) {
                            console.debug('ReconnectingWebSocket', 'onclose', self.url);
                        }
                        eventTarget.dispatchEvent(generateEvent('close'));
                    }

                    var timeout = self.reconnectInterval * Math.pow(self.reconnectDecay, self.reconnectAttempts);
                    setTimeout(function() {
                        self.reconnectAttempts++;
                        self.open(true);
                    }, timeout > self.maxReconnectInterval ? self.maxReconnectInterval : timeout);
                }
            };
            ws.onmessage = function(event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onmessage', self.url, event.data);
                }
                var e = generateEvent('message');
                e.data = event.data;
                eventTarget.dispatchEvent(e);
            };
            ws.onerror = function(event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onerror', self.url, event);
                }
                eventTarget.dispatchEvent(generateEvent('error'));
            };
        }

        // Whether or not to create a websocket upon instantiation
        if (this.automaticOpen == true) {
            this.open(false);
        }

        /**
         * Transmits data to the server over the WebSocket connection.
         *
         * @param data a text string, ArrayBuffer or Blob to send to the server.
         */
        this.send = function(data) {
            if (ws) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'send', self.url, data);
                }
                return ws.send(data);
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        };

        /**
         * Closes the WebSocket connection or connection attempt, if any.
         * If the connection is already CLOSED, this method does nothing.
         */
        this.close = function(code, reason) {
            // Default CLOSE_NORMAL code
            if (typeof code == 'undefined') {
                code = 1000;
            }
            forcedClose = true;
            if (ws) {
                ws.close(code, reason);
            }
        };

        /**
         * Additional public API method to refresh the connection if still open (close, re-open).
         * For example, if the app suspects bad data / missed heart beats, it can try to refresh.
         */
        this.refresh = function() {
            if (ws) {
                ws.close();
            }
        };
    }

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data.
     */
    ReconnectingWebSocket.prototype.onopen = function(event) {};
    /** An event listener to be called when the WebSocket connection's readyState changes to CLOSED. */
    ReconnectingWebSocket.prototype.onclose = function(event) {};
    /** An event listener to be called when a connection begins being attempted. */
    ReconnectingWebSocket.prototype.onconnecting = function(event) {};
    /** An event listener to be called when a message is received from the server. */
    ReconnectingWebSocket.prototype.onmessage = function(event) {};
    /** An event listener to be called when an error occurs. */
    ReconnectingWebSocket.prototype.onerror = function(event) {};

    /**
     * Whether all instances of ReconnectingWebSocket should log debug messages.
     * Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.
     */
    ReconnectingWebSocket.debugAll = false;

    ReconnectingWebSocket.CONNECTING = WebSocket.CONNECTING;
    ReconnectingWebSocket.OPEN = WebSocket.OPEN;
    ReconnectingWebSocket.CLOSING = WebSocket.CLOSING;
    ReconnectingWebSocket.CLOSED = WebSocket.CLOSED;

    return ReconnectingWebSocket;
});


/***/ }),

/***/ "./node_modules/syncwatch/src/formatTime.js":
/*!**************************************************!*\
  !*** ./node_modules/syncwatch/src/formatTime.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const floorPrecision = (x, precision) => x - (x < 0 ? precision : 0 + (x % precision))

const calcs = Object.entries({
	h: [1000 * 60 * 60, 24],
	m: [1000 * 60, 60],
	s: [1000, 60],
	d: [100, 10],
	c: [10, 10],
}).reduce((accum, [name, [divider, modulo]]) => {
	accum[name] = {divider, modulo}
	return accum
}, {})

const smallest = (time, format) => {
	const small = Object.keys(calcs).reduce((accum, key) => {
		const index = format.search(new RegExp(key))
		return index >= 0 ? format[index] : accum
	}, format)
	const div = calcs[small]
	return floorPrecision(time, div.divider)
}

const formatDigits = (pTime, pFormat) => {
	const numDigits = pFormat.length
	const {divider, modulo} = calcs[pFormat.charAt(0)]
	return ('0000' + Math.floor((pTime / divider) % modulo)).slice(-numDigits)
}

const formatTime = (time, format) => (
	(time < 0 ? '-' : '') + Object.keys(calcs).reduce((accum, key) => (
		accum.replace(
			new RegExp(`${key}+`, 'g'),
			(...args) => {
				return formatDigits(Math.abs(smallest(time, format)), args[0])
			}
		)
	), format)
  
)

module.exports = formatTime


/***/ }),

/***/ "./node_modules/syncwatch/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/syncwatch/src/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const formatTime = __webpack_require__(/*! ./formatTime */ "./node_modules/syncwatch/src/formatTime.js")

/**
 * A stopwatch class.
 * 
 * @example import Syncwatch from 'syncwatch'
 * const watch = new Syncwatch(watch => console.log(watch.formatted), {format: 'hh/mm/ss'})
 * watch.start()
 */

const Syncwatch = class {
  
	/**
   * @param {func} cb - A callback function to be triggered repetitively when the time changes.
   * @param {object} options - Initialize any property.
   */
	constructor(cb, options = {}) {

		/* This property holds the playing state (on/off) of the stopwatch */
		this._playing = false

		/** The starting time of the syncwatch (default: 0). */
		this.start = 0

		/** The stopping time, where the time is calculated from when the syncwatch is paused (default: 0). */
		this.stop = 0

		/** The format to use to generate the formatted time (default: hh:mm:ss.d0). */
		this.format = 'hh:mm:ss.d0'

		/** The maximum time (default: 359999999), when the syncwatch exceeds it will go back to 0. */
		this.max = 100 * 60 * 60 * 1000 - 1

		/** The time interval between the invoking of the callback function */
		this.updateTime = 50

		/* The callback function to be called when the time changes */
		this._callback = () => {}

		/* This property will hold the ID value returned by the setInterval() that will trigger the time changes */
		this._steps

		/* A time offset */
		this.offset = 0

		// Overwriting default values with the options given to the constructor.
		this.callback(cb)
		Object.assign(this, options)
		
	}
  
	/** The current time in ms. */
	get ms() {
		return (this.playing ? Date.now() + this.offset : this.stop) - this.start
	}
  
	/** The current time in the specified form. */
	get formatted() {return formatTime(this.ms, this.format)}

	/**
   * Update the state of the syncwatch.
   * @param {object} newState - A new state.
   */
	update(newState) {
		const {playing, ...rest} = newState
		Object.assign(this, rest)
		this._playing != playing ?
			this.playing = playing :
			this._callback(this)
	}

	/**
   * Passing a callback function.
   * @param {function} cb - A callback function to be triggered repetitively when the time changes.
   */
	callback(cb) {
		this._callback = (t) => {
			cb && cb(t)
		}
	}

	/**
   * Getting the state of the syncwatch.
   * @return {object} state.
   */
	output() {
		return (({playing, start, stop, format, updateTime, max}) => ({playing, start, stop, format, updateTime, max}))(this)
	}

	/**
   * A property setter/getter for the syncwatch's playing state, this is useful for toggling syncwatch without triggering a function, when getting an external state.
   */
	get playing() {
		return this._playing
	}
  
	set playing(state) {
		if (this._playing != state) {
			this._playing = state != 0
			if (this._playing) {
				clearInterval(this._steps)
				this._steps = setInterval(() => {
					this._callback(this)
				}, this.updateTime)
			} else  {
				clearInterval(this._steps)
			}
			this._callback(this)
			return this._playing
		}
	}

	/**
   * An on/off toggle for the syncwatch.
   * @param {bool} playing state
   */
	toggle(state) {
		const now = Date.now()
		if (state) {
			this.start = now - (this.stop - this.start)
			this.stop = undefined
		} else {
			this.stop = now
		}
		this.playing = state != 0
		return this.output()
	}

	/**
   * Resetting the time of the syncwatch.
   * @param {number} ms - New time.
   */
	reset(ms) {
		if (ms != undefined) {
			ms = Math.round(Math.min(Math.max(ms, -this.max), this.max))
			this.stop = Date.now()
			this.start = this.stop - ms
		} else {
			this.start = this.stop = Date.now()
		}
		this._callback(this)
		return this.output()
	}

	/**
   * Launching the syncwatch.
   * @return {object} state.
   */
	play() {
		return this.toggle(true)
	}

	/**
   * Pausing the syncwatch.
   * @return {object} state.
   */
	pause() {
		return this.toggle(false)
	}

	/**
   * Stopping the syncwatch (goes back to 0).
   * @return {object} state.
   */
	stop() {
		this.toggle(false)
		return this.reset()
	}
  
}

module.exports = Syncwatch

/***/ }),

/***/ "./node_modules/timesync/dist/timesync.js":
/*!************************************************!*\
  !*** ./node_modules/timesync/dist/timesync.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// rawAsap provides everything we need except exception management.
var rawAsap = require("./raw");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};

},{"./raw":2}],2:[function(require,module,exports){
"use strict";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

},{}],3:[function(require,module,exports){
'use strict';

module.exports = require('./lib')

},{"./lib":8}],4:[function(require,module,exports){
'use strict';

var asap = require('asap/raw');

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

},{"asap/raw":2}],5:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};

},{"./core.js":4}],6:[function(require,module,exports){
'use strict';

//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = require('./core.js');

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

},{"./core.js":4}],7:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype['finally'] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};

},{"./core.js":4}],8:[function(require,module,exports){
'use strict';

module.exports = require('./core.js');
require('./done.js');
require('./finally.js');
require('./es6-extensions.js');
require('./node-extensions.js');
require('./synchronous.js');

},{"./core.js":4,"./done.js":5,"./es6-extensions.js":6,"./finally.js":7,"./node-extensions.js":9,"./synchronous.js":10}],9:[function(require,module,exports){
'use strict';

// This file contains then/promise specific extensions that are only useful
// for node.js interop

var Promise = require('./core.js');
var asap = require('asap');

module.exports = Promise;

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  if (
    typeof argumentCount === 'number' && argumentCount !== Infinity
  ) {
    return denodeifyWithCount(fn, argumentCount);
  } else {
    return denodeifyWithoutCount(fn);
  }
};

var callbackFn = (
  'function (err, res) {' +
  'if (err) { rj(err); } else { rs(res); }' +
  '}'
);
function denodeifyWithCount(fn, argumentCount) {
  var args = [];
  for (var i = 0; i < argumentCount; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'return new Promise(function (rs, rj) {',
    'var res = fn.call(',
    ['self'].concat(args).concat([callbackFn]).join(','),
    ');',
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');
  return Function(['Promise', 'fn'], body)(Promise, fn);
}
function denodeifyWithoutCount(fn) {
  var fnLength = Math.max(fn.length - 1, 3);
  var args = [];
  for (var i = 0; i < fnLength; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'var args;',
    'var argLength = arguments.length;',
    'if (arguments.length > ' + fnLength + ') {',
    'args = new Array(arguments.length + 1);',
    'for (var i = 0; i < arguments.length; i++) {',
    'args[i] = arguments[i];',
    '}',
    '}',
    'return new Promise(function (rs, rj) {',
    'var cb = ' + callbackFn + ';',
    'var res;',
    'switch (argLength) {',
    args.concat(['extra']).map(function (_, index) {
      return (
        'case ' + (index) + ':' +
        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
        'break;'
      );
    }).join(''),
    'default:',
    'args[argLength] = cb;',
    'res = fn.apply(self, args);',
    '}',
    
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');

  return Function(
    ['Promise', 'fn'],
    body
  )(Promise, fn);
}

Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback =
      typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        })
      }
    }
  }
};

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
};

},{"./core.js":4,"asap":1}],10:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.enableSynchronous = function () {
  Promise.prototype.isPending = function() {
    return this.getState() == 0;
  };

  Promise.prototype.isFulfilled = function() {
    return this.getState() == 1;
  };

  Promise.prototype.isRejected = function() {
    return this.getState() == 2;
  };

  Promise.prototype.getValue = function () {
    if (this._83 === 3) {
      return this._18.getValue();
    }

    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._18;
  };

  Promise.prototype.getReason = function () {
    if (this._83 === 3) {
      return this._18.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._18;
  };

  Promise.prototype.getState = function () {
    if (this._83 === 3) {
      return this._18.getState();
    }
    if (this._83 === -1 || this._83 === -2) {
      return 0;
    }

    return this._83;
  };
};

Promise.disableSynchronous = function() {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};

},{"./core.js":4}],11:[function(require,module,exports){
'use strict';

module.exports = typeof window === 'undefined' || typeof window.Promise === 'undefined' ? require('promise') : window.Promise;

},{"promise":3}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = emitter;
/**
 * Turn an object into an event emitter. Attaches methods `on`, `off`,
 * `emit`, and `list`
 * @param {Object} obj
 * @return {Object} Returns the original object, extended with emitter functions
 */
function emitter(obj) {
  var _callbacks = {};

  obj.emit = function (event, data) {
    var callbacks = _callbacks[event];
    callbacks && callbacks.forEach(function (callback) {
      return callback(data);
    });
  };

  obj.on = function (event, callback) {
    var callbacks = _callbacks[event] || (_callbacks[event] = []);
    callbacks.push(callback);
    return obj;
  };

  obj.off = function (event, callback) {
    if (callback) {
      var callbacks = _callbacks[event];
      var index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
      }
      if (callbacks.length === 0) {
        delete _callbacks[event];
      }
    } else {
      delete _callbacks[event];
    }
    return obj;
  };

  obj.list = function (event) {
    return _callbacks[event] || [];
  };

  return obj;
}

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;
exports.post = post;
function fetch(method, url, body, headers, callback, timeout) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        var contentType = xhr.getResponseHeader('Content-Type');
        if (contentType && contentType.indexOf('json') !== -1) {
          // return JSON object
          callback(null, JSON.parse(xhr.responseText), xhr.status);
        } else {
          // return text
          callback(null, xhr.responseText, xhr.status);
        }
      }
    };
    if (headers) {
      for (var name in headers) {
        if (headers.hasOwnProperty(name)) {
          xhr.setRequestHeader(name, headers[name]);
        }
      }
    }

    xhr.ontimeout = function (err) {
      callback(err, null, 0);
    };

    xhr.open(method, url, true);
    xhr.timeout = timeout;

    if (typeof body === 'string') {
      xhr.send(body);
    } else if (body) {
      // body is an object
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(body));
    } else {
      xhr.send();
    }
  } catch (err) {
    callback(err, null, 0);
  }
}

function post(url, body, timeout) {
  return new Promise(function (resolve, reject) {
    var callback = function callback(err, res, status) {
      if (err) {
        return reject(err);
      }

      resolve([res, status]);
    };

    fetch('POST', url, body, null, callback, timeout);
  });
}

},{}],14:[function(require,module,exports){
'use strict';

var isBrowser = typeof window !== 'undefined';

// FIXME: how to do conditional loading this with ES6 modules?
module.exports = isBrowser ? require('./request.browser') : require('./request.node');

},{"./request.browser":13,"./request.node":15}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = post;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var parseUrl = _url2.default.parse;

function post(url, body, timeout) {
  return new Promise(function (resolve, reject) {
    var data = body === 'string' ? body : JSON.stringify(body);
    var urlObj = parseUrl(url);

    // An object of options to indicate where to post to
    var options = {
      host: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.path,
      method: 'POST',
      headers: { 'Content-Length': data.length }
    };

    if (body !== 'string') {
      options.headers['Content-Type'] = 'application/json';
    }

    var proto = urlObj.protocol === 'https:' ? _https2.default : _http2.default;

    var req = proto.request(options, function (res) {
      res.setEncoding('utf8');
      var result = '';
      res.on('data', function (data) {
        result += data;
      });

      res.on('end', function () {
        var contentType = res.headers['content-type'];
        var isJSON = contentType && contentType.indexOf('json') !== -1;
        var body = isJSON ? JSON.parse(result) : result;

        resolve([body, res.statusCode]);
      });
    });

    req.on('error', reject);

    req.on('socket', function (socket) {
      socket.setTimeout(timeout, function () {
        req.abort();
      });
    });

    req.write(data);
    req.end();
  });
}

},{"http":undefined,"https":undefined,"url":undefined}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = compare;
exports.add = add;
exports.sum = sum;
exports.mean = mean;
exports.std = std;
exports.variance = variance;
exports.median = median;
// basic statistical functions

function compare(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

function add(a, b) {
  return a + b;
}

function sum(arr) {
  return arr.reduce(add);
}

function mean(arr) {
  return sum(arr) / arr.length;
}

function std(arr) {
  return Math.sqrt(variance(arr));
}

function variance(arr) {
  if (arr.length < 2) return 0;

  var _mean = mean(arr);
  return arr.map(function (x) {
    return Math.pow(x - _mean, 2);
  }).reduce(add) / (arr.length - 1);
}

function median(arr) {
  if (arr.length < 2) return arr[0];

  var sorted = arr.slice().sort(compare);
  if (sorted.length % 2 === 0) {
    // even
    return (sorted[arr.length / 2 - 1] + sorted[arr.length / 2]) / 2;
  } else {
    // odd
    return sorted[(arr.length - 1) / 2];
  }
}

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _util = require('./util.js');

var util = _interopRequireWildcard(_util);

var _stat = require('./stat.js');

var stat = _interopRequireWildcard(_stat);

var _request = require('./request/request');

var request = _interopRequireWildcard(_request);

var _emitter = require('./emitter.js');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

/**
 * timesync
 *
 * Time synchronization between peers
 *
 * https://github.com/enmasseio/timesync
 */

var Promise = require('./Promise');

/**
 * Factory function to create a timesync instance
 * @param {Object} [options]  TODO: describe options
 * @return {Object} Returns a new timesync instance
 */
function create(options) {
  var timesync = {
    // configurable options
    options: {
      interval: 60 * 60 * 1000, // interval for doing synchronizations in ms. Set to null to disable auto sync
      timeout: 10000, // timeout for requests to fail in ms
      delay: 1000, // delay between requests in ms
      repeat: 5, // number of times to do a request to one peer
      peers: [], // uri's or id's of the peers
      server: null, // uri of a single server (master/slave configuration)
      now: Date.now // function returning the system time
    },

    /** @type {number} The current offset from system time */
    offset: 0, // ms

    /** @type {number} Contains the timeout for the next synchronization */
    _timeout: null,

    /** @type {Object.<string, function>} Contains a map with requests in progress */
    _inProgress: {},

    /**
     * @type {boolean}
     * This property used to immediately apply the first ever received offset.
     * After that, it's set to false and not used anymore.
     */
    _isFirst: true,

    /**
     * Send a message to a peer
     * This method must be overridden when using timesync
     * @param {string} to
     * @param {*} data
     */
    send: function send(to, data, timeout) {
      return request.post(to, data, timeout).then(function (val) {
        var res = val[0];

        timesync.receive(to, res);
      }).catch(function (err) {
        emitError(err);
      });
    },

    /**
     * Receive method to be called when a reply comes in
     * @param {string | undefined} [from]
     * @param {*} data
     */
    receive: function receive(from, data) {
      if (data === undefined) {
        data = from;
        from = undefined;
      }

      if (data && data.id in timesync._inProgress) {
        // this is a reply
        timesync._inProgress[data.id](data.result);
      } else if (data && data.id !== undefined) {
        // this is a request from an other peer
        // reply with our current time
        timesync.send(from, {
          jsonrpc: '2.0',
          id: data.id,
          result: timesync.now()
        });
      }
    },

    _handleRPCSendError: function _handleRPCSendError(id, reject, err) {
      delete timesync._inProgress[id];
      reject(new Error('Send failure'));
    },

    /**
     * Send a JSON-RPC message and retrieve a response
     * @param {string} to
     * @param {string} method
     * @param {*} [params]
     * @returns {Promise}
     */
    rpc: function rpc(to, method, params) {
      var id = util.nextId();
      var resolve, reject;
      var deferred = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
      });

      timesync._inProgress[id] = function (data) {
        delete timesync._inProgress[id];

        resolve(data);
      };

      var sendResult = void 0;

      try {
        sendResult = timesync.send(to, {
          jsonrpc: '2.0',
          id: id,
          method: method,
          params: params
        }, timesync.options.timeout);
      } catch (err) {
        timesync._handleRPCSendError(id, reject, err);
      }

      if (sendResult && (sendResult instanceof Promise || sendResult.then && sendResult.catch)) {
        sendResult.catch(timesync._handleRPCSendError.bind(this, id, reject));
      } else {
        console.warn('Send should return a promise');
      }

      return deferred;
    },

    /**
     * Synchronize now with all configured peers
     * Docs: http://www.mine-control.com/zack/timesync/timesync.html
     */
    sync: function sync() {
      timesync.emit('sync', 'start');

      var peers = timesync.options.server ? [timesync.options.server] : timesync.options.peers;
      return Promise.all(peers.map(function (peer) {
        return timesync._syncWithPeer(peer);
      })).then(function (all) {
        var offsets = all.filter(function (offset) {
          return timesync._validOffset(offset);
        });
        if (offsets.length > 0) {
          // take the average of all peers (excluding self) as new offset
          timesync.offset = stat.mean(offsets);
          timesync.emit('change', timesync.offset);
        }
        timesync.emit('sync', 'end');
      });
    },

    /**
     * Test whether given offset is a valid number (not NaN, Infinite, or null)
     * @param {number} offset
     * @returns {boolean}
     * @private
     */
    _validOffset: function _validOffset(offset) {
      return offset !== null && !isNaN(offset) && isFinite(offset);
    },

    /**
     * Sync one peer
     * @param {string} peer
     * @return {Promise.<number | null>}  Resolves with the offset to this peer,
     *                                    or null if failed to sync with this peer.
     * @private
     */
    _syncWithPeer: function _syncWithPeer(peer) {
      // retrieve the offset of a peer, then wait 1 sec
      var all = [];

      function sync() {
        return timesync._getOffset(peer).then(function (result) {
          return all.push(result);
        });
      }

      function waitAndSync() {
        return util.wait(timesync.options.delay).then(sync);
      }

      function notDone() {
        return all.length < timesync.options.repeat;
      }

      return sync().then(function () {
        return util.whilst(notDone, waitAndSync);
      }).then(function () {
        // filter out null results
        var results = all.filter(function (result) {
          return result !== null;
        });

        // calculate the limit for outliers
        var roundtrips = results.map(function (result) {
          return result.roundtrip;
        });
        var limit = stat.median(roundtrips) + stat.std(roundtrips);

        // filter all results which have a roundtrip smaller than the mean+std
        var filtered = results.filter(function (result) {
          return result.roundtrip < limit;
        });
        var offsets = filtered.map(function (result) {
          return result.offset;
        });

        // return the new offset
        return offsets.length > 0 ? stat.mean(offsets) : null;
      });
    },

    /**
     * Retrieve the offset from one peer by doing a single call to the peer
     * @param {string} peer
     * @returns {Promise.<{roundtrip: number, offset: number} | null>}
     * @private
     */
    _getOffset: function _getOffset(peer) {
      var start = timesync.options.now(); // local system time

      return timesync.rpc(peer, 'timesync').then(function (timestamp) {
        var end = timesync.options.now(); // local system time
        var roundtrip = end - start;
        var offset = timestamp - end + roundtrip / 2; // offset from local system time

        // apply the first ever retrieved offset immediately.
        if (timesync._isFirst) {
          timesync._isFirst = false;
          timesync.offset = offset;
          timesync.emit('change', offset);
        }

        return {
          roundtrip: roundtrip,
          offset: offset
        };
      }).catch(function (err) {
        // just ignore failed requests, return null
        return null;
      });
    },

    /**
     * Get the current time
     * @returns {number} Returns a timestamp
     */
    now: function now() {
      return timesync.options.now() + timesync.offset;
    },

    /**
     * Destroy the timesync instance. Stops automatic synchronization.
     * If timesync is currently executing a synchronization, this
     * synchronization will be finished first.
     */
    destroy: function destroy() {
      clearTimeout(timesync._timeout);
    }
  };

  // apply provided options
  if (options) {
    if (options.server && options.peers) {
      throw new Error('Configure either option "peers" or "server", not both.');
    }

    for (var prop in options) {
      if (options.hasOwnProperty(prop)) {
        if (prop === 'peers' && typeof options.peers === 'string') {
          // split a comma separated string with peers into an array
          timesync.options.peers = options.peers.split(',').map(function (peer) {
            return peer.trim();
          }).filter(function (peer) {
            return peer !== '';
          });
        } else {
          timesync.options[prop] = options[prop];
        }
      }
    }
  }

  // turn into an event emitter
  (0, _emitter2.default)(timesync);

  /**
   * Emit an error message. If there are no listeners, the error is outputted
   * to the console.
   * @param {Error} err
   */
  function emitError(err) {
    if (timesync.list('error').length > 0) {
      timesync.emit('error', err);
    } else {
      console.log('Error', err);
    }
  }

  if (timesync.options.interval !== null) {
    // start an interval to automatically run a synchronization once per interval
    timesync._timeout = setInterval(timesync.sync, timesync.options.interval);

    // synchronize immediately on the next tick (allows to attach event
    // handlers before the timesync starts).
    setTimeout(function () {
      timesync.sync().catch(function (err) {
        return emitError(err);
      });
    }, 0);
  }

  return timesync;
}

},{"./Promise":11,"./emitter.js":12,"./request/request":14,"./stat.js":16,"./util.js":18}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = wait;
exports.repeat = repeat;
exports.whilst = whilst;
exports.nextId = nextId;
var Promise = require('./Promise');

/**
 * Resolve a promise after a delay
 * @param {number} delay    A delay in milliseconds
 * @returns {Promise} Resolves after given delay
 */
function wait(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

/**
 * Repeat a given asynchronous function a number of times
 * @param {function} fn   A function returning a promise
 * @param {number} times
 * @return {Promise}
 */
function repeat(fn, times) {
  return new Promise(function (resolve, reject) {
    var count = 0;
    var results = [];

    function recurse() {
      if (count < times) {
        count++;
        fn().then(function (result) {
          results.push(result);
          recurse();
        });
      } else {
        resolve(results);
      }
    }

    recurse();
  });
}

/**
 * Repeat an asynchronous callback function whilst
 * @param {function} condition   A function returning true or false
 * @param {function} callback    A callback returning a Promise
 * @returns {Promise}
 */
function whilst(condition, callback) {
  return new Promise(function (resolve, reject) {
    function recurse() {
      if (condition()) {
        callback().then(function () {
          return recurse();
        });
      } else {
        resolve();
      }
    }

    recurse();
  });
}

/**
 * Simple id generator
 * @returns {number} Returns a new id
 */
function nextId() {
  return _id++;
}
var _id = 0;

},{"./Promise":11}]},{},[17])(17)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/uievents/index.js":
/*!****************************************!*\
  !*** ./node_modules/uievents/index.js ***!
  \****************************************/
/*! exports provided: uiEventNames, uiEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiEventNames", function() { return uiEventNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiEventListener", function() { return uiEventListener; });
const uiEventNames = [
  // 'mousemove',
  'mousedown',
  'keypress',
  'DOMMouseScroll',
  'mousewheel',
  'touchmove',
  'MSPointerMove',
]

const uiEventListener = callback => {
  const onUIEvent = event => {
    uiEventNames.forEach(eventName => {
      document.removeEventListener(eventName, onUIEvent, false)
    })
    callback(event)
  }
  uiEventNames.forEach(eventName => {
    document.addEventListener(eventName, onUIEvent, false)
  })
}



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noSleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noSleep */ "./src/client/noSleep.js");
/* harmony import */ var reconnectingwebsocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reconnectingwebsocket */ "./node_modules/reconnectingwebsocket/reconnecting-websocket.js");
/* harmony import */ var reconnectingwebsocket__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reconnectingwebsocket__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fullscreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fullscreen.js */ "./node_modules/fullscreen.js/dist/fullscreen.min.js");
/* harmony import */ var fullscreen_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullscreen_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var syncwatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! syncwatch */ "./node_modules/syncwatch/src/index.js");
/* harmony import */ var syncwatch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(syncwatch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hide_mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hide-mouse */ "./node_modules/hide-mouse/dist/hide-mouse.min.js");
/* harmony import */ var hide_mouse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hide_mouse__WEBPACK_IMPORTED_MODULE_4__);





const timesync = __webpack_require__(/*! timesync/dist/timesync */ "./node_modules/timesync/dist/timesync.js")

const constants = {
	updateTime: 50,
	reconnectAttemptInterval: 2000,
	idleMouseTime: 2000,
}
 
// Hide mouse on fullscreen when idle
const fullScreenMouse = hide_mouse__WEBPACK_IMPORTED_MODULE_4___default()({ el: document.body, hideAfter: constants.idleMouseTime })
fullScreenMouse.deactivate()

// Fullscreen
;['dblclick', 'keydown'].forEach(eventName => {
	document.addEventListener(eventName, ({type, code}) => {
		const newState = !fullscreen_js__WEBPACK_IMPORTED_MODULE_2___default.a.is()
		if ((type == 'keydown') == (code == 'KeyF')) {
			fullScreenMouse[newState ? 'activate' : 'deactivate']()
			fullscreen_js__WEBPACK_IMPORTED_MODULE_2___default.a[newState ? 'request' : 'exit']()
		}
	})
})

const ts = timesync.create({
	server: '/timesync',
	delay: 2000,
	interval: 10000
})

// Stopwatch
const watch = new syncwatch__WEBPACK_IMPORTED_MODULE_3___default.a(time => {
	document.getElementById('time').innerHTML = time.formatted
}, {offset: ts.now() - Date.now()})

ts.on('change', () => {
	watch.offset = ts.now() - Date.now()
})

const noConnection = (mode = true) => {
	document.getElementById('noConnection').style.display = mode ? 'block' : 'none'
}

// WebSocket connection
const maxSocket = new reconnectingwebsocket__WEBPACK_IMPORTED_MODULE_1___default.a(`ws://${window.location.hostname}:7474`)

maxSocket.timeoutInterval = constants.reconnectAttemptInterval

maxSocket.onopen = () => {
	noConnection(false)
}

maxSocket.onmessage = (event) => {
	watch.update(JSON.parse(event.data))
}

maxSocket.onclose = () => {
	watch.toggle(false)
	watch.reset()
	noConnection(true)
}

window.onbeforeunload = () => {
	maxSocket.onclose()
	maxSocket.close()
}

/***/ }),

/***/ "./src/client/noSleep.js":
/*!*******************************!*\
  !*** ./src/client/noSleep.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nosleep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nosleep.js */ "./node_modules/nosleep.js/src/index.js");
/* harmony import */ var nosleep_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nosleep_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uievents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uievents */ "./node_modules/uievents/index.js");



const preventFromSleeping = () => {
	let wakeLock
	if ('getWakeLock' in navigator) {

		navigator.getWakeLock('screen').then((wl) => {
			wakeLock = wl.createRequest()
		})
	} else if ('requestWakeLock' in navigator) {

		wakeLock = navigator.requestWakeLock('screen')
	} else if ('WakeLock' in window) {

		const controller = new AbortController()
		const signal = controller.signal
		window.WakeLock.request('screen', {signal})
		wakeLock = controller
	} else if ('wakeLock' in navigator) {
		wakeLock = navigator.wakeLock.request('screen')
	} else {
		console.log('Wake Lock API not supported')
		const noSleep = new nosleep_js__WEBPACK_IMPORTED_MODULE_0___default.a()
		Object(uievents__WEBPACK_IMPORTED_MODULE_1__["uiEventListener"])(() => {
			noSleep.enable()
			console.log('noSleep enabled')
		})
	}

	return wakeLock
}

preventFromSleeping()

// export default noSleep

/***/ })

/******/ });
//# sourceMappingURL=index.js.map