/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.POPUP_TEMPLATES,{"image.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_BY_URL_LAYER_][_PROGRESS_BAR_]","image.edit":"[_BUTTONS_]","image.alt":"[_BUTTONS_][_ALT_LAYER_]","image.size":"[_BUTTONS_][_SIZE_LAYER_]"}),a.extend(a.FE.DEFAULTS,{imageInsertButtons:["imageBack","|","imageUpload","imageByURL"],imageEditButtons:["imageReplace","imageAlign","imageRemove","|","imageLink","linkOpen","linkEdit","linkRemove","-","imageDisplay","imageStyle","imageAlt","imageSize"],imageAltButtons:["imageBack","|"],imageSizeButtons:["imageBack","|"],imageUploadURL:"https://i.froala.com/upload",imageUploadParam:"file",imageUploadParams:{},imageUploadToS3:!1,imageUploadMethod:"POST",imageMaxSize:10485760,imageAllowedTypes:["jpeg","jpg","png","gif","svg+xml"],imageResize:!0,imageResizeWithPercent:!1,imageRoundPercent:!1,imageDefaultWidth:300,imageDefaultAlign:"center",imageDefaultDisplay:"block",imageSplitHTML:!1,imageStyles:{"fr-rounded":"Rounded","fr-bordered":"Bordered"},imageMove:!0,imageMultipleStyles:!0,imageTextNear:!0,imagePaste:!0,imagePasteProcess:!1,imageMinWidth:16,imageOutputSize:!1,imageDefaultMargin:5}),a.FE.PLUGINS.image=function(b){function c(){var a=b.popups.get("image.insert"),c=a.find(".fr-image-by-url-layer input");c.val(""),xa&&c.val(xa.attr("src")),c.trigger("change")}function d(){var a=b.$tb.find('.fr-command[data-cmd="insertImage"]'),c=b.popups.get("image.insert");if(c||(c=L()),s(),!c.hasClass("fr-active"))if(b.popups.refresh("image.insert"),b.popups.setContainer("image.insert",b.$tb),a.is(":visible")){var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("image.insert",d,e,a.outerHeight())}else b.position.forSelection(c),b.popups.show("image.insert")}function e(){var a=b.popups.get("image.edit");if(a||(a=q()),a){b.popups.setContainer("image.edit",b.$sc),b.popups.refresh("image.edit");var c=xa.offset().left+xa.outerWidth()/2,d=xa.offset().top+xa.outerHeight();b.popups.show("image.edit",c,d,xa.outerHeight())}}function f(){s()}function g(a){a.hasClass("fr-dii")||a.hasClass("fr-dib")||(a.addClass("fr-fi"+ma(a)[0]),a.addClass("fr-di"+na(a)[0]),a.css("margin",""),a.css("float",""),a.css("display",""),a.css("z-index",""),a.css("position",""),a.css("overflow",""),a.css("vertical-align",""))}function h(a){ka(a,a.hasClass("fr-dib")?"block":a.hasClass("fr-dii")?"inline":null,a.hasClass("fr-fil")?"left":a.hasClass("fr-fir")?"right":ma(a)),a.removeClass("fr-dib fr-dii fr-fir fr-fil")}function i(){for(var c="IMG"==b.el.tagName?[b.el]:b.el.querySelectorAll("img"),d=0;d<c.length;d++){var e=a(c[d]);!b.opts.htmlUntouched&&b.opts.useClasses?((b.opts.imageEditButtons.indexOf("imageAlign")>=0||b.opts.imageEditButtons.indexOf("imageDisplay")>=0)&&g(e),b.opts.imageTextNear||e.removeClass("fr-dii").addClass("fr-dib")):b.opts.htmlUntouched||b.opts.useClasses||(b.opts.imageEditButtons.indexOf("imageAlign")>=0||b.opts.imageEditButtons.indexOf("imageDisplay")>=0)&&h(e),b.opts.iframe&&e.on("load",b.size.syncIframe)}}function j(c){void 0===c&&(c=!0);var d,e=Array.prototype.slice.call(b.el.querySelectorAll("img")),f=[];for(d=0;d<e.length;d++)f.push(e[d].getAttribute("src")),a(e[d]).toggleClass("fr-draggable",b.opts.imageMove),""===e[d].getAttribute("class")&&e[d].removeAttribute("class"),""===e[d].getAttribute("style")&&e[d].removeAttribute("style");if(Ka)for(d=0;d<Ka.length;d++)f.indexOf(Ka[d].getAttribute("src"))<0&&b.events.trigger("image.removed",[a(Ka[d])]);if(Ka&&c){var g=[];for(d=0;d<Ka.length;d++)g.push(Ka[d].getAttribute("src"));for(d=0;d<e.length;d++)g.indexOf(e[d].getAttribute("src"))<0&&b.events.trigger("image.loaded",[a(e[d])])}Ka=e}function k(){if(ya||Y(),!xa)return!1;var a=b.$wp||b.$sc;a.append(ya),ya.data("instance",b);var c=a.scrollTop()-("static"!=a.css("position")?a.offset().top:0),d=a.scrollLeft()-("static"!=a.css("position")?a.offset().left:0);d-=b.helpers.getPX(a.css("border-left-width")),c-=b.helpers.getPX(a.css("border-top-width")),b.$el.is("img")&&b.$sc.is("body")&&(c=0,d=0),ya.css("top",(b.opts.iframe?xa.offset().top:xa.offset().top+c)-1).css("left",(b.opts.iframe?xa.offset().left:xa.offset().left+d)-1).css("width",xa.get(0).getBoundingClientRect().width).css("height",xa.get(0).getBoundingClientRect().height).addClass("fr-active")}function l(a){return'<div class="fr-handler fr-h'+a+'"></div>'}function m(c){if(!b.core.sameInstance(ya))return!0;if(c.preventDefault(),c.stopPropagation(),b.$el.find("img.fr-error").left)return!1;b.undo.canDo()||b.undo.saveStep();var d=c.pageX||c.originalEvent.touches[0].pageX;if("mousedown"==c.type){var e=b.$oel.get(0),f=e.ownerDocument,g=f.defaultView||f.parentWindow,h=!1;try{h=g.location!=g.parent.location&&!(g.$&&g.$.FE)}catch(k){}h&&g.frameElement&&(d+=b.helpers.getPX(a(g.frameElement).offset().left)+g.frameElement.clientLeft)}za=a(this),za.data("start-x",d),za.data("start-width",xa.width()),za.data("start-height",xa.height());var i=xa.width();if(b.opts.imageResizeWithPercent){var j=xa.parentsUntil(b.$el,b.html.blockTagsQuery()).get(0)||b.el;xa.css("width",(i/a(j).outerWidth()*100).toFixed(2)+"%")}else xa.css("width",i);Aa.show(),b.popups.hideAll(),ia()}function n(c){if(!b.core.sameInstance(ya))return!0;var d;if(za&&xa){if(c.preventDefault(),b.$el.find("img.fr-error").left)return!1;var e=c.pageX||(c.originalEvent.touches?c.originalEvent.touches[0].pageX:null);if(!e)return!1;var f=za.data("start-x"),g=e-f,h=za.data("start-width");if((za.hasClass("fr-hnw")||za.hasClass("fr-hsw"))&&(g=0-g),b.opts.imageResizeWithPercent){var i=xa.parentsUntil(b.$el,b.html.blockTagsQuery()).get(0)||b.el;h=((h+g)/a(i).outerWidth()*100).toFixed(2),b.opts.imageRoundPercent&&(h=Math.round(h)),xa.css("width",h+"%"),d=(b.helpers.getPX(xa.css("width"))/a(i).outerWidth()*100).toFixed(2),d!==h&&xa.css("width",d+"%"),xa.css("height","").removeAttr("height")}else h+g>=b.opts.imageMinWidth&&xa.css("width",h+g),d=b.helpers.getPX(xa.css("width")),d!==h+g&&xa.css("width",d),(xa.attr("style")||"").match(/(^height:)|(; *height:)/)&&xa.css("height",za.data("start-height")*xa.width()/za.data("start-width"));k(),b.events.trigger("image.resize",[va()])}}function o(a){if(!b.core.sameInstance(ya))return!0;if(za&&xa){if(a&&a.stopPropagation(),b.$el.find("img.fr-error").left)return!1;za=null,Aa.hide(),k(),e(),b.undo.saveStep(),b.events.trigger("image.resizeEnd",[va()])}}function p(a,c,d){b.edit.on(),xa&&xa.addClass("fr-error"),u(b.language.translate("Something went wrong. Please try again.")),!xa&&d&&Z(d),b.events.trigger("image.error",[{code:a,message:Ja[a]},c,d])}function q(a){if(a)return b.$wp&&b.events.$on(b.$wp,"scroll",function(){xa&&b.popups.isVisible("image.edit")&&(b.events.disableBlur(),w(xa))}),!0;var c="";if(b.opts.imageEditButtons.length>0){c+='<div class="fr-buttons">',c+=b.button.buildList(b.opts.imageEditButtons),c+="</div>";var d={buttons:c};return b.popups.create("image.edit",d)}return!1}function r(a){var c=b.popups.get("image.insert");if(c||(c=L()),c.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),c.find(".fr-image-progress-bar-layer").addClass("fr-active"),c.find(".fr-buttons").hide(),xa){b.popups.setContainer("image.insert",b.$sc);var d=xa.offset().left+xa.width()/2,e=xa.offset().top+xa.height();b.popups.show("image.insert",d,e,xa.outerHeight())}void 0===a&&t(b.language.translate("Uploading"),0)}function s(a){var c=b.popups.get("image.insert");if(c&&(c.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),c.find(".fr-image-progress-bar-layer").removeClass("fr-active"),c.find(".fr-buttons").show(),a||b.$el.find("img.fr-error").length)){if(b.events.focus(),b.$el.find("img.fr-error").length&&(b.$el.find("img.fr-error").remove(),b.undo.saveStep(),b.undo.run(),b.undo.dropRedo()),!b.$wp&&xa){var d=xa;ga(!0),b.selection.setAfter(d.get(0)),b.selection.restore()}b.popups.hide("image.insert")}}function t(a,c){var d=b.popups.get("image.insert");if(d){var e=d.find(".fr-image-progress-bar-layer");e.find("h3").text(a+(c?" "+c+"%":"")),e.removeClass("fr-error"),c?(e.find("div").removeClass("fr-indeterminate"),e.find("div > span").css("width",c+"%")):e.find("div").addClass("fr-indeterminate")}}function u(a){r();var c=b.popups.get("image.insert"),d=c.find(".fr-image-progress-bar-layer");d.addClass("fr-error");var e=d.find("h3");e.text(a),b.events.disableBlur(),e.focus()}function v(){var a=b.popups.get("image.insert"),c=a.find(".fr-image-by-url-layer input");c.val().length>0&&(r(),t(b.language.translate("Loading image")),y(c.val(),!0,[],xa),c.val(""),c.blur())}function w(a){fa.call(a.get(0))}function x(){var c=a(this);b.popups.hide("image.insert"),c.removeClass("fr-uploading"),c.next().is("br")&&c.next().remove(),w(c),b.events.trigger("image.loaded",[c])}function y(a,c,d,e,f){b.edit.off(),t(b.language.translate("Loading image")),c&&(a=b.helpers.sanitizeURL(a));var g=new Image;g.onload=function(){var c,g;if(e){b.undo.canDo()||e.hasClass("fr-uploading")||b.undo.saveStep();var h=e.data("fr-old-src");e.data("fr-image-pasted")&&(h=null),b.$wp?(c=e.clone().removeData("fr-old-src").removeClass("fr-uploading").removeAttr("data-fr-image-pasted"),c.off("load"),h&&e.attr("src",h),e.replaceWith(c)):c=e;for(var i=c.get(0).attributes,k=0;k<i.length;k++){var l=i[k];0===l.nodeName.indexOf("data-")&&c.removeAttr(l.nodeName)}if(void 0!==d)for(g in d)d.hasOwnProperty(g)&&"link"!=g&&c.attr("data-"+g,d[g]);c.on("load",x),c.attr("src",a),b.edit.on(),j(!1),b.undo.saveStep(),b.$el.blur(),b.events.trigger(h?"image.replaced":"image.inserted",[c,f])}else c=E(a,d,x),j(!1),b.undo.saveStep(),b.$el.blur(),b.events.trigger("image.inserted",[c,f])},g.onerror=function(){p(Ca)},r(b.language.translate("Loading image")),g.src=a}function z(a){try{if(!1===b.events.trigger("image.uploaded",[a],!0))return b.edit.on(),!1;var c=JSON.parse(a);return c.link?c:(p(Da,a),!1)}catch(d){return p(Fa,a),!1}}function A(c){try{var d=a(c).find("Location").text(),e=a(c).find("Key").text();return!1===b.events.trigger("image.uploadedToS3",[d,e,c],!0)?(b.edit.on(),!1):d}catch(f){return p(Fa,c),!1}}function B(a){t(b.language.translate("Loading image"));var c=this.status,d=this.response,e=this.responseXML,f=this.responseText;try{if(b.opts.imageUploadToS3)if(201==c){var g=A(e);g&&y(g,!1,[],a,d||e)}else p(Fa,d||e,a);else if(c>=200&&c<300){var h=z(f);h&&y(h.link,!1,h,a,d||f)}else p(Ea,d||f,a)}catch(i){p(Fa,d||f,a)}}function C(){p(Fa,this.response||this.responseText||this.responseXML)}function D(a){if(a.lengthComputable){var c=a.loaded/a.total*100|0;t(b.language.translate("Uploading"),c)}}function E(c,d,e){var f,g="";if(d&&void 0!==d)for(f in d)d.hasOwnProperty(f)&&"link"!=f&&(g+=" data-"+f+'="'+d[f]+'"');var h=b.opts.imageDefaultWidth;h&&"auto"!=h&&(h+=b.opts.imageResizeWithPercent?"%":"px");var i=a('<img src="'+c+'"'+g+(h?' style="width: '+h+';"':"")+">");ka(i,b.opts.imageDefaultDisplay,b.opts.imageDefaultAlign),i.on("load",e),i.on("error",function(){p(Ia)}),b.edit.on(),b.events.focus(!0),b.selection.restore(),b.undo.saveStep(),b.opts.imageSplitHTML?b.markers.split():b.markers.insert();var j=b.$el.find(".fr-marker");return j.length?(j.parent().is("hr")&&j.parent().after(j),b.node.isLastSibling(j)&&j.parent().hasClass("fr-deletable")&&j.insertAfter(j.parent()),j.replaceWith(i)):b.$el.append(i),b.html.wrap(),b.selection.clear(),i}function F(){b.edit.on(),s(!0)}function G(c,d,e,f){function g(){var e=a(this);e.off("load"),e.addClass("fr-uploading"),e.next().is("br")&&e.next().remove(),b.placeholder.refresh(),w(e),k(),r(),b.edit.off(),c.onload=function(){B.call(c,e)},c.onerror=C,c.upload.onprogress=D,c.onabort=F,e.off("abortUpload").on("abortUpload",function(){4!=c.readyState&&c.abort()}),c.send(d)}var h,i=new FileReader;i.addEventListener("load",function(){var a=i.result;if(i.result.indexOf("svg+xml")<0){for(var c=atob(i.result.split(",")[1]),d=[],e=0;e<c.length;e++)d.push(c.charCodeAt(e));a=window.URL.createObjectURL(new Blob([new Uint8Array(d)],{type:"image/jpeg"}))}f?(f.on("load",g),f.one("error",function(){f.off("load"),f.attr("src",f.data("fr-old-src")),p(Ia)}),b.edit.on(),b.undo.saveStep(),f.data("fr-old-src",f.attr("src")),f.attr("src",a)):h=E(a,null,g)},!1),i.readAsDataURL(e)}function H(a,c){if(void 0!==a&&a.length>0){if(!1===b.events.trigger("image.beforeUpload",[a,c]))return!1;var d=a[0];if(d.name||(d.name=(new Date).getTime()+".jpg"),d.size>b.opts.imageMaxSize)return p(Ga),!1;if(b.opts.imageAllowedTypes.indexOf(d.type.replace(/image\//g,""))<0)return p(Ha),!1;var e;if(b.drag_support.formdata&&(e=b.drag_support.formdata?new FormData:null),e){var f;if(!1!==b.opts.imageUploadToS3){e.append("key",b.opts.imageUploadToS3.keyStart+(new Date).getTime()+"-"+(d.name||"untitled")),e.append("success_action_status","201"),e.append("X-Requested-With","xhr"),e.append("Content-Type",d.type);for(f in b.opts.imageUploadToS3.params)b.opts.imageUploadToS3.params.hasOwnProperty(f)&&e.append(f,b.opts.imageUploadToS3.params[f])}for(f in b.opts.imageUploadParams)b.opts.imageUploadParams.hasOwnProperty(f)&&e.append(f,b.opts.imageUploadParams[f]);e.append(b.opts.imageUploadParam,d,d.name);var g=b.opts.imageUploadURL;b.opts.imageUploadToS3&&(g=b.opts.imageUploadToS3.uploadURL?b.opts.imageUploadToS3.uploadURL:"https://"+b.opts.imageUploadToS3.region+".amazonaws.com/"+b.opts.imageUploadToS3.bucket);G(b.core.getXHR(g,b.opts.imageUploadMethod),e,d,c||xa)}}}function I(c){b.events.$on(c,"dragover dragenter",".fr-image-upload-layer",function(){return a(this).addClass("fr-drop"),!1}),b.events.$on(c,"dragleave dragend",".fr-image-upload-layer",function(){return a(this).removeClass("fr-drop"),!1}),b.events.$on(c,"drop",".fr-image-upload-layer",function(d){d.preventDefault(),d.stopPropagation(),a(this).removeClass("fr-drop");var e=d.originalEvent.dataTransfer;if(e&&e.files){var f=c.data("instance")||b;f.events.disableBlur(),f.image.upload(e.files),f.events.enableBlur()}}),b.helpers.isIOS()&&b.events.$on(c,"touchstart",'.fr-image-upload-layer input[type="file"]',function(){a(this).trigger("click")}),b.events.$on(c,"change",'.fr-image-upload-layer input[type="file"]',function(){if(this.files){var d=c.data("instance")||b;d.events.disableBlur(),c.find("input:focus").blur(),d.events.enableBlur(),d.image.upload(this.files,xa)}a(this).val("")})}function J(c){var d=c.originalEvent.dataTransfer;if(d&&d.files&&d.files.length){var e=d.files[0];if(e&&e.type&&-1!==e.type.indexOf("image")){b.markers.remove(),b.markers.insertAtPoint(c.originalEvent),b.$el.find(".fr-marker").replaceWith(a.FE.MARKERS),0===b.$el.find(".fr-marker").length&&b.selection.setAtEnd(b.el),b.popups.hideAll();var f=b.popups.get("image.insert");f||(f=L()),b.popups.setContainer("image.insert",b.$sc);var g=c.originalEvent.pageX,h=c.originalEvent.pageY;return b.opts.iframe&&(h+=b.$iframe.offset().top,g+=b.$iframe.offset().left),b.popups.show("image.insert",g,h),r(),b.opts.imageAllowedTypes.indexOf(e.type.replace(/image\//g,""))>=0?(ga(!0),H(d.files)):p(Ha),c.preventDefault(),c.stopPropagation(),!1}}}function K(){b.events.$on(b.$el,b._mousedown,"IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;b.helpers.isMobile()||b.selection.clear(),Ba=!0,b.popups.areVisible()&&b.events.disableBlur(),b.browser.msie&&(b.events.disableBlur(),b.$el.attr("contenteditable",!1)),b.draggable||"touchstart"==c.type||c.preventDefault(),c.stopPropagation()}),b.events.$on(b.$el,b._mouseup,"IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;Ba&&(Ba=!1,c.stopPropagation(),b.browser.msie&&(b.$el.attr("contenteditable",!0),b.events.enableBlur()))}),b.events.on("keyup",function(c){if(c.shiftKey&&""===b.selection.text().replace(/\n/g,"")){var d=b.selection.element(),e=b.selection.endElement();d&&"IMG"==d.tagName?w(a(d)):e&&"IMG"==e.tagName&&w(a(e))}},!0),b.events.on("drop",J),b.events.on("mousedown window.mousedown",ha),b.events.on("window.touchmove",ia),b.events.on("mouseup window.mouseup",function(){if(xa)return ga(),!1;ia()}),b.events.on("commands.mousedown",function(a){a.parents(".fr-toolbar").length>0&&ga()}),b.events.on("blur image.hideResizer commands.undo commands.redo element.dropped",function(){Ba=!1,ga(!0)}),b.events.on("modals.hide",function(){xa&&(ta(),b.selection.clear())})}function L(a){if(a)return b.popups.onRefresh("image.insert",c),b.popups.onHide("image.insert",f),!0;var d,e="";b.opts.imageInsertButtons.length>1&&(e='<div class="fr-buttons">'+b.button.buildList(b.opts.imageInsertButtons)+"</div>");var g=b.opts.imageInsertButtons.indexOf("imageUpload"),h=b.opts.imageInsertButtons.indexOf("imageByURL"),i="";g>=0&&(d=" fr-active",h>=0&&g>h&&(d=""),i='<div class="fr-image-upload-layer'+d+' fr-layer" id="fr-image-upload-layer-'+b.id+'"><strong>'+b.language.translate("Drop image")+"</strong><br>("+b.language.translate("or click")+')<div class="fr-form"><input type="file" accept="image/'+b.opts.imageAllowedTypes.join(", image/").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-image-upload-layer-'+b.id+'" role="button"></div></div>');var j="";h>=0&&(d=" fr-active",g>=0&&h>g&&(d=""),j='<div class="fr-image-by-url-layer'+d+' fr-layer" id="fr-image-by-url-layer-'+b.id+'"><div class="fr-input-line"><input id="fr-image-by-url-layer-text-'+b.id+'" type="text" placeholder="http://" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageInsertByURL" tabIndex="2" role="button">'+b.language.translate("Insert")+"</button></div></div>");var k='<div class="fr-image-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="imageDismissError" tabIndex="2" role="button">OK</button></div></div>',l={buttons:e,upload_layer:i,by_url_layer:j,progress_bar:k},m=b.popups.create("image.insert",l);return b.$wp&&b.events.$on(b.$wp,"scroll",function(){xa&&b.popups.isVisible("image.insert")&&sa()}),I(m),m}function M(){if(xa){b.popups.get("image.alt").find("input").val(xa.attr("alt")||"").trigger("change")}}function N(){var a=b.popups.get("image.alt");a||(a=O()),s(),b.popups.refresh("image.alt"),b.popups.setContainer("image.alt",b.$sc);var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.alt",c,d,xa.outerHeight())}function O(a){if(a)return b.popups.onRefresh("image.alt",M),!0;var c="";c='<div class="fr-buttons">'+b.button.buildList(b.opts.imageAltButtons)+"</div>";var d="";d='<div class="fr-image-alt-layer fr-layer fr-active" id="fr-image-alt-layer-'+b.id+'"><div class="fr-input-line"><input id="fr-image-alt-layer-text-'+b.id+'" type="text" placeholder="'+b.language.translate("Alternate Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetAlt" tabIndex="2" role="button">'+b.language.translate("Update")+"</button></div></div>";var e={buttons:c,alt_layer:d},f=b.popups.create("image.alt",e);return b.$wp&&b.events.$on(b.$wp,"scroll.image-alt",function(){xa&&b.popups.isVisible("image.alt")&&N()}),f}function P(a){if(xa){var c=b.popups.get("image.alt");xa.attr("alt",a||c.find("input").val()||""),c.find("input:focus").blur(),w(xa)}}function Q(){if(xa){var a=b.popups.get("image.size");a.find('input[name="width"]').val(xa.get(0).style.width).trigger("change"),a.find('input[name="height"]').val(xa.get(0).style.height).trigger("change")}}function R(){var a=b.popups.get("image.size");a||(a=S()),s(),b.popups.refresh("image.size"),b.popups.setContainer("image.size",b.$sc);var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.size",c,d,xa.outerHeight())}function S(a){if(a)return b.popups.onRefresh("image.size",Q),!0;var c="";c='<div class="fr-buttons">'+b.button.buildList(b.opts.imageSizeButtons)+"</div>";var d="";d='<div class="fr-image-size-layer fr-layer fr-active" id="fr-image-size-layer-'+b.id+'"><div class="fr-image-group"><div class="fr-input-line"><input id="fr-image-size-layer-width-'+b.id+'" type="text" name="width" placeholder="'+b.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input id="fr-image-size-layer-height'+b.id+'" type="text" name="height" placeholder="'+b.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetSize" tabIndex="2" role="button">'+b.language.translate("Update")+"</button></div></div>";var e={buttons:c,size_layer:d},f=b.popups.create("image.size",e);return b.$wp&&b.events.$on(b.$wp,"scroll.image-size",function(){xa&&b.popups.isVisible("image.size")&&R()}),f}function T(a,c){if(xa){var d=b.popups.get("image.size");a=a||d.find('input[name="width"]').val()||"",c=c||d.find('input[name="height"]').val()||"";var e=/^[\d]+((px)|%)*$/g;a.match(e)?xa.css("width",a):xa.css("width",""),c.match(e)?xa.css("height",c):xa.css("height",""),d.find("input:focus").blur(),w(xa)}}function U(a){var c,d,e=b.popups.get("image.insert");if(xa||b.opts.toolbarInline)xa&&(d=xa.offset().top+xa.outerHeight());else{var f=b.$tb.find('.fr-command[data-cmd="insertImage"]');c=f.offset().left+f.outerWidth()/2,d=f.offset().top+(b.opts.toolbarBottom?10:f.outerHeight()-10)}!xa&&b.opts.toolbarInline&&(d=e.offset().top-b.helpers.getPX(e.css("margin-top")),e.hasClass("fr-above")&&(d+=e.outerHeight())),e.find(".fr-layer").removeClass("fr-active"),e.find(".fr-"+a+"-layer").addClass("fr-active"),b.popups.show("image.insert",c,d,xa?xa.outerHeight():0),b.accessibility.focusPopup(e)}function V(a){b.popups.get("image.insert").find(".fr-image-upload-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function W(a){b.popups.get("image.insert").find(".fr-image-by-url-layer").hasClass("fr-active")&&a.addClass("fr-active").attr("aria-pressed",!0)}function X(a,b,c,d){return a.pageX=b,m.call(this,a),a.pageX=a.pageX+c*Math.floor(Math.pow(1.1,d)),n.call(this,a),o.call(this,a),++d}function Y(){var c;if(b.shared.$image_resizer?(ya=b.shared.$image_resizer,Aa=b.shared.$img_overlay,b.events.on("destroy",function(){ya.removeClass("fr-active").appendTo(a("body:first"))},!0)):(b.shared.$image_resizer=a('<div class="fr-image-resizer"></div>'),ya=b.shared.$image_resizer,b.events.$on(ya,"mousedown",function(a){a.stopPropagation()},!0),b.opts.imageResize&&(ya.append(l("nw")+l("ne")+l("sw")+l("se")),b.shared.$img_overlay=a('<div class="fr-image-overlay"></div>'),Aa=b.shared.$img_overlay,c=ya.get(0).ownerDocument,a(c).find("body:first").append(Aa))),b.events.on("shared.destroy",function(){ya.html("").removeData().remove(),ya=null,b.opts.imageResize&&(Aa.remove(),Aa=null)},!0),b.helpers.isMobile()||b.events.$on(a(b.o_win),"resize",function(){xa&&!xa.hasClass("fr-uploading")?ga(!0):xa&&(k(),sa(),r(!1))}),b.opts.imageResize){c=ya.get(0).ownerDocument,b.events.$on(ya,b._mousedown,".fr-handler",m),b.events.$on(a(c),b._mousemove,n),b.events.$on(a(c.defaultView||c.parentWindow),b._mouseup,o),b.events.$on(Aa,"mouseleave",o);var d=1,e=null,f=0;b.events.on("keydown",function(c){if(xa){var g=-1!=navigator.userAgent.indexOf("Mac OS X")?c.metaKey:c.ctrlKey,h=c.which;(h!==e||c.timeStamp-f>200)&&(d=1),(h==a.FE.KEYCODE.EQUALS||b.browser.mozilla&&h==a.FE.KEYCODE.FF_EQUALS)&&g&&!c.altKey?d=X.call(this,c,1,1,d):(h==a.FE.KEYCODE.HYPHEN||b.browser.mozilla&&h==a.FE.KEYCODE.FF_HYPHEN)&&g&&!c.altKey?d=X.call(this,c,2,-1,d):b.keys.ctrlKey(c)||h!=a.FE.KEYCODE.ENTER||(xa.before("<br>"),w(xa)),e=h,f=c.timeStamp}},!0),b.events.on("keyup",function(){d=1})}}function Z(c){(c=c||xa)&&!1!==b.events.trigger("image.beforeRemove",[c])&&(b.popups.hideAll(),ta(),ga(!0),b.undo.canDo()||b.undo.saveStep(),c.get(0)==b.el?c.removeAttr("src"):("A"==c.get(0).parentNode.tagName?(b.selection.setBefore(c.get(0).parentNode)||b.selection.setAfter(c.get(0).parentNode)||c.parent().after(a.FE.MARKERS),a(c.get(0).parentNode).remove()):(b.selection.setBefore(c.get(0))||b.selection.setAfter(c.get(0))||c.after(a.FE.MARKERS),c.remove()),b.html.fillEmptyBlocks(),b.selection.restore()),b.undo.saveStep())}function $(c){var d=c.which;if(xa&&(d==a.FE.KEYCODE.BACKSPACE||d==a.FE.KEYCODE.DELETE))return c.preventDefault(),c.stopPropagation(),Z(),!1;if(xa&&d==a.FE.KEYCODE.ESC){var e=xa;return ga(!0),b.selection.setAfter(e.get(0)),b.selection.restore(),c.preventDefault(),!1}if(xa&&(d==a.FE.KEYCODE.ARROW_LEFT||d==a.FE.KEYCODE.ARROW_RIGHT)){var f=xa.get(0);return ga(!0),d==a.FE.KEYCODE.ARROW_LEFT?b.selection.setBefore(f):b.selection.setAfter(f),b.selection.restore(),c.preventDefault(),!1}return xa&&d!=a.FE.KEYCODE.F10&&!b.keys.isBrowserAction(c)?(c.preventDefault(),c.stopPropagation(),!1):void 0}function _(a){if(a&&"IMG"==a.tagName)b.node.hasClass(a,"fr-uploading")||b.node.hasClass(a,"fr-error")?a.parentNode.removeChild(a):b.node.hasClass(a,"fr-draggable")&&a.classList.remove("fr-draggable");else if(a&&a.nodeType==Node.ELEMENT_NODE)for(var c=a.querySelectorAll("img.fr-uploading, img.fr-error, img.fr-draggable"),d=0;d<c.length;d++)_(c[d])}function aa(){if(K(),"IMG"==b.el.tagName&&b.$el.addClass("fr-view"),b.events.$on(b.$el,b.helpers.isMobile()&&!b.helpers.isWindowsPhone()?"touchend":"click","IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',fa),b.helpers.isMobile()&&(b.events.$on(b.$el,"touchstart","IMG"==b.el.tagName?null:'img:not([contenteditable="false"])',function(){La=!1}),b.events.$on(b.$el,"touchmove",function(){La=!0})),b.$wp?(b.events.on("window.keydown keydown",$,!0),b.events.on("keyup",function(b){if(xa&&b.which==a.FE.KEYCODE.ENTER)return!1},!0)):b.events.$on(b.$win,"keydown",$),b.events.on("toolbar.esc",function(){if(xa){if(b.$wp)b.events.disableBlur(),b.events.focus();else{var a=xa;ga(!0),b.selection.setAfter(a.get(0)),b.selection.restore()}return!1}},!0),b.events.on("toolbar.focusEditor",function(){if(xa)return!1},!0),b.events.on("window.cut window.copy",function(a){xa&&b.popups.isVisible("image.edit")&&!b.popups.get("image.edit").find(":focus").length&&(ta(),b.paste.saveCopiedText(xa.get(0).outerHTML,"\n"),"copy"==a.type?setTimeout(function(){w(xa)}):(ga(!0),b.undo.saveStep(),setTimeout(function(){b.undo.saveStep()},0)))},!0),b.browser.msie&&b.events.on("keydown",function(c){if(!b.selection.isCollapsed()||!xa)return!0;var d=c.which;d==a.FE.KEYCODE.C&&b.keys.ctrlKey(c)?b.events.trigger("window.copy"):d==a.FE.KEYCODE.X&&b.keys.ctrlKey(c)&&b.events.trigger("window.cut")}),b.events.$on(a(b.o_win),"keydown",function(b){var c=b.which;if(xa&&c==a.FE.KEYCODE.BACKSPACE)return b.preventDefault(),!1}),b.events.$on(b.$win,"keydown",function(b){var c=b.which;xa&&xa.hasClass("fr-uploading")&&c==a.FE.KEYCODE.ESC&&xa.trigger("abortUpload")}),b.events.on("destroy",function(){xa&&xa.hasClass("fr-uploading")&&xa.trigger("abortUpload")}),b.events.on("paste.before",da),b.events.on("paste.beforeCleanup",ea),b.events.on("paste.after",ca),b.events.on("html.set",i),b.events.on("html.inserted",i),i(),b.events.on("destroy",function(){Ka=[]}),b.events.on("html.processGet",_),b.opts.imageOutputSize){var c;b.events.on("html.beforeGet",function(){c=b.el.querySelectorAll("img");for(var d=0;d<c.length;d++){var e=c[d].style.width||a(c[d]).width(),f=c[d].style.height||a(c[d]).height();e&&c[d].setAttribute("width",(""+e).replace(/px/,"")),f&&c[d].setAttribute("height",(""+f).replace(/px/,""))}})}b.opts.iframe&&b.events.on("image.loaded",b.size.syncIframe),b.$wp&&(j(),b.events.on("contentChanged",j)),b.events.$on(a(b.o_win),"orientationchange.image",function(){setTimeout(function(){xa&&w(xa)},100)}),q(!0),L(!0),S(!0),O(!0),b.events.on("node.remove",function(a){if("IMG"==a.get(0).tagName)return Z(a),!1})}function ba(c){if(!1===b.events.trigger("image.beforePasteUpload",[c]))return!1;xa=a(c),k(),e(),sa(),r();for(var d=atob(a(c).attr("src").split(",")[1]),f=[],g=0;g<d.length;g++)f.push(d.charCodeAt(g));H([new Blob([new Uint8Array(f)],{type:"image/jpeg"})],xa)}function ca(){b.opts.imagePaste?b.$el.find("img[data-fr-image-pasted]").each(function(c,d){if(b.opts.imagePasteProcess){var e=b.opts.imageDefaultWidth;e&&"auto"!=e&&(e+=b.opts.imageResizeWithPercent?"%":"px"),a(d).css("width",e).removeClass("fr-dii fr-dib fr-fir fr-fil").addClass((b.opts.imageDefaultDisplay?"fr-di"+b.opts.imageDefaultDisplay[0]:"")+(b.opts.imageDefaultAlign&&"center"!=b.opts.imageDefaultAlign?" fr-fi"+b.opts.imageDefaultAlign[0]:""))}if(0===d.src.indexOf("data:"))ba(d);else if(0===d.src.indexOf("blob:")){var f=new Image;f.crossOrigin="Anonymous",f.onload=function(){var a=b.o_doc.createElement("CANVAS"),c=a.getContext("2d");a.height=this.naturalHeight,a.width=this.naturalWidth,c.drawImage(this,0,0),d.src=a.toDataURL("image/png"),ba(d)},f.src=d.src}else 0!==d.src.indexOf("http")||0===d.src.indexOf("https://mail.google.com/mail")?(b.selection.save(),a(d).remove(),b.selection.restore()):a(d).removeAttr("data-fr-image-pasted")}):b.$el.find("img[data-fr-image-pasted]").remove()}function da(a){if(a&&a.clipboardData&&a.clipboardData.items&&a.clipboardData.items[0]){var c=a.clipboardData.items[0].getAsFile();if(c){var d=new FileReader;return d.onload=function(a){var c=a.target.result,d=b.opts.imageDefaultWidth;d&&"auto"!=d&&(d+=b.opts.imageResizeWithPercent?"%":"px"),b.html.insert('<img data-fr-image-pasted="true" class="'+(b.opts.imageDefaultDisplay?"fr-di"+b.opts.imageDefaultDisplay[0]:"")+(b.opts.imageDefaultAlign&&"center"!=b.opts.imageDefaultAlign?" fr-fi"+b.opts.imageDefaultAlign[0]:"")+'" src="'+c+'"'+(d?' style="width: '+d+';"':"")+">"),b.events.trigger("paste.after")},d.readAsDataURL(c),!1}}}function ea(a){return a=a.replace(/<img /gi,'<img data-fr-image-pasted="true" ')}function fa(c){if("false"==a(this).parents("[contenteditable]:not(.fr-element):not(body):first").attr("contenteditable"))return!0;if(c&&"touchend"==c.type&&La)return!0;if(c&&b.edit.isDisabled())return c.stopPropagation(),c.preventDefault(),!1;for(var d=0;d<a.FE.INSTANCES.length;d++)a.FE.INSTANCES[d]!=b&&a.FE.INSTANCES[d].events.trigger("image.hideResizer");b.toolbar.disable(),c&&(c.stopPropagation(),c.preventDefault()),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur()),b.opts.iframe&&b.size.syncIframe(),xa=a(this),b.browser.msie||ta(),k(),e(),b.browser.msie||b.selection.clear(),b.helpers.isIOS()&&(b.events.disableBlur(),b.$el.blur()),b.button.bulkRefresh(),b.events.trigger("video.hideResizer")}function ga(a){xa&&(ja()||!0===a)&&(b.toolbar.enable(),ya.removeClass("fr-active"),b.popups.hide("image.edit"),xa=null,ia())}function ha(){Ma=!0}function ia(){Ma=!1}function ja(){return Ma}function ka(a,c,d){!b.opts.htmlUntouched&&b.opts.useClasses?(a.removeClass("fr-fil fr-fir fr-dib fr-dii"),d&&a.addClass("fr-fi"+d[0]),c&&a.addClass("fr-di"+c[0])):"inline"==c?(a.css({display:"inline-block",verticalAlign:"bottom",margin:b.opts.imageDefaultMargin}),"center"==d?a.css({float:"none",marginBottom:"",marginTop:"",maxWidth:"calc(100% - "+2*b.opts.imageDefaultMargin+"px)"}):"left"==d?a.css({float:"left",marginLeft:0,maxWidth:"calc(100% - "+b.opts.imageDefaultMargin+"px)"}):a.css({float:"right",marginRight:0,maxWidth:"calc(100% - "+b.opts.imageDefaultMargin+"px)"})):"block"==c&&(a.css({display:"block",float:"none",verticalAlign:"top",margin:b.opts.imageDefaultMargin+"px auto"}),"left"==d?a.css({marginLeft:0}):"right"==d&&a.css({marginRight:0}))}function la(a){xa.removeClass("fr-fir fr-fil"),!b.opts.htmlUntouched&&b.opts.useClasses?"left"==a?xa.addClass("fr-fil"):"right"==a&&xa.addClass("fr-fir"):ka(xa,na(),a),ta(),k(),e(),b.selection.clear()}function ma(a){
if(void 0===a&&(a=xa),a){if(a.hasClass("fr-fil"))return"left";if(a.hasClass("fr-fir"))return"right";if(a.hasClass("fr-dib")||a.hasClass("fr-dii"))return"center";var b=a.css("float");if(a.css("float","none"),"block"==a.css("display")){if(a.css("float",""),a.css("float")!=b&&a.css("float",b),0===parseInt(a.css("margin-left"),10))return"left";if(0===parseInt(a.css("margin-right"),10))return"right"}else{if(a.css("float",""),a.css("float")!=b&&a.css("float",b),"left"==a.css("float"))return"left";if("right"==a.css("float"))return"right"}}return"center"}function na(a){void 0===a&&(a=xa);var b=a.css("float");return a.css("float","none"),"block"==a.css("display")?(a.css("float",""),a.css("float")!=b&&a.css("float",b),"block"):(a.css("float",""),a.css("float")!=b&&a.css("float",b),"inline")}function oa(a){xa&&a.find("> *:first").replaceWith(b.icon.create("image-align-"+ma()))}function pa(a,b){xa&&b.find('.fr-command[data-param1="'+ma()+'"]').addClass("fr-active").attr("aria-selected",!0)}function qa(a){xa.removeClass("fr-dii fr-dib"),!b.opts.htmlUntouched&&b.opts.useClasses?"inline"==a?xa.addClass("fr-dii"):"block"==a&&xa.addClass("fr-dib"):ka(xa,a,ma()),ta(),k(),e(),b.selection.clear()}function ra(a,b){xa&&b.find('.fr-command[data-param1="'+na()+'"]').addClass("fr-active").attr("aria-selected",!0)}function sa(){var a=b.popups.get("image.insert");a||(a=L()),b.popups.isVisible("image.insert")||(s(),b.popups.refresh("image.insert"),b.popups.setContainer("image.insert",b.$sc));var c=xa.offset().left+xa.width()/2,d=xa.offset().top+xa.height();b.popups.show("image.insert",c,d,xa.outerHeight())}function ta(){if(xa){b.selection.clear();var a=b.doc.createRange();a.selectNode(xa.get(0));b.selection.get().addRange(a)}}function ua(){xa?(b.events.disableBlur(),a(".fr-popup input:focus").blur(),w(xa)):(b.events.disableBlur(),b.selection.restore(),b.events.enableBlur(),b.popups.hide("image.insert"),b.toolbar.showInline())}function va(){return xa}function wa(a,c,d){if(void 0===c&&(c=b.opts.imageStyles),void 0===d&&(d=b.opts.imageMultipleStyles),!xa)return!1;if(!d){var e=Object.keys(c);e.splice(e.indexOf(a),1),xa.removeClass(e.join(" "))}"object"==typeof c[a]?(xa.removeAttr("style"),xa.css(c[a].style)):xa.toggleClass(a),w(xa)}var xa,ya,za,Aa,Ba=!1,Ca=1,Da=2,Ea=3,Fa=4,Ga=5,Ha=6,Ia=8,Ja={};Ja[Ca]="Image cannot be loaded from the passed link.",Ja[Da]="No link in upload response.",Ja[Ea]="Error during file upload.",Ja[Fa]="Parsing response failed.",Ja[Ga]="File is too large.",Ja[Ha]="Image file type is invalid.",Ja[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",Ja[Ia]="Image file is corrupted.";var Ka,La,Ma=!1;return{_init:aa,showInsertPopup:d,showLayer:U,refreshUploadButton:V,refreshByURLButton:W,upload:H,insertByURL:v,align:la,refreshAlign:oa,refreshAlignOnShow:pa,display:qa,refreshDisplayOnShow:ra,replace:sa,back:ua,get:va,insert:y,showProgressBar:r,remove:Z,hideProgressBar:s,applyStyle:wa,showAltPopup:N,showSizePopup:R,setAlt:P,setSize:T,exitEdit:ga,edit:w}},a.FE.DefineIcon("insertImage",{NAME:"image"}),a.FE.RegisterShortcut(a.FE.KEYCODE.P,"insertImage",null,"P"),a.FE.RegisterCommand("insertImage",{title:"Insert Image",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("image.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("image.insert")):this.image.showInsertPopup()},plugin:"image"}),a.FE.DefineIcon("imageUpload",{NAME:"upload"}),a.FE.RegisterCommand("imageUpload",{title:"Upload Image",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-upload")},refresh:function(a){this.image.refreshUploadButton(a)}}),a.FE.DefineIcon("imageByURL",{NAME:"link"}),a.FE.RegisterCommand("imageByURL",{title:"By URL",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-by-url")},refresh:function(a){this.image.refreshByURLButton(a)}}),a.FE.RegisterCommand("imageInsertByURL",{title:"Insert Image",undo:!0,refreshAfterCallback:!1,callback:function(){this.image.insertByURL()},refresh:function(a){this.image.get()?a.text(this.language.translate("Replace")):a.text(this.language.translate("Insert"))}}),a.FE.DefineIcon("imageDisplay",{NAME:"star"}),a.FE.RegisterCommand("imageDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(a,b){this.image.display(b)},refresh:function(a){this.opts.imageTextNear||a.addClass("fr-hidden")},refreshOnShow:function(a,b){this.image.refreshDisplayOnShow(a,b)}}),a.FE.DefineIcon("image-align",{NAME:"align-left"}),a.FE.DefineIcon("image-align-left",{NAME:"align-left"}),a.FE.DefineIcon("image-align-right",{NAME:"align-right"}),a.FE.DefineIcon("image-align-center",{NAME:"align-justify"}),a.FE.DefineIcon("imageAlign",{NAME:"align-justify"}),a.FE.RegisterCommand("imageAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"None",right:"Align Right"},html:function(){var b='<ul class="fr-dropdown-list" role="presentation">',c=a.FE.COMMANDS.imageAlign.options;for(var d in c)c.hasOwnProperty(d)&&(b+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="imageAlign" data-param1="'+d+'" title="'+this.language.translate(c[d])+'">'+this.icon.create("image-align-"+d)+'<span class="fr-sr-only">'+this.language.translate(c[d])+"</span></a></li>");return b+="</ul>"},callback:function(a,b){this.image.align(b)},refresh:function(a){this.image.refreshAlign(a)},refreshOnShow:function(a,b){this.image.refreshAlignOnShow(a,b)}}),a.FE.DefineIcon("imageReplace",{NAME:"exchange"}),a.FE.RegisterCommand("imageReplace",{title:"Replace",undo:!1,focus:!1,popup:!0,refreshAfterCallback:!1,callback:function(){this.image.replace()}}),a.FE.DefineIcon("imageRemove",{NAME:"trash"}),a.FE.RegisterCommand("imageRemove",{title:"Remove",callback:function(){this.image.remove()}}),a.FE.DefineIcon("imageBack",{NAME:"arrow-left"}),a.FE.RegisterCommand("imageBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.image.back()},refresh:function(a){this.image.get()||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FE.RegisterCommand("imageDismissError",{title:"OK",undo:!1,callback:function(){this.image.hideProgressBar(!0)}}),a.FE.DefineIcon("imageStyle",{NAME:"magic"}),a.FE.RegisterCommand("imageStyle",{title:"Style",type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list" role="presentation">',b=this.opts.imageStyles;for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];"object"==typeof d&&(d=d.title),a+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="imageStyle" data-param1="'+c+'">'+this.language.translate(d)+"</a></li>"}return a+="</ul>"},callback:function(a,b){this.image.applyStyle(b)},refreshOnShow:function(b,c){var d=this.image.get();d&&c.find(".fr-command").each(function(){var b=a(this).data("param1"),c=d.hasClass(b);a(this).toggleClass("fr-active",c).attr("aria-selected",c)})}}),a.FE.DefineIcon("imageAlt",{NAME:"info"}),a.FE.RegisterCommand("imageAlt",{undo:!1,focus:!1,popup:!0,title:"Alternate Text",callback:function(){this.image.showAltPopup()}}),a.FE.RegisterCommand("imageSetAlt",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setAlt()}}),a.FE.DefineIcon("imageSize",{NAME:"arrows-alt"}),a.FE.RegisterCommand("imageSize",{undo:!1,focus:!1,popup:!0,title:"Change Size",callback:function(){this.image.showSizePopup()}}),a.FE.RegisterCommand("imageSetSize",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setSize()}})});
