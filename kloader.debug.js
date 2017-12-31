/*! K-Loader K-Loader v 1.0 | Used for Loading Javascript & CSS files */
/* Created By Adem Kouki */
/* 30-12-2017 */



function jq() {
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

}

function callCSS(pathurl) {
    var makecss =document.createElement("link");
    makecss.setAttribute("rel","stylesheet");
    makecss.setAttribute("type", "text/css");
    makecss.setAttribute("href", pathurl);
    document.getElementsByTagName("head")[0].appendChild(makecss);
}

function CallJS(pathurl){

    jq();//for using jquery functions
    $.ajaxSetup({
        cache: true
      });
    $.getScript(pathurl);

}



function fontloader() {
    jq();
    var args = Array.prototype.slice.call(arguments, 0);
    for (i = 0 ; i < args.length ; i++) {
        var x = args[i];
   
                 $("head").append("<link href='https://fonts.googleapis.com/css?family=" + x + "' rel='stylesheet' type='text/css'>");
                console.log("Font (" + x + ") loaded Successfully");

    };    

}



function loader() {

        var args = Array.prototype.slice.call(arguments, 0);

        for (i = 0 ; i < args.length ; i++) {


        ////////////////////////////////////////////
        ////////////////////////////////////////////
        ////////////// Import CSS : ////////////////
        ////////////////////////////////////////////
        ////////////////////////////////////////////
        
            if (args[i] == "bootstrap4" ) {
            callCSS("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css");
            console.log("Bootstrap 4.0 Loaded Successfully");
            }
            
            if (args[i] == "bootstrap3" ) {
            callCSS("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
            console.log("Bootstrap 3 Loaded Successfully");
            }
            if (args[i] == "bootstrap" ) {
            callCSS("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
            console.log("Bootstrap Loaded Successfully");
            }
            if (args[i] == "semantic" ) {
                callCSS("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css");
                console.log("Bootstrap Loaded Successfully");
            }
            if (args[i] == "koukicons" ) {
            callCSS("https://kouki.website/vendor/koukicons/koukicons.min.css");
            console.log("Koukicons Loaded Successfully");
            }
            if (args[i] == "1140" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/1140/2.0/1140.min.css"); 
            console.log("1140 Loaded Successfully");
            }
                      
            if (args[i] == "10up-sanitize.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css"); 
            console.log("10up-sanitize.css Loaded Successfully");
            }
    
            if (args[i] == "16pixels" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/16pixels/0.1.9/16pixels.min.css"); 
            console.log("16pixels Loaded Successfully");
            }
            
            
            if (args[i] == "960gs" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/960gs/0/960.min.css"); 
            console.log("960gs Loaded Successfully");
            }
            
            
            if (args[i] == "academicons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/academicons/1.8.1/css/academicons.min.css"); 
            console.log("academicons Loaded Successfully");
            }
            
            
            if (args[i] == "aegis" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/aegis/1.3.3/aegis.min.css"); 
            console.log("aegis Loaded Successfully");
            }
            
            
            if (args[i] == "allmighty-autocomplete" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/allmighty-autocomplete/1.0.140706/autocomplete.min.css"); 
            console.log("allmighty-autocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "angular-material" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.5/angular-material.min.css"); 
            console.log("angular-material Loaded Successfully");
            }
            
            
            if (args[i] == "angular-motion" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/angular-motion/0.4.4/angular-motion.min.css"); 
            console.log("angular-motion Loaded Successfully");
            }
            
            
            if (args[i] == "animate" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"); 
            console.log("animate.css Loaded Successfully");
            }
            
            
            if (args[i] == "aurora-grid" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/aurora-grid/1.0.8/aurora-grid.min.css"); 
            console.log("aurora-grid Loaded Successfully");
            }
            
            
            if (args[i] == "authy-forms.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/authy-forms.css/2.2/form.authy.min.css"); 
            console.log("authy-forms.css Loaded Successfully");
            }
            
            
            if (args[i] == "avalanche-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/avalanche-css/1.3.0/avalanche.min.css"); 
            console.log("avalanche-css Loaded Successfully");
            }
            
            
            if (args[i] == "awesome-bootstrap-checkbox" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/awesome-bootstrap-checkbox/1.0.0/awesome-bootstrap-checkbox.min.css"); 
            console.log("awesome-bootstrap-checkbox Loaded Successfully");
            }
            
            
            if (args[i] == "balloon-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css"); 
            console.log("balloon-css Loaded Successfully");
            }
            
            
            if (args[i] == "baseguide" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/baseguide/2.1.0/css/baseguide.min.css"); 
            console.log("baseguide Loaded Successfully");
            }
            
            
            if (args[i] == "basics" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/basics/1.3.3/basics.css"); 
            console.log("basics Loaded Successfully");
            }
            
            
            if (args[i] == "basscss" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/basscss/8.0.3/css/basscss.min.css"); 
            console.log("basscss Loaded Successfully");
            }
            
            
            if (args[i] == "bigfishtv-turret" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bigfishtv-turret/4.0.4/turretcss.min.css"); 
            console.log("bigfishtv-turret Loaded Successfully");
            }
            
            
            if (args[i] == "blaze" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/blaze/3.6.3/blaze.min.css"); 
            console.log("blaze Loaded Successfully");
            }
            
            
            if (args[i] == "bootflat" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bootflat/2.0.4/css/bootflat.min.css"); 
            console.log("bootflat Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-horizon" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-horizon/0.1.1/bootstrap-horizon.min.css"); 
            console.log("bootstrap-horizon Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-rtl" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.min.css"); 
            console.log("bootstrap-rtl Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-social" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css"); 
            console.log("bootstrap-social Loaded Successfully");
            }
            
            
            if (args[i] == "bootswatch" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/cerulean/bootstrap.min.css"); 
            console.log("bootswatch Loaded Successfully");
            }
            
            
            if (args[i] == "brand-colors" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/brand-colors/2.0.1/css/brand-colors.latest.min.css"); 
            console.log("brand-colors Loaded Successfully");
            }
            
            
            if (args[i] == "bttn.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bttn.css/0.2.4/bttn.min.css"); 
            console.log("bttn.css Loaded Successfully");
            }
            
            
            if (args[i] == "bulma" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css"); 
            console.log("bulma Loaded Successfully");
            }
            
            
            if (args[i] == "bulmaswatch" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.5.2/default/bulmaswatch.min.css"); 
            console.log("bulmaswatch Loaded Successfully");
            }
            
            
            if (args[i] == "Buttons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/Buttons/2.0.0/css/buttons.min.css"); 
            console.log("Buttons Loaded Successfully");
            }
            
            
            if (args[i] == "caiuss" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/caiuss/1.4.12/caiuss.min.css"); 
            console.log("caiuss Loaded Successfully");
            }
            
            
            if (args[i] == "cascade-framework" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/cascade-framework/1.5.0/css/build-full.min.css"); 
            console.log("cascade-framework Loaded Successfully");
            }
            
            
            if (args[i] == "cc-icons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/cc-icons/1.2.1/css/cc-icons.min.css"); 
            console.log("cc-icons Loaded Successfully");
            }
            
            
            if (args[i] == "checkbox.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/checkbox.min.css"); 
            console.log("checkbox.css Loaded Successfully");
            }
            
            
            if (args[i] == "chrome-bootstrap" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/chrome-bootstrap/1.5.0/chrome-bootstrap.min.css"); 
            console.log("chrome-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "clarity-ui" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/clarity-ui/0.10.20/clarity-ui.min.css"); 
            console.log("clarity-ui Loaded Successfully");
            }
            
            
            if (args[i] == "cleanslate" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/cleanslate/0.10.1/cleanslate.min.css"); 
            console.log("cleanslate Loaded Successfully");
            }
            
            
            if (args[i] == "colofilter.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/colofilter.css/1.0.0/styles/colofilter.min.css"); 
            console.log("colofilter.css Loaded Successfully");
            }
            
            
            if (args[i] == "core.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/core.css/3.0.0/css/core.min.css"); 
            console.log("core.css Loaded Successfully");
            }
            
            
            if (args[i] == "css-loader" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.0.2/css-loader.css"); 
            console.log("css-loader Loaded Successfully");
            }
            
            
            if (args[i] == "CSS-Mint" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/CSS-Mint/1.4.6/css-mint.min.css"); 
            console.log("CSS-Mint Loaded Successfully");
            }
            
            
            if (args[i] == "css-sans" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/css-sans/1.0.0/css-sans.css"); 
            console.log("css-sans Loaded Successfully");
            }
            
            
            if (args[i] == "css-social-buttons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/css-social-buttons/1.3.0/css/zocial.min.css"); 
            console.log("css-social-buttons Loaded Successfully");
            }
            
            
            if (args[i] == "css-spinning-spinners" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/css-spinning-spinners/1.1.1/load1.css"); 
            console.log("css-spinning-spinners Loaded Successfully");
            }
            
            
            if (args[i] == "cssco" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/cssco/1.0.0/cssco.min.css"); 
            console.log("cssco Loaded Successfully");
            }
            
            
            if (args[i] == "cssgram" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.12/cssgram.min.css"); 
            console.log("cssgram Loaded Successfully");
            }
            
            
            if (args[i] == "csshake" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/csshake/1.5.2/csshake.min.css"); 
            console.log("csshake Loaded Successfully");
            }
            
            
            if (args[i] == "csspin" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/csspin/1.1.4/csspin.css"); 
            console.log("csspin Loaded Successfully");
            }
            
            
            if (args[i] == "currency-flags" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/currency-flags/1.2.1/currency-flags.min.css"); 
            console.log("currency-flags Loaded Successfully");
            }
            
            
            if (args[i] == "custommarkup" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/custommarkup/1.1.12/cm.min.css"); 
            console.log("custommarkup Loaded Successfully");
            }
            
            
            if (args[i] == "cutestrap" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/cutestrap/1.3.1/css/cutestrap.min.css"); 
            console.log("cutestrap Loaded Successfully");
            }
            
            
            if (args[i] == "design-system" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/design-system/2.4.5/styles/salesforce-lightning-design-system.min.css"); 
            console.log("design-system Loaded Successfully");
            }
            
            
            if (args[i] == "devicon" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon.min.css"); 
            console.log("devicon Loaded Successfully");
            }
            
            
            if (args[i] == "devicons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/devicons/1.8.0/css/devicons.min.css"); 
            console.log("devicons Loaded Successfully");
            }
            
            
            if (args[i] == "DinaKit" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/DinaKit/1.2/css/cdn_dinakit.min.css"); 
            console.log("DinaKit Loaded Successfully");
            }
            
            
            if (args[i] == "ember-charts" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/ember-charts/1.2.0/ember-charts.min.css"); 
            console.log("ember-charts Loaded Successfully");
            }
            
            
            if (args[i] == "equalizecss" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/equalizecss/1.3.0/css/equalize.min.css"); 
            console.log("equalizecss Loaded Successfully");
            }
            
            
            if (args[i] == "flag-icon-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.9.0/css/flag-icon.min.css"); 
            console.log("flag-icon-css Loaded Successfully");
            }
            
            
            if (args[i] == "flat-ui" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/flat-ui/2.3.0/css/flat-ui.min.css"); 
            console.log("flat-ui Loaded Successfully");
            }
            
            
            if (args[i] == "flex-layout-attribute" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/flex-layout-attribute/1.0.3/css/flex-layout-attribute.min.css"); 
            console.log("flex-layout-attribute Loaded Successfully");
            }
            
            
            if (args[i] == "flexboxgrid" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"); 
            console.log("flexboxgrid Loaded Successfully");
            }
            
            
            if (args[i] == "flexiblegs-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/flexiblegs-css/5.5.3/flexiblegs-css.min.css"); 
            console.log("flexiblegs-css Loaded Successfully");
            }
            
            
            if (args[i] == "flexslider" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.4/flexslider.min.css"); 
            console.log("flexslider Loaded Successfully");
            }
            
            
            if (args[i] == "float-label-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/float-label-css/1.0.2/float-label.min.css"); 
            console.log("float-label-css Loaded Successfully");
            }
            
            
            if (args[i] == "font-awesome-animation" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.1.0/font-awesome-animation.min.css"); 
            console.log("font-awesome-animation Loaded Successfully");
            }
            
            
            if (args[i] == "font-awesome" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); 
            console.log("font-awesome Loaded Successfully");
            }
            
            
            if (args[i] == "font-linux" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/font-linux/0.9/font-linux.min.css"); 
            console.log("font-linux Loaded Successfully");
            }
            
            
            if (args[i] == "font-mfizz" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css"); 
            console.log("font-mfizz Loaded Successfully");
            }
            
            
            if (args[i] == "formjs" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/formjs/1.1.1/formjs.min.css"); 
            console.log("formjs Loaded Successfully");
            }
            
            
            if (args[i] == "foundation-emails" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/foundation-emails/2.2.1/foundation-emails.min.css"); 
            console.log("foundation-emails Loaded Successfully");
            }
            
            
            if (args[i] == "frappe-charts" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/frappe-charts/0.0.8/frappe-charts.min.css"); 
            console.log("frappe-charts Loaded Successfully");
            }
            
            
            if (args[i] == "froala-design-blocks" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/froala-design-blocks/1.0.2/css/froala_blocks.min.css"); 
            console.log("froala-design-blocks Loaded Successfully");
            }
            
            
            if (args[i] == "FrozenUI" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/FrozenUI/1.3.0/css/frozen.css"); 
            console.log("FrozenUI Loaded Successfully");
            }
            
            
            if (args[i] == "fukol-grids" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/fukol-grids/0.1.1/fukol.min.css"); 
            console.log("fukol-grids Loaded Successfully");
            }
            
            
            if (args[i] == "fullPage.js" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.min.css"); 
            console.log("fullPage.js Loaded Successfully");
            }
            
            
            if (args[i] == "furtive" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/furtive/2.3.0/furtive.min.css"); 
            console.log("furtive Loaded Successfully");
            }
            
            
            if (args[i] == "gemma" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/gemma/1.1.0/gemma.min.css"); 
            console.log("gemma Loaded Successfully");
            }
            
            
            if (args[i] == "genericons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/genericons/3.1/genericons.min.css"); 
            console.log("genericons Loaded Successfully");
            }
            
            
            if (args[i] == "github-fork-ribbon-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css"); 
            console.log("github-fork-ribbon-css Loaded Successfully");
            }
            
            
            if (args[i] == "github-markdown-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"); 
            console.log("github-markdown-css Loaded Successfully");
            }
            
            
            if (args[i] == "godlike.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/godlike.css/3.5.9/godlike.min.css"); 
            console.log("godlike.css Loaded Successfully");
            }
            
            
            if (args[i] == "grd" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/grd/1.2.3/grd.css"); 
            console.log("grd Loaded Successfully");
            }
            
            
            if (args[i] == "gridforms" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/gridforms/1.0.10/gridforms.min.css"); 
            console.log("gridforms Loaded Successfully");
            }
            
            
            if (args[i] == "gridlex" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.6.1/gridlex.min.css"); 
            console.log("gridlex Loaded Successfully");
            }
            
            
            if (args[i] == "gridly" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/gridly/1.4.12/gridly-col-widths.min.css"); 
            console.log("gridly Loaded Successfully");
            }
            
            
            if (args[i] == "gumby" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/gumby/2.6.4/css/gumby.min.css"); 
            console.log("gumby Loaded Successfully");
            }
            
            
            if (args[i] == "hack" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/hack/0.8.0/hack.css"); 
            console.log("hack Loaded Successfully");
            }
            
            
            if (args[i] == "hamburgers" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/hamburgers/0.9.1/hamburgers.min.css"); 
            console.log("hamburgers Loaded Successfully");
            }
            
            
            if (args[i] == "Han" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.css"); 
            console.log("Han Loaded Successfully");
            }
            
            
            if (args[i] == "hint.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/hint.css/2.5.0/hint.min.css"); 
            console.log("hint.css Loaded Successfully");
            }
            
            
            if (args[i] == "hover.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.1.1/css/hover-min.css"); 
            console.log("hover.css Loaded Successfully");
            }
            
            
            if (args[i] == "IBM-type" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/IBM-type/0.5.3/css/ibm-type.min.css"); 
            console.log("IBM-type Loaded Successfully");
            }
            
            
            if (args[i] == "icono" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/icono/1.3.0/icono.min.css"); 
            console.log("icono Loaded Successfully");
            }
            
            
            if (args[i] == "imagehover.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/imagehover.css/1.0/css/imagehover.min.css"); 
            console.log("imagehover.css Loaded Successfully");
            }
            
            
            if (args[i] == "ionicons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.0.0-9/css/ionicons.min.css"); 
            console.log("ionicons Loaded Successfully");
            }
            
            
            if (args[i] == "jasny-bootstrap" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/css/jasny-bootstrap.min.css"); 
            console.log("jasny-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-timepicker" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.10.0/jquery.timepicker.min.css"); 
            console.log("jquery-timepicker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ui-bootstrap" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-bootstrap/0.5pre/assets/css/bootstrap.min.css"); 
            console.log("jquery-ui-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.nanoscroller" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/jquery.nanoscroller/0.8.7/css/nanoscroller.min.css"); 
            console.log("jquery.nanoscroller Loaded Successfully");
            }
            
            
            if (args[i] == "kube" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/kube/6.5.2/css/kube.min.css"); 
            console.log("kube Loaded Successfully");
            }
            
            
            if (args[i] == "kule.lazy" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/kule.lazy/3.1.171101/css/kule-lazy.min.css"); 
            console.log("kule.lazy Loaded Successfully");
            }
            
            
            if (args[i] == "label.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/label.css/0.1.1/label.min.css"); 
            console.log("label.css Loaded Successfully");
            }
            
            
            if (args[i] == "lemonade" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/lemonade/2.5/lemonade.min.css"); 
            console.log("lemonade Loaded Successfully");
            }
            
            
            if (args[i] == "light7" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/light7/0.4.3/css/light7.min.css"); 
            console.log("light7 Loaded Successfully");
            }
            
            
            if (args[i] == "loaders.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/loaders.css/0.1.2/loaders.min.css"); 
            console.log("loaders.css Loaded Successfully");
            }
            
            
            if (args[i] == "m8tro-bootstrap" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/m8tro-bootstrap/3.3.7/m8tro.min.css"); 
            console.log("m8tro-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "magic" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/magic/1.1.0/magic.min.css"); 
            console.log("magic Loaded Successfully");
            }
            
            
            if (args[i] == "marx" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/marx/2.0.7/marx.min.css"); 
            console.log("marx Loaded Successfully");
            }
            
            
            if (args[i] == "material-design-iconic-font" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"); 
            console.log("material-design-iconic-font Loaded Successfully");
            }
            
            
            if (args[i] == "material-design-icons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"); 
            console.log("material-design-icons Loaded Successfully");
            }
            
            
            if (args[i] == "MaterialDesign-Webfont" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.1.19/css/materialdesignicons.min.css"); 
            console.log("MaterialDesign-Webfont Loaded Successfully");
            }
            
            
            if (args[i] == "materialize" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"); 
            console.log("materialize Loaded Successfully");
            }
            
            
            if (args[i] == "meyer-reset" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"); 
            console.log("meyer-reset Loaded Successfully");
            }
            
            
            if (args[i] == "milligram" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css"); 
            console.log("milligram Loaded Successfully");
            }
            
            
            if (args[i] == "min" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/min/1.5.0/entireframework.min.css"); 
            console.log("min Loaded Successfully");
            }
            
            
            if (args[i] == "mini.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/mini.css/2.3.7/mini-default.min.css"); 
            console.log("mini.css Loaded Successfully");
            }
            
            
            if (args[i] == "minireset.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/minireset.css/0.0.2/minireset.min.css"); 
            console.log("minireset.css Loaded Successfully");
            }
            
            
            if (args[i] == "mobi.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/mobi.css/3.1.1/mobi.min.css"); 
            console.log("mobi.css Loaded Successfully");
            }
            
            
            if (args[i] == "mu" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/mu/0.3.1/mu.min.css"); 
            console.log("mu Loaded Successfully");
            }
            
            
            if (args[i] == "normalize" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"); 
            console.log("normalize Loaded Successfully");
            }
            
            
            if (args[i] == "octicons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/octicons.min.css"); 
            console.log("octicons Loaded Successfully");
            }
            
            
            if (args[i] == "open-color" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/open-color/1.6.1/open-color.min.css"); 
            console.log("open-color Loaded Successfully");
            }
            
            
            if (args[i] == "open-iconic" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic.min.css"); 
            console.log("open-iconic Loaded Successfully");
            }
            
            
            if (args[i] == "openwebicons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/openwebicons/1.4.3/css/openwebicons.min.css"); 
            console.log("openwebicons Loaded Successfully");
            }
            
            
            if (args[i] == "overpass" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/overpass/3.0.2/overpass-webfont/overpass.min.css"); 
            console.log("overpass Loaded Successfully");
            }
            
            
            if (args[i] == "paper-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.3.0/paper.min.css"); 
            console.log("paper-css Loaded Successfully");
            }
            
            
            if (args[i] == "papier" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/papier/1.3.1/papier.min.css"); 
            console.log("papier Loaded Successfully");
            }
            
            
            if (args[i] == "paradeiser" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/paradeiser/0.4.5/min/paradeiser.min.css"); 
            console.log("paradeiser Loaded Successfully");
            }
            
            
            if (args[i] == "pavilion" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/pavilion/2.0.3/pavilion.min.css"); 
            console.log("pavilion Loaded Successfully");
            }
            
            
            if (args[i] == "paymentfont" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/paymentfont/1.2.5/css/paymentfont.min.css"); 
            console.log("paymentfont Loaded Successfully");
            }
            
            
            if (args[i] == "perfundo" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/perfundo/4.0.3/perfundo.min.css"); 
            console.log("perfundo Loaded Successfully");
            }
            
            
            if (args[i] == "photon" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/photon/0.1.2-alpha/css/photon.min.css"); 
            console.log("photon Loaded Successfully");
            }
            
            
            if (args[i] == "picnic" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/picnic/6.4.0/picnic.min.css"); 
            console.log("picnic Loaded Successfully");
            }
            
            
            if (args[i] == "pills" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/pills/1.0.1/pills.min.css"); 
            console.log("pills Loaded Successfully");
            }
            
            
            if (args[i] == "pretty-checkbox" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/pretty-checkbox/3.0.0/pretty-checkbox.min.css"); 
            console.log("pretty-checkbox Loaded Successfully");
            }
            
            
            if (args[i] == "Primer" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/Primer/9.6.0/build.css"); 
            console.log("Primer Loaded Successfully");
            }
            
            
            if (args[i] == "pure" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/pure/1.0.0/pure-min.css"); 
            console.log("pure Loaded Successfully");
            }
            
            
            if (args[i] == "radiobox.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/radiobox.css/1.0.1/css/radiobox.min.css"); 
            console.log("radiobox.css Loaded Successfully");
            }
            
            
            if (args[i] == "rangeslider.js" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.1/rangeslider.min.css"); 
            console.log("rangeslider.js Loaded Successfully");
            }
            
            
            if (args[i] == "react-instantsearch-theme-algolia" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/react-instantsearch-theme-algolia/4.3.0/style.min.css"); 
            console.log("react-instantsearch-theme-algolia Loaded Successfully");
            }
            
            
            if (args[i] == "react-uwp" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/react-uwp/1.1.8/css/segoe-mdl2-assets.css"); 
            console.log("react-uwp Loaded Successfully");
            }
            
            
            if (args[i] == "Repaintless.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/Repaintless.css/1.4.0/repaintless.min.css"); 
            console.log("Repaintless.css Loaded Successfully");
            }
            
            
            if (args[i] == "rwdgrid" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/rwdgrid/2/css/rwdgrid.min.css"); 
            console.log("rwdgrid Loaded Successfully");
            }
            
            
            if (args[i] == "s3colors" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/s3colors/1.0/s3-colors.min.css"); 
            console.log("s3colors Loaded Successfully");
            }
            
            
            if (args[i] == "sanitize.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/sanitize.css/2.0.0/sanitize.min.css"); 
            console.log("sanitize.css Loaded Successfully");
            }
            
            
            if (args[i] == "sco.js" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/sco.js/1.1.0/css/scojs.min.css"); 
            console.log("sco.js Loaded Successfully");
            }
            
            
            if (args[i] == "select2-bootstrap-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/select2-bootstrap-css/1.4.6/select2-bootstrap.min.css"); 
            console.log("select2-bootstrap-css Loaded Successfully");
            }
            
            
            if (args[i] == "select2-bootstrap-theme" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/select2-bootstrap-theme/0.1.0-beta.10/select2-bootstrap.min.css"); 
            console.log("select2-bootstrap-theme Loaded Successfully");
            }
            
            
            if (args[i] == "semantic-ui-calendar" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui-calendar/0.0.8/calendar.min.css"); 
            console.log("semantic-ui-calendar Loaded Successfully");
            }
            
            
            if (args[i] == "shoelace-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/shoelace-css/1.0.0-beta9/shoelace.css"); 
            console.log("shoelace-css Loaded Successfully");
            }
            
            
            if (args[i] == "simple-hint" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/simple-hint/3.0.0/simple-hint.min.css"); 
            console.log("simple-hint Loaded Successfully");
            }
            
            
            if (args[i] == "simple-line-icons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css"); 
            console.log("simple-line-icons Loaded Successfully");
            }
            
            
            if (args[i] == "simpleui" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/simpleui/0.1.1/simple.min.css"); 
            console.log("simpleui Loaded Successfully");
            }
            
            
            if (args[i] == "skeleton-framework" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/skeleton-framework/1.1.1/skeleton.min.css"); 
            console.log("skeleton-framework Loaded Successfully");
            }
            
            
            if (args[i] == "skeleton" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"); 
            console.log("skeleton Loaded Successfully");
            }
            
            
            if (args[i] == "SlickNav" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css"); 
            console.log("SlickNav Loaded Successfully");
            }
            
            
            if (args[i] == "slider-pro" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/slider-pro.min.css"); 
            console.log("slider-pro Loaded Successfully");
            }
            
            
            if (args[i] == "social-sharing" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/social-sharing/1.7.2/css/social-sharing.min.css"); 
            console.log("social-sharing Loaded Successfully");
            }
            
            
            if (args[i] == "spectre.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.0/spectre.min.css"); 
            console.log("spectre.css Loaded Successfully");
            }
            
            
            if (args[i] == "spinkit" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/spinkit/1.2.5/spinkit.min.css"); 
            console.log("spinkit Loaded Successfully");
            }
            
            
            if (args[i] == "spoqa-han-sans" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/spoqa-han-sans/2.1.1/css/SpoqaHanSans-kr.min.css"); 
            console.log("spoqa-han-sans Loaded Successfully");
            }
            
            
            if (args[i] == "stackicons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/stackicons/1.0/css/stackicons-min.css"); 
            console.log("stackicons Loaded Successfully");
            }
            
            
            if (args[i] == "startbootstrap-landing-page" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-landing-page/3.3.7/css/landing-page.min.css"); 
            console.log("startbootstrap-landing-page Loaded Successfully");
            }
            
            
            if (args[i] == "startbootstrap-stylish-portfolio" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-stylish-portfolio/3.3.7/css/stylish-portfolio.min.css"); 
            console.log("startbootstrap-stylish-portfolio Loaded Successfully");
            }
            
            
            if (args[i] == "sweetalert" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"); 
            console.log("sweetalert Loaded Successfully");
            }
            
            
            if (args[i] == "tachyons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.9.0/tachyons.min.css"); 
            console.log("tachyons Loaded Successfully");
            }
            
            
            if (args[i] == "timeline.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/timeline.css/1.0.0/timeline.min.css"); 
            console.log("timeline.css Loaded Successfully");
            }
            
            
            if (args[i] == "tipograf" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/tipograf/2.0.0/tipograf.min.css"); 
            console.log("tipograf Loaded Successfully");
            }
            
            
            if (args[i] == "titatoggle" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/titatoggle/1.2.14/titatoggle-dist-min.css"); 
            console.log("titatoggle Loaded Successfully");
            }
            
            
            if (args[i] == "toast-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/toast-css/1.1.0/grid.min.css"); 
            console.log("toast-css Loaded Successfully");
            }
            
            
            if (args[i] == "tocas-ui" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/tocas-ui/2.3.3/tocas.css"); 
            console.log("tocas-ui Loaded Successfully");
            }
            
            
            if (args[i] == "topcoat-icons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.1.0/font/icomatic.css"); 
            console.log("topcoat-icons Loaded Successfully");
            }
            
            
            if (args[i] == "topcoat" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-mobile-dark.min.css"); 
            console.log("topcoat Loaded Successfully");
            }
            
            
            if (args[i] == "tuesday" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/tuesday/1.1.0/tuesday.min.css"); 
            console.log("tuesday Loaded Successfully");
            }
            
            
            if (args[i] == "tufte-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.3/tufte.min.css"); 
            console.log("tufte-css Loaded Successfully");
            }
            
            
            if (args[i] == "twbuttons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/twbuttons/0.1.2/twbuttons.min.css"); 
            console.log("twbuttons Loaded Successfully");
            }
            
            
            if (args[i] == "typeahead.js-bootstrap-css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/typeahead.js-bootstrap-css/1.2.1/typeaheadjs.min.css"); 
            console.log("typeahead.js-bootstrap-css Loaded Successfully");
            }
            
            
            if (args[i] == "typeboost.css" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/typeboost.css/0.1.8/css/typeboost.min.css"); 
            console.log("typeboost.css Loaded Successfully");
            }
            
            
            if (args[i] == "typeplate-starter-kit" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/typeplate-starter-kit/3.0.2/css/typeplate.min.css"); 
            console.log("typeplate-starter-kit Loaded Successfully");
            }
            
            
            if (args[i] == "typicons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"); 
            console.log("typicons Loaded Successfully");
            }
            
            
            if (args[i] == "unsemantic" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/unsemantic/1.2.2/unsemantic-grid-responsive.min.css"); 
            console.log("unsemantic Loaded Successfully");
            }
            
            
            if (args[i] == "videogular-themes-default" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/videogular-themes-default/1.4.4/videogular.min.css"); 
            console.log("videogular-themes-default Loaded Successfully");
            }
            
            
            if (args[i] == "w2ui" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/w2ui/1.4.3/w2ui.min.css"); 
            console.log("w2ui Loaded Successfully");
            }
            
            
            if (args[i] == "weather-icons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"); 
            console.log("weather-icons Loaded Successfully");
            }
            
            
            if (args[i] == "web-starter-kit" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/web-starter-kit/0.2.0-beta/styles/main.min.css"); 
            console.log("web-starter-kit Loaded Successfully");
            }
            
            
            if (args[i] == "webicons" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons.min.css"); 
            console.log("webicons Loaded Successfully");
            }
            
            
            if (args[i] == "WebRupee" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/WebRupee/2.0/font.min.css"); 
            console.log("WebRupee Loaded Successfully");
            }
            
            
            if (args[i] == "wenk" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/wenk/1.0.6/wenk.min.css"); 
            console.log("wenk Loaded Successfully");
            }
            
            
            if (args[i] == "weui" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/weui/1.1.2/style/weui.min.css"); 
            console.log("weui Loaded Successfully");
            }
            
            
            if (args[i] == "wingcss" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/wingcss/0.1.9/wing.min.css"); 
            console.log("wingcss Loaded Successfully");
            }
            
            
            if (args[i] == "wuzzle" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/wuzzle/1.1.0/wuzzle.min.css"); 
            console.log("wuzzle Loaded Successfully");
            }
            
            
            if (args[i] == "yamlcss" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/yamlcss/4.1.2/core/base.min.css"); 
            console.log("yamlcss Loaded Successfully");
            }
            
            
            if (args[i] == "zurb-ink" ) {
            CallCSS("https://cdnjs.cloudflare.com/ajax/libs/zurb-ink/1.0.5/ink.min.css"); 
            console.log("zurb-ink Loaded Successfully");
            }
            
            













        ///////////////////////////////////////////////////
        ///////////////////////////////////////////////////
        ////////////// Import Javascript : ////////////////
        ///////////////////////////////////////////////////
        ///////////////////////////////////////////////////


        if (args[i] == "1000hz-bootstrap-validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.9/validator.min.js"); 
            console.log("1000hz-bootstrap-validator Loaded Successfully");
            }
            
            
            if (args[i] == "3Dmol" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/3Dmol/1.3.0/3Dmol-min.js"); 
            console.log("3Dmol Loaded Successfully");
            }
            
            
            if (args[i] == "6pac-slickgrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/6pac-slickgrid/2.3.12/slick.core.min.js"); 
            console.log("6pac-slickgrid Loaded Successfully");
            }
            
            
            if (args[i] == "6px" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/6px/1.0.3/6px.min.js"); 
            console.log("6px Loaded Successfully");
            }
            
            
            if (args[i] == "6to5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/6to5/3.6.5/browser.js"); 
            console.log("6to5 Loaded Successfully");
            }
            
            
            if (args[i] == "abcjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/abcjs/3.1.1/abcjs_basic-min.js"); 
            console.log("abcjs Loaded Successfully");
            }
            
            
            if (args[i] == "absurd" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/absurd/0.3.9/absurd.min.js"); 
            console.log("absurd Loaded Successfully");
            }
            
            
            if (args[i] == "accounting.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/accounting.js/0.4.1/accounting.min.js"); 
            console.log("accounting.js Loaded Successfully");
            }
            
            
            if (args[i] == "ace" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ace.js"); 
            console.log("ace Loaded Successfully");
            }
            
            
            if (args[i] == "acorn" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/acorn/5.3.0/acorn.min.js"); 
            console.log("acorn Loaded Successfully");
            }
            
            
            if (args[i] == "across-tabs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/across-tabs/1.2.0/across-tabs.min.js"); 
            console.log("across-tabs Loaded Successfully");
            }
            
            
            if (args[i] == "adapterjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/adapterjs/0.15.0/adapter.min.js"); 
            console.log("adapterjs Loaded Successfully");
            }
            
            
            if (args[i] == "adblock-detect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/adblock-detect/1.0.5/index.min.js"); 
            console.log("adblock-detect Loaded Successfully");
            }
            
            
            if (args[i] == "admin-lte" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.2/js/adminlte.min.js"); 
            console.log("admin-lte Loaded Successfully");
            }
            
            
            if (args[i] == "adobe-sign-sdk" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/adobe-sign-sdk/1.1.0/adobe-sign-sdk.min.js"); 
            console.log("adobe-sign-sdk Loaded Successfully");
            }
            
            
            if (args[i] == "aes-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aes-js/3.1.0/index.min.js"); 
            console.log("aes-js Loaded Successfully");
            }
            
            
            if (args[i] == "aframe-text-component" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aframe-text-component/0.4.2/aframe-text-component.min.js"); 
            console.log("aframe-text-component Loaded Successfully");
            }
            
            
            if (args[i] == "aframe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aframe/0.7.1/aframe.min.js"); 
            console.log("aframe Loaded Successfully");
            }
            
            
            if (args[i] == "ag-grid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ag-grid/15.0.0/ag-grid.min.js"); 
            console.log("ag-grid Loaded Successfully");
            }
            
            
            if (args[i] == "agility" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/agility/0.1.3/agility.min.js"); 
            console.log("agility Loaded Successfully");
            }
            
            
            if (args[i] == "aight" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aight/1.2.2/aight.min.js"); 
            console.log("aight Loaded Successfully");
            }
            
            
            if (args[i] == "air-datepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/js/datepicker.min.js"); 
            console.log("air-datepicker Loaded Successfully");
            }
            
            
            if (args[i] == "airbrake-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/airbrake-js/0.9.9/client.min.js"); 
            console.log("airbrake-js Loaded Successfully");
            }
            
            
            if (args[i] == "aja" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aja/0.4.1/aja.min.js"); 
            console.log("aja Loaded Successfully");
            }
            
            
            if (args[i] == "ajax-bootstrap-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ajax-bootstrap-select/1.4.3/js/ajax-bootstrap-select.min.js"); 
            console.log("ajax-bootstrap-select Loaded Successfully");
            }
            
            
            if (args[i] == "ajaxify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ajaxify/7.1.0/ajaxify.min.js"); 
            console.log("ajaxify Loaded Successfully");
            }
            
            
            if (args[i] == "ajile" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ajile/2.1.7/com.iskitz.ajile.js"); 
            console.log("ajile Loaded Successfully");
            }
            
            
            if (args[i] == "ajv" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ajv/5.5.2/ajv.min.js"); 
            console.log("ajv Loaded Successfully");
            }
            
            
            if (args[i] == "alasql" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/alasql/0.4.4/alasql.min.js"); 
            console.log("alasql Loaded Successfully");
            }
            
            
            if (args[i] == "alchemyjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/alchemyjs/0.4.2/alchemy.min.js"); 
            console.log("alchemyjs Loaded Successfully");
            }
            
            
            if (args[i] == "alertify.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.5.0/alertify.min.js"); 
            console.log("alertify.js Loaded Successfully");
            }
            
            
            if (args[i] == "alertifyjs-alertify.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/alertifyjs-alertify.js/1.0.11/js/alertify.js"); 
            console.log("alertifyjs-alertify.js Loaded Successfully");
            }
            
            
            if (args[i] == "AlertifyJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/AlertifyJS/1.11.0/alertify.min.js"); 
            console.log("AlertifyJS Loaded Successfully");
            }
            
            
            if (args[i] == "alexandernst-angular-multi-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/alexandernst-angular-multi-select/7.4.6/angular-multi-select.min.js"); 
            console.log("alexandernst-angular-multi-select Loaded Successfully");
            }
            
            
            if (args[i] == "algoliasearch-helper-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/algoliasearch-helper-js/2.23.2/algoliasearch.helper.min.js"); 
            console.log("algoliasearch-helper-js Loaded Successfully");
            }
            
            
            if (args[i] == "algoliasearch.zendesk-hc" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/algoliasearch.zendesk-hc/2.20.3/algoliasearch.zendesk-hc.min.js"); 
            console.log("algoliasearch.zendesk-hc Loaded Successfully");
            }
            
            
            if (args[i] == "algoliasearch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/algoliasearch/3.24.9/algoliasearch.min.js"); 
            console.log("algoliasearch Loaded Successfully");
            }
            
            
            if (args[i] == "Allofthelights.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Allofthelights.js/2.0/jquery.allofthelights-min.js"); 
            console.log("Allofthelights.js Loaded Successfully");
            }
            
            
            if (args[i] == "allow-me" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/allow-me/0.1.1/allowMe.min.js"); 
            console.log("allow-me Loaded Successfully");
            }
            
            
            if (args[i] == "alloy-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/alloy-ui/1.0.1/aui-min.js"); 
            console.log("alloy-ui Loaded Successfully");
            }
            
            
            if (args[i] == "ally.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ally.js/1.4.1/ally.min.js"); 
            console.log("ally.js Loaded Successfully");
            }
            
            
            if (args[i] == "alt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/alt/0.18.6/alt.min.js"); 
            console.log("alt Loaded Successfully");
            }
            
            
            if (args[i] == "alton" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/alton/1.2.1/jquery.alton.min.js"); 
            console.log("alton Loaded Successfully");
            }
            
            
            if (args[i] == "amazeui-react" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/amazeui-react/1.2.3/amazeui.react.min.js"); 
            console.log("amazeui-react Loaded Successfully");
            }
            
            
            if (args[i] == "amazeui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/amazeui/2.7.2/js/amazeui.min.js"); 
            console.log("amazeui Loaded Successfully");
            }
            
            
            if (args[i] == "amcharts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.21.12/amcharts.js"); 
            console.log("amcharts Loaded Successfully");
            }
            
            
            if (args[i] == "ami.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ami.js/0.0.22/ami.min.js"); 
            console.log("ami.js Loaded Successfully");
            }
            
            
            if (args[i] == "ammaps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ammaps/3.13.0/ammap.js"); 
            console.log("ammaps Loaded Successfully");
            }
            
            
            if (args[i] == "amplifyjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/amplifyjs/1.1.2/amplify.min.js"); 
            console.log("amplifyjs Loaded Successfully");
            }
            
            
            if (args[i] == "amplitudejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/amplitudejs/3.2.3/amplitude.min.js"); 
            console.log("amplitudejs Loaded Successfully");
            }
            
            
            if (args[i] == "amstockchart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/amstockchart/3.13.0/amstock.js"); 
            console.log("amstockchart Loaded Successfully");
            }
            
            
            if (args[i] == "analytics.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/analytics.js/2.9.1/analytics.min.js"); 
            console.log("analytics.js Loaded Successfully");
            }
            
            
            if (args[i] == "anchor-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js"); 
            console.log("anchor-js Loaded Successfully");
            }
            
            
            if (args[i] == "anchor.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/anchor.js/1.0.6/anchor.min.js"); 
            console.log("anchor.js Loaded Successfully");
            }
            
            
            if (args[i] == "anchorific" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/anchorific/1.1/min/anchorific.min.js"); 
            console.log("anchorific Loaded Successfully");
            }
            
            
            if (args[i] == "angucomplete-alt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angucomplete-alt/3.0.0/angucomplete-alt.min.js"); 
            console.log("angucomplete-alt Loaded Successfully");
            }
            
            
            if (args[i] == "angular-audio" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-audio/1.7.4/angular.audio.min.js"); 
            console.log("angular-audio Loaded Successfully");
            }
            
            
            if (args[i] == "angular-auth0" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-auth0/2.0.0/angular-auth0.min.js"); 
            console.log("angular-auth0 Loaded Successfully");
            }
            
            
            if (args[i] == "angular-autofields" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-autofields/2.2.3/autofields.min.js"); 
            console.log("angular-autofields Loaded Successfully");
            }
            
            
            if (args[i] == "angular-azure-mobile-service" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-azure-mobile-service/1.3.11/angular-azure-mobile-service.min.js"); 
            console.log("angular-azure-mobile-service Loaded Successfully");
            }
            
            
            if (args[i] == "angular-bacon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-bacon/2.0.1/angular-bacon.min.js"); 
            console.log("angular-bacon Loaded Successfully");
            }
            
            
            if (args[i] == "angular-base64" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-base64/2.0.5/angular-base64.min.js"); 
            console.log("angular-base64 Loaded Successfully");
            }
            
            
            if (args[i] == "angular-bindonce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-bindonce/0.3.3/bindonce.min.js"); 
            console.log("angular-bindonce Loaded Successfully");
            }
            
            
            if (args[i] == "angular-block-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-block-ui/0.2.2/angular-block-ui.min.js"); 
            console.log("angular-block-ui Loaded Successfully");
            }
            
            
            if (args[i] == "angular-bootstrap-colorpicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-bootstrap-colorpicker/3.0.32/js/bootstrap-colorpicker-module.min.js"); 
            console.log("angular-bootstrap-colorpicker Loaded Successfully");
            }
            
            
            if (args[i] == "angular-bootstrap-datetimepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-bootstrap-datetimepicker/1.1.4/js/datetimepicker.min.js"); 
            console.log("angular-bootstrap-datetimepicker Loaded Successfully");
            }
            
            
            if (args[i] == "angular-bootstrap-lightbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-bootstrap-lightbox/0.12.0/angular-bootstrap-lightbox.min.js"); 
            console.log("angular-bootstrap-lightbox Loaded Successfully");
            }
            
            
            if (args[i] == "angular-bootstrap-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-bootstrap-slider/0.1.28/slider.min.js"); 
            console.log("angular-bootstrap-slider Loaded Successfully");
            }
            
            
            if (args[i] == "angular-bootstrap-switch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-bootstrap-switch/0.5.2/angular-bootstrap-switch.min.js"); 
            console.log("angular-bootstrap-switch Loaded Successfully");
            }
            
            
            if (args[i] == "angular-br-filters" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-br-filters/0.7.0/angular-br-filters.min.js"); 
            console.log("angular-br-filters Loaded Successfully");
            }
            
            
            if (args[i] == "angular-breadcrumb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-breadcrumb/0.5.0/angular-breadcrumb.min.js"); 
            console.log("angular-breadcrumb Loaded Successfully");
            }
            
            
            if (args[i] == "angular-busy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-busy/4.1.4/angular-busy.min.js"); 
            console.log("angular-busy Loaded Successfully");
            }
            
            
            if (args[i] == "angular-cache" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-cache/4.6.0/angular-cache.min.js"); 
            console.log("angular-cache Loaded Successfully");
            }
            
            
            if (args[i] == "angular-cached-resource" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-cached-resource/1.4.2/angular-cached-resource.min.js"); 
            console.log("angular-cached-resource Loaded Successfully");
            }
            
            
            if (args[i] == "angular-carousel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-carousel/1.1.0/angular-carousel.min.js"); 
            console.log("angular-carousel Loaded Successfully");
            }
            
            
            if (args[i] == "angular-chart.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-chart.js/1.1.1/angular-chart.min.js"); 
            console.log("angular-chart.js Loaded Successfully");
            }
            
            
            if (args[i] == "angular-chartist.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-chartist.js/4.3.4/angular-chartist.min.js"); 
            console.log("angular-chartist.js Loaded Successfully");
            }
            
            
            if (args[i] == "angular-charts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-charts/0.2.7/angular-charts.min.js"); 
            console.log("angular-charts Loaded Successfully");
            }
            
            
            if (args[i] == "angular-chosen-localytics" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-chosen-localytics/1.8.0/angular-chosen.min.js"); 
            console.log("angular-chosen-localytics Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ckeditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ckeditor/1.0.3/angular-ckeditor.min.js"); 
            console.log("angular-ckeditor Loaded Successfully");
            }
            
            
            if (args[i] == "angular-clipboard" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-clipboard/1.6.2/angular-clipboard.min.js"); 
            console.log("angular-clipboard Loaded Successfully");
            }
            
            
            if (args[i] == "angular-confirm" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-confirm/1.2.6/angular-confirm.min.js"); 
            console.log("angular-confirm Loaded Successfully");
            }
            
            
            if (args[i] == "angular-cookie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-cookie/4.1.0/angular-cookie.min.js"); 
            console.log("angular-cookie Loaded Successfully");
            }
            
            
            if (args[i] == "angular-css" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-css/1.0.8/angular-css.min.js"); 
            console.log("angular-css Loaded Successfully");
            }
            
            
            if (args[i] == "angular-data-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-data-table/0.7.0/dataTable.min.js"); 
            console.log("angular-data-table Loaded Successfully");
            }
            
            
            if (args[i] == "angular-data" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-data/1.5.3/angular-data.min.js"); 
            console.log("angular-data Loaded Successfully");
            }
            
            
            if (args[i] == "angular-datatables" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-datatables/2.1.0/angular-datatables.js"); 
            console.log("angular-datatables Loaded Successfully");
            }
            
            
            if (args[i] == "angular-debounce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-debounce/0.1.7/angular-debounce.min.js"); 
            console.log("angular-debounce Loaded Successfully");
            }
            
            
            if (args[i] == "angular-deckgrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-deckgrid/0.5.0/angular-deckgrid.min.js"); 
            console.log("angular-deckgrid Loaded Successfully");
            }
            
            
            if (args[i] == "angular-dialog-service" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-dialog-service/5.3.0/dialogs.min.js"); 
            console.log("angular-dialog-service Loaded Successfully");
            }
            
            
            if (args[i] == "angular-drag-and-drop-lists" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-drag-and-drop-lists/2.1.0/angular-drag-and-drop-lists.min.js"); 
            console.log("angular-drag-and-drop-lists Loaded Successfully");
            }
            
            
            if (args[i] == "angular-dragula" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-dragula/1.2.8/angular-dragula.min.js"); 
            console.log("angular-dragula Loaded Successfully");
            }
            
            
            if (args[i] == "angular-dynamic-locale" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-dynamic-locale/0.1.32/tmhDynamicLocale.min.js"); 
            console.log("angular-dynamic-locale Loaded Successfully");
            }
            
            
            if (args[i] == "angular-elastic-input" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-elastic-input/2.4.0/angular-elastic-input.min.js"); 
            console.log("angular-elastic-input Loaded Successfully");
            }
            
            
            if (args[i] == "angular-elastic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-elastic/2.5.1/elastic.min.js"); 
            console.log("angular-elastic Loaded Successfully");
            }
            
            
            if (args[i] == "angular-file-upload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-file-upload/2.5.0/angular-file-upload.min.js"); 
            console.log("angular-file-upload Loaded Successfully");
            }
            
            
            if (args[i] == "angular-filemanager" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-filemanager/1.5.1/angular-filemanager.min.js"); 
            console.log("angular-filemanager Loaded Successfully");
            }
            
            
            if (args[i] == "angular-filter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-filter/0.5.17/angular-filter.min.js"); 
            console.log("angular-filter Loaded Successfully");
            }
            
            
            if (args[i] == "angular-fontselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-fontselect/0.13.4/angular-fontselect.min.js"); 
            console.log("angular-fontselect Loaded Successfully");
            }
            
            
            if (args[i] == "angular-formly-material" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-formly-material/0.14.3/formly-material.min.js"); 
            console.log("angular-formly-material Loaded Successfully");
            }
            
            
            if (args[i] == "angular-formly-templates-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-formly-templates-bootstrap/6.5.1/angular-formly-templates-bootstrap.min.js"); 
            console.log("angular-formly-templates-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "angular-formly" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-formly/8.4.1/formly.min.js"); 
            console.log("angular-formly Loaded Successfully");
            }
            
            
            if (args[i] == "angular-foundation-6" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-foundation-6/0.11.17/angular-foundation.min.js"); 
            console.log("angular-foundation-6 Loaded Successfully");
            }
            
            
            if (args[i] == "angular-foundation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-foundation/0.8.0/mm-foundation.min.js"); 
            console.log("angular-foundation Loaded Successfully");
            }
            
            
            if (args[i] == "angular-gantt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-gantt/1.3.3/angular-gantt.min.js"); 
            console.log("angular-gantt Loaded Successfully");
            }
            
            
            if (args[i] == "angular-gettext" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-gettext/2.3.10/angular-gettext.min.js"); 
            console.log("angular-gettext Loaded Successfully");
            }
            
            
            if (args[i] == "angular-google-analytics" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-google-analytics/1.1.9/angular-google-analytics.min.js"); 
            console.log("angular-google-analytics Loaded Successfully");
            }
            
            
            if (args[i] == "angular-google-chart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-google-chart/0.1.0/ng-google-chart.min.js"); 
            console.log("angular-google-chart Loaded Successfully");
            }
            
            
            if (args[i] == "angular-google-maps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-google-maps/2.4.1/angular-google-maps.min.js"); 
            console.log("angular-google-maps Loaded Successfully");
            }
            
            
            if (args[i] == "angular-gravatar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-gravatar/0.4.2/angular-gravatar.min.js"); 
            console.log("angular-gravatar Loaded Successfully");
            }
            
            
            if (args[i] == "angular-gridster" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-gridster/0.13.15/angular-gridster.min.js"); 
            console.log("angular-gridster Loaded Successfully");
            }
            
            
            if (args[i] == "angular-growl-2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-growl-2/0.7.9/angular-growl.min.js"); 
            console.log("angular-growl-2 Loaded Successfully");
            }
            
            
            if (args[i] == "angular-hal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-hal/2.3.0/angular-hal.min.js"); 
            console.log("angular-hal Loaded Successfully");
            }
            
            
            if (args[i] == "angular-highlightjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-highlightjs/0.7.1/angular-highlightjs.min.js"); 
            console.log("angular-highlightjs Loaded Successfully");
            }
            
            
            if (args[i] == "angular-hotkeys" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-hotkeys/1.7.0/hotkeys.min.js"); 
            console.log("angular-hotkeys Loaded Successfully");
            }
            
            
            if (args[i] == "angular-http-auth" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-http-auth/1.5.0/http-auth-interceptor.min.js"); 
            console.log("angular-http-auth Loaded Successfully");
            }
            
            
            if (args[i] == "angular-i18n" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.6.8/angular-locale_en-us.min.js"); 
            console.log("angular-i18n Loaded Successfully");
            }
            
            
            if (args[i] == "angular-image-spinner" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-image-spinner/0.1.5/angular-image-spinner.min.js"); 
            console.log("angular-image-spinner Loaded Successfully");
            }
            
            
            if (args[i] == "angular-img-cropper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-img-cropper/1.1.0/angular-img-cropper.min.js"); 
            console.log("angular-img-cropper Loaded Successfully");
            }
            
            
            if (args[i] == "angular-imgcache.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-imgcache.js/0.1.0/angular-imgcache.min.js"); 
            console.log("angular-imgcache.js Loaded Successfully");
            }
            
            
            if (args[i] == "angular-input-masks" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-input-masks/4.1.0/angular-input-masks.min.js"); 
            console.log("angular-input-masks Loaded Successfully");
            }
            
            
            if (args[i] == "angular-inview" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-inview/2.3.0/angular-inview.min.js"); 
            console.log("angular-inview Loaded Successfully");
            }
            
            
            if (args[i] == "angular-js-bootstrap-datetimepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-js-bootstrap-datetimepicker/2.5.1/datetimepicker.min.js"); 
            console.log("angular-js-bootstrap-datetimepicker Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ladda" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ladda/0.4.3/angular-ladda.min.js"); 
            console.log("angular-ladda Loaded Successfully");
            }
            
            
            if (args[i] == "angular-leaflet-directive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-leaflet-directive/0.10.0/angular-leaflet-directive.min.js"); 
            console.log("angular-leaflet-directive Loaded Successfully");
            }
            
            
            if (args[i] == "angular-linkify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-linkify/2.0.0/angular-linkify.min.js"); 
            console.log("angular-linkify Loaded Successfully");
            }
            
            
            if (args[i] == "angular-loading-bar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.js"); 
            console.log("angular-loading-bar Loaded Successfully");
            }
            
            
            if (args[i] == "angular-local-storage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.7.1/angular-local-storage.min.js"); 
            console.log("angular-local-storage Loaded Successfully");
            }
            
            
            if (args[i] == "angular-mapboxgl-directive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-mapboxgl-directive/0.43.0/angular-mapboxgl-directive.min.js"); 
            console.log("angular-mapboxgl-directive Loaded Successfully");
            }
            
            
            if (args[i] == "angular-material-data-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-material-data-table/0.10.10/md-data-table.min.js"); 
            console.log("angular-material-data-table Loaded Successfully");
            }
            
            
            if (args[i] == "angular-material-icons" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-material-icons/0.7.1/angular-material-icons.min.js"); 
            console.log("angular-material-icons Loaded Successfully");
            }
            
            
            if (args[i] == "angular-materialize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-materialize/0.2.2/angular-materialize.min.js"); 
            console.log("angular-materialize Loaded Successfully");
            }
            
            
            if (args[i] == "angular-md5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-md5/0.1.10/angular-md5.min.js"); 
            console.log("angular-md5 Loaded Successfully");
            }
            
            
            if (args[i] == "angular-media-queries" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-media-queries/0.6.1/match-media.min.js"); 
            console.log("angular-media-queries Loaded Successfully");
            }
            
            
            if (args[i] == "angular-messages" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-messages/1.6.8/angular-messages.min.js"); 
            console.log("angular-messages Loaded Successfully");
            }
            
            
            if (args[i] == "angular-mixpanel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-mixpanel/1.1.2/angular-mixpanel.min.js"); 
            console.log("angular-mixpanel Loaded Successfully");
            }
            
            
            if (args[i] == "angular-mocks" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-mocks/1.6.8/angular-mocks.min.js"); 
            console.log("angular-mocks Loaded Successfully");
            }
            
            
            if (args[i] == "angular-moment-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-moment-picker/0.10.1/angular-moment-picker.min.js"); 
            console.log("angular-moment-picker Loaded Successfully");
            }
            
            
            if (args[i] == "angular-moment" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.2.0/angular-moment.min.js"); 
            console.log("angular-moment Loaded Successfully");
            }
            
            
            if (args[i] == "angular-morris" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-morris/1.3.0/angular-morris.min.js"); 
            console.log("angular-morris Loaded Successfully");
            }
            
            
            if (args[i] == "angular-mousewheel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-mousewheel/1.0.5/mousewheel.min.js"); 
            console.log("angular-mousewheel Loaded Successfully");
            }
            
            
            if (args[i] == "angular-multi-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-multi-select/4.0.0/isteven-multi-select.min.js"); 
            console.log("angular-multi-select Loaded Successfully");
            }
            
            
            if (args[i] == "angular-notification" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-notification/1.1.1/angular-notification.min.js"); 
            console.log("angular-notification Loaded Successfully");
            }
            
            
            if (args[i] == "angular-numeraljs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-numeraljs/2.0.1/angular-numeraljs.min.js"); 
            console.log("angular-numeraljs Loaded Successfully");
            }
            
            
            if (args[i] == "angular-nvd3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-nvd3/1.0.9/angular-nvd3.min.js"); 
            console.log("angular-nvd3 Loaded Successfully");
            }
            
            
            if (args[i] == "angular-permission" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-permission/5.3.2/angular-permission.min.js"); 
            console.log("angular-permission Loaded Successfully");
            }
            
            
            if (args[i] == "angular-poller" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-poller/0.4.5/angular-poller.min.js"); 
            console.log("angular-poller Loaded Successfully");
            }
            
            
            if (args[i] == "angular-pusher" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-pusher/0.0.14/angular-pusher.min.js"); 
            console.log("angular-pusher Loaded Successfully");
            }
            
            
            if (args[i] == "angular-qrcode" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-qrcode/7.2.0/angular-qrcode.min.js"); 
            console.log("angular-qrcode Loaded Successfully");
            }
            
            
            if (args[i] == "angular-recaptcha" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-recaptcha/4.1.2/angular-recaptcha.min.js"); 
            console.log("angular-recaptcha Loaded Successfully");
            }
            
            
            if (args[i] == "angular-relative-date" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-relative-date/2.1.1/angular-relative-date.min.js"); 
            console.log("angular-relative-date Loaded Successfully");
            }
            
            
            if (args[i] == "angular-resizable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-resizable/1.2.0/angular-resizable.min.js"); 
            console.log("angular-resizable Loaded Successfully");
            }
            
            
            if (args[i] == "angular-resource" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.6.8/angular-resource.min.js"); 
            console.log("angular-resource Loaded Successfully");
            }
            
            
            if (args[i] == "angular-restmod" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-restmod/1.1.11/angular-restmod-bundle.min.js"); 
            console.log("angular-restmod Loaded Successfully");
            }
            
            
            if (args[i] == "angular-retina" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-retina/0.3.1/angular-retina.min.js"); 
            console.log("angular-retina Loaded Successfully");
            }
            
            
            if (args[i] == "angular-route-segment" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-route-segment/1.5.1/angular-route-segment.min.js"); 
            console.log("angular-route-segment Loaded Successfully");
            }
            
            
            if (args[i] == "angular-sanitize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.6.8/angular-sanitize.min.js"); 
            console.log("angular-sanitize Loaded Successfully");
            }
            
            
            if (args[i] == "angular-schema-form" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-schema-form/0.8.13/bootstrap-decorator.min.js"); 
            console.log("angular-schema-form Loaded Successfully");
            }
            
            
            if (args[i] == "angular-scroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-scroll/1.0.2/angular-scroll.min.js"); 
            console.log("angular-scroll Loaded Successfully");
            }
            
            
            if (args[i] == "angular-signalr-hub" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-signalr-hub/1.6.3/signalr-hub.min.js"); 
            console.log("angular-signalr-hub Loaded Successfully");
            }
            
            
            if (args[i] == "angular-simple-logger" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-simple-logger/0.1.7/angular-simple-logger.min.js"); 
            console.log("angular-simple-logger Loaded Successfully");
            }
            
            
            if (args[i] == "angular-slick-carousel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-slick-carousel/3.1.7/angular-slick.min.js"); 
            console.log("angular-slick-carousel Loaded Successfully");
            }
            
            
            if (args[i] == "angular-smart-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-smart-table/2.1.11/smart-table.min.js"); 
            console.log("angular-smart-table Loaded Successfully");
            }
            
            
            if (args[i] == "angular-smooth-scrollbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-smooth-scrollbar/7.2.0/angular-smooth-scrollbar.min.js"); 
            console.log("angular-smooth-scrollbar Loaded Successfully");
            }
            
            
            if (args[i] == "angular-socialshare" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-socialshare/2.3.11/angular-socialshare.min.js"); 
            console.log("angular-socialshare Loaded Successfully");
            }
            
            
            if (args[i] == "angular-socket-io" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-socket-io/0.7.0/socket.min.js"); 
            console.log("angular-socket-io Loaded Successfully");
            }
            
            
            if (args[i] == "angular-sortable-view" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-sortable-view/0.0.17/angular-sortable-view.min.js"); 
            console.log("angular-sortable-view Loaded Successfully");
            }
            
            
            if (args[i] == "angular-soundmanager2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-soundmanager2/0.5.6/angular-soundmanager2.min.js"); 
            console.log("angular-soundmanager2 Loaded Successfully");
            }
            
            
            if (args[i] == "angular-spinner" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-spinner/0.8.1/angular-spinner.min.js"); 
            console.log("angular-spinner Loaded Successfully");
            }
            
            
            if (args[i] == "angular-storage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-storage/0.0.15/angular-storage.min.js"); 
            console.log("angular-storage Loaded Successfully");
            }
            
            
            if (args[i] == "angular-strap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-strap/2.3.12/angular-strap.min.js"); 
            console.log("angular-strap Loaded Successfully");
            }
            
            
            if (args[i] == "angular-stripe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-stripe/5.0.0/angular-stripe.min.js"); 
            console.log("angular-stripe Loaded Successfully");
            }
            
            
            if (args[i] == "angular-summernote" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-summernote/0.8.1/angular-summernote.min.js"); 
            console.log("angular-summernote Loaded Successfully");
            }
            
            
            if (args[i] == "angular-svg-round-progressbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-svg-round-progressbar/0.4.8/roundProgress.min.js"); 
            console.log("angular-svg-round-progressbar Loaded Successfully");
            }
            
            
            if (args[i] == "angular-sweetalert" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-sweetalert/1.1.2/SweetAlert.min.js"); 
            console.log("angular-sweetalert Loaded Successfully");
            }
            
            
            if (args[i] == "angular-timer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-timer/1.3.5/angular-timer.min.js"); 
            console.log("angular-timer Loaded Successfully");
            }
            
            
            if (args[i] == "angular-toarrayfilter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-toarrayfilter/1.0.2/toArrayFilter.min.js"); 
            console.log("angular-toarrayfilter Loaded Successfully");
            }
            
            
            if (args[i] == "angular-toastr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-toastr/2.1.1/angular-toastr.min.js"); 
            console.log("angular-toastr Loaded Successfully");
            }
            
            
            if (args[i] == "angular-touch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-touch/1.6.8/angular-touch.min.js"); 
            console.log("angular-touch Loaded Successfully");
            }
            
            
            if (args[i] == "angular-translate-handler-log" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-translate-handler-log/2.17.0/angular-translate-handler-log.min.js"); 
            console.log("angular-translate-handler-log Loaded Successfully");
            }
            
            
            if (args[i] == "angular-translate-interpolation-messageformat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-translate-interpolation-messageformat/2.17.0/angular-translate-interpolation-messageformat.min.js"); 
            console.log("angular-translate-interpolation-messageformat Loaded Successfully");
            }
            
            
            if (args[i] == "angular-translate-loader-partial" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-translate-loader-partial/2.17.0/angular-translate-loader-partial.min.js"); 
            console.log("angular-translate-loader-partial Loaded Successfully");
            }
            
            
            if (args[i] == "angular-translate-loader-static-files" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-translate-loader-static-files/2.17.0/angular-translate-loader-static-files.min.js"); 
            console.log("angular-translate-loader-static-files Loaded Successfully");
            }
            
            
            if (args[i] == "angular-translate-loader-url" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-translate-loader-url/2.17.0/angular-translate-loader-url.min.js"); 
            console.log("angular-translate-loader-url Loaded Successfully");
            }
            
            
            if (args[i] == "angular-translate-storage-cookie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-translate-storage-cookie/2.17.0/angular-translate-storage-cookie.min.js"); 
            console.log("angular-translate-storage-cookie Loaded Successfully");
            }
            
            
            if (args[i] == "angular-translate-storage-local" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-translate-storage-local/2.17.0/angular-translate-storage-local.min.js"); 
            console.log("angular-translate-storage-local Loaded Successfully");
            }
            
            
            if (args[i] == "angular-translate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.17.0/angular-translate.min.js"); 
            console.log("angular-translate Loaded Successfully");
            }
            
            
            if (args[i] == "angular-tree-control" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-tree-control/0.2.28/angular-tree-control.min.js"); 
            console.log("angular-tree-control Loaded Successfully");
            }
            
            
            if (args[i] == "angular-truncate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-truncate/0.1.2/truncate.min.js"); 
            console.log("angular-truncate Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"); 
            console.log("angular-ui-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-calendar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-calendar/1.0.0/calendar.min.js"); 
            console.log("angular-ui-calendar Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-codemirror" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-codemirror/0.3.0/ui-codemirror.min.js"); 
            console.log("angular-ui-codemirror Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-date" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-date/1.0.1/date.min.js"); 
            console.log("angular-ui-date Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-grid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.1.3/ui-grid.min.js"); 
            console.log("angular-ui-grid Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-mask" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-mask/1.8.7/mask.min.js"); 
            console.log("angular-ui-mask Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-notification" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-notification/0.3.6/angular-ui-notification.min.js"); 
            console.log("angular-ui-notification Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-router-default" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router-default/0.0.6/angular-ui-router-default.min.js"); 
            console.log("angular-ui-router-default Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-router-title" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router-title/0.1.1/angular-ui-router-title.min.js"); 
            console.log("angular-ui-router-title Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-router.statehelper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router.statehelper/1.3.1/statehelper.min.js"); 
            console.log("angular-ui-router.statehelper Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-router" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.min.js"); 
            console.log("angular-ui-router Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.20.0/select.min.js"); 
            console.log("angular-ui-select Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-slider/0.4.0/slider.min.js"); 
            console.log("angular-ui-slider Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-sortable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-sortable/0.18.0/sortable.min.js"); 
            console.log("angular-ui-sortable Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-tinymce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-tinymce/0.0.19/tinymce.min.js"); 
            console.log("angular-ui-tinymce Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-tree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-tree/2.22.6/angular-ui-tree.min.js"); 
            console.log("angular-ui-tree Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-utils" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min.js"); 
            console.log("angular-ui-utils Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui-validate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui-validate/1.2.3/validate.min.js"); 
            console.log("angular-ui-validate Loaded Successfully");
            }
            
            
            if (args[i] == "angular-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui.min.js"); 
            console.log("angular-ui Loaded Successfully");
            }
            
            
            if (args[i] == "angular-utf8-base64" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-utf8-base64/0.0.5/angular-utf8-base64.min.js"); 
            console.log("angular-utf8-base64 Loaded Successfully");
            }
            
            
            if (args[i] == "angular-validation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-validation/1.4.4/angular-validation.min.js"); 
            console.log("angular-validation Loaded Successfully");
            }
            
            
            if (args[i] == "angular-validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-validator/1.2.10/angular-validator.min.js"); 
            console.log("angular-validator Loaded Successfully");
            }
            
            
            if (args[i] == "angular-vertxbus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-vertxbus/6.3.0/angular-vertxbus.min.js"); 
            console.log("angular-vertxbus Loaded Successfully");
            }
            
            
            if (args[i] == "angular-video-bg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-video-bg/0.3.4/angular-video-bg.min.js"); 
            console.log("angular-video-bg Loaded Successfully");
            }
            
            
            if (args[i] == "angular-websocket" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-websocket/2.0.1/angular-websocket.min.js"); 
            console.log("angular-websocket Loaded Successfully");
            }
            
            
            if (args[i] == "angular-wizard" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-wizard/1.1.1/angular-wizard.min.js"); 
            console.log("angular-wizard Loaded Successfully");
            }
            
            
            if (args[i] == "angular-wysiwyg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-wysiwyg/1.2.4/angular-wysiwyg.min.js"); 
            console.log("angular-wysiwyg Loaded Successfully");
            }
            
            
            if (args[i] == "angular-xeditable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular-xeditable/0.8.1/js/xeditable.min.js"); 
            console.log("angular-xeditable Loaded Successfully");
            }
            
            
            if (args[i] == "angular.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js"); 
            console.log("angular.js Loaded Successfully");
            }
            
            
            if (args[i] == "angular2-polyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angular2-polyfill/0.0.32/angular2-polyfill.min.js"); 
            console.log("angular2-polyfill Loaded Successfully");
            }
            
            
            if (args[i] == "angularFire" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularFire/2.3.0/angularfire.min.js"); 
            console.log("angularFire Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-color-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-color-picker/3.4.8/angularjs-color-picker.min.js"); 
            console.log("angularjs-color-picker Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-datepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-datepicker/2.1.23/angular-datepicker.min.js"); 
            console.log("angularjs-datepicker Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-dropdown-multiselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-dropdown-multiselect/1.11.8/angularjs-dropdown-multiselect.min.js"); 
            console.log("angularjs-dropdown-multiselect Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-ie8-build" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-ie8-build/1.4.7/angular.min.js"); 
            console.log("angularjs-ie8-build Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-nvd3-directives" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-nvd3-directives/0.0.8/angularjs-nvd3-directives.min.js"); 
            console.log("angularjs-nvd3-directives Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-pdf" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-pdf/2.0.0/angular-pdf.min.js"); 
            console.log("angularjs-pdf Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-scroll-glue" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-scroll-glue/2.2.0/scrollglue.min.js"); 
            console.log("angularjs-scroll-glue Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-slider/6.4.3/rzslider.min.js"); 
            console.log("angularjs-slider Loaded Successfully");
            }
            
            
            if (args[i] == "angularjs-toaster" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/2.2.0/toaster.min.js"); 
            console.log("angularjs-toaster Loaded Successfully");
            }
            
            
            if (args[i] == "angularLocalStorage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularLocalStorage/0.3.2/angularLocalStorage.min.js"); 
            console.log("angularLocalStorage Loaded Successfully");
            }
            
            
            if (args[i] == "angularSubkit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angularSubkit/1.0.3/angularsubkit.min.js"); 
            console.log("angularSubkit Loaded Successfully");
            }
            
            
            if (args[i] == "angulartics-google-analytics" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angulartics-google-analytics/0.4.0/angulartics-ga.min.js"); 
            console.log("angulartics-google-analytics Loaded Successfully");
            }
            
            
            if (args[i] == "angulartics" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/angulartics/1.5.0/angulartics.min.js"); 
            console.log("angulartics Loaded Successfully");
            }
            
            
            if (args[i] == "AniJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/AniJS/0.9.3/anijs-min.js"); 
            console.log("AniJS Loaded Successfully");
            }
            
            
            if (args[i] == "anima" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/anima/0.4.0/anima.min.js"); 
            console.log("anima Loaded Successfully");
            }
            
            
            if (args[i] == "animateCSS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/animateCSS/1.2.2/jquery.animatecss.min.js"); 
            console.log("animateCSS Loaded Successfully");
            }
            
            
            if (args[i] == "animated-header" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/animated-header/0.0.1/js/cbpAnimatedHeader.min.js"); 
            console.log("animated-header Loaded Successfully");
            }
            
            
            if (args[i] == "animatelo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/animatelo/1.0.3/animatelo.min.js"); 
            console.log("animatelo Loaded Successfully");
            }
            
            
            if (args[i] == "animateplus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/animateplus/2.0.0/animateplus.min.js"); 
            console.log("animateplus Loaded Successfully");
            }
            
            
            if (args[i] == "animations" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/animations/2.1/js/animations.min.js"); 
            console.log("animations Loaded Successfully");
            }
            
            
            if (args[i] == "animejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"); 
            console.log("animejs Loaded Successfully");
            }
            
            
            if (args[i] == "animo.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/animo.js/1.0.3/animo.min.js"); 
            console.log("animo.js Loaded Successfully");
            }
            
            
            if (args[i] == "animsition" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.min.js"); 
            console.log("animsition Loaded Successfully");
            }
            
            
            if (args[i] == "annyang" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"); 
            console.log("annyang Loaded Successfully");
            }
            
            
            if (args[i] == "antd-mobile" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/antd-mobile/2.1.3/antd-mobile.min.js"); 
            console.log("antd-mobile Loaded Successfully");
            }
            
            
            if (args[i] == "antd" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/antd/3.1.0/antd.min.js"); 
            console.log("antd Loaded Successfully");
            }
            
            
            if (args[i] == "antimoderate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/antimoderate/0.0.2/antimoderate.min.js"); 
            console.log("antimoderate Loaded Successfully");
            }
            
            
            if (args[i] == "antiscroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/antiscroll/0.9/antiscroll.min.js"); 
            console.log("antiscroll Loaded Successfully");
            }
            
            
            if (args[i] == "anyjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/anyjs/1.0.6/any.min.js"); 
            console.log("anyjs Loaded Successfully");
            }
            
            
            if (args[i] == "anythingslider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/anythingslider/1.9.7/js/jquery.anythingslider.min.js"); 
            console.log("anythingslider Loaded Successfully");
            }
            
            
            if (args[i] == "aos" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aos/2.2.0/aos.js"); 
            console.log("aos Loaded Successfully");
            }
            
            
            if (args[i] == "aphrodite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aphrodite/1.2.5/aphrodite.min.js"); 
            console.log("aphrodite Loaded Successfully");
            }
            
            
            if (args[i] == "api-check" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/api-check/7.5.5/api-check.min.js"); 
            console.log("api-check Loaded Successfully");
            }
            
            
            if (args[i] == "aping" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aping/1.4.1/aping.min.js"); 
            console.log("aping Loaded Successfully");
            }
            
            
            if (args[i] == "aplayer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.6.0/APlayer.min.js"); 
            console.log("aplayer Loaded Successfully");
            }
            
            
            if (args[i] == "apng-canvas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/apng-canvas/2.1.1/apng-canvas.min.js"); 
            console.log("apng-canvas Loaded Successfully");
            }
            
            
            if (args[i] == "app-loading" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/app-loading/0.0.51/app-loading.min.js"); 
            console.log("app-loading Loaded Successfully");
            }
            
            
            if (args[i] == "appbase-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/appbase-js/2.2.1/appbase.js"); 
            console.log("appbase-js Loaded Successfully");
            }
            
            
            if (args[i] == "approvejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/approvejs/3.1.2/approve.min.js"); 
            console.log("approvejs Loaded Successfully");
            }
            
            
            if (args[i] == "aragonite-form-validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aragonite-form-validator/1.1.2/js/aragonite.min.js"); 
            console.log("aragonite-form-validator Loaded Successfully");
            }
            
            
            if (args[i] == "arbor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/arbor/0.91.0/arbor.min.js"); 
            console.log("arbor Loaded Successfully");
            }
            
            
            if (args[i] == "architect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/architect/0.0.6/architect.min.js"); 
            console.log("architect Loaded Successfully");
            }
            
            
            if (args[i] == "arrive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js"); 
            console.log("arrive Loaded Successfully");
            }
            
            
            if (args[i] == "artDialog" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/artDialog/7.0.0/dialog.js"); 
            console.log("artDialog Loaded Successfully");
            }
            
            
            if (args[i] == "asciidoctor.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.6-preview.4/asciidoctor.min.js"); 
            console.log("asciidoctor.js Loaded Successfully");
            }
            
            
            if (args[i] == "asciinema-player" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/asciinema-player/2.4.1/asciinema-player.min.js"); 
            console.log("asciinema-player Loaded Successfully");
            }
            
            
            if (args[i] == "asmCrypto" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/asmCrypto/0.0.12/asmcrypto.js"); 
            console.log("asmCrypto Loaded Successfully");
            }
            
            
            if (args[i] == "async" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/async/2.6.0/async.min.js"); 
            console.log("async Loaded Successfully");
            }
            
            
            if (args[i] == "asynquence-contrib" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/asynquence-contrib/0.28.2/contrib.js"); 
            console.log("asynquence-contrib Loaded Successfully");
            }
            
            
            if (args[i] == "asynquence" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/asynquence/0.10.2/asq.js"); 
            console.log("asynquence Loaded Successfully");
            }
            
            
            if (args[i] == "at.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/at.js/1.5.4/js/jquery.atwho.min.js"); 
            console.log("at.js Loaded Successfully");
            }
            
            
            if (args[i] == "atmosphere" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/atmosphere/2.2.9/atmosphere.min.js"); 
            console.log("atmosphere Loaded Successfully");
            }
            
            
            if (args[i] == "atrament.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/atrament.js/0.2.3/atrament.min.js"); 
            console.log("atrament.js Loaded Successfully");
            }
            
            
            if (args[i] == "attrchange" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/attrchange/2.0.1/attrchange.min.js"); 
            console.log("attrchange Loaded Successfully");
            }
            
            
            if (args[i] == "audio5js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/audio5js/0.1.10/audio5.min.js"); 
            console.log("audio5js Loaded Successfully");
            }
            
            
            if (args[i] == "audiojs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/audiojs/1.0.1/audio.min.js"); 
            console.log("audiojs Loaded Successfully");
            }
            
            
            if (args[i] == "audiosynth" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/audiosynth/1.0.0/audiosynth.min.js"); 
            console.log("audiosynth Loaded Successfully");
            }
            
            
            if (args[i] == "augment.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/augment.js/1.0.0/augment.min.js"); 
            console.log("augment.js Loaded Successfully");
            }
            
            
            if (args[i] == "augment" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/augment/4.3.0/augment.min.js"); 
            console.log("augment Loaded Successfully");
            }
            
            
            if (args[i] == "aui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aui/7.4.0/aui/js/aui.min.js"); 
            console.log("aui Loaded Successfully");
            }
            
            
            if (args[i] == "aurelia" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aurelia/1.0.2/aurelia-core.min.js"); 
            console.log("aurelia Loaded Successfully");
            }
            
            
            if (args[i] == "aurora.js-aac" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aurora.js-aac/0.1.0/aac.min.js"); 
            console.log("aurora.js-aac Loaded Successfully");
            }
            
            
            if (args[i] == "aurora.js-alac" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aurora.js-alac/0.1.0/alac.min.js"); 
            console.log("aurora.js-alac Loaded Successfully");
            }
            
            
            if (args[i] == "aurora.js-flac" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aurora.js-flac/0.2.1/flac.min.js"); 
            console.log("aurora.js-flac Loaded Successfully");
            }
            
            
            if (args[i] == "aurora.js-mp3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aurora.js-mp3/0.1.0/mp3.min.js"); 
            console.log("aurora.js-mp3 Loaded Successfully");
            }
            
            
            if (args[i] == "aurora.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aurora.js/0.4.2/aurora.min.js"); 
            console.log("aurora.js Loaded Successfully");
            }
            
            
            if (args[i] == "authy-form-helpers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/authy-form-helpers/2.3/form.authy.min.js"); 
            console.log("authy-form-helpers Loaded Successfully");
            }
            
            
            if (args[i] == "authy-forms.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/authy-forms.js/2.2/form.authy.min.js"); 
            console.log("authy-forms.js Loaded Successfully");
            }
            
            
            if (args[i] == "autocompeter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/autocompeter/1.2.3/autocompeter.min.js"); 
            console.log("autocompeter Loaded Successfully");
            }
            
            
            if (args[i] == "autocomplete.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/autocomplete.js/0.29.0/autocomplete.jquery.min.js"); 
            console.log("autocomplete.js Loaded Successfully");
            }
            
            
            if (args[i] == "autolinker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/autolinker/1.6.0/Autolinker.min.js"); 
            console.log("autolinker Loaded Successfully");
            }
            
            
            if (args[i] == "autonumeric" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/autonumeric/4.0.3/autoNumeric.min.js"); 
            console.log("autonumeric Loaded Successfully");
            }
            
            
            if (args[i] == "autosize.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/autosize.js/4.0.0/autosize.min.js"); 
            console.log("autosize.js Loaded Successfully");
            }
            
            
            if (args[i] == "autotrack" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/autotrack/2.4.1/autotrack.js"); 
            console.log("autotrack Loaded Successfully");
            }
            
            
            if (args[i] == "avalon.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/avalon.js/2.2.7/avalon.min.js"); 
            console.log("avalon.js Loaded Successfully");
            }
            
            
            if (args[i] == "avgrund" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/avgrund/0.1.0/js/avgrund.min.js"); 
            console.log("avgrund Loaded Successfully");
            }
            
            
            if (args[i] == "awesomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.2/awesomplete.min.js"); 
            console.log("awesomplete Loaded Successfully");
            }
            
            
            if (args[i] == "aws-sdk" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/aws-sdk/2.176.0/aws-sdk.min.js"); 
            console.log("aws-sdk Loaded Successfully");
            }
            
            
            if (args[i] == "axe-core" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/axe-core/2.6.1/axe.min.js"); 
            console.log("axe-core Loaded Successfully");
            }
            
            
            if (args[i] == "axios" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"); 
            console.log("axios Loaded Successfully");
            }
            
            
            if (args[i] == "babel-core" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"); 
            console.log("babel-core Loaded Successfully");
            }
            
            
            if (args[i] == "babel-polyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"); 
            console.log("babel-polyfill Loaded Successfully");
            }
            
            
            if (args[i] == "babel-standalone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"); 
            console.log("babel-standalone Loaded Successfully");
            }
            
            
            if (args[i] == "babelfish" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/babelfish/1.1.2/babelfish.min.js"); 
            console.log("babelfish Loaded Successfully");
            }
            
            
            if (args[i] == "babili-standalone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/babili-standalone/0.0.10/babili.min.js"); 
            console.log("babili-standalone Loaded Successfully");
            }
            
            
            if (args[i] == "babylonjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/babylonjs/2.5.0/babylon.js"); 
            console.log("babylonjs Loaded Successfully");
            }
            
            
            if (args[i] == "backbone-associations" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone-associations/0.6.2/backbone-associations-min.js"); 
            console.log("backbone-associations Loaded Successfully");
            }
            
            
            if (args[i] == "backbone-forms" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone-forms/0.14.1/backbone-forms.min.js"); 
            console.log("backbone-forms Loaded Successfully");
            }
            
            
            if (args[i] == "backbone-localstorage.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min.js"); 
            console.log("backbone-localstorage.js Loaded Successfully");
            }
            
            
            if (args[i] == "backbone-pageable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone-pageable/1.4.8/backbone-pageable.min.js"); 
            console.log("backbone-pageable Loaded Successfully");
            }
            
            
            if (args[i] == "backbone-react-component" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone-react-component/1.0.0/backbone-react-component-min.js"); 
            console.log("backbone-react-component Loaded Successfully");
            }
            
            
            if (args[i] == "backbone-relational" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone-relational/0.10.0/backbone-relational.min.js"); 
            console.log("backbone-relational Loaded Successfully");
            }
            
            
            if (args[i] == "backbone-super" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone-super/1.0.4/backbone-super-min.js"); 
            console.log("backbone-super Loaded Successfully");
            }
            
            
            if (args[i] == "backbone-tastypie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone-tastypie/0.2/backbone-tastypie.min.js"); 
            console.log("backbone-tastypie Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.babysitter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.babysitter/0.1.12/backbone.babysitter.min.js"); 
            console.log("backbone.babysitter Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.collectionView" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.collectionView/1.3.4/backbone.collectionView.min.js"); 
            console.log("backbone.collectionView Loaded Successfully");
            }
            
            
            if (args[i] == "Backbone.dualStorage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Backbone.dualStorage/1.4.1/backbone.dualstorage.min.js"); 
            console.log("Backbone.dualStorage Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.epoxy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.epoxy/1.3.1/backbone.epoxy.min.js"); 
            console.log("backbone.epoxy Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.eventbinder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.eventbinder/0.1.0/backbone.eventbinder.min.js"); 
            console.log("backbone.eventbinder Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.fetch-cache" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.fetch-cache/1.1.2/backbone.fetch-cache.min.js"); 
            console.log("backbone.fetch-cache Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js"); 
            console.log("backbone.js Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.layoutmanager" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.layoutmanager/1.0.0/backbone.layoutmanager.min.js"); 
            console.log("backbone.layoutmanager Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.marionette" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.marionette/3.5.1/backbone.marionette.min.js"); 
            console.log("backbone.marionette Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.modal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.modal/1.1.5/backbone.modal-bundled-min.js"); 
            console.log("backbone.modal Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.modelbinder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.modelbinder/1.1.0/Backbone.ModelBinder.min.js"); 
            console.log("backbone.modelbinder Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.obscura" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.obscura/0.1.6/backbone.obscura.min.js"); 
            console.log("backbone.obscura Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.paginator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.paginator/2.0.6/backbone.paginator.min.js"); 
            console.log("backbone.paginator Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.projections" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.projections/1.0.0/backbone.projections.min.js"); 
            console.log("backbone.projections Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.radio" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.radio/2.0.0/backbone.radio.min.js"); 
            console.log("backbone.radio Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.ribs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.ribs/0.2.2/backbone.ribs.min.js"); 
            console.log("backbone.ribs Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.routefilter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.routefilter/0.2.0/backbone.routefilter.min.js"); 
            console.log("backbone.routefilter Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.stickit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.stickit/0.9.2/backbone.stickit.min.js"); 
            console.log("backbone.stickit Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.syphon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.syphon/0.7.0/backbone.syphon.min.js"); 
            console.log("backbone.syphon Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.validation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.validation/0.11.5/backbone-validation-min.js"); 
            console.log("backbone.validation Loaded Successfully");
            }
            
            
            if (args[i] == "backbone.wreqr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backbone.wreqr/1.4.0/backbone.wreqr.min.js"); 
            console.log("backbone.wreqr Loaded Successfully");
            }
            
            
            if (args[i] == "backgrid.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/backgrid.js/0.3.8/backgrid.min.js"); 
            console.log("backgrid.js Loaded Successfully");
            }
            
            
            if (args[i] == "background-blur" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/background-blur/0.1.3/background-blur.min.js"); 
            console.log("background-blur Loaded Successfully");
            }
            
            
            if (args[i] == "background-check" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/background-check/1.2.2/background-check.min.js"); 
            console.log("background-check Loaded Successfully");
            }
            
            
            if (args[i] == "bacon.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bacon.js/1.0.1/Bacon.min.js"); 
            console.log("bacon.js Loaded Successfully");
            }
            
            
            if (args[i] == "baffle.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/baffle.js/0.3.6/baffle.min.js"); 
            console.log("baffle.js Loaded Successfully");
            }
            
            
            if (args[i] == "bagjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bagjs/3.0.0/bag.min.js"); 
            console.log("bagjs Loaded Successfully");
            }
            
            
            if (args[i] == "baguettebox.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.9.1/baguetteBox.min.js"); 
            console.log("baguettebox.js Loaded Successfully");
            }
            
            
            if (args[i] == "balance-text" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/balance-text/3.2.0/balancetext.min.js"); 
            console.log("balance-text Loaded Successfully");
            }
            
            
            if (args[i] == "balupton-jquery-history" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/balupton-jquery-history/1.5.0-final/scripts/jquery.history.min.js"); 
            console.log("balupton-jquery-history Loaded Successfully");
            }
            
            
            if (args[i] == "baobab" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/baobab/2.5.0/baobab.js"); 
            console.log("baobab Loaded Successfully");
            }
            
            
            if (args[i] == "barba.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.min.js"); 
            console.log("barba.js Loaded Successfully");
            }
            
            
            if (args[i] == "barman" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/barman/0.4.2/barman.min.js"); 
            console.log("barman Loaded Successfully");
            }
            
            
            if (args[i] == "barn" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/barn/0.2.3/barn.min.js"); 
            console.log("barn Loaded Successfully");
            }
            
            
            if (args[i] == "Base64" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Base64/1.0.1/base64.min.js"); 
            console.log("Base64 Loaded Successfully");
            }
            
            
            if (args[i] == "basicModal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/basicModal/3.3.9/basicModal.min.js"); 
            console.log("basicModal Loaded Successfully");
            }
            
            
            if (args[i] == "basil.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/basil.js/0.4.5/basil.min.js"); 
            console.log("basil.js Loaded Successfully");
            }
            
            
            if (args[i] == "basis.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/basis.js/1.11.1/basis.min.js"); 
            console.log("basis.js Loaded Successfully");
            }
            
            
            if (args[i] == "basket.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/basket.js/0.5.2/basket.full.min.js"); 
            console.log("basket.js Loaded Successfully");
            }
            
            
            if (args[i] == "batman.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/batman.js/0.16.0/batman.min.js"); 
            console.log("batman.js Loaded Successfully");
            }
            
            
            if (args[i] == "bean" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bean/1.0.15/bean.min.js"); 
            console.log("bean Loaded Successfully");
            }
            
            
            if (args[i] == "beepjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/beepjs/0.0.1/beep.min.js"); 
            console.log("beepjs Loaded Successfully");
            }
            
            
            if (args[i] == "beeplay" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/beeplay/0.0.5/beeplay.min.js"); 
            console.log("beeplay Loaded Successfully");
            }
            
            
            if (args[i] == "behaviortree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/behaviortree/1.0.4/btree-complete.min.js"); 
            console.log("behaviortree Loaded Successfully");
            }
            
            
            if (args[i] == "benchmark" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/benchmark/2.1.4/benchmark.min.js"); 
            console.log("benchmark Loaded Successfully");
            }
            
            
            if (args[i] == "bespoke.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bespoke.js/1.1.0/bespoke.min.js"); 
            console.log("bespoke.js Loaded Successfully");
            }
            
            
            if (args[i] == "better-dateinput-polyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/better-dateinput-polyfill/2.0.2/better-dateinput-polyfill.min.js"); 
            console.log("better-dateinput-polyfill Loaded Successfully");
            }
            
            
            if (args[i] == "big-integer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/big-integer/1.6.26/BigInteger.min.js"); 
            console.log("big-integer Loaded Successfully");
            }
            
            
            if (args[i] == "big.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/big.js/5.0.3/big.min.js"); 
            console.log("big.js Loaded Successfully");
            }
            
            
            if (args[i] == "bigfoot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bigfoot/2.1.4/bigfoot.min.js"); 
            console.log("bigfoot Loaded Successfully");
            }
            
            
            if (args[i] == "bignumber.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bignumber.js/5.0.0/bignumber.min.js"); 
            console.log("bignumber.js Loaded Successfully");
            }
            
            
            if (args[i] == "bigslide.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bigslide.js/0.12.0/bigSlide.min.js"); 
            console.log("bigslide.js Loaded Successfully");
            }
            
            
            if (args[i] == "BigVideo.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/BigVideo.js/1.1.5/lib/bigvideo.min.js"); 
            console.log("BigVideo.js Loaded Successfully");
            }
            
            
            if (args[i] == "billboard.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/billboard.js/1.2.0/billboard.min.js"); 
            console.log("billboard.js Loaded Successfully");
            }
            
            
            if (args[i] == "bitcoinjs-lib" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bitcoinjs-lib/0.2.0-1/bitcoinjs-min.js"); 
            console.log("bitcoinjs-lib Loaded Successfully");
            }
            
            
            if (args[i] == "bitset.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bitset.js/4.0.1/bitset.min.js"); 
            console.log("bitset.js Loaded Successfully");
            }
            
            
            if (args[i] == "bla" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bla/1.9.0/bla.min.js"); 
            console.log("bla Loaded Successfully");
            }
            
            
            if (args[i] == "blackbaud-skyux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blackbaud-skyux/1.19.1/js/sky.min.js"); 
            console.log("blackbaud-skyux Loaded Successfully");
            }
            
            
            if (args[i] == "blanket.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blanket.js/1.1.4/blanket.min.js"); 
            console.log("blanket.js Loaded Successfully");
            }
            
            
            if (args[i] == "blazy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blazy/1.8.2/blazy.min.js"); 
            console.log("blazy Loaded Successfully");
            }
            
            
            if (args[i] == "blendui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blendui/0.0.4/BlendHybridUI.min.js"); 
            console.log("blendui Loaded Successfully");
            }
            
            
            if (args[i] == "blissfuljs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blissfuljs/1.0.4/bliss.min.js"); 
            console.log("blissfuljs Loaded Successfully");
            }
            
            
            if (args[i] == "blob-polyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blob-polyfill/2.0.20171115/Blob.min.js"); 
            console.log("blob-polyfill Loaded Successfully");
            }
            
            
            if (args[i] == "blob-util" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blob-util/1.3.0/blob-util.min.js"); 
            console.log("blob-util Loaded Successfully");
            }
            
            
            if (args[i] == "blockadblock" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blockadblock/3.2.1/blockadblock.min.js"); 
            console.log("blockadblock Loaded Successfully");
            }
            
            
            if (args[i] == "bluebird" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.5.1/bluebird.min.js"); 
            console.log("bluebird Loaded Successfully");
            }
            
            
            if (args[i] == "blueimp-file-upload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.19.2/js/jquery.fileupload.min.js"); 
            console.log("blueimp-file-upload Loaded Successfully");
            }
            
            
            if (args[i] == "blueimp-gallery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.29.0/js/blueimp-gallery.min.js"); 
            console.log("blueimp-gallery Loaded Successfully");
            }
            
            
            if (args[i] == "blueimp-JavaScript-Templates" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blueimp-JavaScript-Templates/3.11.0/js/tmpl.min.js"); 
            console.log("blueimp-JavaScript-Templates Loaded Successfully");
            }
            
            
            if (args[i] == "blueimp-load-image" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/2.17.1/load-image.min.js"); 
            console.log("blueimp-load-image Loaded Successfully");
            }
            
            
            if (args[i] == "blueimp-md5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.min.js"); 
            console.log("blueimp-md5 Loaded Successfully");
            }
            
            
            if (args[i] == "blueprint" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/blueprint/2.1.5/blueprint.min.js"); 
            console.log("blueprint Loaded Successfully");
            }
            
            
            if (args[i] == "boba.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/boba.js/1.0.3/boba.min.js"); 
            console.log("boba.js Loaded Successfully");
            }
            
            
            if (args[i] == "bodymovin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/4.13.0/bodymovin.min.js"); 
            console.log("bodymovin Loaded Successfully");
            }
            
            
            if (args[i] == "boexfi" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/boexfi/1.0.0/mijs.js"); 
            console.log("boexfi Loaded Successfully");
            }
            
            
            if (args[i] == "bokeh" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bokeh/0.12.13/bokeh.min.js"); 
            console.log("bokeh Loaded Successfully");
            }
            
            
            if (args[i] == "bonsai" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bonsai/0.4.5/bonsai.min.js"); 
            console.log("bonsai Loaded Successfully");
            }
            
            
            if (args[i] == "bonzo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bonzo/2.0.0/bonzo.min.js"); 
            console.log("bonzo Loaded Successfully");
            }
            
            
            if (args[i] == "booking-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/booking-js/1.23.0/booking.min.js"); 
            console.log("booking-js Loaded Successfully");
            }
            
            
            if (args[i] == "bootbox.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"); 
            console.log("bootbox.js Loaded Successfully");
            }
            
            
            if (args[i] == "bootcards" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootcards/1.1.2/js/bootcards.min.js"); 
            console.log("bootcards Loaded Successfully");
            }
            
            
            if (args[i] == "bootpag" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootpag/1.0.7/jquery.bootpag.min.js"); 
            console.log("bootpag Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-3-typeahead" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-3-typeahead/4.0.2/bootstrap3-typeahead.min.js"); 
            console.log("bootstrap-3-typeahead Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-calendar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-calendar/0.2.5/js/calendar.min.js"); 
            console.log("bootstrap-calendar Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-checkbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-checkbox/1.4.0/bootstrap-checkbox.min.js"); 
            console.log("bootstrap-checkbox Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-colorpicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.1/js/bootstrap-colorpicker.min.js"); 
            console.log("bootstrap-colorpicker Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-combobox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-combobox/1.1.8/js/bootstrap-combobox.min.js"); 
            console.log("bootstrap-combobox Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-confirmation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-confirmation/1.0.7/bootstrap-confirmation.min.js"); 
            console.log("bootstrap-confirmation Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-contextmenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-contextmenu/0.3.4/bootstrap-contextmenu.min.js"); 
            console.log("bootstrap-contextmenu Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-datepaginator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepaginator/1.1.0/bootstrap-datepaginator.min.js"); 
            console.log("bootstrap-datepaginator Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-datepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.min.js"); 
            console.log("bootstrap-datepicker Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-daterangepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/2.1.27/daterangepicker.min.js"); 
            console.log("bootstrap-daterangepicker Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-datetimepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"); 
            console.log("bootstrap-datetimepicker Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-drawer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-drawer/1.0.6/js/drawer.min.js"); 
            console.log("bootstrap-drawer Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-fileinput" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.6/js/fileinput.min.js"); 
            console.log("bootstrap-fileinput Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-filestyle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-filestyle/2.1.0/bootstrap-filestyle.min.js"); 
            console.log("bootstrap-filestyle Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-formhelpers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-formhelpers/2.3.0/js/bootstrap-formhelpers.min.js"); 
            console.log("bootstrap-formhelpers Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-growl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js"); 
            console.log("bootstrap-growl Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-hover-dropdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-hover-dropdown/2.2.1/bootstrap-hover-dropdown.min.js"); 
            console.log("bootstrap-hover-dropdown Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-iconpicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.9.0/js/bootstrap-iconpicker.min.js"); 
            console.log("bootstrap-iconpicker Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-lightbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-lightbox/0.7.0/bootstrap-lightbox.min.js"); 
            console.log("bootstrap-lightbox Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-magnify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-magnify/0.3.0/js/bootstrap-magnify.min.js"); 
            console.log("bootstrap-magnify Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-markdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-markdown/2.10.0/js/bootstrap-markdown.min.js"); 
            console.log("bootstrap-markdown Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-material-datetimepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-datetimepicker/2.7.1/js/bootstrap-material-datetimepicker.min.js"); 
            console.log("bootstrap-material-datetimepicker Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-material-design" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/4.0.2/bootstrap-material-design.umd.min.js"); 
            console.log("bootstrap-material-design Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-maxlength" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-maxlength/1.7.0/bootstrap-maxlength.min.js"); 
            console.log("bootstrap-maxlength Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-modal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-modal/2.2.6/js/bootstrap-modalmanager.min.js"); 
            console.log("bootstrap-modal Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-multiselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/js/bootstrap-multiselect.min.js"); 
            console.log("bootstrap-multiselect Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-notify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-notify/0.2.0/js/bootstrap-notify.min.js"); 
            console.log("bootstrap-notify Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-progressbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-progressbar/0.9.0/bootstrap-progressbar.min.js"); 
            console.log("bootstrap-progressbar Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-rating-input" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rating-input/0.4.0/bootstrap-rating-input.min.js"); 
            console.log("bootstrap-rating-input Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-rating" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rating/1.4.0/bootstrap-rating.min.js"); 
            console.log("bootstrap-rating Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"); 
            console.log("bootstrap-select Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-show-password" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-show-password/1.1.2/bootstrap-show-password.min.js"); 
            console.log("bootstrap-show-password Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-sidebar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sidebar/0.2.2/js/sidebar.min.js"); 
            console.log("bootstrap-sidebar Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.0.0/bootstrap-slider.min.js"); 
            console.log("bootstrap-slider Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-star-rating" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-star-rating/4.0.3/js/star-rating.min.js"); 
            console.log("bootstrap-star-rating Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-submenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-submenu/2.0.4/js/bootstrap-submenu.min.js"); 
            console.log("bootstrap-submenu Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-sweetalert" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js"); 
            console.log("bootstrap-sweetalert Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-switch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-switch/3.3.4/js/bootstrap-switch.min.js"); 
            console.log("bootstrap-switch Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.11.1/bootstrap-table.min.js"); 
            console.log("bootstrap-table Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-tagsinput" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.min.js"); 
            console.log("bootstrap-tagsinput Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-timepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-timepicker/0.5.2/js/bootstrap-timepicker.min.js"); 
            console.log("bootstrap-timepicker Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-toggle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"); 
            console.log("bootstrap-toggle Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-tokenfield" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tokenfield/0.12.0/bootstrap-tokenfield.min.js"); 
            console.log("bootstrap-tokenfield Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-touchspin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-touchspin/3.1.2/jquery.bootstrap-touchspin.min.js"); 
            console.log("bootstrap-touchspin Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-tour" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tour/0.11.0/js/bootstrap-tour.min.js"); 
            console.log("bootstrap-tour Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-treeview" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-treeview/1.2.0/bootstrap-treeview.min.js"); 
            console.log("bootstrap-treeview Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-ui-datetime-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-ui-datetime-picker/2.5.4/datetime-picker.min.js"); 
            console.log("bootstrap-ui-datetime-picker Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"); 
            console.log("bootstrap-validator Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-waitingfor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-waitingfor/1.2.4/bootstrap-waitingfor.min.js"); 
            console.log("bootstrap-waitingfor Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-without-jquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-without-jquery/0.6.1/bootstrap3/bootstrap-without-jquery.min.js"); 
            console.log("bootstrap-without-jquery Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap-year-calendar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-year-calendar/1.1.1/js/bootstrap-year-calendar.min.js"); 
            console.log("bootstrap-year-calendar Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap.native" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.21/bootstrap-native.min.js"); 
            console.log("bootstrap.native Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap3-contact-form" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-contact-form/1.4.1/js/contact-form.min.js"); 
            console.log("bootstrap3-contact-form Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap3-dialog" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.35.4/js/bootstrap-dialog.min.js"); 
            console.log("bootstrap3-dialog Loaded Successfully");
            }
            
            
            if (args[i] == "bootstrap3-wysiwyg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-wysiwyg/0.3.3/bootstrap3-wysihtml5.all.min.js"); 
            console.log("bootstrap3-wysiwyg Loaded Successfully");
            }
            
            
            if (args[i] == "bottlejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bottlejs/1.6.3/bottle.min.js"); 
            console.log("bottlejs Loaded Successfully");
            }
            
            
            if (args[i] == "bottleneck" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bottleneck/1.16.0/bottleneck.min.js"); 
            console.log("bottleneck Loaded Successfully");
            }
            
            
            if (args[i] == "botui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/botui/0.3.4/botui.min.js"); 
            console.log("botui Loaded Successfully");
            }
            
            
            if (args[i] == "bowser" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bowser/1.9.1/bowser.min.js"); 
            console.log("bowser Loaded Successfully");
            }
            
            
            if (args[i] == "bPopup" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bPopup/0.11.0/jquery.bpopup.min.js"); 
            console.log("bPopup Loaded Successfully");
            }
            
            
            if (args[i] == "brain" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/brain/0.6.3/brain.min.js"); 
            console.log("brain Loaded Successfully");
            }
            
            
            if (args[i] == "breezejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/breezejs/1.5.7/breeze.min.js"); 
            console.log("breezejs Loaded Successfully");
            }
            
            
            if (args[i] == "bricklayer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bricklayer/0.4.3/bricklayer.min.js"); 
            console.log("bricklayer Loaded Successfully");
            }
            
            
            if (args[i] == "bricks.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bricks.js/1.8.0/bricks.min.js"); 
            console.log("bricks.js Loaded Successfully");
            }
            
            
            if (args[i] == "Bridge.NET" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Bridge.NET/16.5.0/bridge.min.js"); 
            console.log("Bridge.NET Loaded Successfully");
            }
            
            
            if (args[i] == "britecharts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/britecharts/2.4.9/bundled/britecharts.min.js"); 
            console.log("britecharts Loaded Successfully");
            }
            
            
            if (args[i] == "Broadway" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Broadway/0.1.0/Player.min.js"); 
            console.log("Broadway Loaded Successfully");
            }
            
            
            if (args[i] == "browser-deeplink" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/browser-deeplink/1.0.1/browser-deeplink.min.js"); 
            console.log("browser-deeplink Loaded Successfully");
            }
            
            
            if (args[i] == "brython" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/brython/3.4.0/brython.min.js"); 
            console.log("brython Loaded Successfully");
            }
            
            
            if (args[i] == "bsjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bsjs/0.3.0/bsjs.min.js"); 
            console.log("bsjs Loaded Successfully");
            }
            
            
            if (args[i] == "bttrlazyloading" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bttrlazyloading/1.0.8/jquery.bttrlazyloading.min.js"); 
            console.log("bttrlazyloading Loaded Successfully");
            }
            
            
            if (args[i] == "buckets" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/buckets/1.90.0/buckets.min.js"); 
            console.log("buckets Loaded Successfully");
            }
            
            
            if (args[i] == "bucky" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bucky/0.2.8/bucky.min.js"); 
            console.log("bucky Loaded Successfully");
            }
            
            
            if (args[i] == "burger" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/burger/2.0.2/scripts/burger.min.js"); 
            console.log("burger Loaded Successfully");
            }
            
            
            if (args[i] == "buy-button-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/buy-button-js/0.5.1/buybutton.min.js"); 
            console.log("buy-button-js Loaded Successfully");
            }
            
            
            if (args[i] == "buzz" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/buzz/1.2.0/buzz.min.js"); 
            console.log("buzz Loaded Successfully");
            }
            
            
            if (args[i] == "bxslider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.js"); 
            console.log("bxslider Loaded Successfully");
            }
            
            
            if (args[i] == "c3-angular" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/c3-angular/1.4.0/c3-angular.min.js"); 
            console.log("c3-angular Loaded Successfully");
            }
            
            
            if (args[i] == "c3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.18/c3.min.js"); 
            console.log("c3 Loaded Successfully");
            }
            
            
            if (args[i] == "cache.adderall" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cache.adderall/1.0.0/cache.adderall.js"); 
            console.log("cache.adderall Loaded Successfully");
            }
            
            
            if (args[i] == "cachep2p" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cachep2p/0.1.6/cachep2p.min.js"); 
            console.log("cachep2p Loaded Successfully");
            }
            
            
            if (args[i] == "cal-heatmap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cal-heatmap/3.6.2/cal-heatmap.min.js"); 
            console.log("cal-heatmap Loaded Successfully");
            }
            
            
            if (args[i] == "calendar-heatmap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/calendar-heatmap/0.4.1/calendar-heatmap.min.js"); 
            console.log("calendar-heatmap Loaded Successfully");
            }
            
            
            if (args[i] == "camanjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"); 
            console.log("camanjs Loaded Successfully");
            }
            
            
            if (args[i] == "Camera" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Camera/1.3.4/scripts/camera.min.js"); 
            console.log("Camera Loaded Successfully");
            }
            
            
            if (args[i] == "can.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/can.js/3.12.1/can.min.js"); 
            console.log("can.js Loaded Successfully");
            }
            
            
            if (args[i] == "cannon.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cannon.js/0.6.2/cannon.min.js"); 
            console.log("cannon.js Loaded Successfully");
            }
            
            
            if (args[i] == "canvas-nest.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/canvas-nest.js/1.0.1/canvas-nest.min.js"); 
            console.log("canvas-nest.js Loaded Successfully");
            }
            
            
            if (args[i] == "CanvasInput" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/CanvasInput/1.2.7/CanvasInput.min.js"); 
            console.log("CanvasInput Loaded Successfully");
            }
            
            
            if (args[i] == "canvasjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/canvasjs/1.7.0/canvasjs.min.js"); 
            console.log("canvasjs Loaded Successfully");
            }
            
            
            if (args[i] == "canvasXpress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/canvasXpress/18.1/canvasXpress.min.js"); 
            console.log("canvasXpress Loaded Successfully");
            }
            
            
            if (args[i] == "canvg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/canvg/1.4/canvg.min.js"); 
            console.log("canvg Loaded Successfully");
            }
            
            
            if (args[i] == "canvid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/canvid/1.6.0/canvid.min.js"); 
            console.log("canvid Loaded Successfully");
            }
            
            
            if (args[i] == "Captionator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Captionator/0.6/js/captionator-min.js"); 
            console.log("Captionator Loaded Successfully");
            }
            
            
            if (args[i] == "card" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/card/2.4.0/card.min.js"); 
            console.log("card Loaded Successfully");
            }
            
            
            if (args[i] == "Caret.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Caret.js/0.3.1/jquery.caret.min.js"); 
            console.log("Caret.js Loaded Successfully");
            }
            
            
            if (args[i] == "caret" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/caret/1.0.0/jquery.caret.min.js"); 
            console.log("caret Loaded Successfully");
            }
            
            
            if (args[i] == "cash" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cash/1.3.5/cash.min.js"); 
            console.log("cash Loaded Successfully");
            }
            
            
            if (args[i] == "casualjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/casualjs/0.1.2/casual.min.js"); 
            console.log("casualjs Loaded Successfully");
            }
            
            
            if (args[i] == "catiline" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/catiline/2.9.3/catiline.min.js"); 
            console.log("catiline Loaded Successfully");
            }
            
            
            if (args[i] == "cell" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cell/1.2.0/cell.min.js"); 
            console.log("cell Loaded Successfully");
            }
            
            
            if (args[i] == "cellx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cellx/1.7.57/cellx.min.js"); 
            console.log("cellx Loaded Successfully");
            }
            
            
            if (args[i] == "chai" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min.js"); 
            console.log("chai Loaded Successfully");
            }
            
            
            if (args[i] == "chainloading" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chainloading/1.1.1/chainloading.min.js"); 
            console.log("chainloading Loaded Successfully");
            }
            
            
            if (args[i] == "chainvas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chainvas/2.1/chainvas.min.js"); 
            console.log("chainvas Loaded Successfully");
            }
            
            
            if (args[i] == "chance" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chance/1.0.13/chance.min.js"); 
            console.log("chance Loaded Successfully");
            }
            
            
            if (args[i] == "chaplin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chaplin/0.11.3/chaplin.min.js"); 
            console.log("chaplin Loaded Successfully");
            }
            
            
            if (args[i] == "chardin.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chardin.js/0.1.3/chardinjs.min.js"); 
            console.log("chardin.js Loaded Successfully");
            }
            
            
            if (args[i] == "Chart.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"); 
            console.log("Chart.js Loaded Successfully");
            }
            
            
            if (args[i] == "chartist-plugin-legend" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chartist-plugin-legend/0.6.2/chartist-plugin-legend.min.js"); 
            console.log("chartist-plugin-legend Loaded Successfully");
            }
            
            
            if (args[i] == "chartist" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chartist/0.11.0/chartist.min.js"); 
            console.log("chartist Loaded Successfully");
            }
            
            
            if (args[i] == "chartjs-plugin-annotation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/0.5.7/chartjs-plugin-annotation.min.js"); 
            console.log("chartjs-plugin-annotation Loaded Successfully");
            }
            
            
            if (args[i] == "chartjs-plugin-zoom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-zoom/0.6.0/chartjs-plugin-zoom.min.js"); 
            console.log("chartjs-plugin-zoom Loaded Successfully");
            }
            
            
            if (args[i] == "chartkick" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chartkick/2.2.4/chartkick.min.js"); 
            console.log("chartkick Loaded Successfully");
            }
            
            
            if (args[i] == "checklist-model" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/checklist-model/0.11.0/checklist-model.min.js"); 
            console.log("checklist-model Loaded Successfully");
            }
            
            
            if (args[i] == "cheet.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cheet.js/0.3.3/cheet.min.js"); 
            console.log("cheet.js Loaded Successfully");
            }
            
            
            if (args[i] == "chess.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.2/chess.min.js"); 
            console.log("chess.js Loaded Successfully");
            }
            
            
            if (args[i] == "chibi" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chibi/3.0.9/chibi-min.js"); 
            console.log("chibi Loaded Successfully");
            }
            
            
            if (args[i] == "chirashi" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chirashi/6.5.0/chirashi.min.js"); 
            console.log("chirashi Loaded Successfully");
            }
            
            
            if (args[i] == "chocolat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chocolat/0.4.19/js/jquery.chocolat.min.js"); 
            console.log("chocolat Loaded Successfully");
            }
            
            
            if (args[i] == "choices.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/choices.js/3.0.2/choices.min.js"); 
            console.log("choices.js Loaded Successfully");
            }
            
            
            if (args[i] == "chosen" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.2/chosen.jquery.min.js"); 
            console.log("chosen Loaded Successfully");
            }
            
            
            if (args[i] == "chroma-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.5/chroma.min.js"); 
            console.log("chroma-js Loaded Successfully");
            }
            
            
            if (args[i] == "chromatism" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chromatism/3.0.0/chromatism.umd.js"); 
            console.log("chromatism Loaded Successfully");
            }
            
            
            if (args[i] == "chrome-frame" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"); 
            console.log("chrome-frame Loaded Successfully");
            }
            
            
            if (args[i] == "chrono-node" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chrono-node/1.3.5/chrono.min.js"); 
            console.log("chrono-node Loaded Successfully");
            }
            
            
            if (args[i] == "chrono" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chrono/1.0.5/chrono.min.js"); 
            console.log("chrono Loaded Successfully");
            }
            
            
            if (args[i] == "chronoline" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/chronoline/0.1.3/chronoline.min.js"); 
            console.log("chronoline Loaded Successfully");
            }
            
            
            if (args[i] == "cignium-hypermedia-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cignium-hypermedia-client/1.33.1/client.min.js"); 
            console.log("cignium-hypermedia-client Loaded Successfully");
            }
            
            
            if (args[i] == "cinnamon.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cinnamon.js/1.0.6/cinnamon.min.js"); 
            console.log("cinnamon.js Loaded Successfully");
            }
            
            
            if (args[i] == "circles" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/circles/0.0.6/circles.min.js"); 
            console.log("circles Loaded Successfully");
            }
            
            
            if (args[i] == "circliful" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/circliful/1.2.0/js/jquery.circliful.min.js"); 
            console.log("circliful Loaded Successfully");
            }
            
            
            if (args[i] == "circular-progress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/circular-progress/0.2.3/circular-progress.min.js"); 
            console.log("circular-progress Loaded Successfully");
            }
            
            
            if (args[i] == "ckan" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ckan/0.2.3/ckan.min.js"); 
            console.log("ckan Loaded Successfully");
            }
            
            
            if (args[i] == "ckeditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.8.0/ckeditor.js"); 
            console.log("ckeditor Loaded Successfully");
            }
            
            
            if (args[i] == "Clamp.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Clamp.js/0.5.1/clamp.min.js"); 
            console.log("Clamp.js Loaded Successfully");
            }
            
            
            if (args[i] == "clank" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clank/0.3.6/clank.min.js"); 
            console.log("clank Loaded Successfully");
            }
            
            
            if (args[i] == "clappr-chromecast-plugin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clappr-chromecast-plugin/0.0.6/clappr-chromecast-plugin.min.js"); 
            console.log("clappr-chromecast-plugin Loaded Successfully");
            }
            
            
            if (args[i] == "clappr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clappr/0.2.80/clappr.min.js"); 
            console.log("clappr Loaded Successfully");
            }
            
            
            if (args[i] == "clarinet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clarinet/0.11.0/clarinet.min.js"); 
            console.log("clarinet Loaded Successfully");
            }
            
            
            if (args[i] == "clarity-icons" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clarity-icons/0.10.20/clarity-icons.min.js"); 
            console.log("clarity-icons Loaded Successfully");
            }
            
            
            if (args[i] == "classie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/classie/1.0.1/classie.min.js"); 
            console.log("classie Loaded Successfully");
            }
            
            
            if (args[i] == "classlist" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/classlist/1.2.201711092/classList.min.js"); 
            console.log("classlist Loaded Successfully");
            }
            
            
            if (args[i] == "classnames" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/classnames/2.2.5/index.min.js"); 
            console.log("classnames Loaded Successfully");
            }
            
            
            if (args[i] == "cldrjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.0/cldr.min.js"); 
            console.log("cldrjs Loaded Successfully");
            }
            
            
            if (args[i] == "cleave.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.0.9/cleave.min.js"); 
            console.log("cleave.js Loaded Successfully");
            }
            
            
            if (args[i] == "clickspark.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clickspark.js/1.16.0/clickspark.min.js"); 
            console.log("clickspark.js Loaded Successfully");
            }
            
            
            if (args[i] == "ClientJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ClientJS/0.1.11/client.min.js"); 
            console.log("ClientJS Loaded Successfully");
            }
            
            
            if (args[i] == "clientside-haml-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clientside-haml-js/5.4/haml.min.js"); 
            console.log("clientside-haml-js Loaded Successfully");
            }
            
            
            if (args[i] == "clipboard-polyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.3.0/clipboard-polyfill.js"); 
            console.log("clipboard-polyfill Loaded Successfully");
            }
            
            
            if (args[i] == "clipboard.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js"); 
            console.log("clipboard.js Loaded Successfully");
            }
            
            
            if (args[i] == "clmtrackr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clmtrackr/1.0.2/clmtrackr.min.js"); 
            console.log("clmtrackr Loaded Successfully");
            }
            
            
            if (args[i] == "clndr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clndr/1.4.7/clndr.min.js"); 
            console.log("clndr Loaded Successfully");
            }
            
            
            if (args[i] == "clockpicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clockpicker/0.0.7/jquery-clockpicker.min.js"); 
            console.log("clockpicker Loaded Successfully");
            }
            
            
            if (args[i] == "clone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clone/2.1.1/clone.min.js"); 
            console.log("clone Loaded Successfully");
            }
            
            
            if (args[i] == "cloudinary-core" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.4.0/cloudinary-core.min.js"); 
            console.log("cloudinary-core Loaded Successfully");
            }
            
            
            if (args[i] == "cloudinary-jquery-file-upload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cloudinary-jquery-file-upload/2.4.0/cloudinary-jquery-file-upload.min.js"); 
            console.log("cloudinary-jquery-file-upload Loaded Successfully");
            }
            
            
            if (args[i] == "clusterize.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/clusterize.js/0.18.0/clusterize.min.js"); 
            console.log("clusterize.js Loaded Successfully");
            }
            
            
            if (args[i] == "co" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/co/4.1.0/index.min.js"); 
            console.log("co Loaded Successfully");
            }
            
            
            if (args[i] == "CodeFlask.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/CodeFlask.js/0.2.0/codeflask.min.js"); 
            console.log("CodeFlask.js Loaded Successfully");
            }
            
            
            if (args[i] == "codemirror" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/codemirror.min.js"); 
            console.log("codemirror Loaded Successfully");
            }
            
            
            if (args[i] == "coffee-script" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.12.8/coffee-script.min.js"); 
            console.log("coffee-script Loaded Successfully");
            }
            
            
            if (args[i] == "coin-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/coin-slider/1.0.0/coin-slider.min.js"); 
            console.log("coin-slider Loaded Successfully");
            }
            
            
            if (args[i] == "collageplus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/collageplus/0.3.3/jquery.collagePlus.min.js"); 
            console.log("collageplus Loaded Successfully");
            }
            
            
            if (args[i] == "color-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/color-js/1.0.1/color.min.js"); 
            console.log("color-js Loaded Successfully");
            }
            
            
            if (args[i] == "color-scheme" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.0/color-scheme.min.js"); 
            console.log("color-scheme Loaded Successfully");
            }
            
            
            if (args[i] == "color-thief" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js"); 
            console.log("color-thief Loaded Successfully");
            }
            
            
            if (args[i] == "colorify.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/colorify.js/1.0.3/scripts/colorify.min.js"); 
            console.log("colorify.js Loaded Successfully");
            }
            
            
            if (args[i] == "Colors.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Colors.js/1.2.4/colors.min.js"); 
            console.log("Colors.js Loaded Successfully");
            }
            
            
            if (args[i] == "colors" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/colors/3.0.0/js/colors.min.js"); 
            console.log("colors Loaded Successfully");
            }
            
            
            if (args[i] == "commandz" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/commandz/0.1.2/commandz.min.js"); 
            console.log("commandz Loaded Successfully");
            }
            
            
            if (args[i] == "commonmark" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/commonmark/0.28.1/commonmark.min.js"); 
            console.log("commonmark Loaded Successfully");
            }
            
            
            if (args[i] == "completer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/completer/0.1.3/completer.min.js"); 
            console.log("completer Loaded Successfully");
            }
            
            
            if (args[i] == "componentjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/componentjs/1.5.0/component.min.js"); 
            console.log("componentjs Loaded Successfully");
            }
            
            
            if (args[i] == "concretejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/concretejs/2.0.0/concrete.min.js"); 
            console.log("concretejs Loaded Successfully");
            }
            
            
            if (args[i] == "condition" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/condition/1.2.0/condition.min.js"); 
            console.log("condition Loaded Successfully");
            }
            
            
            if (args[i] == "conditional-field" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/conditional-field/1.0.2/conditional-field.min.js"); 
            console.log("conditional-field Loaded Successfully");
            }
            
            
            if (args[i] == "conditionizr.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/conditionizr.js/4.1.0/conditionizr.min.js"); 
            console.log("conditionizr.js Loaded Successfully");
            }
            
            
            if (args[i] == "confidencejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/confidencejs/1.2.0/confidence.min.js"); 
            console.log("confidencejs Loaded Successfully");
            }
            
            
            if (args[i] == "console-polyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/console-polyfill/0.3.0/index.min.js"); 
            console.log("console-polyfill Loaded Successfully");
            }
            
            
            if (args[i] == "console.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/console.js/0.0.2/console.min.js"); 
            console.log("console.js Loaded Successfully");
            }
            
            
            if (args[i] == "constraintjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/constraintjs/0.9.6/cjs.min.js"); 
            console.log("constraintjs Loaded Successfully");
            }
            
            
            if (args[i] == "ContentTools" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ContentTools/1.6.1/content-tools.min.js"); 
            console.log("ContentTools Loaded Successfully");
            }
            
            
            if (args[i] == "convnetjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/convnetjs/0.3.0/convnet-min.js"); 
            console.log("convnetjs Loaded Successfully");
            }
            
            
            if (args[i] == "cookie-banner" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.1/cookiebanner.min.js"); 
            console.log("cookie-banner Loaded Successfully");
            }
            
            
            if (args[i] == "cookie.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cookie.js/1.2.2/cookie.min.js"); 
            console.log("cookie.js Loaded Successfully");
            }
            
            
            if (args[i] == "cookieconsent2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.4/cookieconsent.min.js"); 
            console.log("cookieconsent2 Loaded Successfully");
            }
            
            
            if (args[i] == "cookiejar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cookiejar/0.5.1/cookiejar.min.js"); 
            console.log("cookiejar Loaded Successfully");
            }
            
            
            if (args[i] == "cookies-monster" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cookies-monster/0.1.4/cookies-monster.js"); 
            console.log("cookies-monster Loaded Successfully");
            }
            
            
            if (args[i] == "Cookies.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Cookies.js/1.2.1/cookies.min.js"); 
            console.log("Cookies.js Loaded Successfully");
            }
            
            
            if (args[i] == "cookiesjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cookiesjs/2.0.0/cookies.min.js"); 
            console.log("cookiesjs Loaded Successfully");
            }
            
            
            if (args[i] == "CoolQueue.io" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/CoolQueue.io/1.0.0/coolqueue.io.min.js"); 
            console.log("CoolQueue.io Loaded Successfully");
            }
            
            
            if (args[i] == "coordinates-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/coordinates-picker/1.0.0/coordinates-picker.min.js"); 
            console.log("coordinates-picker Loaded Successfully");
            }
            
            
            if (args[i] == "core-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js"); 
            console.log("core-js Loaded Successfully");
            }
            
            
            if (args[i] == "corejs-typeahead" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/corejs-typeahead/1.2.1/bloodhound.min.js"); 
            console.log("corejs-typeahead Loaded Successfully");
            }
            
            
            if (args[i] == "corysimmons-selectivizr2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/corysimmons-selectivizr2/1.0.9/selectivizr2.min.js"); 
            console.log("corysimmons-selectivizr2 Loaded Successfully");
            }
            
            
            if (args[i] == "cosmicjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cosmicjs/2.39.91/cosmicjs.browser.min.js"); 
            console.log("cosmicjs Loaded Successfully");
            }
            
            
            if (args[i] == "countable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/countable/3.0.0/Countable.min.js"); 
            console.log("countable Loaded Successfully");
            }
            
            
            if (args[i] == "countdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/countdown/2.6.0/countdown.min.js"); 
            console.log("countdown Loaded Successfully");
            }
            
            
            if (args[i] == "Counter-Up" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"); 
            console.log("Counter-Up Loaded Successfully");
            }
            
            
            if (args[i] == "countly-sdk-web" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/countly-sdk-web/17.9.0/countly.min.js"); 
            console.log("countly-sdk-web Loaded Successfully");
            }
            
            
            if (args[i] == "country-region-dropdown-menu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/country-region-dropdown-menu/1.2.0/geodatasource-cr.min.js"); 
            console.log("country-region-dropdown-menu Loaded Successfully");
            }
            
            
            if (args[i] == "country-select-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/country-select-js/1.1.0/js/countrySelect.min.js"); 
            console.log("country-select-js Loaded Successfully");
            }
            
            
            if (args[i] == "countup.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/countup.js/1.9.3/countUp.min.js"); 
            console.log("countup.js Loaded Successfully");
            }
            
            
            if (args[i] == "covjson-reader" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/covjson-reader/0.16.3/covjson-reader.min.js"); 
            console.log("covjson-reader Loaded Successfully");
            }
            
            
            if (args[i] == "cplayer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cplayer/3.1.6/cplayer.js"); 
            console.log("cplayer Loaded Successfully");
            }
            
            
            if (args[i] == "crafty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crafty/0.8.0/crafty-min.js"); 
            console.log("crafty Loaded Successfully");
            }
            
            
            if (args[i] == "crc-32" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crc-32/1.1.1/crc32.min.js"); 
            console.log("crc-32 Loaded Successfully");
            }
            
            
            if (args[i] == "crel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crel/3.1.0/crel.min.js"); 
            console.log("crel Loaded Successfully");
            }
            
            
            if (args[i] == "cropit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cropit/0.5.1/jquery.cropit.min.js"); 
            console.log("cropit Loaded Successfully");
            }
            
            
            if (args[i] == "cropper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cropper/3.1.3/cropper.min.js"); 
            console.log("cropper Loaded Successfully");
            }
            
            
            if (args[i] == "cropperjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.2.1/cropper.min.js"); 
            console.log("cropperjs Loaded Successfully");
            }
            
            
            if (args[i] == "croppic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/croppic/1.0.3/croppic.min.js"); 
            console.log("croppic Loaded Successfully");
            }
            
            
            if (args[i] == "croppie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/croppie/2.5.1/croppie.min.js"); 
            console.log("croppie Loaded Successfully");
            }
            
            
            if (args[i] == "crossfilter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js"); 
            console.log("crossfilter Loaded Successfully");
            }
            
            
            if (args[i] == "crossfilter2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crossfilter2/1.4.3/crossfilter.min.js"); 
            console.log("crossfilter2 Loaded Successfully");
            }
            
            
            if (args[i] == "crossroads" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crossroads/0.12.2/crossroads.min.js"); 
            console.log("crossroads Loaded Successfully");
            }
            
            
            if (args[i] == "crosstab" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crosstab/0.2.12/crosstab.min.js"); 
            console.log("crosstab Loaded Successfully");
            }
            
            
            if (args[i] == "crunch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crunch/1.2.1/crunch.min.js"); 
            console.log("crunch Loaded Successfully");
            }
            
            
            if (args[i] == "cryptico" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cryptico/0.0.1343522940/cryptico.min.js"); 
            console.log("cryptico Loaded Successfully");
            }
            
            
            if (args[i] == "crypto-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"); 
            console.log("crypto-js Loaded Successfully");
            }
            
            
            if (args[i] == "css-animations.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/css-animations.js/0.1.0/css-animations.min.js"); 
            console.log("css-animations.js Loaded Successfully");
            }
            
            
            if (args[i] == "css-element-queries" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/css-element-queries/0.4.0/ElementQueries.min.js"); 
            console.log("css-element-queries Loaded Successfully");
            }
            
            
            if (args[i] == "css-layout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/css-layout/1.1.1/css-layout.min.js"); 
            console.log("css-layout Loaded Successfully");
            }
            
            
            if (args[i] == "css3-animate-it" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/css3-animate-it/1.0.3/js/css3-animate-it.min.js"); 
            console.log("css3-animate-it Loaded Successfully");
            }
            
            
            if (args[i] == "css3finalize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/css3finalize/4.1.0/jquery.css3finalize.min.js"); 
            console.log("css3finalize Loaded Successfully");
            }
            
            
            if (args[i] == "css3pie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/css3pie/2.0beta1/PIE_IE678.js"); 
            console.log("css3pie Loaded Successfully");
            }
            
            
            if (args[i] == "cssesc" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cssesc/1.0.0/cssesc.min.js"); 
            console.log("cssesc Loaded Successfully");
            }
            
            
            if (args[i] == "cssobj" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cssobj/1.2.1/cssobj.min.js"); 
            console.log("cssobj Loaded Successfully");
            }
            
            
            if (args[i] == "cssuseragent" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cssuseragent/2.1.31/cssua.min.js"); 
            console.log("cssuseragent Loaded Successfully");
            }
            
            
            if (args[i] == "cssx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cssx/5.2.1/cssx.min.js"); 
            console.log("cssx Loaded Successfully");
            }
            
            
            if (args[i] == "cta.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cta.js/0.3.2/cta.min.js"); 
            console.log("cta.js Loaded Successfully");
            }
            
            
            if (args[i] == "cubism" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cubism/1.6.0/cubism.v1.min.js"); 
            console.log("cubism Loaded Successfully");
            }
            
            
            if (args[i] == "cufon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cufon/1.09i/cufon-yui.min.js"); 
            console.log("cufon Loaded Successfully");
            }
            
            
            if (args[i] == "cuid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cuid/1.3.8/browser-cuid.min.js"); 
            console.log("cuid Loaded Successfully");
            }
            
            
            if (args[i] == "curl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/curl/0.8.9/curl-for-jQuery/curl.min.js"); 
            console.log("curl Loaded Successfully");
            }
            
            
            if (args[i] == "currencyformatter.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/currencyformatter.js/1.0.5/currencyFormatter.min.js"); 
            console.log("currencyformatter.js Loaded Successfully");
            }
            
            
            if (args[i] == "custom-elements-builder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/custom-elements-builder/0.3.4/ceb.min.js"); 
            console.log("custom-elements-builder Loaded Successfully");
            }
            
            
            if (args[i] == "custom-elements" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.0.6/custom-elements.min.js"); 
            console.log("custom-elements Loaded Successfully");
            }
            
            
            if (args[i] == "custombox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/custombox/4.0.3/custombox.min.js"); 
            console.log("custombox Loaded Successfully");
            }
            
            
            if (args[i] == "cutjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cutjs/0.4.14/cut.web.min.js"); 
            console.log("cutjs Loaded Successfully");
            }
            
            
            if (args[i] == "cyclejs-core" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cyclejs-core/7.0.0/cycle.min.js"); 
            console.log("cyclejs-core Loaded Successfully");
            }
            
            
            if (args[i] == "cyclejs-dom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cyclejs-dom/10.1.0/cycle-dom.min.js"); 
            console.log("cyclejs-dom Loaded Successfully");
            }
            
            
            if (args[i] == "cytoscape-panzoom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cytoscape-panzoom/2.5.2/cytoscape-panzoom.min.js"); 
            console.log("cytoscape-panzoom Loaded Successfully");
            }
            
            
            if (args[i] == "cytoscape" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.2.7/cytoscape.min.js"); 
            console.log("cytoscape Loaded Successfully");
            }
            
            
            if (args[i] == "d3-annotation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-annotation/2.1.0/d3-annotation.min.js"); 
            console.log("d3-annotation Loaded Successfully");
            }
            
            
            if (args[i] == "d3-array" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-array/1.2.1/d3-array.min.js"); 
            console.log("d3-array Loaded Successfully");
            }
            
            
            if (args[i] == "d3-axis" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-axis/1.0.8/d3-axis.min.js"); 
            console.log("d3-axis Loaded Successfully");
            }
            
            
            if (args[i] == "d3-brush" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-brush/1.0.4/d3-brush.min.js"); 
            console.log("d3-brush Loaded Successfully");
            }
            
            
            if (args[i] == "d3-chord" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-chord/1.0.4/d3-chord.min.js"); 
            console.log("d3-chord Loaded Successfully");
            }
            
            
            if (args[i] == "d3-cloud" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-cloud/1.2.4/d3.layout.cloud.min.js"); 
            console.log("d3-cloud Loaded Successfully");
            }
            
            
            if (args[i] == "d3-collection" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-collection/1.0.4/d3-collection.min.js"); 
            console.log("d3-collection Loaded Successfully");
            }
            
            
            if (args[i] == "d3-color" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-color/1.0.3/d3-color.min.js"); 
            console.log("d3-color Loaded Successfully");
            }
            
            
            if (args[i] == "d3-composite-projections" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-composite-projections/1.0.2/d3-composite-projections.min.js"); 
            console.log("d3-composite-projections Loaded Successfully");
            }
            
            
            if (args[i] == "d3-dispatch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-dispatch/1.0.3/d3-dispatch.min.js"); 
            console.log("d3-dispatch Loaded Successfully");
            }
            
            
            if (args[i] == "d3-drag" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-drag/1.2.1/d3-drag.min.js"); 
            console.log("d3-drag Loaded Successfully");
            }
            
            
            if (args[i] == "d3-dsv" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-dsv/1.0.8/d3-dsv.min.js"); 
            console.log("d3-dsv Loaded Successfully");
            }
            
            
            if (args[i] == "d3-ease" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-ease/1.0.3/d3-ease.min.js"); 
            console.log("d3-ease Loaded Successfully");
            }
            
            
            if (args[i] == "d3-force" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-force/1.1.0/d3-force.min.js"); 
            console.log("d3-force Loaded Successfully");
            }
            
            
            if (args[i] == "d3-format" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-format/1.2.1/d3-format.min.js"); 
            console.log("d3-format Loaded Successfully");
            }
            
            
            if (args[i] == "d3-geo-projection" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-geo-projection/2.3.2/d3-geo-projection.min.js"); 
            console.log("d3-geo-projection Loaded Successfully");
            }
            
            
            if (args[i] == "d3-geo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-geo/1.9.1/d3-geo.min.js"); 
            console.log("d3-geo Loaded Successfully");
            }
            
            
            if (args[i] == "d3-hierarchy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-hierarchy/1.1.5/d3-hierarchy.min.js"); 
            console.log("d3-hierarchy Loaded Successfully");
            }
            
            
            if (args[i] == "d3-interpolate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-interpolate/1.1.6/d3-interpolate.min.js"); 
            console.log("d3-interpolate Loaded Successfully");
            }
            
            
            if (args[i] == "d3-legend" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-legend/2.25.3/d3-legend.min.js"); 
            console.log("d3-legend Loaded Successfully");
            }
            
            
            if (args[i] == "d3-path" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-path/1.0.5/d3-path.min.js"); 
            console.log("d3-path Loaded Successfully");
            }
            
            
            if (args[i] == "d3-polygon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-polygon/1.0.3/d3-polygon.min.js"); 
            console.log("d3-polygon Loaded Successfully");
            }
            
            
            if (args[i] == "d3-quadtree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-quadtree/1.0.3/d3-quadtree.min.js"); 
            console.log("d3-quadtree Loaded Successfully");
            }
            
            
            if (args[i] == "d3-queue" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-queue/3.0.7/d3-queue.min.js"); 
            console.log("d3-queue Loaded Successfully");
            }
            
            
            if (args[i] == "d3-random" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-random/1.1.0/d3-random.min.js"); 
            console.log("d3-random Loaded Successfully");
            }
            
            
            if (args[i] == "d3-request" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-request/1.0.6/d3-request.min.js"); 
            console.log("d3-request Loaded Successfully");
            }
            
            
            if (args[i] == "d3-sankey" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-sankey/0.7.1/d3-sankey.min.js"); 
            console.log("d3-sankey Loaded Successfully");
            }
            
            
            if (args[i] == "d3-scale" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-scale/1.0.7/d3-scale.min.js"); 
            console.log("d3-scale Loaded Successfully");
            }
            
            
            if (args[i] == "d3-selection" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-selection/1.2.0/d3-selection.min.js"); 
            console.log("d3-selection Loaded Successfully");
            }
            
            
            if (args[i] == "d3-shape" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-shape/1.2.0/d3-shape.min.js"); 
            console.log("d3-shape Loaded Successfully");
            }
            
            
            if (args[i] == "d3-time-format" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-time-format/2.1.1/d3-time-format.min.js"); 
            console.log("d3-time-format Loaded Successfully");
            }
            
            
            if (args[i] == "d3-time" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-time/1.0.8/d3-time.min.js"); 
            console.log("d3-time Loaded Successfully");
            }
            
            
            if (args[i] == "d3-timer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-timer/1.0.7/d3-timer.min.js"); 
            console.log("d3-timer Loaded Successfully");
            }
            
            
            if (args[i] == "d3-tip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-tip/0.7.1/d3-tip.min.js"); 
            console.log("d3-tip Loaded Successfully");
            }
            
            
            if (args[i] == "d3-transform" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-transform/1.0.4/d3-transform.min.js"); 
            console.log("d3-transform Loaded Successfully");
            }
            
            
            if (args[i] == "d3-transition" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-transition/1.1.1/d3-transition.min.js"); 
            console.log("d3-transition Loaded Successfully");
            }
            
            
            if (args[i] == "d3-voronoi" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-voronoi/1.1.2/d3-voronoi.min.js"); 
            console.log("d3-voronoi Loaded Successfully");
            }
            
            
            if (args[i] == "d3-zoom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3-zoom/1.7.1/d3-zoom.min.js"); 
            console.log("d3-zoom Loaded Successfully");
            }
            
            
            if (args[i] == "d3.chart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3.chart/0.3.0/d3.chart.min.js"); 
            console.log("d3.chart Loaded Successfully");
            }
            
            
            if (args[i] == "d3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3/4.12.2/d3.min.js"); 
            console.log("d3 Loaded Successfully");
            }
            
            
            if (args[i] == "d3fc" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3fc/11.0.0/d3fc.bundle.min.js"); 
            console.log("d3fc Loaded Successfully");
            }
            
            
            if (args[i] == "d3kit-timeline" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3kit-timeline/2.0.0/d3kit-timeline.min.js"); 
            console.log("d3kit-timeline Loaded Successfully");
            }
            
            
            if (args[i] == "d3kit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3kit/3.2.0/d3kit.min.js"); 
            console.log("d3kit Loaded Successfully");
            }
            
            
            if (args[i] == "d3plus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/d3plus/1.9.8/d3plus.min.js"); 
            console.log("d3plus Loaded Successfully");
            }
            
            
            if (args[i] == "dagre-d3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dagre-d3/0.5.3/dagre-d3.min.js"); 
            console.log("dagre-d3 Loaded Successfully");
            }
            
            
            if (args[i] == "dagre" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dagre/0.7.4/dagre.min.js"); 
            console.log("dagre Loaded Successfully");
            }
            
            
            if (args[i] == "dancer.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dancer.js/0.4.0/dancer.min.js"); 
            console.log("dancer.js Loaded Successfully");
            }
            
            
            if (args[i] == "danialfarid-angular-file-upload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/danialfarid-angular-file-upload/12.2.13/ng-file-upload-shim.min.js"); 
            console.log("danialfarid-angular-file-upload Loaded Successfully");
            }
            
            
            if (args[i] == "danielgindi-jquery-backstretch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/danielgindi-jquery-backstretch/2.1.15/jquery.backstretch.min.js"); 
            console.log("danielgindi-jquery-backstretch Loaded Successfully");
            }
            
            
            if (args[i] == "darkroomjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/darkroomjs/2.0.1/darkroom.js"); 
            console.log("darkroomjs Loaded Successfully");
            }
            
            
            if (args[i] == "darktooltip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/darktooltip/0.4.0/jquery.darktooltip.min.js"); 
            console.log("darktooltip Loaded Successfully");
            }
            
            
            if (args[i] == "dash-shaka-playback" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dash-shaka-playback/2.0.8/dash-shaka-playback.min.js"); 
            console.log("dash-shaka-playback Loaded Successfully");
            }
            
            
            if (args[i] == "dashjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.6.4/dash.all.min.js"); 
            console.log("dashjs Loaded Successfully");
            }
            
            
            if (args[i] == "dat-gui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js"); 
            console.log("dat-gui Loaded Successfully");
            }
            
            
            if (args[i] == "data.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/data.js/0.3.0/data.min.js"); 
            console.log("data.js Loaded Successfully");
            }
            
            
            if (args[i] == "datacomb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datacomb/1.2.0/datacomb.min.js"); 
            console.log("datacomb Loaded Successfully");
            }
            
            
            if (args[i] == "datalib" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datalib/1.8.0/datalib.min.js"); 
            console.log("datalib Loaded Successfully");
            }
            
            
            if (args[i] == "datamaps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datamaps/0.5.8/datamaps.all.min.js"); 
            console.log("datamaps Loaded Successfully");
            }
            
            
            if (args[i] == "datatable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datatable/2.0.1/js/datatable.min.js"); 
            console.log("datatable Loaded Successfully");
            }
            
            
            if (args[i] == "datatables-colvis" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datatables-colvis/1.1.2/js/dataTables.colVis.min.js"); 
            console.log("datatables-colvis Loaded Successfully");
            }
            
            
            if (args[i] == "datatables-fixedheader" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datatables-fixedheader/2.1.1/dataTables.fixedHeader.min.js"); 
            console.log("datatables-fixedheader Loaded Successfully");
            }
            
            
            if (args[i] == "datatables-tabletools" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datatables-tabletools/2.1.5/js/TableTools.min.js"); 
            console.log("datatables-tabletools Loaded Successfully");
            }
            
            
            if (args[i] == "datatables" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.16/js/jquery.dataTables.min.js"); 
            console.log("datatables Loaded Successfully");
            }
            
            
            if (args[i] == "date-fns" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.29.0/date_fns.min.js"); 
            console.log("date-fns Loaded Successfully");
            }
            
            
            if (args[i] == "datedropper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datedropper/2.0/datedropper.min.js"); 
            console.log("datedropper Loaded Successfully");
            }
            
            
            if (args[i] == "datejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datejs/1.0/date.min.js"); 
            console.log("datejs Loaded Successfully");
            }
            
            
            if (args[i] == "datepair.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datepair.js/0.4.15/datepair.min.js"); 
            console.log("datepair.js Loaded Successfully");
            }
            
            
            if (args[i] == "datepick" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datepick/5.1.1/js/jquery.datepick.min.js"); 
            console.log("datepick Loaded Successfully");
            }
            
            
            if (args[i] == "datepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/datepicker/0.6.4/datepicker.min.js"); 
            console.log("datepicker Loaded Successfully");
            }
            
            
            if (args[i] == "davis.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/davis.js/0.9.5/davis.min.js"); 
            console.log("davis.js Loaded Successfully");
            }
            
            
            if (args[i] == "dc" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.9/dc.min.js"); 
            console.log("dc Loaded Successfully");
            }
            
            
            if (args[i] == "dd_belatedpng" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dd_belatedpng/0.0.8/dd_belatedpng.min.js"); 
            console.log("dd_belatedpng Loaded Successfully");
            }
            
            
            if (args[i] == "deb.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/deb.js/0.0.2/deb.min.js"); 
            console.log("deb.js Loaded Successfully");
            }
            
            
            if (args[i] == "decimal.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/decimal.js/9.0.1/decimal.min.js"); 
            console.log("decimal.js Loaded Successfully");
            }
            
            
            if (args[i] == "deck.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/deck.js/1.1.0/core/deck.core.min.js"); 
            console.log("deck.js Loaded Successfully");
            }
            
            
            if (args[i] == "deep-diff" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/deep-diff/0.3.3/deep-diff.min.js"); 
            console.log("deep-diff Loaded Successfully");
            }
            
            
            if (args[i] == "deepstream.io-client-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/deepstream.io-client-js/2.3.0/deepstream.min.js"); 
            console.log("deepstream.io-client-js Loaded Successfully");
            }
            
            
            if (args[i] == "defiant.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/defiant.js/1.4.2/defiant.min.js"); 
            console.log("defiant.js Loaded Successfully");
            }
            
            
            if (args[i] == "dependent-dropdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dependent-dropdown/1.4.8/js/dependent-dropdown.min.js"); 
            console.log("dependent-dropdown Loaded Successfully");
            }
            
            
            if (args[i] == "depot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/depot/0.1.6/depot.min.js"); 
            console.log("depot Loaded Successfully");
            }
            
            
            if (args[i] == "detect_swipe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/detect_swipe/2.1.4/jquery.detect_swipe.min.js"); 
            console.log("detect_swipe Loaded Successfully");
            }
            
            
            if (args[i] == "Detect.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Detect.js/2.2.2/detect.min.js"); 
            console.log("Detect.js Loaded Successfully");
            }
            
            
            if (args[i] == "detectizr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/detectizr/2.2.0/detectizr.min.js"); 
            console.log("detectizr Loaded Successfully");
            }
            
            
            if (args[i] == "device.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/device.js/0.2.7/device.min.js"); 
            console.log("device.js Loaded Successfully");
            }
            
            
            if (args[i] == "dexie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dexie/2.0.1/dexie.min.js"); 
            console.log("dexie Loaded Successfully");
            }
            
            
            if (args[i] == "df-number-format" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/df-number-format/2.1.6/jquery.number.min.js"); 
            console.log("df-number-format Loaded Successfully");
            }
            
            
            if (args[i] == "dflow" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dflow/0.24.0/dflow.min.js"); 
            console.log("dflow Loaded Successfully");
            }
            
            
            if (args[i] == "dialog-polyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.9/dialog-polyfill.min.js"); 
            console.log("dialog-polyfill Loaded Successfully");
            }
            
            
            if (args[i] == "diff_match_patch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/diff_match_patch/20121119/diff_match_patch.js"); 
            console.log("diff_match_patch Loaded Successfully");
            }
            
            
            if (args[i] == "diff2html" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/diff2html/2.3.2/diff2html.min.js"); 
            console.log("diff2html Loaded Successfully");
            }
            
            
            if (args[i] == "dimple" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dimple/2.3.0/dimple.latest.min.js"); 
            console.log("dimple Loaded Successfully");
            }
            
            
            if (args[i] == "dinqyjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dinqyjs/1.1.0/dinqyjs.min.js"); 
            console.log("dinqyjs Loaded Successfully");
            }
            
            
            if (args[i] == "dio" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dio/7.1.0/dio.min.js"); 
            console.log("dio Loaded Successfully");
            }
            
            
            if (args[i] == "Director" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Director/1.2.8/director.min.js"); 
            console.log("Director Loaded Successfully");
            }
            
            
            if (args[i] == "DisplayJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/DisplayJS/2.3.0/display.min.js"); 
            console.log("DisplayJS Loaded Successfully");
            }
            
            
            if (args[i] == "distpicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/distpicker/2.0.2/distpicker.min.js"); 
            console.log("distpicker Loaded Successfully");
            }
            
            
            if (args[i] == "diva.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/diva.js/5.1.3/js/diva.min.js"); 
            console.log("diva.js Loaded Successfully");
            }
            
            
            if (args[i] == "django.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/django.js/0.8.1/django.min.js"); 
            console.log("django.js Loaded Successfully");
            }
            
            
            if (args[i] == "dna.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dna.js/1.3.4/dna.min.js"); 
            console.log("dna.js Loaded Successfully");
            }
            
            
            if (args[i] == "docsearch.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/docsearch.js/2.5.2/docsearch.min.js"); 
            console.log("docsearch.js Loaded Successfully");
            }
            
            
            if (args[i] == "docsify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/docsify/4.5.7/docsify.min.js"); 
            console.log("docsify Loaded Successfully");
            }
            
            
            if (args[i] == "document-register-element" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.7.0/document-register-element.js"); 
            console.log("document-register-element Loaded Successfully");
            }
            
            
            if (args[i] == "documentup" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/documentup/0.1.1/documentup.min.js"); 
            console.log("documentup Loaded Successfully");
            }
            
            
            if (args[i] == "docxtemplater" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/docxtemplater/3.2.1/docxtemplater.min.js"); 
            console.log("docxtemplater Loaded Successfully");
            }
            
            
            if (args[i] == "dojo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dojo/1.10.4/dojo.js"); 
            console.log("dojo Loaded Successfully");
            }
            
            
            if (args[i] == "dollar.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dollar.js/1.5.1/dollar.min.js"); 
            console.log("dollar.js Loaded Successfully");
            }
            
            
            if (args[i] == "dom-to-image" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"); 
            console.log("dom-to-image Loaded Successfully");
            }
            
            
            if (args[i] == "dom4" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dom4/3.0.0/dom4.js"); 
            console.log("dom4 Loaded Successfully");
            }
            
            
            if (args[i] == "domainr-search-box" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/domainr-search-box/0.0.18/domainr-search-box.min.js"); 
            console.log("domainr-search-box Loaded Successfully");
            }
            
            
            if (args[i] == "domplotter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/domplotter/1.3.1/domplotter.min.js"); 
            console.log("domplotter Loaded Successfully");
            }
            
            
            if (args[i] == "dompurify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dompurify/1.0.3/purify.min.js"); 
            console.log("dompurify Loaded Successfully");
            }
            
            
            if (args[i] == "domready" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/domready/1.0.8/ready.min.js"); 
            console.log("domready Loaded Successfully");
            }
            
            
            if (args[i] == "domtastic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/domtastic/0.12.1/domtastic.min.js"); 
            console.log("domtastic Loaded Successfully");
            }
            
            
            if (args[i] == "dont-go" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dont-go/1.0.8/dont-go.min.js"); 
            console.log("dont-go Loaded Successfully");
            }
            
            
            if (args[i] == "doofinder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/doofinder/5.1.10/doofinder.min.js"); 
            console.log("doofinder Loaded Successfully");
            }
            
            
            if (args[i] == "doony" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/doony/2.1/js/doony.min.js"); 
            console.log("doony Loaded Successfully");
            }
            
            
            if (args[i] == "dot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dot/1.1.2/doT.min.js"); 
            console.log("dot Loaded Successfully");
            }
            
            
            if (args[i] == "downloadjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/downloadjs/1.4.7/download.min.js"); 
            console.log("downloadjs Loaded Successfully");
            }
            
            
            if (args[i] == "dplayer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.17.2/DPlayer.min.js"); 
            console.log("dplayer Loaded Successfully");
            }
            
            
            if (args[i] == "draft-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/draft-js/0.10.4/Draft.min.js"); 
            console.log("draft-js Loaded Successfully");
            }
            
            
            if (args[i] == "dragdealer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dragdealer/0.9.9/dragdealer.min.js"); 
            console.log("dragdealer Loaded Successfully");
            }
            
            
            if (args[i] == "DragDrop" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/DragDrop/0.3.0/drag-drop.min.js"); 
            console.log("DragDrop Loaded Successfully");
            }
            
            
            if (args[i] == "draggabilly" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/draggabilly/2.1.1/draggabilly.pkgd.min.js"); 
            console.log("draggabilly Loaded Successfully");
            }
            
            
            if (args[i] == "draggable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/draggable/1.0.0-beta.3/draggable.min.js"); 
            console.log("draggable Loaded Successfully");
            }
            
            
            if (args[i] == "dragonbones" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dragonbones/2.4.1/dragonbones.min.js"); 
            console.log("dragonbones Loaded Successfully");
            }
            
            
            if (args[i] == "dragscroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js"); 
            console.log("dragscroll Loaded Successfully");
            }
            
            
            if (args[i] == "dragula" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dragula/3.7.2/dragula.min.js"); 
            console.log("dragula Loaded Successfully");
            }
            
            
            if (args[i] == "drawer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/drawer/3.2.2/js/drawer.min.js"); 
            console.log("drawer Loaded Successfully");
            }
            
            
            if (args[i] == "drawingboard.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.6/drawingboard.min.js"); 
            console.log("drawingboard.js Loaded Successfully");
            }
            
            
            if (args[i] == "droparea" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/droparea/1.1.1/droparea.min.js"); 
            console.log("droparea Loaded Successfully");
            }
            
            
            if (args[i] == "dropbox.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dropbox.js/2.5.13/Dropbox-sdk.min.js"); 
            console.log("dropbox.js Loaded Successfully");
            }
            
            
            if (args[i] == "dropdown.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dropdown.js/0.0.2dev/jquery.dropdown.min.js"); 
            console.log("dropdown.js Loaded Successfully");
            }
            
            
            if (args[i] == "Dropify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Dropify/0.2.2/js/dropify.min.js"); 
            console.log("Dropify Loaded Successfully");
            }
            
            
            if (args[i] == "dropzone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.2.0/min/dropzone.min.js"); 
            console.log("dropzone Loaded Successfully");
            }
            
            
            if (args[i] == "dustjs-helpers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dustjs-helpers/1.7.4/dust-helpers.min.js"); 
            console.log("dustjs-helpers Loaded Successfully");
            }
            
            
            if (args[i] == "dustjs-linkedin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dustjs-linkedin/2.7.5/dust-core.min.js"); 
            console.log("dustjs-linkedin Loaded Successfully");
            }
            
            
            if (args[i] == "dygraph" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dygraph/2.1.0/dygraph.min.js"); 
            console.log("dygraph Loaded Successfully");
            }
            
            
            if (args[i] == "dynamics.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/dynamics.js/1.1.5/dynamics.min.js"); 
            console.log("dynamics.js Loaded Successfully");
            }
            
            
            if (args[i] == "Dynatable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Dynatable/0.3.1/jquery.dynatable.min.js"); 
            console.log("Dynatable Loaded Successfully");
            }
            
            
            if (args[i] == "EaselJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/EaselJS/1.0.2/easeljs.min.js"); 
            console.log("EaselJS Loaded Successfully");
            }
            
            
            if (args[i] == "easy-autocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/easy-autocomplete/1.3.5/jquery.easy-autocomplete.min.js"); 
            console.log("easy-autocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "easy-countdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/easy-countdown/2.2.0/countdown.min.js"); 
            console.log("easy-countdown Loaded Successfully");
            }
            
            
            if (args[i] == "easy-pie-chart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.6/jquery.easypiechart.min.js"); 
            console.log("easy-pie-chart Loaded Successfully");
            }
            
            
            if (args[i] == "easyXDM" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/easyXDM/2.4.20/easyXDM.min.js"); 
            console.log("easyXDM Loaded Successfully");
            }
            
            
            if (args[i] == "echarts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/echarts/3.8.5/echarts.min.js"); 
            console.log("echarts Loaded Successfully");
            }
            
            
            if (args[i] == "eddy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eddy/0.7.0/eddy.dom.js"); 
            console.log("eddy Loaded Successfully");
            }
            
            
            if (args[i] == "ef.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ef.js/0.4.1-beta.2/ef.min.js"); 
            console.log("ef.js Loaded Successfully");
            }
            
            
            if (args[i] == "egg.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egg.js/1.0/egg.min.js"); 
            console.log("egg.js Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-agent" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-agent/2.1.1/agent.min.js"); 
            console.log("egjs-agent Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-axes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-axes/2.3.3/axes.min.js"); 
            console.log("egjs-axes Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-component" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-component/2.1.0/component.min.js"); 
            console.log("egjs-component Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-flicking" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/2.1.0/flicking.min.js"); 
            console.log("egjs-flicking Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-infinitegrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-infinitegrid/3.0.0/infinitegrid.min.js"); 
            console.log("egjs-infinitegrid Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-jquery-pauseresume" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-jquery-pauseresume/2.0.1/pauseresume.min.js"); 
            console.log("egjs-jquery-pauseresume Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-jquery-transform" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-jquery-transform/2.0.0/transform.min.js"); 
            console.log("egjs-jquery-transform Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-persist" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-persist/2.1.0/persist.min.js"); 
            console.log("egjs-persist Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-rotate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-rotate/2.0.0/rotate.min.js"); 
            console.log("egjs-rotate Loaded Successfully");
            }
            
            
            if (args[i] == "egjs-visible" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs-visible/2.1.0/visible.min.js"); 
            console.log("egjs-visible Loaded Successfully");
            }
            
            
            if (args[i] == "egjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/egjs/1.5.0/eg.min.js"); 
            console.log("egjs Loaded Successfully");
            }
            
            
            if (args[i] == "ekko-lightbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js"); 
            console.log("ekko-lightbox Loaded Successfully");
            }
            
            
            if (args[i] == "elasticlunr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/elasticlunr/0.9.6/elasticlunr.min.js"); 
            console.log("elasticlunr Loaded Successfully");
            }
            
            
            if (args[i] == "elasticsearch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/elasticsearch/14.0.0/elasticsearch.min.js"); 
            console.log("elasticsearch Loaded Successfully");
            }
            
            
            if (args[i] == "eldarion-ajax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eldarion-ajax/0.12.0/eldarion-ajax.min.js"); 
            console.log("eldarion-ajax Loaded Successfully");
            }
            
            
            if (args[i] == "element-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.0.9/index.js"); 
            console.log("element-ui Loaded Successfully");
            }
            
            
            if (args[i] == "elemental" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/elemental/0.5.3/elemental.min.js"); 
            console.log("elemental Loaded Successfully");
            }
            
            
            if (args[i] == "elevatezoom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/elevatezoom/3.0.8/jquery.elevatezoom.min.js"); 
            console.log("elevatezoom Loaded Successfully");
            }
            
            
            if (args[i] == "elevator.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/elevator.js/1.0.1/elevator.min.js"); 
            console.log("elevator.js Loaded Successfully");
            }
            
            
            if (args[i] == "elfinder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/elfinder/2.1.30/js/elfinder.min.js"); 
            console.log("elfinder Loaded Successfully");
            }
            
            
            if (args[i] == "elm-runtime" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/elm-runtime/0.8.0.3/elm-runtime.min.js"); 
            console.log("elm-runtime Loaded Successfully");
            }
            
            
            if (args[i] == "email-autocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/email-autocomplete/0.1.3/jquery.email-autocomplete.min.js"); 
            console.log("email-autocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "embed-box" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/embed-box/2.0.3/embed-box.min.js"); 
            console.log("embed-box Loaded Successfully");
            }
            
            
            if (args[i] == "embed-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/embed-js/5.0.3/embed.min.js"); 
            console.log("embed-js Loaded Successfully");
            }
            
            
            if (args[i] == "embedly-jquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/embedly-jquery/3.1.2/jquery.embedly.min.js"); 
            console.log("embedly-jquery Loaded Successfully");
            }
            
            
            if (args[i] == "embedo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/embedo/1.7.3/embedo.min.js"); 
            console.log("embedo Loaded Successfully");
            }
            
            
            if (args[i] == "ember-auth" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-auth/9.0.7/ember-auth.min.js"); 
            console.log("ember-auth Loaded Successfully");
            }
            
            
            if (args[i] == "ember-computed-reverse" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-computed-reverse/0.1.0/ember-computed-reverse.min.js"); 
            console.log("ember-computed-reverse Loaded Successfully");
            }
            
            
            if (args[i] == "ember-data-django-rest-adapter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-data-django-rest-adapter/0.13.1/ember-data-django-rest-adapter.min.js"); 
            console.log("ember-data-django-rest-adapter Loaded Successfully");
            }
            
            
            if (args[i] == "ember-data-model-fragments" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-data-model-fragments/2.1.3/ember-data-model-fragments.min.js"); 
            console.log("ember-data-model-fragments Loaded Successfully");
            }
            
            
            if (args[i] == "ember-data.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-data.js/2.18.0/ember-data.min.js"); 
            console.log("ember-data.js Loaded Successfully");
            }
            
            
            if (args[i] == "ember-dialog" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-dialog/1.2.5/ember.dialog.min.js"); 
            console.log("ember-dialog Loaded Successfully");
            }
            
            
            if (args[i] == "ember-i18n" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-i18n/2.9.1/i18n.min.js"); 
            console.log("ember-i18n Loaded Successfully");
            }
            
            
            if (args[i] == "ember-localstorage-adapter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-localstorage-adapter/0.3.1/localstorage_adapter.min.js"); 
            console.log("ember-localstorage-adapter Loaded Successfully");
            }
            
            
            if (args[i] == "ember-resource.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-resource.js/2.3.5/ember-resource.min.js"); 
            console.log("ember-resource.js Loaded Successfully");
            }
            
            
            if (args[i] == "ember-simple-auth" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember-simple-auth/0.8.0/simple-auth.min.js"); 
            console.log("ember-simple-auth Loaded Successfully");
            }
            
            
            if (args[i] == "ember.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ember.js/2.17.0/ember.min.js"); 
            console.log("ember.js Loaded Successfully");
            }
            
            
            if (args[i] == "emberFire" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/emberFire/2.0.8/emberfire.min.js"); 
            console.log("emberFire Loaded Successfully");
            }
            
            
            if (args[i] == "emblem" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/emblem/0.4.0/emblem.min.js"); 
            console.log("emblem Loaded Successfully");
            }
            
            
            if (args[i] == "emergence.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/emergence.js/1.1.2/emergence.min.js"); 
            console.log("emergence.js Loaded Successfully");
            }
            
            
            if (args[i] == "eModal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eModal/1.2.65/eModal.min.js"); 
            console.log("eModal Loaded Successfully");
            }
            
            
            if (args[i] == "emoji-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/emoji-picker/1.1.5/js/emoji-picker.min.js"); 
            console.log("emoji-picker Loaded Successfully");
            }
            
            
            if (args[i] == "emoji-translate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/emoji-translate/1.0.2/emoji-translate.min.js"); 
            console.log("emoji-translate Loaded Successfully");
            }
            
            
            if (args[i] == "emojify.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/js/emojify.min.js"); 
            console.log("emojify.js Loaded Successfully");
            }
            
            
            if (args[i] == "emojione" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/lib/js/emojione.min.js"); 
            console.log("emojione Loaded Successfully");
            }
            
            
            if (args[i] == "emojionearea" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/emojionearea/3.2.6/emojionearea.min.js"); 
            console.log("emojionearea Loaded Successfully");
            }
            
            
            if (args[i] == "engine.io-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/engine.io-client/3.1.4/engine.io.min.js"); 
            console.log("engine.io-client Loaded Successfully");
            }
            
            
            if (args[i] == "enjoyhint" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/enjoyhint/3.1.0/enjoyhint.min.js"); 
            console.log("enjoyhint Loaded Successfully");
            }
            
            
            if (args[i] == "enquire.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/enquire.js/2.1.6/enquire.min.js"); 
            console.log("enquire.js Loaded Successfully");
            }
            
            
            if (args[i] == "epiceditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/epiceditor/0.2.2/js/epiceditor.min.js"); 
            console.log("epiceditor Loaded Successfully");
            }
            
            
            if (args[i] == "epitome" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/epitome/0.3.0/Epitome-min.js"); 
            console.log("epitome Loaded Successfully");
            }
            
            
            if (args[i] == "epoch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/epoch/0.8.4/js/epoch.min.js"); 
            console.log("epoch Loaded Successfully");
            }
            
            
            if (args[i] == "eqcss" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eqcss/1.8.0/EQCSS.min.js"); 
            console.log("eqcss Loaded Successfully");
            }
            
            
            if (args[i] == "equalize.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/equalize.js/1.0.2/equalize.min.js"); 
            console.log("equalize.js Loaded Successfully");
            }
            
            
            if (args[i] == "eruda" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eruda/1.3.2/eruda.min.js"); 
            console.log("eruda Loaded Successfully");
            }
            
            
            if (args[i] == "es-class" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/es-class/2.0.0/es-class.js"); 
            console.log("es-class Loaded Successfully");
            }
            
            
            if (args[i] == "es5-shim" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.10/es5-shim.min.js"); 
            console.log("es5-shim Loaded Successfully");
            }
            
            
            if (args[i] == "es6-promise" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.min.js"); 
            console.log("es6-promise Loaded Successfully");
            }
            
            
            if (args[i] == "es6-shim" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"); 
            console.log("es6-shim Loaded Successfully");
            }
            
            
            if (args[i] == "es6-tween" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/es6-tween/3.7.1/Tween.min.js"); 
            console.log("es6-tween Loaded Successfully");
            }
            
            
            if (args[i] == "es7-shim" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/es7-shim/6.0.0/es7-shim.min.js"); 
            console.log("es7-shim Loaded Successfully");
            }
            
            
            if (args[i] == "esprima" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/esprima/2.7.3/esprima.min.js"); 
            console.log("esprima Loaded Successfully");
            }
            
            
            if (args[i] == "esri-leaflet-geocoder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/esri-leaflet-geocoder/2.2.8/esri-leaflet-geocoder.js"); 
            console.log("esri-leaflet-geocoder Loaded Successfully");
            }
            
            
            if (args[i] == "esri-leaflet-related" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/esri-leaflet-related/2.0.0/esri-leaflet-related.js"); 
            console.log("esri-leaflet-related Loaded Successfully");
            }
            
            
            if (args[i] == "esri-leaflet-renderers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/esri-leaflet-renderers/2.0.6/esri-leaflet-renderers.js"); 
            console.log("esri-leaflet-renderers Loaded Successfully");
            }
            
            
            if (args[i] == "esri-leaflet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/esri-leaflet/2.1.1/esri-leaflet.js"); 
            console.log("esri-leaflet Loaded Successfully");
            }
            
            
            if (args[i] == "etp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/etp/2.0.7-94/etp.min.js"); 
            console.log("etp Loaded Successfully");
            }
            
            
            if (args[i] == "europa" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/europa/4.0.0/europa.min.js"); 
            console.log("europa Loaded Successfully");
            }
            
            
            if (args[i] == "evaporate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/evaporate/2.1.4/evaporate.min.js"); 
            console.log("evaporate Loaded Successfully");
            }
            
            
            if (args[i] == "eve.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eve.js/0.8.4/eve.min.js"); 
            console.log("eve.js Loaded Successfully");
            }
            
            
            if (args[i] == "event-source-polyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/event-source-polyfill/0.0.9/eventsource.min.js"); 
            console.log("event-source-polyfill Loaded Successfully");
            }
            
            
            if (args[i] == "eventable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eventable/1.0.5/eventable.min.js"); 
            console.log("eventable Loaded Successfully");
            }
            
            
            if (args[i] == "EventEmitter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/EventEmitter/5.2.4/EventEmitter.min.js"); 
            console.log("EventEmitter Loaded Successfully");
            }
            
            
            if (args[i] == "eventemitter3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eventemitter3/3.0.0/index.min.js"); 
            console.log("eventemitter3 Loaded Successfully");
            }
            
            
            if (args[i] == "eventmaster" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eventmaster/2.0.0/eventmaster.min.js"); 
            console.log("eventmaster Loaded Successfully");
            }
            
            
            if (args[i] == "eventproxy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/eventproxy/1.0.0/eventproxy.min.js"); 
            console.log("eventproxy Loaded Successfully");
            }
            
            
            if (args[i] == "evil-icons" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/evil-icons/1.9.0/evil-icons.min.js"); 
            console.log("evil-icons Loaded Successfully");
            }
            
            
            if (args[i] == "evil.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/evil.js/42/evil.min.js"); 
            console.log("evil.js Loaded Successfully");
            }
            
            
            if (args[i] == "excel-builder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/excel-builder/2.0.3/excel-builder.dist.min.js"); 
            console.log("excel-builder Loaded Successfully");
            }
            
            
            if (args[i] == "excel-formula" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/excel-formula/1.4.2/excel-formula.min.js"); 
            console.log("excel-formula Loaded Successfully");
            }
            
            
            if (args[i] == "exif-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/exif-js/2.3.0/exif.min.js"); 
            console.log("exif-js Loaded Successfully");
            }
            
            
            if (args[i] == "expect.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/expect.js/0.2.0/expect.min.js"); 
            console.log("expect.js Loaded Successfully");
            }
            
            
            if (args[i] == "expect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/expect/1.20.2/expect.min.js"); 
            console.log("expect Loaded Successfully");
            }
            
            
            if (args[i] == "expr-eval" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/expr-eval/1.2.1/bundle.min.js"); 
            console.log("expr-eval Loaded Successfully");
            }
            
            
            if (args[i] == "expressive-annotations-validate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/expressive-annotations-validate/2.7.4/expressive.annotations.validate.min.js"); 
            console.log("expressive-annotations-validate Loaded Successfully");
            }
            
            
            if (args[i] == "ext-core" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ext-core/3.1.0/ext-core.min.js"); 
            console.log("ext-core Loaded Successfully");
            }
            
            
            if (args[i] == "extjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all.js"); 
            console.log("extjs Loaded Successfully");
            }
            
            
            if (args[i] == "F2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/F2/1.4.3/f2.min.js"); 
            console.log("F2 Loaded Successfully");
            }
            
            
            if (args[i] == "fabric.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.22/fabric.min.js"); 
            console.log("fabric.js Loaded Successfully");
            }
            
            
            if (args[i] == "fakeLoader.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fakeLoader.js/1.1.0/fakeLoader.min.js"); 
            console.log("fakeLoader.js Loaded Successfully");
            }
            
            
            if (args[i] == "Faker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js"); 
            console.log("Faker Loaded Successfully");
            }
            
            
            if (args[i] == "falcor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/falcor/1.0.3/falcor.all.min.js"); 
            console.log("falcor Loaded Successfully");
            }
            
            
            if (args[i] == "fallback" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fallback/1.1.8/fallback.min.js"); 
            console.log("fallback Loaded Successfully");
            }
            
            
            if (args[i] == "fancybox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.js"); 
            console.log("fancybox Loaded Successfully");
            }
            
            
            if (args[i] == "fancyInput" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fancyInput/1.2.0/fancyInput.min.js"); 
            console.log("fancyInput Loaded Successfully");
            }
            
            
            if (args[i] == "fast-json-patch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fast-json-patch/2.0.6/fast-json-patch.min.js"); 
            console.log("fast-json-patch Loaded Successfully");
            }
            
            
            if (args[i] == "fast-xml-parser" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/2.8.3/parser.min.js"); 
            console.log("fast-xml-parser Loaded Successfully");
            }
            
            
            if (args[i] == "FastActive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/FastActive/1.0.1/FastActive.min.js"); 
            console.log("FastActive Loaded Successfully");
            }
            
            
            if (args[i] == "fastclick" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js"); 
            console.log("fastclick Loaded Successfully");
            }
            
            
            if (args[i] == "fastdom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fastdom/1.0.6/fastdom.min.js"); 
            console.log("fastdom Loaded Successfully");
            }
            
            
            if (args[i] == "fastselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fastselect/0.7.3/fastselect.min.js"); 
            console.log("fastselect Loaded Successfully");
            }
            
            
            if (args[i] == "favico.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js"); 
            console.log("favico.js Loaded Successfully");
            }
            
            
            if (args[i] == "faviconx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/faviconx/1.0.1/faviconx-min.js"); 
            console.log("faviconx Loaded Successfully");
            }
            
            
            if (args[i] == "fbbk-json" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fbbk-json/1.1.0/fjson.min.js"); 
            console.log("fbbk-json Loaded Successfully");
            }
            
            
            if (args[i] == "fdaciuk-ajax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fdaciuk-ajax/2.3.0/ajax.min.js"); 
            console.log("fdaciuk-ajax Loaded Successfully");
            }
            
            
            if (args[i] == "feather-icons" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.5.0/feather.min.js"); 
            console.log("feather-icons Loaded Successfully");
            }
            
            
            if (args[i] == "featherlight" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/featherlight/1.7.12/featherlight.min.js"); 
            console.log("featherlight Loaded Successfully");
            }
            
            
            if (args[i] == "feature.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/feature.js/1.0.1/feature.min.js"); 
            console.log("feature.js Loaded Successfully");
            }
            
            
            if (args[i] == "fecha" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fecha/2.3.2/fecha.min.js"); 
            console.log("fecha Loaded Successfully");
            }
            
            
            if (args[i] == "feedback.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/feedback.js/2012.10.17/feedback.min.js"); 
            console.log("feedback.js Loaded Successfully");
            }
            
            
            if (args[i] == "FeedEk" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/FeedEk/3.0.0/js/FeedEk.min.js"); 
            console.log("FeedEk Loaded Successfully");
            }
            
            
            if (args[i] == "fermata" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fermata/0.10.8/fermata.min.js"); 
            console.log("fermata Loaded Successfully");
            }
            
            
            if (args[i] == "fetch-jsonp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fetch-jsonp/1.1.3/fetch-jsonp.min.js"); 
            console.log("fetch-jsonp Loaded Successfully");
            }
            
            
            if (args[i] == "fetch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"); 
            console.log("fetch Loaded Successfully");
            }
            
            
            if (args[i] == "fetchival" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fetchival/0.3.2/index.min.js"); 
            console.log("fetchival Loaded Successfully");
            }
            
            
            if (args[i] == "fg-appendaround" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fg-appendaround/1.0.0/appendAround.min.js"); 
            console.log("fg-appendaround Loaded Successfully");
            }
            
            
            if (args[i] == "fg-snapper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fg-snapper/3.2.0/snapper.min.js"); 
            console.log("fg-snapper Loaded Successfully");
            }
            
            
            if (args[i] == "fiber" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fiber/1.0.5/fiber.min.js"); 
            console.log("fiber Loaded Successfully");
            }
            
            
            if (args[i] == "field-kit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/field-kit/2.1.0/field-kit.min.js"); 
            console.log("field-kit Loaded Successfully");
            }
            
            
            if (args[i] == "file-uploader" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/file-uploader/5.15.5/fine-uploader.min.js"); 
            console.log("file-uploader Loaded Successfully");
            }
            
            
            if (args[i] == "FileSaver.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js"); 
            console.log("FileSaver.js Loaded Successfully");
            }
            
            
            if (args[i] == "filesize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/filesize/3.5.11/filesize.min.js"); 
            console.log("filesize Loaded Successfully");
            }
            
            
            if (args[i] == "filter.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/filter.js/1.5.2/filter.min.js"); 
            console.log("filter.js Loaded Successfully");
            }
            
            
            if (args[i] == "filterizr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/filterizr/1.2.5/jquery.filterizr.min.js"); 
            console.log("filterizr Loaded Successfully");
            }
            
            
            if (args[i] == "findAndReplaceDOMText" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/findAndReplaceDOMText/0.4.6/findAndReplaceDOMText.min.js"); 
            console.log("findAndReplaceDOMText Loaded Successfully");
            }
            
            
            if (args[i] == "fingerprintjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs/0.5.3/fingerprint.min.js"); 
            console.log("fingerprintjs Loaded Successfully");
            }
            
            
            if (args[i] == "fingerprintjs2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"); 
            console.log("fingerprintjs2 Loaded Successfully");
            }
            
            
            if (args[i] == "firebug-lite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/firebug-lite/1.4.0/firebug-lite.min.js"); 
            console.log("firebug-lite Loaded Successfully");
            }
            
            
            if (args[i] == "FitText.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/FitText.js/1.2.0/jquery.fittext.min.js"); 
            console.log("FitText.js Loaded Successfully");
            }
            
            
            if (args[i] == "fitvids" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fitvids/1.2.0/jquery.fitvids.min.js"); 
            console.log("fitvids Loaded Successfully");
            }
            
            
            if (args[i] == "fixed-data-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fixed-data-table/0.6.5/fixed-data-table.min.js"); 
            console.log("fixed-data-table Loaded Successfully");
            }
            
            
            if (args[i] == "fixed-header-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fixed-header-table/1.3.0/jquery.fixedheadertable.min.js"); 
            console.log("fixed-header-table Loaded Successfully");
            }
            
            
            if (args[i] == "fixed-sticky" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fixed-sticky/0.1.7/fixedsticky.min.js"); 
            console.log("fixed-sticky Loaded Successfully");
            }
            
            
            if (args[i] == "fixto" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fixto/0.5.0/fixto.min.js"); 
            console.log("fixto Loaded Successfully");
            }
            
            
            if (args[i] == "flagstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flagstrap/1.0/js/jquery.flagstrap.min.js"); 
            console.log("flagstrap Loaded Successfully");
            }
            
            
            if (args[i] == "flatpickr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.1.4/flatpickr.min.js"); 
            console.log("flatpickr Loaded Successfully");
            }
            
            
            if (args[i] == "flexibility" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flexibility/2.0.1/flexibility.js"); 
            console.log("flexibility Loaded Successfully");
            }
            
            
            if (args[i] == "flexie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flexie/1.0.3/flexie.min.js"); 
            console.log("flexie Loaded Successfully");
            }
            
            
            if (args[i] == "flexisel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flexisel/2.2.2/js/jquery.flexisel.min.js"); 
            console.log("flexisel Loaded Successfully");
            }
            
            
            if (args[i] == "flexMenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flexMenu/1.4.2/flexmenu.min.js"); 
            console.log("flexMenu Loaded Successfully");
            }
            
            
            if (args[i] == "flickity" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flickity/2.0.10/flickity.pkgd.min.js"); 
            console.log("flickity Loaded Successfully");
            }
            
            
            if (args[i] == "flight" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flight/1.1.4/flight.min.js"); 
            console.log("flight Loaded Successfully");
            }
            
            
            if (args[i] == "flipclock" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.8/flipclock.min.js"); 
            console.log("flipclock Loaded Successfully");
            }
            
            
            if (args[i] == "flipcountdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flipcountdown/3.0.5/jquery.flipcountdown.min.js"); 
            console.log("flipcountdown Loaded Successfully");
            }
            
            
            if (args[i] == "flipCounter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flipCounter/1.2/jquery.flipCounter.pack.min.js"); 
            console.log("flipCounter Loaded Successfully");
            }
            
            
            if (args[i] == "FlipDiv" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/FlipDiv/1.6.0/FlipDiv.min.js"); 
            console.log("FlipDiv Loaded Successfully");
            }
            
            
            if (args[i] == "floating.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/floating.js/2.7.1/floating.js"); 
            console.log("floating.js Loaded Successfully");
            }
            
            
            if (args[i] == "floatlabels.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/floatlabels.js/1.0.0/floatlabels.min.js"); 
            console.log("floatlabels.js Loaded Successfully");
            }
            
            
            if (args[i] == "floatthead" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/floatthead/2.0.3/jquery.floatThead.min.js"); 
            console.log("floatthead Loaded Successfully");
            }
            
            
            if (args[i] == "flocks.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flocks.js/1.6.1/flocks.min.js"); 
            console.log("flocks.js Loaded Successfully");
            }
            
            
            if (args[i] == "flot.tooltip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flot.tooltip/0.9.0/jquery.flot.tooltip.min.js"); 
            console.log("flot.tooltip Loaded Successfully");
            }
            
            
            if (args[i] == "flot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/jquery.flot.min.js"); 
            console.log("flot Loaded Successfully");
            }
            
            
            if (args[i] == "flow.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flow.js/2.13.0/flow.min.js"); 
            console.log("flow.js Loaded Successfully");
            }
            
            
            if (args[i] == "flowchart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flowchart/1.8.0/flowchart.min.js"); 
            console.log("flowchart Loaded Successfully");
            }
            
            
            if (args[i] == "flowplayer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flowplayer/7.2.1/flowplayer.min.js"); 
            console.log("flowplayer Loaded Successfully");
            }
            
            
            if (args[i] == "Flowtype.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Flowtype.js/1.1.0/flowtype.min.js"); 
            console.log("Flowtype.js Loaded Successfully");
            }
            
            
            if (args[i] == "flubber" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flubber/0.4.0/flubber.min.js"); 
            console.log("flubber Loaded Successfully");
            }
            
            
            if (args[i] == "fluidbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fluidbox/2.0.5/js/jquery.fluidbox.min.js"); 
            console.log("fluidbox Loaded Successfully");
            }
            
            
            if (args[i] == "fluidvids.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fluidvids.js/2.4.1/fluidvids.min.js"); 
            console.log("fluidvids.js Loaded Successfully");
            }
            
            
            if (args[i] == "flux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flux/3.1.3/Flux.min.js"); 
            console.log("flux Loaded Successfully");
            }
            
            
            if (args[i] == "fluxify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fluxify/0.2.3/fluxify.min.js"); 
            console.log("fluxify Loaded Successfully");
            }
            
            
            if (args[i] == "flv.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.4.0/flv.min.js"); 
            console.log("flv.js Loaded Successfully");
            }
            
            
            if (args[i] == "foggy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/foggy/1.1.1/jquery.foggy.min.js"); 
            console.log("foggy Loaded Successfully");
            }
            
            
            if (args[i] == "fontawesome-iconpicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fontawesome-iconpicker/1.3.1/js/fontawesome-iconpicker.min.js"); 
            console.log("fontawesome-iconpicker Loaded Successfully");
            }
            
            
            if (args[i] == "fontfaceobserver" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fontfaceobserver/2.0.13/fontfaceobserver.standalone.js"); 
            console.log("fontfaceobserver Loaded Successfully");
            }
            
            
            if (args[i] == "foonav" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/foonav/0.0.6/foonav.min.js"); 
            console.log("foonav Loaded Successfully");
            }
            
            
            if (args[i] == "force-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/force-js/0.1.2/force.min.js"); 
            console.log("force-js Loaded Successfully");
            }
            
            
            if (args[i] == "foreach" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/foreach/2.0.5/index.min.js"); 
            console.log("foreach Loaded Successfully");
            }
            
            
            if (args[i] == "forerunnerdb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/forerunnerdb/2.0.15/fdb-all.min.js"); 
            console.log("forerunnerdb Loaded Successfully");
            }
            
            
            if (args[i] == "forge" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/forge/0.7.1/forge.min.js"); 
            console.log("forge Loaded Successfully");
            }
            
            
            if (args[i] == "formatter.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/formatter.js/0.1.5/formatter.min.js"); 
            console.log("formatter.js Loaded Successfully");
            }
            
            
            if (args[i] == "formbuilder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/formbuilder/0.2.1/formbuilder-min.js"); 
            console.log("formbuilder Loaded Successfully");
            }
            
            
            if (args[i] == "formstone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/formstone/1.4.2/js/core.js"); 
            console.log("formstone Loaded Successfully");
            }
            
            
            if (args[i] == "formsy-react" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/formsy-react/0.19.5/formsy-react.js"); 
            console.log("formsy-react Loaded Successfully");
            }
            
            
            if (args[i] == "formulajs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/formulajs/1.0.8/formula.min.js"); 
            console.log("formulajs Loaded Successfully");
            }
            
            
            if (args[i] == "Fort.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Fort.js/2.0.0/fort.min.js"); 
            console.log("Fort.js Loaded Successfully");
            }
            
            
            if (args[i] == "fotorama" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.js"); 
            console.log("fotorama Loaded Successfully");
            }
            
            
            if (args[i] == "foundation-datepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/foundation-datepicker/1.5.6/js/foundation-datepicker.min.js"); 
            console.log("foundation-datepicker Loaded Successfully");
            }
            
            
            if (args[i] == "foundation-essential" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/foundation-essential/6.2.2/js/foundation.min.js"); 
            console.log("foundation-essential Loaded Successfully");
            }
            
            
            if (args[i] == "foundation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/js/foundation.min.js"); 
            console.log("foundation Loaded Successfully");
            }
            
            
            if (args[i] == "fpo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fpo/6.1.6/fpo.min.js"); 
            console.log("fpo Loaded Successfully");
            }
            
            
            if (args[i] == "fpsmeter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fpsmeter/0.3.1/fpsmeter.min.js"); 
            console.log("fpsmeter Loaded Successfully");
            }
            
            
            if (args[i] == "framework7" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/framework7/2.0.2/js/framework7.min.js"); 
            console.log("framework7 Loaded Successfully");
            }
            
            
            if (args[i] == "free-jqgrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/free-jqgrid/4.15.2/jquery.jqgrid.min.js"); 
            console.log("free-jqgrid Loaded Successfully");
            }
            
            
            if (args[i] == "freewall" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/freewall/1.0.5/freewall.min.js"); 
            console.log("freewall Loaded Successfully");
            }
            
            
            if (args[i] == "freezer-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/freezer-js/0.13.0/freezer.min.js"); 
            console.log("freezer-js Loaded Successfully");
            }
            
            
            if (args[i] == "froala-editor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.7.3/js/froala_editor.min.js"); 
            console.log("froala-editor Loaded Successfully");
            }
            
            
            if (args[i] == "frontpress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/frontpress/1.0.8/frontpress.min.js"); 
            console.log("frontpress Loaded Successfully");
            }
            
            
            if (args[i] == "frozen-moment" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/frozen-moment/0.4.0/frozen-moment.min.js"); 
            console.log("frozen-moment Loaded Successfully");
            }
            
            
            if (args[i] == "frzr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/frzr/0.22.7/frzr.min.js"); 
            console.log("frzr Loaded Successfully");
            }
            
            
            if (args[i] == "fsvs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fsvs/1.2.2/js/bundle.min.js"); 
            console.log("fsvs Loaded Successfully");
            }
            
            
            if (args[i] == "ftscroller" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ftscroller/0.7.0/ftscroller.min.js"); 
            console.log("ftscroller Loaded Successfully");
            }
            
            
            if (args[i] == "fuckadblock" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js"); 
            console.log("fuckadblock Loaded Successfully");
            }
            
            
            if (args[i] == "fuelux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fuelux/3.16.3/js/fuelux.min.js"); 
            console.log("fuelux Loaded Successfully");
            }
            
            
            if (args[i] == "fullcalendar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.8.0/fullcalendar.min.js"); 
            console.log("fullcalendar Loaded Successfully");
            }
            
            
            if (args[i] == "function-plot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/function-plot/1.18.1/function-plot.js"); 
            console.log("function-plot Loaded Successfully");
            }
            
            
            if (args[i] == "FuncUnit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/FuncUnit/2.0.4/funcunit.min.js"); 
            console.log("FuncUnit Loaded Successfully");
            }
            
            
            if (args[i] == "fuse.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.2.0/fuse.min.js"); 
            console.log("fuse.js Loaded Successfully");
            }
            
            
            if (args[i] == "fuzzyset.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/fuzzyset.js/0.0.4/fuzzyset.min.js"); 
            console.log("fuzzyset.js Loaded Successfully");
            }
            
            
            if (args[i] == "g9" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/g9/1.0.16/g9.js"); 
            console.log("g9 Loaded Successfully");
            }
            
            
            if (args[i] == "ga-lite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ga-lite/2.0.1/ga-lite.min.js"); 
            console.log("ga-lite Loaded Successfully");
            }
            
            
            if (args[i] == "galleria" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/galleria.min.js"); 
            console.log("galleria Loaded Successfully");
            }
            
            
            if (args[i] == "galleriffic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/jquery.galleriffic.min.js"); 
            console.log("galleriffic Loaded Successfully");
            }
            
            
            if (args[i] == "garlic.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/garlic.js/1.4.0/garlic.min.js"); 
            console.log("garlic.js Loaded Successfully");
            }
            
            
            if (args[i] == "gas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gas/1.11.0/gas.min.js"); 
            console.log("gas Loaded Successfully");
            }
            
            
            if (args[i] == "gator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gator/1.2.4/gator.min.js"); 
            console.log("gator Loaded Successfully");
            }
            
            
            if (args[i] == "gauge.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gauge.js/1.3.5/gauge.min.js"); 
            console.log("gauge.js Loaded Successfully");
            }
            
            
            if (args[i] == "gentelella" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gentelella/1.4.0/js/custom.min.js"); 
            console.log("gentelella Loaded Successfully");
            }
            
            
            if (args[i] == "geo-location-javascript" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/geo-location-javascript/0.4.8/geo-min.js"); 
            console.log("geo-location-javascript Loaded Successfully");
            }
            
            
            if (args[i] == "geocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/geocomplete/1.7.0/jquery.geocomplete.min.js"); 
            console.log("geocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "geoext" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/geoext/1.1/script/GeoExt.js"); 
            console.log("geoext Loaded Successfully");
            }
            
            
            if (args[i] == "geojs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/geojs/0.13.0/geo.min.js"); 
            console.log("geojs Loaded Successfully");
            }
            
            
            if (args[i] == "geojson" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/geojson/0.5.0/geojson.min.js"); 
            console.log("geojson Loaded Successfully");
            }
            
            
            if (args[i] == "geojson2svg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/geojson2svg/1.2.3/geojson2svg.min.js"); 
            console.log("geojson2svg Loaded Successfully");
            }
            
            
            if (args[i] == "geolocator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/geolocator/2.1.1/geolocator.min.js"); 
            console.log("geolocator Loaded Successfully");
            }
            
            
            if (args[i] == "geopattern" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/geopattern/1.2.3/js/geopattern.min.js"); 
            console.log("geopattern Loaded Successfully");
            }
            
            
            if (args[i] == "gettext.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gettext.js/0.5.4/gettext.min.js"); 
            console.log("gettext.js Loaded Successfully");
            }
            
            
            if (args[i] == "gh.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gh.js/3.0.12/gh.min.js"); 
            console.log("gh.js Loaded Successfully");
            }
            
            
            if (args[i] == "gibberish-aes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gibberish-aes/1.0.0/gibberish-aes.min.js"); 
            console.log("gibberish-aes Loaded Successfully");
            }
            
            
            if (args[i] == "gibon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gibon/0.4.1/gibon.umd.js"); 
            console.log("gibon Loaded Successfully");
            }
            
            
            if (args[i] == "gif.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js"); 
            console.log("gif.js Loaded Successfully");
            }
            
            
            if (args[i] == "gifffer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gifffer/1.5.0/gifffer.min.js"); 
            console.log("gifffer Loaded Successfully");
            }
            
            
            if (args[i] == "gifshot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gifshot/0.3.2/gifshot.min.js"); 
            console.log("gifshot Loaded Successfully");
            }
            
            
            if (args[i] == "gijgo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gijgo/1.7.2/combined/js/gijgo.min.js"); 
            console.log("gijgo Loaded Successfully");
            }
            
            
            if (args[i] == "gillie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gillie/0.2.1/gillie.min.js"); 
            console.log("gillie Loaded Successfully");
            }
            
            
            if (args[i] == "gist-embed" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.6.0/gist-embed.min.js"); 
            console.log("gist-embed Loaded Successfully");
            }
            
            
            if (args[i] == "gitgraph.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gitgraph.js/1.11.4/gitgraph.min.js"); 
            console.log("gitgraph.js Loaded Successfully");
            }
            
            
            if (args[i] == "github-api" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/github-api/3.0.0/GitHub.min.js"); 
            console.log("github-api Loaded Successfully");
            }
            
            
            if (args[i] == "github-calendar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/github-calendar/1.2.1/github-calendar.min.js"); 
            console.log("github-calendar Loaded Successfully");
            }
            
            
            if (args[i] == "github-org-members.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/github-org-members.js/1.2.9/github-org-members.min.js"); 
            console.log("github-org-members.js Loaded Successfully");
            }
            
            
            if (args[i] == "github-repo-widget" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/github-repo-widget/e23d85ab8f/jquery.githubRepoWidget.min.js"); 
            console.log("github-repo-widget Loaded Successfully");
            }
            
            
            if (args[i] == "gitter-sidecar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gitter-sidecar/1.3.2/sidecar.js"); 
            console.log("gitter-sidecar Loaded Successfully");
            }
            
            
            if (args[i] == "gl-matrix" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.4.0/gl-matrix-min.js"); 
            console.log("gl-matrix Loaded Successfully");
            }
            
            
            if (args[i] == "glamor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/glamor/3.0.0-3/index.min.js"); 
            console.log("glamor Loaded Successfully");
            }
            
            
            if (args[i] == "glamorous" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/glamorous/4.11.2/glamorous.umd.min.js"); 
            console.log("glamorous Loaded Successfully");
            }
            
            
            if (args[i] == "Glide.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Glide.js/2.1.0/glide.min.js"); 
            console.log("Glide.js Loaded Successfully");
            }
            
            
            if (args[i] == "gliojs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gliojs/0.0.7/glio.min.js"); 
            console.log("gliojs Loaded Successfully");
            }
            
            
            if (args[i] == "globalize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize.min.js"); 
            console.log("globalize Loaded Successfully");
            }
            
            
            if (args[i] == "gmail-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gmail-js/0.6.12/gmail.min.js"); 
            console.log("gmail-js Loaded Successfully");
            }
            
            
            if (args[i] == "gmap3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gmap3/7.2.0/gmap3.min.js"); 
            console.log("gmap3 Loaded Successfully");
            }
            
            
            if (args[i] == "gmaps.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gmaps.js/0.4.25/gmaps.min.js"); 
            console.log("gmaps.js Loaded Successfully");
            }
            
            
            if (args[i] == "gmaps4rails" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gmaps4rails/2.1.2/gmaps4rails.min.js"); 
            console.log("gmaps4rails Loaded Successfully");
            }
            
            
            if (args[i] == "goalProgress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/goalProgress/1.0/goalProgress.min.js"); 
            console.log("goalProgress Loaded Successfully");
            }
            
            
            if (args[i] == "gojs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gojs/1.8.7/go.js"); 
            console.log("gojs Loaded Successfully");
            }
            
            
            if (args[i] == "golden-layout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/golden-layout/1.5.9/goldenlayout.min.js"); 
            console.log("golden-layout Loaded Successfully");
            }
            
            
            if (args[i] == "goodshare.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/goodshare.js/4.1.2/goodshare.min.js"); 
            console.log("goodshare.js Loaded Successfully");
            }
            
            
            if (args[i] == "gorillascript" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gorillascript/0.9.10/gorillascript.min.js"); 
            console.log("gorillascript Loaded Successfully");
            }
            
            
            if (args[i] == "gotem" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gotem/0.0.3/gotem.min.js"); 
            console.log("gotem Loaded Successfully");
            }
            
            
            if (args[i] == "gpu.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gpu.js/1.0.0/gpu.min.js"); 
            console.log("gpu.js Loaded Successfully");
            }
            
            
            if (args[i] == "grade-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/grade-js/1.0.10/grade.min.js"); 
            console.log("grade-js Loaded Successfully");
            }
            
            
            if (args[i] == "graingert-wow" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/graingert-wow/1.2.2/wow.min.js"); 
            console.log("graingert-wow Loaded Successfully");
            }
            
            
            if (args[i] == "granim" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/granim/1.1.0/granim.min.js"); 
            console.log("granim Loaded Successfully");
            }
            
            
            if (args[i] == "grapesjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/grapesjs/0.12.55/grapes.min.js"); 
            console.log("grapesjs Loaded Successfully");
            }
            
            
            if (args[i] == "graphael" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/graphael/0.5.1/g.raphael-min.js"); 
            console.log("graphael Loaded Successfully");
            }
            
            
            if (args[i] == "graphdracula" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/graphdracula/1.2.0/dracula.min.js"); 
            console.log("graphdracula Loaded Successfully");
            }
            
            
            if (args[i] == "graphicsjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/graphicsjs/1.3.2/graphics.min.js"); 
            console.log("graphicsjs Loaded Successfully");
            }
            
            
            if (args[i] == "graphiql" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/graphiql/0.11.11/graphiql.min.js"); 
            console.log("graphiql Loaded Successfully");
            }
            
            
            if (args[i] == "gremlins.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gremlins.js/0.1.0/gremlins.min.js"); 
            console.log("gremlins.js Loaded Successfully");
            }
            
            
            if (args[i] == "gridder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gridder/1.4.2/js/jquery.gridder.min.js"); 
            console.log("gridder Loaded Successfully");
            }
            
            
            if (args[i] == "griddle-react" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/griddle-react/0.8.1/Griddle.min.js"); 
            console.log("griddle-react Loaded Successfully");
            }
            
            
            if (args[i] == "gridifier" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gridifier/2.0.3/gridifier.min.js"); 
            console.log("gridifier Loaded Successfully");
            }
            
            
            if (args[i] == "gridstack.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gridstack.js/0.3.0/gridstack.min.js"); 
            console.log("gridstack.js Loaded Successfully");
            }
            
            
            if (args[i] == "grommet-index" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/grommet-index/1.1.3/grommet-index.min.js"); 
            console.log("grommet-index Loaded Successfully");
            }
            
            
            if (args[i] == "grommet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/grommet/1.9.0/grommet.min.js"); 
            console.log("grommet Loaded Successfully");
            }
            
            
            if (args[i] == "gsap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"); 
            console.log("gsap Loaded Successfully");
            }
            
            
            if (args[i] == "gss-engine" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gss-engine/2.0.0/gss.min.js"); 
            console.log("gss-engine Loaded Successfully");
            }
            
            
            if (args[i] == "guards" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/guards/1.5.1/guards.min.js"); 
            console.log("guards Loaded Successfully");
            }
            
            
            if (args[i] == "gulp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gulp/3.8.5/gulp.min.js"); 
            console.log("gulp Loaded Successfully");
            }
            
            
            if (args[i] == "gumshoe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gumshoe/3.5.0/js/gumshoe.min.js"); 
            console.log("gumshoe Loaded Successfully");
            }
            
            
            if (args[i] == "gyrejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/gyrejs/0.4.1/gyrejs.min.js"); 
            console.log("gyrejs Loaded Successfully");
            }
            
            
            if (args[i] == "h5Validate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/h5Validate/0.9.0/jquery.h5validate.min.js"); 
            console.log("h5Validate Loaded Successfully");
            }
            
            
            if (args[i] == "hallo.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hallo.js/1.1.1/hallo.min.js"); 
            console.log("hallo.js Loaded Successfully");
            }
            
            
            if (args[i] == "hammer-time" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hammer-time/1.1.0/hammer-time.min.js"); 
            console.log("hammer-time Loaded Successfully");
            }
            
            
            if (args[i] == "hammer.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"); 
            console.log("hammer.js Loaded Successfully");
            }
            
            
            if (args[i] == "hamsterjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hamsterjs/1.1.2/hamster.min.js"); 
            console.log("hamsterjs Loaded Successfully");
            }
            
            
            if (args[i] == "handjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/handjs/1.3.11/hand.min.js"); 
            console.log("handjs Loaded Successfully");
            }
            
            
            if (args[i] == "handlebars.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js"); 
            console.log("handlebars.js Loaded Successfully");
            }
            
            
            if (args[i] == "handsontable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/handsontable/0.35.0/handsontable.full.min.js"); 
            console.log("handsontable Loaded Successfully");
            }
            
            
            if (args[i] == "hasher" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hasher/1.2.0/hasher.min.js"); 
            console.log("hasher Loaded Successfully");
            }
            
            
            if (args[i] == "hashgrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hashgrid/6/hashgrid.min.js"); 
            console.log("hashgrid Loaded Successfully");
            }
            
            
            if (args[i] == "hazzik-jquery.livequery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hazzik-jquery.livequery/1.3.6/jquery.livequery.min.js"); 
            console.log("hazzik-jquery.livequery Loaded Successfully");
            }
            
            
            if (args[i] == "he" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/he/1.1.1/he.min.js"); 
            console.log("he Loaded Successfully");
            }
            
            
            if (args[i] == "headhesive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/headhesive/1.2.4/headhesive.min.js"); 
            console.log("headhesive Loaded Successfully");
            }
            
            
            if (args[i] == "headjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js"); 
            console.log("headjs Loaded Successfully");
            }
            
            
            if (args[i] == "headroom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/headroom/0.9.4/headroom.min.js"); 
            console.log("headroom Loaded Successfully");
            }
            
            
            if (args[i] == "heapbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/heapbox/0.9.4/jquery.heapbox.min.js"); 
            console.log("heapbox Loaded Successfully");
            }
            
            
            if (args[i] == "heatcanvas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/heatcanvas/1.2.3/heatcanvas.min.js"); 
            console.log("heatcanvas Loaded Successfully");
            }
            
            
            if (args[i] == "heatmap.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/heatmap.js/2.0.2/heatmap.min.js"); 
            console.log("heatmap.js Loaded Successfully");
            }
            
            
            if (args[i] == "helium-css" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/helium-css/1.1/helium.min.js"); 
            console.log("helium-css Loaded Successfully");
            }
            
            
            if (args[i] == "hellojs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hellojs/2.0.0-4/hello.js"); 
            console.log("hellojs Loaded Successfully");
            }
            
            
            if (args[i] == "hideseek" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hideseek/0.8.0/jquery.hideseek.min.js"); 
            console.log("hideseek Loaded Successfully");
            }
            
            
            if (args[i] == "hideshowpassword" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hideshowpassword/2.1.1/hideShowPassword.min.js"); 
            console.log("hideshowpassword Loaded Successfully");
            }
            
            
            if (args[i] == "highcharts-ng" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highcharts-ng/1.2.0/highcharts-ng.min.js"); 
            console.log("highcharts-ng Loaded Successfully");
            }
            
            
            if (args[i] == "highcharts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.0.4/highcharts.js"); 
            console.log("highcharts Loaded Successfully");
            }
            
            
            if (args[i] == "highchartTable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highchartTable/2.0.0/jquery.highchartTable.min.js"); 
            console.log("highchartTable Loaded Successfully");
            }
            
            
            if (args[i] == "highland" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highland/2.11.1/highland.min.js"); 
            console.log("highland Loaded Successfully");
            }
            
            
            if (args[i] == "highlight.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"); 
            console.log("highlight.js Loaded Successfully");
            }
            
            
            if (args[i] == "highlighter.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highlighter.js/1.0.0/highlighter.min.js"); 
            console.log("highlighter.js Loaded Successfully");
            }
            
            
            if (args[i] == "highlightjs-line-numbers.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.1.0/highlightjs-line-numbers.min.js"); 
            console.log("highlightjs-line-numbers.js Loaded Successfully");
            }
            
            
            if (args[i] == "highmaps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highmaps/6.0.3/highmaps.js"); 
            console.log("highmaps Loaded Successfully");
            }
            
            
            if (args[i] == "highstock" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/highstock/6.0.3/highstock.js"); 
            console.log("highstock Loaded Successfully");
            }
            
            
            if (args[i] == "hinclude" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hinclude/0.9.5/hinclude.min.js"); 
            console.log("hinclude Loaded Successfully");
            }
            
            
            if (args[i] == "history.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/history.js/1.8/native.history.min.js"); 
            console.log("history.js Loaded Successfully");
            }
            
            
            if (args[i] == "history" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/history/4.7.2/history.min.js"); 
            console.log("history Loaded Successfully");
            }
            
            
            if (args[i] == "hiw-api" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hiw-api/5.2.0/hiw-api.min.js"); 
            console.log("hiw-api Loaded Successfully");
            }
            
            
            if (args[i] == "hls.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.9/hls.min.js"); 
            console.log("hls.js Loaded Successfully");
            }
            
            
            if (args[i] == "hogan.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hogan.js/3.0.2/hogan.min.js"); 
            console.log("hogan.js Loaded Successfully");
            }
            
            
            if (args[i] == "hola_player" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hola_player/1.0.122/hola_player.js"); 
            console.log("hola_player Loaded Successfully");
            }
            
            
            if (args[i] == "hola-video.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hola-video.js/5.10.2-27/video.min.js"); 
            console.log("hola-video.js Loaded Successfully");
            }
            
            
            if (args[i] == "holder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.4/holder.min.js"); 
            console.log("holder Loaded Successfully");
            }
            
            
            if (args[i] == "holmes.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/holmes.js/1.17.3/js/holmes.js"); 
            console.log("holmes.js Loaded Successfully");
            }
            
            
            if (args[i] == "hopscotch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hopscotch/0.3.1/js/hopscotch.min.js"); 
            console.log("hopscotch Loaded Successfully");
            }
            
            
            if (args[i] == "horsey" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/horsey/4.2.2/horsey.min.js"); 
            console.log("horsey Loaded Successfully");
            }
            
            
            if (args[i] == "Hoverizr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Hoverizr/1.0/jquery.hoverizr.min.js"); 
            console.log("Hoverizr Loaded Successfully");
            }
            
            
            if (args[i] == "howler" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.7/howler.min.js"); 
            console.log("howler Loaded Successfully");
            }
            
            
            if (args[i] == "hprose-html5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hprose-html5/2.0.35/hprose-html5.js"); 
            console.log("hprose-html5 Loaded Successfully");
            }
            
            
            if (args[i] == "hrjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hrjs/1.0.2/hr.min.js"); 
            console.log("hrjs Loaded Successfully");
            }
            
            
            if (args[i] == "html-gl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html-gl/0.3.1/htmlgl.min.js"); 
            console.log("html-gl Loaded Successfully");
            }
            
            
            if (args[i] == "html-inspector" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html-inspector/0.8.2/html-inspector.min.js"); 
            console.log("html-inspector Loaded Successfully");
            }
            
            
            if (args[i] == "html-minifier" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html-minifier/3.5.8/htmlminifier.min.js"); 
            console.log("html-minifier Loaded Successfully");
            }
            
            
            if (args[i] == "html.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html.js/0.12.1/HTML.min.js"); 
            console.log("html.js Loaded Successfully");
            }
            
            
            if (args[i] == "html2canvas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"); 
            console.log("html2canvas Loaded Successfully");
            }
            
            
            if (args[i] == "html5-history-api" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html5-history-api/4.2.8/history.min.js"); 
            console.log("html5-history-api Loaded Successfully");
            }
            
            
            if (args[i] == "html5media" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html5media/1.1.8/html5media.min.js"); 
            console.log("html5media Loaded Successfully");
            }
            
            
            if (args[i] == "HTML5Notification" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/HTML5Notification/3.0.0/Notification.min.js"); 
            console.log("HTML5Notification Loaded Successfully");
            }
            
            
            if (args[i] == "html5shiv" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"); 
            console.log("html5shiv Loaded Successfully");
            }
            
            
            if (args[i] == "html5sortable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html5sortable/0.6.3/html.sortable.min.js"); 
            console.log("html5sortable Loaded Successfully");
            }
            
            
            if (args[i] == "html5tooltipsjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/html5tooltipsjs/1.7.2/html5tooltips.min.js"); 
            console.log("html5tooltipsjs Loaded Successfully");
            }
            
            
            if (args[i] == "http-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/http-client/4.3.1/http-client.min.js"); 
            console.log("http-client Loaded Successfully");
            }
            
            
            if (args[i] == "humane-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/humane-js/3.2.2/humane.min.js"); 
            console.log("humane-js Loaded Successfully");
            }
            
            
            if (args[i] == "humanize-duration" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/humanize-duration/3.12.0/humanize-duration.min.js"); 
            console.log("humanize-duration Loaded Successfully");
            }
            
            
            if (args[i] == "humanize-plus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/humanize-plus/1.8.2/humanize.min.js"); 
            console.log("humanize-plus Loaded Successfully");
            }
            
            
            if (args[i] == "husl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/husl/6.0.1/husl.min.js"); 
            console.log("husl Loaded Successfully");
            }
            
            
            if (args[i] == "hydna" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hydna/1.0.1/hydna.min.js"); 
            console.log("hydna Loaded Successfully");
            }
            
            
            if (args[i] == "hydra.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hydra.js/3.11.0/hydra.min.js"); 
            console.log("hydra.js Loaded Successfully");
            }
            
            
            if (args[i] == "hyperapp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hyperapp/1.0.0/hyperapp.js"); 
            console.log("hyperapp Loaded Successfully");
            }
            
            
            if (args[i] == "hyperform" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/hyperform/0.9.9/hyperform.min.js"); 
            console.log("hyperform Loaded Successfully");
            }
            
            
            if (args[i] == "Hyphenator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Hyphenator/5.3.0/Hyphenator.min.js"); 
            console.log("Hyphenator Loaded Successfully");
            }
            
            
            if (args[i] == "i18next-browser-languagedetector" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/i18next-browser-languagedetector/2.1.0/i18nextBrowserLanguageDetector.min.js"); 
            console.log("i18next-browser-languagedetector Loaded Successfully");
            }
            
            
            if (args[i] == "i18next-locize-backend" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/i18next-locize-backend/1.2.1/i18nextLocizeBackend.min.js"); 
            console.log("i18next-locize-backend Loaded Successfully");
            }
            
            
            if (args[i] == "i18next-xhr-backend" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/i18next-xhr-backend/1.5.0/i18nextXHRBackend.min.js"); 
            console.log("i18next-xhr-backend Loaded Successfully");
            }
            
            
            if (args[i] == "i18next" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/i18next/10.2.2/i18next.min.js"); 
            console.log("i18next Loaded Successfully");
            }
            
            
            if (args[i] == "i3d3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/i3d3/0.9.1/i3d3.min.js"); 
            console.log("i3d3 Loaded Successfully");
            }
            
            
            if (args[i] == "iamdustan-smoothscroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"); 
            console.log("iamdustan-smoothscroll Loaded Successfully");
            }
            
            
            if (args[i] == "ical.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ical.js/1.2.2/ical.min.js"); 
            console.log("ical.js Loaded Successfully");
            }
            
            
            if (args[i] == "ICanHaz.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ICanHaz.js/0.10.3/ICanHaz.min.js"); 
            console.log("ICanHaz.js Loaded Successfully");
            }
            
            
            if (args[i] == "ice" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ice/3.7.0/Ice.min.js"); 
            console.log("ice Loaded Successfully");
            }
            
            
            if (args[i] == "iCheck" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/iCheck/1.0.2/icheck.min.js"); 
            console.log("iCheck Loaded Successfully");
            }
            
            
            if (args[i] == "iconate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/iconate/0.2.7/iconate.min.js"); 
            console.log("iconate Loaded Successfully");
            }
            
            
            if (args[i] == "idbwrapper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/idbwrapper/1.7.2/idbstore.min.js"); 
            console.log("idbwrapper Loaded Successfully");
            }
            
            
            if (args[i] == "ideal-image-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ideal-image-slider/1.5.1/ideal-image-slider.min.js"); 
            console.log("ideal-image-slider Loaded Successfully");
            }
            
            
            if (args[i] == "identicon.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/identicon.js/2.3.1/identicon.min.js"); 
            console.log("identicon.js Loaded Successfully");
            }
            
            
            if (args[i] == "ie-love" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ie-love/0.0.3/ie-love.min.js"); 
            console.log("ie-love Loaded Successfully");
            }
            
            
            if (args[i] == "ie8" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ie8/0.8.0/ie8.js"); 
            console.log("ie8 Loaded Successfully");
            }
            
            
            if (args[i] == "ieBetter.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ieBetter.js/1.0.3/ieBetter-min.js"); 
            console.log("ieBetter.js Loaded Successfully");
            }
            
            
            if (args[i] == "Iframe-Height-Jquery-Plugin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Iframe-Height-Jquery-Plugin/1.2.5/iframeheight.min.js"); 
            console.log("Iframe-Height-Jquery-Plugin Loaded Successfully");
            }
            
            
            if (args[i] == "iframe-resizer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.15/iframeResizer.min.js"); 
            console.log("iframe-resizer Loaded Successfully");
            }
            
            
            if (args[i] == "ifvisible" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ifvisible/1.0.6/ifvisible.min.js"); 
            console.log("ifvisible Loaded Successfully");
            }
            
            
            if (args[i] == "iGrowl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/iGrowl/3.0.3/js/igrowl.min.js"); 
            console.log("iGrowl Loaded Successfully");
            }
            
            
            if (args[i] == "ikki" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ikki/0.2.0/ikki.min.js"); 
            console.log("ikki Loaded Successfully");
            }
            
            
            if (args[i] == "ilyabirman-likely" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ilyabirman-likely/2.3.0/likely.js"); 
            console.log("ilyabirman-likely Loaded Successfully");
            }
            
            
            if (args[i] == "image-map-resizer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/image-map-resizer/1.0.3/js/imageMapResizer.min.js"); 
            console.log("image-map-resizer Loaded Successfully");
            }
            
            
            if (args[i] == "image-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/image-picker/0.3.0/image-picker.min.js"); 
            console.log("image-picker Loaded Successfully");
            }
            
            
            if (args[i] == "imager.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/imager.js/0.5.1/Imager.min.js"); 
            console.log("imager.js Loaded Successfully");
            }
            
            
            if (args[i] == "imageviewer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/imageviewer/0.6.0/viewer.min.js"); 
            console.log("imageviewer Loaded Successfully");
            }
            
            
            if (args[i] == "imagine.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/imagine.js/0.1.0/imagine.min.js"); 
            console.log("imagine.js Loaded Successfully");
            }
            
            
            if (args[i] == "imask" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/imask/2.1.1/imask.min.js"); 
            console.log("imask Loaded Successfully");
            }
            
            
            if (args[i] == "imgareaselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/imgareaselect/0.9.10/js/jquery.imgareaselect.min.js"); 
            console.log("imgareaselect Loaded Successfully");
            }
            
            
            if (args[i] == "imgLiquid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/imgLiquid/0.9.944/js/imgLiquid-min.js"); 
            console.log("imgLiquid Loaded Successfully");
            }
            
            
            if (args[i] == "immstruct" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/immstruct/2.0.0/immstruct.min.js"); 
            console.log("immstruct Loaded Successfully");
            }
            
            
            if (args[i] == "immutable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js"); 
            console.log("immutable Loaded Successfully");
            }
            
            
            if (args[i] == "impress.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min.js"); 
            console.log("impress.js Loaded Successfully");
            }
            
            
            if (args[i] == "incremental-dom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/incremental-dom/0.5.1/incremental-dom-min.js"); 
            console.log("incremental-dom Loaded Successfully");
            }
            
            
            if (args[i] == "IndexedDBShim" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/IndexedDBShim/3.3.1/indexeddbshim.min.js"); 
            console.log("IndexedDBShim Loaded Successfully");
            }
            
            
            if (args[i] == "infamous" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/infamous/5.0.0/infamous.min.js"); 
            console.log("infamous Loaded Successfully");
            }
            
            
            if (args[i] == "infect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/infect/0.4.6/infect.min.js"); 
            console.log("infect Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-compat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-compat/3.10.1/inferno-compat.min.js"); 
            console.log("inferno-compat Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-component" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-component/3.10.1/inferno-component.min.js"); 
            console.log("inferno-component Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-create-class" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-create-class/3.10.1/inferno-create-class.min.js"); 
            console.log("inferno-create-class Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-create-element" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-create-element/3.10.1/inferno-create-element.min.js"); 
            console.log("inferno-create-element Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-devtools" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-devtools/3.10.1/inferno-devtools.min.js"); 
            console.log("inferno-devtools Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-hyperscript" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-hyperscript/3.10.1/inferno-hyperscript.min.js"); 
            console.log("inferno-hyperscript Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-mobx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-mobx/3.10.1/inferno-mobx.min.js"); 
            console.log("inferno-mobx Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-redux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-redux/3.10.1/inferno-redux.min.js"); 
            console.log("inferno-redux Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-router" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-router/3.10.1/inferno-router.min.js"); 
            console.log("inferno-router Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-server" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-server/3.10.1/inferno-server.min.js"); 
            console.log("inferno-server Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-shared" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-shared/3.10.1/inferno-shared.min.js"); 
            console.log("inferno-shared Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-test-utils" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-test-utils/3.10.1/inferno-test-utils.min.js"); 
            console.log("inferno-test-utils Loaded Successfully");
            }
            
            
            if (args[i] == "inferno-vnode-flags" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno-vnode-flags/4.0.0/inferno-vnode-flags.min.js"); 
            console.log("inferno-vnode-flags Loaded Successfully");
            }
            
            
            if (args[i] == "inferno" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inferno/3.10.1/inferno.min.js"); 
            console.log("inferno Loaded Successfully");
            }
            
            
            if (args[i] == "infieldLabel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/infieldLabel/1.0.2/jquery.infieldLabel.min.js"); 
            console.log("infieldLabel Loaded Successfully");
            }
            
            
            if (args[i] == "infinity" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/infinity/0.2.2/infinity.min.js"); 
            console.log("infinity Loaded Successfully");
            }
            
            
            if (args[i] == "infusion" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/infusion/2.0.0/infusion-all.min.js"); 
            console.log("infusion Loaded Successfully");
            }
            
            
            if (args[i] == "inheritance-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inheritance-js/0.4.12/inheritance.min.js"); 
            console.log("inheritance-js Loaded Successfully");
            }
            
            
            if (args[i] == "ink" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/js/ink-all.min.js"); 
            console.log("ink Loaded Successfully");
            }
            
            
            if (args[i] == "inobounce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.1.5/inobounce.min.js"); 
            console.log("inobounce Loaded Successfully");
            }
            
            
            if (args[i] == "inputmask-multi" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inputmask-multi/1.2.0/js/jquery.inputmask-multi.min.js"); 
            console.log("inputmask-multi Loaded Successfully");
            }
            
            
            if (args[i] == "insightjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/insightjs/1.4.0/insight.min.js"); 
            console.log("insightjs Loaded Successfully");
            }
            
            
            if (args[i] == "inspire-tree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/inspire-tree/4.2.1/inspire-tree.min.js"); 
            console.log("inspire-tree Loaded Successfully");
            }
            
            
            if (args[i] == "instafeed.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js"); 
            console.log("instafeed.js Loaded Successfully");
            }
            
            
            if (args[i] == "instafetch.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/instafetch.js/1.5.0/instafetch.min.js"); 
            console.log("instafetch.js Loaded Successfully");
            }
            
            
            if (args[i] == "instagram-lite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/instagram-lite/2.0.0/instagramLite.min.js"); 
            console.log("instagram-lite Loaded Successfully");
            }
            
            
            if (args[i] == "instantclick" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/instantclick/3.0.1/instantclick.min.js"); 
            console.log("instantclick Loaded Successfully");
            }
            
            
            if (args[i] == "instantsearch.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/instantsearch.js/2.3.3/instantsearch.min.js"); 
            console.log("instantsearch.js Loaded Successfully");
            }
            
            
            if (args[i] == "intense-images" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/intense-images/1.0.7/intense.min.js"); 
            console.log("intense-images Loaded Successfully");
            }
            
            
            if (args[i] == "interact.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.9/interact.min.js"); 
            console.log("interact.js Loaded Successfully");
            }
            
            
            if (args[i] == "interactive-data-display" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/interactive-data-display/1.5.1/idd.min.js"); 
            console.log("interactive-data-display Loaded Successfully");
            }
            
            
            if (args[i] == "intercom.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/intercom.js/0.1.4/intercom.min.js"); 
            console.log("intercom.js Loaded Successfully");
            }
            
            
            if (args[i] == "intercooler-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/intercooler-js/1.2.1/intercooler.min.js"); 
            console.log("intercooler-js Loaded Successfully");
            }
            
            
            if (args[i] == "interpolate.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/interpolate.js/1.1.0/interpolate.min.js"); 
            console.log("interpolate.js Loaded Successfully");
            }
            
            
            if (args[i] == "intl-tel-input" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/intlTelInput.min.js"); 
            console.log("intl-tel-input Loaded Successfully");
            }
            
            
            if (args[i] == "intro.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.7.0/intro.min.js"); 
            console.log("intro.js Loaded Successfully");
            }
            
            
            if (args[i] == "ion-rangeslider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.2.0/js/ion.rangeSlider.min.js"); 
            console.log("ion-rangeslider Loaded Successfully");
            }
            
            
            if (args[i] == "ion-sound" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/js/ion.sound.min.js"); 
            console.log("ion-sound Loaded Successfully");
            }
            
            
            if (args[i] == "ion-tree-list" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ion-tree-list/0.0.11/ion-tree-list.min.js"); 
            console.log("ion-tree-list Loaded Successfully");
            }
            
            
            if (args[i] == "ion.calendar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ion.calendar/2.0.2/js/ion.calendar.min.js"); 
            console.log("ion.calendar Loaded Successfully");
            }
            
            
            if (args[i] == "ion.checkradio" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ion.checkradio/2.0.0/js/ion.checkRadio.min.js"); 
            console.log("ion.checkradio Loaded Successfully");
            }
            
            
            if (args[i] == "ionic-filter-bar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ionic-filter-bar/1.1.1/ionic.filter.bar.min.js"); 
            console.log("ionic-filter-bar Loaded Successfully");
            }
            
            
            if (args[i] == "ionic-framework" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ionic-framework/2.0.0-beta.2/ionic.min.js"); 
            console.log("ionic-framework Loaded Successfully");
            }
            
            
            if (args[i] == "ionic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ionic/1.3.2/js/ionic.min.js"); 
            console.log("ionic Loaded Successfully");
            }
            
            
            if (args[i] == "ipaddr.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ipaddr.js/1.5.4/ipaddr.min.js"); 
            console.log("ipaddr.js Loaded Successfully");
            }
            
            
            if (args[i] == "ipfs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ipfs/0.27.5/index.min.js"); 
            console.log("ipfs Loaded Successfully");
            }
            
            
            if (args[i] == "is_js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/is_js/0.9.0/is.min.js"); 
            console.log("is_js Loaded Successfully");
            }
            
            
            if (args[i] == "is-in-viewport" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/is-in-viewport/3.0.0/isInViewport.min.js"); 
            console.log("is-in-viewport Loaded Successfully");
            }
            
            
            if (args[i] == "iScroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/iScroll/5.2.0/iscroll.min.js"); 
            console.log("iScroll Loaded Successfully");
            }
            
            
            if (args[i] == "ismobilejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ismobilejs/0.4.1/isMobile.min.js"); 
            console.log("ismobilejs Loaded Successfully");
            }
            
            
            if (args[i] == "isomer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/isomer/0.2.6/isomer.min.js"); 
            console.log("isomer Loaded Successfully");
            }
            
            
            if (args[i] == "iview" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/iview/2.8.0/iview.min.js"); 
            console.log("iview Loaded Successfully");
            }
            
            
            if (args[i] == "iviewer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/iviewer/0.7.11/jquery.iviewer.min.js"); 
            console.log("iviewer Loaded Successfully");
            }
            
            
            if (args[i] == "ixjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ixjs/1.0.6/ix.min.js"); 
            console.log("ixjs Loaded Successfully");
            }
            
            
            if (args[i] == "izimodal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.5.1/js/iziModal.min.js"); 
            console.log("izimodal Loaded Successfully");
            }
            
            
            if (args[i] == "izitoast" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.2.0/js/iziToast.min.js"); 
            console.log("izitoast Loaded Successfully");
            }
            
            
            if (args[i] == "jade" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jade/1.11.0/jade.min.js"); 
            console.log("jade Loaded Successfully");
            }
            
            
            if (args[i] == "jarallax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jarallax/1.9.3/jarallax.min.js"); 
            console.log("jarallax Loaded Successfully");
            }
            
            
            if (args[i] == "jasmine-ajax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jasmine-ajax/3.3.1/mock-ajax.min.js"); 
            console.log("jasmine-ajax Loaded Successfully");
            }
            
            
            if (args[i] == "jasmine" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.8.0/jasmine.min.js"); 
            console.log("jasmine Loaded Successfully");
            }
            
            
            if (args[i] == "javascript-astar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/javascript-astar/0.4.1/astar.min.js"); 
            console.log("javascript-astar Loaded Successfully");
            }
            
            
            if (args[i] == "JavaScript-autoComplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/JavaScript-autoComplete/1.0.4/auto-complete.min.js"); 
            console.log("JavaScript-autoComplete Loaded Successfully");
            }
            
            
            if (args[i] == "javascript-canvas-to-blob" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/javascript-canvas-to-blob/3.14.0/js/canvas-to-blob.min.js"); 
            console.log("javascript-canvas-to-blob Loaded Successfully");
            }
            
            
            if (args[i] == "javascript-debug" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/javascript-debug/0.4/ba-debug.min.js"); 
            console.log("javascript-debug Loaded Successfully");
            }
            
            
            if (args[i] == "javascript-detect-element-resize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/javascript-detect-element-resize/0.5.3/detect-element-resize.min.js"); 
            console.log("javascript-detect-element-resize Loaded Successfully");
            }
            
            
            if (args[i] == "javascript-hooker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/javascript-hooker/0.2.3/ba-hooker.min.js"); 
            console.log("javascript-hooker Loaded Successfully");
            }
            
            
            if (args[i] == "javascript-state-machine" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/javascript-state-machine/2.0.0/state-machine.min.js"); 
            console.log("javascript-state-machine Loaded Successfully");
            }
            
            
            if (args[i] == "javascript.util" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/javascript.util/0.12.12/javascript.util.min.js"); 
            console.log("javascript.util Loaded Successfully");
            }
            
            
            if (args[i] == "jblocks" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jblocks/1.0.6/index.min.js"); 
            console.log("jblocks Loaded Successfully");
            }
            
            
            if (args[i] == "jbone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jbone/1.2.1/jbone.min.js"); 
            console.log("jbone Loaded Successfully");
            }
            
            
            if (args[i] == "jBox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jBox/0.4.9/jBox.min.js"); 
            console.log("jBox Loaded Successfully");
            }
            
            
            if (args[i] == "jcalculator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jcalculator/1403955268/jcalculator.min.js"); 
            console.log("jcalculator Loaded Successfully");
            }
            
            
            if (args[i] == "jcanvas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jcanvas/20.1.4/min/jcanvas.min.js"); 
            console.log("jcanvas Loaded Successfully");
            }
            
            
            if (args[i] == "jcarousel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jcarousel/0.3.5/jquery.jcarousel.min.js"); 
            console.log("jcarousel Loaded Successfully");
            }
            
            
            if (args[i] == "jcf" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jcf/1.2.3/js/jcf.js"); 
            console.log("jcf Loaded Successfully");
            }
            
            
            if (args[i] == "jclic.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jclic.js/1.0.2/jclic.min.js"); 
            console.log("jclic.js Loaded Successfully");
            }
            
            
            if (args[i] == "jed" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jed/1.1.1/jed.min.js"); 
            console.log("jed Loaded Successfully");
            }
            
            
            if (args[i] == "jeditable.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jeditable.js/1.7.3/jeditable.min.js"); 
            console.log("jeditable.js Loaded Successfully");
            }
            
            
            if (args[i] == "jets" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jets/0.14.0/jets.min.js"); 
            console.log("jets Loaded Successfully");
            }
            
            
            if (args[i] == "jexcel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jexcel/1.3.4/js/jquery.jexcel.min.js"); 
            console.log("jexcel Loaded Successfully");
            }
            
            
            if (args[i] == "jGravity" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jGravity/0.8.0/jGravity-min.js"); 
            console.log("jGravity Loaded Successfully");
            }
            
            
            if (args[i] == "jic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jic/2.0.2/JIC.min.js"); 
            console.log("jic Loaded Successfully");
            }
            
            
            if (args[i] == "jinplace" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jinplace/1.2.1/jinplace.min.js"); 
            console.log("jinplace Loaded Successfully");
            }
            
            
            if (args[i] == "jinq" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jinq/1.6.1/jinqjs.min.js"); 
            console.log("jinq Loaded Successfully");
            }
            
            
            if (args[i] == "jInvertScroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jInvertScroll/0.8.3/js/jquery.jInvertScroll.min.js"); 
            console.log("jInvertScroll Loaded Successfully");
            }
            
            
            if (args[i] == "jit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jit/2.0.2/jit.min.js"); 
            console.log("jit Loaded Successfully");
            }
            
            
            if (args[i] == "jmespath" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jmespath/0.15.0/jmespath.min.js"); 
            console.log("jmespath Loaded Successfully");
            }
            
            
            if (args[i] == "jmpress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jmpress/0.4.5/jmpress.min.js"); 
            console.log("jmpress Loaded Successfully");
            }
            
            
            if (args[i] == "jo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jo/0.4.1/jo.min.js"); 
            console.log("jo Loaded Successfully");
            }
            
            
            if (args[i] == "jodit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jodit/3.1.3/jodit.min.js"); 
            console.log("jodit Loaded Successfully");
            }
            
            
            if (args[i] == "jointjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jointjs/2.0.1/joint.min.js"); 
            console.log("jointjs Loaded Successfully");
            }
            
            
            if (args[i] == "joopl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/joopl/2.3.0/joopl.min.js"); 
            console.log("joopl Loaded Successfully");
            }
            
            
            if (args[i] == "Jouele" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Jouele/2.3.0/jouele.js"); 
            console.log("Jouele Loaded Successfully");
            }
            
            
            if (args[i] == "joyride" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/joyride/2.1.0/jquery.joyride.min.js"); 
            console.log("joyride Loaded Successfully");
            }
            
            
            if (args[i] == "jplayer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer/jquery.jplayer.min.js"); 
            console.log("jplayer Loaded Successfully");
            }
            
            
            if (args[i] == "jplist" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jplist/5.2.0/js/jplist.core.min.js"); 
            console.log("jplist Loaded Successfully");
            }
            
            
            if (args[i] == "jq-console" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jq-console/2.7.7/jqconsole.min.js"); 
            console.log("jq-console Loaded Successfully");
            }
            
            
            if (args[i] == "jqBootstrapValidation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqBootstrapValidation/1.3.7/jqBootstrapValidation.min.js"); 
            console.log("jqBootstrapValidation Loaded Successfully");
            }
            
            
            if (args[i] == "jqcloud" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqcloud/1.0.4/jqcloud.min.js"); 
            console.log("jqcloud Loaded Successfully");
            }
            
            
            if (args[i] == "jqgrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqgrid/4.6.0/js/jquery.jqGrid.min.js"); 
            console.log("jqgrid Loaded Successfully");
            }
            
            
            if (args[i] == "jqlouds" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqlouds/0.2.3/jquery.jqlouds.min.js"); 
            console.log("jqlouds Loaded Successfully");
            }
            
            
            if (args[i] == "jqModal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqModal/1.4.2/jqModal.min.js"); 
            console.log("jqModal Loaded Successfully");
            }
            
            
            if (args[i] == "jqPlot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.9/jquery.jqplot.min.js"); 
            console.log("jqPlot Loaded Successfully");
            }
            
            
            if (args[i] == "jqplugin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqplugin/1.0.2/jquery.jqplugin.min.js"); 
            console.log("jqplugin Loaded Successfully");
            }
            
            
            if (args[i] == "jQRangeSlider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQRangeSlider/5.7.2/jQRangeSlider.min.js"); 
            console.log("jQRangeSlider Loaded Successfully");
            }
            
            
            if (args[i] == "jqtree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqtree/1.4.4/tree.jquery.min.js"); 
            console.log("jqtree Loaded Successfully");
            }
            
            
            if (args[i] == "jquery_lazyload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery_lazyload/1.9.7/jquery.lazyload.min.js"); 
            console.log("jquery_lazyload Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-advanced-news-ticker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-advanced-news-ticker/1.0.1/js/newsTicker.min.js"); 
            console.log("jquery-advanced-news-ticker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ajax-localstorage-cache" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ajax-localstorage-cache/2.0.1/jalc.min.js"); 
            console.log("jquery-ajax-localstorage-cache Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ajaxchimp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxchimp/1.3.0/jquery.ajaxchimp.min.js"); 
            console.log("jquery-ajaxchimp Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ajaxQueue" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxQueue/0.1.1/jquery.ajaxQueue.min.js"); 
            console.log("jquery-ajaxQueue Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ajaxtransport-xdomainrequest" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.4/jquery.xdomainrequest.min.js"); 
            console.log("jquery-ajaxtransport-xdomainrequest Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ajaxy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxy/1.6.1/scripts/jquery.ajaxy.min.js"); 
            console.log("jquery-ajaxy Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-animateNumber" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-animateNumber/0.0.14/jquery.animateNumber.min.js"); 
            console.log("jquery-animateNumber Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-autocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-autocomplete/1.0.7/jquery.auto-complete.min.js"); 
            console.log("jquery-autocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-autotab" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-autotab/1.9.2/js/jquery.autotab.min.js"); 
            console.log("jquery-autotab Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-awesome-cursor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-awesome-cursor/0.3.1/jquery.awesome-cursor.min.js"); 
            console.log("jquery-awesome-cursor Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-backstretch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"); 
            console.log("jquery-backstretch Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-bar-rating" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-bar-rating/1.2.2/jquery.barrating.min.js"); 
            console.log("jquery-bar-rating Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-bgiframe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-bgiframe/3.0.1/jquery.bgiframe.min.js"); 
            console.log("jquery-bgiframe Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-boilerplate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-boilerplate/4.1.0/jquery.boilerplate.min.js"); 
            console.log("jquery-boilerplate Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-bootgrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-bootgrid/1.3.1/jquery.bootgrid.min.js"); 
            console.log("jquery-bootgrid Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-bootpag" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-bootpag/1.0.4/jquery.bootpag.min.js"); 
            console.log("jquery-bootpag Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-browser" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js"); 
            console.log("jquery-browser Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-cascading-dropdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-cascading-dropdown/1.2.7/jquery.cascadingdropdown.min.js"); 
            console.log("jquery-cascading-dropdown Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-chained" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-chained/1.0.1/jquery.chained.min.js"); 
            console.log("jquery-chained Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-circle-progress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js"); 
            console.log("jquery-circle-progress Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-color" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-color/2.1.2/jquery.color.min.js"); 
            console.log("jquery-color Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-compat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-compat/3.0.0-alpha1/jquery.min.js"); 
            console.log("jquery-compat Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-confirm" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"); 
            console.log("jquery-confirm Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-contextify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-contextify/1.0.8/jquery.contextify.min.js"); 
            console.log("jquery-contextify Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-contextmenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.6.3/jquery.contextMenu.min.js"); 
            console.log("jquery-contextmenu Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-cookie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"); 
            console.log("jquery-cookie Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-cookiebar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-cookiebar/1.0.5/jquery.cookiebar.min.js"); 
            console.log("jquery-cookiebar Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-countdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-countdown/2.0.2/jquery.countdown.min.js"); 
            console.log("jquery-countdown Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-countto" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-countto/1.2.0/jquery.countTo.min.js"); 
            console.log("jquery-countto Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-csv" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.8.3/jquery.csv.min.js"); 
            console.log("jquery-csv Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-data-remote" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-data-remote/1.2.1/jquery.data-remote.min.js"); 
            console.log("jquery-data-remote Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-date-range-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-date-range-picker/0.16.1/jquery.daterangepicker.min.js"); 
            console.log("jquery-date-range-picker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-dateFormat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-dateFormat/1.0/jquery.dateFormat.min.js"); 
            console.log("jquery-dateFormat Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-datetimepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.14/jquery.datetimepicker.full.min.js"); 
            console.log("jquery-datetimepicker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-details" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-details/0.1.0/jquery.details.min.js"); 
            console.log("jquery-details Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-domPath" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-domPath/1.0.0/jquery.domPath.min.js"); 
            console.log("jquery-domPath Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-dotimeout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-dotimeout/1.0/jquery.ba-dotimeout.min.js"); 
            console.log("jquery-dotimeout Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-dropdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-dropdown/2.0.3/jquery.dropdown.min.js"); 
            console.log("jquery-dropdown Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-easing" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"); 
            console.log("jquery-easing Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-easy-ticker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-easy-ticker/2.0.0/jquery.easy-ticker.min.js"); 
            console.log("jquery-easy-ticker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-endless-scroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-endless-scroll/1.8.0/js/jquery.endless-scroll.min.js"); 
            console.log("jquery-endless-scroll Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-expandable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-expandable/1.1.4/jquery.expandable.min.js"); 
            console.log("jquery-expandable Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-expander" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-expander/1.7.0/jquery.expander.min.js"); 
            console.log("jquery-expander Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-flexdatalist" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-flexdatalist/2.2.2/jquery.flexdatalist.min.js"); 
            console.log("jquery-flexdatalist Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-flexImages" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-flexImages/1.0.4/jquery.flex-images.min.js"); 
            console.log("jQuery-flexImages Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-Flip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-Flip/1.1.2/jquery.flip.min.js"); 
            console.log("jQuery-Flip Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-footable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-footable/3.1.6/footable.min.js"); 
            console.log("jquery-footable Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-form-serializer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-form-serializer/1.2.0/jQuery-form-serializer.min.js"); 
            console.log("jquery-form-serializer Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-form-validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.77/jquery.form-validator.min.js"); 
            console.log("jquery-form-validator Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-fracs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-fracs/0.15.1/jquery.fracs.min.js"); 
            console.log("jquery-fracs Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-fullscreen-plugin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-fullscreen-plugin/1.1.4/jquery.fullscreen-min.js"); 
            console.log("jquery-fullscreen-plugin Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-gamequery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-gamequery/0.7.0/jquery.gamequery.min.js"); 
            console.log("jquery-gamequery Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-Geolocation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-Geolocation/1.0.50/jquery.geolocation.min.js"); 
            console.log("jQuery-Geolocation Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-handsontable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-handsontable/0.10.2/jquery.handsontable.full.min.js"); 
            console.log("jquery-handsontable Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-hashchange" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-hashchange/1.3/jquery.ba-hashchange.min.js"); 
            console.log("jquery-hashchange Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-highlighttextarea" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-highlighttextarea/3.1.3/jquery.highlighttextarea.min.js"); 
            console.log("jquery-highlighttextarea Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-history" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-history/1.9/jquery.history.min.js"); 
            console.log("jquery-history Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-i18next" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-i18next/1.2.1/jquery-i18next.min.js"); 
            console.log("jquery-i18next Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-idletimer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-idletimer/1.0.0/idle-timer.min.js"); 
            console.log("jquery-idletimer Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-image-upload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-image-upload/1.2.0/jQuery-image-upload.min.js"); 
            console.log("jquery-image-upload Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-impromptu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-impromptu/6.2.3/jquery-impromptu.min.js"); 
            console.log("jquery-impromptu Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-infinitescroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-infinitescroll/3.0.2/infinite-scroll.pkgd.min.js"); 
            console.log("jquery-infinitescroll Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-instagram" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-instagram/0.3.1/instagram.min.js"); 
            console.log("jquery-instagram Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-jcrop" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-jcrop/2.0.4/js/Jcrop.min.js"); 
            console.log("jquery-jcrop Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-jgrowl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-jgrowl/1.4.6/jquery.jgrowl.min.js"); 
            console.log("jquery-jgrowl Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-jkit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-jkit/1.1.8/jquery.jkit.min.js"); 
            console.log("jquery-jkit Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-json-editor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-json-editor/1.1.0/jquery-json-editor.min.js"); 
            console.log("jquery-json-editor Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-json" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-json/2.6.0/jquery.json.min.js"); 
            console.log("jquery-json Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-JSONP" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-JSONP/2.4.0/jquery.jsonp.min.js"); 
            console.log("jQuery-JSONP Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-jsonview" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-jsonview/1.2.3/jquery.jsonview.min.js"); 
            console.log("jquery-jsonview Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-Knob" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-Knob/1.2.13/jquery.knob.min.js"); 
            console.log("jQuery-Knob Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-lang-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-lang-js/3.0.0/jquery-lang.min.js"); 
            console.log("jquery-lang-js Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-layout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-layout/1.4.3/jquery.layout.min.js"); 
            console.log("jquery-layout Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-lazyload-any" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-lazyload-any/0.3.1/jquery.lazyload-any.min.js"); 
            console.log("jquery-lazyload-any Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-linkify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-linkify/2.1.5/linkify.min.js"); 
            console.log("jQuery-linkify Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-localScroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-localScroll/2.0.0/jquery.localScroll.min.js"); 
            console.log("jquery-localScroll Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-locationpicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-locationpicker/0.1.12/locationpicker.jquery.min.js"); 
            console.log("jquery-locationpicker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-mapael" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-mapael/2.1.0/js/jquery.mapael.min.js"); 
            console.log("jquery-mapael Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-maskmoney" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"); 
            console.log("jquery-maskmoney Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-migrate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.0.1/jquery-migrate.min.js"); 
            console.log("jquery-migrate Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-minicolors" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.2.6/jquery.minicolors.min.js"); 
            console.log("jquery-minicolors Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-mobile-datebox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-mobile-datebox/1.1.1/jqm-datebox.core.min.js"); 
            console.log("jquery-mobile-datebox Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-mobile" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-mobile/1.4.5/jquery.mobile.min.js"); 
            console.log("jquery-mobile Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-mockjax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-mockjax/1.6.2/jquery.mockjax.min.js"); 
            console.log("jquery-mockjax Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-modal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"); 
            console.log("jquery-modal Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-mosaic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-mosaic/0.131/jquery.mosaic.min.js"); 
            console.log("jquery-mosaic Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-mousewheel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"); 
            console.log("jquery-mousewheel Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-nearest" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-nearest/1.4.0/jquery.nearest.min.js"); 
            console.log("jquery-nearest Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-nice-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"); 
            console.log("jquery-nice-select Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-nivoslider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-nivoslider/3.2/jquery.nivo.slider.pack.min.js"); 
            console.log("jquery-nivoslider Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-noty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-noty/2.4.1/jquery.noty.min.js"); 
            console.log("jquery-noty Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-nstslider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-nstslider/1.0.13/jquery.nstSlider.min.js"); 
            console.log("jquery-nstslider Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-once" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-once/2.2.0/jquery.once.min.js"); 
            console.log("jquery-once Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-one-page-nav" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-one-page-nav/3.0.0/jquery.nav.min.js"); 
            console.log("jquery-one-page-nav Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-orgchart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-orgchart/1.0.0/jquery.orgchart.min.js"); 
            console.log("jquery-orgchart Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-outside-events" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-outside-events/1.1/jquery.ba-outside-events.min.js"); 
            console.log("jquery-outside-events Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-overlaps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-overlaps/1.2.3/jquery.overlaps.min.js"); 
            console.log("jquery-overlaps Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-overscroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-overscroll/1.7.7/jquery.overscroll.min.js"); 
            console.log("jquery-overscroll Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-Paging" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-Paging/1.2.0/jquery.paging.min.js"); 
            console.log("jQuery-Paging Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-parallax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-parallax/1.1.3/jquery-parallax-min.js"); 
            console.log("jquery-parallax Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-placeholder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-placeholder/2.3.1/jquery.placeholder.min.js"); 
            console.log("jquery-placeholder Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-popup-overlay" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-popup-overlay/1.7.9/jquery.popupoverlay.min.js"); 
            console.log("jquery-popup-overlay Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-powertip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-powertip/1.2.0/jquery.powertip.min.js"); 
            console.log("jquery-powertip Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-price-format" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-price-format/2.2.0/jquery.priceformat.min.js"); 
            console.log("jquery-price-format Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-prompt21" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-prompt21/1.1.1/jquery-prompt21.min.js"); 
            console.log("jquery-prompt21 Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-replace-text" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-replace-text/1.1.0/jquery-replace-text-min.js"); 
            console.log("jquery-replace-text Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-requestAnimationFrame" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-requestAnimationFrame/0.2.1/jquery.requestanimationframe.min.js"); 
            console.log("jquery-requestAnimationFrame Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-resize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-resize/1.1/jquery.ba-resize.min.js"); 
            console.log("jquery-resize Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-rwdImageMaps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-rwdImageMaps/1.6/jquery.rwdImageMaps.min.js"); 
            console.log("jQuery-rwdImageMaps Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-scrolldepth" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-scrolldepth/1.0.0/jquery.scrolldepth.min.js"); 
            console.log("jquery-scrolldepth Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-scrollintoview" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollintoview/1.8/jquery.scrollintoview.min.js"); 
            console.log("jquery-scrollintoview Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-scrollpanel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollpanel/0.7.0/jquery-scrollpanel.min.js"); 
            console.log("jquery-scrollpanel Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-scrollto" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollto/1.4.6/jquery-scrollto.min.js"); 
            console.log("jquery-scrollto Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-scrollTo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js"); 
            console.log("jquery-scrollTo Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-searcher" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-searcher/0.3.0/jquery.searcher.min.js"); 
            console.log("jquery-searcher Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-serialize-object" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-serialize-object/2.5.0/jquery.serialize-object.min.js"); 
            console.log("jquery-serialize-object Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-sheetrock" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-sheetrock/1.1.4/dist/sheetrock.min.js"); 
            console.log("jquery-sheetrock Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-sidebar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-sidebar/3.3.2/jquery.sidebar.min.js"); 
            console.log("jquery-sidebar Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-simplyscroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-simplyscroll/2.0.5/jquery.simplyscroll.min.js"); 
            console.log("jquery-simplyscroll Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-simulate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-simulate/1.0.1/jquery.simulate.min.js"); 
            console.log("jquery-simulate Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-slimScroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js"); 
            console.log("jQuery-slimScroll Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-smart-web-app-banner" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-smart-web-app-banner/1.5/jquery.smartwebbanner.min.js"); 
            console.log("jquery-smart-web-app-banner Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-smooth-scroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-smooth-scroll/2.2.0/jquery.smooth-scroll.min.js"); 
            console.log("jquery-smooth-scroll Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-smoove" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-smoove/0.2.11/jquery.smoove.min.js"); 
            console.log("jquery-smoove Loaded Successfully");
            }
            
            
            if (args[i] == "JQuery-Snowfall" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/JQuery-Snowfall/1.7.4/snowfall.jquery.min.js"); 
            console.log("JQuery-Snowfall Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-sortable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-sortable/0.9.13/jquery-sortable-min.js"); 
            console.log("jquery-sortable Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-sparklines" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js"); 
            console.log("jquery-sparklines Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-spellcheck" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-spellcheck/0.2/jquery.spellcheck.min.js"); 
            console.log("jquery-spellcheck Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-spellchecker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-spellchecker/0.2.3/js/jquery.spellchecker.min.js"); 
            console.log("jquery-spellchecker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-steps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-steps/1.1.0/jquery.steps.min.js"); 
            console.log("jquery-steps Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-storage-api" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-storage-api/1.9.4/jquery.storageapi.min.js"); 
            console.log("jquery-storage-api Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-tagsinput" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-tagsinput/1.3.6/jquery.tagsinput.min.js"); 
            console.log("jquery-tagsinput Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-te" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-te/1.4.0/jquery-te.min.js"); 
            console.log("jquery-te Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-textext" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-textext/1.3.0/jquery.textext.min.js"); 
            console.log("jquery-textext Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-throttle-debounce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.min.js"); 
            console.log("jquery-throttle-debounce Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-timeago" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-timeago/1.6.1/jquery.timeago.min.js"); 
            console.log("jquery-timeago Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-tiny-pubsub" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-tiny-pubsub/0.7.0/ba-tiny-pubsub.min.js"); 
            console.log("jquery-tiny-pubsub Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-toast-plugin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.2/jquery.toast.min.js"); 
            console.log("jquery-toast-plugin Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-toggles" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-toggles/2.0.4/toggles.min.js"); 
            console.log("jquery-toggles Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-tokeninput" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-tokeninput/1.7.0/jquery.tokeninput.min.js"); 
            console.log("jquery-tokeninput Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-tools" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-tools/1.2.7/jquery.tools.min.js"); 
            console.log("jquery-tools Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-touch-events" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-touch-events/1.0.9/jquery.mobile-events.min.js"); 
            console.log("jquery-touch-events Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-treegrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-treegrid/0.2.0/js/jquery.treegrid.min.js"); 
            console.log("jquery-treegrid Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-treetable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-treetable/3.2.0/jquery.treetable.min.js"); 
            console.log("jquery-treetable Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-tubeplayer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-tubeplayer/2.1.0/jquery.tubeplayer.min.js"); 
            console.log("jquery-tubeplayer Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-twinkle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-twinkle/0.8.0/jquery.twinkle.min.js"); 
            console.log("jquery-twinkle Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ui-map" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-map/3.0-rc1/jquery.ui.map.js"); 
            console.log("jquery-ui-map Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ui-multiselect-widget" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-multiselect-widget/2.0.1/jquery.multiselect.min.js"); 
            console.log("jquery-ui-multiselect-widget Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-ui-Slider-Pips" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-ui-Slider-Pips/1.11.4/jquery-ui-slider-pips.min.js"); 
            console.log("jQuery-ui-Slider-Pips Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ui-timepicker-addon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.6.3/jquery-ui-timepicker-addon.min.js"); 
            console.log("jquery-ui-timepicker-addon Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-ujs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-ujs/1.2.2/rails.min.js"); 
            console.log("jquery-ujs Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-url-parser" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-url-parser/2.3.1/purl.min.js"); 
            console.log("jquery-url-parser Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-validate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"); 
            console.log("jquery-validate Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-Validation-Engine" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-Validation-Engine/2.6.4/jquery.validationEngine.min.js"); 
            console.log("jQuery-Validation-Engine Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-validation-unobtrusive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-validation-unobtrusive/3.2.6/jquery.validate.unobtrusive.min.js"); 
            console.log("jquery-validation-unobtrusive Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-viewport-checker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-viewport-checker/1.8.8/jquery.viewportchecker.min.js"); 
            console.log("jQuery-viewport-checker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-visibility" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-visibility/1.0.11/jquery-visibility.min.js"); 
            console.log("jquery-visibility Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-visible" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-visible/1.2.0/jquery.visible.min.js"); 
            console.log("jquery-visible Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-watch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-watch/1.21.0/jquery-watch.min.js"); 
            console.log("jquery-watch Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery-webcam" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery-webcam/1.0.0/jquery.webcam.min.js"); 
            console.log("jQuery-webcam Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-weui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-weui/1.2.0/js/jquery-weui.min.js"); 
            console.log("jquery-weui Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-xmlrpc" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-xmlrpc/0.4.3/jquery.xmlrpc.min.js"); 
            console.log("jquery-xmlrpc Loaded Successfully");
            }
            
            
            if (args[i] == "jquery-zoom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.20/jquery.zoom.min.js"); 
            console.log("jquery-zoom Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.activity-indicator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.activity-indicator/1.0.0/jquery.activity-indicator.min.js"); 
            console.log("jquery.activity-indicator Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.actual" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.actual/1.0.19/jquery.actual.min.js"); 
            console.log("jquery.actual Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.address" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.address/1.6/jquery.address.min.js"); 
            console.log("jquery.address Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.age" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.age/1.2.4/jquery.age.min.js"); 
            console.log("jquery.age Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.allowed-chars" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.allowed-chars/1.0.4/jquery.allowed-chars.min.js"); 
            console.log("jquery.allowed-chars Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.alphanum" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.alphanum/1.0.24/jquery.alphanum.min.js"); 
            console.log("jquery.alphanum Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.appear" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.appear/0.3.6/jquery.appear.min.js"); 
            console.log("jquery.appear Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.AreYouSure" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.AreYouSure/1.9.0/jquery.are-you-sure.min.js"); 
            console.log("jquery.AreYouSure Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.atmosphere" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.atmosphere/2.1.2/jquery.atmosphere.min.js"); 
            console.log("jquery.atmosphere Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.avgrund" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.avgrund/1.3.3/jquery.avgrund.min.js"); 
            console.log("jquery.avgrund Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.ba-bbq" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.ba-bbq/1.2.1/jquery.ba-bbq.min.js"); 
            console.log("jquery.ba-bbq Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.basictable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.basictable/1.0.6/jquery.basictable.min.js"); 
            console.log("jquery.basictable Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.BgSwitcher" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.BgSwitcher/0.4.3/jquery.bgswitcher.min.js"); 
            console.log("jQuery.BgSwitcher Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.BlackAndWhite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.BlackAndWhite/0.3.8/jquery.BlackAndWhite.min.js"); 
            console.log("jQuery.BlackAndWhite Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.blockUI" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min.js"); 
            console.log("jquery.blockUI Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.bootstrapvalidator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min.js"); 
            console.log("jquery.bootstrapvalidator Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.businessHours" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.businessHours/1.0.1/jquery.businessHours.min.js"); 
            console.log("jquery.businessHours Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.caroufredsel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.caroufredsel/6.2.1/jquery.carouFredSel.packed.js"); 
            console.log("jquery.caroufredsel Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.collapsible" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.collapsible/1.2/jquery.collapsible.min.js"); 
            console.log("jquery.collapsible Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.colorbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.6.4/jquery.colorbox-min.js"); 
            console.log("jquery.colorbox Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.complexify.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.complexify.js/0.5.1/jquery.complexify.min.js"); 
            console.log("jquery.complexify.js Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.cookieBar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.cookieBar/0.0.3/jquery.cookieBar.min.js"); 
            console.log("jquery.cookieBar Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.countdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js"); 
            console.log("jquery.countdown Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.customSelect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.customSelect/0.5.1/jquery.customSelect.min.js"); 
            console.log("jquery.customSelect Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.cycle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.cycle/3.0.3/jquery.cycle.all.min.js"); 
            console.log("jquery.cycle Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.cycle2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.cycle2/2.1.6/jquery.cycle2.min.js"); 
            console.log("jquery.cycle2 Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.devbridge-autocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.devbridge-autocomplete/1.4.7/jquery.autocomplete.min.js"); 
            console.log("jquery.devbridge-autocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms.dialogs.blockui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms.dialogs.blockui/2.0.0/jquery.dirtyforms.dialogs.blockui.min.js"); 
            console.log("jquery.dirtyforms.dialogs.blockui Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms.dialogs.bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms.dialogs.bootstrap/2.0.0/jquery.dirtyforms.dialogs.bootstrap.min.js"); 
            console.log("jquery.dirtyforms.dialogs.bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms.dialogs.facebox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms.dialogs.facebox/2.0.0/jquery.dirtyforms.dialogs.facebox.min.js"); 
            console.log("jquery.dirtyforms.dialogs.facebox Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms.dialogs.jquery-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms.dialogs.jquery-ui/2.0.0/jquery.dirtyforms.dialogs.jquery-ui.min.js"); 
            console.log("jquery.dirtyforms.dialogs.jquery-ui Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms.dialogs.pnotify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms.dialogs.pnotify/2.0.0/jquery.dirtyforms.dialogs.pnotify.min.js"); 
            console.log("jquery.dirtyforms.dialogs.pnotify Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms.helpers.alwaysdirty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms.helpers.alwaysdirty/2.0.0/jquery.dirtyforms.helpers.alwaysdirty.min.js"); 
            console.log("jquery.dirtyforms.helpers.alwaysdirty Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms.helpers.ckeditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms.helpers.ckeditor/2.0.0/jquery.dirtyforms.helpers.ckeditor.min.js"); 
            console.log("jquery.dirtyforms.helpers.ckeditor Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms.helpers.tinymce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms.helpers.tinymce/2.0.0/jquery.dirtyforms.helpers.tinymce.min.js"); 
            console.log("jquery.dirtyforms.helpers.tinymce Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dirtyforms" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dirtyforms/2.0.0/jquery.dirtyforms.min.js"); 
            console.log("jquery.dirtyforms Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.dotdotdot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.dotdotdot/3.1.0/jquery.dotdotdot.js"); 
            console.log("jQuery.dotdotdot Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.downCount" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.downCount/1.0.0/jquery.downCount.min.js"); 
            console.log("jquery.downCount Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.dropotron" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.dropotron/1.4.3/jquery.dropotron.min.js"); 
            console.log("jquery.dropotron Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.easytabs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.easytabs/3.2.0/jquery.easytabs.min.js"); 
            console.log("jquery.easytabs Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.fancytree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.fancytree/2.27.0/jquery.fancytree-all.min.js"); 
            console.log("jquery.fancytree Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.fileDownload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.fileDownload/1.4.2/jquery.fileDownload.min.js"); 
            console.log("jquery.fileDownload Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.finderselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.finderselect/0.6.0/jquery.finderselect.min.js"); 
            console.log("jquery.finderselect Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.finger" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.finger/0.1.6/jquery.finger.min.js"); 
            console.log("jquery.finger Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.form" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"); 
            console.log("jquery.form Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.formalize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.formalize/1.2/jquery.formalize.min.js"); 
            console.log("jquery.formalize Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.formset" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.formset/1.2.2/jquery.formset.min.js"); 
            console.log("jquery.formset Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.Gantt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.Gantt/1.1.0/js/jquery.fn.gantt.min.js"); 
            console.log("jQuery.Gantt Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.googlemap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.googlemap/1.5/jquery.googlemap.min.js"); 
            console.log("jquery.googlemap Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.gray" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.gray/1.6.0/js/jquery.gray.min.js"); 
            console.log("jquery.gray Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.gridster" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.gridster/0.5.6/jquery.gridster.min.js"); 
            console.log("jquery.gridster Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.hashcash.io" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.hashcash.io/0.0.2/jquery.hashcash.io.min.js"); 
            console.log("jquery.hashcash.io Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.highlightRegex" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.highlightRegex/0.1.2/highlightRegex.min.js"); 
            console.log("jQuery.highlightRegex Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.hoverintent" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.hoverintent/1.9.0/jquery.hoverIntent.min.js"); 
            console.log("jquery.hoverintent Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.html5loader" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.html5loader/1.8.0/jquery.html5Loader.min.js"); 
            console.log("jquery.html5loader Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.i18n" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.i18n/1.0.4/jquery.i18n.min.js"); 
            console.log("jquery.i18n Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.iframe-transport" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.iframe-transport/1.0.1/jquery.iframe-transport.min.js"); 
            console.log("jquery.iframe-transport Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.iframetracker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.iframetracker/1.1.0/jquery.iframetracker.min.js"); 
            console.log("jquery.iframetracker Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.imagesloaded" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.3/imagesloaded.pkgd.min.js"); 
            console.log("jquery.imagesloaded Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.inputmask" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js"); 
            console.log("jquery.inputmask Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.inview" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.inview/1.0.0/jquery.inview.min.js"); 
            console.log("jquery.inview Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.is.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.is.js/0.2.1/jquery.is.min.js"); 
            console.log("jquery.is.js Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.isotope" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.4/isotope.pkgd.min.js"); 
            console.log("jquery.isotope Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.json2html" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.json2html/1.0.0/jquery.json2html.min.js"); 
            console.log("jquery.json2html Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.lazy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.7/jquery.lazy.min.js"); 
            console.log("jquery.lazy Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.lazyload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js"); 
            console.log("jquery.lazyload Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.lazyloadxt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyloadxt/1.1.0/jquery.lazyloadxt.min.js"); 
            console.log("jquery.lazyloadxt Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.lifestream" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.lifestream/0.3.7/jquery.lifestream.min.js"); 
            console.log("jquery.lifestream Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.liveurl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.liveurl/1.2.2/jquery.liveurl.min.js"); 
            console.log("jquery.liveurl Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.loadtemplate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.loadtemplate/1.5.10/jquery.loadTemplate.min.js"); 
            console.log("jquery.loadtemplate Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.Marquee" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.Marquee/1.5.0/jquery.marquee.min.js"); 
            console.log("jQuery.Marquee Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.mask" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.13/jquery.mask.min.js"); 
            console.log("jquery.mask Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.maskedinput" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"); 
            console.log("jquery.maskedinput Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.matchHeight" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.7.2/jquery.matchHeight-min.js"); 
            console.log("jquery.matchHeight Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.mb.bgndgallery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.bgndgallery/1.9.5/jquery.mb.bgndGallery.min.js"); 
            console.log("jquery.mb.bgndgallery Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.mb.YTPlayer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.1.5/jquery.mb.YTPlayer.min.js"); 
            console.log("jquery.mb.YTPlayer Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.meiomask" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.meiomask/1.1.14/meiomask.min.js"); 
            console.log("jquery.meiomask Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.mmenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/6.1.8/jquery.mmenu.js"); 
            console.log("jQuery.mmenu Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.mobilephonenumber" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.mobilephonenumber/1.0.7/jquery.mobilePhoneNumber.min.js"); 
            console.log("jquery.mobilephonenumber Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.mosaicflow" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.mosaicflow/0.2.5/jquery.mosaicflow.min.js"); 
            console.log("jquery.mosaicflow Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.my" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.my/1.2.14/jquerymy.min.js"); 
            console.log("jQuery.my Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.nicescroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"); 
            console.log("jquery.nicescroll Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.notification" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.notification/1.0.2/jquery.notification.min.js"); 
            console.log("jquery.notification Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.ns-autogrow" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.ns-autogrow/1.1.6/jquery.ns-autogrow.min.js"); 
            console.log("jquery.ns-autogrow Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.panzoom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.panzoom/3.2.2/jquery.panzoom.min.js"); 
            console.log("jquery.panzoom Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.payment" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"); 
            console.log("jquery.payment Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.pep" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.pep/0.4.0/jquery.pep.min.js"); 
            console.log("jquery.pep Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.percentageloader" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.percentageloader/0.1.0/jquery.percentageloader.min.js"); 
            console.log("jquery.percentageloader Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.perfect-scrollbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.8.1/js/perfect-scrollbar.jquery.min.js"); 
            console.log("jquery.perfect-scrollbar Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.photocols" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.photocols/1.0.3/jquery.photocols.min.js"); 
            console.log("jquery.photocols Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.pin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.pin/1.0.1/jquery.pin.min.js"); 
            console.log("jquery.pin Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.pjax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js"); 
            console.log("jquery.pjax Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.poptrox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.poptrox/2.5.1/jquery.poptrox.min.js"); 
            console.log("jquery.poptrox Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.postcodify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.postcodify/3.4.1/search.min.js"); 
            console.log("jquery.postcodify Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.print" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.print/1.5.1/jQuery.print.min.js"); 
            console.log("jQuery.print Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.qrcode" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.qrcode/1.0/jquery.qrcode.min.js"); 
            console.log("jquery.qrcode Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.quicksearch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.quicksearch/2.4.0/jquery.quicksearch.min.js"); 
            console.log("jquery.quicksearch Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.rateit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.rateit/1.1.1/jquery.rateit.min.js"); 
            console.log("jquery.rateit Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.repeater" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.repeater/1.2.1/jquery.repeater.min.js"); 
            console.log("jquery.repeater Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.rest" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.rest/1.0.2/jquery.rest.min.js"); 
            console.log("jquery.rest Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.ripples" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"); 
            console.log("jquery.ripples Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.scregal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.scregal/1.3/jquery.scregal.min.js"); 
            console.log("jquery.scregal Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.scroll4ever" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.scroll4ever/1.0.0/jquery.scroll4ever.min.js"); 
            console.log("jquery.scroll4ever Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.scrollbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.scrollbar/0.2.11/jquery.scrollbar.min.js"); 
            console.log("jquery.scrollbar Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.scrollex" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.scrollex/0.2.1/jquery.scrollex.min.js"); 
            console.log("jquery.scrollex Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.scrollfire" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.scrollfire/1.4.0/jquery.scrollfire.min.js"); 
            console.log("jquery.scrollfire Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.selectbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.selectbox/1.2.0/jquery.selectBox.min.js"); 
            console.log("jquery.selectbox Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.selectboxit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.selectboxit/3.8.0/jquery.selectBoxIt.min.js"); 
            console.log("jquery.selectboxit Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.selection" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.selection/1.0.1/jquery.selection.min.js"); 
            console.log("jquery.selection Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.serializeJSON" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.serializeJSON/2.8.1/jquery.serializejson.min.js"); 
            console.log("jquery.serializeJSON Loaded Successfully");
            }
            
            
            if (args[i] == "jQuery.serializeObject" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jQuery.serializeObject/2.0.3/jquery.serializeObject.min.js"); 
            console.log("jQuery.serializeObject Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.serialScroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.serialScroll/1.3.1/jquery.serialScroll.min.js"); 
            console.log("jquery.serialScroll Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.shapeshift" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.shapeshift/2.0.0/jquery.shapeshift.min.js"); 
            console.log("jquery.shapeshift Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.simpleWeather" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js"); 
            console.log("jquery.simpleWeather Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.smartbanner" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.smartbanner/1.0.0/jquery.smartbanner.min.js"); 
            console.log("jquery.smartbanner Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.smartmenus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.smartmenus/1.1.0/jquery.smartmenus.min.js"); 
            console.log("jquery.smartmenus Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.socialshareprivacy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.socialshareprivacy/1.6/jquery.socialshareprivacy.min.js"); 
            console.log("jquery.socialshareprivacy Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.spritely" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.spritely/0.6.8/jquery.spritely.min.js"); 
            console.log("jquery.spritely Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.SPServices" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices.min.js"); 
            console.log("jquery.SPServices Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.sticky" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.min.js"); 
            console.log("jquery.sticky Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.sumoselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.sumoselect/3.0.2/jquery.sumoselect.min.js"); 
            console.log("jquery.sumoselect Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.superlabels" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.superlabels/2.0.3/jquery.superLabels.min.js"); 
            console.log("jquery.superlabels Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.swipebox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.swipebox/1.4.4/js/jquery.swipebox.min.js"); 
            console.log("jquery.swipebox Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.tablesorter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.29.2/js/jquery.tablesorter.min.js"); 
            console.log("jquery.tablesorter Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.tabslet.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.tabslet.js/1.7.3/jquery.tabslet.min.js"); 
            console.log("jquery.tabslet.js Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.terminal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/1.11.2/js/jquery.terminal.min.js"); 
            console.log("jquery.terminal Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.textcomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.textcomplete/1.8.4/jquery.textcomplete.min.js"); 
            console.log("jquery.textcomplete Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.threedubmedia" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.threedubmedia/2.2/event.drop/jquery.event.drop.min.js"); 
            console.log("jquery.threedubmedia Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.tipsy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.tipsy/1.0.3/jquery.tipsy.min.js"); 
            console.log("jquery.tipsy Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.tiptip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.tiptip/1.3/jquery.tipTip.minified.js"); 
            console.log("jquery.tiptip Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.tocify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.tocify/1.9.0/javascripts/jquery.tocify.min.js"); 
            console.log("jquery.tocify Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.touch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.touch/1.1.0/jquery.touch.min.js"); 
            console.log("jquery.touch Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.touchswipe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"); 
            console.log("jquery.touchswipe Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.transit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.transit/0.9.12/jquery.transit.min.js"); 
            console.log("jquery.transit Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.turbolinks" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.turbolinks/2.1.0/jquery.turbolinks.min.js"); 
            console.log("jquery.turbolinks Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.ui-contextmenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.ui-contextmenu/1.18.1/jquery.ui-contextmenu.min.js"); 
            console.log("jquery.ui-contextmenu Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.waitforimages" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.waitforimages/2.2.0/jquery.waitforimages.min.js"); 
            console.log("jquery.waitforimages Loaded Successfully");
            }
            
            
            if (args[i] == "jquery.wookmark" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery.wookmark/2.1.2/wookmark.min.js"); 
            console.log("jquery.wookmark Loaded Successfully");
            }
            
            
            if (args[i] == "jquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"); 
            console.log("jquery Loaded Successfully");
            }
            
            
            if (args[i] == "jquerykeyframes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquerykeyframes/0.0.9/jquery.keyframes.min.js"); 
            console.log("jquerykeyframes Loaded Successfully");
            }
            
            
            if (args[i] == "jquerymobile-router" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jquerymobile-router/0.93/js/jquery.mobile.router.min.js"); 
            console.log("jquerymobile-router Loaded Successfully");
            }
            
            
            if (args[i] == "jqueryui-touch-punch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"); 
            console.log("jqueryui-touch-punch Loaded Successfully");
            }
            
            
            if (args[i] == "jqueryui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"); 
            console.log("jqueryui Loaded Successfully");
            }
            
            
            if (args[i] == "jqvmap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jqvmap/1.5.1/jquery.vmap.min.js"); 
            console.log("jqvmap Loaded Successfully");
            }
            
            
            if (args[i] == "jReject" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jReject/1.1.4/js/jquery.reject.min.js"); 
            console.log("jReject Loaded Successfully");
            }
            
            
            if (args[i] == "jRespond" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jRespond/1.0.0/js/jRespond.min.js"); 
            console.log("jRespond Loaded Successfully");
            }
            
            
            if (args[i] == "jrumble" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jrumble/1.3.0/jquery.jrumble.min.js"); 
            console.log("jrumble Loaded Successfully");
            }
            
            
            if (args[i] == "js-beautify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify.min.js"); 
            console.log("js-beautify Loaded Successfully");
            }
            
            
            if (args[i] == "js-bson" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-bson/1.0.4/bson.min.js"); 
            console.log("js-bson Loaded Successfully");
            }
            
            
            if (args[i] == "js-cookie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"); 
            console.log("js-cookie Loaded Successfully");
            }
            
            
            if (args[i] == "js-data-angular" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-data-angular/3.2.1/js-data-angular.min.js"); 
            console.log("js-data-angular Loaded Successfully");
            }
            
            
            if (args[i] == "js-data-firebase" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-data-firebase/3.0.0/js-data-firebase.min.js"); 
            console.log("js-data-firebase Loaded Successfully");
            }
            
            
            if (args[i] == "js-data-http" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-data-http/2.2.2/js-data-http.min.js"); 
            console.log("js-data-http Loaded Successfully");
            }
            
            
            if (args[i] == "js-data-localforage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-data-localforage/2.1.1/js-data-localforage.min.js"); 
            console.log("js-data-localforage Loaded Successfully");
            }
            
            
            if (args[i] == "js-data-localstorage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-data-localstorage/2.3.2/js-data-localstorage.min.js"); 
            console.log("js-data-localstorage Loaded Successfully");
            }
            
            
            if (args[i] == "js-data" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-data/3.0.1/js-data.min.js"); 
            console.log("js-data Loaded Successfully");
            }
            
            
            if (args[i] == "js-joda" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-joda/1.6.2/js-joda.min.js"); 
            console.log("js-joda Loaded Successfully");
            }
            
            
            if (args[i] == "js-marker-clusterer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-marker-clusterer/1.0.0/markerclusterer_compiled.js"); 
            console.log("js-marker-clusterer Loaded Successfully");
            }
            
            
            if (args[i] == "js-nacl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-nacl/1.2.2/nacl_factory.min.js"); 
            console.log("js-nacl Loaded Successfully");
            }
            
            
            if (args[i] == "js-polyfills" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.41/polyfill.min.js"); 
            console.log("js-polyfills Loaded Successfully");
            }
            
            
            if (args[i] == "js-scrypt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-scrypt/1.2.0/scrypt.min.js"); 
            console.log("js-scrypt Loaded Successfully");
            }
            
            
            if (args[i] == "js-sequence-diagrams" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-sequence-diagrams/1.0.6/sequence-diagram-min.js"); 
            console.log("js-sequence-diagrams Loaded Successfully");
            }
            
            
            if (args[i] == "js-sha1" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-sha1/0.6.0/sha1.min.js"); 
            console.log("js-sha1 Loaded Successfully");
            }
            
            
            if (args[i] == "js-sha256" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"); 
            console.log("js-sha256 Loaded Successfully");
            }
            
            
            if (args[i] == "js-sha3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-sha3/0.7.0/sha3.min.js"); 
            console.log("js-sha3 Loaded Successfully");
            }
            
            
            if (args[i] == "js-sha512" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-sha512/0.7.1/sha512.min.js"); 
            console.log("js-sha512 Loaded Successfully");
            }
            
            
            if (args[i] == "js-signals" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-signals/1.0.0/js-signals.min.js"); 
            console.log("js-signals Loaded Successfully");
            }
            
            
            if (args[i] == "js-skeleton" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-skeleton/3.6.3/skeleton.min.js"); 
            console.log("js-skeleton Loaded Successfully");
            }
            
            
            if (args[i] == "js-url" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-url/2.5.2/url.min.js"); 
            console.log("js-url Loaded Successfully");
            }
            
            
            if (args[i] == "js-xss" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-xss/0.3.3/xss.min.js"); 
            console.log("js-xss Loaded Successfully");
            }
            
            
            if (args[i] == "js-yaml" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/js-yaml/3.10.0/js-yaml.min.js"); 
            console.log("js-yaml Loaded Successfully");
            }
            
            
            if (args[i] == "jsbarcode" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.8.0/JsBarcode.all.min.js"); 
            console.log("jsbarcode Loaded Successfully");
            }
            
            
            if (args[i] == "jschannel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jschannel/1.0.0-git-commit1-8c4f7eb/jschannel.min.js"); 
            console.log("jschannel Loaded Successfully");
            }
            
            
            if (args[i] == "jschardet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jschardet/1.6.0/jschardet.min.js"); 
            console.log("jschardet Loaded Successfully");
            }
            
            
            if (args[i] == "jscolor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js"); 
            console.log("jscolor Loaded Successfully");
            }
            
            
            if (args[i] == "jscroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jscroll/2.3.9/jquery.jscroll.min.js"); 
            console.log("jscroll Loaded Successfully");
            }
            
            
            if (args[i] == "jScrollPane" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jScrollPane/2.1.0/script/jquery.jscrollpane.min.js"); 
            console.log("jScrollPane Loaded Successfully");
            }
            
            
            if (args[i] == "jsdiff" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsdiff/3.4.0/diff.min.js"); 
            console.log("jsdiff Loaded Successfully");
            }
            
            
            if (args[i] == "jsel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsel/1.1.6/jsel.min.js"); 
            console.log("jsel Loaded Successfully");
            }
            
            
            if (args[i] == "jsencrypt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/2.3.1/jsencrypt.min.js"); 
            console.log("jsencrypt Loaded Successfully");
            }
            
            
            if (args[i] == "jsface" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsface/2.4.9/jsface.min.js"); 
            console.log("jsface Loaded Successfully");
            }
            
            
            if (args[i] == "jsfeat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsfeat/0.0.8/jsfeat-min.js"); 
            console.log("jsfeat Loaded Successfully");
            }
            
            
            if (args[i] == "jsfile" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsfile/0.1.17/jsfile.min.js"); 
            console.log("jsfile Loaded Successfully");
            }
            
            
            if (args[i] == "jsforce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsforce/1.8.0/jsforce.min.js"); 
            console.log("jsforce Loaded Successfully");
            }
            
            
            if (args[i] == "jsgrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsgrid/1.5.3/jsgrid.min.js"); 
            console.log("jsgrid Loaded Successfully");
            }
            
            
            if (args[i] == "jshashes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jshashes/1.0.7/hashes.min.js"); 
            console.log("jshashes Loaded Successfully");
            }
            
            
            if (args[i] == "jshint" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jshint/2.9.5/jshint.min.js"); 
            console.log("jshint Loaded Successfully");
            }
            
            
            if (args[i] == "jslite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jslite/1.1.12/JSLite.min.js"); 
            console.log("jslite Loaded Successfully");
            }
            
            
            if (args[i] == "jsmediatags" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.8.2/jsmediatags.min.js"); 
            console.log("jsmediatags Loaded Successfully");
            }
            
            
            if (args[i] == "jsmpeg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsmpeg/0.2/jsmpg.min.js"); 
            console.log("jsmpeg Loaded Successfully");
            }
            
            
            if (args[i] == "jsnetworkx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsnetworkx/0.3.4/jsnetworkx.js"); 
            console.log("jsnetworkx Loaded Successfully");
            }
            
            
            if (args[i] == "jsnlog" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsnlog/2.25.1/jsnlog.min.js"); 
            console.log("jsnlog Loaded Successfully");
            }
            
            
            if (args[i] == "json-editor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json-editor/0.7.28/jsoneditor.min.js"); 
            console.log("json-editor Loaded Successfully");
            }
            
            
            if (args[i] == "json-formatter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json-formatter/0.6.0/json-formatter.min.js"); 
            console.log("json-formatter Loaded Successfully");
            }
            
            
            if (args[i] == "json-forms" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json-forms/1.6.3/js/brutusin-json-forms.min.js"); 
            console.log("json-forms Loaded Successfully");
            }
            
            
            if (args[i] == "json-mask" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json-mask/0.3.8/jsonMask.min.js"); 
            console.log("json-mask Loaded Successfully");
            }
            
            
            if (args[i] == "json-schema-faker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json-schema-faker/0.4.6/json-schema-faker.min.js"); 
            console.log("json-schema-faker Loaded Successfully");
            }
            
            
            if (args[i] == "json2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json2/20160511/json2.min.js"); 
            console.log("json2 Loaded Successfully");
            }
            
            
            if (args[i] == "json2html" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json2html/1.0.0/json2html.min.js"); 
            console.log("json2html Loaded Successfully");
            }
            
            
            if (args[i] == "json3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"); 
            console.log("json3 Loaded Successfully");
            }
            
            
            if (args[i] == "json5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/json5/0.5.1/json5.min.js"); 
            console.log("json5 Loaded Successfully");
            }
            
            
            if (args[i] == "jsondiffpatch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsondiffpatch/0.2.5/jsondiffpatch.min.js"); 
            console.log("jsondiffpatch Loaded Successfully");
            }
            
            
            if (args[i] == "jsoneditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.13.1/jsoneditor.min.js"); 
            console.log("jsoneditor Loaded Successfully");
            }
            
            
            if (args[i] == "jsonld" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsonld/0.4.12/jsonld.min.js"); 
            console.log("jsonld Loaded Successfully");
            }
            
            
            if (args[i] == "jsonlint" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsonlint/1.6.0/jsonlint.min.js"); 
            console.log("jsonlint Loaded Successfully");
            }
            
            
            if (args[i] == "jspanel3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jspanel3/3.11.1/jquery.jspanel.min.js"); 
            console.log("jspanel3 Loaded Successfully");
            }
            
            
            if (args[i] == "jspdf-autotable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/2.3.2/jspdf.plugin.autotable.min.js"); 
            console.log("jspdf-autotable Loaded Successfully");
            }
            
            
            if (args[i] == "jspdf" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"); 
            console.log("jspdf Loaded Successfully");
            }
            
            
            if (args[i] == "jsPlumb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsPlumb/2.5.11/js/jsplumb.min.js"); 
            console.log("jsPlumb Loaded Successfully");
            }
            
            
            if (args[i] == "jsrender" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsrender/0.9.90/jsrender.min.js"); 
            console.log("jsrender Loaded Successfully");
            }
            
            
            if (args[i] == "jsrsasign" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/8.0.4/jsrsasign-all-min.js"); 
            console.log("jsrsasign Loaded Successfully");
            }
            
            
            if (args[i] == "jss" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jss/9.4.0/jss.min.js"); 
            console.log("jss Loaded Successfully");
            }
            
            
            if (args[i] == "jsSHA" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.3.1/sha.js"); 
            console.log("jsSHA Loaded Successfully");
            }
            
            
            if (args[i] == "jssip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jssip/3.1.2/jssip.min.js"); 
            console.log("jssip Loaded Successfully");
            }
            
            
            if (args[i] == "jsSocials" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsSocials/1.5.0/jssocials.min.js"); 
            console.log("jsSocials Loaded Successfully");
            }
            
            
            if (args[i] == "jssor-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jssor-slider/26.6.0/jssor.slider.min.js"); 
            console.log("jssor-slider Loaded Successfully");
            }
            
            
            if (args[i] == "jstat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jstat/1.7.1/jstat.min.js"); 
            console.log("jstat Loaded Successfully");
            }
            
            
            if (args[i] == "jstimezonedetect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.6/jstz.min.js"); 
            console.log("jstimezonedetect Loaded Successfully");
            }
            
            
            if (args[i] == "jStorage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jStorage/0.4.12/jstorage.min.js"); 
            console.log("jStorage Loaded Successfully");
            }
            
            
            if (args[i] == "jstree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.4/jstree.min.js"); 
            console.log("jstree Loaded Successfully");
            }
            
            
            if (args[i] == "jstreegrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jstreegrid/3.9.2/jstreegrid.min.js"); 
            console.log("jstreegrid Loaded Successfully");
            }
            
            
            if (args[i] == "jsts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsts/1.5.0/jsts.min.js"); 
            console.log("jsts Loaded Successfully");
            }
            
            
            if (args[i] == "jsurl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsurl/2.1.7/url.min.js"); 
            console.log("jsurl Loaded Successfully");
            }
            
            
            if (args[i] == "jsviews" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsviews/0.9.90/jsviews.min.js"); 
            console.log("jsviews Loaded Successfully");
            }
            
            
            if (args[i] == "jsxgraph" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.6/jsxgraphcore.js"); 
            console.log("jsxgraph Loaded Successfully");
            }
            
            
            if (args[i] == "jszip-utils" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jszip-utils/0.0.2/jszip-utils.min.js"); 
            console.log("jszip-utils Loaded Successfully");
            }
            
            
            if (args[i] == "jszip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js"); 
            console.log("jszip Loaded Successfully");
            }
            
            
            if (args[i] == "juicer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/juicer/0.6.15/juicer-min.js"); 
            console.log("juicer Loaded Successfully");
            }
            
            
            if (args[i] == "jump.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jump.js/1.0.2/jump.min.js"); 
            console.log("jump.js Loaded Successfully");
            }
            
            
            if (args[i] == "just-animate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/just-animate/2.5.0/just-animate.min.js"); 
            console.log("just-animate Loaded Successfully");
            }
            
            
            if (args[i] == "justgage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/justgage/1.2.9/justgage.min.js"); 
            console.log("justgage Loaded Successfully");
            }
            
            
            if (args[i] == "justifiedGallery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.6.3/js/jquery.justifiedGallery.min.js"); 
            console.log("justifiedGallery Loaded Successfully");
            }
            
            
            if (args[i] == "jvectormap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.min.js"); 
            console.log("jvectormap Loaded Successfully");
            }
            
            
            if (args[i] == "jwerty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jwerty/0.3.2/jwerty.min.js"); 
            console.log("jwerty Loaded Successfully");
            }
            
            
            if (args[i] == "jxon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/jxon/1.6.1/index.min.js"); 
            console.log("jxon Loaded Successfully");
            }
            
            
            if (args[i] == "Kalendae" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Kalendae/0.7.1/kalendae.standalone.min.js"); 
            console.log("Kalendae Loaded Successfully");
            }
            
            
            if (args[i] == "kartograph-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kartograph-js/0.8.7/kartograph.min.js"); 
            console.log("kartograph-js Loaded Successfully");
            }
            
            
            if (args[i] == "KaTeX" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js"); 
            console.log("KaTeX Loaded Successfully");
            }
            
            
            if (args[i] == "keen-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/keen-js/4.3.0/keen.min.js"); 
            console.log("keen-js Loaded Successfully");
            }
            
            
            if (args[i] == "kefir" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kefir/3.8.0/kefir.min.js"); 
            console.log("kefir Loaded Successfully");
            }
            
            
            if (args[i] == "kendo-ui-core" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kendo-ui-core/2014.1.416/js/kendo.core.min.js"); 
            console.log("kendo-ui-core Loaded Successfully");
            }
            
            
            if (args[i] == "keras-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/keras-js/0.3.0/keras.js"); 
            console.log("keras-js Loaded Successfully");
            }
            
            
            if (args[i] == "kerning.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kerning.js/0.2/kerning.min.js"); 
            console.log("kerning.js Loaded Successfully");
            }
            
            
            if (args[i] == "keyboardjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/keyboardjs/2.4.1/keyboard.min.js"); 
            console.log("keyboardjs Loaded Successfully");
            }
            
            
            if (args[i] == "keydrown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/keydrown/1.2.3/keydrown.min.js"); 
            console.log("keydrown Loaded Successfully");
            }
            
            
            if (args[i] == "keymage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/keymage/1.1.3/keymage.min.js"); 
            console.log("keymage Loaded Successfully");
            }
            
            
            if (args[i] == "keymaster" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/keymaster/1.6.1/keymaster.min.js"); 
            console.log("keymaster Loaded Successfully");
            }
            
            
            if (args[i] == "keypress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/keypress/2.1.4/keypress.min.js"); 
            console.log("keypress Loaded Successfully");
            }
            
            
            if (args[i] == "kibo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kibo/1.1.0/kibo.min.js"); 
            console.log("kibo Loaded Successfully");
            }
            
            
            if (args[i] == "kineticjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kineticjs/5.2.0/kinetic.min.js"); 
            console.log("kineticjs Loaded Successfully");
            }
            
            
            if (args[i] == "kiss.animate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kiss.animate/0.1.2/kiss.animate.min.js"); 
            console.log("kiss.animate Loaded Successfully");
            }
            
            
            if (args[i] == "kissui.scrollanim" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kissui.scrollanim/0.3.0/scrollanim.min.js"); 
            console.log("kissui.scrollanim Loaded Successfully");
            }
            
            
            if (args[i] == "kiwi" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kiwi/0.2.1/kiwi.min.js"); 
            console.log("kiwi Loaded Successfully");
            }
            
            
            if (args[i] == "klass" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/klass/1.4.1/klass.min.js"); 
            console.log("klass Loaded Successfully");
            }
            
            
            if (args[i] == "knockback-core-stack" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockback-core-stack/0.17.2/knockback-core-stack.min.js"); 
            console.log("knockback-core-stack Loaded Successfully");
            }
            
            
            if (args[i] == "knockback" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockback/1.2.2/knockback.min.js"); 
            console.log("knockback Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-bootstrap/0.2.1/knockout-bootstrap.min.js"); 
            console.log("knockout-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-delegated-events" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-delegated-events/0.6.1/knockout-delegatedEvents.min.js"); 
            console.log("knockout-delegated-events Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-dragdrop" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-dragdrop/2.6.1/knockout.dragdrop.min.js"); 
            console.log("knockout-dragdrop Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-es5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-es5/0.4.6/knockout-es5.min.js"); 
            console.log("knockout-es5 Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-kendo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-kendo/0.9.8/knockout-kendo.min.js"); 
            console.log("knockout-kendo Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-paging" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-paging/0.4.0/knockout-paging.min.js"); 
            console.log("knockout-paging Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-postbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-postbox/0.6.0/knockout-postbox.min.js"); 
            console.log("knockout-postbox Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-pre-rendered" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-pre-rendered/0.9.1/knockout-pre-rendered.min.js"); 
            console.log("knockout-pre-rendered Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-sortable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-sortable/1.1.0/knockout-sortable.min.js"); 
            console.log("knockout-sortable Loaded Successfully");
            }
            
            
            if (args[i] == "knockout-validation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout-validation/2.0.3/knockout.validation.min.js"); 
            console.log("knockout-validation Loaded Successfully");
            }
            
            
            if (args[i] == "knockout.mapping" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout.mapping/2.4.1/knockout.mapping.min.js"); 
            console.log("knockout.mapping Loaded Successfully");
            }
            
            
            if (args[i] == "knockout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"); 
            console.log("knockout Loaded Successfully");
            }
            
            
            if (args[i] == "knuth-shuffle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/knuth-shuffle/1.0.8/index.min.js"); 
            console.log("knuth-shuffle Loaded Successfully");
            }
            
            
            if (args[i] == "konva" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/konva/1.7.6/konva.min.js"); 
            console.log("konva Loaded Successfully");
            }
            
            
            if (args[i] == "koto" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/koto/0.4.2/koto.js"); 
            console.log("koto Loaded Successfully");
            }
            
            
            if (args[i] == "Kraken" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Kraken/7.5.2/js/main.min.js"); 
            console.log("Kraken Loaded Successfully");
            }
            
            
            if (args[i] == "kronos.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kronos.js/0.7.2/kronos.min.js"); 
            console.log("kronos.js Loaded Successfully");
            }
            
            
            if (args[i] == "kurento-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kurento-client/6.6.0/js/kurento-client.min.js"); 
            console.log("kurento-client Loaded Successfully");
            }
            
            
            if (args[i] == "kute.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kute.js/1.6.2/kute.min.js"); 
            console.log("kute.js Loaded Successfully");
            }
            
            
            if (args[i] == "kwargsjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/kwargsjs/1.0.1/kwargs.min.js"); 
            console.log("kwargsjs Loaded Successfully");
            }
            
            
            if (args[i] == "l20n" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/l20n/1.0.2/l20n.min.js"); 
            console.log("l20n Loaded Successfully");
            }
            
            
            if (args[i] == "labelauty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/labelauty/1.1.4/jquery-labelauty.min.js"); 
            console.log("labelauty Loaded Successfully");
            }
            
            
            if (args[i] == "labella" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/labella/1.1.4/labella.min.js"); 
            console.log("labella Loaded Successfully");
            }
            
            
            if (args[i] == "labjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/labjs/2.0.3/LAB.min.js"); 
            console.log("labjs Loaded Successfully");
            }
            
            
            if (args[i] == "ladda-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ladda-bootstrap/0.9.4/ladda.min.js"); 
            console.log("ladda-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "Ladda" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Ladda/1.0.5/ladda.min.js"); 
            console.log("Ladda Loaded Successfully");
            }
            
            
            if (args[i] == "lamb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lamb/0.54.0/lamb.min.js"); 
            console.log("lamb Loaded Successfully");
            }
            
            
            if (args[i] == "lamejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.0/lame.min.js"); 
            console.log("lamejs Loaded Successfully");
            }
            
            
            if (args[i] == "later" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/later/1.2.0/later.min.js"); 
            console.log("later Loaded Successfully");
            }
            
            
            if (args[i] == "lave" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lave/1.1.10/lave.js"); 
            console.log("lave Loaded Successfully");
            }
            
            
            if (args[i] == "layer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/layer/2.3/layer.js"); 
            console.log("layer Loaded Successfully");
            }
            
            
            if (args[i] == "layzr.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/layzr.js/2.2.2/layzr.min.js"); 
            console.log("layzr.js Loaded Successfully");
            }
            
            
            if (args[i] == "lazy.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lazy.js/0.5.0/lazy.min.js"); 
            console.log("lazy.js Loaded Successfully");
            }
            
            
            if (args[i] == "lazyad-loader" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lazyad-loader/1.1.10/lazyad-loader.min.js"); 
            console.log("lazyad-loader Loaded Successfully");
            }
            
            
            if (args[i] == "lazyload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lazyload/2.0.3/lazyload-min.js"); 
            console.log("lazyload Loaded Successfully");
            }
            
            
            if (args[i] == "lazyloadjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lazyloadjs/3.2.2/lazyload.min.js"); 
            console.log("lazyloadjs Loaded Successfully");
            }
            
            
            if (args[i] == "lazysizes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.0.1/lazysizes.min.js"); 
            console.log("lazysizes Loaded Successfully");
            }
            
            
            if (args[i] == "lazyyt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lazyyt/0.3.4/lazyYT.min.js"); 
            console.log("lazyyt Loaded Successfully");
            }
            
            
            if (args[i] == "le_js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/le_js/0.0.3/le.min.js"); 
            console.log("le_js Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-ajax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.min.js"); 
            console.log("leaflet-ajax Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-contextmenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-contextmenu/1.4.0/leaflet.contextmenu.min.js"); 
            console.log("leaflet-contextmenu Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-dvf" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-dvf/0.3.1/leaflet-dvf.min.js"); 
            console.log("leaflet-dvf Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-editable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-editable/1.1.0/Leaflet.Editable.min.js"); 
            console.log("leaflet-editable Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-geocoder-mapzen" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-geocoder-mapzen/1.9.4/leaflet-geocoder-mapzen.min.js"); 
            console.log("leaflet-geocoder-mapzen Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-gpx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.3.1/gpx.min.js"); 
            console.log("leaflet-gpx Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-groupedlayercontrol" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-groupedlayercontrol/0.6.0/leaflet.groupedlayercontrol.min.js"); 
            console.log("leaflet-groupedlayercontrol Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-hash" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-hash/0.2.1/leaflet-hash.min.js"); 
            console.log("leaflet-hash Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-locatecontrol" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-locatecontrol/0.62.0/L.Control.Locate.min.js"); 
            console.log("leaflet-locatecontrol Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-minimap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-minimap/3.6.0/Control.MiniMap.min.js"); 
            console.log("leaflet-minimap Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-omnivore" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-omnivore/0.3.4/leaflet-omnivore.min.js"); 
            console.log("leaflet-omnivore Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-plugins" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-plugins/3.0.1/control/Permalink.min.js"); 
            console.log("leaflet-plugins Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-polylinedecorator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-polylinedecorator/1.1.0/leaflet.polylineDecorator.min.js"); 
            console.log("leaflet-polylinedecorator Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-providers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-providers/1.1.17/leaflet-providers.min.js"); 
            console.log("leaflet-providers Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-realtime" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-realtime/2.1.1/leaflet-realtime.min.js"); 
            console.log("leaflet-realtime Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-routing-machine" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.7/leaflet-routing-machine.min.js"); 
            console.log("leaflet-routing-machine Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-tilelayer-geojson" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-tilelayer-geojson/1.0.4/TileLayer.GeoJSON.min.js"); 
            console.log("leaflet-tilelayer-geojson Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet-vector-layers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet-vector-layers/1.6.0/lvector.min.js"); 
            console.log("leaflet-vector-layers Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet.AnimatedMarker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet.AnimatedMarker/1.0.0/AnimatedMarker.min.js"); 
            console.log("leaflet.AnimatedMarker Loaded Successfully");
            }
            
            
            if (args[i] == "Leaflet.awesome-markers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.min.js"); 
            console.log("Leaflet.awesome-markers Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet.draw" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.13/leaflet.draw.js"); 
            console.log("leaflet.draw Loaded Successfully");
            }
            
            
            if (args[i] == "Leaflet.EasyButton" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Leaflet.EasyButton/2.2.4/easy-button.min.js"); 
            console.log("Leaflet.EasyButton Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet.freedraw" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet.freedraw/2.0.1/leaflet-freedraw.web.js"); 
            console.log("leaflet.freedraw Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet.fullscreen" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet.fullscreen/1.4.3/Control.FullScreen.min.js"); 
            console.log("leaflet.fullscreen Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet.heat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet.heat/0.2.0/leaflet-heat.js"); 
            console.log("leaflet.heat Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet.markercluster" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.2.0/leaflet.markercluster.js"); 
            console.log("leaflet.markercluster Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet.pm" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet.pm/0.16.0/leaflet.pm.min.js"); 
            console.log("leaflet.pm Loaded Successfully");
            }
            
            
            if (args[i] == "Leaflet.Spin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Leaflet.Spin/1.1.0/leaflet.spin.min.js"); 
            console.log("Leaflet.Spin Loaded Successfully");
            }
            
            
            if (args[i] == "leaflet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/leaflet.js"); 
            console.log("leaflet Loaded Successfully");
            }
            
            
            if (args[i] == "leapjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/leapjs/0.6.1/leap.min.js"); 
            console.log("leapjs Loaded Successfully");
            }
            
            
            if (args[i] == "legofy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/legofy/0.1.13/legofy.min.js"); 
            console.log("legofy Loaded Successfully");
            }
            
            
            if (args[i] == "legojs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/legojs/0.0.1/lego.min.js"); 
            console.log("legojs Loaded Successfully");
            }
            
            
            if (args[i] == "less.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.3/less.min.js"); 
            console.log("less.js Loaded Successfully");
            }
            
            
            if (args[i] == "lethargy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lethargy/1.0.4/lethargy.min.js"); 
            console.log("lethargy Loaded Successfully");
            }
            
            
            if (args[i] == "letterfx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/letterfx/1.0.2/jquery-letterfx.min.js"); 
            console.log("letterfx Loaded Successfully");
            }
            
            
            if (args[i] == "lettering.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.min.js"); 
            console.log("lettering.js Loaded Successfully");
            }
            
            
            if (args[i] == "levenshtein" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/levenshtein/1.0.5/levenshtein.min.js"); 
            console.log("levenshtein Loaded Successfully");
            }
            
            
            if (args[i] == "lg-autoplay" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lg-autoplay/1.0.4/lg-autoplay.min.js"); 
            console.log("lg-autoplay Loaded Successfully");
            }
            
            
            if (args[i] == "lg-fullscreen" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lg-fullscreen/1.0.1/lg-fullscreen.min.js"); 
            console.log("lg-fullscreen Loaded Successfully");
            }
            
            
            if (args[i] == "lg-hash" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lg-hash/1.0.4/lg-hash.min.js"); 
            console.log("lg-hash Loaded Successfully");
            }
            
            
            if (args[i] == "lg-pager" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lg-pager/1.0.2/lg-pager.min.js"); 
            console.log("lg-pager Loaded Successfully");
            }
            
            
            if (args[i] == "lg-share" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lg-share/1.1.0/lg-share.min.js"); 
            console.log("lg-share Loaded Successfully");
            }
            
            
            if (args[i] == "lg-thumbnail" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lg-thumbnail/1.1.0/lg-thumbnail.min.js"); 
            console.log("lg-thumbnail Loaded Successfully");
            }
            
            
            if (args[i] == "lg-video" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lg-video/1.2.0/lg-video.min.js"); 
            console.log("lg-video Loaded Successfully");
            }
            
            
            if (args[i] == "lg-zoom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lg-zoom/1.1.0/lg-zoom.min.js"); 
            console.log("lg-zoom Loaded Successfully");
            }
            
            
            if (args[i] == "libil" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/libil/0.1.2/libil.min.js"); 
            console.log("libil Loaded Successfully");
            }
            
            
            if (args[i] == "libphonenumber-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/libphonenumber-js/0.4.48/libphonenumber-js.min.js"); 
            console.log("libphonenumber-js Loaded Successfully");
            }
            
            
            if (args[i] == "libphonenumber" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/libphonenumber/8.8.8/phonenumberutil.min.js"); 
            console.log("libphonenumber Loaded Successfully");
            }
            
            
            if (args[i] == "libsodium-wrappers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/libsodium-wrappers/0.5.4/sodium.min.js"); 
            console.log("libsodium-wrappers Loaded Successfully");
            }
            
            
            if (args[i] == "lie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lie/3.1.1/lie.min.js"); 
            console.log("lie Loaded Successfully");
            }
            
            
            if (args[i] == "lightbox2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.10.0/js/lightbox.min.js"); 
            console.log("lightbox2 Loaded Successfully");
            }
            
            
            if (args[i] == "lightcase" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lightcase/2.4.2/js/lightcase.min.js"); 
            console.log("lightcase Loaded Successfully");
            }
            
            
            if (args[i] == "lightgallery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.6/js/lightgallery.min.js"); 
            console.log("lightgallery Loaded Successfully");
            }
            
            
            if (args[i] == "lightslider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/js/lightslider.min.js"); 
            console.log("lightslider Loaded Successfully");
            }
            
            
            if (args[i] == "limonte-sweetalert2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.3.0/sweetalert2.min.js"); 
            console.log("limonte-sweetalert2 Loaded Successfully");
            }
            
            
            if (args[i] == "line-chart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/line-chart/2.0.28/LineChart.min.js"); 
            console.log("line-chart Loaded Successfully");
            }
            
            
            if (args[i] == "linkurious.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/linkurious.js/1.5.1/sigma.min.js"); 
            console.log("linkurious.js Loaded Successfully");
            }
            
            
            if (args[i] == "linq.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/linq.js/2.2.0.2/linq.min.js"); 
            console.log("linq.js Loaded Successfully");
            }
            
            
            if (args[i] == "list.fuzzysearch.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/list.fuzzysearch.js/0.1.0/list.fuzzysearch.min.js"); 
            console.log("list.fuzzysearch.js Loaded Successfully");
            }
            
            
            if (args[i] == "list.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"); 
            console.log("list.js Loaded Successfully");
            }
            
            
            if (args[i] == "list.pagination.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/list.pagination.js/0.1.1/list.pagination.min.js"); 
            console.log("list.pagination.js Loaded Successfully");
            }
            
            
            if (args[i] == "lity" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lity/2.3.0/lity.min.js"); 
            console.log("lity Loaded Successfully");
            }
            
            
            if (args[i] == "livequery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/livequery/1.1.1/jquery.livequery.min.js"); 
            console.log("livequery Loaded Successfully");
            }
            
            
            if (args[i] == "livescript" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/livescript/1.5.0/livescript-min.js"); 
            console.log("livescript Loaded Successfully");
            }
            
            
            if (args[i] == "livestamp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/livestamp/1.1.2/livestamp.min.js"); 
            console.log("livestamp Loaded Successfully");
            }
            
            
            if (args[i] == "livingston-css3-mediaqueries-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/livingston-css3-mediaqueries-js/1.0.0/css3-mediaqueries.min.js"); 
            console.log("livingston-css3-mediaqueries-js Loaded Successfully");
            }
            
            
            if (args[i] == "load.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/load.js/1316434407/load-min.js"); 
            console.log("load.js Loaded Successfully");
            }
            
            
            if (args[i] == "LoadGo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/LoadGo/2.2/loadgo.min.js"); 
            console.log("LoadGo Loaded Successfully");
            }
            
            
            if (args[i] == "loadjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/loadjs/3.5.1/loadjs.min.js"); 
            console.log("loadjs Loaded Successfully");
            }
            
            
            if (args[i] == "lobipanel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lobipanel/1.0.6/js/lobipanel.min.js"); 
            console.log("lobipanel Loaded Successfully");
            }
            
            
            if (args[i] == "localforage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/localforage/1.5.5/localforage.min.js"); 
            console.log("localforage Loaded Successfully");
            }
            
            
            if (args[i] == "localStorage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/localStorage/2.0.1/localStorage.min.js"); 
            console.log("localStorage Loaded Successfully");
            }
            
            
            if (args[i] == "lockr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lockr/0.8.4/lockr.min.js"); 
            console.log("lockr Loaded Successfully");
            }
            
            
            if (args[i] == "lodash-compat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.2/lodash.min.js"); 
            console.log("lodash-compat Loaded Successfully");
            }
            
            
            if (args[i] == "lodash-fp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lodash-fp/0.10.4/lodash-fp.min.js"); 
            console.log("lodash-fp Loaded Successfully");
            }
            
            
            if (args[i] == "lodash.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"); 
            console.log("lodash.js Loaded Successfully");
            }
            
            
            if (args[i] == "log4javascript" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/log4javascript/1.4.9/log4javascript.min.js"); 
            console.log("log4javascript Loaded Successfully");
            }
            
            
            if (args[i] == "logerr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/logerr/1.2.0/logerr.min.js"); 
            console.log("logerr Loaded Successfully");
            }
            
            
            if (args[i] == "loglevel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/loglevel/1.6.0/loglevel.min.js"); 
            console.log("loglevel Loaded Successfully");
            }
            
            
            if (args[i] == "LogosDistort" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/LogosDistort/0.3.8/jquery.logosDistort.min.js"); 
            console.log("LogosDistort Loaded Successfully");
            }
            
            
            if (args[i] == "lokijs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lokijs/1.5.1/lokijs.min.js"); 
            console.log("lokijs Loaded Successfully");
            }
            
            
            if (args[i] == "lory.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lory.js/2.3.4/lory.min.js"); 
            console.log("lory.js Loaded Successfully");
            }
            
            
            if (args[i] == "loStorage.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/loStorage.js/1.1.0/loStorage.min.js"); 
            console.log("loStorage.js Loaded Successfully");
            }
            
            
            if (args[i] == "lovefield" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lovefield/2.1.12/lovefield.min.js"); 
            console.log("lovefield Loaded Successfully");
            }
            
            
            if (args[i] == "lowdb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lowdb/1.0.0/low.min.js"); 
            console.log("lowdb Loaded Successfully");
            }
            
            
            if (args[i] == "lozad.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.0.9/lozad.min.js"); 
            console.log("lozad.js Loaded Successfully");
            }
            
            
            if (args[i] == "lrsjng.jquery-qrcode" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lrsjng.jquery-qrcode/0.14.0/jquery-qrcode.min.js"); 
            console.log("lrsjng.jquery-qrcode Loaded Successfully");
            }
            
            
            if (args[i] == "lscache" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lscache/1.1.0/lscache.min.js"); 
            console.log("lscache Loaded Successfully");
            }
            
            
            if (args[i] == "luminateExtend" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/luminateExtend/1.8.1/luminateExtend.min.js"); 
            console.log("luminateExtend Loaded Successfully");
            }
            
            
            if (args[i] == "luminous-lightbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/1.0.1/Luminous.min.js"); 
            console.log("luminous-lightbox Loaded Successfully");
            }
            
            
            if (args[i] == "lumx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lumx/1.7.4/lumx.min.js"); 
            console.log("lumx Loaded Successfully");
            }
            
            
            if (args[i] == "lunr.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.1.5/lunr.min.js"); 
            console.log("lunr.js Loaded Successfully");
            }
            
            
            if (args[i] == "lz-string" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js"); 
            console.log("lz-string Loaded Successfully");
            }
            
            
            if (args[i] == "mach" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mach/1.3.8/mach.min.js"); 
            console.log("mach Loaded Successfully");
            }
            
            
            if (args[i] == "machina.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/machina.js/2.0.0/machina.min.js"); 
            console.log("machina.js Loaded Successfully");
            }
            
            
            if (args[i] == "machineboy2045-angular-selectize2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/machineboy2045-angular-selectize2/3.0.1/angular-selectize.min.js"); 
            console.log("machineboy2045-angular-selectize2 Loaded Successfully");
            }
            
            
            if (args[i] == "magicsuggest" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/magicsuggest/2.1.4/magicsuggest-min.js"); 
            console.log("magicsuggest Loaded Successfully");
            }
            
            
            if (args[i] == "magnific-popup.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"); 
            console.log("magnific-popup.js Loaded Successfully");
            }
            
            
            if (args[i] == "mailcheck" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mailcheck/1.1.2/mailcheck.min.js"); 
            console.log("mailcheck Loaded Successfully");
            }
            
            
            if (args[i] == "malihu-custom-scrollbar-plugin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"); 
            console.log("malihu-custom-scrollbar-plugin Loaded Successfully");
            }
            
            
            if (args[i] == "mammoth" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.4.3/mammoth.browser.min.js"); 
            console.log("mammoth Loaded Successfully");
            }
            
            
            if (args[i] == "mapbox-gl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/0.43.0/mapbox-gl.js"); 
            console.log("mapbox-gl Loaded Successfully");
            }
            
            
            if (args[i] == "maphilight" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/maphilight/1.3.1/jquery.maphilight.min.js"); 
            console.log("maphilight Loaded Successfully");
            }
            
            
            if (args[i] == "maplace-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/maplace-js/0.2.10/maplace.min.js"); 
            console.log("maplace-js Loaded Successfully");
            }
            
            
            if (args[i] == "maple.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/maple.js/1.5.0/maple.min.js"); 
            console.log("maple.js Loaded Successfully");
            }
            
            
            if (args[i] == "maquette" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/maquette/3.0.1/maquette.umd.min.js"); 
            console.log("maquette Loaded Successfully");
            }
            
            
            if (args[i] == "marginotes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/marginotes/0.1.0/marginotes.min.js"); 
            console.log("marginotes Loaded Successfully");
            }
            
            
            if (args[i] == "mark.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.0/mark.min.js"); 
            console.log("mark.js Loaded Successfully");
            }
            
            
            if (args[i] == "markdown-it-emoji" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/markdown-it-emoji/1.4.0/markdown-it-emoji.min.js"); 
            console.log("markdown-it-emoji Loaded Successfully");
            }
            
            
            if (args[i] == "markdown-it-footnote" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/markdown-it-footnote/3.0.1/markdown-it-footnote.min.js"); 
            console.log("markdown-it-footnote Loaded Successfully");
            }
            
            
            if (args[i] == "markdown-it" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/markdown-it/8.4.0/markdown-it.min.js"); 
            console.log("markdown-it Loaded Successfully");
            }
            
            
            if (args[i] == "markdown.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/markdown.js/0.5.0/markdown.min.js"); 
            console.log("markdown.js Loaded Successfully");
            }
            
            
            if (args[i] == "marked" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.9/marked.min.js"); 
            console.log("marked Loaded Successfully");
            }
            
            
            if (args[i] == "marker-animate-unobtrusive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/marker-animate-unobtrusive/0.2.8/SlidingMarker.min.js"); 
            console.log("marker-animate-unobtrusive Loaded Successfully");
            }
            
            
            if (args[i] == "markerclustererplus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/markerclustererplus/2.1.4/markerclusterer.min.js"); 
            console.log("markerclustererplus Loaded Successfully");
            }
            
            
            if (args[i] == "masonry" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.0/masonry.pkgd.min.js"); 
            console.log("masonry Loaded Successfully");
            }
            
            
            if (args[i] == "matchmedia-ng" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/matchmedia-ng/1.0.8/matchmedia-ng.min.js"); 
            console.log("matchmedia-ng Loaded Successfully");
            }
            
            
            if (args[i] == "material-colors" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/material-colors/1.2.5/colors.min.js"); 
            console.log("material-colors Loaded Successfully");
            }
            
            
            if (args[i] == "material-design-lite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.min.js"); 
            console.log("material-design-lite Loaded Successfully");
            }
            
            
            if (args[i] == "material-kit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/material-kit/1.1.0/js/material-kit.min.js"); 
            console.log("material-kit Loaded Successfully");
            }
            
            
            if (args[i] == "materialize-autocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/materialize-autocomplete/1.0.7/jquery.materialize-autocomplete.min.js"); 
            console.log("materialize-autocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "mathjax-mhchem" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.2.0/mhchem.js"); 
            console.log("mathjax-mhchem Loaded Successfully");
            }
            
            
            if (args[i] == "mathjax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js"); 
            console.log("mathjax Loaded Successfully");
            }
            
            
            if (args[i] == "mathjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.18.1/math.min.js"); 
            console.log("mathjs Loaded Successfully");
            }
            
            
            if (args[i] == "mathquill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.js"); 
            console.log("mathquill Loaded Successfully");
            }
            
            
            if (args[i] == "matreshka" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/matreshka/1.9.1/matreshka.min.js"); 
            console.log("matreshka Loaded Successfully");
            }
            
            
            if (args[i] == "matter-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js"); 
            console.log("matter-js Loaded Successfully");
            }
            
            
            if (args[i] == "md-data-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/md-data-table/2.2.0/md-data-table.min.js"); 
            console.log("md-data-table Loaded Successfully");
            }
            
            
            if (args[i] == "mdbootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.3/js/mdb.min.js"); 
            console.log("mdbootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "mdui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mdui/0.4.0/js/mdui.min.js"); 
            console.log("mdui Loaded Successfully");
            }
            
            
            if (args[i] == "mediaelement-plugins" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mediaelement-plugins/2.5.0/markers/markers.min.js"); 
            console.log("mediaelement-plugins Loaded Successfully");
            }
            
            
            if (args[i] == "mediaelement" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.7/mediaelement.min.js"); 
            console.log("mediaelement Loaded Successfully");
            }
            
            
            if (args[i] == "medium-editor-custom-html" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/medium-editor-custom-html/1.1.0/custom-html.min.js"); 
            console.log("medium-editor-custom-html Loaded Successfully");
            }
            
            
            if (args[i] == "medium-editor-insert-plugin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/medium-editor-insert-plugin/2.4.1/js/medium-editor-insert-plugin.min.js"); 
            console.log("medium-editor-insert-plugin Loaded Successfully");
            }
            
            
            if (args[i] == "medium-editor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.23.3/js/medium-editor.min.js"); 
            console.log("medium-editor Loaded Successfully");
            }
            
            
            if (args[i] == "melonjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/melonjs/1.0.1/melonjs.min.js"); 
            console.log("melonjs Loaded Successfully");
            }
            
            
            if (args[i] == "memoizejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/memoizejs/0.1.1/memoize.min.js"); 
            console.log("memoizejs Loaded Successfully");
            }
            
            
            if (args[i] == "meny" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/meny/1.4.0/meny.min.js"); 
            console.log("meny Loaded Successfully");
            }
            
            
            if (args[i] == "mercury" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mercury/14.1.0/mercury.min.js"); 
            console.log("mercury Loaded Successfully");
            }
            
            
            if (args[i] == "mermaid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mermaid/7.1.2/mermaid.min.js"); 
            console.log("mermaid Loaded Successfully");
            }
            
            
            if (args[i] == "meshki" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/meshki/2.0.1/js/meshki.min.js"); 
            console.log("meshki Loaded Successfully");
            }
            
            
            if (args[i] == "messageformat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/messageformat/0.3.1/messageformat.min.js"); 
            console.log("messageformat Loaded Successfully");
            }
            
            
            if (args[i] == "messenger" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/messenger/1.5.0/js/messenger.min.js"); 
            console.log("messenger Loaded Successfully");
            }
            
            
            if (args[i] == "metisMenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/metisMenu/2.7.1/metisMenu.min.js"); 
            console.log("metisMenu Loaded Successfully");
            }
            
            
            if (args[i] == "metrics-graphics" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/metrics-graphics/2.12.0/metricsgraphics.min.js"); 
            console.log("metrics-graphics Loaded Successfully");
            }
            
            
            if (args[i] == "metro" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/metro/3.0.17/js/metro.min.js"); 
            console.log("metro Loaded Successfully");
            }
            
            
            if (args[i] == "mhayes-twentytwenty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mhayes-twentytwenty/1.0.0/js/jquery.twentytwenty.min.js"); 
            console.log("mhayes-twentytwenty Loaded Successfully");
            }
            
            
            if (args[i] == "microbejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/microbejs/0.5.2/microbe.min.js"); 
            console.log("microbejs Loaded Successfully");
            }
            
            
            if (args[i] == "micromustache" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/micromustache/4.1.1/micromustache.min.js"); 
            console.log("micromustache Loaded Successfully");
            }
            
            
            if (args[i] == "microplugin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/microplugin/0.0.3/microplugin.min.js"); 
            console.log("microplugin Loaded Successfully");
            }
            
            
            if (args[i] == "midi.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/midi.js/0.3.0/midi.min.js"); 
            console.log("midi.js Loaded Successfully");
            }
            
            
            if (args[i] == "midnight.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/midnight.js/1.1.2/midnight.jquery.min.js"); 
            console.log("midnight.js Loaded Successfully");
            }
            
            
            if (args[i] == "min.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/min.js/0.2.3/$.min.js"); 
            console.log("min.js Loaded Successfully");
            }
            
            
            if (args[i] == "mindb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mindb/0.1.17/min.js"); 
            console.log("mindb Loaded Successfully");
            }
            
            
            if (args[i] == "mini-meteor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mini-meteor/1.0.1/mini-meteor.min.js"); 
            console.log("mini-meteor Loaded Successfully");
            }
            
            
            if (args[i] == "minicart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/minicart/3.0.6/minicart.min.js"); 
            console.log("minicart Loaded Successfully");
            }
            
            
            if (args[i] == "minifill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/minifill/0.0.4/minifill.min.js"); 
            console.log("minifill Loaded Successfully");
            }
            
            
            if (args[i] == "minigrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/minigrid/1.6.5/minigrid.min.js"); 
            console.log("minigrid Loaded Successfully");
            }
            
            
            if (args[i] == "minimap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/minimap/1.0.0/minimap.min.js"); 
            console.log("minimap Loaded Successfully");
            }
            
            
            if (args[i] == "miniTip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/miniTip/1.5.3/jquery.miniTip.min.js"); 
            console.log("miniTip Loaded Successfully");
            }
            
            
            if (args[i] == "minitranslate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/minitranslate/1.2.0/minitranslate.min.js"); 
            console.log("minitranslate Loaded Successfully");
            }
            
            
            if (args[i] == "MinPubSub" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/MinPubSub/0.0.2/minpubsub.js"); 
            console.log("MinPubSub Loaded Successfully");
            }
            
            
            if (args[i] == "mint-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mint-ui/2.2.13/mint-ui.common.min.js"); 
            console.log("mint-ui Loaded Successfully");
            }
            
            
            if (args[i] == "mistic100-Bootstrap-Confirmation" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mistic100-Bootstrap-Confirmation/2.4.0/bootstrap-confirmation.min.js"); 
            console.log("mistic100-Bootstrap-Confirmation Loaded Successfully");
            }
            
            
            if (args[i] == "mithril" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mithril/1.1.6/mithril.min.js"); 
            console.log("mithril Loaded Successfully");
            }
            
            
            if (args[i] == "mixitup" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.2.2/mixitup.min.js"); 
            console.log("mixitup Loaded Successfully");
            }
            
            
            if (args[i] == "mo-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mo-js/0.288.2/mo.min.js"); 
            console.log("mo-js Loaded Successfully");
            }
            
            
            if (args[i] == "mo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mo/1.7.3/lang.js"); 
            console.log("mo Loaded Successfully");
            }
            
            
            if (args[i] == "mobile-angular-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mobile-angular-ui/1.3.4/js/mobile-angular-ui.min.js"); 
            console.log("mobile-angular-ui Loaded Successfully");
            }
            
            
            if (args[i] == "mobile-detect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.1/mobile-detect.min.js"); 
            console.log("mobile-detect Loaded Successfully");
            }
            
            
            if (args[i] == "mobilebone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mobilebone/2.6.1/mobilebone.min.js"); 
            console.log("mobilebone Loaded Successfully");
            }
            
            
            if (args[i] == "mobilizejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mobilizejs/0.9/mobilize.min.js"); 
            console.log("mobilizejs Loaded Successfully");
            }
            
            
            if (args[i] == "mobx-react" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mobx-react/4.3.5/index.min.js"); 
            console.log("mobx-react Loaded Successfully");
            }
            
            
            if (args[i] == "mobx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mobx/3.4.1/mobx.min.js"); 
            console.log("mobx Loaded Successfully");
            }
            
            
            if (args[i] == "mocha" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.js"); 
            console.log("mocha Loaded Successfully");
            }
            
            
            if (args[i] == "mockstate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mockstate/0.0.7/mockstate.min.js"); 
            console.log("mockstate Loaded Successfully");
            }
            
            
            if (args[i] == "Modaal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.3.1/js/modaal.min.js"); 
            console.log("Modaal Loaded Successfully");
            }
            
            
            if (args[i] == "ModelCore" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ModelCore/1.1.1/ModelCore.min.js"); 
            console.log("ModelCore Loaded Successfully");
            }
            
            
            if (args[i] == "modernizr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"); 
            console.log("modernizr Loaded Successfully");
            }
            
            
            if (args[i] == "mogl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mogl/0.3.0/mogl.min.js"); 
            console.log("mogl Loaded Successfully");
            }
            
            
            if (args[i] == "mojio-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mojio-js/3.5.2/mojio-js.min.js"); 
            console.log("mojio-js Loaded Successfully");
            }
            
            
            if (args[i] == "moment-duration-format" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/moment-duration-format/2.1.1/moment-duration-format.min.js"); 
            console.log("moment-duration-format Loaded Successfully");
            }
            
            
            if (args[i] == "moment-range" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/moment-range/3.1.0/moment-range.min.js"); 
            console.log("moment-range Loaded Successfully");
            }
            
            
            if (args[i] == "moment-recur" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/moment-recur/1.0.7/moment-recur.min.js"); 
            console.log("moment-recur Loaded Successfully");
            }
            
            
            if (args[i] == "moment-timezone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.14/moment-timezone.min.js"); 
            console.log("moment-timezone Loaded Successfully");
            }
            
            
            if (args[i] == "moment.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"); 
            console.log("moment.js Loaded Successfully");
            }
            
            
            if (args[i] == "monaco-editor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs/editor/editor.main.js"); 
            console.log("monaco-editor Loaded Successfully");
            }
            
            
            if (args[i] == "money.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/money.js/0.2.0/money.min.js"); 
            console.log("money.js Loaded Successfully");
            }
            
            
            if (args[i] == "monkberry-standalone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/monkberry-standalone/4.0.8/monkberry.min.js"); 
            console.log("monkberry-standalone Loaded Successfully");
            }
            
            
            if (args[i] == "monkberry" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/monkberry/4.0.8/monkberry.min.js"); 
            console.log("monkberry Loaded Successfully");
            }
            
            
            if (args[i] == "moonjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/moonjs/0.11.0/moon.min.js"); 
            console.log("moonjs Loaded Successfully");
            }
            
            
            if (args[i] == "mootools-more" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mootools-more/1.6.0/mootools-more-compressed.js"); 
            console.log("mootools-more Loaded Successfully");
            }
            
            
            if (args[i] == "mootools" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min.js"); 
            console.log("mootools Loaded Successfully");
            }
            
            
            if (args[i] == "mori" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mori/0.3.2/mori.min.js"); 
            console.log("mori Loaded Successfully");
            }
            
            
            if (args[i] == "morpheus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/morpheus/0.7.2/morpheus.min.js"); 
            console.log("morpheus Loaded Successfully");
            }
            
            
            if (args[i] == "Morphext" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Morphext/2.4.4/morphext.min.js"); 
            console.log("Morphext Loaded Successfully");
            }
            
            
            if (args[i] == "morris.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"); 
            console.log("morris.js Loaded Successfully");
            }
            
            
            if (args[i] == "most" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/most/1.7.2/most.min.js"); 
            console.log("most Loaded Successfully");
            }
            
            
            if (args[i] == "motajs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/motajs/0.18.0/mota.min.js"); 
            console.log("motajs Loaded Successfully");
            }
            
            
            if (args[i] == "motio" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/motio/2.2.2/motio.min.js"); 
            console.log("motio Loaded Successfully");
            }
            
            
            if (args[i] == "motion-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/motion-ui/1.2.3/motion-ui.min.js"); 
            console.log("motion-ui Loaded Successfully");
            }
            
            
            if (args[i] == "motion.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/motion.js/0.3.0/motion.min.js"); 
            console.log("motion.js Loaded Successfully");
            }
            
            
            if (args[i] == "mouse0270-bootstrap-notify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mouse0270-bootstrap-notify/3.1.7/bootstrap-notify.min.js"); 
            console.log("mouse0270-bootstrap-notify Loaded Successfully");
            }
            
            
            if (args[i] == "mousetrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.1/mousetrap.min.js"); 
            console.log("mousetrap Loaded Successfully");
            }
            
            
            if (args[i] == "move.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/move.js/0.5.0/move.min.js"); 
            console.log("move.js Loaded Successfully");
            }
            
            
            if (args[i] == "moveTo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/moveTo/1.7.1/moveTo.min.js"); 
            console.log("moveTo Loaded Successfully");
            }
            
            
            if (args[i] == "moviedb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/moviedb/0.2.10/moviedb.min.js"); 
            console.log("moviedb Loaded Successfully");
            }
            
            
            if (args[i] == "msgpack-lite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js"); 
            console.log("msgpack-lite Loaded Successfully");
            }
            
            
            if (args[i] == "msgpack5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/msgpack5/4.0.0/msgpack5.min.js"); 
            console.log("msgpack5 Loaded Successfully");
            }
            
            
            if (args[i] == "msl-client-browser" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/msl-client-browser/1.1.0/mockapi-browser.min.js"); 
            console.log("msl-client-browser Loaded Successfully");
            }
            
            
            if (args[i] == "msngr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/msngr/6.0.0/msngr.min.js"); 
            console.log("msngr Loaded Successfully");
            }
            
            
            if (args[i] == "mui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mui/3.7.1/js/mui.min.js"); 
            console.log("mui Loaded Successfully");
            }
            
            
            if (args[i] == "muicss" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.35/js/mui.min.js"); 
            console.log("muicss Loaded Successfully");
            }
            
            
            if (args[i] == "multi-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/multi-select/0.9.12/js/jquery.multi-select.min.js"); 
            console.log("multi-select Loaded Successfully");
            }
            
            
            if (args[i] == "multiple-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/multiple-select/1.2.0/multiple-select.min.js"); 
            console.log("multiple-select Loaded Successfully");
            }
            
            
            if (args[i] == "multiple.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/multiple.js/0.0.1/multiple.min.js"); 
            console.log("multiple.js Loaded Successfully");
            }
            
            
            if (args[i] == "multiscroll.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/multiscroll.js/0.1.8/jquery.multiscroll.min.js"); 
            console.log("multiscroll.js Loaded Successfully");
            }
            
            
            if (args[i] == "multiselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/multiselect/2.2.9/js/multiselect.min.js"); 
            console.log("multiselect Loaded Successfully");
            }
            
            
            if (args[i] == "murmurhash3js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/murmurhash3js/3.0.1/murmurhash3js.min.js"); 
            console.log("murmurhash3js Loaded Successfully");
            }
            
            
            if (args[i] == "musicmetadata" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/musicmetadata/2.0.2/musicmetadata.min.js"); 
            console.log("musicmetadata Loaded Successfully");
            }
            
            
            if (args[i] == "mustache.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"); 
            console.log("mustache.js Loaded Successfully");
            }
            
            
            if (args[i] == "MutationObserver.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/MutationObserver.js/0.3.2/mutationobserver.min.js"); 
            console.log("MutationObserver.js Loaded Successfully");
            }
            
            
            if (args[i] == "muuri" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/muuri/0.5.3/muuri.min.js"); 
            console.log("muuri Loaded Successfully");
            }
            
            
            if (args[i] == "mvw-injection" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mvw-injection/0.3.0/dependency-injection.min.js"); 
            console.log("mvw-injection Loaded Successfully");
            }
            
            
            if (args[i] == "mycolorway-simple-hotkeys" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/mycolorway-simple-hotkeys/1.0.3/hotkeys.min.js"); 
            console.log("mycolorway-simple-hotkeys Loaded Successfully");
            }
            
            
            if (args[i] == "myforce-angularjs-dropdown-multiselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/myforce-angularjs-dropdown-multiselect/1.10.2/angularjs-dropdown-multiselect.min.js"); 
            console.log("myforce-angularjs-dropdown-multiselect Loaded Successfully");
            }
            
            
            if (args[i] == "myscript" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/myscript/4.0.0/myscript.min.js"); 
            console.log("myscript Loaded Successfully");
            }
            
            
            if (args[i] == "najaxjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/najaxjs/1.1.0/najax.min.js"); 
            console.log("najaxjs Loaded Successfully");
            }
            
            
            if (args[i] == "nanoajax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nanoajax/0.4.3/nanoajax.min.js"); 
            console.log("nanoajax Loaded Successfully");
            }
            
            
            if (args[i] == "nanobar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nanobar/0.4.2/nanobar.min.js"); 
            console.log("nanobar Loaded Successfully");
            }
            
            
            if (args[i] == "nanogallery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/jquery.nanogallery.min.js"); 
            console.log("nanogallery Loaded Successfully");
            }
            
            
            if (args[i] == "native-promise-only" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/native-promise-only/0.8.1/npo.js"); 
            console.log("native-promise-only Loaded Successfully");
            }
            
            
            if (args[i] == "nedb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nedb/1.8.0/nedb.min.js"); 
            console.log("nedb Loaded Successfully");
            }
            
            
            if (args[i] == "neo-async" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/neo-async/2.3.0/async.min.js"); 
            console.log("neo-async Loaded Successfully");
            }
            
            
            if (args[i] == "nes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nes/7.0.2/client.js"); 
            console.log("nes Loaded Successfully");
            }
            
            
            if (args[i] == "Nestable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Nestable/2012-10-15/jquery.nestable.min.js"); 
            console.log("Nestable Loaded Successfully");
            }
            
            
            if (args[i] == "nestable2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nestable2/1.6.0/jquery.nestable.min.js"); 
            console.log("nestable2 Loaded Successfully");
            }
            
            
            if (args[i] == "nestedSortable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nestedSortable/2.0.0/jquery.mjs.nestedSortable.min.js"); 
            console.log("nestedSortable Loaded Successfully");
            }
            
            
            if (args[i] == "network-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/network-js/2.1.0/network.min.js"); 
            console.log("network-js Loaded Successfully");
            }
            
            
            if (args[i] == "ng-bs-daterangepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-bs-daterangepicker/0.0.6/ng-bs-daterangepicker.min.js"); 
            console.log("ng-bs-daterangepicker Loaded Successfully");
            }
            
            
            if (args[i] == "ng-ckeditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-ckeditor/0.2.1/ng-ckeditor.min.js"); 
            console.log("ng-ckeditor Loaded Successfully");
            }
            
            
            if (args[i] == "ng-clip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-clip/0.2.6/ng-clip.min.js"); 
            console.log("ng-clip Loaded Successfully");
            }
            
            
            if (args[i] == "ng-context-menu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-context-menu/1.0.2/ng-context-menu.min.js"); 
            console.log("ng-context-menu Loaded Successfully");
            }
            
            
            if (args[i] == "ng-cordova" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-cordova/0.1.27-alpha/ng-cordova.min.js"); 
            console.log("ng-cordova Loaded Successfully");
            }
            
            
            if (args[i] == "ng-csv" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-csv/0.3.6/ng-csv.min.js"); 
            console.log("ng-csv Loaded Successfully");
            }
            
            
            if (args[i] == "ng-currency" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-currency/1.2.4/ng-currency.js"); 
            console.log("ng-currency Loaded Successfully");
            }
            
            
            if (args[i] == "ng-device-detector" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-device-detector/5.0.2/ng-device-detector.min.js"); 
            console.log("ng-device-detector Loaded Successfully");
            }
            
            
            if (args[i] == "ng-dialog" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-dialog/1.4.0/js/ngDialog.min.js"); 
            console.log("ng-dialog Loaded Successfully");
            }
            
            
            if (args[i] == "ng-droplet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-droplet/0.7.0/ng-droplet.min.js"); 
            console.log("ng-droplet Loaded Successfully");
            }
            
            
            if (args[i] == "ng-dropzone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-dropzone/2.0.2/ng-dropzone.min.js"); 
            console.log("ng-dropzone Loaded Successfully");
            }
            
            
            if (args[i] == "ng-embed" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-embed/2.2.0/ng-embed.min.js"); 
            console.log("ng-embed Loaded Successfully");
            }
            
            
            if (args[i] == "ng-fittext" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-fittext/4.2.3/ng-FitText.min.js"); 
            console.log("ng-fittext Loaded Successfully");
            }
            
            
            if (args[i] == "ng-flow" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-flow/2.7.7/ng-flow-standalone.min.js"); 
            console.log("ng-flow Loaded Successfully");
            }
            
            
            if (args[i] == "ng-grid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-grid/2.0.11/ng-grid.min.js"); 
            console.log("ng-grid Loaded Successfully");
            }
            
            
            if (args[i] == "ng-i18next" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-i18next/1.0.4/ng-i18next.min.js"); 
            console.log("ng-i18next Loaded Successfully");
            }
            
            
            if (args[i] == "ng-idle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-idle/1.3.2/angular-idle.min.js"); 
            console.log("ng-idle Loaded Successfully");
            }
            
            
            if (args[i] == "ng-img-crop" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-img-crop/0.3.2/ng-img-crop.js"); 
            console.log("ng-img-crop Loaded Successfully");
            }
            
            
            if (args[i] == "ng-inline-edit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-inline-edit/0.7.0/ng-inline-edit.min.js"); 
            console.log("ng-inline-edit Loaded Successfully");
            }
            
            
            if (args[i] == "ng-jsoneditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-jsoneditor/1.51/ng-jsoneditor.min.js"); 
            console.log("ng-jsoneditor Loaded Successfully");
            }
            
            
            if (args[i] == "ng-knob" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-knob/0.1.3/ng-knob.min.js"); 
            console.log("ng-knob Loaded Successfully");
            }
            
            
            if (args[i] == "ng-meta" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-meta/1.0.2/ngMeta.min.js"); 
            console.log("ng-meta Loaded Successfully");
            }
            
            
            if (args[i] == "ng-notify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-notify/0.8.0/ng-notify.min.js"); 
            console.log("ng-notify Loaded Successfully");
            }
            
            
            if (args[i] == "ng-parallax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-parallax/1.1.3/ngParallax.min.js"); 
            console.log("ng-parallax Loaded Successfully");
            }
            
            
            if (args[i] == "ng-pdfviewer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-pdfviewer/0.2.1/ng-pdfviewer.min.js"); 
            console.log("ng-pdfviewer Loaded Successfully");
            }
            
            
            if (args[i] == "ng-prettyjson" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-prettyjson/0.2.0/ng-prettyjson.min.js"); 
            console.log("ng-prettyjson Loaded Successfully");
            }
            
            
            if (args[i] == "ng-quill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-quill/3.5.1/ng-quill.min.js"); 
            console.log("ng-quill Loaded Successfully");
            }
            
            
            if (args[i] == "ng-showdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-showdown/1.1.0/ng-showdown.min.js"); 
            console.log("ng-showdown Loaded Successfully");
            }
            
            
            if (args[i] == "ng-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-slider/2.2.6/ng-slider.min.js"); 
            console.log("ng-slider Loaded Successfully");
            }
            
            
            if (args[i] == "ng-sortable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-sortable/1.3.8/ng-sortable.min.js"); 
            console.log("ng-sortable Loaded Successfully");
            }
            
            
            if (args[i] == "ng-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-table/1.0.0/ng-table.min.js"); 
            console.log("ng-table Loaded Successfully");
            }
            
            
            if (args[i] == "ng-tags-input" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-tags-input/3.2.0/ng-tags-input.min.js"); 
            console.log("ng-tags-input Loaded Successfully");
            }
            
            
            if (args[i] == "ng-tasty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-tasty/0.6.1/ng-tasty-tpls.min.js"); 
            console.log("ng-tasty Loaded Successfully");
            }
            
            
            if (args[i] == "ng-toast" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-toast/2.0.0/ngToast.min.js"); 
            console.log("ng-toast Loaded Successfully");
            }
            
            
            if (args[i] == "ng-token-auth" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-token-auth/0.0.30/ng-token-auth.min.js"); 
            console.log("ng-token-auth Loaded Successfully");
            }
            
            
            if (args[i] == "ng-wig" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng-wig/3.0.16/ng-wig.min.js"); 
            console.log("ng-wig Loaded Successfully");
            }
            
            
            if (args[i] == "ng.ckeditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng.ckeditor/2.0.5/ng-ckeditor.min.js"); 
            console.log("ng.ckeditor Loaded Successfully");
            }
            
            
            if (args[i] == "ng2-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng2-bootstrap/1.6.2/ng2-bootstrap.umd.min.js"); 
            console.log("ng2-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "ng2-formly" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ng2-formly/2.0.0-beta.14/ng2-formly.umd.min.js"); 
            console.log("ng2-formly Loaded Successfully");
            }
            
            
            if (args[i] == "ngAnalytics" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngAnalytics/1.1.4/ng-analytics.min.js"); 
            console.log("ngAnalytics Loaded Successfully");
            }
            
            
            if (args[i] == "ngCart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngCart/1.0.0/ngCart.min.js"); 
            console.log("ngCart Loaded Successfully");
            }
            
            
            if (args[i] == "ngclipboard" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngclipboard/1.1.2/ngclipboard.min.js"); 
            console.log("ngclipboard Loaded Successfully");
            }
            
            
            if (args[i] == "ngDraggable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngDraggable/0.1.11/ngDraggable.min.js"); 
            console.log("ngDraggable Loaded Successfully");
            }
            
            
            if (args[i] == "ngHandsontable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngHandsontable/0.13.0/ngHandsontable.min.js"); 
            console.log("ngHandsontable Loaded Successfully");
            }
            
            
            if (args[i] == "ngInfiniteScroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngInfiniteScroll/1.3.0/ng-infinite-scroll.min.js"); 
            console.log("ngInfiniteScroll Loaded Successfully");
            }
            
            
            if (args[i] == "ngMask" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngMask/3.1.1/ngMask.min.js"); 
            console.log("ngMask Loaded Successfully");
            }
            
            
            if (args[i] == "ngmodeloptions" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngmodeloptions/1.0.1/ngModelOptions.min.js"); 
            console.log("ngmodeloptions Loaded Successfully");
            }
            
            
            if (args[i] == "ngn-chassis-components" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngn-chassis-components/1.0.5/chassis-cycle.min.js"); 
            console.log("ngn-chassis-components Loaded Successfully");
            }
            
            
            if (args[i] == "ngOfficeUiFabric" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngOfficeUiFabric/0.16.0/ngOfficeUiFabric.min.js"); 
            console.log("ngOfficeUiFabric Loaded Successfully");
            }
            
            
            if (args[i] == "ngprogress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngprogress/1.1.3/ngprogress.min.js"); 
            console.log("ngprogress Loaded Successfully");
            }
            
            
            if (args[i] == "ngreact" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngreact/0.5.1/ngReact.min.js"); 
            console.log("ngreact Loaded Successfully");
            }
            
            
            if (args[i] == "ngStorage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.11/ngStorage.min.js"); 
            console.log("ngStorage Loaded Successfully");
            }
            
            
            if (args[i] == "nice-validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nice-validator/1.1.3/jquery.validator.min.js"); 
            console.log("nice-validator Loaded Successfully");
            }
            
            
            if (args[i] == "ninjaui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ninjaui/1.0.1/jquery.ninjaui.min.js"); 
            console.log("ninjaui Loaded Successfully");
            }
            
            
            if (args[i] == "nipplejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nipplejs/0.6.8/nipplejs.min.js"); 
            console.log("nipplejs Loaded Successfully");
            }
            
            
            if (args[i] == "nivo-lightbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nivo-lightbox/1.3.1/nivo-lightbox.min.js"); 
            console.log("nivo-lightbox Loaded Successfully");
            }
            
            
            if (args[i] == "nlp_compromise" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nlp_compromise/6.5.5/nlp_compromise.min.js"); 
            console.log("nlp_compromise Loaded Successfully");
            }
            
            
            if (args[i] == "nod" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nod/2.0.12/nod.min.js"); 
            console.log("nod Loaded Successfully");
            }
            
            
            if (args[i] == "node-uuid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/node-uuid/1.4.8/uuid.min.js"); 
            console.log("node-uuid Loaded Successfully");
            }
            
            
            if (args[i] == "node-waves" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/node-waves/0.7.5/waves.min.js"); 
            console.log("node-waves Loaded Successfully");
            }
            
            
            if (args[i] == "noisy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/noisy/1.2/jquery.noisy.min.js"); 
            console.log("noisy Loaded Successfully");
            }
            
            
            if (args[i] == "nomnoml" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nomnoml/0.2.0/nomnoml.min.js"); 
            console.log("nomnoml Loaded Successfully");
            }
            
            
            if (args[i] == "nosleep" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nosleep/0.6.0/NoSleep.min.js"); 
            console.log("nosleep Loaded Successfully");
            }
            
            
            if (args[i] == "noti.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/noti.js/1.0.2/noti.min.js"); 
            console.log("noti.js Loaded Successfully");
            }
            
            
            if (args[i] == "notie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/notie/4.3.1/notie.min.js"); 
            console.log("notie Loaded Successfully");
            }
            
            
            if (args[i] == "notificon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/notificon/1.0.4/notificon.min.js"); 
            console.log("notificon Loaded Successfully");
            }
            
            
            if (args[i] == "notifxi" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/notifxi/0.2.2/notifxi.min.js"); 
            console.log("notifxi Loaded Successfully");
            }
            
            
            if (args[i] == "notify.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/notify.js/3.0.0/notify.min.js"); 
            console.log("notify.js Loaded Successfully");
            }
            
            
            if (args[i] == "notify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"); 
            console.log("notify Loaded Successfully");
            }
            
            
            if (args[i] == "noty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js"); 
            console.log("noty Loaded Successfully");
            }
            
            
            if (args[i] == "noUiSlider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/10.1.0/nouislider.min.js"); 
            console.log("noUiSlider Loaded Successfully");
            }
            
            
            if (args[i] == "nprogress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"); 
            console.log("nprogress Loaded Successfully");
            }
            
            
            if (args[i] == "ns-popover" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ns-popover/0.6.8/nsPopover.min.js"); 
            console.log("ns-popover Loaded Successfully");
            }
            
            
            if (args[i] == "nuclear-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nuclear-js/1.4.0/nuclear.min.js"); 
            console.log("nuclear-js Loaded Successfully");
            }
            
            
            if (args[i] == "numbered" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/numbered/1.1.0/index.min.js"); 
            console.log("numbered Loaded Successfully");
            }
            
            
            if (args[i] == "numbers.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/numbers.js/0.6.0/numbers.min.js"); 
            console.log("numbers.js Loaded Successfully");
            }
            
            
            if (args[i] == "numbro" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/numbro/1.11.1/numbro.min.js"); 
            console.log("numbro Loaded Successfully");
            }
            
            
            if (args[i] == "numeral.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"); 
            console.log("numeral.js Loaded Successfully");
            }
            
            
            if (args[i] == "numeric" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/numeric/1.2.6/numeric.min.js"); 
            console.log("numeric Loaded Successfully");
            }
            
            
            if (args[i] == "numjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/numjs/0.15.1/numjs.min.js"); 
            console.log("numjs Loaded Successfully");
            }
            
            
            if (args[i] == "nunjucks" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nunjucks/3.0.1/nunjucks.min.js"); 
            console.log("nunjucks Loaded Successfully");
            }
            
            
            if (args[i] == "nvd3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.6/nv.d3.min.js"); 
            console.log("nvd3 Loaded Successfully");
            }
            
            
            if (args[i] == "nviewjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nviewjs/1.0.3/nview.min.js"); 
            console.log("nviewjs Loaded Successfully");
            }
            
            
            if (args[i] == "nwmatcher" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/nwmatcher/1.4.2/nwmatcher.min.js"); 
            console.log("nwmatcher Loaded Successfully");
            }
            
            
            if (args[i] == "oauth-io" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oauth-io/0.6.2/oauth.min.js"); 
            console.log("oauth-io Loaded Successfully");
            }
            
            
            if (args[i] == "object-fit-images" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/object-fit-images/3.2.3/ofi.min.js"); 
            console.log("object-fit-images Loaded Successfully");
            }
            
            
            if (args[i] == "object-fit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/object-fit/0.4.3/polyfill.object-fit.min.js"); 
            console.log("object-fit Loaded Successfully");
            }
            
            
            if (args[i] == "object-observe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/object-observe/0.2.6/object-observe.min.js"); 
            console.log("object-observe Loaded Successfully");
            }
            
            
            if (args[i] == "oboe.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oboe.js/2.1.4/oboe-browser.min.js"); 
            console.log("oboe.js Loaded Successfully");
            }
            
            
            if (args[i] == "ocanvas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ocanvas/2.9.0/ocanvas.min.js"); 
            console.log("ocanvas Loaded Successfully");
            }
            
            
            if (args[i] == "oclazyload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oclazyload/1.1.0/ocLazyLoad.min.js"); 
            console.log("oclazyload Loaded Successfully");
            }
            
            
            if (args[i] == "ODataResources" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ODataResources/1.0.25/odataresources.min.js"); 
            console.log("ODataResources Loaded Successfully");
            }
            
            
            if (args[i] == "odometer.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js"); 
            console.log("odometer.js Loaded Successfully");
            }
            
            
            if (args[i] == "offline-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/offline-js/0.7.19/offline.min.js"); 
            console.log("offline-js Loaded Successfully");
            }
            
            
            if (args[i] == "oidc-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oidc-client/1.4.1/oidc-client.min.js"); 
            console.log("oidc-client Loaded Successfully");
            }
            
            
            if (args[i] == "oimo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oimo/1.0.9/oimo.min.js"); 
            console.log("oimo Loaded Successfully");
            }
            
            
            if (args[i] == "oj.AceEditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj.AceEditor/0.0.6/oj.AceEditor.min.js"); 
            console.log("oj.AceEditor Loaded Successfully");
            }
            
            
            if (args[i] == "oj.GitHubButton" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj.GitHubButton/0.0.2/oj.GitHubButton.min.js"); 
            console.log("oj.GitHubButton Loaded Successfully");
            }
            
            
            if (args[i] == "oj.JSFiddle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj.JSFiddle/0.0.1/oj.JSFiddle.min.js"); 
            console.log("oj.JSFiddle Loaded Successfully");
            }
            
            
            if (args[i] == "oj.markdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj.markdown/0.2.10/oj.markdown.min.js"); 
            console.log("oj.markdown Loaded Successfully");
            }
            
            
            if (args[i] == "oj.mustache" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj.mustache/0.7.2/oj.mustache.min.js"); 
            console.log("oj.mustache Loaded Successfully");
            }
            
            
            if (args[i] == "oj.TwitterButton" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj.TwitterButton/0.0.4/oj.TwitterButton.min.js"); 
            console.log("oj.TwitterButton Loaded Successfully");
            }
            
            
            if (args[i] == "oj.VimeoVideo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj.VimeoVideo/0.0.6/oj.VimeoVideo.min.js"); 
            console.log("oj.VimeoVideo Loaded Successfully");
            }
            
            
            if (args[i] == "oj.YouTubeVideo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj.YouTubeVideo/0.0.1/oj.YouTubeVideo.min.js"); 
            console.log("oj.YouTubeVideo Loaded Successfully");
            }
            
            
            if (args[i] == "oj" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oj/0.2.1/oj.min.js"); 
            console.log("oj Loaded Successfully");
            }
            
            
            if (args[i] == "okayNav" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/okayNav/2.0.4/js/jquery.okayNav-min.js"); 
            console.log("okayNav Loaded Successfully");
            }
            
            
            if (args[i] == "ol3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ol3/4.6.4/ol.js"); 
            console.log("ol3 Loaded Successfully");
            }
            
            
            if (args[i] == "omniscient" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/omniscient/4.2.0/omniscient.min.js"); 
            console.log("omniscient Loaded Successfully");
            }
            
            
            if (args[i] == "onecolor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/onecolor/3.0.5/one-color-all.js"); 
            console.log("onecolor Loaded Successfully");
            }
            
            
            if (args[i] == "onepage-scroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/onepage-scroll/1.3.1/jquery.onepage-scroll.min.js"); 
            console.log("onepage-scroll Loaded Successfully");
            }
            
            
            if (args[i] == "onfire.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/onfire.js/1.0.6/onfire.min.js"); 
            console.log("onfire.js Loaded Successfully");
            }
            
            
            if (args[i] == "onsen" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/onsen/2.8.3/js/onsenui.min.js"); 
            console.log("onsen Loaded Successfully");
            }
            
            
            if (args[i] == "oojs-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oojs-ui/0.24.3/oojs-ui.min.js"); 
            console.log("oojs-ui Loaded Successfully");
            }
            
            
            if (args[i] == "oojs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oojs/2.1.0/oojs.min.js"); 
            console.log("oojs Loaded Successfully");
            }
            
            
            if (args[i] == "opal-jquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/opal-jquery/0.0.8/opal-jquery.min.js"); 
            console.log("opal-jquery Loaded Successfully");
            }
            
            
            if (args[i] == "opal-parser" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/opal-parser/0.3.43/opal-parser.min.js"); 
            console.log("opal-parser Loaded Successfully");
            }
            
            
            if (args[i] == "opal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/opal/0.3.43/opal.min.js"); 
            console.log("opal Loaded Successfully");
            }
            
            
            if (args[i] == "openajax-hub" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/openajax-hub/2.0.7/OpenAjaxUnmanagedHub.min.js"); 
            console.log("openajax-hub Loaded Successfully");
            }
            
            
            if (args[i] == "openlayers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/openlayers/4.6.4/ol.js"); 
            console.log("openlayers Loaded Successfully");
            }
            
            
            if (args[i] == "openlocationcode" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/openlocationcode/1.0.3/openlocationcode.min.js"); 
            console.log("openlocationcode Loaded Successfully");
            }
            
            
            if (args[i] == "openpgp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/openpgp/2.6.1/openpgp.min.js"); 
            console.log("openpgp Loaded Successfully");
            }
            
            
            if (args[i] == "openseadragon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.3.1/openseadragon.min.js"); 
            console.log("openseadragon Loaded Successfully");
            }
            
            
            if (args[i] == "opentip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/opentip/2.4.6/downloads/opentip-jquery.min.js"); 
            console.log("opentip Loaded Successfully");
            }
            
            
            if (args[i] == "opentype.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/opentype.js/0.7.3/opentype.min.js"); 
            console.log("opentype.js Loaded Successfully");
            }
            
            
            if (args[i] == "operative" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/operative/0.4.6/operative.min.js"); 
            console.log("operative Loaded Successfully");
            }
            
            
            if (args[i] == "oppia" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oppia/0.0.3/oppia-player.min.js"); 
            console.log("oppia Loaded Successfully");
            }
            
            
            if (args[i] == "optimal-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/optimal-select/4.0.1/optimal-select.min.js"); 
            console.log("optimal-select Loaded Successfully");
            }
            
            
            if (args[i] == "orb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/orb/1.0.9/orb.min.js"); 
            console.log("orb Loaded Successfully");
            }
            
            
            if (args[i] == "orgchart-webcomponents" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/orgchart-webcomponents/0.0.1/orgchart-webcomponents.min.js"); 
            console.log("orgchart-webcomponents Loaded Successfully");
            }
            
            
            if (args[i] == "OrgChart.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/OrgChart.js/0.0.1/OrgChart.min.js"); 
            console.log("OrgChart.js Loaded Successfully");
            }
            
            
            if (args[i] == "orgchart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/orgchart/2.0.14/js/jquery.orgchart.min.js"); 
            console.log("orgchart Loaded Successfully");
            }
            
            
            if (args[i] == "origamijs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/origamijs/0.5.1/origami.min.js"); 
            console.log("origamijs Loaded Successfully");
            }
            
            
            if (args[i] == "ornajs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ornajs/3.3.7/orna.min.js"); 
            console.log("ornajs Loaded Successfully");
            }
            
            
            if (args[i] == "ot.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ot.js/0.0.15/ot-min.js"); 
            console.log("ot.js Loaded Successfully");
            }
            
            
            if (args[i] == "ouibounce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ouibounce/0.0.12/ouibounce.min.js"); 
            console.log("ouibounce Loaded Successfully");
            }
            
            
            if (args[i] == "outdated-browser" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/outdated-browser/1.1.5/outdatedbrowser.min.js"); 
            console.log("outdated-browser Loaded Successfully");
            }
            
            
            if (args[i] == "OverlappingMarkerSpiderfier-Leaflet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier-Leaflet/0.2.6/oms.min.js"); 
            console.log("OverlappingMarkerSpiderfier-Leaflet Loaded Successfully");
            }
            
            
            if (args[i] == "OverlappingMarkerSpiderfier" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier/1.0.3/oms.min.js"); 
            console.log("OverlappingMarkerSpiderfier Loaded Successfully");
            }
            
            
            if (args[i] == "overthrow" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/overthrow/0.7.0/overthrow.min.js"); 
            console.log("overthrow Loaded Successfully");
            }
            
            
            if (args[i] == "owl-carousel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"); 
            console.log("owl-carousel Loaded Successfully");
            }
            
            
            if (args[i] == "OwlCarousel2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js"); 
            console.log("OwlCarousel2 Loaded Successfully");
            }
            
            
            if (args[i] == "oz.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/oz.js/2.6.4/oz.min.js"); 
            console.log("oz.js Loaded Successfully");
            }
            
            
            if (args[i] == "p2.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/p2.js/0.7.1/p2.min.js"); 
            console.log("p2.js Loaded Successfully");
            }
            
            
            if (args[i] == "p5.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"); 
            console.log("p5.js Loaded Successfully");
            }
            
            
            if (args[i] == "pablo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pablo/0.4.0/pablo.min.js"); 
            console.log("pablo Loaded Successfully");
            }
            
            
            if (args[i] == "pace" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js"); 
            console.log("pace Loaded Successfully");
            }
            
            
            if (args[i] == "packery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/packery/2.1.1/packery.pkgd.min.js"); 
            console.log("packery Loaded Successfully");
            }
            
            
            if (args[i] == "page-accelerator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/page-accelerator/0.1.1/page-accelerator.min.js"); 
            console.log("page-accelerator Loaded Successfully");
            }
            
            
            if (args[i] == "page.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/page.js/1.7.1/page.min.js"); 
            console.log("page.js Loaded Successfully");
            }
            
            
            if (args[i] == "pagedown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pagedown/1.0/Markdown.Converter.min.js"); 
            console.log("pagedown Loaded Successfully");
            }
            
            
            if (args[i] == "pagePiling.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.4/jquery.pagepiling.min.js"); 
            console.log("pagePiling.js Loaded Successfully");
            }
            
            
            if (args[i] == "pagex" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pagex/2.3.0/pagex.min.js"); 
            console.log("pagex Loaded Successfully");
            }
            
            
            if (args[i] == "paginationjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.0/pagination.min.js"); 
            console.log("paginationjs Loaded Successfully");
            }
            
            
            if (args[i] == "paho-mqtt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.2/mqttws31.min.js"); 
            console.log("paho-mqtt Loaded Successfully");
            }
            
            
            if (args[i] == "pako" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pako/1.0.6/pako.min.js"); 
            console.log("pako Loaded Successfully");
            }
            
            
            if (args[i] == "pangu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pangu/3.3.0/pangu.min.js"); 
            console.log("pangu Loaded Successfully");
            }
            
            
            if (args[i] == "pannellum" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pannellum/2.3.2/pannellum.js"); 
            console.log("pannellum Loaded Successfully");
            }
            
            
            if (args[i] == "PapaParse" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.3.6/papaparse.min.js"); 
            console.log("PapaParse Loaded Successfully");
            }
            
            
            if (args[i] == "paper.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js"); 
            console.log("paper.js Loaded Successfully");
            }
            
            
            if (args[i] == "parallax.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js"); 
            console.log("parallax.js Loaded Successfully");
            }
            
            
            if (args[i] == "parallax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"); 
            console.log("parallax Loaded Successfully");
            }
            
            
            if (args[i] == "parallaxify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/parallaxify/0.0.2/jquery.parallaxify.min.js"); 
            console.log("parallaxify Loaded Successfully");
            }
            
            
            if (args[i] == "parcoords" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/parcoords/0.7.0/d3.parcoords.min.js"); 
            console.log("parcoords Loaded Successfully");
            }
            
            
            if (args[i] == "parse" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/parse/1.11.0/parse.min.js"); 
            console.log("parse Loaded Successfully");
            }
            
            
            if (args[i] == "parsley.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.8.0/parsley.min.js"); 
            console.log("parsley.js Loaded Successfully");
            }
            
            
            if (args[i] == "particle-api-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/particle-api-js/7.0.1/particle.min.js"); 
            console.log("particle-api-js Loaded Successfully");
            }
            
            
            if (args[i] == "particles.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"); 
            console.log("particles.js Loaded Successfully");
            }
            
            
            if (args[i] == "particlesjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.1.0/particles.min.js"); 
            console.log("particlesjs Loaded Successfully");
            }
            
            
            if (args[i] == "paste.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/paste.js/0.0.21/paste.min.js"); 
            console.log("paste.js Loaded Successfully");
            }
            
            
            if (args[i] == "path.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/path.js/0.8.4/path.min.js"); 
            console.log("path.js Loaded Successfully");
            }
            
            
            if (args[i] == "patternfly" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.32.1/js/patternfly.min.js"); 
            console.log("patternfly Loaded Successfully");
            }
            
            
            if (args[i] == "paver" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/paver/1.3.3/js/jquery.paver.min.js"); 
            console.log("paver Loaded Successfully");
            }
            
            
            if (args[i] == "paypaljsbuttons" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/paypaljsbuttons/2.0.1/paypal-button.min.js"); 
            console.log("paypaljsbuttons Loaded Successfully");
            }
            
            
            if (args[i] == "pdf.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.236/pdf.min.js"); 
            console.log("pdf.js Loaded Successfully");
            }
            
            
            if (args[i] == "pdfmake" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.35/pdfmake.min.js"); 
            console.log("pdfmake Loaded Successfully");
            }
            
            
            if (args[i] == "pdfobject" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.0.201604172/pdfobject.min.js"); 
            console.log("pdfobject Loaded Successfully");
            }
            
            
            if (args[i] == "peaks.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/peaks.js/0.9.5/peaks.min.js"); 
            console.log("peaks.js Loaded Successfully");
            }
            
            
            if (args[i] == "peerjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/peerjs/0.3.14/peer.min.js"); 
            console.log("peerjs Loaded Successfully");
            }
            
            
            if (args[i] == "pegasus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pegasus/0.3.5/pegasus.min.js"); 
            console.log("pegasus Loaded Successfully");
            }
            
            
            if (args[i] == "pegjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pegjs/0.9.0/peg.min.js"); 
            console.log("pegjs Loaded Successfully");
            }
            
            
            if (args[i] == "peity" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/peity/3.2.1/jquery.peity.min.js"); 
            console.log("peity Loaded Successfully");
            }
            
            
            if (args[i] == "pell" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pell/0.7.0/pell.min.js"); 
            console.log("pell Loaded Successfully");
            }
            
            
            if (args[i] == "peppermint" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/peppermint/1.4.0/peppermint.min.js"); 
            console.log("peppermint Loaded Successfully");
            }
            
            
            if (args[i] == "perfbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/perfbar/0.2.1/perfbar.min.js"); 
            console.log("perfbar Loaded Successfully");
            }
            
            
            if (args[i] == "perliedman-leaflet-control-geocoder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/perliedman-leaflet-control-geocoder/1.5.8/Control.Geocoder.min.js"); 
            console.log("perliedman-leaflet-control-geocoder Loaded Successfully");
            }
            
            
            if (args[i] == "persian.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/persian.js/0.3.0/persian.min.js"); 
            console.log("persian.js Loaded Successfully");
            }
            
            
            if (args[i] == "PgwSlider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/PgwSlider/2.3.1/pgwslider.min.js"); 
            console.log("PgwSlider Loaded Successfully");
            }
            
            
            if (args[i] == "phaser-ce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/phaser-ce/2.9.4/phaser.min.js"); 
            console.log("phaser-ce Loaded Successfully");
            }
            
            
            if (args[i] == "phaser" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.min.js"); 
            console.log("phaser Loaded Successfully");
            }
            
            
            if (args[i] == "phery.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/phery.js/2.7.4/phery.min.js"); 
            console.log("phery.js Loaded Successfully");
            }
            
            
            if (args[i] == "PhononJs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/PhononJs/1.4.8/js/phonon-core.min.js"); 
            console.log("PhononJs Loaded Successfully");
            }
            
            
            if (args[i] == "photo-editor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/photo-editor/1.0.1/js/main.js"); 
            console.log("photo-editor Loaded Successfully");
            }
            
            
            if (args[i] == "photobox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/photobox/1.9.9/photobox/jquery.photobox.min.js"); 
            console.log("photobox Loaded Successfully");
            }
            
            
            if (args[i] == "photoset-grid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/photoset-grid/1.0.1/jquery.photoset-grid.min.js"); 
            console.log("photoset-grid Loaded Successfully");
            }
            
            
            if (args[i] == "photoswipe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.js"); 
            console.log("photoswipe Loaded Successfully");
            }
            
            
            if (args[i] == "PhysicsJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/PhysicsJS/0.7.0/physicsjs.min.js"); 
            console.log("PhysicsJS Loaded Successfully");
            }
            
            
            if (args[i] == "pica" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pica/4.0.1/pica.min.js"); 
            console.log("pica Loaded Successfully");
            }
            
            
            if (args[i] == "pickadate.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/picker.js"); 
            console.log("pickadate.js Loaded Successfully");
            }
            
            
            if (args[i] == "pickout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pickout/2.0.1/pickout.min.js"); 
            console.log("pickout Loaded Successfully");
            }
            
            
            if (args[i] == "picomodal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/picomodal/3.0.0/picoModal.min.js"); 
            console.log("picomodal Loaded Successfully");
            }
            
            
            if (args[i] == "picturefill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js"); 
            console.log("picturefill Loaded Successfully");
            }
            
            
            if (args[i] == "pie-chart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pie-chart/1.0.0/pie-chart.min.js"); 
            console.log("pie-chart Loaded Successfully");
            }
            
            
            if (args[i] == "piecon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/piecon/0.5.0/piecon.min.js"); 
            console.log("piecon Loaded Successfully");
            }
            
            
            if (args[i] == "PikaChoose" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/PikaChoose/4.5.0/jquery.pikachoose.js"); 
            console.log("PikaChoose Loaded Successfully");
            }
            
            
            if (args[i] == "pikaday" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/pikaday.min.js"); 
            console.log("pikaday Loaded Successfully");
            }
            
            
            if (args[i] == "pileup" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pileup/0.6.8/pileup.min.js"); 
            console.log("pileup Loaded Successfully");
            }
            
            
            if (args[i] == "pipes-core" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pipes-core/0.8.4/pipes.core.min.js"); 
            console.log("pipes-core Loaded Successfully");
            }
            
            
            if (args[i] == "pivottable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pivottable/2.18.0/pivot.min.js"); 
            console.log("pivottable Loaded Successfully");
            }
            
            
            if (args[i] == "piwik" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/piwik/3.2.1/piwik.js"); 
            console.log("piwik Loaded Successfully");
            }
            
            
            if (args[i] == "pixi-filters" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pixi-filters/1.0.8/filters.min.js"); 
            console.log("pixi-filters Loaded Successfully");
            }
            
            
            if (args[i] == "pixi.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.6.2/pixi.min.js"); 
            console.log("pixi.js Loaded Successfully");
            }
            
            
            if (args[i] == "pizza" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pizza/0.2.1/js/pizza.min.js"); 
            console.log("pizza Loaded Successfully");
            }
            
            
            if (args[i] == "pizzicato" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pizzicato/0.6.2/Pizzicato.min.js"); 
            console.log("pizzicato Loaded Successfully");
            }
            
            
            if (args[i] == "Pjax-Standalone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Pjax-Standalone/0.6.0/pjax-standalone.min.js"); 
            console.log("Pjax-Standalone Loaded Successfully");
            }
            
            
            if (args[i] == "PKI.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/PKI.js/1.2.1/x509_simpl.min.js"); 
            console.log("PKI.js Loaded Successfully");
            }
            
            
            if (args[i] == "placeholder-shiv" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/placeholder-shiv/0.2/placeholder-shiv.min.js"); 
            console.log("placeholder-shiv Loaded Successfully");
            }
            
            
            if (args[i] == "placeholder.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/placeholder.js/3.1.0/placeholder.min.js"); 
            console.log("placeholder.js Loaded Successfully");
            }
            
            
            if (args[i] == "placeholders" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/placeholders/4.0.1/placeholders.min.js"); 
            console.log("placeholders Loaded Successfully");
            }
            
            
            if (args[i] == "places.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/places.js/1.4.18/places.min.js"); 
            console.log("places.js Loaded Successfully");
            }
            
            
            if (args[i] == "planck-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/planck-js/0.1.37/planck.min.js"); 
            console.log("planck-js Loaded Successfully");
            }
            
            
            if (args[i] == "planout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/planout/4.0.0/planout.min.js"); 
            console.log("planout Loaded Successfully");
            }
            
            
            if (args[i] == "plastiq" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/plastiq/1.14.0/plastiq.min.js"); 
            console.log("plastiq Loaded Successfully");
            }
            
            
            if (args[i] == "plates" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/plates/0.4.11/plates.min.js"); 
            console.log("plates Loaded Successfully");
            }
            
            
            if (args[i] == "platform" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.4/platform.min.js"); 
            console.log("platform Loaded Successfully");
            }
            
            
            if (args[i] == "playlyfe-js-sdk" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/playlyfe-js-sdk/1.0.1/playlyfe-js-sdk.min.js"); 
            console.log("playlyfe-js-sdk Loaded Successfully");
            }
            
            
            if (args[i] == "playlyfe-odysseus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/playlyfe-odysseus/0.5.6/odysseus.min.js"); 
            console.log("playlyfe-odysseus Loaded Successfully");
            }
            
            
            if (args[i] == "please-wait" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/please-wait/0.0.5/please-wait.min.js"); 
            console.log("please-wait Loaded Successfully");
            }
            
            
            if (args[i] == "pleasejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pleasejs/0.4.2/Please.min.js"); 
            console.log("pleasejs Loaded Successfully");
            }
            
            
            if (args[i] == "plotly.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/plotly.js/1.31.2/plotly.min.js"); 
            console.log("plotly.js Loaded Successfully");
            }
            
            
            if (args[i] == "plottable.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/plottable.js/3.7.0/plottable.min.js"); 
            console.log("plottable.js Loaded Successfully");
            }
            
            
            if (args[i] == "plupload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/plupload/3.1.1/plupload.min.js"); 
            console.log("plupload Loaded Successfully");
            }
            
            
            if (args[i] == "pluralize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pluralize/7.0.0/pluralize.min.js"); 
            console.log("pluralize Loaded Successfully");
            }
            
            
            if (args[i] == "plyr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/plyr/2.0.18/plyr.js"); 
            console.log("plyr Loaded Successfully");
            }
            
            
            if (args[i] == "pnotify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.js"); 
            console.log("pnotify Loaded Successfully");
            }
            
            
            if (args[i] == "politespace" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/politespace/1.0.2/politespace.min.js"); 
            console.log("politespace Loaded Successfully");
            }
            
            
            if (args[i] == "polljs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/polljs/0.3.0/poll.min.js"); 
            console.log("polljs Loaded Successfully");
            }
            
            
            if (args[i] == "polyglot.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/polyglot.js/2.2.2/polyglot.min.js"); 
            console.log("polyglot.js Loaded Successfully");
            }
            
            
            if (args[i] == "polyglot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/polyglot/2.2.0/js/jquery.polyglot.language.switcher.min.js"); 
            console.log("polyglot Loaded Successfully");
            }
            
            
            if (args[i] == "polymaps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/polymaps/2.5.1/polymaps.min.js"); 
            console.log("polymaps Loaded Successfully");
            }
            
            
            if (args[i] == "polymer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/polymer/0.5.6/polymer.min.js"); 
            console.log("polymer Loaded Successfully");
            }
            
            
            if (args[i] == "polythene" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/polythene/0.3.0/polythene-standalone.js"); 
            console.log("polythene Loaded Successfully");
            }
            
            
            if (args[i] == "popmotion" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/popmotion/4.3.4/popmotion.global.min.js"); 
            console.log("popmotion Loaded Successfully");
            }
            
            
            if (args[i] == "popper.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/popper.min.js"); 
            console.log("popper.js Loaded Successfully");
            }
            
            
            if (args[i] == "portal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/portal/1.1.1/portal.min.js"); 
            console.log("portal Loaded Successfully");
            }
            
            
            if (args[i] == "porthole" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/porthole/1.0.0/porthole.min.js"); 
            console.log("porthole Loaded Successfully");
            }
            
            
            if (args[i] == "poshytip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/poshytip/1.2/jquery.poshytip.min.js"); 
            console.log("poshytip Loaded Successfully");
            }
            
            
            if (args[i] == "postal.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/postal.js/2.0.5/postal.min.js"); 
            console.log("postal.js Loaded Successfully");
            }
            
            
            if (args[i] == "postgrest-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/postgrest-client/1.1.2/postgrest-client.min.js"); 
            console.log("postgrest-client Loaded Successfully");
            }
            
            
            if (args[i] == "postscribe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.8/postscribe.min.js"); 
            console.log("postscribe Loaded Successfully");
            }
            
            
            if (args[i] == "pouchdb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pouchdb/6.4.1/pouchdb.min.js"); 
            console.log("pouchdb Loaded Successfully");
            }
            
            
            if (args[i] == "pqGrid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pqGrid/2.3.0/pqgrid.min.js"); 
            console.log("pqGrid Loaded Successfully");
            }
            
            
            if (args[i] == "preact-compat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/preact-compat/3.17.0/preact-compat.min.js"); 
            console.log("preact-compat Loaded Successfully");
            }
            
            
            if (args[i] == "preact" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/preact/8.2.7/preact.min.js"); 
            console.log("preact Loaded Successfully");
            }
            
            
            if (args[i] == "preconditions" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/preconditions/5.3.0/preconditions.min.js"); 
            console.log("preconditions Loaded Successfully");
            }
            
            
            if (args[i] == "prefixfree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"); 
            console.log("prefixfree Loaded Successfully");
            }
            
            
            if (args[i] == "PreloadJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/PreloadJS/1.0.1/preloadjs.min.js"); 
            console.log("PreloadJS Loaded Successfully");
            }
            
            
            if (args[i] == "prelodr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prelodr/2.1.1/prelodr.min.js"); 
            console.log("prelodr Loaded Successfully");
            }
            
            
            if (args[i] == "prettify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js"); 
            console.log("prettify Loaded Successfully");
            }
            
            
            if (args[i] == "prettyCheckable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prettyCheckable/2.1.2/prettyCheckable.min.js"); 
            console.log("prettyCheckable Loaded Successfully");
            }
            
            
            if (args[i] == "prettycron" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prettycron/0.11.0/prettycron.min.js"); 
            console.log("prettycron Loaded Successfully");
            }
            
            
            if (args[i] == "prettydate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prettydate/0.1.0/prettydate.min.js"); 
            console.log("prettydate Loaded Successfully");
            }
            
            
            if (args[i] == "prettydiff" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prettydiff/2.2.8/prettydiff.min.js"); 
            console.log("prettydiff Loaded Successfully");
            }
            
            
            if (args[i] == "prettyPhoto" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prettyPhoto/3.1.6/js/jquery.prettyPhoto.min.js"); 
            console.log("prettyPhoto Loaded Successfully");
            }
            
            
            if (args[i] == "primeui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/primeui/4.1.15/primeui.min.js"); 
            console.log("primeui Loaded Successfully");
            }
            
            
            if (args[i] == "primish" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/primish/0.3.9/primish-min.js"); 
            console.log("primish Loaded Successfully");
            }
            
            
            if (args[i] == "printThis" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/printThis/1.12.1/printThis.min.js"); 
            console.log("printThis Loaded Successfully");
            }
            
            
            if (args[i] == "prism" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/prism.min.js"); 
            console.log("prism Loaded Successfully");
            }
            
            
            if (args[i] == "probtn" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/probtn/1.0.1/includepb.min.js"); 
            console.log("probtn Loaded Successfully");
            }
            
            
            if (args[i] == "processing.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js"); 
            console.log("processing.js Loaded Successfully");
            }
            
            
            if (args[i] == "progress.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/progress.js/0.1.0/progress.min.js"); 
            console.log("progress.js Loaded Successfully");
            }
            
            
            if (args[i] == "progressbar.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.0.1/progressbar.min.js"); 
            console.log("progressbar.js Loaded Successfully");
            }
            
            
            if (args[i] == "progressively" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/progressively/1.2.5/progressively.min.js"); 
            console.log("progressively Loaded Successfully");
            }
            
            
            if (args[i] == "proj4js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.4.4/proj4.js"); 
            console.log("proj4js Loaded Successfully");
            }
            
            
            if (args[i] == "proj4leaflet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/proj4leaflet/1.0.2/proj4leaflet.min.js"); 
            console.log("proj4leaflet Loaded Successfully");
            }
            
            
            if (args[i] == "Promin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Promin/1.0.1/js/jquery.promin.min.js"); 
            console.log("Promin Loaded Successfully");
            }
            
            
            if (args[i] == "promiz" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/promiz/1.0.6/promiz.min.js"); 
            console.log("promiz Loaded Successfully");
            }
            
            
            if (args[i] == "prop-types" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.min.js"); 
            console.log("prop-types Loaded Successfully");
            }
            
            
            if (args[i] == "prostyle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prostyle/1.2.0/prostyle.min.js"); 
            console.log("prostyle Loaded Successfully");
            }
            
            
            if (args[i] == "protonet-jquery.inview" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"); 
            console.log("protonet-jquery.inview Loaded Successfully");
            }
            
            
            if (args[i] == "prototype" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/prototype/1.7.3/prototype.min.js"); 
            console.log("prototype Loaded Successfully");
            }
            
            
            if (args[i] == "protovis" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/protovis/3.3.1/protovis.min.js"); 
            console.log("protovis Loaded Successfully");
            }
            
            
            if (args[i] == "psd.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/psd.js/3.2.0/psd.min.js"); 
            console.log("psd.js Loaded Successfully");
            }
            
            
            if (args[i] == "psl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/psl/1.1.21/psl.min.js"); 
            console.log("psl Loaded Successfully");
            }
            
            
            if (args[i] == "pubnub" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pubnub/3.7.7/pubnub.min.js"); 
            console.log("pubnub Loaded Successfully");
            }
            
            
            if (args[i] == "pubsub-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pubsub-js/1.5.8/pubsub.min.js"); 
            console.log("pubsub-js Loaded Successfully");
            }
            
            
            if (args[i] == "PullToRefresh" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/PullToRefresh/0.1.1/ptr.min.js"); 
            console.log("PullToRefresh Loaded Successfully");
            }
            
            
            if (args[i] == "pulltorefreshjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pulltorefreshjs/0.1.11/pulltorefresh.min.js"); 
            console.log("pulltorefreshjs Loaded Successfully");
            }
            
            
            if (args[i] == "punycode" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/punycode/1.4.1/punycode.min.js"); 
            console.log("punycode Loaded Successfully");
            }
            
            
            if (args[i] == "pure.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pure.js/2.83/pure.min.js"); 
            console.log("pure.js Loaded Successfully");
            }
            
            
            if (args[i] == "purl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/purl/2.3.1/purl.min.js"); 
            console.log("purl Loaded Successfully");
            }
            
            
            if (args[i] == "push.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/push.js/1.0.5/push.min.js"); 
            console.log("push.js Loaded Successfully");
            }
            
            
            if (args[i] == "pusher-angular" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pusher-angular/1.0.0/pusher-angular.min.js"); 
            console.log("pusher-angular Loaded Successfully");
            }
            
            
            if (args[i] == "pusher" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pusher/4.2.1/pusher.min.js"); 
            console.log("pusher Loaded Successfully");
            }
            
            
            if (args[i] == "pushy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pushy/1.1.2/js/pushy.min.js"); 
            console.log("pushy Loaded Successfully");
            }
            
            
            if (args[i] == "pwnjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pwnjs/1.0.0/pwn.min.js"); 
            console.log("pwnjs Loaded Successfully");
            }
            
            
            if (args[i] == "pwstrength-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pwstrength-bootstrap/2.1.1/pwstrength-bootstrap.min.js"); 
            console.log("pwstrength-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "pym" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/pym/1.3.1/pym.v1.min.js"); 
            console.log("pym Loaded Successfully");
            }
            
            
            if (args[i] == "q.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/q.js/2.0.3/q.min.js"); 
            console.log("q.js Loaded Successfully");
            }
            
            
            if (args[i] == "qartjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qartjs/1.1.2/qart.min.js"); 
            console.log("qartjs Loaded Successfully");
            }
            
            
            if (args[i] == "qoopido.demand" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qoopido.demand/4.2.4/demand.js"); 
            console.log("qoopido.demand Loaded Successfully");
            }
            
            
            if (args[i] == "qoopido.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qoopido.js/3.7.4/base.js"); 
            console.log("qoopido.js Loaded Successfully");
            }
            
            
            if (args[i] == "qoopido.nucleus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qoopido.nucleus/3.0.5/base.js"); 
            console.log("qoopido.nucleus Loaded Successfully");
            }
            
            
            if (args[i] == "qooxdoo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qooxdoo/5.0/q.min.js"); 
            console.log("qooxdoo Loaded Successfully");
            }
            
            
            if (args[i] == "qrcode-generator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.3.1/qrcode.min.js"); 
            console.log("qrcode-generator Loaded Successfully");
            }
            
            
            if (args[i] == "qrious" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"); 
            console.log("qrious Loaded Successfully");
            }
            
            
            if (args[i] == "qs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qs/6.5.1/qs.min.js"); 
            console.log("qs Loaded Successfully");
            }
            
            
            if (args[i] == "qtip2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qtip2/3.0.3/jquery.qtip.min.js"); 
            console.log("qtip2 Loaded Successfully");
            }
            
            
            if (args[i] == "quagga" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js"); 
            console.log("quagga Loaded Successfully");
            }
            
            
            if (args[i] == "query-result" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/query-result/0.1.3/query-result.js"); 
            console.log("query-result Loaded Successfully");
            }
            
            
            if (args[i] == "queue-async" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js"); 
            console.log("queue-async Loaded Successfully");
            }
            
            
            if (args[i] == "quickblox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/quickblox/2.7.0/quickblox.min.js"); 
            console.log("quickblox Loaded Successfully");
            }
            
            
            if (args[i] == "quicksound.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/quicksound.js/0.5.2/quicksound.min.js"); 
            console.log("quicksound.js Loaded Successfully");
            }
            
            
            if (args[i] == "quill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.4/quill.min.js"); 
            console.log("quill Loaded Successfully");
            }
            
            
            if (args[i] == "quixote" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/quixote/0.14.0/quixote.min.js"); 
            console.log("quixote Loaded Successfully");
            }
            
            
            if (args[i] == "qunit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qunit/2.4.1/qunit.min.js"); 
            console.log("qunit Loaded Successfully");
            }
            
            
            if (args[i] == "quo.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/quo.js/2.3.6/quo.min.js"); 
            console.log("quo.js Loaded Successfully");
            }
            
            
            if (args[i] == "qwerty-hancock" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qwerty-hancock/0.5.1/qwerty-hancock.min.js"); 
            console.log("qwerty-hancock Loaded Successfully");
            }
            
            
            if (args[i] == "qwery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qwery/4.0.0/qwery.min.js"); 
            console.log("qwery Loaded Successfully");
            }
            
            
            if (args[i] == "qwest" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/qwest/4.5.0/qwest.min.js"); 
            console.log("qwest Loaded Successfully");
            }
            
            
            if (args[i] == "r2d3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/r2d3/0.2.0/r2d3.min.js"); 
            console.log("r2d3 Loaded Successfully");
            }
            
            
            if (args[i] == "ractive-require" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ractive-require/0.6.12/ractive-require.min.js"); 
            console.log("ractive-require Loaded Successfully");
            }
            
            
            if (args[i] == "ractive.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ractive.js/0.3.7/ractive.min.js"); 
            console.log("ractive.js Loaded Successfully");
            }
            
            
            if (args[i] == "ractive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ractive/1.0.0-build-99/ractive.min.js"); 
            console.log("ractive Loaded Successfully");
            }
            
            
            if (args[i] == "radialIndicator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/radialIndicator/1.3.1/radialIndicator.min.js"); 
            console.log("radialIndicator Loaded Successfully");
            }
            
            
            if (args[i] == "Radian" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Radian/0.1.3/radian.min.js"); 
            console.log("Radian Loaded Successfully");
            }
            
            
            if (args[i] == "radio" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/radio/0.2.0/radio.min.js"); 
            console.log("radio Loaded Successfully");
            }
            
            
            if (args[i] == "radium" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/radium/0.19.6/radium.min.js"); 
            console.log("radium Loaded Successfully");
            }
            
            
            if (args[i] == "rainbow" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/js/rainbow.min.js"); 
            console.log("rainbow Loaded Successfully");
            }
            
            
            if (args[i] == "rainyday.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rainyday.js/0.1.2/rainyday.min.js"); 
            console.log("rainyday.js Loaded Successfully");
            }
            
            
            if (args[i] == "rambda" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rambda/1.0.6/webVersion.js"); 
            console.log("rambda Loaded Successfully");
            }
            
            
            if (args[i] == "ramda" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js"); 
            console.log("ramda Loaded Successfully");
            }
            
            
            if (args[i] == "ramjet.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ramjet.js/0.5.0/ramjet.umd.min.js"); 
            console.log("ramjet.js Loaded Successfully");
            }
            
            
            if (args[i] == "random-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/random-js/1.0.8/random.min.js"); 
            console.log("random-js Loaded Successfully");
            }
            
            
            if (args[i] == "randomcolor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/randomcolor/0.5.2/randomColor.min.js"); 
            console.log("randomcolor Loaded Successfully");
            }
            
            
            if (args[i] == "range.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/range.js/1.1.0/range.min.js"); 
            console.log("range.js Loaded Successfully");
            }
            
            
            if (args[i] == "rangy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rangy/1.3.0/rangy-core.min.js"); 
            console.log("rangy Loaded Successfully");
            }
            
            
            if (args[i] == "rantjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rantjs/1.0.6/rant.min.js"); 
            console.log("rantjs Loaded Successfully");
            }
            
            
            if (args[i] == "raphael" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js"); 
            console.log("raphael Loaded Successfully");
            }
            
            
            if (args[i] == "rapidoid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rapidoid/5.4.1/rapidoid.min.js"); 
            console.log("rapidoid Loaded Successfully");
            }
            
            
            if (args[i] == "rasterizehtml" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rasterizehtml/1.2.4/rasterizeHTML.min.js"); 
            console.log("rasterizehtml Loaded Successfully");
            }
            
            
            if (args[i] == "ratchet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/js/ratchet.min.js"); 
            console.log("ratchet Loaded Successfully");
            }
            
            
            if (args[i] == "rateYo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js"); 
            console.log("rateYo Loaded Successfully");
            }
            
            
            if (args[i] == "raty" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/raty/2.8.0/jquery.raty.min.js"); 
            console.log("raty Loaded Successfully");
            }
            
            
            if (args[i] == "raven.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/raven.js/3.21.0/raven.min.js"); 
            console.log("raven.js Loaded Successfully");
            }
            
            
            if (args[i] == "re-tree" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/re-tree/0.0.2/re-tree.min.js"); 
            console.log("re-tree Loaded Successfully");
            }
            
            
            if (args[i] == "react-ace" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-ace/5.8.0/react-ace.min.js"); 
            console.log("react-ace Loaded Successfully");
            }
            
            
            if (args[i] == "react-autocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-autocomplete/1.7.2/react-autocomplete.min.js"); 
            console.log("react-autocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "react-autosuggest" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-autosuggest/9.3.2/autosuggest.min.js"); 
            console.log("react-autosuggest Loaded Successfully");
            }
            
            
            if (args[i] == "react-block-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-block-ui/1.1.1/reactblockui.min.js"); 
            console.log("react-block-ui Loaded Successfully");
            }
            
            
            if (args[i] == "react-bootstrap-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap-select/0.14.0/js/bootstrap-select.min.js"); 
            console.log("react-bootstrap-select Loaded Successfully");
            }
            
            
            if (args[i] == "react-bootstrap-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap-table/4.3.1/react-bootstrap-table.min.js"); 
            console.log("react-bootstrap-table Loaded Successfully");
            }
            
            
            if (args[i] == "react-bootstrap-typeahead" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap-typeahead/2.0.2/react-bootstrap-typeahead.min.js"); 
            console.log("react-bootstrap-typeahead Loaded Successfully");
            }
            
            
            if (args[i] == "react-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.31.5/react-bootstrap.min.js"); 
            console.log("react-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "react-chartjs-2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-chartjs-2/2.6.4/react-chartjs-2.min.js"); 
            console.log("react-chartjs-2 Loaded Successfully");
            }
            
            
            if (args[i] == "react-chartjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-chartjs/0.8.0/react-chartjs.min.js"); 
            console.log("react-chartjs Loaded Successfully");
            }
            
            
            if (args[i] == "react-contextmenu" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-contextmenu/2.9.2/react-contextmenu.js"); 
            console.log("react-contextmenu Loaded Successfully");
            }
            
            
            if (args[i] == "react-cookie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-cookie/0.4.9/react-cookie.min.js"); 
            console.log("react-cookie Loaded Successfully");
            }
            
            
            if (args[i] == "react-data-grid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-data-grid/2.0.78/react-data-grid.min.js"); 
            console.log("react-data-grid Loaded Successfully");
            }
            
            
            if (args[i] == "react-date-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-date-picker/5.3.28/react-date-picker.min.js"); 
            console.log("react-date-picker Loaded Successfully");
            }
            
            
            if (args[i] == "react-datepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/1.0.0/react-datepicker.min.js"); 
            console.log("react-datepicker Loaded Successfully");
            }
            
            
            if (args[i] == "react-datetime" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-datetime/2.11.1/react-datetime.min.js"); 
            console.log("react-datetime Loaded Successfully");
            }
            
            
            if (args[i] == "react-disqus-thread" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-disqus-thread/0.4.0/react-disqus-thread.min.js"); 
            console.log("react-disqus-thread Loaded Successfully");
            }
            
            
            if (args[i] == "react-dom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js"); 
            console.log("react-dom Loaded Successfully");
            }
            
            
            if (args[i] == "react-faux-dom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-faux-dom/4.1.0/ReactFauxDOM.min.js"); 
            console.log("react-faux-dom Loaded Successfully");
            }
            
            
            if (args[i] == "react-flip-move" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-flip-move/2.10.0/react-flip-move.min.js"); 
            console.log("react-flip-move Loaded Successfully");
            }
            
            
            if (args[i] == "react-foundation-apps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-foundation-apps/0.6.1/react-foundation-apps.min.js"); 
            console.log("react-foundation-apps Loaded Successfully");
            }
            
            
            if (args[i] == "react-grid-layout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-grid-layout/0.16.2/react-grid-layout.min.js"); 
            console.log("react-grid-layout Loaded Successfully");
            }
            
            
            if (args[i] == "react-highcharts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-highcharts/15.0.0/ReactHighcharts.js"); 
            console.log("react-highcharts Loaded Successfully");
            }
            
            
            if (args[i] == "react-inlinesvg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-inlinesvg/0.7.4/react-inlinesvg.min.js"); 
            console.log("react-inlinesvg Loaded Successfully");
            }
            
            
            if (args[i] == "react-instantsearch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-instantsearch/4.3.0/Core.min.js"); 
            console.log("react-instantsearch Loaded Successfully");
            }
            
            
            if (args[i] == "react-intl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-intl/1.2.2/react-intl.min.js"); 
            console.log("react-intl Loaded Successfully");
            }
            
            
            if (args[i] == "react-ios-switch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-ios-switch/0.1.19/bundle.js"); 
            console.log("react-ios-switch Loaded Successfully");
            }
            
            
            if (args[i] == "react-leaflet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-leaflet/1.7.8/react-leaflet.min.js"); 
            console.log("react-leaflet Loaded Successfully");
            }
            
            
            if (args[i] == "react-localstorage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-localstorage/0.3.1/react-localstorage.min.js"); 
            console.log("react-localstorage Loaded Successfully");
            }
            
            
            if (args[i] == "react-markdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-markdown/3.1.3/react-markdown.js"); 
            console.log("react-markdown Loaded Successfully");
            }
            
            
            if (args[i] == "react-modal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.1.10/react-modal.min.js"); 
            console.log("react-modal Loaded Successfully");
            }
            
            
            if (args[i] == "react-motion-ui-pack" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-motion-ui-pack/0.10.3/react-motion-ui-pack.min.js"); 
            console.log("react-motion-ui-pack Loaded Successfully");
            }
            
            
            if (args[i] == "react-motion" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-motion/0.0.3/Spring.min.js"); 
            console.log("react-motion Loaded Successfully");
            }
            
            
            if (args[i] == "react-move" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-move/1.6.1/react-move.js"); 
            console.log("react-move Loaded Successfully");
            }
            
            
            if (args[i] == "react-native-elements" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-native-elements/0.17.0/bundle.js"); 
            console.log("react-native-elements Loaded Successfully");
            }
            
            
            if (args[i] == "react-nvd3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-nvd3/0.5.7/react-nvd3.min.js"); 
            console.log("react-nvd3 Loaded Successfully");
            }
            
            
            if (args[i] == "react-popper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-popper/0.7.4/react-popper.min.js"); 
            console.log("react-popper Loaded Successfully");
            }
            
            
            if (args[i] == "react-quill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-quill/0.4.1/react-quill.min.js"); 
            console.log("react-quill Loaded Successfully");
            }
            
            
            if (args[i] == "react-redux-form" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-redux-form/1.16.3/ReactReduxForm.min.js"); 
            console.log("react-redux-form Loaded Successfully");
            }
            
            
            if (args[i] == "react-redux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.6/react-redux.min.js"); 
            console.log("react-redux Loaded Successfully");
            }
            
            
            if (args[i] == "react-relay" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-relay/0.10.0/relay.min.js"); 
            console.log("react-relay Loaded Successfully");
            }
            
            
            if (args[i] == "react-router-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-router-bootstrap/0.24.4/ReactRouterBootstrap.min.js"); 
            console.log("react-router-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "react-router-dom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.2.2/react-router-dom.min.js"); 
            console.log("react-router-dom Loaded Successfully");
            }
            
            
            if (args[i] == "react-router-redux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-router-redux/4.0.8/ReactRouterRedux.min.js"); 
            console.log("react-router-redux Loaded Successfully");
            }
            
            
            if (args[i] == "react-router" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-router/4.2.0/react-router.min.js"); 
            console.log("react-router Loaded Successfully");
            }
            
            
            if (args[i] == "react-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-select/1.1.0/react-select.min.js"); 
            console.log("react-select Loaded Successfully");
            }
            
            
            if (args[i] == "react-semantify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-semantify/0.6.0/react-semantify.min.js"); 
            console.log("react-semantify Loaded Successfully");
            }
            
            
            if (args[i] == "react-slick" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-slick/0.16.0/react-slick.min.js"); 
            console.log("react-slick Loaded Successfully");
            }
            
            
            if (args[i] == "react-swipe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-swipe/5.1.1/react-swipe.min.js"); 
            console.log("react-swipe Loaded Successfully");
            }
            
            
            if (args[i] == "react-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-table/6.7.6/react-table.js"); 
            console.log("react-table Loaded Successfully");
            }
            
            
            if (args[i] == "react-textarea-autosize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-textarea-autosize/5.2.1/react-textarea-autosize.min.js"); 
            console.log("react-textarea-autosize Loaded Successfully");
            }
            
            
            if (args[i] == "react-transition-group" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-transition-group/2.2.1/react-transition-group.min.js"); 
            console.log("react-transition-group Loaded Successfully");
            }
            
            
            if (args[i] == "react-virtualized" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-virtualized/9.14.1/react-virtualized.min.js"); 
            console.log("react-virtualized Loaded Successfully");
            }
            
            
            if (args[i] == "react-widgets" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react-widgets/4.1.1/react-widgets.js"); 
            console.log("react-widgets Loaded Successfully");
            }
            
            
            if (args[i] == "react" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js"); 
            console.log("react Loaded Successfully");
            }
            
            
            if (args[i] == "reactable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reactable/0.14.1/reactable.min.js"); 
            console.log("reactable Loaded Successfully");
            }
            
            
            if (args[i] == "reacthttp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reacthttp/1.0.0/react-http.min.js"); 
            console.log("reacthttp Loaded Successfully");
            }
            
            
            if (args[i] == "reactive-coffee" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reactive-coffee/2.3.0/main.min.js"); 
            console.log("reactive-coffee Loaded Successfully");
            }
            
            
            if (args[i] == "reactive-elements" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reactive-elements/0.6.8/reactive-elements.min.js"); 
            console.log("reactive-elements Loaded Successfully");
            }
            
            
            if (args[i] == "reactstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"); 
            console.log("reactstrap Loaded Successfully");
            }
            
            
            if (args[i] == "reading-time" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reading-time/1.0.0/readingTime.min.js"); 
            console.log("reading-time Loaded Successfully");
            }
            
            
            if (args[i] == "Readmore.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Readmore.js/2.2.0/readmore.min.js"); 
            console.log("Readmore.js Loaded Successfully");
            }
            
            
            if (args[i] == "readremaining.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/readremaining.js/1.0.1/readremaining.jquery.min.js"); 
            console.log("readremaining.js Loaded Successfully");
            }
            
            
            if (args[i] == "ready.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ready.js/0.1.2/ready.min.js"); 
            console.log("ready.js Loaded Successfully");
            }
            
            
            if (args[i] == "recompose" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/recompose/0.26.0/Recompose.min.js"); 
            console.log("recompose Loaded Successfully");
            }
            
            
            if (args[i] == "reconnecting-websocket" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reconnecting-websocket/1.0.0/reconnecting-websocket.min.js"); 
            console.log("reconnecting-websocket Loaded Successfully");
            }
            
            
            if (args[i] == "recorderjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/recorderjs/0.1.0/recorder.min.js"); 
            console.log("recorderjs Loaded Successfully");
            }
            
            
            if (args[i] == "redom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redom/3.8.8/redom.min.js"); 
            console.log("redom Loaded Successfully");
            }
            
            
            if (args[i] == "reductio" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reductio/0.6.3/reductio.min.js"); 
            console.log("reductio Loaded Successfully");
            }
            
            
            if (args[i] == "redux-form-material-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux-form-material-ui/4.3.1/redux-form-material-ui.min.js"); 
            console.log("redux-form-material-ui Loaded Successfully");
            }
            
            
            if (args[i] == "redux-form" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux-form/7.2.0/redux-form.min.js"); 
            console.log("redux-form Loaded Successfully");
            }
            
            
            if (args[i] == "redux-little-router" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux-little-router/14.2.3/redux-little-router.min.js"); 
            console.log("redux-little-router Loaded Successfully");
            }
            
            
            if (args[i] == "redux-persist" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux-persist/4.10.2/redux-persist.min.js"); 
            console.log("redux-persist Loaded Successfully");
            }
            
            
            if (args[i] == "redux-promise-middleware" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux-promise-middleware/5.0.0/redux-promise-middleware.min.js"); 
            console.log("redux-promise-middleware Loaded Successfully");
            }
            
            
            if (args[i] == "redux-router" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux-router/2.1.2/redux-router.min.js"); 
            console.log("redux-router Loaded Successfully");
            }
            
            
            if (args[i] == "redux-saga" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux-saga/0.16.0/redux-saga.min.js"); 
            console.log("redux-saga Loaded Successfully");
            }
            
            
            if (args[i] == "redux-thunk" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.2.0/redux-thunk.min.js"); 
            console.log("redux-thunk Loaded Successfully");
            }
            
            
            if (args[i] == "redux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"); 
            console.log("redux Loaded Successfully");
            }
            
            
            if (args[i] == "reel.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reel.js/1.3.0/jquery.reel-min.js"); 
            console.log("reel.js Loaded Successfully");
            }
            
            
            if (args[i] == "reflect-metadata" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reflect-metadata/0.1.10/Reflect.min.js"); 
            console.log("reflect-metadata Loaded Successfully");
            }
            
            
            if (args[i] == "reflux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reflux/6.4.1/reflux.min.js"); 
            console.log("reflux Loaded Successfully");
            }
            
            
            if (args[i] == "regl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/regl/1.3.0/regl.min.js"); 
            console.log("regl Loaded Successfully");
            }
            
            
            if (args[i] == "regression" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/regression/1.4.0/regression.min.js"); 
            console.log("regression Loaded Successfully");
            }
            
            
            if (args[i] == "rellax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rellax/1.4.0/rellax.min.js"); 
            console.log("rellax Loaded Successfully");
            }
            
            
            if (args[i] == "rem" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rem/1.3.4/js/rem.min.js"); 
            console.log("rem Loaded Successfully");
            }
            
            
            if (args[i] == "remark" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/remark/0.14.0/remark.min.js"); 
            console.log("remark Loaded Successfully");
            }
            
            
            if (args[i] == "remarkable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js"); 
            console.log("remarkable Loaded Successfully");
            }
            
            
            if (args[i] == "remodal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.1/remodal.min.js"); 
            console.log("remodal Loaded Successfully");
            }
            
            
            if (args[i] == "remoteStorage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/remoteStorage/0.14.0/remotestorage.min.js"); 
            console.log("remoteStorage Loaded Successfully");
            }
            
            
            if (args[i] == "repo.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/repo.js/5c0eae0f1b/repo.min.js"); 
            console.log("repo.js Loaded Successfully");
            }
            
            
            if (args[i] == "require-cs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/require-cs/0.5.0/cs.min.js"); 
            console.log("require-cs Loaded Successfully");
            }
            
            
            if (args[i] == "require-css" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css.min.js"); 
            console.log("require-css Loaded Successfully");
            }
            
            
            if (args[i] == "require-domReady" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min.js"); 
            console.log("require-domReady Loaded Successfully");
            }
            
            
            if (args[i] == "require-i18n" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/require-i18n/2.0.4/i18n.min.js"); 
            console.log("require-i18n Loaded Successfully");
            }
            
            
            if (args[i] == "require-jquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/require-jquery/0.25.0/require-jquery.min.js"); 
            console.log("require-jquery Loaded Successfully");
            }
            
            
            if (args[i] == "require-text" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min.js"); 
            console.log("require-text Loaded Successfully");
            }
            
            
            if (args[i] == "require.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js"); 
            console.log("require.js Loaded Successfully");
            }
            
            
            if (args[i] == "requirejs-async" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/requirejs-async/0.1.1/async.js"); 
            console.log("requirejs-async Loaded Successfully");
            }
            
            
            if (args[i] == "requirejs-handlebars" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/requirejs-handlebars/0.0.2/hbars.min.js"); 
            console.log("requirejs-handlebars Loaded Successfully");
            }
            
            
            if (args[i] == "requirejs-mustache" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/requirejs-mustache/0.0.2/stache.min.js"); 
            console.log("requirejs-mustache Loaded Successfully");
            }
            
            
            if (args[i] == "requirejs-plugins" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/requirejs-plugins/1.0.3/async.min.js"); 
            console.log("requirejs-plugins Loaded Successfully");
            }
            
            
            if (args[i] == "requirejs-tpl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/requirejs-tpl/0.0.2/tpl.min.js"); 
            console.log("requirejs-tpl Loaded Successfully");
            }
            
            
            if (args[i] == "reqwest" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reqwest/2.0.5/reqwest.min.js"); 
            console.log("reqwest Loaded Successfully");
            }
            
            
            if (args[i] == "reselect" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reselect/3.0.1/reselect.min.js"); 
            console.log("reselect Loaded Successfully");
            }
            
            
            if (args[i] == "respond.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"); 
            console.log("respond.js Loaded Successfully");
            }
            
            
            if (args[i] == "response.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/response.js/0.10.0/response.min.js"); 
            console.log("response.js Loaded Successfully");
            }
            
            
            if (args[i] == "responsive-elements" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/responsive-elements/1.0.2/responsive-elements.min.js"); 
            console.log("responsive-elements Loaded Successfully");
            }
            
            
            if (args[i] == "responsive-nav.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/responsive-nav.js/1.0.39/responsive-nav.min.js"); 
            console.log("responsive-nav.js Loaded Successfully");
            }
            
            
            if (args[i] == "responsive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/responsive/1.0.5/responsive.min.js"); 
            console.log("responsive Loaded Successfully");
            }
            
            
            if (args[i] == "responsiveCarousel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/responsiveCarousel/1.2.0/responsiveCarousel.min.js"); 
            console.log("responsiveCarousel Loaded Successfully");
            }
            
            
            if (args[i] == "ResponsiveSlides.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ResponsiveSlides.js/1.55/responsiveslides.min.js"); 
            console.log("ResponsiveSlides.js Loaded Successfully");
            }
            
            
            if (args[i] == "ReStable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ReStable/0.1.2/jquery.restable.min.js"); 
            console.log("ReStable Loaded Successfully");
            }
            
            
            if (args[i] == "restangular" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/restangular/1.6.1/restangular.min.js"); 
            console.log("restangular Loaded Successfully");
            }
            
            
            if (args[i] == "restful.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/restful.js/0.9.6/restful.min.js"); 
            console.log("restful.js Loaded Successfully");
            }
            
            
            if (args[i] == "restyle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/restyle/0.7.0/restyle.js"); 
            console.log("restyle Loaded Successfully");
            }
            
            
            if (args[i] == "resumable.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/resumable.js/1.1.0/resumable.min.js"); 
            console.log("resumable.js Loaded Successfully");
            }
            
            
            if (args[i] == "retina.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/retina.js/2.1.3/retina.min.js"); 
            console.log("retina.js Loaded Successfully");
            }
            
            
            if (args[i] == "reveal.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/js/reveal.min.js"); 
            console.log("reveal.js Loaded Successfully");
            }
            
            
            if (args[i] == "rickshaw" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rickshaw/1.6.3/rickshaw.min.js"); 
            console.log("rickshaw Loaded Successfully");
            }
            
            
            if (args[i] == "riloadr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/riloadr/1.5.3/riloadr.min.js"); 
            console.log("riloadr Loaded Successfully");
            }
            
            
            if (args[i] == "rimg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rimg/2.1.0/rimg.min.js"); 
            console.log("rimg Loaded Successfully");
            }
            
            
            if (args[i] == "ring.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ring.js/2.2.0/ring.min.js"); 
            console.log("ring.js Loaded Successfully");
            }
            
            
            if (args[i] == "riot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/riot/3.8.1/riot.min.js"); 
            console.log("riot Loaded Successfully");
            }
            
            
            if (args[i] == "riotux" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/riotux/2.1.1/riotux.min.js"); 
            console.log("riotux Loaded Successfully");
            }
            
            
            if (args[i] == "Ripple.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Ripple.js/1.2.1/ripple.min.js"); 
            console.log("Ripple.js Loaded Successfully");
            }
            
            
            if (args[i] == "rita" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rita/1.2.12/rita.min.js"); 
            console.log("rita Loaded Successfully");
            }
            
            
            if (args[i] == "rivescript" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rivescript/1.18.0/rivescript.min.js"); 
            console.log("rivescript Loaded Successfully");
            }
            
            
            if (args[i] == "rivets" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rivets/0.9.6/rivets.min.js"); 
            console.log("rivets Loaded Successfully");
            }
            
            
            if (args[i] == "rlite-router" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rlite-router/2.0.3/rlite.min.js"); 
            console.log("rlite-router Loaded Successfully");
            }
            
            
            if (args[i] == "roll-call" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/roll-call/0.7.1/rollcall.min.js"); 
            console.log("roll-call Loaded Successfully");
            }
            
            
            if (args[i] == "roll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/roll/0.1.2/roll.min.js"); 
            console.log("roll Loaded Successfully");
            }
            
            
            if (args[i] == "rollbar.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.3.3/rollbar.min.js"); 
            console.log("rollbar.js Loaded Successfully");
            }
            
            
            if (args[i] == "rome" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rome/2.1.22/rome.standalone.min.js"); 
            console.log("rome Loaded Successfully");
            }
            
            
            if (args[i] == "roslibjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/roslibjs/0.19.0/roslib.min.js"); 
            console.log("roslibjs Loaded Successfully");
            }
            
            
            if (args[i] == "rot.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rot.js/0.6.0/rot.min.js"); 
            console.log("rot.js Loaded Successfully");
            }
            
            
            if (args[i] == "roundabout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/roundabout/2.4.2/jquery.roundabout.min.js"); 
            console.log("roundabout Loaded Successfully");
            }
            
            
            if (args[i] == "roundSlider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/roundSlider/1.3/roundslider.min.js"); 
            console.log("roundSlider Loaded Successfully");
            }
            
            
            if (args[i] == "rsvp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rsvp/4.7.0/rsvp.min.js"); 
            console.log("rsvp Loaded Successfully");
            }
            
            
            if (args[i] == "rusha" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rusha/0.8.7/rusha.min.js"); 
            console.log("rusha Loaded Successfully");
            }
            
            
            if (args[i] == "rx-angular" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rx-angular/1.1.3/rx.angular.min.js"); 
            console.log("rx-angular Loaded Successfully");
            }
            
            
            if (args[i] == "rxjs-dom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rxjs-dom/7.0.3/rx.dom.min.js"); 
            console.log("rxjs-dom Loaded Successfully");
            }
            
            
            if (args[i] == "rxjs-jquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rxjs-jquery/1.1.6/rx.jquery.min.js"); 
            console.log("rxjs-jquery Loaded Successfully");
            }
            
            
            if (args[i] == "rxjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.5.6/Rx.min.js"); 
            console.log("rxjs Loaded Successfully");
            }
            
            
            if (args[i] == "RyanMullins-angular-hammer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/RyanMullins-angular-hammer/2.2.0/angular.hammer.min.js"); 
            console.log("RyanMullins-angular-hammer Loaded Successfully");
            }
            
            
            if (args[i] == "ryejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ryejs/0.1.3/rye.min.js"); 
            console.log("ryejs Loaded Successfully");
            }
            
            
            if (args[i] == "rythm.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.2/rythm.min.js"); 
            console.log("rythm.js Loaded Successfully");
            }
            
            
            if (args[i] == "sails.io.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sails.io.js/1.1.13/sails.io.min.js"); 
            console.log("sails.io.js Loaded Successfully");
            }
            
            
            if (args[i] == "salesforce-canvas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/salesforce-canvas/27.0/canvas-all.min.js"); 
            console.log("salesforce-canvas Loaded Successfully");
            }
            
            
            if (args[i] == "salvattore" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/salvattore/1.0.9/salvattore.min.js"); 
            console.log("salvattore Loaded Successfully");
            }
            
            
            if (args[i] == "sammy.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sammy.js/0.7.6/sammy.min.js"); 
            console.log("sammy.js Loaded Successfully");
            }
            
            
            if (args[i] == "sass.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.7/sass.min.js"); 
            console.log("sass.js Loaded Successfully");
            }
            
            
            if (args[i] == "sat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sat/0.6.0/SAT.min.js"); 
            console.log("sat Loaded Successfully");
            }
            
            
            if (args[i] == "satellite.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/satellite.js/2.0.0/satellite.min.js"); 
            console.log("satellite.js Loaded Successfully");
            }
            
            
            if (args[i] == "satellizer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/satellizer/0.14.1/satellizer.min.js"); 
            console.log("satellizer Loaded Successfully");
            }
            
            
            if (args[i] == "savvior" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/savvior/0.6.0/savvior.min.js"); 
            console.log("savvior Loaded Successfully");
            }
            
            
            if (args[i] == "sbt" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sbt/1.1.11.20151208-1200/sbt-core-dojo-amd.js"); 
            console.log("sbt Loaded Successfully");
            }
            
            
            if (args[i] == "scaleapp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scaleapp/0.4.3/scaleapp.min.js"); 
            console.log("scaleapp Loaded Successfully");
            }
            
            
            if (args[i] == "scannerdetection" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scannerdetection/1.2.0/jquery.scannerdetection.min.js"); 
            console.log("scannerdetection Loaded Successfully");
            }
            
            
            if (args[i] == "sceditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sceditor/2.1.2/jquery.sceditor.min.js"); 
            console.log("sceditor Loaded Successfully");
            }
            
            
            if (args[i] == "schedulejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/schedulejs/0.6.3/schedule.min.js"); 
            console.log("schedulejs Loaded Successfully");
            }
            
            
            if (args[i] == "scion" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scion/3.1.5/scxml.min.js"); 
            console.log("scion Loaded Successfully");
            }
            
            
            if (args[i] == "screenfull.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/screenfull.js/3.3.2/screenfull.min.js"); 
            console.log("screenfull.js Loaded Successfully");
            }
            
            
            if (args[i] == "script.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/script.js/2.5.8/script.min.js"); 
            console.log("script.js Loaded Successfully");
            }
            
            
            if (args[i] == "scriptaculous" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scriptaculous/1.9.0/scriptaculous.min.js"); 
            console.log("scriptaculous Loaded Successfully");
            }
            
            
            if (args[i] == "scroll-scope" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scroll-scope/0.1.0/scroll-scope.min.js"); 
            console.log("scroll-scope Loaded Successfully");
            }
            
            
            if (args[i] == "scrolldir" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scrolldir/1.2.18/scrolldir.min.js"); 
            console.log("scrolldir Loaded Successfully");
            }
            
            
            if (args[i] == "scrollgress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scrollgress/1.0.0/scrollgress.min.js"); 
            console.log("scrollgress Loaded Successfully");
            }
            
            
            if (args[i] == "scrollify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scrollify/1.0.19/jquery.scrollify.min.js"); 
            console.log("scrollify Loaded Successfully");
            }
            
            
            if (args[i] == "ScrollMagic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"); 
            console.log("ScrollMagic Loaded Successfully");
            }
            
            
            if (args[i] == "scrollmonitor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scrollmonitor/1.2.0/scrollMonitor.js"); 
            console.log("scrollmonitor Loaded Successfully");
            }
            
            
            if (args[i] == "scrollpoints" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scrollpoints/0.4.0/scrollpoints.min.js"); 
            console.log("scrollpoints Loaded Successfully");
            }
            
            
            if (args[i] == "scrollprogress" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scrollprogress/3.0.2/scrollProgress.min.js"); 
            console.log("scrollprogress Loaded Successfully");
            }
            
            
            if (args[i] == "scrollReveal.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.6/scrollreveal.min.js"); 
            console.log("scrollReveal.js Loaded Successfully");
            }
            
            
            if (args[i] == "ScrollToFixed" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ScrollToFixed/1.0.8/jquery-scrolltofixed-min.js"); 
            console.log("ScrollToFixed Loaded Successfully");
            }
            
            
            if (args[i] == "ScrollTrigger" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ScrollTrigger/0.3.6/ScrollTrigger.min.js"); 
            console.log("ScrollTrigger Loaded Successfully");
            }
            
            
            if (args[i] == "scrollup" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/scrollup/2.4.1/jquery.scrollUp.min.js"); 
            console.log("scrollup Loaded Successfully");
            }
            
            
            if (args[i] == "seajs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/seajs/3.0.2/sea.js"); 
            console.log("seajs Loaded Successfully");
            }
            
            
            if (args[i] == "seamless-immutable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/seamless-immutable/7.1.2/seamless-immutable.production.min.js"); 
            console.log("seamless-immutable Loaded Successfully");
            }
            
            
            if (args[i] == "seedrandom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.3/seedrandom.min.js"); 
            console.log("seedrandom Loaded Successfully");
            }
            
            
            if (args[i] == "segment-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/segment-js/1.0.8/segment.min.js"); 
            console.log("segment-js Loaded Successfully");
            }
            
            
            if (args[i] == "select-or-die" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/select-or-die/0.1.8/selectordie.min.js"); 
            console.log("select-or-die Loaded Successfully");
            }
            
            
            if (args[i] == "select2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"); 
            console.log("select2 Loaded Successfully");
            }
            
            
            if (args[i] == "Selectivity.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Selectivity.js/2.1.0/selectivity-full.min.js"); 
            console.log("Selectivity.js Loaded Successfully");
            }
            
            
            if (args[i] == "selectivizr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"); 
            console.log("selectivizr Loaded Successfully");
            }
            
            
            if (args[i] == "selectize.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/js/selectize.min.js"); 
            console.log("selectize.js Loaded Successfully");
            }
            
            
            if (args[i] == "semantic-ui-react" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui-react/0.77.1/semantic-ui-react.min.js"); 
            console.log("semantic-ui-react Loaded Successfully");
            }
            
            
            if (args[i] == "semantic-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"); 
            console.log("semantic-ui Loaded Successfully");
            }
            
            
            if (args[i] == "sentient-lang" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sentient-lang/0.0.0-alpha.42/sentient.js"); 
            console.log("sentient-lang Loaded Successfully");
            }
            
            
            if (args[i] == "set-iframe-height" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/set-iframe-height/1.3.1/set-iframe-height-parent-min.js"); 
            console.log("set-iframe-height Loaded Successfully");
            }
            
            
            if (args[i] == "setImmediate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/setImmediate/1.0.5/setImmediate.min.js"); 
            console.log("setImmediate Loaded Successfully");
            }
            
            
            if (args[i] == "sevenSeg.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sevenSeg.js/0.2.0/sevenSeg.min.js"); 
            console.log("sevenSeg.js Loaded Successfully");
            }
            
            
            if (args[i] == "shaka-player" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.3.0/shaka-player.compiled.js"); 
            console.log("shaka-player Loaded Successfully");
            }
            
            
            if (args[i] == "sharer.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sharer.js/0.3.1/sharer.min.js"); 
            console.log("sharer.js Loaded Successfully");
            }
            
            
            if (args[i] == "shariff" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shariff/1.26.2/shariff.min.js"); 
            console.log("shariff Loaded Successfully");
            }
            
            
            if (args[i] == "Sharrre" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Sharrre/2.0.1/jquery.sharrre.min.js"); 
            console.log("Sharrre Loaded Successfully");
            }
            
            
            if (args[i] == "shave" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shave/2.1.3/shave.min.js"); 
            console.log("shave Loaded Successfully");
            }
            
            
            if (args[i] == "shell.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shell.js/1.0.5/js/shell.min.js"); 
            console.log("shell.js Loaded Successfully");
            }
            
            
            if (args[i] == "shepherd" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shepherd/1.8.1/js/shepherd.min.js"); 
            console.log("shepherd Loaded Successfully");
            }
            
            
            if (args[i] == "shine.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shine.js/0.2.7/shine.min.js"); 
            console.log("shine.js Loaded Successfully");
            }
            
            
            if (args[i] == "shoestring" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shoestring/2.0.1/shoestring.min.js"); 
            console.log("shoestring Loaded Successfully");
            }
            
            
            if (args[i] == "shopify-buy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shopify-buy/0.7.1/shopify-buy.umd.min.js"); 
            console.log("shopify-buy Loaded Successfully");
            }
            
            
            if (args[i] == "shopify-cartjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shopify-cartjs/0.4.1/cart.min.js"); 
            console.log("shopify-cartjs Loaded Successfully");
            }
            
            
            if (args[i] == "should.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/should.js/13.2.0/should.min.js"); 
            console.log("should.js Loaded Successfully");
            }
            
            
            if (args[i] == "show-your-terms" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/show-your-terms/1.1.1/show-your-terms.min.js"); 
            console.log("show-your-terms Loaded Successfully");
            }
            
            
            if (args[i] == "showdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.6/showdown.min.js"); 
            console.log("showdown Loaded Successfully");
            }
            
            
            if (args[i] == "shower-core" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shower-core/2.1.0/shower.min.js"); 
            console.log("shower-core Loaded Successfully");
            }
            
            
            if (args[i] == "shred" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/shred/0.8.10/shred.min.js"); 
            console.log("shred Loaded Successfully");
            }
            
            
            if (args[i] == "Shuffle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Shuffle/5.0.3/shuffle.min.js"); 
            console.log("Shuffle Loaded Successfully");
            }
            
            
            if (args[i] == "side-comments" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/side-comments/0.0.1/side-comments.min.js"); 
            console.log("side-comments Loaded Successfully");
            }
            
            
            if (args[i] == "sidr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js"); 
            console.log("sidr Loaded Successfully");
            }
            
            
            if (args[i] == "Sidy.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Sidy.js/1.1.0/sidy.js"); 
            console.log("Sidy.js Loaded Successfully");
            }
            
            
            if (args[i] == "sifter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sifter/0.5.3/sifter.min.js"); 
            console.log("sifter Loaded Successfully");
            }
            
            
            if (args[i] == "sigma.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sigma.js/1.2.1/sigma.min.js"); 
            console.log("sigma.js Loaded Successfully");
            }
            
            
            if (args[i] == "signalr.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/signalr.js/2.2.2/jquery.signalR.min.js"); 
            console.log("signalr.js Loaded Successfully");
            }
            
            
            if (args[i] == "signature_pad" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/signature_pad/1.5.3/signature_pad.min.js"); 
            console.log("signature_pad Loaded Successfully");
            }
            
            
            if (args[i] == "signet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/signet/0.4.8/signet.min.js"); 
            console.log("signet Loaded Successfully");
            }
            
            
            if (args[i] == "simditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simditor/2.3.6/lib/simditor.min.js"); 
            console.log("simditor Loaded Successfully");
            }
            
            
            if (args[i] == "simple-gallery-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simple-gallery-js/1.0.3/simple-gallery.min.js"); 
            console.log("simple-gallery-js Loaded Successfully");
            }
            
            
            if (args[i] == "simple-jekyll-search" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.1.8/jekyll-search.min.js"); 
            console.log("simple-jekyll-search Loaded Successfully");
            }
            
            
            if (args[i] == "simple-module" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simple-module/3.0.3/simple-module.min.js"); 
            console.log("simple-module Loaded Successfully");
            }
            
            
            if (args[i] == "simple-peer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simple-peer/8.2.0/simplepeer.min.js"); 
            console.log("simple-peer Loaded Successfully");
            }
            
            
            if (args[i] == "simple-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simple-slider/1.0.0/simpleslider.min.js"); 
            console.log("simple-slider Loaded Successfully");
            }
            
            
            if (args[i] == "simple-statistics" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simple-statistics/1.0.1/simple_statistics.min.js"); 
            console.log("simple-statistics Loaded Successfully");
            }
            
            
            if (args[i] == "simple-text-rotator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simple-text-rotator/1.0.0/jquery.simple-text-rotator.min.js"); 
            console.log("simple-text-rotator Loaded Successfully");
            }
            
            
            if (args[i] == "simple-uploader" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simple-uploader/3.0.0/simple-uploader.min.js"); 
            console.log("simple-uploader Loaded Successfully");
            }
            
            
            if (args[i] == "simplebar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simplebar/2.5.1/simplebar.min.js"); 
            console.log("simplebar Loaded Successfully");
            }
            
            
            if (args[i] == "simplecartjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simplecartjs/3.0.5/simplecart.min.js"); 
            console.log("simplecartjs Loaded Successfully");
            }
            
            
            if (args[i] == "simplelightbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/1.12.0/simple-lightbox.min.js"); 
            console.log("simplelightbox Loaded Successfully");
            }
            
            
            if (args[i] == "simplemde" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simplemde/1.11.2/simplemde.min.js"); 
            console.log("simplemde Loaded Successfully");
            }
            
            
            if (args[i] == "simplemodal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simplemodal/1.4.4/jquery.simplemodal.min.js"); 
            console.log("simplemodal Loaded Successfully");
            }
            
            
            if (args[i] == "simplePagination.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simplePagination.js/1.6/jquery.simplePagination.min.js"); 
            console.log("simplePagination.js Loaded Successfully");
            }
            
            
            if (args[i] == "simplestatemanager" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simplestatemanager/2.2.5/ssm.min.js"); 
            console.log("simplestatemanager Loaded Successfully");
            }
            
            
            if (args[i] == "simplex-noise" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.3.0/simplex-noise.min.js"); 
            console.log("simplex-noise Loaded Successfully");
            }
            
            
            if (args[i] == "sinon.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sinon.js/4.1.3/sinon.min.js"); 
            console.log("sinon.js Loaded Successfully");
            }
            
            
            if (args[i] == "sir-trevor-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sir-trevor-js/0.6.6/sir-trevor.min.js"); 
            console.log("sir-trevor-js Loaded Successfully");
            }
            
            
            if (args[i] == "sisyphus.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sisyphus.js/1.1.3/sisyphus.min.js"); 
            console.log("sisyphus.js Loaded Successfully");
            }
            
            
            if (args[i] == "sizzle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sizzle/2.3.3/sizzle.min.js"); 
            console.log("sizzle Loaded Successfully");
            }
            
            
            if (args[i] == "sjcl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sjcl/1.0.7/sjcl.min.js"); 
            console.log("sjcl Loaded Successfully");
            }
            
            
            if (args[i] == "skel-layers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/skel-layers/2.2.1/skel-layers.min.js"); 
            console.log("skel-layers Loaded Successfully");
            }
            
            
            if (args[i] == "skel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/skel/3.0.1/skel.min.js"); 
            console.log("skel Loaded Successfully");
            }
            
            
            if (args[i] == "sketch.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sketch.js/1.0/sketch.min.js"); 
            console.log("sketch.js Loaded Successfully");
            }
            
            
            if (args[i] == "skrollr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"); 
            console.log("skrollr Loaded Successfully");
            }
            
            
            if (args[i] == "skycons" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/skycons/1396634940/skycons.min.js"); 
            console.log("skycons Loaded Successfully");
            }
            
            
            if (args[i] == "slabText" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slabText/2.3/jquery.slabtext.min.js"); 
            console.log("slabText Loaded Successfully");
            }
            
            
            if (args[i] == "slick-carousel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"); 
            console.log("slick-carousel Loaded Successfully");
            }
            
            
            if (args[i] == "slick-lightbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slick-lightbox/0.2.12/slick-lightbox.min.js"); 
            console.log("slick-lightbox Loaded Successfully");
            }
            
            
            if (args[i] == "slidebars" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slidebars/2.0.2/slidebars.min.js"); 
            console.log("slidebars Loaded Successfully");
            }
            
            
            if (args[i] == "slideout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.min.js"); 
            console.log("slideout Loaded Successfully");
            }
            
            
            if (args[i] == "slideReveal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slideReveal/1.1.2/jquery.slidereveal.min.js"); 
            console.log("slideReveal Loaded Successfully");
            }
            
            
            if (args[i] == "slidesjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slidesjs/3.0/jquery.slides.min.js"); 
            console.log("slidesjs Loaded Successfully");
            }
            
            
            if (args[i] == "sliiide" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sliiide/1.1.4/sliiide.min.js"); 
            console.log("sliiide Loaded Successfully");
            }
            
            
            if (args[i] == "slim-scroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slim-scroll/1.3.2/slimscroll.min.js"); 
            console.log("slim-scroll Loaded Successfully");
            }
            
            
            if (args[i] == "slim-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.6.1/slimselect.min.js"); 
            console.log("slim-select Loaded Successfully");
            }
            
            
            if (args[i] == "slim.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slim.js/3.2.1/Slim.min.js"); 
            console.log("slim.js Loaded Successfully");
            }
            
            
            if (args[i] == "slipjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slipjs/2.1.1/slip.min.js"); 
            console.log("slipjs Loaded Successfully");
            }
            
            
            if (args[i] == "slippry" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/slippry/1.4.0/slippry.min.js"); 
            console.log("slippry Loaded Successfully");
            }
            
            
            if (args[i] == "Sly" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Sly/1.6.1/sly.min.js"); 
            console.log("Sly Loaded Successfully");
            }
            
            
            if (args[i] == "smalot-bootstrap-datetimepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smalot-bootstrap-datetimepicker/2.4.4/js/bootstrap-datetimepicker.min.js"); 
            console.log("smalot-bootstrap-datetimepicker Loaded Successfully");
            }
            
            
            if (args[i] == "smart-table-scroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smart-table-scroll/0.2.0/smart-table-scroll.min.js"); 
            console.log("smart-table-scroll Loaded Successfully");
            }
            
            
            if (args[i] == "smart-underline" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smart-underline/4.2.1/js/smart-underline.min.js"); 
            console.log("smart-underline Loaded Successfully");
            }
            
            
            if (args[i] == "smartcrop" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smartcrop/2.0.1/smartcrop.min.js"); 
            console.log("smartcrop Loaded Successfully");
            }
            
            
            if (args[i] == "smokejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smokejs/3.1.1/js/smoke.min.js"); 
            console.log("smokejs Loaded Successfully");
            }
            
            
            if (args[i] == "smooth-scroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/12.1.5/js/smooth-scroll.min.js"); 
            console.log("smooth-scroll Loaded Successfully");
            }
            
            
            if (args[i] == "smooth-scrollbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.2.5/smooth-scrollbar.js"); 
            console.log("smooth-scrollbar Loaded Successfully");
            }
            
            
            if (args[i] == "smoothie" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smoothie/1.34.0/smoothie.min.js"); 
            console.log("smoothie Loaded Successfully");
            }
            
            
            if (args[i] == "smoothscroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.6/SmoothScroll.min.js"); 
            console.log("smoothscroll Loaded Successfully");
            }
            
            
            if (args[i] == "smoothState.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/smoothState.js/0.7.2/jquery.smoothState.min.js"); 
            console.log("smoothState.js Loaded Successfully");
            }
            
            
            if (args[i] == "snabbdom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/snabbdom/0.7.1/snabbdom.min.js"); 
            console.log("snabbdom Loaded Successfully");
            }
            
            
            if (args[i] == "snabbt.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/snabbt.js/0.6.4/snabbt.min.js"); 
            console.log("snabbt.js Loaded Successfully");
            }
            
            
            if (args[i] == "snackbarjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/snackbarjs/1.1.0/snackbar.min.js"); 
            console.log("snackbarjs Loaded Successfully");
            }
            
            
            if (args[i] == "snap.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/snap.js/1.9.3/snap.min.js"); 
            console.log("snap.js Loaded Successfully");
            }
            
            
            if (args[i] == "snap.svg.zpd" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/snap.svg.zpd/0.0.11/snap.svg.zpd.min.js"); 
            console.log("snap.svg.zpd Loaded Successfully");
            }
            
            
            if (args[i] == "snap.svg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js"); 
            console.log("snap.svg Loaded Successfully");
            }
            
            
            if (args[i] == "snarl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/snarl/0.3.4/snarl.min.js"); 
            console.log("snarl Loaded Successfully");
            }
            
            
            if (args[i] == "snoocore" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/snoocore/3.2.0/Snoocore-browser.min.js"); 
            console.log("snoocore Loaded Successfully");
            }
            
            
            if (args[i] == "Snowstorm" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js"); 
            console.log("Snowstorm Loaded Successfully");
            }
            
            
            if (args[i] == "social-feed" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/social-feed/0.1.2/js/jquery.socialfeed.min.js"); 
            console.log("social-feed Loaded Successfully");
            }
            
            
            if (args[i] == "social-likes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/social-likes/3.1.3/social-likes.min.js"); 
            console.log("social-likes Loaded Successfully");
            }
            
            
            if (args[i] == "social-share-kit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/social-share-kit/1.0.15/js/social-share-kit.min.js"); 
            console.log("social-share-kit Loaded Successfully");
            }
            
            
            if (args[i] == "social-share.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js"); 
            console.log("social-share.js Loaded Successfully");
            }
            
            
            if (args[i] == "SocialIcons" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/SocialIcons/1.0.1/soc.min.js"); 
            console.log("SocialIcons Loaded Successfully");
            }
            
            
            if (args[i] == "socket.io-stream" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/socket.io-stream/0.9.1/socket.io-stream.min.js"); 
            console.log("socket.io-stream Loaded Successfully");
            }
            
            
            if (args[i] == "socket.io" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"); 
            console.log("socket.io Loaded Successfully");
            }
            
            
            if (args[i] == "socketcluster-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/socketcluster-client/9.0.2/socketcluster.min.js"); 
            console.log("socketcluster-client Loaded Successfully");
            }
            
            
            if (args[i] == "sockjs-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.4/sockjs.min.js"); 
            console.log("sockjs-client Loaded Successfully");
            }
            
            
            if (args[i] == "sopa" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sopa/1.0/stopcensorship.min.js"); 
            console.log("sopa Loaded Successfully");
            }
            
            
            if (args[i] == "sortable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sortable/0.8.0/js/sortable.min.js"); 
            console.log("sortable Loaded Successfully");
            }
            
            
            if (args[i] == "Sortable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.6.0/Sortable.min.js"); 
            console.log("Sortable Loaded Successfully");
            }
            
            
            if (args[i] == "SoundJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/SoundJS/1.0.1/soundjs.min.js"); 
            console.log("SoundJS Loaded Successfully");
            }
            
            
            if (args[i] == "soundmanager2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/soundmanager2/2.97a.20150601/script/soundmanager2-nodebug-jsmin.js"); 
            console.log("soundmanager2 Loaded Successfully");
            }
            
            
            if (args[i] == "soundplayer-widget" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/soundplayer-widget/0.4.2/soundplayer-widget.min.js"); 
            console.log("soundplayer-widget Loaded Successfully");
            }
            
            
            if (args[i] == "soxx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/soxx/2.0.3/soxx.min.js"); 
            console.log("soxx Loaded Successfully");
            }
            
            
            if (args[i] == "sp-pnp-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sp-pnp-js/3.0.3/pnp.min.js"); 
            console.log("sp-pnp-js Loaded Successfully");
            }
            
            
            if (args[i] == "spa.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spa.js/2.0.6/spa.min.js"); 
            console.log("spa.js Loaded Successfully");
            }
            
            
            if (args[i] == "space" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/space/0.8.4/space.min.js"); 
            console.log("space Loaded Successfully");
            }
            
            
            if (args[i] == "spark-md5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.0/spark-md5.min.js"); 
            console.log("spark-md5 Loaded Successfully");
            }
            
            
            if (args[i] == "speakingurl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/speakingurl/14.0.1/speakingurl.min.js"); 
            console.log("speakingurl Loaded Successfully");
            }
            
            
            if (args[i] == "spectragram" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spectragram/1.0.3/spectragram.min.js"); 
            console.log("spectragram Loaded Successfully");
            }
            
            
            if (args[i] == "spectrum-i18n" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spectrum-i18n/1.3.0/jquery.spectrum-es.min.js"); 
            console.log("spectrum-i18n Loaded Successfully");
            }
            
            
            if (args[i] == "spectrum" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.js"); 
            console.log("spectrum Loaded Successfully");
            }
            
            
            if (args[i] == "SpeechKITT" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/speechkitt.min.js"); 
            console.log("SpeechKITT Loaded Successfully");
            }
            
            
            if (args[i] == "spellbook" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spellbook/1.0.3/spellbook.js"); 
            console.log("spellbook Loaded Successfully");
            }
            
            
            if (args[i] == "spf" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spf/2.4.0/spf.js"); 
            console.log("spf Loaded Successfully");
            }
            
            
            if (args[i] == "spin.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min.js"); 
            console.log("spin.js Loaded Successfully");
            }
            
            
            if (args[i] == "spinejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spinejs/1.2.0/all.min.js"); 
            console.log("spinejs Loaded Successfully");
            }
            
            
            if (args[i] == "split.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/split.js/1.3.5/split.min.js"); 
            console.log("split.js Loaded Successfully");
            }
            
            
            if (args[i] == "springy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/springy/2.7.1/springy.min.js"); 
            console.log("springy Loaded Successfully");
            }
            
            
            if (args[i] == "sprint" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sprint/0.9.2/sprint.min.js"); 
            console.log("sprint Loaded Successfully");
            }
            
            
            if (args[i] == "sprintf" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sprintf/1.1.1/sprintf.min.js"); 
            console.log("sprintf Loaded Successfully");
            }
            
            
            if (args[i] == "sprite-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sprite-js/0.1.1/sprite.min.js"); 
            console.log("sprite-js Loaded Successfully");
            }
            
            
            if (args[i] == "spritespin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/spritespin/3.4.3/spritespin.min.js"); 
            console.log("spritespin Loaded Successfully");
            }
            
            
            if (args[i] == "sql.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sql.js/0.4.0/js/sql.js"); 
            console.log("sql.js Loaded Successfully");
            }
            
            
            if (args[i] == "squel" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/squel/5.12.0/squel.min.js"); 
            console.log("squel Loaded Successfully");
            }
            
            
            if (args[i] == "squire-rte" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/squire-rte/1.8.10/squire.js"); 
            console.log("squire-rte Loaded Successfully");
            }
            
            
            if (args[i] == "squishy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/squishy/1.0.1/squishy.min.js"); 
            console.log("squishy Loaded Successfully");
            }
            
            
            if (args[i] == "ssi-modal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ssi-modal/1.0.27/js/ssi-modal.min.js"); 
            console.log("ssi-modal Loaded Successfully");
            }
            
            
            if (args[i] == "stackblur-canvas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stackblur-canvas/1.4.0/stackblur.min.js"); 
            console.log("stackblur-canvas Loaded Successfully");
            }
            
            
            if (args[i] == "stacktable.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stacktable.js/1.0.3/stacktable.min.js"); 
            console.log("stacktable.js Loaded Successfully");
            }
            
            
            if (args[i] == "stacktrace.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stacktrace.js/2.0.0/stacktrace.min.js"); 
            console.log("stacktrace.js Loaded Successfully");
            }
            
            
            if (args[i] == "stage.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stage.js/0.8.10/stage.web.min.js"); 
            console.log("stage.js Loaded Successfully");
            }
            
            
            if (args[i] == "stampit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stampit/3.2.1/stampit.umd.min.js"); 
            console.log("stampit Loaded Successfully");
            }
            
            
            if (args[i] == "stapes" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stapes/1.0.0/stapes.min.js"); 
            console.log("stapes Loaded Successfully");
            }
            
            
            if (args[i] == "startbootstrap-agency" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-agency/3.3.7/js/agency.min.js"); 
            console.log("startbootstrap-agency Loaded Successfully");
            }
            
            
            if (args[i] == "startbootstrap-clean-blog" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-clean-blog/3.3.7/js/clean-blog.min.js"); 
            console.log("startbootstrap-clean-blog Loaded Successfully");
            }
            
            
            if (args[i] == "startbootstrap-creative" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-creative/3.3.7/js/creative.min.js"); 
            console.log("startbootstrap-creative Loaded Successfully");
            }
            
            
            if (args[i] == "startbootstrap-freelancer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-freelancer/3.3.7/js/freelancer.min.js"); 
            console.log("startbootstrap-freelancer Loaded Successfully");
            }
            
            
            if (args[i] == "startbootstrap-grayscale" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-grayscale/3.3.7/js/grayscale.min.js"); 
            console.log("startbootstrap-grayscale Loaded Successfully");
            }
            
            
            if (args[i] == "startbootstrap-sb-admin-2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/3.3.7+1/js/sb-admin-2.min.js"); 
            console.log("startbootstrap-sb-admin-2 Loaded Successfully");
            }
            
            
            if (args[i] == "stately.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stately.js/2.0.0/Stately.min.js"); 
            console.log("stately.js Loaded Successfully");
            }
            
            
            if (args[i] == "stats.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"); 
            console.log("stats.js Loaded Successfully");
            }
            
            
            if (args[i] == "stellar-base" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stellar-base/0.7.6/stellar-base.min.js"); 
            console.log("stellar-base Loaded Successfully");
            }
            
            
            if (args[i] == "stellar-sdk" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/0.8.0/stellar-sdk.min.js"); 
            console.log("stellar-sdk Loaded Successfully");
            }
            
            
            if (args[i] == "stellar.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stellar.js/0.6.2/jquery.stellar.min.js"); 
            console.log("stellar.js Loaded Successfully");
            }
            
            
            if (args[i] == "sticky-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sticky-js/1.2.0/sticky.min.js"); 
            console.log("sticky-js Loaded Successfully");
            }
            
            
            if (args[i] == "sticky-kit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sticky-kit/1.1.3/sticky-kit.min.js"); 
            console.log("sticky-kit Loaded Successfully");
            }
            
            
            if (args[i] == "sticky-table-headers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sticky-table-headers/0.1.19/js/jquery.stickytableheaders.min.js"); 
            console.log("sticky-table-headers Loaded Successfully");
            }
            
            
            if (args[i] == "stickyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stickyfill/2.0.3/stickyfill.min.js"); 
            console.log("stickyfill Loaded Successfully");
            }
            
            
            if (args[i] == "stickyfloat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stickyfloat/7.5.0/stickyfloat.min.js"); 
            console.log("stickyfloat Loaded Successfully");
            }
            
            
            if (args[i] == "stickyNavbar.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stickyNavbar.js/1.3.4/jquery.stickyNavbar.min.js"); 
            console.log("stickyNavbar.js Loaded Successfully");
            }
            
            
            if (args[i] == "stomp.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"); 
            console.log("stomp.js Loaded Successfully");
            }
            
            
            if (args[i] == "store.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/store.js/1.3.20/store.min.js"); 
            console.log("store.js Loaded Successfully");
            }
            
            
            if (args[i] == "store2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/store2/2.5.9/store2.min.js"); 
            console.log("store2 Loaded Successfully");
            }
            
            
            if (args[i] == "strapdown-topbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/strapdown-topbar/1.6.4/strapdown-topbar.min.js"); 
            console.log("strapdown-topbar Loaded Successfully");
            }
            
            
            if (args[i] == "stretchy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stretchy/1.1.0/stretchy.min.js"); 
            console.log("stretchy Loaded Successfully");
            }
            
            
            if (args[i] == "string_score" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/string_score/0.1.22/string_score.min.js"); 
            console.log("string_score Loaded Successfully");
            }
            
            
            if (args[i] == "string-fn" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/string-fn/1.5.2/webVersion.js"); 
            console.log("string-fn Loaded Successfully");
            }
            
            
            if (args[i] == "string-format" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/string-format/0.5.0/string-format.min.js"); 
            console.log("string-format Loaded Successfully");
            }
            
            
            if (args[i] == "string-mask" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/string-mask/0.3.0/string-mask.min.js"); 
            console.log("string-mask Loaded Successfully");
            }
            
            
            if (args[i] == "string-saw" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/string-saw/0.0.29/saw-min.js"); 
            console.log("string-saw Loaded Successfully");
            }
            
            
            if (args[i] == "string.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/string.js/3.3.3/string.min.js"); 
            console.log("string.js Loaded Successfully");
            }
            
            
            if (args[i] == "strman" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/strman/1.3.1/strman.js"); 
            console.log("strman Loaded Successfully");
            }
            
            
            if (args[i] == "stroll.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stroll.js/1.0/js/stroll.min.js"); 
            console.log("stroll.js Loaded Successfully");
            }
            
            
            if (args[i] == "strophe.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/strophe.js/1.2.14/strophe.min.js"); 
            console.log("strophe.js Loaded Successfully");
            }
            
            
            if (args[i] == "stupidtable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stupidtable/1.1.3/stupidtable.min.js"); 
            console.log("stupidtable Loaded Successfully");
            }
            
            
            if (args[i] == "styled-components" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/styled-components/2.4.0/styled-components.min.js"); 
            console.log("styled-components Loaded Successfully");
            }
            
            
            if (args[i] == "stylus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/stylus/0.32.1/stylus.min.js"); 
            console.log("stylus Loaded Successfully");
            }
            
            
            if (args[i] == "subkit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/subkit/1.1.24/subkit.min.js"); 
            console.log("subkit Loaded Successfully");
            }
            
            
            if (args[i] == "submitter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/submitter/0.3.1/submitter.min.js"); 
            console.log("submitter Loaded Successfully");
            }
            
            
            if (args[i] == "sugar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sugar/2.0.4/sugar.min.js"); 
            console.log("sugar Loaded Successfully");
            }
            
            
            if (args[i] == "summernote" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.min.js"); 
            console.log("summernote Loaded Successfully");
            }
            
            
            if (args[i] == "suncalc" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/suncalc/1.8.0/suncalc.min.js"); 
            console.log("suncalc Loaded Successfully");
            }
            
            
            if (args[i] == "superagent" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/superagent/3.8.2/superagent.min.js"); 
            console.log("superagent Loaded Successfully");
            }
            
            
            if (args[i] == "superfish" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.9/js/superfish.min.js"); 
            console.log("superfish Loaded Successfully");
            }
            
            
            if (args[i] == "superplaceholder" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/superplaceholder/0.1.1/superplaceholder.min.js"); 
            console.log("superplaceholder Loaded Successfully");
            }
            
            
            if (args[i] == "SuperScrollorama" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/SuperScrollorama/1.0.3/jquery.superscrollorama.min.js"); 
            console.log("SuperScrollorama Loaded Successfully");
            }
            
            
            if (args[i] == "superslides" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/superslides/0.6.2/jquery.superslides.min.js"); 
            console.log("superslides Loaded Successfully");
            }
            
            
            if (args[i] == "survey-angular" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/survey-angular/1.0.0/survey.angular.min.js"); 
            console.log("survey-angular Loaded Successfully");
            }
            
            
            if (args[i] == "survey-jquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/survey-jquery/1.0.0/survey.jquery.min.js"); 
            console.log("survey-jquery Loaded Successfully");
            }
            
            
            if (args[i] == "survey-knockout" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/survey-knockout/1.0.0/survey.ko.min.js"); 
            console.log("survey-knockout Loaded Successfully");
            }
            
            
            if (args[i] == "survey-react" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/survey-react/1.0.0/survey.react.min.js"); 
            console.log("survey-react Loaded Successfully");
            }
            
            
            if (args[i] == "survey-vue" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/survey-vue/1.0.0/survey.vue.min.js"); 
            console.log("survey-vue Loaded Successfully");
            }
            
            
            if (args[i] == "svg-injector" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svg-injector/1.1.3/svg-injector.min.js"); 
            console.log("svg-injector Loaded Successfully");
            }
            
            
            if (args[i] == "SVG-Morpheus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/SVG-Morpheus/0.3.2/svg-morpheus.js"); 
            console.log("SVG-Morpheus Loaded Successfully");
            }
            
            
            if (args[i] == "svg.connectable.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svg.connectable.js/2.0.1/svg.connectable.min.js"); 
            console.log("svg.connectable.js Loaded Successfully");
            }
            
            
            if (args[i] == "svg.draggy.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svg.draggy.js/1.1.1/svg.draggy.min.js"); 
            console.log("svg.draggy.js Loaded Successfully");
            }
            
            
            if (args[i] == "svg.filter.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svg.filter.js/2.0.2/svg.filter.min.js"); 
            console.log("svg.filter.js Loaded Successfully");
            }
            
            
            if (args[i] == "svg.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svg.js/2.6.3/svg.min.js"); 
            console.log("svg.js Loaded Successfully");
            }
            
            
            if (args[i] == "svg.pan-zoom.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svg.pan-zoom.js/2.8.0/svg.pan-zoom.min.js"); 
            console.log("svg.pan-zoom.js Loaded Successfully");
            }
            
            
            if (args[i] == "svg4everybody" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.min.js"); 
            console.log("svg4everybody Loaded Successfully");
            }
            
            
            if (args[i] == "svgeezy" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svgeezy/1.0.0/svgeezy.min.js"); 
            console.log("svgeezy Loaded Successfully");
            }
            
            
            if (args[i] == "svgxuse" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/svgxuse/1.2.6/svgxuse.min.js"); 
            console.log("svgxuse Loaded Successfully");
            }
            
            
            if (args[i] == "sw-toolbox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js"); 
            console.log("sw-toolbox Loaded Successfully");
            }
            
            
            if (args[i] == "swagger-ui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.8.1/swagger-ui.js"); 
            console.log("swagger-ui Loaded Successfully");
            }
            
            
            if (args[i] == "swfobject" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/swfobject/2.2/swfobject.min.js"); 
            console.log("swfobject Loaded Successfully");
            }
            
            
            if (args[i] == "swiftclick" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/swiftclick/2.1.1/swiftclick.min.js"); 
            console.log("swiftclick Loaded Successfully");
            }
            
            
            if (args[i] == "swig" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/swig/1.4.1/swig.min.js"); 
            console.log("swig Loaded Successfully");
            }
            
            
            if (args[i] == "swing" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/swing/3.0.2/swing.js"); 
            console.log("swing Loaded Successfully");
            }
            
            
            if (args[i] == "swipe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/swipe/2.0.0/swipe.min.js"); 
            console.log("swipe Loaded Successfully");
            }
            
            
            if (args[i] == "swipebox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/swipebox/1.4.4/js/jquery.swipebox.min.js"); 
            console.log("swipebox Loaded Successfully");
            }
            
            
            if (args[i] == "swipejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/swipejs/2.2.11/swipe.min.js"); 
            console.log("swipejs Loaded Successfully");
            }
            
            
            if (args[i] == "Swiper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js"); 
            console.log("Swiper Loaded Successfully");
            }
            
            
            if (args[i] == "switchery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/switchery/0.8.2/switchery.min.js"); 
            console.log("switchery Loaded Successfully");
            }
            
            
            if (args[i] == "switchy.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/switchy.js/0.1.1/switchy.min.js"); 
            console.log("switchy.js Loaded Successfully");
            }
            
            
            if (args[i] == "sylvester" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/sylvester/0.1.3/sylvester.min.js"); 
            console.log("sylvester Loaded Successfully");
            }
            
            
            if (args[i] == "syn" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/syn/0.4.1/amd/syn.min.js"); 
            console.log("syn Loaded Successfully");
            }
            
            
            if (args[i] == "synaptic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/synaptic/1.1.4/synaptic.min.js"); 
            console.log("synaptic Loaded Successfully");
            }
            
            
            if (args[i] == "SyntaxHighlighter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/SyntaxHighlighter/3.0.83/scripts/shCore.min.js"); 
            console.log("SyntaxHighlighter Loaded Successfully");
            }
            
            
            if (args[i] == "systemjs-plugin-json" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/systemjs-plugin-json/0.3.0/json.min.js"); 
            console.log("systemjs-plugin-json Loaded Successfully");
            }
            
            
            if (args[i] == "systemjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.19/system.js"); 
            console.log("systemjs Loaded Successfully");
            }
            
            
            if (args[i] == "t3js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/t3js/2.7.0/t3.min.js"); 
            console.log("t3js Loaded Successfully");
            }
            
            
            if (args[i] == "t7" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/t7/0.4.0/t7.min.js"); 
            console.log("t7 Loaded Successfully");
            }
            
            
            if (args[i] == "tabby" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tabby/11.2.0/js/tabby.min.js"); 
            console.log("tabby Loaded Successfully");
            }
            
            
            if (args[i] == "tabcomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tabcomplete/1.4.0/tabcomplete.min.js"); 
            console.log("tabcomplete Loaded Successfully");
            }
            
            
            if (args[i] == "TableDnD" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/TableDnD/0.9.1/jquery.tablednd.min.js"); 
            console.log("TableDnD Loaded Successfully");
            }
            
            
            if (args[i] == "TableExport" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/TableExport/4.0.11/js/tableexport.min.js"); 
            console.log("TableExport Loaded Successfully");
            }
            
            
            if (args[i] == "tablefilter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tablefilter/2.5.0/tablefilter_min.js"); 
            console.log("tablefilter Loaded Successfully");
            }
            
            
            if (args[i] == "tablesort" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tablesort/5.0.2/tablesort.min.js"); 
            console.log("tablesort Loaded Successfully");
            }
            
            
            if (args[i] == "tabletop.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.2/tabletop.min.js"); 
            console.log("tabletop.js Loaded Successfully");
            }
            
            
            if (args[i] == "tabulator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tabulator/3.3.2/js/tabulator.min.js"); 
            console.log("tabulator Loaded Successfully");
            }
            
            
            if (args[i] == "taffydb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/taffydb/2.7.3/taffy-min.js"); 
            console.log("taffydb Loaded Successfully");
            }
            
            
            if (args[i] == "tag-editor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tag-editor/1.0.20/jquery.tag-editor.min.js"); 
            console.log("tag-editor Loaded Successfully");
            }
            
            
            if (args[i] == "tag-it" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tag-it/2.0/js/tag-it.min.js"); 
            console.log("tag-it Loaded Successfully");
            }
            
            
            if (args[i] == "taggd" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/taggd/4.0.0/taggd.min.js"); 
            console.log("taggd Loaded Successfully");
            }
            
            
            if (args[i] == "taggle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/taggle/1.13.0/taggle.min.js"); 
            console.log("taggle Loaded Successfully");
            }
            
            
            if (args[i] == "tagmanager" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tagmanager/3.0.2/tagmanager.min.js"); 
            console.log("tagmanager Loaded Successfully");
            }
            
            
            if (args[i] == "task.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/task.js/0.0.24/task.min.js"); 
            console.log("task.js Loaded Successfully");
            }
            
            
            if (args[i] == "taskforce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/taskforce/1.0/widget.min.js"); 
            console.log("taskforce Loaded Successfully");
            }
            
            
            if (args[i] == "tauCharts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tauCharts/1.2.1/tauCharts.min.js"); 
            console.log("tauCharts Loaded Successfully");
            }
            
            
            if (args[i] == "tAutocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tAutocomplete/1.0.0/tautocomplete.min.js"); 
            console.log("tAutocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "teadao" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/teadao/0.6.1/teadao.min.js"); 
            console.log("teadao Loaded Successfully");
            }
            
            
            if (args[i] == "techan.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/techan.js/0.8.0/techan.min.js"); 
            console.log("techan.js Loaded Successfully");
            }
            
            
            if (args[i] == "teleject-hisrc" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/teleject-hisrc/2.0.0/hisrc.min.js"); 
            console.log("teleject-hisrc Loaded Successfully");
            }
            
            
            if (args[i] == "template_js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/template_js/0.7.1/template.min.js"); 
            console.log("template_js Loaded Successfully");
            }
            
            
            if (args[i] == "template7" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/template7/1.3.1/template7.min.js"); 
            console.log("template7 Loaded Successfully");
            }
            
            
            if (args[i] == "templatebinding" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/templatebinding/0.3.4/TemplateBinding.min.js"); 
            console.log("templatebinding Loaded Successfully");
            }
            
            
            if (args[i] == "tern" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tern/0.21.0/tern.min.js"); 
            console.log("tern Loaded Successfully");
            }
            
            
            if (args[i] == "terraformer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/terraformer/1.0.8/terraformer.min.js"); 
            console.log("terraformer Loaded Successfully");
            }
            
            
            if (args[i] == "tesseract.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/1.0.10/tesseract.min.js"); 
            console.log("tesseract.js Loaded Successfully");
            }
            
            
            if (args[i] == "tether-drop" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tether-drop/1.4.2/js/drop.min.js"); 
            console.log("tether-drop Loaded Successfully");
            }
            
            
            if (args[i] == "tether-select" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tether-select/1.1.1/js/select.min.js"); 
            console.log("tether-select Loaded Successfully");
            }
            
            
            if (args[i] == "tether-tooltip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tether-tooltip/1.2.0/js/tooltip.min.js"); 
            console.log("tether-tooltip Loaded Successfully");
            }
            
            
            if (args[i] == "tether" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.3/js/tether.min.js"); 
            console.log("tether Loaded Successfully");
            }
            
            
            if (args[i] == "textAngular" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/textAngular/1.5.16/textAngular.min.js"); 
            console.log("textAngular Loaded Successfully");
            }
            
            
            if (args[i] == "textfit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/textfit/2.3.1/textFit.min.js"); 
            console.log("textfit Loaded Successfully");
            }
            
            
            if (args[i] == "texthighlighter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/texthighlighter/1.2.0/TextHighlighter.min.js"); 
            console.log("texthighlighter Loaded Successfully");
            }
            
            
            if (args[i] == "textile-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/textile-js/2.0.4/textile.min.js"); 
            console.log("textile-js Loaded Successfully");
            }
            
            
            if (args[i] == "textillate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/textillate/0.4.0/jquery.textillate.min.js"); 
            console.log("textillate Loaded Successfully");
            }
            
            
            if (args[i] == "tez.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tez.js/10.0.1/Tez.min.js"); 
            console.log("tez.js Loaded Successfully");
            }
            
            
            if (args[i] == "themoviedb-javascript-library" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/themoviedb-javascript-library/1.0.1/themoviedb.min.js"); 
            console.log("themoviedb-javascript-library Loaded Successfully");
            }
            
            
            if (args[i] == "then-request" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/then-request/2.2.0/request.min.js"); 
            console.log("then-request Loaded Successfully");
            }
            
            
            if (args[i] == "thorax" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/thorax/2.2.1/thorax.min.js"); 
            console.log("thorax Loaded Successfully");
            }
            
            
            if (args[i] == "three.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js"); 
            console.log("three.js Loaded Successfully");
            }
            
            
            if (args[i] == "ticketbase-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ticketbase-js/0.1.13/ticketbase.js"); 
            console.log("ticketbase-js Loaded Successfully");
            }
            
            
            if (args[i] == "tilt.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"); 
            console.log("tilt.js Loaded Successfully");
            }
            
            
            if (args[i] == "timeago.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/timeago.js/3.0.2/timeago.min.js"); 
            console.log("timeago.js Loaded Successfully");
            }
            
            
            if (args[i] == "timecircles" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/timecircles/1.5.3/TimeCircles.min.js"); 
            console.log("timecircles Loaded Successfully");
            }
            
            
            if (args[i] == "timedropper" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/timedropper/1.0/timedropper.min.js"); 
            console.log("timedropper Loaded Successfully");
            }
            
            
            if (args[i] == "timekit-js-sdk" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/timekit-js-sdk/1.12.0/timekit-sdk.min.js"); 
            console.log("timekit-js-sdk Loaded Successfully");
            }
            
            
            if (args[i] == "timelinejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.36.0/js/timeline-min.js"); 
            console.log("timelinejs Loaded Successfully");
            }
            
            
            if (args[i] == "TimeMe.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/TimeMe.js/2.0.0/timeme.min.js"); 
            console.log("TimeMe.js Loaded Successfully");
            }
            
            
            if (args[i] == "timepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"); 
            console.log("timepicker Loaded Successfully");
            }
            
            
            if (args[i] == "timer.jquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/timer.jquery/0.7.1/timer.jquery.min.js"); 
            console.log("timer.jquery Loaded Successfully");
            }
            
            
            if (args[i] == "timezone-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/timezone-js/0.4.13/date.min.js"); 
            console.log("timezone-js Loaded Successfully");
            }
            
            
            if (args[i] == "tingle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tingle/0.12.0/tingle.min.js"); 
            console.log("tingle Loaded Successfully");
            }
            
            
            if (args[i] == "tiny-date-picker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tiny-date-picker/3.1.7/tiny-date-picker.min.js"); 
            console.log("tiny-date-picker Loaded Successfully");
            }
            
            
            if (args[i] == "tiny-slider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.4.0/min/tiny-slider.js"); 
            console.log("tiny-slider Loaded Successfully");
            }
            
            
            if (args[i] == "tinycolor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.1/tinycolor.min.js"); 
            console.log("tinycolor Loaded Successfully");
            }
            
            
            if (args[i] == "tinyColorPicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tinyColorPicker/1.1.1/jqColorPicker.min.js"); 
            console.log("tinyColorPicker Loaded Successfully");
            }
            
            
            if (args[i] == "tinycon" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tinycon/0.6.5/tinycon.min.js"); 
            console.log("tinycon Loaded Successfully");
            }
            
            
            if (args[i] == "tinymce" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.4/tinymce.min.js"); 
            console.log("tinymce Loaded Successfully");
            }
            
            
            if (args[i] == "TinyNav.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/TinyNav.js/1.2.0/tinynav.min.js"); 
            console.log("TinyNav.js Loaded Successfully");
            }
            
            
            if (args[i] == "tinyscrollbar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tinyscrollbar/2.4.2/tinyscrollbar.min.js"); 
            console.log("tinyscrollbar Loaded Successfully");
            }
            
            
            if (args[i] == "tinysort" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tinysort/2.3.6/tinysort.min.js"); 
            console.log("tinysort Loaded Successfully");
            }
            
            
            if (args[i] == "tippy.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tippy.js/0.3.0/tippy.js"); 
            console.log("tippy.js Loaded Successfully");
            }
            
            
            if (args[i] == "tipso" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tipso/1.0.8/tipso.min.js"); 
            console.log("tipso Loaded Successfully");
            }
            
            
            if (args[i] == "Tipue-Search" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Tipue-Search/5.0.0/tipuesearch.min.js"); 
            console.log("Tipue-Search Loaded Successfully");
            }
            
            
            if (args[i] == "tmlib.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tmlib.js/0.5.2/tmlib.min.js"); 
            console.log("tmlib.js Loaded Successfully");
            }
            
            
            if (args[i] == "to-markdown" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/to-markdown/3.1.1/to-markdown.min.js"); 
            console.log("to-markdown Loaded Successfully");
            }
            
            
            if (args[i] == "toastr.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"); 
            console.log("toastr.js Loaded Successfully");
            }
            
            
            if (args[i] == "tocbot" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.0.1/tocbot.min.js"); 
            console.log("tocbot Loaded Successfully");
            }
            
            
            if (args[i] == "Tocca.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Tocca.js/2.0.3/Tocca.min.js"); 
            console.log("Tocca.js Loaded Successfully");
            }
            
            
            if (args[i] == "tocktimer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tocktimer/1.0.12/tock.min.js"); 
            console.log("tocktimer Loaded Successfully");
            }
            
            
            if (args[i] == "todc-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/todc-bootstrap/3.3.7-3.3.13/js/bootstrap.min.js"); 
            console.log("todc-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "togeojson" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/togeojson/0.16.0/togeojson.min.js"); 
            console.log("togeojson Loaded Successfully");
            }
            
            
            if (args[i] == "tone" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tone/0.12.45/Tone.min.js"); 
            console.log("tone Loaded Successfully");
            }
            
            
            if (args[i] == "tooltipster" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/js/jquery.tooltipster.min.js"); 
            console.log("tooltipster Loaded Successfully");
            }
            
            
            if (args[i] == "topojson" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"); 
            console.log("topojson Loaded Successfully");
            }
            
            
            if (args[i] == "tota11y" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tota11y/0.1.6/tota11y.min.js"); 
            console.log("tota11y Loaded Successfully");
            }
            
            
            if (args[i] == "touchjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/touchjs/0.2.14/touch.min.js"); 
            console.log("touchjs Loaded Successfully");
            }
            
            
            if (args[i] == "toxiclibsjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/toxiclibsjs/0.1.3/toxiclibs.min.js"); 
            console.log("toxiclibsjs Loaded Successfully");
            }
            
            
            if (args[i] == "tracing.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tracing.js/1.1.3/tracing.min.js"); 
            console.log("tracing.js Loaded Successfully");
            }
            
            
            if (args[i] == "tracking.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tracking.js/1.1.3/tracking-min.js"); 
            console.log("tracking.js Loaded Successfully");
            }
            
            
            if (args[i] == "trackpad-scroll-emulator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/trackpad-scroll-emulator/1.0.8/jquery.trackpad-scroll-emulator.min.js"); 
            console.log("trackpad-scroll-emulator Loaded Successfully");
            }
            
            
            if (args[i] == "transducers.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/transducers.js/0.3.2/transducers.min.js"); 
            console.log("transducers.js Loaded Successfully");
            }
            
            
            if (args[i] == "transformation-matrix-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/transformation-matrix-js/2.7.2/matrix.min.js"); 
            console.log("transformation-matrix-js Loaded Successfully");
            }
            
            
            if (args[i] == "transitionize" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/transitionize/0.0.3/transitionize.min.js"); 
            console.log("transitionize Loaded Successfully");
            }
            
            
            if (args[i] == "translater.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/translater.js/1.0.9/translater.min.js"); 
            console.log("translater.js Loaded Successfully");
            }
            
            
            if (args[i] == "transparency" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/transparency/0.9.9/transparency.min.js"); 
            console.log("transparency Loaded Successfully");
            }
            
            
            if (args[i] == "treant-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/treant-js/1.0/Treant.min.js"); 
            console.log("treant-js Loaded Successfully");
            }
            
            
            if (args[i] == "tree-grid-directive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tree-grid-directive/0.4.0/tree-grid-directive.min.js"); 
            console.log("tree-grid-directive Loaded Successfully");
            }
            
            
            if (args[i] == "tree-model" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tree-model/1.0.6/TreeModel-min.js"); 
            console.log("tree-model Loaded Successfully");
            }
            
            
            if (args[i] == "treesaver" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/treesaver/0.10.0/treesaver-0.10.0.min.js"); 
            console.log("treesaver Loaded Successfully");
            }
            
            
            if (args[i] == "TremulaJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/TremulaJS/1.3.2/Tremula.min.js"); 
            console.log("TremulaJS Loaded Successfully");
            }
            
            
            if (args[i] == "triangles" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/triangles/1.0.2/js/triangles.min.js"); 
            console.log("triangles Loaded Successfully");
            }
            
            
            if (args[i] == "trianglify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/trianglify/1.2.0/trianglify.min.js"); 
            console.log("trianglify Loaded Successfully");
            }
            
            
            if (args[i] == "tributejs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tributejs/3.1.3/tribute.min.js"); 
            console.log("tributejs Loaded Successfully");
            }
            
            
            if (args[i] == "Trip.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Trip.js/3.3.3/trip.min.js"); 
            console.log("Trip.js Loaded Successfully");
            }
            
            
            if (args[i] == "trix" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/trix/0.11.1/trix.js"); 
            console.log("trix Loaded Successfully");
            }
            
            
            if (args[i] == "Trumbowyg" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.9.2/trumbowyg.min.js"); 
            console.log("Trumbowyg Loaded Successfully");
            }
            
            
            if (args[i] == "trunk8" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/trunk8/1.3.3/trunk8.min.js"); 
            console.log("trunk8 Loaded Successfully");
            }
            
            
            if (args[i] == "tslib" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tslib/1.8.1/tslib.min.js"); 
            console.log("tslib Loaded Successfully");
            }
            
            
            if (args[i] == "tunajs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tunajs/1.0.0/tuna-min.js"); 
            console.log("tunajs Loaded Successfully");
            }
            
            
            if (args[i] == "turbolinks" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/turbolinks/5.0.3/turbolinks.js"); 
            console.log("turbolinks Loaded Successfully");
            }
            
            
            if (args[i] == "Turf.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Turf.js/5.1.5/turf.min.js"); 
            console.log("Turf.js Loaded Successfully");
            }
            
            
            if (args[i] == "turn.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/turn.js/3/turn.min.js"); 
            console.log("turn.js Loaded Successfully");
            }
            
            
            if (args[i] == "tv4" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tv4/1.3.0/tv4.min.js"); 
            console.log("tv4 Loaded Successfully");
            }
            
            
            if (args[i] == "twbs-pagination" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.1/jquery.twbsPagination.min.js"); 
            console.log("twbs-pagination Loaded Successfully");
            }
            
            
            if (args[i] == "tween.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tween.js/17.1.1/Tween.min.js"); 
            console.log("tween.js Loaded Successfully");
            }
            
            
            if (args[i] == "tweene" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tweene/0.5.11/tweene-all.min.js"); 
            console.log("tweene Loaded Successfully");
            }
            
            
            if (args[i] == "tweenjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tweenjs/1.0.2/tweenjs.min.js"); 
            console.log("tweenjs Loaded Successfully");
            }
            
            
            if (args[i] == "tweet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tweet/2.2.0/jquery.tweet.min.js"); 
            console.log("tweet Loaded Successfully");
            }
            
            
            if (args[i] == "tweetnacl" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/tweetnacl/1.0.0/nacl-fast.min.js"); 
            console.log("tweetnacl Loaded Successfully");
            }
            
            
            if (args[i] == "twemoji" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twemoji/2.5.0/2/twemoji.min.js"); 
            console.log("twemoji Loaded Successfully");
            }
            
            
            if (args[i] == "twig.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twig.js/0.8.9/twig.min.js"); 
            console.log("twig.js Loaded Successfully");
            }
            
            
            if (args[i] == "twilio.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twilio.js/1.2.0/twilio.min.js"); 
            console.log("twilio.js Loaded Successfully");
            }
            
            
            if (args[i] == "twine" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twine/1.2.0/twine.min.js"); 
            console.log("twine Loaded Successfully");
            }
            
            
            if (args[i] == "twitter-bootstrap-wizard" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap-wizard/1.2/jquery.bootstrap.wizard.min.js"); 
            console.log("twitter-bootstrap-wizard Loaded Successfully");
            }
            
            
            if (args[i] == "twitter-bootstrap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js"); 
            console.log("twitter-bootstrap Loaded Successfully");
            }
            
            
            if (args[i] == "twitter-fetcher" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twitter-fetcher/17.0.2/js/twitterFetcher_min.js"); 
            console.log("twitter-fetcher Loaded Successfully");
            }
            
            
            if (args[i] == "twitterlib.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twitterlib.js/1.0.9/twitterlib.min.js"); 
            console.log("twitterlib.js Loaded Successfully");
            }
            
            
            if (args[i] == "twix.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/twix.js/1.2.1/twix.min.js"); 
            console.log("twix.js Loaded Successfully");
            }
            
            
            if (args[i] == "two.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/two.js/0.6.0/two.min.js"); 
            console.log("two.js Loaded Successfully");
            }
            
            
            if (args[i] == "txt.wav" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/txt.wav/1.0.5/js/txt.wav.min.js"); 
            console.log("txt.wav Loaded Successfully");
            }
            
            
            if (args[i] == "typeahead-addresspicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/typeahead-addresspicker/0.1.4/typeahead-addresspicker.min.js"); 
            console.log("typeahead-addresspicker Loaded Successfully");
            }
            
            
            if (args[i] == "typeahead.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js"); 
            console.log("typeahead.js Loaded Successfully");
            }
            
            
            if (args[i] == "typed.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.6/typed.min.js"); 
            console.log("typed.js Loaded Successfully");
            }
            
            
            if (args[i] == "typeis" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/typeis/1.1.2/typeis.min.js"); 
            console.log("typeis Loaded Successfully");
            }
            
            
            if (args[i] == "typeit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/typeit/5.2.0/typeit.min.js"); 
            console.log("typeit Loaded Successfully");
            }
            
            
            if (args[i] == "typescript" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/typescript/2.6.2/typescript.min.js"); 
            console.log("typescript Loaded Successfully");
            }
            
            
            if (args[i] == "TypeWatch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/TypeWatch/3.0.0/jquery.typewatch.min.js"); 
            console.log("TypeWatch Loaded Successfully");
            }
            
            
            if (args[i] == "TypewriterJS" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/TypewriterJS/1.0.0/typewriter.min.js"); 
            console.log("TypewriterJS Loaded Successfully");
            }
            
            
            if (args[i] == "Typist" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Typist/1.2/typist.min.js"); 
            console.log("Typist Loaded Successfully");
            }
            
            
            if (args[i] == "typogr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/typogr/0.6.7/typogr.min.js"); 
            console.log("typogr Loaded Successfully");
            }
            
            
            if (args[i] == "UAParser.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/0.7.17/ua-parser.min.js"); 
            console.log("UAParser.js Loaded Successfully");
            }
            
            
            if (args[i] == "ui-leaflet" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ui-leaflet/2.0.0/ui-leaflet.min.js"); 
            console.log("ui-leaflet Loaded Successfully");
            }
            
            
            if (args[i] == "ui-router-extras" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ui-router-extras/0.1.3/ct-ui-router-extras.min.js"); 
            console.log("ui-router-extras Loaded Successfully");
            }
            
            
            if (args[i] == "ui-selectableScroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/ui-selectableScroll/0.1.4/selectableScroll.min.js"); 
            console.log("ui-selectableScroll Loaded Successfully");
            }
            
            
            if (args[i] == "uikit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.4/js/uikit.min.js"); 
            console.log("uikit Loaded Successfully");
            }
            
            
            if (args[i] == "uiv" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/uiv/0.15.4/uiv.min.js"); 
            console.log("uiv Loaded Successfully");
            }
            
            
            if (args[i] == "umbrella" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/umbrella/2.10.1/umbrella.min.js"); 
            console.log("umbrella Loaded Successfully");
            }
            
            
            if (args[i] == "underscore-contrib" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/underscore-contrib/0.3.0/underscore-contrib.min.js"); 
            console.log("underscore-contrib Loaded Successfully");
            }
            
            
            if (args[i] == "underscore.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"); 
            console.log("underscore.js Loaded Successfully");
            }
            
            
            if (args[i] == "underscore.string" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/underscore.string/3.3.4/underscore.string.min.js"); 
            console.log("underscore.string Loaded Successfully");
            }
            
            
            if (args[i] == "unibox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/unibox/1.17.4/js/unibox.min.js"); 
            console.log("unibox Loaded Successfully");
            }
            
            
            if (args[i] == "unicorn.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/unicorn.js/1.0/unicorn.min.js"); 
            console.log("unicorn.js Loaded Successfully");
            }
            
            
            if (args[i] == "Uniform.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Uniform.js/4.2.2/js/jquery.uniform.bundled.js"); 
            console.log("Uniform.js Loaded Successfully");
            }
            
            
            if (args[i] == "unitegallery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/unitegallery/1.7.40/js/unitegallery.min.js"); 
            console.log("unitegallery Loaded Successfully");
            }
            
            
            if (args[i] == "universal-mixin" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/universal-mixin/2.0.0/universal-mixin.js"); 
            console.log("universal-mixin Loaded Successfully");
            }
            
            
            if (args[i] == "unslider" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/unslider/2.0.3/js/unslider-min.js"); 
            console.log("unslider Loaded Successfully");
            }
            
            
            if (args[i] == "unveil" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/unveil/1.3.0/jquery.unveil.min.js"); 
            console.log("unveil Loaded Successfully");
            }
            
            
            if (args[i] == "unveil2" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js"); 
            console.log("unveil2 Loaded Successfully");
            }
            
            
            if (args[i] == "upb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/upb/1.2.3/upb.min.js"); 
            console.log("upb Loaded Successfully");
            }
            
            
            if (args[i] == "UpUp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/UpUp/1.0.0/upup.min.js"); 
            console.log("UpUp Loaded Successfully");
            }
            
            
            if (args[i] == "URI.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/URI.js/1.19.0/URI.min.js"); 
            console.log("URI.js Loaded Successfully");
            }
            
            
            if (args[i] == "url-search-params" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/url-search-params/0.10.0/url-search-params.js"); 
            console.log("url-search-params Loaded Successfully");
            }
            
            
            if (args[i] == "urlive" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/urlive/1.1.1/jquery.urlive.min.js"); 
            console.log("urlive Loaded Successfully");
            }
            
            
            if (args[i] == "urljs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/urljs/2.3.1/url.min.js"); 
            console.log("urljs Loaded Successfully");
            }
            
            
            if (args[i] == "us-map" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/us-map/1.0.1/jquery.usmap.min.js"); 
            console.log("us-map Loaded Successfully");
            }
            
            
            if (args[i] == "use.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/use.js/0.4.0/use.min.js"); 
            console.log("use.js Loaded Successfully");
            }
            
            
            if (args[i] == "userinfo" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/userinfo/1.1.1/userinfo.min.js"); 
            console.log("userinfo Loaded Successfully");
            }
            
            
            if (args[i] == "usertiming" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/usertiming/0.1.7/usertiming.min.js"); 
            console.log("usertiming Loaded Successfully");
            }
            
            
            if (args[i] == "uswds" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/uswds/1.4.4/js/uswds.min.js"); 
            console.log("uswds Loaded Successfully");
            }
            
            
            if (args[i] == "utf8" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/utf8/3.0.0/utf8.min.js"); 
            console.log("utf8 Loaded Successfully");
            }
            
            
            if (args[i] == "uvCharts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/uvCharts/1.1.5/uvcharts.min.js"); 
            console.log("uvCharts Loaded Successfully");
            }
            
            
            if (args[i] == "Vague.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Vague.js/0.0.6/Vague.min.js"); 
            console.log("Vague.js Loaded Successfully");
            }
            
            
            if (args[i] == "valid.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/valid.js/1.2.5/validate.js"); 
            console.log("valid.js Loaded Successfully");
            }
            
            
            if (args[i] == "validate-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/validate-js/2.0.1/validate.min.js"); 
            console.log("validate-js Loaded Successfully");
            }
            
            
            if (args[i] == "validate.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.12.0/validate.min.js"); 
            console.log("validate.js Loaded Successfully");
            }
            
            
            if (args[i] == "validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/validator/9.2.0/validator.min.js"); 
            console.log("validator Loaded Successfully");
            }
            
            
            if (args[i] == "validatorjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/validatorjs/2.0.0/validator.min.js"); 
            console.log("validatorjs Loaded Successfully");
            }
            
            
            if (args[i] == "valjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/valjs/1.2/jquery.valjs.min.js"); 
            console.log("valjs Loaded Successfully");
            }
            
            
            if (args[i] == "vanilla-lazyload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/10.4.1/lazyload.min.js"); 
            console.log("vanilla-lazyload Loaded Successfully");
            }
            
            
            if (args[i] == "vanilla-masker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vanilla-masker/1.2.0/vanilla-masker.min.js"); 
            console.log("vanilla-masker Loaded Successfully");
            }
            
            
            if (args[i] == "vanilla-modal" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vanilla-modal/1.6.5/index.min.js"); 
            console.log("vanilla-modal Loaded Successfully");
            }
            
            
            if (args[i] == "vault.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vault.js/1.0.3/vault.min.js"); 
            console.log("vault.js Loaded Successfully");
            }
            
            
            if (args[i] == "vectorious" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vectorious/4.8.1/vectorious.min.js"); 
            console.log("vectorious Loaded Successfully");
            }
            
            
            if (args[i] == "vee-validate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vee-validate/0.9.3/vee-validate.min.js"); 
            console.log("vee-validate Loaded Successfully");
            }
            
            
            if (args[i] == "vega-embed" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vega-embed/2.2.0/vega-embed.min.js"); 
            console.log("vega-embed Loaded Successfully");
            }
            
            
            if (args[i] == "vega-lite" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vega-lite/2.0.3/vega-lite.min.js"); 
            console.log("vega-lite Loaded Successfully");
            }
            
            
            if (args[i] == "vega-tooltip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vega-tooltip/0.4.4/vega-tooltip.min.js"); 
            console.log("vega-tooltip Loaded Successfully");
            }
            
            
            if (args[i] == "vega" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vega/3.0.8/vega.min.js"); 
            console.log("vega Loaded Successfully");
            }
            
            
            if (args[i] == "vegas" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.0/vegas.min.js"); 
            console.log("vegas Loaded Successfully");
            }
            
            
            if (args[i] == "veinjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/veinjs/0.3/vein.min.js"); 
            console.log("veinjs Loaded Successfully");
            }
            
            
            if (args[i] == "velocity" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js"); 
            console.log("velocity Loaded Successfully");
            }
            
            
            if (args[i] == "venobox" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/venobox/1.8.2/venobox.min.js"); 
            console.log("venobox Loaded Successfully");
            }
            
            
            if (args[i] == "Ventus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Ventus/0.2.2/ventus.min.js"); 
            console.log("Ventus Loaded Successfully");
            }
            
            
            if (args[i] == "verify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/verify/0.0.1/verify.min.js"); 
            console.log("verify Loaded Successfully");
            }
            
            
            if (args[i] == "vertx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vertx/3.5.0/vertx-eventbus.min.js"); 
            console.log("vertx Loaded Successfully");
            }
            
            
            if (args[i] == "vex-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vex-js/4.0.1/js/vex.min.js"); 
            console.log("vex-js Loaded Successfully");
            }
            
            
            if (args[i] == "vibrant.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vibrant.js/1.0.0/Vibrant.min.js"); 
            console.log("vibrant.js Loaded Successfully");
            }
            
            
            if (args[i] == "victor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/victor/1.1.0/victor.min.js"); 
            console.log("victor Loaded Successfully");
            }
            
            
            if (args[i] == "victory" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/victory/0.24.3/victory.min.js"); 
            console.log("victory Loaded Successfully");
            }
            
            
            if (args[i] == "Vidage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Vidage/0.3.5/scripts/Vidage.min.js"); 
            console.log("Vidage Loaded Successfully");
            }
            
            
            if (args[i] == "vide" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vide/0.5.1/jquery.vide.min.js"); 
            console.log("vide Loaded Successfully");
            }
            
            
            if (args[i] == "video.js-chromecast" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/video.js-chromecast/2.0.9/videojs-chromecast.min.js"); 
            console.log("video.js-chromecast Loaded Successfully");
            }
            
            
            if (args[i] == "video.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/video.js/6.6.0/video.min.js"); 
            console.log("video.js Loaded Successfully");
            }
            
            
            if (args[i] == "videogular" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videogular/1.4.4/videogular.min.js"); 
            console.log("videogular Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-chromecast" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-chromecast/1.1.1/videojs.chromecast.min.js"); 
            console.log("videojs-chromecast Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-contrib-ads" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/5.1.5/videojs.ads.min.js"); 
            console.log("videojs-contrib-ads Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-contrib-dash" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-dash/2.9.2/videojs-dash.min.js"); 
            console.log("videojs-contrib-dash Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-contrib-hls" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.12.2/videojs-contrib-hls.min.js"); 
            console.log("videojs-contrib-hls Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-flash" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-flash/2.1.0/videojs-flash.min.js"); 
            console.log("videojs-flash Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-ga" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-ga/0.4.2/videojs.ga.min.js"); 
            console.log("videojs-ga Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-hotkeys" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-hotkeys/0.2.20/videojs.hotkeys.min.js"); 
            console.log("videojs-hotkeys Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-ima" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/0.8.0/videojs.ima.min.js"); 
            console.log("videojs-ima Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-markers" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-markers/0.7.0/videojs-markers.min.js"); 
            console.log("videojs-markers Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-overlay" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-overlay/1.1.4/videojs-overlay.min.js"); 
            console.log("videojs-overlay Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-playLists" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-playLists/0.2.0/videojs-playlists.min.js"); 
            console.log("videojs-playLists Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-record" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-record/2.0.4/videojs.record.min.js"); 
            console.log("videojs-record Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-resolution-switcher" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-resolution-switcher/0.4.2/videojs-resolution-switcher.min.js"); 
            console.log("videojs-resolution-switcher Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-vast-vpaid" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-vast-vpaid/2.0.2/videojs_5.vast.vpaid.min.js"); 
            console.log("videojs-vast-vpaid Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-wavesurfer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-wavesurfer/2.1.3/videojs.wavesurfer.min.js"); 
            console.log("videojs-wavesurfer Loaded Successfully");
            }
            
            
            if (args[i] == "videojs-youtube" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/2.4.1/Youtube.min.js"); 
            console.log("videojs-youtube Loaded Successfully");
            }
            
            
            if (args[i] == "videomail-client" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/videomail-client/2.1.30/videomail-client.min.js"); 
            console.log("videomail-client Loaded Successfully");
            }
            
            
            if (args[i] == "vidom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vidom/0.9.24/vidom.min.js"); 
            console.log("vidom Loaded Successfully");
            }
            
            
            if (args[i] == "viewer.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/viewer.js/0.11.1/crocodoc.viewer.min.js"); 
            console.log("viewer.js Loaded Successfully");
            }
            
            
            if (args[i] == "viewerjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/viewerjs/0.10.0/viewer.min.js"); 
            console.log("viewerjs Loaded Successfully");
            }
            
            
            if (args[i] == "viewport-units-buggyfill" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/viewport-units-buggyfill/0.6.2/viewport-units-buggyfill.min.js"); 
            console.log("viewport-units-buggyfill Loaded Successfully");
            }
            
            
            if (args[i] == "vimeo.ga.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vimeo.ga.js/0.6/vimeo.ga.min.js"); 
            console.log("vimeo.ga.js Loaded Successfully");
            }
            
            
            if (args[i] == "virtual-keyboard" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/virtual-keyboard/1.27.3/js/jquery.keyboard.min.js"); 
            console.log("virtual-keyboard Loaded Successfully");
            }
            
            
            if (args[i] == "vis" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js"); 
            console.log("vis Loaded Successfully");
            }
            
            
            if (args[i] == "visibility.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/visibility.js/1.2.4/visibility.min.js"); 
            console.log("visibility.js Loaded Successfully");
            }
            
            
            if (args[i] == "visibly.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/visibly.js/0.1.1/visibly.min.js"); 
            console.log("visibly.js Loaded Successfully");
            }
            
            
            if (args[i] == "vissense" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vissense/0.10.0/vissense.min.js"); 
            console.log("vissense Loaded Successfully");
            }
            
            
            if (args[i] == "vivagraphjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vivagraphjs/0.10.0/vivagraph.min.js"); 
            console.log("vivagraphjs Loaded Successfully");
            }
            
            
            if (args[i] == "vivus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.3/vivus.min.js"); 
            console.log("vivus Loaded Successfully");
            }
            
            
            if (args[i] == "viz.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/viz.js/1.8.0/viz.js"); 
            console.log("viz.js Loaded Successfully");
            }
            
            
            if (args[i] == "vizceral" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vizceral/4.6.0/vizceral.min.js"); 
            console.log("vizceral Loaded Successfully");
            }
            
            
            if (args[i] == "vjs-video" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vjs-video/0.1.11/vjs-video.min.js"); 
            console.log("vjs-video Loaded Successfully");
            }
            
            
            if (args[i] == "voca" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/voca/1.4.0/voca.min.js"); 
            console.log("voca Loaded Successfully");
            }
            
            
            if (args[i] == "vocalizer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vocalizer/1.0.0/vocalizer.min.js"); 
            console.log("vocalizer Loaded Successfully");
            }
            
            
            if (args[i] == "vonic" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vonic/1.1.3/vonic.min.js"); 
            console.log("vonic Loaded Successfully");
            }
            
            
            if (args[i] == "Voyeur" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Voyeur/0.4.0/Voyeur.min.js"); 
            console.log("Voyeur Loaded Successfully");
            }
            
            
            if (args[i] == "vquery" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vquery/5.0.1/v.min.js"); 
            console.log("vquery Loaded Successfully");
            }
            
            
            if (args[i] == "vtt.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vtt.js/0.13.0/vtt.min.js"); 
            console.log("vtt.js Loaded Successfully");
            }
            
            
            if (args[i] == "vue-async-data" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-async-data/1.0.2/vue-async-data.min.js"); 
            console.log("vue-async-data Loaded Successfully");
            }
            
            
            if (args[i] == "vue-chartjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-chartjs/3.0.2/vue-chartjs.min.js"); 
            console.log("vue-chartjs Loaded Successfully");
            }
            
            
            if (args[i] == "vue-clickaway" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-clickaway/2.1.0/vue-clickaway.min.js"); 
            console.log("vue-clickaway Loaded Successfully");
            }
            
            
            if (args[i] == "vue-color" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-color/2.4.3/vue-color.min.js"); 
            console.log("vue-color Loaded Successfully");
            }
            
            
            if (args[i] == "vue-filter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-filter/0.2.3/vue-filter.min.js"); 
            console.log("vue-filter Loaded Successfully");
            }
            
            
            if (args[i] == "vue-focus" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-focus/2.1.0/vue-focus.min.js"); 
            console.log("vue-focus Loaded Successfully");
            }
            
            
            if (args[i] == "vue-form" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-form/0.3.1/vue-form.min.js"); 
            console.log("vue-form Loaded Successfully");
            }
            
            
            if (args[i] == "vue-google-maps" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-google-maps/0.1.21/vue-google-maps.js"); 
            console.log("vue-google-maps Loaded Successfully");
            }
            
            
            if (args[i] == "vue-i18n" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-i18n/7.3.3/vue-i18n.min.js"); 
            console.log("vue-i18n Loaded Successfully");
            }
            
            
            if (args[i] == "vue-lazyload" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-lazyload/1.1.4/vue-lazyload.js"); 
            console.log("vue-lazyload Loaded Successfully");
            }
            
            
            if (args[i] == "vue-ls" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-ls/2.3.3/vue-ls.min.js"); 
            console.log("vue-ls Loaded Successfully");
            }
            
            
            if (args[i] == "vue-material-components" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-material-components/0.3.4/vue-material-components.min.js"); 
            console.log("vue-material-components Loaded Successfully");
            }
            
            
            if (args[i] == "vue-material" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-material/1.0.0/vue-material.min.js"); 
            console.log("vue-material Loaded Successfully");
            }
            
            
            if (args[i] == "vue-paginate" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-paginate/3.5.1/vue-paginate.min.js"); 
            console.log("vue-paginate Loaded Successfully");
            }
            
            
            if (args[i] == "vue-resource" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.3.4/vue-resource.min.js"); 
            console.log("vue-resource Loaded Successfully");
            }
            
            
            if (args[i] == "vue-router" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min.js"); 
            console.log("vue-router Loaded Successfully");
            }
            
            
            if (args[i] == "vue-smart-table" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-smart-table/2.5.0/vue-smart-table.min.js"); 
            console.log("vue-smart-table Loaded Successfully");
            }
            
            
            if (args[i] == "vue-strap" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-strap/1.1.40/vue-strap.min.js"); 
            console.log("vue-strap Loaded Successfully");
            }
            
            
            if (args[i] == "vue-toasted" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-toasted/1.1.24/vue-toasted.min.js"); 
            console.log("vue-toasted Loaded Successfully");
            }
            
            
            if (args[i] == "vue-validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue-validator/2.1.7/vue-validator.min.js"); 
            console.log("vue-validator Loaded Successfully");
            }
            
            
            if (args[i] == "Vue.Draggable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/15.0.0/vuedraggable.min.js"); 
            console.log("Vue.Draggable Loaded Successfully");
            }
            
            
            if (args[i] == "vue" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.min.js"); 
            console.log("vue Loaded Successfully");
            }
            
            
            if (args[i] == "vuefire" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vuefire/1.4.5/vuefire.min.js"); 
            console.log("vuefire Loaded Successfully");
            }
            
            
            if (args[i] == "vuejs-paginator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vuejs-paginator/2.0.2/vuejs-paginator.min.js"); 
            console.log("vuejs-paginator Loaded Successfully");
            }
            
            
            if (args[i] == "vuetify" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vuetify/0.17.6/vuetify.min.js"); 
            console.log("vuetify Loaded Successfully");
            }
            
            
            if (args[i] == "vuex" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js"); 
            console.log("vuex Loaded Successfully");
            }
            
            
            if (args[i] == "vuikit" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/vuikit/0.6.3/vuikit.js"); 
            console.log("vuikit Loaded Successfully");
            }
            
            
            if (args[i] == "wallop" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wallop/2.4.1/js/Wallop.min.js"); 
            console.log("wallop Loaded Successfully");
            }
            
            
            if (args[i] == "wangEditor" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wangEditor/10.0.13/wangEditor.min.js"); 
            console.log("wangEditor Loaded Successfully");
            }
            
            
            if (args[i] == "watch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/watch/2.0.4/watch.min.js"); 
            console.log("watch Loaded Successfully");
            }
            
            
            if (args[i] == "waterfall.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/waterfall.js/1.1.0/waterfall.min.js"); 
            console.log("waterfall.js Loaded Successfully");
            }
            
            
            if (args[i] == "waud.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/waud.js/0.9.16/waud.min.js"); 
            console.log("waud.js Loaded Successfully");
            }
            
            
            if (args[i] == "wavedrom" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wavedrom/1.6.2/wavedrom.min.js"); 
            console.log("wavedrom Loaded Successfully");
            }
            
            
            if (args[i] == "wavesurfer.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.4.0/wavesurfer.min.js"); 
            console.log("wavesurfer.js Loaded Successfully");
            }
            
            
            if (args[i] == "waypoints" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"); 
            console.log("waypoints Loaded Successfully");
            }
            
            
            if (args[i] == "wdt-emoji-bundle" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wdt-emoji-bundle/0.2.1/wdt-emoji-bundle.min.js"); 
            console.log("wdt-emoji-bundle Loaded Successfully");
            }
            
            
            if (args[i] == "wdt-loading" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wdt-loading/0.1.0/wdtLoading.min.js"); 
            console.log("wdt-loading Loaded Successfully");
            }
            
            
            if (args[i] == "weather" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/weather/0.0.2/weather.min.js"); 
            console.log("weather Loaded Successfully");
            }
            
            
            if (args[i] == "web-animations" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.1/web-animations.min.js"); 
            console.log("web-animations Loaded Successfully");
            }
            
            
            if (args[i] == "web-socket-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/web-socket-js/1.0.0/web_socket.min.js"); 
            console.log("web-socket-js Loaded Successfully");
            }
            
            
            if (args[i] == "webcamjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.24/webcam.min.js"); 
            console.log("webcamjs Loaded Successfully");
            }
            
            
            if (args[i] == "webcomponentsjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.22/custom-elements-es5-adapter.js"); 
            console.log("webcomponentsjs Loaded Successfully");
            }
            
            
            if (args[i] == "webfont" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js"); 
            console.log("webfont Loaded Successfully");
            }
            
            
            if (args[i] == "webkit.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webkit.js/0.1.0/webkit.js"); 
            console.log("webkit.js Loaded Successfully");
            }
            
            
            if (args[i] == "webpack-cesium" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webpack-cesium/1.37.0/webpack.cesium.js"); 
            console.log("webpack-cesium Loaded Successfully");
            }
            
            
            if (args[i] == "webrtc-adapter" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.0.3/adapter.min.js"); 
            console.log("webrtc-adapter Loaded Successfully");
            }
            
            
            if (args[i] == "webshim" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webshim/1.16.0/minified/polyfiller.js"); 
            console.log("webshim Loaded Successfully");
            }
            
            
            if (args[i] == "websqltracer" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/websqltracer/1.0.3/webSqlTracer.min.js"); 
            console.log("websqltracer Loaded Successfully");
            }
            
            
            if (args[i] == "webtorrent" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webtorrent/0.98.20/webtorrent.min.js"); 
            console.log("webtorrent Loaded Successfully");
            }
            
            
            if (args[i] == "webui-popover" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webui-popover/2.1.15/jquery.webui-popover.min.js"); 
            console.log("webui-popover Loaded Successfully");
            }
            
            
            if (args[i] == "webuploader" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/webuploader/0.1.1/webuploader.min.js"); 
            console.log("webuploader Loaded Successfully");
            }
            
            
            if (args[i] == "wechat.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wechat.js/0.1.3/wechat.min.js"); 
            console.log("wechat.js Loaded Successfully");
            }
            
            
            if (args[i] == "weld" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/weld/0.2.3/weld.min.js"); 
            console.log("weld Loaded Successfully");
            }
            
            
            if (args[i] == "what-input" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/what-input/5.0.3/what-input.min.js"); 
            console.log("what-input Loaded Successfully");
            }
            
            
            if (args[i] == "when" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/when/3.7.8/when.min.js"); 
            console.log("when Loaded Successfully");
            }
            
            
            if (args[i] == "whereyat" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/whereyat/0.1.2/jquery.whereyat.min.js"); 
            console.log("whereyat Loaded Successfully");
            }
            
            
            if (args[i] == "whitestorm.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/whitestorm.js/2.1.9/whs.min.js"); 
            console.log("whitestorm.js Loaded Successfully");
            }
            
            
            if (args[i] == "wicket" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wicket/1.3.2/wicket.min.js"); 
            console.log("wicket Loaded Successfully");
            }
            
            
            if (args[i] == "winjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/winjs/4.4.3/js/ui.min.js"); 
            console.log("winjs Loaded Successfully");
            }
            
            
            if (args[i] == "wnumb" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.1.0/wNumb.min.js"); 
            console.log("wnumb Loaded Successfully");
            }
            
            
            if (args[i] == "woofmark" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/woofmark/4.2.3/woofmark.min.js"); 
            console.log("woofmark Loaded Successfully");
            }
            
            
            if (args[i] == "wordcloud2.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wordcloud2.js/1.0.6/wordcloud2.min.js"); 
            console.log("wordcloud2.js Loaded Successfully");
            }
            
            
            if (args[i] == "wow" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"); 
            console.log("wow Loaded Successfully");
            }
            
            
            if (args[i] == "wysihtml" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wysihtml/0.5.5/wysihtml.min.js"); 
            console.log("wysihtml Loaded Successfully");
            }
            
            
            if (args[i] == "wysihtml5" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/wysihtml5/0.3.0/wysihtml5.min.js"); 
            console.log("wysihtml5 Loaded Successfully");
            }
            
            
            if (args[i] == "x-editable" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.1/bootstrap-editable/js/bootstrap-editable.min.js"); 
            console.log("x-editable Loaded Successfully");
            }
            
            
            if (args[i] == "x-tag" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/x-tag/1.5.11/x-tag-core.min.js"); 
            console.log("x-tag Loaded Successfully");
            }
            
            
            if (args[i] == "x18n" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/x18n/2.0.3/x18n.min.js"); 
            console.log("x18n Loaded Successfully");
            }
            
            
            if (args[i] == "x2js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/x2js/1.2.0/xml2json.min.js"); 
            console.log("x2js Loaded Successfully");
            }
            
            
            if (args[i] == "xcharts" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xcharts/0.3.0/xcharts.min.js"); 
            console.log("xcharts Loaded Successfully");
            }
            
            
            if (args[i] == "xdomain" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xdomain/0.7.5/xdomain.min.js"); 
            console.log("xdomain Loaded Successfully");
            }
            
            
            if (args[i] == "xhook" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xhook/1.4.4/xhook.min.js"); 
            console.log("xhook Loaded Successfully");
            }
            
            
            if (args[i] == "xively-js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xively-js/1.0.4/xivelyjs.min.js"); 
            console.log("xively-js Loaded Successfully");
            }
            
            
            if (args[i] == "xls" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xls/0.7.6/xls.min.js"); 
            console.log("xls Loaded Successfully");
            }
            
            
            if (args[i] == "xlsx" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.11.16/xlsx.min.js"); 
            console.log("xlsx Loaded Successfully");
            }
            
            
            if (args[i] == "xregexp" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xregexp/3.2.0/xregexp-all.min.js"); 
            console.log("xregexp Loaded Successfully");
            }
            
            
            if (args[i] == "xStore" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xStore/2.0.4/xStore.min.js"); 
            console.log("xStore Loaded Successfully");
            }
            
            
            if (args[i] == "xstream" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xstream/11.1.0/xstream.min.js"); 
            console.log("xstream Loaded Successfully");
            }
            
            
            if (args[i] == "xterm" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xterm/2.9.2/xterm.min.js"); 
            console.log("xterm Loaded Successfully");
            }
            
            
            if (args[i] == "xuijs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/xuijs/2.3.2/xui.min.js"); 
            console.log("xuijs Loaded Successfully");
            }
            
            
            if (args[i] == "yadcf" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/yadcf/0.9.2/jquery.dataTables.yadcf.min.js"); 
            console.log("yadcf Loaded Successfully");
            }
            
            
            if (args[i] == "yairEO-validator" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/yairEO-validator/3.0.0/validator.min.js"); 
            console.log("yairEO-validator Loaded Successfully");
            }
            
            
            if (args[i] == "yamljs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/yamljs/0.3.0/yaml.min.js"); 
            console.log("yamljs Loaded Successfully");
            }
            
            
            if (args[i] == "yasgui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/yasgui/2.7.19/yasgui.min.js"); 
            console.log("yasgui Loaded Successfully");
            }
            
            
            if (args[i] == "yasqe" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/yasqe/2.11.18/yasqe.bundled.min.js"); 
            console.log("yasqe Loaded Successfully");
            }
            
            
            if (args[i] == "yasr" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/yasr/2.12.13/yasr.bundled.min.js"); 
            console.log("yasr Loaded Successfully");
            }
            
            
            if (args[i] == "yepnope" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/yepnope/2.0.0/yepnope.min.js"); 
            console.log("yepnope Loaded Successfully");
            }
            
            
            if (args[i] == "youtube-google-analytics" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/youtube-google-analytics/8.1.4/lunametrics-youtube.gtm.min.js"); 
            console.log("youtube-google-analytics Loaded Successfully");
            }
            
            
            if (args[i] == "yui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/yui/3.18.0/yui/yui-min.js"); 
            console.log("yui Loaded Successfully");
            }
            
            
            if (args[i] == "z-schema" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/z-schema/3.19.0/ZSchema-browser-min.js"); 
            console.log("z-schema Loaded Successfully");
            }
            
            
            if (args[i] == "zabuto_calendar" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zabuto_calendar/1.6.3/zabuto_calendar.min.js"); 
            console.log("zabuto_calendar Loaded Successfully");
            }
            
            
            if (args[i] == "zclip" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zclip/1.1.2/jquery.zclip.min.js"); 
            console.log("zclip Loaded Successfully");
            }
            
            
            if (args[i] == "Zebra_datepicker" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/Zebra_datepicker/1.9.7/zebra_datepicker.min.js"); 
            console.log("Zebra_datepicker Loaded Successfully");
            }
            
            
            if (args[i] == "zenscroll" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zenscroll/4.0.0/zenscroll-min.js"); 
            console.log("zenscroll Loaded Successfully");
            }
            
            
            if (args[i] == "zensh-ui-autocomplete" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zensh-ui-autocomplete/0.6.1/autocomplete.min.js"); 
            console.log("zensh-ui-autocomplete Loaded Successfully");
            }
            
            
            if (args[i] == "zepto.fullpage" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zepto.fullpage/0.5.0/zepto.fullpage.min.js"); 
            console.log("zepto.fullpage Loaded Successfully");
            }
            
            
            if (args[i] == "zepto" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js"); 
            console.log("zepto Loaded Successfully");
            }
            
            
            if (args[i] == "zeroclipboard" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.3.0/ZeroClipboard.min.js"); 
            console.log("zeroclipboard Loaded Successfully");
            }
            
            
            if (args[i] == "zingchart-angularjs" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zingchart-angularjs/1.2.0/zingchart-angularjs.min.js"); 
            console.log("zingchart-angularjs Loaded Successfully");
            }
            
            
            if (args[i] == "zingchart-react" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zingchart-react/1.0.6/zingchart-react.min.js"); 
            console.log("zingchart-react Loaded Successfully");
            }
            
            
            if (args[i] == "zingchart" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zingchart/2.6.2/zingchart.min.js"); 
            console.log("zingchart Loaded Successfully");
            }
            
            
            if (args[i] == "zingtouch" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zingtouch/1.0.5/zingtouch.min.js"); 
            console.log("zingtouch Loaded Successfully");
            }
            
            
            if (args[i] == "zone.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.18/zone.min.js"); 
            console.log("zone.js Loaded Successfully");
            }
            
            
            if (args[i] == "zoom.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zoom.js/0.0.1/zoom.min.js"); 
            console.log("zoom.js Loaded Successfully");
            }
            
            
            if (args[i] == "zooming" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zooming/1.2.6/zooming.min.js"); 
            console.log("zooming Loaded Successfully");
            }
            
            
            if (args[i] == "zoomooz" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zoomooz/1.1.6/jquery.zoomooz.min.js"); 
            console.log("zoomooz Loaded Successfully");
            }
            
            
            if (args[i] == "zoomove" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zoomove/1.2.1/zoomove.min.js"); 
            console.log("zoomove Loaded Successfully");
            }
            
            
            if (args[i] == "zrender" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zrender/3.6.1/zrender.min.js"); 
            console.log("zrender Loaded Successfully");
            }
            
            
            if (args[i] == "zTree.v3" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zTree.v3/3.5.29/js/jquery.ztree.all.min.js"); 
            console.log("zTree.v3 Loaded Successfully");
            }
            
            
            if (args[i] == "zuck.js" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.1.0/zuck.min.js"); 
            console.log("zuck.js Loaded Successfully");
            }
            
            
            if (args[i] == "zui" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zui/1.7.0/js/zui.min.js"); 
            console.log("zui Loaded Successfully");
            }
            
            
            if (args[i] == "zumper-angular-payments" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zumper-angular-payments/1.0.7/angular-payments.min.js"); 
            console.log("zumper-angular-payments Loaded Successfully");
            }
            
            
            if (args[i] == "zxcvbn" ) {
            CallJS("https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"); 
            console.log("zxcvbn Loaded Successfully");
            }
            
            

        if (args[i] == "angular" ) {
            CallJS("https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js");
            console.log("angular Loaded Successfully");
        }

  

    } //end for
    
} //end function