/*!
 * @author electricessence / https://github.com/electricessence/
 * Named groups based on: http://trentrichardson.com/2011/08/02/javascript-regexp-match-named-captures/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)};define(["require","exports"],function(e,t){"use strict";var r,n="",o="undefined";!function(e){e.IGNORE_CASE="i",e.GLOBAL="g",e.MULTI_LINE="m",e.UNICODE="u",e.STICKY="y"}(r=t.RegexOptions||(t.RegexOptions={}));var i=function(){function e(e,t){if(!e)throw new Error("'pattern' cannot be null or empty.");var o,i=t&&t.join(n)||n;if(e instanceof RegExp){var u=e;u.ignoreCase&&-1===i.indexOf(r.IGNORE_CASE)&&(i+=r.IGNORE_CASE),u.multiline&&-1===i.indexOf(r.MULTI_LINE)&&(i+=r.MULTI_LINE),o=u.source}else o=e;i=i.replace(r.GLOBAL,n);var s=[],c=o.match(/(?!\(\?<)(\w+)(?=>)/g);if(c){for(var a=0,f=c.length;f>a;a++)s[a+1]=c[a];o=o.replace(/\?<\w+>/g,n),this._keys=s}this._re=new RegExp(o,i),Object.freeze(this)}return e.prototype.match=function(e,t){void 0===t&&(t=0);var r,i=this;if(!e||t>=e.length||!(r=this._re.exec(e.substring(t))))return a.Empty;t>0||(t=0);for(var u=t+r.index,c=u,f=[],p={},h=0,l=r.length;l>h;++h){var g=typeof r[h]!==o&&r[h].constructor===String?r[h]:n,v=new s(g,c);v.freeze(),h&&i._keys&&h<i._keys.length&&(p[i._keys[h]]=v),f.push(v),0!==h&&(c+=g.length)}var d=new a(r[0],u,f,p);return d.freeze(),d},e.prototype.matches=function(e){for(var t,r=[],n=0,o=e&&e.length||0;o>n&&(t=this.match(e,n))&&t.success;)r.push(t),n=t.index+t.length;return Object.freeze(r)},e.prototype.replace=function(e,t,r){if(void 0===r&&(r=1/0),!(e&&null!==t&&void 0!==t&&r>0))return e;for(var o,i=[],u=0,s=e.length,c="function"==typeof t,a=0;r>a&&s>u&&(o=this.match(e,u))&&o.success;){var f=o.index,p=o.length;u!==f&&i.push(e.substring(u,f)),i.push(c?t(o,a++):t),u=f+p}return s>u&&i.push(e.substring(u)),i.join(n)},e.prototype.isMatch=function(e){return this._re.test(e)},e.isMatch=function(t,r,n){var o=new e(r,n);return o.isMatch(t)},e.replace=function(t,r,n,o){var i=new e(r,o);return i.replace(t,n)},e}();t.Regex=i;var u=function(){function e(e,t){void 0===e&&(e=n),void 0===t&&(t=-1),this.value=e,this.index=t}return Object.defineProperty(e.prototype,"length",{get:function(){var e=this.value;return e&&e.length||0},enumerable:!0,configurable:!0}),e.prototype.freeze=function(){Object.freeze(this)},e}();t.Capture=u;var s=function(e){function t(t,r){void 0===t&&(t=n),void 0===r&&(r=-1),e.call(this,t,r)}return __extends(t,e),Object.defineProperty(t.prototype,"success",{get:function(){return-1!=this.index},enumerable:!0,configurable:!0}),Object.defineProperty(t,"Empty",{get:function(){return c},enumerable:!0,configurable:!0}),t}(u);t.Group=s;var c=new s,a=function(e){function t(t,r,o,i){void 0===t&&(t=n),void 0===r&&(r=-1),void 0===o&&(o=[]),void 0===i&&(i={}),e.call(this,t,r),this.groups=o,this.namedGroups=i}return __extends(t,e),t.prototype.freeze=function(){if(!this.groups)throw new Error("'groups' cannot be null.");if(!this.namedGroups)throw new Error("'groupMap' cannot be null.");Object.freeze(this.groups.slice()),Object.freeze(this.namedGroups),e.prototype.freeze.call(this)},Object.defineProperty(t,"Empty",{get:function(){return f},enumerable:!0,configurable:!0}),t}(s);t.Match=a;var f=new a;Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i});
//# sourceMappingURL=RegularExpressions.js.map