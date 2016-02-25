
$(document).ready( function() {
$(' a[href^="http"]:not(.no_external):not(:has(img)), a[href^="https"]:not(.no_external):not(:has(img)) ').addClass( 'external_link' );
});
$(document).ready( function() {
$( '#skipnavigation ul li a' ).focus( function() {
$( '#skipnavigation' ).removeClass( 'sr-only' );
}).blur( function() {
$( '#skipnavigation' ).addClass( 'sr-only' );
});
});
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);
!function(a){var b={},c={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};a.fn.bxSlider=function(d){if(0==this.length)return this;if(this.length>1)return this.each(function(){a(this).bxSlider(d)}),this;var e={},f=this;b.el=this;var g=a(window).width(),h=a(window).height(),j=function(){e.settings=a.extend({},c,d),e.settings.slideWidth=parseInt(e.settings.slideWidth),e.children=f.children(e.settings.slideSelector),e.children.length<e.settings.minSlides&&(e.settings.minSlides=e.children.length),e.children.length<e.settings.maxSlides&&(e.settings.maxSlides=e.children.length),e.settings.randomStart&&(e.settings.startSlide=Math.floor(Math.random()*e.children.length)),e.active={index:e.settings.startSlide},e.carousel=e.settings.minSlides>1||e.settings.maxSlides>1,e.carousel&&(e.settings.preloadImages="all"),e.minThreshold=e.settings.minSlides*e.settings.slideWidth+(e.settings.minSlides-1)*e.settings.slideMargin,e.maxThreshold=e.settings.maxSlides*e.settings.slideWidth+(e.settings.maxSlides-1)*e.settings.slideMargin,e.working=!1,e.controls={},e.interval=null,e.animProp="vertical"==e.settings.mode?"top":"left",e.usingCSS=e.settings.useCSS&&"fade"!=e.settings.mode&&function(){var a=document.createElement("div"),b=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return e.cssPrefix=b[c].replace("Perspective","").toLowerCase(),e.animProp="-"+e.cssPrefix+"-transform",!0;return!1}(),"vertical"==e.settings.mode&&(e.settings.maxSlides=e.settings.minSlides),f.data("origStyle",f.attr("style")),f.children(e.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),k()},k=function(){f.wrap('<div class="'+e.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),e.viewport=f.parent(),e.loader=a('<div class="bx-loading" />'),e.viewport.prepend(e.loader),f.css({width:"horizontal"==e.settings.mode?100*e.children.length+215+"%":"auto",position:"relative"}),e.usingCSS&&e.settings.easing?f.css("-"+e.cssPrefix+"-transition-timing-function",e.settings.easing):e.settings.easing||(e.settings.easing="swing"),q(),e.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),e.viewport.parent().css({maxWidth:o()}),e.settings.pager||e.viewport.parent().css({margin:"0 auto 0px"}),e.children.css({"float":"horizontal"==e.settings.mode?"left":"none",listStyle:"none",position:"relative"}),e.children.css("width",p()),"horizontal"==e.settings.mode&&e.settings.slideMargin>0&&e.children.css("marginRight",e.settings.slideMargin),"vertical"==e.settings.mode&&e.settings.slideMargin>0&&e.children.css("marginBottom",e.settings.slideMargin),"fade"==e.settings.mode&&(e.children.css({position:"absolute",zIndex:0,display:"none"}),e.children.eq(e.settings.startSlide).css({zIndex:e.settings.slideZIndex,display:"block"})),e.controls.el=a('<div class="bx-controls" />'),e.settings.captions&&z(),e.active.last=e.settings.startSlide==r()-1,e.settings.video&&f.fitVids();var c=e.children.eq(e.settings.startSlide);"all"==e.settings.preloadImages&&(c=e.children),e.settings.ticker?e.settings.pager=!1:(e.settings.pager&&w(),e.settings.controls&&x(),e.settings.auto&&e.settings.autoControls&&y(),(e.settings.controls||e.settings.autoControls||e.settings.pager)&&e.viewport.after(e.controls.el)),l(c,m)},l=function(b,c){var d=b.find("img, iframe").length;if(0==d)return c(),void 0;var e=0;b.find("img, iframe").each(function(){a(this).one("load",function(){++e==d&&c()}).each(function(){this.complete&&a(this).load()})})},m=function(){if(e.settings.infiniteLoop&&"fade"!=e.settings.mode&&!e.settings.ticker){var b="vertical"==e.settings.mode?e.settings.minSlides:e.settings.maxSlides,c=e.children.slice(0,b).clone().addClass("bx-clone"),d=e.children.slice(-b).clone().addClass("bx-clone");f.append(c).prepend(d)}e.loader.remove(),t(),"vertical"==e.settings.mode&&(e.settings.adaptiveHeight=!0),e.viewport.height(n()),f.redrawSlider(),e.settings.onSliderLoad(e.active.index),e.initialized=!0,e.settings.responsive&&a(window).bind("resize",Q),e.settings.auto&&e.settings.autoStart&&(r()>1||e.settings.autoSlideForOnePage)&&J(),e.settings.ticker&&K(),e.settings.pager&&F(e.settings.startSlide),e.settings.controls&&I(),e.settings.touchEnabled&&!e.settings.ticker&&M()},n=function(){var b=0,c=a();if("vertical"==e.settings.mode||e.settings.adaptiveHeight)if(e.carousel){var d=1==e.settings.moveSlides?e.active.index:e.active.index*s();for(c=e.children.eq(d),i=1;i<=e.settings.maxSlides-1;i++)c=d+i>=e.children.length?c.add(e.children.eq(i-1)):c.add(e.children.eq(d+i))}else c=e.children.eq(e.active.index);else c=e.children;return"vertical"==e.settings.mode?(c.each(function(){b+=a(this).outerHeight()}),e.settings.slideMargin>0&&(b+=e.settings.slideMargin*(e.settings.minSlides-1))):b=Math.max.apply(Math,c.map(function(){return a(this).outerHeight(!1)}).get()),"border-box"==e.viewport.css("box-sizing")?b+=parseFloat(e.viewport.css("padding-top"))+parseFloat(e.viewport.css("padding-bottom"))+parseFloat(e.viewport.css("border-top-width"))+parseFloat(e.viewport.css("border-bottom-width")):"padding-box"==e.viewport.css("box-sizing")&&(b+=parseFloat(e.viewport.css("padding-top"))+parseFloat(e.viewport.css("padding-bottom"))),b},o=function(){var a="100%";return e.settings.slideWidth>0&&(a="horizontal"==e.settings.mode?e.settings.maxSlides*e.settings.slideWidth+(e.settings.maxSlides-1)*e.settings.slideMargin:e.settings.slideWidth),a},p=function(){var a=e.settings.slideWidth,b=e.viewport.width();return 0==e.settings.slideWidth||e.settings.slideWidth>b&&!e.carousel||"vertical"==e.settings.mode?a=b:e.settings.maxSlides>1&&"horizontal"==e.settings.mode&&(b>e.maxThreshold||b<e.minThreshold&&(a=(b-e.settings.slideMargin*(e.settings.minSlides-1))/e.settings.minSlides)),a},q=function(){var a=1;if("horizontal"==e.settings.mode&&e.settings.slideWidth>0)if(e.viewport.width()<e.minThreshold)a=e.settings.minSlides;else if(e.viewport.width()>e.maxThreshold)a=e.settings.maxSlides;else{var b=e.children.first().width()+e.settings.slideMargin;a=Math.floor((e.viewport.width()+e.settings.slideMargin)/b)}else"vertical"==e.settings.mode&&(a=e.settings.minSlides);return a},r=function(){var a=0;if(e.settings.moveSlides>0)if(e.settings.infiniteLoop)a=Math.ceil(e.children.length/s());else for(var b=0,c=0;b<e.children.length;)++a,b=c+q(),c+=e.settings.moveSlides<=q()?e.settings.moveSlides:q();else a=Math.ceil(e.children.length/q());return a},s=function(){return e.settings.moveSlides>0&&e.settings.moveSlides<=q()?e.settings.moveSlides:q()},t=function(){if(e.children.length>e.settings.maxSlides&&e.active.last&&!e.settings.infiniteLoop){if("horizontal"==e.settings.mode){var a=e.children.last(),b=a.position();u(-(b.left-(e.viewport.width()-a.outerWidth())),"reset",0)}else if("vertical"==e.settings.mode){var c=e.children.length-e.settings.minSlides,b=e.children.eq(c).position();u(-b.top,"reset",0)}}else{var b=e.children.eq(e.active.index*s()).position();e.active.index==r()-1&&(e.active.last=!0),void 0!=b&&("horizontal"==e.settings.mode?u(-b.left,"reset",0):"vertical"==e.settings.mode&&u(-b.top,"reset",0))}},u=function(a,b,c,d){if(e.usingCSS){var g="vertical"==e.settings.mode?"translate3d(0, "+a+"px, 0)":"translate3d("+a+"px, 0, 0)";f.css("-"+e.cssPrefix+"-transition-duration",c/1e3+"s"),"slide"==b?(f.css(e.animProp,g),f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),G()})):"reset"==b?f.css(e.animProp,g):"ticker"==b&&(f.css("-"+e.cssPrefix+"-transition-timing-function","linear"),f.css(e.animProp,g),f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),u(d.resetValue,"reset",0),L()}))}else{var h={};h[e.animProp]=a,"slide"==b?f.animate(h,c,e.settings.easing,function(){G()}):"reset"==b?f.css(e.animProp,a):"ticker"==b&&f.animate(h,speed,"linear",function(){u(d.resetValue,"reset",0),L()})}},v=function(){for(var b="",c=r(),d=0;c>d;d++){var f="";e.settings.buildPager&&a.isFunction(e.settings.buildPager)?(f=e.settings.buildPager(d),e.pagerEl.addClass("bx-custom-pager")):(f=d+1,e.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+d+'" class="bx-pager-link">'+f+"</a></div>"}e.pagerEl.html(b)},w=function(){e.settings.pagerCustom?e.pagerEl=a(e.settings.pagerCustom):(e.pagerEl=a('<div class="bx-pager" />'),e.settings.pagerSelector?a(e.settings.pagerSelector).html(e.pagerEl):e.controls.el.addClass("bx-has-pager").append(e.pagerEl),v()),e.pagerEl.on("click","a",E)},x=function(){e.controls.next=a('<a class="bx-next" href="">'+e.settings.nextText+"</a>"),e.controls.prev=a('<a class="bx-prev" href="">'+e.settings.prevText+"</a>"),e.controls.next.bind("click",A),e.controls.prev.bind("click",B),e.settings.nextSelector&&a(e.settings.nextSelector).append(e.controls.next),e.settings.prevSelector&&a(e.settings.prevSelector).append(e.controls.prev),e.settings.nextSelector||e.settings.prevSelector||(e.controls.directionEl=a('<div class="bx-controls-direction" />'),e.controls.directionEl.append(e.controls.prev).append(e.controls.next),e.controls.el.addClass("bx-has-controls-direction").append(e.controls.directionEl))},y=function(){e.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+e.settings.startText+"</a></div>"),e.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+e.settings.stopText+"</a></div>"),e.controls.autoEl=a('<div class="bx-controls-auto" />'),e.controls.autoEl.on("click",".bx-start",C),e.controls.autoEl.on("click",".bx-stop",D),e.settings.autoControlsCombine?e.controls.autoEl.append(e.controls.start):e.controls.autoEl.append(e.controls.start).append(e.controls.stop),e.settings.autoControlsSelector?a(e.settings.autoControlsSelector).html(e.controls.autoEl):e.controls.el.addClass("bx-has-controls-auto").append(e.controls.autoEl),H(e.settings.autoStart?"stop":"start")},z=function(){e.children.each(function(){var c=a(this).find("img:first").attr("title");void 0!=c&&(""+c).length&&a(this).append('<div class="bx-caption"><span>'+c+"</span></div>")})},A=function(a){e.settings.auto&&f.stopAuto(),f.goToNextSlide(),a.preventDefault()},B=function(a){e.settings.auto&&f.stopAuto(),f.goToPrevSlide(),a.preventDefault()},C=function(a){f.startAuto(),a.preventDefault()},D=function(a){f.stopAuto(),a.preventDefault()},E=function(b){e.settings.auto&&f.stopAuto();var c=a(b.currentTarget);if(void 0!==c.attr("data-slide-index")){var d=parseInt(c.attr("data-slide-index"));d!=e.active.index&&f.goToSlide(d),b.preventDefault()}},F=function(b){var c=e.children.length;return"short"==e.settings.pagerType?(e.settings.maxSlides>1&&(c=Math.ceil(e.children.length/e.settings.maxSlides)),e.pagerEl.html(b+1+e.settings.pagerShortSeparator+c),void 0):(e.pagerEl.find("a").removeClass("active"),e.pagerEl.each(function(c,d){a(d).find("a").eq(b).addClass("active")}),void 0)},G=function(){if(e.settings.infiniteLoop){var a="";0==e.active.index?a=e.children.eq(0).position():e.active.index==r()-1&&e.carousel?a=e.children.eq((r()-1)*s()).position():e.active.index==e.children.length-1&&(a=e.children.eq(e.children.length-1).position()),a&&("horizontal"==e.settings.mode?u(-a.left,"reset",0):"vertical"==e.settings.mode&&u(-a.top,"reset",0))}e.working=!1,e.settings.onSlideAfter(e.children.eq(e.active.index),e.oldIndex,e.active.index)},H=function(a){e.settings.autoControlsCombine?e.controls.autoEl.html(e.controls[a]):(e.controls.autoEl.find("a").removeClass("active"),e.controls.autoEl.find("a:not(.bx-"+a+")").addClass("active"))},I=function(){1==r()?(e.controls.prev.addClass("disabled"),e.controls.next.addClass("disabled")):!e.settings.infiniteLoop&&e.settings.hideControlOnEnd&&(0==e.active.index?(e.controls.prev.addClass("disabled"),e.controls.next.removeClass("disabled")):e.active.index==r()-1?(e.controls.next.addClass("disabled"),e.controls.prev.removeClass("disabled")):(e.controls.prev.removeClass("disabled"),e.controls.next.removeClass("disabled")))},J=function(){e.settings.autoDelay>0?setTimeout(f.startAuto,e.settings.autoDelay):f.startAuto(),e.settings.autoHover&&f.hover(function(){e.interval&&(f.stopAuto(!0),e.autoPaused=!0)},function(){e.autoPaused&&(f.startAuto(!0),e.autoPaused=null)})},K=function(){var b=0;if("next"==e.settings.autoDirection)f.append(e.children.clone().addClass("bx-clone"));else{f.prepend(e.children.clone().addClass("bx-clone"));var c=e.children.first().position();b="horizontal"==e.settings.mode?-c.left:-c.top}u(b,"reset",0),e.settings.pager=!1,e.settings.controls=!1,e.settings.autoControls=!1,e.settings.tickerHover&&!e.usingCSS&&e.viewport.hover(function(){f.stop()},function(){var b=0;e.children.each(function(){b+="horizontal"==e.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)});var c=e.settings.speed/b,d="horizontal"==e.settings.mode?"left":"top",g=c*(b-Math.abs(parseInt(f.css(d))));L(g)}),L()},L=function(a){speed=a?a:e.settings.speed;var b={left:0,top:0},c={left:0,top:0};"next"==e.settings.autoDirection?b=f.find(".bx-clone").first().position():c=e.children.first().position();var d="horizontal"==e.settings.mode?-b.left:-b.top,g="horizontal"==e.settings.mode?-c.left:-c.top,h={resetValue:g};u(d,"ticker",speed,h)},M=function(){e.touch={start:{x:0,y:0},end:{x:0,y:0}},e.viewport.bind("touchstart MSPointerDown pointerdown",N)},N=function(a){if(e.working)a.preventDefault();else{e.touch.originalPos=f.position();var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b];e.touch.start.x=c[0].pageX,e.touch.start.y=c[0].pageY,e.viewport.bind("touchmove MSPointerMove pointermove",O),e.viewport.bind("touchend MSPointerUp pointerup",P)}},O=function(a){var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],d=Math.abs(c[0].pageX-e.touch.start.x),f=Math.abs(c[0].pageY-e.touch.start.y);if(3*d>f&&e.settings.preventDefaultSwipeX?a.preventDefault():3*f>d&&e.settings.preventDefaultSwipeY&&a.preventDefault(),"fade"!=e.settings.mode&&e.settings.oneToOneTouch){var g=0;if("horizontal"==e.settings.mode){var h=c[0].pageX-e.touch.start.x;g=e.touch.originalPos.left+h}else{var h=c[0].pageY-e.touch.start.y;g=e.touch.originalPos.top+h}u(g,"reset",0)}},P=function(a){e.viewport.unbind("touchmove MSPointerMove pointermove",O);var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],d=0;if(e.touch.end.x=c[0].pageX,e.touch.end.y=c[0].pageY,"fade"==e.settings.mode){var g=Math.abs(e.touch.start.x-e.touch.end.x);g>=e.settings.swipeThreshold&&(e.touch.start.x>e.touch.end.x?f.goToNextSlide():f.goToPrevSlide(),f.stopAuto())}else{var g=0;"horizontal"==e.settings.mode?(g=e.touch.end.x-e.touch.start.x,d=e.touch.originalPos.left):(g=e.touch.end.y-e.touch.start.y,d=e.touch.originalPos.top),!e.settings.infiniteLoop&&(0==e.active.index&&g>0||e.active.last&&0>g)?u(d,"reset",200):Math.abs(g)>=e.settings.swipeThreshold?(0>g?f.goToNextSlide():f.goToPrevSlide(),f.stopAuto()):u(d,"reset",200)}e.viewport.unbind("touchend MSPointerUp pointerup",P)},Q=function(){if(e.initialized){var c=a(window).width(),d=a(window).height();(g!=c||h!=d)&&(g=c,h=d,f.redrawSlider(),e.settings.onSliderResize.call(f,e.active.index))}};return f.goToSlide=function(b,c){if(!e.working&&e.active.index!=b)if(e.working=!0,e.oldIndex=e.active.index,e.active.index=0>b?r()-1:b>=r()?0:b,e.settings.onSlideBefore(e.children.eq(e.active.index),e.oldIndex,e.active.index),"next"==c?e.settings.onSlideNext(e.children.eq(e.active.index),e.oldIndex,e.active.index):"prev"==c&&e.settings.onSlidePrev(e.children.eq(e.active.index),e.oldIndex,e.active.index),e.active.last=e.active.index>=r()-1,e.settings.pager&&F(e.active.index),e.settings.controls&&I(),"fade"==e.settings.mode)e.settings.adaptiveHeight&&e.viewport.height()!=n()&&e.viewport.animate({height:n()},e.settings.adaptiveHeightSpeed),e.children.filter(":visible").fadeOut(e.settings.speed).css({zIndex:0}),e.children.eq(e.active.index).css("zIndex",e.settings.slideZIndex+1).fadeIn(e.settings.speed,function(){a(this).css("zIndex",e.settings.slideZIndex),G()});else{e.settings.adaptiveHeight&&e.viewport.height()!=n()&&e.viewport.animate({height:n()},e.settings.adaptiveHeightSpeed);var d=0,g={left:0,top:0};if(!e.settings.infiniteLoop&&e.carousel&&e.active.last)if("horizontal"==e.settings.mode){var h=e.children.eq(e.children.length-1);g=h.position(),d=e.viewport.width()-h.outerWidth()}else{var i=e.children.length-e.settings.minSlides;g=e.children.eq(i).position()}else if(e.carousel&&e.active.last&&"prev"==c){var j=1==e.settings.moveSlides?e.settings.maxSlides-s():(r()-1)*s()-(e.children.length-e.settings.maxSlides),h=f.children(".bx-clone").eq(j);g=h.position()}else if("next"==c&&0==e.active.index)g=f.find("> .bx-clone").eq(e.settings.maxSlides).position(),e.active.last=!1;else if(b>=0){var k=b*s();g=e.children.eq(k).position()}if("undefined"!=typeof g){var l="horizontal"==e.settings.mode?-(g.left-d):-g.top;u(l,"slide",e.settings.speed)}}},f.goToNextSlide=function(){if(e.settings.infiniteLoop||!e.active.last){var a=parseInt(e.active.index)+1;f.goToSlide(a,"next")}},f.goToPrevSlide=function(){if(e.settings.infiniteLoop||0!=e.active.index){var a=parseInt(e.active.index)-1;f.goToSlide(a,"prev")}},f.startAuto=function(a){e.interval||(e.interval=setInterval(function(){"next"==e.settings.autoDirection?f.goToNextSlide():f.goToPrevSlide()},e.settings.pause),e.settings.autoControls&&1!=a&&H("stop"))},f.stopAuto=function(a){e.interval&&(clearInterval(e.interval),e.interval=null,e.settings.autoControls&&1!=a&&H("start"))},f.getCurrentSlide=function(){return e.active.index},f.getCurrentSlideElement=function(){return e.children.eq(e.active.index)},f.getSlideCount=function(){return e.children.length},f.redrawSlider=function(){e.children.add(f.find(".bx-clone")).width(p()),e.viewport.css("height",n()),e.settings.ticker||t(),e.active.last&&(e.active.index=r()-1),e.active.index>=r()&&(e.active.last=!0),e.settings.pager&&!e.settings.pagerCustom&&(v(),F(e.active.index))},f.destroySlider=function(){e.initialized&&(e.initialized=!1,a(".bx-clone",this).remove(),e.children.each(function(){void 0!=a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!=a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),e.controls.el&&e.controls.el.remove(),e.controls.next&&e.controls.next.remove(),e.controls.prev&&e.controls.prev.remove(),e.pagerEl&&e.settings.controls&&e.pagerEl.remove(),a(".bx-caption",this).remove(),e.controls.autoEl&&e.controls.autoEl.remove(),clearInterval(e.interval),e.settings.responsive&&a(window).unbind("resize",Q))},f.reloadSlider=function(a){void 0!=a&&(d=a),f.destroySlider(),j()},j(),this}}(jQuery);
var documentCookies = {
getItem: function (sKey) {
return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
},
setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
var sExpires = "";
if (vEnd) {
switch (vEnd.constructor) {
case Number:
sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
break;
case String:
sExpires = "; expires=" + vEnd;
break;
case Date:
sExpires = "; expires=" + vEnd.toUTCString();
break;
}
}
document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
return true;
},
removeItem: function (sKey, sPath, sDomain) {
if (!sKey || !this.hasItem(sKey)) { return false; }
document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
return true;
},
hasItem: function (sKey) {
return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
},
keys: function () {
var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
return aKeys;
}
};
if (navigator.userAgent.match(/IEMobile\/10\.0/))
{
var msViewportStyle = document.createElement('style');
msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
document.querySelector('head').appendChild(msViewportStyle);
}
$.extend( true, $.magnificPopup.defaults, {
tClose: 'Fermer (touche Échap)',
tLoading: 'Chargement...',
gallery: {
tPrev: 'Image précédente (touche flèche gauche)',
tNext: 'Image suivante (touche flèche droite)',
tCounter: 'Image %curr% sur un total de %total%'
},
image: {
tError: '<a href="%url%">L\'image</a> n\'a pas pu être chargée.'
},
ajax: {
tError: '<a href="%url%">Le contenu</a> n\'a pas pu être chargé.'
}
});
function randomIntFromInterval(min,max)
{
return Math.floor(Math.random()*(max-min+1)+min);
}
function json_decode(str_json) {
var json = this.window.JSON;
if (typeof json === 'object' && typeof json.parse === 'function') {
try {
return json.parse(str_json);
} catch (err) {
if (!(err instanceof SyntaxError)) {
throw new Error('Unexpected error type in json_decode()');
}
this.php_js = this.php_js || {};
this.php_js.last_error_json = 4; // usable by json_last_error()
return null;
}
}
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
var j;
var text = str_json;
cx.lastIndex = 0;
if (cx.test(text)) {
text = text.replace(cx, function(a) {
return '\\u' + ('0000' + a.charCodeAt(0)
.toString(16))
.slice(-4);
});
}
if ((/^[\],:{}\s]*$/)
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
j = eval('(' + text + ')');
return j;
}
this.php_js = this.php_js || {};
this.php_js.last_error_json = 4; // usable by json_last_error()
return null;
}
$(document).ready( function() {
$( '.magnificgallery' ).magnificPopup({
delegate: 'a',
midClick: true,
closeBtnInside: true,
type: 'image',
gallery: {
enabled:true
},
image: {
titleSrc: 'data-full-name'
}
});
$( '.media.image_group .bxslider' ).each( function() {
$(this).bxSlider({
useCSS: false,
captions: true,
buildPager: function(slideIndex){
return '<div class="diapo-puce">'+(slideIndex+1)+'</div>';
}
});
$('.bx-viewport').css('overflow', 'visible');
});
if( jQuery().bootstrapValidator )
$('form.tovalidate').bootstrapValidator();
$('.randomvign').each( function() {
var randomID = $(this).data('random');
var randomMax = $(this).data('max');
var imageList = window['imageList'+randomID];
var randomPhoto = randomIntFromInterval(0,randomMax);
console.log(imageList[randomPhoto]);
$(this).attr({"src":imageList[randomPhoto]});
});
});
(function($) { // Hide scope, no $ conflict
var PROP_NAME = 'icalendar';
var FLASH_ID = 'icalendar-flash-copy';
function iCalendar() {
this._defaults = {
sites: [],  // List of site IDs to use, empty for all
icons: '', // Horizontal amalgamation of all site icons
iconSize: 16,  // The size of the individual icons
target: '_blank',  // The name of the target window for the iCalendar links
compact: false,  // True if a compact presentation should be used, false for full
popup: false,  // True to have it popup on demand, false to show always
popupText: 'Send to my calendar...', // Text for the popup trigger
tipPrefix: '',  // Additional text to show in the tool tip for each icon
echoUrl: '',  // The URL to echo back iCalendar content, or blank for clipboard
echoField: '', // The ID of a field to copy the iCalendar definition into, or blank for clipboard
start: null,  // The start date/time of the event
end: null,  // The end date/time of the event
title: '',  // The title of the event
summary: '',  // The summary of the event
description: '',  // The description of the event
location: '',  // The location of the event
url: '',  // A URL with more information about the event
contact: '',  // An e-mail address for further contact about the event
recurrence: null, // Details about a recurring event, an object with attributes:
copyConfirm: 'The event will be copied to your clipboard. Continue?',
copySucceeded: 'The event has been copied to your clipboard',
copyFailed: 'Failed to copy the event to the clipboard\n',
copyFlash: 'clipboard.swf', // The URL for the Flash clipboard copy module
copyUnavailable: 'The clipboard is unavailable, please copy the event details from below:\n'
};
this._sites = {  // The definitions of the available iCalendar sites
'google': {display: 'Google', icon: 0, override: null,
url: 'http://www.google.com/calendar/event?action=TEMPLATE' +
'&amp;text={t}&amp;dates={s}/{e}&amp;details={d}&amp;location={l}&amp;sprop=website:{u}'},
'icalendar': {display: 'iCalendar', icon: 1, override: null, url: 'echo'},
'outlook': {display: 'Outlook', icon: 2, override: null, url: 'echo'},
'yahoo': {display: 'Yahoo', icon: 3, override: yahooOverride,
url: 'http://calendar.yahoo.com/?v=60&amp;view=d&amp;type=20' +
'&amp;title={t}&amp;st={s}&amp;dur={p}&amp;desc={d}&amp;in_loc={l}&amp;url={u}&amp;rpat={r}'}
};
}
var FREQ_SETTINGS = [{method: 'Seconds', factor: 1},
{method: 'Minutes', factor: 60}, {method: 'Hours', factor: 3600},
{method: 'Date', factor: 86400}, {method: 'Month', factor: 1},
{method: 'FullYear', factor: 12}, {method: 'Date', factor: 604800}];
var SE = 0;
var MI = 1;
var HR = 2;
var DY = 3;
var MO = 4;
var YR = 5;
var WK = 6;
$.extend(iCalendar.prototype, {
markerClassName: 'hasICalendar',
setDefaults: function(settings) {
extendRemove(this._defaults, settings || {});
return this;
},
addSite: function(id, display, icon, url, override) {
this._sites[id] = {display: display, icon: icon, override: override, url: url};
return this;
},
getSites: function() {
return this._sites;
},
_attachICalendar: function(target, settings) {
target = $(target);
if (target.hasClass(this.markerClassName)) {
return;
}
target.addClass(this.markerClassName);
this._updateICalendar(target, settings);
},
_changeICalendar: function(target, settings) {
target = $(target);
if (!target.hasClass(this.markerClassName)) {
return;
}
this._updateICalendar(target, settings);
},
_updateICalendar: function(target, settings) {
settings = extendRemove($.extend({}, this._defaults,
$.data(target[0], PROP_NAME) || {}), settings);
$.data(target[0], PROP_NAME, settings);
var sites = settings.sites || this._defaults.sites;
if (sites.length == 0) { // default to all sites
$.each(this._sites, function(id) {
sites[sites.length] = id;
});
}
var addSite = function(site, calId) {
var inserts = {t: encodeURIComponent(settings.title),
d: encodeURIComponent(settings.description),
s: $.icalendar.formatDateTime(settings.start),
e: $.icalendar.formatDateTime(settings.end),
p: $.icalendar.calculateDuration(settings.start, settings.end),
l: encodeURIComponent(settings.location),
u: encodeURIComponent(settings.url),
c: encodeURIComponent(settings.contact),
r: makeRecurrence(settings.recurrence)};
if (site.override) {
site.override.apply(target, [inserts, settings]);
}
var url = site.url;
$.each(inserts, function(n, v) {
var re = new RegExp('\\{' + n + '\\}', 'g');
url = url.replace(re, v);
});
var url = (site.url == 'echo' ? '#' : url);
var item = $('<li></li>');
var anchor = $('<a href="' + url + '" title="' + settings.tipPrefix + site.display + '"' +
(site.url == 'echo' ? '' : ' target="' + settings._target + '"') + '></a>');
if (site.url == 'echo') {
anchor.click(function() {
return $.icalendar._echo(target[0], calId);
});
}
var html = '';
if (site.icon != null) {
if (typeof site.icon == 'number') {
html += '<span style="background: ' +
'transparent url(' + settings.icons + ') no-repeat -' +
(site.icon * settings.iconSize) + 'px 0px;' +
'"></span>';
}
else {
html += '<img src="' + site.icon + '" />';
}
html +=	(settings.compact ? '' : '&#xa0;');
}
anchor.html(html + (settings.compact ? '' : site.display));
item.append(anchor);
return item;
};
var list = $('<ul class="icalendar_list' +
(settings.compact ? ' icalendar_compact' : '') + '"></ul>');
var allSites = this._sites;
$.each(sites, function(index, id) {
list.append(addSite(allSites[id], id));
});
target.empty().append(list);
if (settings.popup) {
list.before('<span class="icalendar_popup_text">' +
settings.popupText + '</span>').
wrap('<div class="icalendar_popup"></div>');
target.click(function() {
var target = $(this);
var offset = target.offset();
$('.icalendar_popup', target).css('left', offset.left).
css('top', offset.top + target.outerHeight()).toggle();
});
}
},
_destroyICalendar: function(target) {
target = $(target);
if (!target.hasClass(this.markerClassName)) {
return;
}
target.removeClass(this.markerClassName).empty();
$.removeData(target[0], PROP_NAME);
},
_echo: function(target, calId) {
var settings = $.data(target, PROP_NAME);
var event = makeICalendar(settings);
if (settings.echoUrl) {
window.location.href = settings.echoUrl + '?content=' + escape(event);
}
else if (settings.echoField) {
$(settings.echoField).val(event);
}
else if (!settings.copyFlash) {
alert(settings.copyUnavailable + event);
}
else if (confirm(settings.copyConfirm)) {
var error = '';
if (error = copyViaFlash(event, settings.copyFlash)) {
alert(settings.copyFailed + error);
}
else {
alert(settings.copySucceeded);
}
}
return false; // Don't follow link
},
_ensureTwo: function(value) {
return (value < 10 ? '0' : '') + value;
},
formatDate: function(date, local) {
return (!date ? '' : '' + date.getFullYear() +
this._ensureTwo(date.getMonth() + 1) + this._ensureTwo(date.getDate()));
},
formatDateTime: function(dateTime, local) {
return (!dateTime ? '' : (local ?
'' + dateTime.getFullYear() + this._ensureTwo(dateTime.getMonth() + 1) +
this._ensureTwo(dateTime.getDate()) + 'T' + this._ensureTwo(dateTime.getHours()) +
this._ensureTwo(dateTime.getMinutes()) + this._ensureTwo(dateTime.getSeconds()) :
'' + dateTime.getUTCFullYear() + this._ensureTwo(dateTime.getUTCMonth() + 1) +
this._ensureTwo(dateTime.getUTCDate()) + 'T' + this._ensureTwo(dateTime.getUTCHours()) +
this._ensureTwo(dateTime.getUTCMinutes()) + this._ensureTwo(dateTime.getUTCSeconds()) + 'Z'));
},
calculateDuration: function(start, end) {
if (!start || !end) {
return '';
}
var seconds = Math.abs(end.getTime() - start.getTime()) / 1000;
var days = Math.floor(seconds / 86400);
seconds -= days * 86400;
var hours = Math.floor(seconds / 3600);
seconds -= hours * 3600;
var minutes = Math.floor(seconds / 60);
seconds -= minutes * 60;
return (start.getTime() > end.getTime() ? '-' : '') +
'P' + (days > 0 ? days + 'D' : '') +
(hours || minutes || seconds ? 'T' + hours + 'H' : '') +
(minutes || seconds ? minutes + 'M' : '') + (seconds ? seconds + 'S' : '');
},
addDuration: function(start, duration) {
if (!duration) {
return start;
}
var end = new Date(start.getTime());
var matches = DURATION.exec(duration);
if (!matches) {
throw 'Invalid duration';
}
if (matches[2] && (matches[3] || matches[5] || matches[6] || matches[7])) {
throw 'Invalid duration - week must be on its own'; // Week must be on its own
}
if (!matches[4] && (matches[5] || matches[6] || matches[7])) {
throw 'Invalid duration - missing time marker'; // Missing T with hours/minutes/seconds
}
var sign = (matches[1] == '-' ? -1 : +1);
var apply = function(value, factor, method) {
value = parseInt(value);
if (!isNaN(value)) {
end['setUTC' + method](end['getUTC' + method]() + sign * value * factor);
}
};
if (matches[2]) {
apply(matches[2], 7, 'Date');
}
else {
apply(matches[3], 1, 'Date');
apply(matches[5], 1, 'Hours');
apply(matches[6], 1, 'Minutes');
apply(matches[7], 1, 'Seconds');
}
return end;
},
parse: function(content) {
var cal = {};
var timezones = {};
var lines = unfoldLines(content);
parseGroup(lines, 0, cal, timezones);
if (!cal.vcalendar) {
throw 'Invalid iCalendar data';
}
return cal.vcalendar;
},
getWeekOfYear: function(date, weekStart) {
return getWeekOfYear(date, weekStart);
},
_parseParams: function(owner, params) {
return parseParams(owner, params);
}
});
function extendRemove(target, props) {
$.extend(target, props);
for (var name in props) {
if (props[name] == null) {
target[name] = null;
}
}
return target;
}
$.fn.icalendar = function(options) {
var otherArgs = Array.prototype.slice.call(arguments, 1);
return this.each(function() {
if (typeof options == 'string') {
$.icalendar['_' + options + 'ICalendar'].
apply($.icalendar, [this].concat(otherArgs));
}
else {
$.icalendar._attachICalendar(this, options || {});
}
});
};
$.icalendar = new iCalendar(); // singleton instance
function yahooOverride(inserts, settings) {
var twoDigits = function(value) {
return (value < 10 ? '0' : '') + value;
};
var dur = (settings.end ? (settings.end.getTime() - settings.start.getTime()) / 60000 : 0);
inserts.p = (dur ? twoDigits(Math.floor(dur / 60)) + '' + twoDigits(dur % 60) : ''); // hhmm
if (inserts.r) {
var byDay = (settings.recurrence.by && settings.recurrence.by[0].type == 'day' ?
settings.recurrence.by[0].values.join('').toLowerCase() : '');
var freq = {daily: 'dy', weekly: 'wk', monthly: 'mh', yearly: 'yr'}[settings.recurrence.freq];
inserts.r = (byDay || freq ? twoDigits(settings.recurrence.interval || 1) + (byDay || freq) : '');
}
}
function makeICalendar(event) {
var limit75 = function(text) {
var out = '';
while (text.length > 75) {
out += text.substr(0, 75) + '\n';
text = ' ' + text.substr(75);
}
out += text;
return out;
};
return 'BEGIN:VCALENDAR\n' +
'VERSION:2.0\n' +
'PRODID:jquery.icalendar\n' +
'METHOD:PUBLISH\n' +
'BEGIN:VEVENT\n' +
'UID:' + new Date().getTime() + '@' +
(window.location.href.replace(/^[^\/]*\/\/([^\/]*)\/.*$/, '$1') || 'localhost') + '\n' +
'DTSTAMP:' + $.icalendar.formatDateTime(new Date()) + '\n' +
(event.url ? limit75('URL:' + event.url) + '\n' : '') +
(event.contact ? limit75('MAILTO:' + event.contact) + '\n' : '') +
limit75('TITLE:' + event.title) + '\n' +
'DTSTART:' + $.icalendar.formatDateTime(event.start) + '\n' +
'DTEND:' + $.icalendar.formatDateTime(event.end) + '\n' +
(event.summary ? limit75('SUMMARY:' + event.summary) + '\n' : '') +
(event.description ? limit75('DESCRIPTION:' + event.description) + '\n' : '') +
(event.location ? limit75('LOCATION:' + event.location) + '\n' : '') +
(event.recurrence ? makeRecurrence(event.recurrence) + '\n' : '') +
'END:VEVENT\n' +
'END:VCALENDAR';
}
function makeRecurrence(recur) {
if (!recur) {
return '';
}
var def = '';
if (recur.dates) {
def = 'RDATE;VALUE=DATE:';
if (!isArray(recur.dates)) {
recur.dates = [recur.dates];
}
for (var i = 0; i < recur.dates.length; i++) {
def += (i > 0 ? ',' : '') + $.icalendar.formatDate(recur.dates[i]);
}
}
else if (recur.times) {
def = 'RDATE;VALUE=DATE-TIME:';
if (!isArray(recur.times)) {
recur.times = [recur.times];
}
for (var i = 0; i < recur.times.length; i++) {
def += (i > 0 ? ',' : '') + $.icalendar.formatDateTime(recur.times[i]);
}
}
else if (recur.periods) {
def = 'RDATE;VALUE=PERIOD:';
if (!isArray(recur.periods[0])) {
recur.periods = [recur.periods];
}
for (var i = 0; i < recur.periods.length; i++) {
def += (i > 0 ? ',' : '') + $.icalendar.formatDateTime(recur.periods[i][0]) +
'/' + (recur.periods[i][1].constructor != Date ? recur.periods[i][1] :
$.icalendar.formatDateTime(recur.periods[i][1]));
}
}
else {
def = 'RRULE:FREQ=' + (recur.freq || 'daily').toUpperCase() +
(recur.interval ? ';INTERVAL=' + recur.interval : '') +
(recur.until ? ';UNTIL=' + $.icalendar.formatDateTime(recur.until) :
(recur.count ? ';COUNT=' + recur.count : '')) +
(recur.weekStart != null ? ';WKST=' +
['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][recur.weekStart] : '');
if (recur.by) {
if (!isArray(recur.by)) {
recur.by = [recur.by];
}
for (var i = 0; i < recur.by.length; i++) {
if (!isArray(recur.by[i].values)) {
recur.by[i].values = [recur.by[i].values];
}
def += ';BY' + recur.by[i].type.toUpperCase() + '=' +
recur.by[i].values.join(',');
}
}
}
return def;
}
function copyViaFlash(text, url) {
$('#' + FLASH_ID).remove();
try {
$('body').append('<div id="' + FLASH_ID + '"><embed src="' + url +
'" FlashVars="clipboard=' + encodeURIComponent(text) +
'" width="0" height="0" type="application/x-shockwave-flash"></embed></div>');
return '';
}
catch(e) {
return e;
}
}
var FOLDED = /^\s(.*)$/;
var ENTRY = /^([A-Za-z0-9-]+)((?:;[A-Za-z0-9-]+=(?:"[^"]+"|[^";:,]+)(?:,(?:"[^"]+"|[^";:,]+))*)*):(.*)$/;
var PARAM = /;([A-Za-z0-9-]+)=((?:"[^"]+"|[^";:,]+)(?:,(?:"[^"]+"|[^";:,]+))*)/g;
var PARAM_VALUE = /,?("[^"]+"|[^";:,]+)/g;
var DATEONLY = /^(\d{4})(\d\d)(\d\d)$/;
var DATETIME = /^(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)(Z?)$/;
var DATETIME_RANGE = /^(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)(Z?)\/(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)(Z?)$/;
var TZ_OFFSET = /^([+-])(\d\d)(\d\d)$/;
var DURATION = /^([+-])?P(\d+W)?(\d+D)?(T)?(\d+H)?(\d+M)?(\d+S)?$/;
var RESERVED_NAMES = ['class'];
function unfoldLines(content) {
var lines = content.replace(/\r\n/g, '\n').split('\n');
for (var i = lines.length - 1; i > 0; i--) {
var matches = FOLDED.exec(lines[i]);
if (matches) {
lines[i - 1] += matches[1];
lines[i] = '';
}
}
return $.map(lines, function(line, i) { // Remove blank lines
return (line ? line : null);
});
}
function parseGroup(lines, index, owner, timezones) {
if (index >= lines.length || lines[index].indexOf('BEGIN:') != 0) {
throw 'Missing group start';
}
var group = {};
var name = lines[index].substr(6);
addEntry(owner, name.toLowerCase(), group);
index++;
while (index < lines.length && lines[index].indexOf('END:') != 0) {
if (lines[index].indexOf('BEGIN:') == 0) { // Recurse for embedded group
index = parseGroup(lines, index, group, timezones);
}
else {
var entry = parseEntry(lines[index]);
addEntry(group, entry._name, (entry._simple ? entry._value : entry));
}
index++;
}
if (name == 'VTIMEZONE') { // Save timezone offset
var matches = TZ_OFFSET.exec(group.standard.tzoffsetto);
if (matches) {
timezones[group.tzid] = (matches[1] == '-' ? -1 : +1) *
(parseInt(matches[2], 10) * 60 + parseInt(matches[3], 10));
}
}
else {
for (var name2 in group) {
resolveTimezones(group[name2], timezones);
}
}
if (lines[index] != 'END:' + name) {
throw 'Missing group end ' + name;
}
return index;
}
function resolveTimezones(value, timezones) {
if (!value) {
return;
}
if (value.tzid && value._value) {
var offset = timezones[value.tzid];
var offsetDate = function(date, tzid) {
date.setMinutes(date.getMinutes() - offset);
date._type = tzid;
};
if (isArray(value._value)) {
for (var i = 0; i < value._value.length; i++) {
offsetDate(value._value[i], value.tzid);
}
}
else if (value._value.start && value._value.end) {
offsetDate(value._value.start, value.tzid);
offsetDate(value._value.end, value.tzid);
}
else {
offsetDate(value._value, value.tzid);
}
}
else if (isArray(value)) {
for (var i = 0; i < value.length; i++) {
resolveTimezones(value[i], timezones);
}
}
}
function addEntry(owner, name, value) {
if (typeof value == 'string') {
value = value.replace(/\\n/g, '\n');
}
if ($.inArray(name, RESERVED_NAMES) > -1) {
name += '_';
}
if (owner[name]) { // Turn multiple values into an array
if (!isArray(owner[name]) || owner['_' + name + 'IsArray']) {
owner[name] = [owner[name]];
}
owner[name][owner[name].length] = value;
if (owner['_' + name + 'IsArray']) {
owner['_' + name + 'IsArray'] = undefined;
}
}
else {
owner[name] = value;
if (isArray(value)) {
owner['_' + name + 'IsArray'] = true;
}
}
}
function parseEntry(line) {
var entry = {};
var matches = ENTRY.exec(line);
if (!matches) {
throw 'Missing entry name: ' + line;
}
entry._name = matches[1].toLowerCase();
entry._value = checkDate(matches[3]);
entry._simple = true;
parseParams(entry, matches[2]);
return entry;
}
function parseParams(owner, params) {
var param = PARAM.exec(params);
while (param) {
var values = [];
var value = PARAM_VALUE.exec(param[2]);
while (value) {
values.push(checkDate(value[1].replace(/^"(.*)"$/, '$1')));
value = PARAM_VALUE.exec(param[2]);
}
owner[param[1].toLowerCase()] = (values.length > 1 ? values : values[0]);
owner._simple = false;
param = PARAM.exec(params);
}
}
function checkDate(value) {
var matches = DATETIME.exec(value);
if (matches) {
return makeDate(matches);
}
matches = DATETIME_RANGE.exec(value);
if (matches) {
return {start: makeDate(matches), end: makeDate(matches.slice(7))};
}
matches = DATEONLY.exec(value);
if (matches) {
return makeDate(matches.concat([0, 0, 0, '']));
}
return value;
}
function makeDate(matches) {
var date = new Date(matches[1], matches[2] - 1, matches[3],
matches[4], matches[5], matches[6]);
date._type = (matches[7] ? 'UTC' : 'float');
return utcDate(date);
}
function utcDate(date) {
date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
return date;
}
function getWeekOfYear(date, weekStart) {
weekStart = (weekStart || weekStart == 0 ? weekStart : 1);
var checkDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
(date.getTimezoneOffset() / -60));
var firstDay = new Date(checkDate.getFullYear(), 1 - 1, 4); // First week always contains 4 Jan
var firstDOW = firstDay.getDay(); // Day of week: Sun = 0, Mon = 1, ...
firstDay.setDate(4 + weekStart - firstDOW - (weekStart > firstDOW ? 7 : 0)); // Preceding week start
if (checkDate < firstDay) { // Adjust first three days in year if necessary
checkDate.setDate(checkDate.getDate() - 3); // Generate for previous year
return getWeekOfYear(checkDate, weekStart);
} else if (checkDate > new Date(checkDate.getFullYear(), 12 - 1, 28)) { // Check last three days in year
var firstDay2 = new Date(checkDate.getFullYear() + 1, 1 - 1, 4); // Find first week in next year
firstDOW = firstDay2.getDay();
firstDay2.setDate(4 + weekStart - firstDOW - (weekStart > firstDOW ? 7 : 0));
if (checkDate >= firstDay2) { // Adjust if necessary
return 1;
}
}
return Math.floor(((checkDate - firstDay) /
(FREQ_SETTINGS[DY].factor * 1000)) / 7) + 1; // Weeks to given date
}
function isArray(a) {
return (a && a.constructor == Array);
}
})(jQuery);
$(document).ready( function() {
$( '#btnToggleHighContrast' ).click( function( e ) {
e.preventDefault();
toggleHighContrast();
});
});
function toggleHighContrast()
{
if( $( 'body' ).hasClass( 'high_contrast' ) )
{
$( 'body' ).removeClass( 'high_contrast' );
documentCookies.removeItem("high_contrast");
}
else
{
$( 'body' ).addClass( 'high_contrast' );
documentCookies.setItem( 'high_contrast', '1', 7776000 );
}
}
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
$(document).ready(function(){
$('.popup_link').magnificPopup({
type:'inline',
mainClass: 'mfp-fade'
});
$('.close_alerte').click(function() {
$(this).parent().slideUp();
});
$('#sidemenu > li > ul > li ul').hide();
$('#sidemenu > li > ul > li a.in_path').parent().children('ul').stop().show();
$('#sidemenu > li > ul > li').mouseover(function() {
$('#sidemenu > li > ul > li ul').stop().slideUp(1000);
$(this).children('ul').stop().slideDown(1000);
$('#sidemenu > li > ul > li a.in_path').parent().children('ul').stop().show();
});
});
var defaultMarkerLabelX = 5;
var defaultMarkerLabelY = 31;
var defaultMapIcon = "/extension/yosemite_custom/design/www/images/content/picto_carto.png";
var defaultMapIconWithLabel = "/extension/yosemite_custom/design/www/images/content/picto_carto_label.png";
var defaultMapStyle = [
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
{
"visibility": "on"
},
{
"color": "#aee2e0"
}
]
},
{
"featureType": "landscape",
"elementType": "geometry.fill",
"stylers": [
{
"color": "#abce83"
}
]
},
{
"featureType": "poi",
"elementType": "geometry.fill",
"stylers": [
{
"color": "#769E72"
}
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
{
"color": "#7B8758"
}
]
},
{
"featureType": "poi",
"elementType": "labels.text.stroke",
"stylers": [
{
"color": "#EBF4A4"
}
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
{
"visibility": "simplified"
},
{
"color": "#8dab68"
}
]
},
{
"featureType": "road",
"elementType": "geometry.fill",
"stylers": [
{
"visibility": "simplified"
}
]
},
{
"featureType": "road",
"elementType": "labels.text.fill",
"stylers": [
{
"color": "#5B5B3F"
}
]
},
{
"featureType": "road",
"elementType": "labels.text.stroke",
"stylers": [
{
"color": "#ABCE83"
}
]
},
{
"featureType": "road",
"elementType": "labels.icon",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "road.local",
"elementType": "geometry",
"stylers": [
{
"color": "#A4C67D"
}
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
{
"color": "#9BBF72"
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
{
"color": "#EBF4A4"
}
]
},
{
"featureType": "transit",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [
{
"visibility": "on"
},
{
"color": "#87ae79"
}
]
},
{
"featureType": "administrative",
"elementType": "geometry.fill",
"stylers": [
{
"color": "#7f2200"
},
{
"visibility": "off"
}
]
},
{
"featureType": "administrative",
"elementType": "labels.text.stroke",
"stylers": [
{
"color": "#ffffff"
},
{
"visibility": "on"
},
{
"weight": 4.1
}
]
},
{
"featureType": "administrative",
"elementType": "labels.text.fill",
"stylers": [
{
"color": "#495421"
}
]
},
{
"featureType": "administrative.neighborhood",
"elementType": "labels",
"stylers": [
{
"visibility": "off"
}
]
}
];
function inherits(childCtor, parentCtor) {
function tempCtor() {}
tempCtor.prototype = parentCtor.prototype;
childCtor.superClass_ = parentCtor.prototype;
childCtor.prototype = new tempCtor();
childCtor.prototype.constructor = childCtor;
}
function MarkerLabel_(marker, crossURL, handCursorURL) {
this.marker_ = marker;
this.handCursorURL_ = marker.handCursorURL;
this.labelDiv_ = document.createElement("div");
this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;";
this.eventDiv_ = document.createElement("div");
this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;
this.eventDiv_.setAttribute("onselectstart", "return false;");
this.eventDiv_.setAttribute("ondragstart", "return false;");
this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);
}
inherits(MarkerLabel_, google.maps.OverlayView);
MarkerLabel_.getSharedCross = function (crossURL) {
var div;
if (typeof MarkerLabel_.getSharedCross.crossDiv === "undefined") {
div = document.createElement("img");
div.style.cssText = "position: absolute; z-index: 1000002; display: none;";
div.style.marginLeft = "-8px";
div.style.marginTop = "9px";
div.src = crossURL;
MarkerLabel_.getSharedCross.crossDiv = div;
}
return MarkerLabel_.getSharedCross.crossDiv;
};
MarkerLabel_.prototype.onAdd = function () {
var me = this;
var cMouseIsDown = false;
var cDraggingLabel = false;
var cSavedZIndex;
var cLatOffset, cLngOffset;
var cIgnoreClick;
var cRaiseEnabled;
var cStartPosition;
var cStartCenter;
var cRaiseOffset = 20;
var cDraggingCursor = "url(" + this.handCursorURL_ + ")";
var cAbortEvent = function (e) {
if (e.preventDefault) {
e.preventDefault();
}
e.cancelBubble = true;
if (e.stopPropagation) {
e.stopPropagation();
}
};
var cStopBounce = function () {
me.marker_.setAnimation(null);
};
this.getPanes().overlayImage.appendChild(this.labelDiv_);
this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);
if (typeof MarkerLabel_.getSharedCross.processed === "undefined") {
this.getPanes().overlayImage.appendChild(this.crossDiv_);
MarkerLabel_.getSharedCross.processed = true;
}
this.listeners_ = [
google.maps.event.addDomListener(this.eventDiv_, "mouseover", function (e) {
if (me.marker_.getDraggable() || me.marker_.getClickable()) {
this.style.cursor = "pointer";
google.maps.event.trigger(me.marker_, "mouseover", e);
}
}),
google.maps.event.addDomListener(this.eventDiv_, "mouseout", function (e) {
if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {
this.style.cursor = me.marker_.getCursor();
google.maps.event.trigger(me.marker_, "mouseout", e);
}
}),
google.maps.event.addDomListener(this.eventDiv_, "mousedown", function (e) {
cDraggingLabel = false;
if (me.marker_.getDraggable()) {
cMouseIsDown = true;
this.style.cursor = cDraggingCursor;
}
if (me.marker_.getDraggable() || me.marker_.getClickable()) {
google.maps.event.trigger(me.marker_, "mousedown", e);
cAbortEvent(e); // Prevent map pan when starting a drag on a label
}
}),
google.maps.event.addDomListener(document, "mouseup", function (mEvent) {
var position;
if (cMouseIsDown) {
cMouseIsDown = false;
me.eventDiv_.style.cursor = "pointer";
google.maps.event.trigger(me.marker_, "mouseup", mEvent);
}
if (cDraggingLabel) {
if (cRaiseEnabled) { // Lower the marker & label
position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
position.y += cRaiseOffset;
me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
try { // Will fail if running Google Maps API earlier than V3.3
me.marker_.setAnimation(google.maps.Animation.BOUNCE);
setTimeout(cStopBounce, 1406);
} catch (e) {}
}
me.crossDiv_.style.display = "none";
me.marker_.setZIndex(cSavedZIndex);
cIgnoreClick = true; // Set flag to ignore the click event reported after a label drag
cDraggingLabel = false;
mEvent.latLng = me.marker_.getPosition();
google.maps.event.trigger(me.marker_, "dragend", mEvent);
}
}),
google.maps.event.addListener(me.marker_.getMap(), "mousemove", function (mEvent) {
var position;
if (cMouseIsDown) {
if (cDraggingLabel) {
mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);
if (cRaiseEnabled) {
me.crossDiv_.style.left = position.x + "px";
me.crossDiv_.style.top = position.y + "px";
me.crossDiv_.style.display = "";
position.y -= cRaiseOffset;
}
me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
if (cRaiseEnabled) { // Don't raise the veil; this hack needed to make MSIE act properly
me.eventDiv_.style.top = (position.y + cRaiseOffset) + "px";
}
google.maps.event.trigger(me.marker_, "drag", mEvent);
} else {
cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
cSavedZIndex = me.marker_.getZIndex();
cStartPosition = me.marker_.getPosition();
cStartCenter = me.marker_.getMap().getCenter();
cRaiseEnabled = me.marker_.get("raiseOnDrag");
cDraggingLabel = true;
me.marker_.setZIndex(1000000); // Moves the marker & label to the foreground during a drag
mEvent.latLng = me.marker_.getPosition();
google.maps.event.trigger(me.marker_, "dragstart", mEvent);
}
}
}),
google.maps.event.addDomListener(document, "keydown", function (e) {
if (cDraggingLabel) {
if (e.keyCode === 27) { // Esc key
cRaiseEnabled = false;
me.marker_.setPosition(cStartPosition);
me.marker_.getMap().setCenter(cStartCenter);
google.maps.event.trigger(document, "mouseup", e);
}
}
}),
google.maps.event.addDomListener(this.eventDiv_, "click", function (e) {
if (me.marker_.getDraggable() || me.marker_.getClickable()) {
if (cIgnoreClick) { // Ignore the click reported when a label drag ends
cIgnoreClick = false;
} else {
google.maps.event.trigger(me.marker_, "click", e);
cAbortEvent(e); // Prevent click from being passed on to map
}
}
}),
google.maps.event.addDomListener(this.eventDiv_, "dblclick", function (e) {
if (me.marker_.getDraggable() || me.marker_.getClickable()) {
google.maps.event.trigger(me.marker_, "dblclick", e);
cAbortEvent(e); // Prevent map zoom when double-clicking on a label
}
}),
google.maps.event.addListener(this.marker_, "dragstart", function (mEvent) {
if (!cDraggingLabel) {
cRaiseEnabled = this.get("raiseOnDrag");
}
}),
google.maps.event.addListener(this.marker_, "drag", function (mEvent) {
if (!cDraggingLabel) {
if (cRaiseEnabled) {
me.setPosition(cRaiseOffset);
me.labelDiv_.style.zIndex = 1000000 + (this.get("labelInBackground") ? -1 : +1);
}
}
}),
google.maps.event.addListener(this.marker_, "dragend", function (mEvent) {
if (!cDraggingLabel) {
if (cRaiseEnabled) {
me.setPosition(0); // Also restores z-index of label
}
}
}),
google.maps.event.addListener(this.marker_, "position_changed", function () {
me.setPosition();
}),
google.maps.event.addListener(this.marker_, "zindex_changed", function () {
me.setZIndex();
}),
google.maps.event.addListener(this.marker_, "visible_changed", function () {
me.setVisible();
}),
google.maps.event.addListener(this.marker_, "labelvisible_changed", function () {
me.setVisible();
}),
google.maps.event.addListener(this.marker_, "title_changed", function () {
me.setTitle();
}),
google.maps.event.addListener(this.marker_, "labelcontent_changed", function () {
me.setContent();
}),
google.maps.event.addListener(this.marker_, "labelanchor_changed", function () {
me.setAnchor();
}),
google.maps.event.addListener(this.marker_, "labelclass_changed", function () {
me.setStyles();
}),
google.maps.event.addListener(this.marker_, "labelstyle_changed", function () {
me.setStyles();
})
];
};
MarkerLabel_.prototype.onRemove = function () {
var i;
this.labelDiv_.parentNode.removeChild(this.labelDiv_);
this.eventDiv_.parentNode.removeChild(this.eventDiv_);
for (i = 0; i < this.listeners_.length; i++) {
google.maps.event.removeListener(this.listeners_[i]);
}
};
MarkerLabel_.prototype.draw = function () {
this.setContent();
this.setTitle();
this.setStyles();
};
MarkerLabel_.prototype.setContent = function () {
var content = this.marker_.get("labelContent");
if (typeof content.nodeType === "undefined") {
this.labelDiv_.innerHTML = content;
this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
} else {
this.labelDiv_.innerHTML = ""; // Remove current content
this.labelDiv_.appendChild(content);
content = content.cloneNode(true);
this.eventDiv_.innerHTML = ""; // Remove current content
this.eventDiv_.appendChild(content);
}
};
MarkerLabel_.prototype.setTitle = function () {
this.eventDiv_.title = this.marker_.getTitle() || "";
};
MarkerLabel_.prototype.setStyles = function () {
var i, labelStyle;
this.labelDiv_.className = this.marker_.get("labelClass");
this.eventDiv_.className = this.labelDiv_.className;
this.labelDiv_.style.cssText = "";
this.eventDiv_.style.cssText = "";
labelStyle = this.marker_.get("labelStyle");
for (i in labelStyle) {
if (labelStyle.hasOwnProperty(i)) {
this.labelDiv_.style[i] = labelStyle[i];
this.eventDiv_.style[i] = labelStyle[i];
}
}
this.setMandatoryStyles();
};
MarkerLabel_.prototype.setMandatoryStyles = function () {
this.labelDiv_.style.position = "absolute";
this.labelDiv_.style.overflow = "hidden";
if (typeof this.labelDiv_.style.opacity !== "undefined" && this.labelDiv_.style.opacity !== "") {
this.labelDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")\"";
this.labelDiv_.style.filter = "alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")";
}
this.eventDiv_.style.position = this.labelDiv_.style.position;
this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;
this.eventDiv_.style.opacity = 0.01; // Don't use 0; DIV won't be clickable on MSIE
this.eventDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=1)\"";
this.eventDiv_.style.filter = "alpha(opacity=1)"; // For MSIE
this.setAnchor();
this.setPosition(); // This also updates z-index, if necessary.
this.setVisible();
};
MarkerLabel_.prototype.setAnchor = function () {
var anchor = this.marker_.get("labelAnchor");
this.labelDiv_.style.marginLeft = -anchor.x + "px";
this.labelDiv_.style.marginTop = -anchor.y + "px";
this.eventDiv_.style.marginLeft = -anchor.x + "px";
this.eventDiv_.style.marginTop = -anchor.y + "px";
};
MarkerLabel_.prototype.setPosition = function (yOffset) {
var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
if (typeof yOffset === "undefined") {
yOffset = 0;
}
this.labelDiv_.style.left = Math.round(position.x) + "px";
this.labelDiv_.style.top = Math.round(position.y - yOffset) + "px";
this.eventDiv_.style.left = this.labelDiv_.style.left;
this.eventDiv_.style.top = this.labelDiv_.style.top;
this.setZIndex();
};
MarkerLabel_.prototype.setZIndex = function () {
var zAdjust = (this.marker_.get("labelInBackground") ? -1 : +1);
if (typeof this.marker_.getZIndex() === "undefined") {
this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;
this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
} else {
this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;
this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
}
};
MarkerLabel_.prototype.setVisible = function () {
if (this.marker_.get("labelVisible")) {
this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none";
} else {
this.labelDiv_.style.display = "none";
}
this.eventDiv_.style.display = this.labelDiv_.style.display;
};
function MarkerWithLabel(opt_options) {
opt_options = opt_options || {};
opt_options.labelContent = opt_options.labelContent || "";
opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);
opt_options.labelClass = opt_options.labelClass || "markerLabels";
opt_options.labelStyle = opt_options.labelStyle || {};
opt_options.labelInBackground = opt_options.labelInBackground || false;
if (typeof opt_options.labelVisible === "undefined") {
opt_options.labelVisible = true;
}
if (typeof opt_options.raiseOnDrag === "undefined") {
opt_options.raiseOnDrag = true;
}
if (typeof opt_options.clickable === "undefined") {
opt_options.clickable = true;
}
if (typeof opt_options.draggable === "undefined") {
opt_options.draggable = false;
}
if (typeof opt_options.optimized === "undefined") {
opt_options.optimized = false;
}
opt_options.crossImage = opt_options.crossImage || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";
opt_options.handCursor = opt_options.handCursor || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";
opt_options.optimized = false; // Optimized rendering is not supported
this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor); // Bind the label to the marker
google.maps.Marker.apply(this, arguments);
}
inherits(MarkerWithLabel, google.maps.Marker);
MarkerWithLabel.prototype.setMap = function (theMap) {
google.maps.Marker.prototype.setMap.apply(this, arguments);
this.label.setMap(theMap);
};
(function(){var a,b,c,d,e,f,g,h,i,j;a=window.device,window.device={},c=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return d("iphone")},device.ipod=function(){return d("ipod")},device.ipad=function(){return d("ipad")},device.android=function(){return d("android")},device.androidPhone=function(){return device.android()&&d("mobile")},device.androidTablet=function(){return device.android()&&!d("mobile")},device.blackberry=function(){return d("blackberry")||d("bb10")||d("rim")},device.blackberryPhone=function(){return device.blackberry()&&!d("tablet")},device.blackberryTablet=function(){return device.blackberry()&&d("tablet")},device.windows=function(){return d("windows")},device.windowsPhone=function(){return device.windows()&&d("phone")},device.windowsTablet=function(){return device.windows()&&d("touch")},device.fxos=function(){return(d("(mobile;")||d("(tablet;"))&&d("; rv:")},device.fxosPhone=function(){return device.fxos()&&d("mobile")},device.fxosTablet=function(){return device.fxos()&&d("tablet")},device.meego=function(){return d("meego")},device.cordova=function(){return window.cordova&&"file:"===location.protocol},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.desktop=function(){return!device.tablet()&&!device.mobile()},device.portrait=function(){return window.innerHeight/window.innerWidth>1},device.landscape=function(){return window.innerHeight/window.innerWidth<1},device.noConflict=function(){return window.device=a,this},d=function(a){return-1!==j.indexOf(a)},f=function(a){var b;return b=new RegExp(a,"i"),c.className.match(b)},b=function(a){return f(a)?void 0:c.className+=" "+a},h=function(a){return f(a)?c.className=c.className.replace(a,""):void 0},device.ios()?device.ipad()?b("ios ipad tablet"):device.iphone()?b("ios iphone mobile"):device.ipod()&&b("ios ipod mobile"):b(device.android()?device.androidTablet()?"android tablet":"android mobile":device.blackberry()?device.blackberryTablet()?"blackberry tablet":"blackberry mobile":device.windows()?device.windowsTablet()?"windows tablet":device.windowsPhone()?"windows mobile":"desktop":device.fxos()?device.fxosTablet()?"fxos tablet":"fxos mobile":device.meego()?"meego mobile":"desktop"),device.cordova()&&b("cordova"),e=function(){return device.landscape()?(h("portrait"),b("landscape")):(h("landscape"),b("portrait"))},i="onorientationchange"in window,g=i?"orientationchange":"resize",window.addEventListener?window.addEventListener(g,e,!1):window.attachEvent?window.attachEvent(g,e):window[g]=e,e()}).call(this);
!function(e){function s(s,n,t){if(t){if("object"!=typeof s&&(s={}),"boolean"!=typeof s.isMenu){var i=t.children();s.isMenu=1==i.length&&i.is(n.panelNodetype)}return s}s=e.extend(!0,{},e[a].defaults,s),("top"==s.position||"bottom"==s.position)&&("back"==s.zposition||"next"==s.zposition)&&(e[a].deprecated('Using position "'+s.position+'" in combination with zposition "'+s.zposition+'"','zposition "front"'),s.zposition="front");for(var o=["position","zposition","modal","moveBackground"],l=0,d=o.length;d>l;l++)"undefined"!=typeof s[o[l]]&&(e[a].deprecated('The option "'+o[l]+'"',"offCanvas."+o[l]),s.offCanvas=s.offCanvas||{},s.offCanvas[o[l]]=s[o[l]]);return s}function n(s){s=e.extend(!0,{},e[a].configuration,s);for(var n=["panel","list","selected","label","spacer"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s[n[t]+"Class"]&&(e[a].deprecated('The configuration option "'+n[t]+'Class"',"classNames."+n[t]),s.classNames[n[t]]=s[n[t]+"Class"]);if("undefined"!=typeof s.counterClass&&(e[a].deprecated('The configuration option "counterClass"',"classNames.counters.counter"),s.classNames.counters=s.classNames.counters||{},s.classNames.counters.counter=s.counterClass),"undefined"!=typeof s.collapsedClass&&(e[a].deprecated('The configuration option "collapsedClass"',"classNames.labels.collapsed"),s.classNames.labels=s.classNames.labels||{},s.classNames.labels.collapsed=s.collapsedClass),"undefined"!=typeof s.header)for(var n=["panelHeader","panelNext","panelPrev"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s.header[n[t]+"Class"]&&(e[a].deprecated('The configuration option "header.'+n[t]+'Class"',"classNames.header."+n[t]),s.classNames.header=s.classNames.header||{},s.classNames.header[n[t]]=s.header[n[t]+"Class"]);for(var n=["pageNodetype","pageSelector","menuWrapperSelector","menuInjectMethod"],t=0,i=n.length;i>t;t++)"undefined"!=typeof s[n[t]]&&(e[a].deprecated('The configuration option "'+n[t]+'"',"offCanvas."+n[t]),s.offCanvas=s.offCanvas||{},s.offCanvas[n[t]]=s[n[t]]);return s}function t(){u=!0,c.$wndw=e(window),c.$html=e("html"),c.$body=e("body"),e.each([l,d,r],function(e,s){s.add=function(e){e=e.split(" ");for(var n in e)s[e[n]]=s.mm(e[n])}}),l.mm=function(e){return"mm-"+e},l.add("wrapper menu ismenu inline panel list subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"),l.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},d.mm=function(e){return"mm-"+e},d.add("parent"),r.mm=function(e){return e+".mm"},r.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"),e[a]._c=l,e[a]._d=d,e[a]._e=r,e[a].glbl=c}function i(s,n){if(s.hasClass(l.current))return!1;var t=e("."+l.panel,n),i=t.filter("."+l.current);return t.removeClass(l.highest).removeClass(l.current).not(s).not(i).addClass(l.hidden),s.hasClass(l.opened)?i.addClass(l.highest).removeClass(l.opened).removeClass(l.subopened):(s.addClass(l.highest),i.addClass(l.subopened)),s.removeClass(l.hidden).addClass(l.current),setTimeout(function(){s.removeClass(l.subopened).addClass(l.opened)},25),"open"}var a="mmenu",o="4.3.2";if(!e[a]){var l={},d={},r={},u=!1,c={$wndw:null,$html:null,$body:null};e[a]=function(e,s,n){return this.$menu=e,this.opts=s,this.conf=n,this.vars={},this._init(),this},e[a].uniqueId=0,e[a].prototype={_init:function(){if(this.opts=s(this.opts,this.conf,this.$menu),this._initMenu(),this._initPanels(),this._initLinks(),this._bindCustomEvents(),e[a].addons)for(var n=0;n<e[a].addons.length;n++)"function"==typeof this["_addon_"+e[a].addons[n]]&&this["_addon_"+e[a].addons[n]]()},_bindCustomEvents:function(){var s=this,n=this.$menu.find(this.opts.isMenu&&!this.opts.slidingSubmenus?"ul, ol":"."+l.panel);n.off(r.toggle+" "+r.open+" "+r.close).on(r.toggle+" "+r.open+" "+r.close,function(e){e.stopPropagation()}),this.opts.slidingSubmenus?n.on(r.open,function(){return i(e(this),s.$menu)}):n.on(r.toggle,function(){var s=e(this);return s.triggerHandler(s.parent().hasClass(l.opened)?r.close:r.open)}).on(r.open,function(){return e(this).parent().addClass(l.opened),"open"}).on(r.close,function(){return e(this).parent().removeClass(l.opened),"close"})},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",l.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(l.wrapper);var s=[l.menu];s.push(l.mm(this.opts.slidingSubmenus?"horizontal":"vertical")),this.opts.classes&&s.push(this.opts.classes),this.opts.isMenu&&s.push(l.ismenu),this.$menu.addClass(s.join(" "))},_initPanels:function(){var s=this;this.__refactorClass(e("."+this.conf.classNames.list,this.$menu),this.conf.classNames.list,"list"),this.opts.isMenu&&e("ul, ol",this.$menu).not(".mm-nolist").addClass(l.list);var n=e("."+l.list+" > li",this.$menu);this.__refactorClass(n,this.conf.classNames.selected,"selected"),this.__refactorClass(n,this.conf.classNames.label,"label"),this.__refactorClass(n,this.conf.classNames.spacer,"spacer"),n.off(r.setSelected).on(r.setSelected,function(s,t){s.stopPropagation(),n.removeClass(l.selected),"boolean"!=typeof t&&(t=!0),t&&e(this).addClass(l.selected)}),this.__refactorClass(e("."+this.conf.classNames.panel,this.$menu),this.conf.classNames.panel,"panel"),this.$menu.children().filter(this.conf.panelNodetype).add(this.$menu.find("."+l.list).children().children().filter(this.conf.panelNodetype)).addClass(l.panel);var t=e("."+l.panel,this.$menu);t.each(function(){var n=e(this),t=n.attr("id")||s.__getUniqueId();n.attr("id",t)}),t.find("."+l.panel).each(function(){var n=e(this),t=n.is("ul, ol")?n:n.find("ul ,ol").first(),i=n.parent(),a=i.find("> a, > span"),o=i.closest("."+l.panel);if(n.data(d.parent,i),i.parent().is("."+l.list)){var r=e('<a class="'+l.subopen+'" href="#'+n.attr("id")+'" />').insertBefore(a);a.is("a")||r.addClass(l.fullsubopen),s.opts.slidingSubmenus&&t.prepend('<li class="'+l.subtitle+'"><a class="'+l.subclose+'" href="#'+o.attr("id")+'">'+a.text()+"</a></li>")}});var i=this.opts.slidingSubmenus?r.open:r.toggle;if(t.each(function(){var n=e(this),t=n.attr("id");e('a[href="#'+t+'"]',s.$menu).off(r.click).on(r.click,function(e){e.preventDefault(),n.trigger(i)})}),this.opts.slidingSubmenus){var a=e("."+l.list+" > li."+l.selected,this.$menu);a.parents("li").removeClass(l.selected).end().add(a.parents("li")).each(function(){var s=e(this),n=s.find("> ."+l.panel);n.length&&(s.parents("."+l.panel).addClass(l.subopened),n.addClass(l.opened))}).closest("."+l.panel).addClass(l.opened).parents("."+l.panel).addClass(l.subopened)}else{var a=e("li."+l.selected,this.$menu);a.parents("li").removeClass(l.selected).end().add(a.parents("li")).addClass(l.opened)}var o=t.filter("."+l.opened);o.length||(o=t.first()),o.addClass(l.opened).last().addClass(l.current),this.opts.slidingSubmenus&&t.not(o.last()).addClass(l.hidden).end().find("."+l.panel).appendTo(this.$menu)},_initLinks:function(){var s=this;e("."+l.list+" > li > a",this.$menu).not("."+l.subopen).not("."+l.subclose).not('[rel="external"]').not('[target="_blank"]').off(r.click).on(r.click,function(n){var t=e(this),i=t.attr("href");s.__valueOrFn(s.opts.onClick.setSelected,t)&&t.parent().trigger(r.setSelected);var a=s.__valueOrFn(s.opts.onClick.preventDefault,t,"#"==i.slice(0,1));a&&n.preventDefault(),s.__valueOrFn(s.opts.onClick.blockUI,t,!a)&&c.$html.addClass(l.blocking),s.__valueOrFn(s.opts.onClick.close,t,a)&&s.$menu.triggerHandler(r.close)})},_update:function(e){if(this.updates||(this.updates=[]),"function"==typeof e)this.updates.push(e);else for(var s=0,n=this.updates.length;n>s;s++)this.updates[s].call(this,e)},__valueOrFn:function(e,s,n){return"function"==typeof e?e.call(s[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,s,n){e.filter("."+s).removeClass(s).addClass(l[n])},__transitionend:function(e,s,n){var t=!1,i=function(){t||s.call(e[0]),t=!0};e.one(r.transitionend,i),e.one(r.webkitTransitionEnd,i),setTimeout(i,1.1*n)},__getUniqueId:function(){return l.mm(e[a].uniqueId++)}},e.fn[a]=function(i,o){return u||t(),i=s(i,o),o=n(o),this.each(function(){var s=e(this);s.data(a)||s.data(a,new e[a](s,i,o))})},e[a].version=o,e[a].defaults={classes:"",slidingSubmenus:!0,onClick:{setSelected:!0}},e[a].configuration={panelNodetype:"ul, ol, div",transitionDuration:400,classNames:{panel:"Panle",list:"List",selected:"Selected",label:"Label",spacer:"Spacer"}},function(){var s=window.document,n=window.navigator.userAgent,t="ontouchstart"in s,i="WebkitOverflowScrolling"in s.documentElement.style,o=function(){return n.indexOf("Android")>=0?2.4>parseFloat(n.slice(n.indexOf("Android")+8)):!1}();e[a].support={touch:t,oldAndroidBrowser:o,overflowscrolling:function(){return t?i?!0:o?!1:!0:!0}()}}(),e[a].debug=function(){},e[a].deprecated=function(e,s){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn("MMENU: "+e+" is deprecated, use "+s+" instead.")}}}(jQuery);
!function(e){function o(e){return e}function t(e){return"string"!=typeof e.pageSelector&&(e.pageSelector="> "+e.pageNodetype),e}function n(){u=!0,s=e[r]._c,i=e[r]._d,a=e[r]._e,s.add("offcanvas modal background opening blocker page"),i.add("style"),a.add("opening opened closing closed setPage"),p=e[r].glbl,p.$allMenus=(p.$allMenus||e()).add(this.$menu),p.$wndw.on(a.keydown,function(e){return p.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var o=0;p.$wndw.on(a.resize,function(e,t){if(t||p.$html.hasClass(s.opened)){var n=p.$wndw.height();(t||n!=o)&&(o=n,p.$page.css("minHeight",n))}})}var s,i,a,p,r="mmenu",l="offCanvas",u=!1;e[r].prototype["_addon_"+l]=function(){if(!this.opts[l])return this;u||n(),this.opts[l]=o(this.opts[l]),this.conf[l]=t(this.conf[l]),this.vars.opened=!1;var e=this.opts[l],i=this.conf[l],a=[s.offcanvas];"left"!=e.position&&a.push(s.mm(e.position)),"back"!=e.zposition&&a.push(s.mm(e.zposition)),this.$menu.addClass(a.join(" ")).parent().removeClass(s.wrapper),this[l+"_initPage"](p.$page),this[l+"_initBlocker"](),this[l+"_initOpenClose"](),this[l+"_bindCustomEvents"](),this.$menu[i.menuInjectMethod+"To"](i.menuWrapperSelector)},e[r].addons=e[r].addons||[],e[r].addons.push(l),e[r].defaults[l]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[r].configuration[l]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[r].prototype.open=function(){if(this.vars.opened)return!1;var e=this;return this._openSetup(),setTimeout(function(){e._openFinish()},25),"open"},e[r].prototype._openSetup=function(){p.$allMenus.not(this.$menu).trigger(a.close),p.$page.data(i.style,p.$page.attr("style")||""),p.$wndw.trigger(a.resize,[!0]);var e=[s.opened];this.opts[l].modal&&e.push(s.modal),this.opts[l].moveBackground&&e.push(s.background),"left"!=this.opts[l].position&&e.push(s.mm(this.opts[l].position)),"back"!=this.opts[l].zposition&&e.push(s.mm(this.opts[l].zposition)),this.opts.classes&&e.push(this.opts.classes),p.$html.addClass(e.join(" ")),this.$menu.addClass(s.current+" "+s.opened)},e[r].prototype._openFinish=function(){var e=this;this.__transitionend(p.$page,function(){e.$menu.trigger(a.opened)},this.conf.transitionDuration),this.vars.opened=!0,p.$html.addClass(s.opening),this.$menu.trigger(a.opening)},e[r].prototype.close=function(){if(!this.vars.opened)return!1;var e=this;return this.__transitionend(p.$page,function(){e.$menu.removeClass(s.current).removeClass(s.opened),p.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[l].position)).removeClass(s.mm(e.opts[l].zposition)),e.opts.classes&&p.$html.removeClass(e.opts.classes),p.$page.attr("style",p.$page.data(i.style)),e.vars.opened=!1,e.$menu.trigger(a.closed)},this.conf.transitionDuration),p.$html.removeClass(s.opening),this.$menu.trigger(a.closing),"close"},e[r].prototype[l+"_initBlocker"]=function(){var o=this;p.$blck||(p.$blck=e('<div id="'+s.blocker+'" />').appendTo(p.$body)),p.$blck.off(a.touchstart).on(a.touchstart,function(e){e.preventDefault(),e.stopPropagation(),p.$blck.trigger(a.mousedown)}).on(a.mousedown,function(e){e.preventDefault(),p.$html.hasClass(s.modal)||o.close()})},e[r].prototype[l+"_initPage"]=function(o){o||(o=e(this.conf[l].pageSelector,p.$body),o.length>1&&(e[r].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <"+this.conf[l].pageNodetype+">."),o=o.wrapAll("<"+this.conf[l].pageNodetype+" />").parent())),o.addClass(s.page),p.$page=o},e[r].prototype[l+"_initOpenClose"]=function(){var o=this,t=this.$menu.attr("id");t&&t.length&&(this.conf.clone&&(t=s.umm(t)),e('a[href="#'+t+'"]').off(a.click).on(a.click,function(e){e.preventDefault(),o.open()}));var t=p.$page.attr("id");t&&t.length&&e('a[href="#'+t+'"]').on(a.click,function(e){e.preventDefault(),o.close()})},e[r].prototype[l+"_bindCustomEvents"]=function(){var e=this,o=a.open+" "+a.opening+" "+a.opened+" "+a.close+" "+a.closing+" "+a.closed+" "+a.setPage;this.$menu.off(o).on(o,function(e){e.stopPropagation()}),this.$menu.on(a.open,function(){e.open()}).on(a.close,function(){e.close()}).on(a.setPage,function(o,t){e[l+"_initPage"](t),e[l+"_initOpenClose"]()})}}(jQuery);
(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";var t={wheelSpeed:10,wheelPropagation:!1,minScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},o=function(){var e=0;return function(){var t=e;return e+=1,".perfect-scrollbar-"+t}}();e.fn.perfectScrollbar=function(n,r){return this.each(function(){var l=e.extend(!0,{},t),s=e(this);if("object"==typeof n?e.extend(!0,l,n):r=n,"update"===r)return s.data("perfect-scrollbar-update")&&s.data("perfect-scrollbar-update")(),s;if("destroy"===r)return s.data("perfect-scrollbar-destroy")&&s.data("perfect-scrollbar-destroy")(),s;if(s.data("perfect-scrollbar"))return s.data("perfect-scrollbar");s.addClass("ps-container");var a,i,c,u,d,p,f,h,v,g,b=e("<div class='ps-scrollbar-x-rail'></div>").appendTo(s),m=e("<div class='ps-scrollbar-y-rail'></div>").appendTo(s),w=e("<div class='ps-scrollbar-x'></div>").appendTo(b),T=e("<div class='ps-scrollbar-y'></div>").appendTo(m),L=parseInt(b.css("bottom"),10),y=L===L,S=y?null:parseInt(b.css("top"),10),I=parseInt(m.css("right"),10),x=I===I,M=x?null:parseInt(m.css("left"),10),P="rtl"===s.css("direction"),X=o(),D=function(e,t){var o=e+t,n=u-v;g=0>o?0:o>n?n:o;var r=parseInt(g*(p-u)/(u-v),10);s.scrollTop(r),y?b.css({bottom:L-r}):b.css({top:S+r})},Y=function(e,t){var o=e+t,n=c-f;h=0>o?0:o>n?n:o;var r=parseInt(h*(d-c)/(c-f),10);s.scrollLeft(r),x?m.css({right:I-r}):m.css({left:M+r})},k=function(e){return l.minScrollbarLength&&(e=Math.max(e,l.minScrollbarLength)),e},C=function(){var e={width:c,display:a?"inherit":"none"};e.left=P?s.scrollLeft()+c-d:s.scrollLeft(),y?e.bottom=L-s.scrollTop():e.top=S+s.scrollTop(),b.css(e);var t={top:s.scrollTop(),height:u,display:i?"inherit":"none"};x?t.right=P?d-s.scrollLeft()-I-T.outerWidth():I-s.scrollLeft():t.left=P?s.scrollLeft()+2*c-d-M-T.outerWidth():M+s.scrollLeft(),m.css(t),w.css({left:h,width:f}),T.css({top:g,height:v})},j=function(){c=l.includePadding?s.innerWidth():s.width(),u=l.includePadding?s.innerHeight():s.height(),d=s.prop("scrollWidth"),p=s.prop("scrollHeight"),!l.suppressScrollX&&d>c+l.scrollXMarginOffset?(a=!0,f=k(parseInt(c*c/d,10)),h=parseInt(s.scrollLeft()*(c-f)/(d-c),10)):(a=!1,f=0,h=0,s.scrollLeft(0)),!l.suppressScrollY&&p>u+l.scrollYMarginOffset?(i=!0,v=k(parseInt(u*u/p,10)),g=parseInt(s.scrollTop()*(u-v)/(p-u),10)):(i=!1,v=0,g=0,s.scrollTop(0)),g>=u-v&&(g=u-v),h>=c-f&&(h=c-f),C()},O=function(){var t,o;w.bind("mousedown"+X,function(e){o=e.pageX,t=w.position().left,b.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+X,function(e){b.hasClass("in-scrolling")&&(Y(t,e.pageX-o),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+X,function(){b.hasClass("in-scrolling")&&b.removeClass("in-scrolling")}),t=o=null},W=function(){var t,o;T.bind("mousedown"+X,function(e){o=e.pageY,t=T.position().top,m.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+X,function(e){m.hasClass("in-scrolling")&&(D(t,e.pageY-o),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+X,function(){m.hasClass("in-scrolling")&&m.removeClass("in-scrolling")}),t=o=null},E=function(e,t){var o=s.scrollTop();if(0===e){if(!i)return!1;if(0===o&&t>0||o>=p-u&&0>t)return!l.wheelPropagation}var n=s.scrollLeft();if(0===t){if(!a)return!1;if(0===n&&0>e||n>=d-c&&e>0)return!l.wheelPropagation}return!0},H=function(){l.wheelSpeed/=10;var e=!1;s.bind("mousewheel"+X,function(t,o,n,r){var c=t.deltaX*t.deltaFactor||n,u=t.deltaY*t.deltaFactor||r;e=!1,l.useBothWheelAxes?i&&!a?(u?s.scrollTop(s.scrollTop()-u*l.wheelSpeed):s.scrollTop(s.scrollTop()+c*l.wheelSpeed),e=!0):a&&!i&&(c?s.scrollLeft(s.scrollLeft()+c*l.wheelSpeed):s.scrollLeft(s.scrollLeft()-u*l.wheelSpeed),e=!0):(s.scrollTop(s.scrollTop()-u*l.wheelSpeed),s.scrollLeft(s.scrollLeft()+c*l.wheelSpeed)),j(),e=e||E(c,u),e&&(t.stopPropagation(),t.preventDefault())}),s.bind("MozMousePixelScroll"+X,function(t){e&&t.preventDefault()})},A=function(){var t=!1;s.bind("mouseenter"+X,function(){t=!0}),s.bind("mouseleave"+X,function(){t=!1});var o=!1;e(document).bind("keydown"+X,function(n){if(t&&!e(document.activeElement).is(":input,[contenteditable]")){var r=0,l=0;switch(n.which){case 37:r=-30;break;case 38:l=30;break;case 39:r=30;break;case 40:l=-30;break;case 33:l=90;break;case 32:case 34:l=-90;break;case 35:l=-u;break;case 36:l=u;break;default:return}s.scrollTop(s.scrollTop()-l),s.scrollLeft(s.scrollLeft()+r),o=E(r,l),o&&n.preventDefault()}})},q=function(){var e=function(e){e.stopPropagation()};T.bind("click"+X,e),m.bind("click"+X,function(e){var t=parseInt(v/2,10),o=e.pageY-m.offset().top-t,n=u-v,r=o/n;0>r?r=0:r>1&&(r=1),s.scrollTop((p-u)*r)}),w.bind("click"+X,e),b.bind("click"+X,function(e){var t=parseInt(f/2,10),o=e.pageX-b.offset().left-t,n=c-f,r=o/n;0>r?r=0:r>1&&(r=1),s.scrollLeft((d-c)*r)})},F=function(){var t=function(e,t){s.scrollTop(s.scrollTop()-t),s.scrollLeft(s.scrollLeft()-e),j()},o={},n=0,r={},l=null,a=!1;e(window).bind("touchstart"+X,function(){a=!0}),e(window).bind("touchend"+X,function(){a=!1}),s.bind("touchstart"+X,function(e){var t=e.originalEvent.targetTouches[0];o.pageX=t.pageX,o.pageY=t.pageY,n=(new Date).getTime(),null!==l&&clearInterval(l),e.stopPropagation()}),s.bind("touchmove"+X,function(e){if(!a&&1===e.originalEvent.targetTouches.length){var l=e.originalEvent.targetTouches[0],s={};s.pageX=l.pageX,s.pageY=l.pageY;var i=s.pageX-o.pageX,c=s.pageY-o.pageY;t(i,c),o=s;var u=(new Date).getTime(),d=u-n;d>0&&(r.x=i/d,r.y=c/d,n=u),e.preventDefault()}}),s.bind("touchend"+X,function(){clearInterval(l),l=setInterval(function(){return.01>Math.abs(r.x)&&.01>Math.abs(r.y)?(clearInterval(l),void 0):(t(30*r.x,30*r.y),r.x*=.8,r.y*=.8,void 0)},10)})},z=function(){s.bind("scroll"+X,function(){j()})},B=function(){s.unbind(X),e(window).unbind(X),e(document).unbind(X),s.data("perfect-scrollbar",null),s.data("perfect-scrollbar-update",null),s.data("perfect-scrollbar-destroy",null),w.remove(),T.remove(),b.remove(),m.remove(),b=m=w=T=a=i=c=u=d=p=f=h=L=y=S=v=g=I=x=M=P=X=null},K=function(t){s.addClass("ie").addClass("ie"+t);var o=function(){var t=function(){e(this).addClass("hover")},o=function(){e(this).removeClass("hover")};s.bind("mouseenter"+X,t).bind("mouseleave"+X,o),b.bind("mouseenter"+X,t).bind("mouseleave"+X,o),m.bind("mouseenter"+X,t).bind("mouseleave"+X,o),w.bind("mouseenter"+X,t).bind("mouseleave"+X,o),T.bind("mouseenter"+X,t).bind("mouseleave"+X,o)},n=function(){C=function(){var e={left:h+s.scrollLeft(),width:f};y?e.bottom=L:e.top=S,w.css(e);var t={top:g+s.scrollTop(),height:v};x?t.right=I:t.left=M,T.css(t),w.hide().show(),T.hide().show()}};6===t&&(o(),n())},Q="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,N=function(){var e=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);e&&"msie"===e[1]&&K(parseInt(e[2],10)),j(),z(),O(),W(),q(),Q&&F(),s.mousewheel&&H(),l.useKeyboard&&A(),s.data("perfect-scrollbar",s),s.data("perfect-scrollbar-update",j),s.data("perfect-scrollbar-destroy",B)};return N(),s})}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var s=t||window.event,a=i.call(arguments,1),c=0,u=0,d=0,p=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(u=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(u=-1*d,d=0),c=0===d?u:d,"deltaY"in s&&(d=-1*s.deltaY,c=d),"deltaX"in s&&(u=s.deltaX,0===d&&(c=-1*u)),0!==d||0!==u){if(1===s.deltaMode){var f=e.data(this,"mousewheel-line-height");c*=f,d*=f,u*=f}else if(2===s.deltaMode){var h=e.data(this,"mousewheel-page-height");c*=h,d*=h,u*=h}return p=Math.max(Math.abs(d),Math.abs(u)),(!l||l>p)&&(l=p,n(s,p)&&(l/=40)),n(s,p)&&(c/=40,u/=40,d/=40),c=Math[c>=1?"floor":"ceil"](c/l),u=Math[u>=1?"floor":"ceil"](u/l),d=Math[d>=1?"floor":"ceil"](d/l),t.deltaX=u,t.deltaY=d,t.deltaFactor=l,t.deltaMode=0,a.unshift(t,c,u,d),r&&clearTimeout(r),r=setTimeout(o,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function o(){l=null}function n(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&0===t%120}var r,l,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(e.event.fixHooks)for(var c=s.length;c;)e.event.fixHooks[s[--c]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var o=a.length;o;)this.addEventListener(a[--o],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=a.length;e;)this.removeEventListener(a[--e],t,!1);else this.onmousewheel=null},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=lt[x].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=rt(A.props[o].value,F.props[o].value,C),a=nt(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/gt),n=0|vt.startTop+t*vt.topDiff)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(V),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];"function"==typeof define&&define.amd?define("skrollr",function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);
(function(){(function(n,e){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],e)}else{return e(n.jQuery)}})(window,function(n){var e;e={container:"auto",items:".infinite-item",more:".infinite-more-link",offset:"bottom-in-view",loadingClass:"infinite-loading",onBeforePageLoad:n.noop,onAfterPageLoad:n.noop};return n.waypoints("extendFn","infinite",function(t){var i,o;o=n.extend({},n.fn.waypoint.defaults,e,t);if(n(o.more).length===0){return this}i=o.container==="auto"?this:n(o.container);o.handler=function(e){var t;if(e==="down"||e==="right"){t=n(this);o.onBeforePageLoad();t.waypoint("destroy");i.addClass(o.loadingClass);return n.get(n(o.more).attr("href"),function(e){var r,a,f,s;r=n(n.parseHTML(e));a=n(o.more);f=r.find(o.more);i.append(r.find(o.items));i.removeClass(o.loadingClass);if(f.length){a.replaceWith(f);s=function(){return t.waypoint(o)};setTimeout(s,0)}else{a.remove()}return o.onAfterPageLoad()})}};return this.waypoint(o)})})}).call(this);
(function(){(function(t,n){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],n)}else{return n(t.jQuery)}})(window,function(t){var n,i;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"};i=function(t,n){var i;t.wrap(n.wrapper);i=t.parent();return i.data("isWaypointStickyWrapper",true)};t.waypoints("extendFn","sticky",function(r){var e,a,s;a=t.extend({},t.fn.waypoint.defaults,n,r);e=i(this,a);s=a.handler;a.handler=function(n){var i,r;i=t(this).children(":first");r=a.direction.indexOf(n)!==-1;i.toggleClass(a.stuckClass,r);e.height(r?i.outerHeight():"");if(s!=null){return s.call(this,n)}};e.waypoint(a);return this.data("stuckClass",a.stuckClass)});return t.waypoints("extendFn","unsticky",function(){var t;t=this.parent();if(!t.data("isWaypointStickyWrapper")){return this}t.waypoint("destroy");this.unwrap();return this.removeClass(this.data("stuckClass"))})})}).call(this);
$(document).ready( function() {
if( jQuery().mediaelementplayer )
$('video,audio').mediaelementplayer();
});
(function() {
var triggerBttn = document.getElementById( 'burger' ),
overlay = document.querySelector( 'div.overlay' ),
closeBttn = overlay.querySelector( 'button.overlay-close' );
transEndEventNames = {
'WebkitTransition': 'webkitTransitionEnd',
'MozTransition': 'transitionend',
'OTransition': 'oTransitionEnd',
'msTransition': 'MSTransitionEnd',
'transition': 'transitionend'
},
transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
support = { transitions : Modernizr.csstransitions };
function toggleOverlay() {
if( classie.has( overlay, 'open' ) ) {
classie.remove( overlay, 'open' );
classie.add( overlay, 'close' );
var onEndTransitionFn = function( ev ) {
if( support.transitions ) {
if( ev.propertyName !== 'visibility' ) return;
this.removeEventListener( transEndEventName, onEndTransitionFn );
}
classie.remove( overlay, 'close' );
};
if( support.transitions ) {
overlay.addEventListener( transEndEventName, onEndTransitionFn );
}
else {
onEndTransitionFn();
}
}
else if( !classie.has( overlay, 'close' ) ) {
classie.add( overlay, 'open' );
}
}
triggerBttn.addEventListener( 'click', toggleOverlay );
closeBttn.addEventListener( 'click', toggleOverlay );
})();
gaProperty = $('#cnil_banner_consent').attr( 'data-site-id' );
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf('hasConsent=false') > -1)
window[disableStr] = true;
function getCookieExpireDate()
{
var cookieTimeout = 34214400000;
var date = new Date();
date.setTime(date.getTime()+cookieTimeout);
var expires = "; expires="+date.toGMTString();
return expires;
}
function askConsent()
{
$('#cnil_banner_consent').show();
}
$('#cnil_banner_consent .close').click(function() {
$('#cnil_banner_consent').slideUp();
});
function getCookie(NomDuCookie)
{
if (document.cookie.length > 0)
{
begin = document.cookie.indexOf(NomDuCookie+"=");
if (begin != -1)
{
begin += NomDuCookie.length+1;
end = document.cookie.indexOf(";", begin);
if (end == -1)
end = document.cookie.length;
return unescape(document.cookie.substring(begin, end));
}
}
return null;
}
function delCookie(name )
{
var path = ";path=" + "/";
var expiration = "Thu, 01-Jan-1970 00:00:01 GMT";
var domain=";domain=" + "."+document.location.hostname;
document.cookie = name + "=" + path + domain + ";expires=" + expiration;
domain=document.location.hostname;
domain=";domain=" + "."+domain.substring(domain.lastIndexOf(".", domain.lastIndexOf(".") - 1) + 1);
document.cookie = name + "=" + path + domain + ";expires=" + expiration;
}
function deleteAnalyticsCookies()
{
var cookieNames = ["__utma","__utmb","__utmc","__utmz","_ga"]
for (var i=0; i<cookieNames.length; i++)
delCookie(cookieNames[i])
}
function gaOptout() {
document.cookie = disableStr + '=true;'+ getCookieExpireDate() +' ; path=/';
document.cookie = 'hasConsent=false;'+ getCookieExpireDate() +' ; path=/';
$('#cnil_banner_consent').slideUp();
window[disableStr] = true;
deleteAnalyticsCookies();
}
var consentCookie =  getCookie('hasConsent');
if (consentCookie == null)
{
var referrer_host = document.referrer.split('/')[2];
if ( referrer_host != document.location.hostname )
{
window[disableStr] = true;
window[disableStr] = true;
$(document).ready( function() {
askConsent();
});
}
else
document.cookie = 'hasConsent=true; '+ getCookieExpireDate() +' ; path=/';
}
