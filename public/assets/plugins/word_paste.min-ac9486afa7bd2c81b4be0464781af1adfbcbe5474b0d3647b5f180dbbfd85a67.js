!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(i)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{wordDeniedTags:[],wordDeniedAttrs:[],wordAllowedStyleProps:["font-family","font-size","background","color","width","text-align","vertical-align","background-color","padding","margin","height","margin-top","margin-left","margin-right","margin-bottom","text-decoration","font-weight","font-style"],wordPasteModal:!0}),e.FE.PLUGINS.wordPaste=function(t){function i(){t.events.on("paste.wordPaste",function(e){return S=e,t.opts.wordPasteModal?n():a(!0),!1})}function r(){var e='<div class="fr-word-paste-modal" style="padding: 20px 20px 10px 20px;">';return e+='<p style="text-align: left;">'+t.language.translate("The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?")+"</p>",e+='<div style="text-align: right; margin-top: 50px;"><button class="fr-remove-word fr-command">'+t.language.translate("Clean")+'</button> <button class="fr-keep-word fr-command">'+t.language.translate("Keep")+"</button></div>",e+="</div>"}function n(){if(!w){var i='<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.95 73.23" style="height: 25px; vertical-align: text-bottom; margin-right: 5px; display: inline-block"><defs><style>.a{fill:#2a5699;}.b{fill:#fff;}</style></defs><path class="a" d="M615.15,827.22h5.09V834c9.11.05,18.21-.09,27.32.05a2.93,2.93,0,0,1,3.29,3.25c.14,16.77,0,33.56.09,50.33-.09,1.72.17,3.63-.83,5.15-1.24.89-2.85.78-4.3.84-8.52,0-17,0-25.56,0v6.81h-5.32c-13-2.37-26-4.54-38.94-6.81q0-29.8,0-59.59c13.05-2.28,26.11-4.5,39.17-6.83Z" transform="translate(-575.97 -827.22)"/><path class="b" d="M620.24,836.59h28.1v54.49h-28.1v-6.81h22.14v-3.41H620.24v-4.26h22.14V873.2H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24V846h22.14v-3.41H620.24Zm-26.67,15c1.62-.09,3.24-.16,4.85-.25,1.13,5.75,2.29,11.49,3.52,17.21,1-5.91,2-11.8,3.06-17.7,1.7-.06,3.41-.15,5.1-.26-1.92,8.25-3.61,16.57-5.71,24.77-1.42.74-3.55,0-5.24.09-1.13-5.64-2.45-11.24-3.47-16.9-1,5.5-2.29,10.95-3.43,16.42q-2.45-.13-4.92-.3c-1.41-7.49-3.07-14.93-4.39-22.44l4.38-.18c.88,5.42,1.87,10.82,2.64,16.25,1.2-5.57,2.43-11.14,3.62-16.71Z" transform="translate(-575.97 -827.22)"/></svg> '+t.language.translate("Word Paste Detected")+"</h4>",n=r(),l=t.modals.create(x,i,n),a=l.$body;w=l.$modal,l.$modal.addClass("fr-middle"),t.events.bindClick(a,"button.fr-remove-word",function(){(w.data("instance")||t).wordPaste.clean()}),t.events.bindClick(a,"button.fr-keep-word",function(){(w.data("instance")||t).wordPaste.clean(!0)}),t.events.$on(e(t.o_win),"resize",function(){t.modals.resize(x)})}t.modals.show(x),t.modals.resize(x)}function l(){t.modals.hide(x)}function a(e){var i=t.opts.wordAllowedStyleProps;e||(t.opts.wordAllowedStyleProps=[]),S=S.replace(/^\n*/g,"").replace(/^ /g,""),0===S.indexOf("<colgroup>")&&(S="<table>"+S+"</table>"),S=T(S,t.paste.getRtfClipboard()),S=t.paste.removeEmptyTags(S),l(),t.paste.clean(S,!0,!0),t.opts.wordAllowedStyleProps=i}function s(e){e.parentNode&&e.parentNode.removeChild(e)}function o(e,t){if(t(e))for(var i=e.firstChild;i;){var r=i,n=i.previousSibling;i=i.nextSibling,o(r,t),r.previousSibling||r.nextSibling||r.parentNode||!i||n==i.previousSibling||!i.parentNode?r.previousSibling||r.nextSibling||r.parentNode||!i||i.previousSibling||i.nextSibling||i.parentNode||(n?i=n.nextSibling?n.nextSibling.nextSibling:null:e.firstChild&&(i=e.firstChild.nextSibling)):i=n?n.nextSibling:e.firstChild}}function d(e){if(!e.getAttribute("style")||!/mso-list:[\s]*l/gi.test(e.getAttribute("style").replace(/\n/gi,"")))return!1;try{if(!e.querySelector('[style="mso-list:Ignore"]'))return!1}catch(e){return!1}return!0}function g(e){return e.getAttribute("style").replace(/\n/gi,"").replace(/.*level([0-9]+?).*/gi,"$1")}function f(e,t){var i=e.cloneNode(!0);if(i.firstElementChild&&"A"==i.firstElementChild.tagName&&(i=i.firstElementChild),-1!=["H1","H2","H3","H4","H5","H6"].indexOf(e.tagName)){var r=document.createElement(e.tagName.toLowerCase());r.setAttribute("style",e.getAttribute("style")),r.innerHTML=i.innerHTML,i.innerHTML=r.outerHTML}o(i,function(e){return e.nodeType==Node.ELEMENT_NODE&&("mso-list:Ignore"==e.getAttribute("style")&&e.parentNode.removeChild(e),A(e,t)),!0});var n=i.innerHTML;return n=n.replace(/<!--[\s\S]*?-->/gi,"")}function u(e,t){var i=/[0-9a-zA-Z]./gi,r=!1;e.firstElementChild&&e.firstElementChild.firstElementChild&&e.firstElementChild.firstElementChild.firstChild&&!(r=r||i.test(e.firstElementChild.firstElementChild.firstChild.data||""))&&e.firstElementChild.firstElementChild.firstElementChild&&e.firstElementChild.firstElementChild.firstElementChild.firstChild&&(r=r||i.test(e.firstElementChild.firstElementChild.firstElementChild.firstChild.data||""));var n=r?"ol":"ul",l=g(e),a="<"+n+"><li>"+f(e,t),o=e.nextElementSibling,p=e.parentNode;for(s(e),e=null;o&&d(o);){var m=o.previousElementSibling,c=g(o);if(c>l)a+=u(o,t).outerHTML;else{if(c<l)break;a+="</li><li>"+f(o,t)}if(l=c,o.previousElementSibling||o.nextElementSibling||o.parentNode){var h=o;o=o.nextElementSibling,s(h),h=null}else o=m?m.nextElementSibling:p.firstElementChild}a+="</li></"+n+">";var v=document.createElement("div");return v.innerHTML=a,v.firstElementChild}function p(e,t){for(var i=document.createElement(t),r=0;r<e.attributes.length;r++){var n=e.attributes[r].name;i.setAttribute(n,e.getAttribute(n))}return i.innerHTML=e.innerHTML,e.parentNode.replaceChild(i,e),i}function m(i,r){t.node.clearAttributes(i);for(var n=i.firstElementChild,l=0,a=!1,o=null;n;){n.firstElementChild&&-1!=n.firstElementChild.tagName.indexOf("W:")&&(n.innerHTML=n.firstElementChild.innerHTML),o=n.getAttribute("width"),o||a||(a=!0),l+=parseInt(o,10),(!n.firstChild||n.firstChild&&n.firstChild.data==e.FE.UNICODE_NBSP)&&(n.firstChild&&s(n.firstChild),n.innerHTML="<br>");for(var g=n.firstElementChild,f=1==n.children.length;g;){if("P"==g.tagName&&!d(g)){var u=null;1==g.children.length&&g.firstElementChild&&"SPAN"==g.firstElementChild.tagName?'<span lang="EN-US">'===t.node.openTagString(g.firstElementChild)?g.firstElementChild.outerHTML=g.firstElementChild.innerHTML:(u=g.firstElementChild,f||(u=p(u,"div")),f?v(n,g.getAttribute("style")):v(u,g.getAttribute("style")),n.replaceChild(u,g)):(u=p(g,f?"span":"div"),!f&&u.getAttribute("align")&&u.removeAttribute("align")),u&&(g=u),f&&c(g)}g=g.nextElementSibling}if(r){var m=n.getAttribute("class");if(m){m=h(m);var b=m.match(/xl[0-9]+/gi);if(b){var E=b[0],C="."+E;r[C]&&v(n,r[C])}}r.td&&v(n,r.td)}var A=n.getAttribute("style");A&&(A=h(A))&&";"!=A.slice(-1)&&(A+=";");var y=n.getAttribute("valign");if(!y&&A){var N=A.match(/vertical-align:.+?[; "]{1,1}/gi);N&&(y=N[N.length-1].replace(/vertical-align:(.+?)[; "]{1,1}/gi,"$1"))}var T=null;if(A){var w=A.match(/text-align:.+?[; "]{1,1}/gi);w&&(T=w[w.length-1].replace(/text-align:(.+?)[; "]{1,1}/gi,"$1")),"general"==T&&(T=null)}var S=null;if(A){var x=A.match(/background:.+?[; "]{1,1}/gi);x&&(S=x[x.length-1].replace(/background:(.+?)[; "]{1,1}/gi,"$1"))}var M=n.getAttribute("colspan"),H=n.getAttribute("rowspan");M&&n.setAttribute("colspan",M),H&&n.setAttribute("rowspan",H),y&&(n.style["vertical-align"]=y),T&&(n.style["text-align"]=T),S&&(n.style["background-color"]=S),o&&n.setAttribute("width",o),n=n.nextElementSibling}for(n=i.firstElementChild;n;)o=n.getAttribute("width"),a?n.removeAttribute("width"):n.setAttribute("width",100*parseInt(o,10)/l+"%"),n=n.nextElementSibling}function c(e){var t=e.parentNode,i=e.getAttribute("align");i&&(t&&"TD"==t.tagName?(t.setAttribute("style",t.getAttribute("style")+"text-align:"+i+";"),e.removeAttribute("align")):(e.style["text-align"]=i,e.removeAttribute("align")))}function h(e){return e.replace(/\n|\r|\n\r|&quot;/g,"")}function v(e,t,i){if(t){var r=e.getAttribute("style");r&&";"!=r.slice(-1)&&(r+=";"),t&&";"!=t.slice(-1)&&(t+=";"),t=t.replace(/\n/gi,"");var n=null;n=i?(r||"")+t:t+(r||""),e.setAttribute("style",n)}}function b(e){var t=e.getAttribute("style");if(t){(t=h(t))&&";"!=t.slice(-1)&&(t+=";");var i=t.match(/(^|\S+?):.+?;{1,1}/gi);if(i){for(var r={},n=0;n<i.length;n++){var l=i[n],a=l.split(":");2==a.length&&("text-align"==a[0]&&"SPAN"==e.tagName||(r[a[0]]=a[1]))}var s="";for(var o in r)if(r.hasOwnProperty(o)){if("font-size"==o&&"pt;"==r[o].slice(-3)){var d=null;try{d=parseFloat(r[o].slice(0,-3),10)}catch(e){}d&&(d=Math.round(1.33*d),r[o]=d+"px;")}s+=o+":"+r[o]}s&&e.setAttribute("style",s)}}}function E(e){for(var t=e.match(/[0-9a-f]{2}/gi),i=[],r=0;r<t.length;r++)i.push(String.fromCharCode(parseInt(t[r],16)));var n=i.join("");return btoa(n)}function C(t,i){if(i){var r;if("IMG"==t.tagName){var n=t.getAttribute("src");if(!n||-1==n.indexOf("file://"))return;r=M[t.getAttribute("v:shapes")]}else r=t.parentNode.getAttribute("o:spid");if(r){var l="hplid"+r.substring(8),a=i.split(l);if(!a||2==a.length){var s=a[1].split("bliptag");if(!(s&&s.length<2)){var o=null;if(-1!=s[0].indexOf("pngblip")?o="image/png":-1!=s[0].indexOf("jpegblip")&&(o="image/jpeg"),o){var d=s[1].split("}");if(!(d&&d.length<2)){var g;if(d.length>2&&-1!=d[0].indexOf("blipuid"))g=d[1].split(" ");else{if((g=d[0].split(" "))&&g.length<2)return;g.shift()}var f=g.join(""),u=E(f),p="data:"+o+";base64,"+u;"IMG"===t.tagName?(t.src=p,t.setAttribute("data-fr-image-pasted",!0)):e(t.parentNode).before('<img data-fr-image-pasted="true" src="'+p+'" style="'+t.parentNode.getAttribute("style")+'">').remove()}}}}}}}function A(t,i){var r=t.tagName,n=r.toLowerCase();if(t.firstElementChild&&("I"==t.firstElementChild.tagName?p(t.firstElementChild,"em"):"B"==t.firstElementChild.tagName&&p(t.firstElementChild,"strong")),-1!=["SCRIPT","APPLET","EMBED","NOFRAMES","NOSCRIPT"].indexOf(r))return s(t),!1;"O:P"==r&&"&nbsp;"==t.innerHTML&&(t.innerHTML=e.FE.INVISIBLE_SPACE);var l=-1,a=["META","LINK","XML","ST1:","O:","W:","FONT"];for(l=0;l<a.length;l++)if(-1!=r.indexOf(a[l]))return t.innerHTML?(t.outerHTML=t.innerHTML,s(t),!1):(s(t),!1);if("TD"!=r){var o=t.getAttribute("class");if(i&&o){o=h(o);var d=o.split(" ");for(l=0;l<d.length;l++){var g=d[l],f=[],u="."+g;f.push(u),u=n+u,f.push(u);for(var b=0;b<f.length;b++)i[f[b]]&&v(t,i[f[b]])}}i&&i[n]&&v(t,i[n])}if(-1!=["P","H1","H2","H3","H4","H5","H6","PRE"].indexOf(r)){var E=t.getAttribute("class");if(E&&(i&&i[r.toLowerCase()+"."+E]&&v(t,i[r.toLowerCase()+"."+E]),-1!=E.toLowerCase().indexOf("mso"))){var C=h(E);C=C.replace(/[0-9a-z-_]*mso[0-9a-z-_]*/gi,""),C?t.setAttribute("class",C):t.removeAttribute("class")}var A=t.getAttribute("style");if(A){var y=A.match(/text-align:.+?[; "]{1,1}/gi);y&&y[y.length-1].replace(/(text-align:.+?[; "]{1,1})/gi,"$1")}c(t)}if("TR"==r&&m(t,i),"A"==r&&!t.attributes.getNamedItem("href")&&t.innerHTML&&(t.outerHTML=t.innerHTML),"TD"!=r&&"TH"!=r||t.innerHTML||(t.innerHTML="<br>"),"TABLE"==r&&(t.style.width="100%"),t.getAttribute("lang")&&t.removeAttribute("lang"),t.getAttribute("style")&&-1!=t.getAttribute("style").toLowerCase().indexOf("mso")){var N=h(t.getAttribute("style"));N=N.replace(/[0-9a-z-_]*mso[0-9a-z-_]*:.+?(;{1,1}|$)/gi,""),N?t.setAttribute("style",N):t.removeAttribute("style")}return!0}function y(e){var t={},i=e.getElementsByTagName("style");if(i.length){var r=i[0],n=r.innerHTML.match(/[\S ]+\s+{[\s\S]+?}/gi);if(n)for(var l=0;l<n.length;l++){var a=n[l],s=a.replace(/([\S ]+\s+){[\s\S]+?}/gi,"$1"),o=a.replace(/[\S ]+\s+{([\s\S]+?)}/gi,"$1");s=s.replace(/^[\s]|[\s]$/gm,""),o=o.replace(/^[\s]|[\s]$/gm,""),s=s.replace(/\n|\r|\n\r/g,""),o=o.replace(/\n|\r|\n\r/g,"");for(var d=s.split(", "),g=0;g<d.length;g++)t[d[g]]=o}}return t}function N(e){for(var t=e.split("v:shape"),i=1;i<t.length;i++){var r=t[i],n=r.split(' id="')[1];if(n&&n.length>1){n=n.split('"')[0];var l=r.split(' o:spid="')[1];l&&l.length>1&&(l=l.split('"')[0],M[n]=l)}}}function T(i,r){i=i.replace(/[.\s\S\w\W<>]*(<html[^>]*>[.\s\S\w\W<>]*<\/html>)[.\s\S\w\W<>]*/gi,"$1"),N(i);var n=new DOMParser,l=n.parseFromString(i,"text/html"),a=l.head,g=l.body,f=y(a);o(g,function(t){if(t.nodeType==Node.TEXT_NODE&&/\n|\u00a0/.test(t.data)){if(!/\S/.test(t.data))return t.data==e.FE.UNICODE_NBSP?(t.data="\u200b",!0):(s(t),!1);t.data=t.data.replace(/\n/gi," ")}return!0}),o(g,function(e){return e.nodeType!=Node.ELEMENT_NODE||"V:IMAGEDATA"!=e.tagName&&"IMG"!=e.tagName||C(e,r),!0}),o(g,function(e){if(e.nodeType==Node.TEXT_NODE)return e.data=e.data.replace(/<br>(\n|\r)/gi,"<br>"),!1;if(e.nodeType==Node.ELEMENT_NODE){if(d(e)){var t=e.parentNode,i=e.previousSibling,r=u(e,f),n=null;return n=i?i.nextSibling:t.firstChild,n?t.insertBefore(r,n):t.appendChild(r),!1}return A(e,f)}return e.nodeType!=Node.COMMENT_NODE||(s(e),!1)}),o(g,function(e){if(e.nodeType==Node.ELEMENT_NODE){var t=e.tagName;if(!e.innerHTML&&-1==["BR","IMG"].indexOf(t)){for(var i=e.parentNode;i&&(s(e),e=i,!e.innerHTML);)i=e.parentNode;return!1}b(e)}return!0});var p=g.outerHTML,m=t.opts.htmlAllowedStyleProps;return t.opts.htmlAllowedStyleProps=t.opts.wordAllowedStyleProps,p=t.clean.html(p,t.opts.wordDeniedTags,t.opts.wordDeniedAttrs,!1),t.opts.htmlAllowedStyleProps=m,p}var w,S,x="word_paste",M={};return{_init:i,clean:a}}});