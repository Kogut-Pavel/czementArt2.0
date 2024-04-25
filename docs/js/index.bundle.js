!function(){"use strict";var t,e,n,i,o,r,a,s={756:function(t,e){var n=window,i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.msRequestAnimationFrame||function(t){return setTimeout(t,16)},o=window,r=o.cancelAnimationFrame||o.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},o=1,r=arguments.length;o<r;o++)if(null!==(t=arguments[o]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function s(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function c(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var u=document.documentElement;function f(t){var e="";return t.fake&&(e=u.style.overflow,t.style.background="",t.style.overflow=u.style.overflow="hidden",u.appendChild(t)),e}function d(t,e){t.fake&&(t.remove(),u.style.overflow=e,u.offsetHeight)}function v(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function m(t){return("insertRule"in t?t.cssRules:t.rules).length}function p(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var h="classList"in document.createElement("_"),g=h?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},y=h?function(t,e){g(t,e)||t.classList.add(e)}:function(t,e){g(t,e)||(t.className+=" "+e)},b=h?function(t,e){g(t,e)&&t.classList.remove(e)}:function(t,e){g(t,e)&&(t.className=t.className.replace(e,""))};function x(t,e){return t.hasAttribute(e)}function w(t,e){return t.getAttribute(e)}function C(t){return void 0!==t.item}function T(t,e){if(t=C(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function M(t,e){t=C(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function E(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function L(t,e){"none"!==t.style.display&&(t.style.display="none")}function A(t,e){"none"===t.style.display&&(t.style.display="")}function S(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}var i=document.createElement("fakeelement");t.length;for(var o=0;o<t.length;o++){var r=t[o];if(void 0!==i.style[r])return r}return!1}function N(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var k=!1;try{var D=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,D)}catch(t){}var O=!!k&&{passive:!0};function H(t,e,n){for(var i in e){var o=["touchstart","touchmove"].indexOf(i)>=0&&!n&&O;t.addEventListener(i,e[i],o)}}function q(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&O;t.removeEventListener(n,e[n],i)}}function R(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var I=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,o={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},u={},h=t.useLocalStorage;if(h){var C=navigator.userAgent,k=new Date;try{(u=n.localStorage)?(u.setItem(k,k),h=u.getItem(k)==k,u.removeItem(k)):h=!1,h||(u={})}catch(t){h=!1}h&&(u.tnsApp&&u.tnsApp!==C&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){u.removeItem(t)})),localStorage.tnsApp=C)}var D=u.tC?s(u.tC):l(u,"tC",function(){var t=document,e=c(),n=f(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var r,a="(10px * 10)",s=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],l=0;l<3;l++)if(r=s[l],i.style.width=r,100===i.offsetWidth){o=r.replace(a,"");break}}catch(t){}return e.fake?d(e,n):i.remove(),o}(),h),O=u.tPL?s(u.tPL):l(u,"tPL",function(){var t,e=document,n=c(),i=f(n),o=e.createElement("div"),r=e.createElement("div"),a="";o.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)a+="<div></div>";return r.innerHTML=a,o.appendChild(r),n.appendChild(o),t=Math.abs(o.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?d(n,i):o.remove(),t}(),h),P=u.tMQ?s(u.tMQ):l(u,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=c(),i=f(n),o=e.createElement("div"),r=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",o.className="tns-mq-test",n.appendChild(r),n.appendChild(o),r.styleSheet?r.styleSheet.cssText=a:r.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(o).position:o.currentStyle.position,n.fake?d(n,i):o.remove(),"absolute"===t}(),h),_=u.tTf?s(u.tTf):l(u,"tTf",B("transform"),h),z=u.t3D?s(u.t3D):l(u,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=c(),o=f(i),r=n.createElement("p"),a=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(a),i.fake?d(i,o):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(_),h),W=u.tTDu?s(u.tTDu):l(u,"tTDu",B("transitionDuration"),h),F=u.tTDe?s(u.tTDe):l(u,"tTDe",B("transitionDelay"),h),j=u.tADu?s(u.tADu):l(u,"tADu",B("animationDuration"),h),U=u.tADe?s(u.tADe):l(u,"tADe",B("animationDelay"),h),K=u.tTE?s(u.tTE):l(u,"tTE",N(W,"Transition"),h),V=u.tAE?s(u.tAE):l(u,"tAE",N(j,"Animation"),h),G=n.console&&"function"==typeof n.console.warn,Q=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],X={};if(Q.forEach((function(n){if("string"==typeof t[n]){var i=t[n],o=e.querySelector(i);if(X[n]=i,!o||!o.nodeName)return void(G&&console.warn("Can't find",t[n]));t[n]=o}})),!(t.container.children.length<1)){var Y=t.responsive,J=t.nested,$="carousel"===t.mode;if(Y){0 in Y&&(t=a(t,Y[0]),delete Y[0]);var Z={};for(var tt in Y){var et=Y[tt];et="number"==typeof et?{items:et}:et,Z[tt]=et}Y=Z,Z=null}if($||function t(e){for(var n in e)$||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!$){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,ot=t.animateDelay,rt=t.animateNormal}var at,st,lt="horizontal"===t.axis,ct=e.createElement("div"),ut=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,mt=ft.children,pt=mt.length,ht=Dn(),gt=!1;Y&&Zn(),$&&(ft.className+=" tns-vpfix");var yt,bt,xt,wt,Ct,Tt=t.autoWidth,Mt=In("fixedWidth"),Et=In("edgePadding"),Lt=In("gutter"),At=qn(),St=In("center"),Bt=Tt?1:Math.floor(In("items")),Nt=In("slideBy"),kt=t.viewportMax||t.fixedWidthViewportWidth,Dt=In("arrowKeys"),Ot=In("speed"),Ht=t.rewind,qt=!Ht&&t.loop,Rt=In("autoHeight"),It=In("controls"),Pt=In("controlsText"),_t=In("nav"),zt=In("touch"),Wt=In("mouseDrag"),Ft=In("autoplay"),jt=In("autoplayTimeout"),Ut=In("autoplayText"),Kt=In("autoplayHoverPause"),Vt=In("autoplayResetOnVisibility"),Gt=(null,wt=In("nonce"),Ct=document.createElement("style"),wt&&Ct.setAttribute("nonce",wt),document.querySelector("head").appendChild(Ct),Ct.sheet?Ct.sheet:Ct.styleSheet),Qt=t.lazyload,Xt=t.lazyloadSelector,Yt=[],Jt=qt?(bt=function(){if(Tt||Mt&&!kt)return pt-1;var e=Mt?"fixedWidth":"items",n=[];if((Mt||t[e]<pt)&&n.push(t[e]),Y)for(var i in Y){var o=Y[i][e];o&&(Mt||o<pt)&&n.push(o)}return n.length||n.push(0),Math.ceil(Mt?kt/Math.min.apply(null,n):Math.max.apply(null,n))}(),xt=$?Math.ceil((5*bt-pt)/2):4*bt-pt,xt=Math.max(bt,xt),Rn("edgePadding")?xt+1:xt):0,$t=$?pt+2*Jt:pt+Jt,Zt=!(!Mt&&!Tt||qt),te=Mt?Ei():null,ee=!$||!qt,ne=lt?"left":"top",ie="",oe="",re=Mt?function(){return St&&!qt?pt-1:Math.ceil(-te/(Mt+Lt))}:Tt?function(){for(var t=0;t<$t;t++)if(yt[t]>=-te)return t}:function(){return St&&$&&!qt?pt-1:qt||$?Math.max(0,$t-Math.ceil(Bt)):$t-1},ae=Bn(In("startIndex")),se=ae;Sn();var le,ce,ue,fe=0,de=Tt?null:re(),ve=t.preventActionWhenRunning,me=t.swipeAngle,pe=!me||"?",he=!1,ge=t.onInit,ye=new R,be=" tns-slider tns-"+t.mode,xe=ft.id||(ue=window.tnsId,window.tnsId=ue?ue+1:1,"tns"+window.tnsId),we=In("disable"),Ce=!1,Te=t.freezable,Me=!(!Te||Tt)&&$n(),Ee=!1,Le={click:Hi,keydown:function(t){t=Fi(t);var e=[o.LEFT,o.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Qe.disabled||Hi(t,-1):Xe.disabled||Hi(t,1))}},Ae={click:function(t){if(he){if(ve)return;Di()}for(var e=ji(t=Fi(t));e!==Ze&&!x(e,"data-nav");)e=e.parentNode;if(x(e,"data-nav")){var n=on=Number(w(e,"data-nav")),i=Mt||Tt?n*pt/en:n*Bt;Oi(qe?n:Math.min(Math.ceil(i),pt-1),t),rn===n&&(fn&&_i(),on=-1)}},keydown:function(t){t=Fi(t);var n=e.activeElement;if(x(n,"data-nav")){var i=[o.LEFT,o.RIGHT,o.ENTER,o.SPACE].indexOf(t.keyCode),r=Number(w(n,"data-nav"));i>=0&&(0===i?r>0&&Wi($e[r-1]):1===i?r<en-1&&Wi($e[r+1]):(on=r,Oi(r,t)))}}},Se={mouseover:function(){fn&&(Ri(),dn=!0)},mouseout:function(){dn&&(qi(),dn=!1)}},Be={visibilitychange:function(){e.hidden?fn&&(Ri(),mn=!0):mn&&(qi(),mn=!1)}},Ne={keydown:function(t){t=Fi(t);var e=[o.LEFT,o.RIGHT].indexOf(t.keyCode);e>=0&&Hi(t,0===e?-1:1)}},ke={touchstart:Gi,touchmove:Qi,touchend:Yi,touchcancel:Yi},De={mousedown:Gi,mousemove:Qi,mouseup:Yi,mouseleave:Yi},Oe=Rn("controls"),He=Rn("nav"),qe=!!Tt||t.navAsThumbnails,Re=Rn("autoplay"),Ie=Rn("touch"),Pe=Rn("mouseDrag"),_e="tns-slide-active",ze="tns-slide-cloned",We="tns-complete",Fe={load:function(t){li(ji(t))},error:function(t){var e;e=ji(t),y(e,"failed"),ci(e)}},je="force"===t.preventScrollOnTouch;if(Oe)var Ue,Ke,Ve=t.controlsContainer,Ge=t.controlsContainer?t.controlsContainer.outerHTML:"",Qe=t.prevButton,Xe=t.nextButton,Ye=t.prevButton?t.prevButton.outerHTML:"",Je=t.nextButton?t.nextButton.outerHTML:"";if(He)var $e,Ze=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Tt?pt:$i(),nn=0,on=-1,rn=kn(),an=rn,sn="tns-nav-active",ln="Carousel Page ",cn=" (Current Slide)";if(Re)var un,fn,dn,vn,mn,pn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",yn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ie||Pe)var bn,xn,wn={},Cn={},Tn=!1,Mn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Tt||An(we||Me),_&&(ne=_,ie="translate",z?(ie+=lt?"3d(":"3d(0px, ",oe=lt?", 0px, 0px)":", 0px)"):(ie+=lt?"X(":"Y(",oe=")")),$&&(ft.className=ft.className.replace("tns-vpfix","")),function(){if(Rn("gutter"),ct.className="tns-outer",ut.className="tns-inner",ct.id=xe+"-ow",ut.id=xe+"-iw",""===ft.id&&(ft.id=xe),be+=O||Tt?" tns-subpixel":" tns-no-subpixel",be+=D?" tns-calc":" tns-no-calc",Tt&&(be+=" tns-autowidth"),be+=" tns-"+t.axis,ft.className+=be,$?((at=e.createElement("div")).id=xe+"-mw",at.className="tns-ovh",ct.appendChild(at),at.appendChild(ut)):ct.appendChild(ut),Rt&&((at||ut).className+=" tns-ah"),dt.insertBefore(ct,ft),ut.appendChild(ft),p(mt,(function(t,e){y(t,"tns-item"),t.id||(t.id=xe+"-item"+e),!$&&rt&&y(t,rt),T(t,{"aria-hidden":"true",tabindex:"-1"})})),Jt){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),o=Jt;o--;){var r=o%pt,a=mt[r].cloneNode(!0);if(y(a,ze),M(a,"id"),i.insertBefore(a,i.firstChild),$){var s=mt[pt-1-r].cloneNode(!0);y(s,ze),M(s,"id"),n.appendChild(s)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),mt=ft.children}}(),function(){if(!$)for(var e=ae,i=ae+Math.min(pt,Bt);e<i;e++){var o=mt[e];o.style.left=100*(e-ae)/Bt+"%",y(o,nt),b(o,rt)}if(lt&&(O||Tt?(v(Gt,"#"+xe+" > .tns-item","font-size:"+n.getComputedStyle(mt[0]).fontSize+";",m(Gt)),v(Gt,"#"+xe,"font-size:0;",m(Gt))):$&&p(mt,(function(t,e){t.style.marginLeft=function(t){return D?D+"("+100*t+"% / "+$t+")":100*t/$t+"%"}(e)}))),P){if(W){var r=at&&t.autoHeight?jn(t.speed):"";v(Gt,"#"+xe+"-mw",r,m(Gt))}r=Pn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),v(Gt,"#"+xe+"-iw",r,m(Gt)),$&&(r=lt&&!Tt?"width:"+_n(t.fixedWidth,t.gutter,t.items)+";":"",W&&(r+=jn(Ot)),v(Gt,"#"+xe,r,m(Gt))),r=lt&&!Tt?zn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=Wn(t.gutter)),$||(W&&(r+=jn(Ot)),j&&(r+=Un(Ot))),r&&v(Gt,"#"+xe+" > .tns-item",r,m(Gt))}else $&&Rt&&(at.style[W]=Ot/1e3+"s"),ut.style.cssText=Pn(Et,Lt,Mt,Rt),$&&lt&&!Tt&&(ft.style.width=_n(Mt,Lt,Bt)),r=lt&&!Tt?zn(Mt,Lt,Bt):"",Lt&&(r+=Wn(Lt)),r&&v(Gt,"#"+xe+" > .tns-item",r,m(Gt));if(Y&&P)for(var a in Y){a=parseInt(a);var s=Y[a],l=(r="",""),c="",u="",f="",d=Tt?null:In("items",a),h=In("fixedWidth",a),g=In("speed",a),x=In("edgePadding",a),w=In("autoHeight",a),C=In("gutter",a);W&&at&&In("autoHeight",a)&&"speed"in s&&(l="#"+xe+"-mw{"+jn(g)+"}"),("edgePadding"in s||"gutter"in s)&&(c="#"+xe+"-iw{"+Pn(x,C,h,g,w)+"}"),$&&lt&&!Tt&&("fixedWidth"in s||"items"in s||Mt&&"gutter"in s)&&(u="width:"+_n(h,C,d)+";"),W&&"speed"in s&&(u+=jn(g)),u&&(u="#"+xe+"{"+u+"}"),("fixedWidth"in s||Mt&&"gutter"in s||!$&&"items"in s)&&(f+=zn(h,C,d)),"gutter"in s&&(f+=Wn(C)),!$&&"speed"in s&&(W&&(f+=jn(g)),j&&(f+=Un(g))),f&&(f="#"+xe+" > .tns-item{"+f+"}"),(r=l+c+u+f)&&Gt.insertRule("@media (min-width: "+a/16+"em) {"+r+"}",Gt.cssRules.length)}}(),Kn();var En=qt?$?function(){var t=fe,e=de;t+=Nt,e-=Nt,Et?(t+=1,e-=1):Mt&&(At+Lt)%(Mt+Lt)&&(e-=1),Jt&&(ae>e?ae-=pt:ae<t&&(ae+=pt))}:function(){if(ae>de)for(;ae>=fe+pt;)ae-=pt;else if(ae<fe)for(;ae<=de-pt;)ae+=pt}:function(){ae=Math.max(fe,Math.min(de,ae))},Ln=$?function(){var t,e,n,i,o,r,a,s,l,c,u;Ti(ft,""),W||!Ot?(Si(),Ot&&S(ft)||Di()):(t=ft,e=ne,n=ie,i=oe,o=Li(),r=Ot,a=Di,s=Math.min(r,10),l=o.indexOf("%")>=0?"%":"px",o=o.replace(l,""),c=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),u=(o-c)/r*s,setTimeout((function o(){r-=s,c+=u,t.style[e]=n+c+l+i,r>0?setTimeout(o,s):a()}),s)),lt||Ji()}:function(){Yt=[];var t={};t[K]=t[V]=Di,q(mt[se],t),H(mt[ae],t),Bi(se,nt,it,!0),Bi(ae,rt,nt),K&&V&&Ot&&S(ft)||Di()};return{version:"2.9.4",getInfo:to,events:ye,goTo:Oi,play:function(){Ft&&!fn&&(Pi(),vn=!1)},pause:function(){fn&&(_i(),vn=!0)},isOn:gt,updateSliderHeight:pi,refresh:Kn,destroy:function(){if(Gt.disabled=!0,Gt.ownerNode&&Gt.ownerNode.remove(),q(n,{resize:Yn}),Dt&&q(e,Ne),Ve&&q(Ve,Le),Ze&&q(Ze,Ae),q(ft,Se),q(ft,Be),hn&&q(hn,{click:zi}),Ft&&clearInterval(un),$&&K){var i={};i[K]=Di,q(ft,i)}zt&&q(ft,ke),Wt&&q(ft,De);var o=[vt,Ge,Ye,Je,tn,gn];for(var r in Q.forEach((function(e,n){var i="container"===e?ct:t[e];if("object"==typeof i&&i){var r=!!i.previousElementSibling&&i.previousElementSibling,a=i.parentNode;i.outerHTML=o[n],t[e]=r?r.nextElementSibling:a.firstElementChild}})),Q=nt=it=ot=rt=lt=ct=ut=ft=dt=vt=mt=pt=st=ht=Tt=Mt=Et=Lt=At=Bt=Nt=kt=Dt=Ot=Ht=qt=Rt=Gt=Qt=yt=Yt=Jt=$t=Zt=te=ee=ne=ie=oe=re=ae=se=fe=de=me=pe=he=ge=ye=be=xe=we=Ce=Te=Me=Ee=Le=Ae=Se=Be=Ne=ke=De=Oe=He=qe=Re=Ie=Pe=_e=We=Fe=le=It=Pt=Ve=Ge=Qe=Xe=Ue=Ke=_t=Ze=tn=$e=en=nn=on=rn=an=sn=ln=cn=Ft=jt=pn=Ut=Kt=hn=gn=Vt=yn=un=fn=dn=vn=mn=wn=Cn=bn=Tn=xn=Mn=zt=Wt=null,this)"rebuild"!==r&&(this[r]=null);gt=!1},rebuild:function(){return I(a(t,X))}}}function An(t){t&&(It=_t=zt=Wt=Dt=Ft=Kt=Vt=!1)}function Sn(){for(var t=$?ae-Jt:ae;t<0;)t+=pt;return t%pt+1}function Bn(t){return t=t?Math.max(0,Math.min(qt?pt-1:pt-Bt,t)):0,$?t+Jt:t}function Nn(t){for(null==t&&(t=ae),$&&(t-=Jt);t<0;)t+=pt;return Math.floor(t%pt)}function kn(){var t,e=Nn();return t=qe?e:Mt||Tt?Math.ceil((e+1)*en/pt-1):Math.floor(e/Bt),!qt&&$&&ae===de&&(t=en-1),t}function Dn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function On(t){return"top"===t?"afterbegin":"beforeend"}function Hn(t){if(null!=t){var n,i,o=e.createElement("div");return t.appendChild(o),i=(n=o.getBoundingClientRect()).right-n.left,o.remove(),i||Hn(t.parentNode)}}function qn(){var t=Et?2*Et-Lt:0;return Hn(dt)-t}function Rn(e){if(t[e])return!0;if(Y)for(var n in Y)if(Y[n][e])return!0;return!1}function In(e,n){if(null==n&&(n=ht),"items"===e&&Mt)return Math.floor((At+Lt)/(Mt+Lt))||1;var i=t[e];if(Y)for(var o in Y)n>=parseInt(o)&&e in Y[o]&&(i=Y[o][e]);return"slideBy"===e&&"page"===i&&(i=In("items")),$||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Pn(t,e,n,i,o){var r="";if(void 0!==t){var a=t;e&&(a-=e),r=lt?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"}else if(e&&!n){var s="-"+e+"px";r="margin: 0 "+(lt?s+" 0 0":"0 "+s+" 0")+";"}return!$&&o&&W&&i&&(r+=jn(i)),r}function _n(t,e,n){return t?(t+e)*$t+"px":D?D+"("+100*$t+"% / "+n+")":100*$t/n+"%"}function zn(t,e,n){var i;if(t)i=t+e+"px";else{$||(n=Math.floor(n));var o=$?$t:n;i=D?D+"(100% / "+o+")":100/o+"%"}return i="width:"+i,"inner"!==J?i+";":i+" !important;"}function Wn(t){var e="";return!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;"),e}function Fn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function jn(t){return Fn(W,18)+"transition-duration:"+t/1e3+"s;"}function Un(t){return Fn(j,17)+"animation-duration:"+t/1e3+"s;"}function Kn(){if(Rn("autoHeight")||Tt||!lt){var t=ft.querySelectorAll("img");p(t,(function(t){var e=t.src;Qt||(e&&e.indexOf("data:image")<0?(t.src="",H(t,Fe),y(t,"loading"),t.src=e):li(t))})),i((function(){di(E(t),(function(){le=!0}))})),Rn("autoHeight")&&(t=ui(ae,Math.min(ae+Bt-1,$t-1))),Qt?Vn():i((function(){di(E(t),Vn)}))}else $&&Ai(),Qn(),Xn()}function Vn(){if(Tt&&pt>1){var t=qt?ae:pt-1;!function e(){var n=mt[t].getBoundingClientRect().left,i=mt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Gn():setTimeout((function(){e()}),16)}()}else Gn()}function Gn(){lt&&!Tt||(hi(),Tt?(te=Ei(),Te&&(Me=$n()),de=re(),An(we||Me)):Ji()),$&&Ai(),Qn(),Xn()}function Qn(){if(gi(),ct.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+pt+"</div>"),ce=ct.querySelector(".tns-liveregion .current"),Re){var e=Ft?"stop":"start";hn?T(hn,{"data-action":e}):t.autoplayButtonOutput&&(ct.insertAdjacentHTML(On(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+yn[0]+e+yn[1]+Ut[0]+"</button>"),hn=ct.querySelector("[data-action]")),hn&&H(hn,{click:zi}),Ft&&(Pi(),Kt&&H(ft,Se),Vt&&H(ft,Be))}if(He){if(Ze)T(Ze,{"aria-label":"Carousel Pagination"}),p($e=Ze.children,(function(t,e){T(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":xe})}));else{for(var n="",i=qe?"":'style="display:none"',o=0;o<pt;o++)n+='<button type="button" data-nav="'+o+'" tabindex="-1" aria-controls="'+xe+'" '+i+' aria-label="'+ln+(o+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ct.insertAdjacentHTML(On(t.navPosition),n),Ze=ct.querySelector(".tns-nav"),$e=Ze.children}if(Zi(),W){var r=W.substring(0,W.length-18).toLowerCase(),a="transition: all "+Ot/1e3+"s";r&&(a="-"+r+"-"+a),v(Gt,"[aria-controls^="+xe+"-item]",a,m(Gt))}T($e[rn],{"aria-label":ln+(rn+1)+cn}),M($e[rn],"tabindex"),y($e[rn],sn),H(Ze,Ae)}Oe&&(Ve||Qe&&Xe||(ct.insertAdjacentHTML(On(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+xe+'">'+Pt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+xe+'">'+Pt[1]+"</button></div>"),Ve=ct.querySelector(".tns-controls")),Qe&&Xe||(Qe=Ve.children[0],Xe=Ve.children[1]),t.controlsContainer&&T(Ve,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&T([Qe,Xe],{"aria-controls":xe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(T(Qe,{"data-controls":"prev"}),T(Xe,{"data-controls":"next"})),Ue=bi(Qe),Ke=bi(Xe),Ci(),Ve?H(Ve,Le):(H(Qe,Le),H(Xe,Le))),ti()}function Xn(){if($&&K){var i={};i[K]=Di,H(ft,i)}zt&&H(ft,ke,t.preventScrollOnTouch),Wt&&H(ft,De),Dt&&H(e,Ne),"inner"===J?ye.on("outerResized",(function(){Jn(),ye.emit("innerLoaded",to())})):(Y||Mt||Tt||Rt||!lt)&&H(n,{resize:Yn}),Rt&&("outer"===J?ye.on("innerLoaded",fi):we||fi()),si(),we?ii():Me&&ni(),ye.on("indexChanged",vi),"inner"===J&&ye.emit("innerLoaded",to()),"function"==typeof ge&&ge(to()),gt=!0}function Yn(t){i((function(){Jn(Fi(t))}))}function Jn(n){if(gt){"outer"===J&&ye.emit("outerResized",to(n)),ht=Dn();var i,o=st,r=!1;Y&&(Zn(),(i=o!==st)&&ye.emit("newBreakpointStart",to(n)));var a,s,l=Bt,c=we,u=Me,f=Dt,d=It,h=_t,g=zt,x=Wt,w=Ft,C=Kt,T=Vt,M=ae;if(i){var E=Mt,S=Rt,B=Pt,N=St,k=Ut;if(!P)var D=Lt,O=Et}if(Dt=In("arrowKeys"),It=In("controls"),_t=In("nav"),zt=In("touch"),St=In("center"),Wt=In("mouseDrag"),Ft=In("autoplay"),Kt=In("autoplayHoverPause"),Vt=In("autoplayResetOnVisibility"),i&&(we=In("disable"),Mt=In("fixedWidth"),Ot=In("speed"),Rt=In("autoHeight"),Pt=In("controlsText"),Ut=In("autoplayText"),jt=In("autoplayTimeout"),P||(Et=In("edgePadding"),Lt=In("gutter"))),An(we),At=qn(),lt&&!Tt||we||(hi(),lt||(Ji(),r=!0)),(Mt||Tt)&&(te=Ei(),de=re()),(i||Mt)&&(Bt=In("items"),Nt=In("slideBy"),(s=Bt!==l)&&(Mt||Tt||(de=re()),En())),i&&we!==c&&(we?ii():function(){if(Ce){if(Gt.disabled=!1,ft.className+=be,Ai(),qt)for(var t=Jt;t--;)$&&A(mt[t]),A(mt[$t-t-1]);if(!$)for(var e=ae,n=ae+pt;e<n;e++){var i=mt[e],o=e<ae+Bt?nt:rt;i.style.left=100*(e-ae)/Bt+"%",y(i,o)}ei(),Ce=!1}}()),Te&&(i||Mt||Tt)&&(Me=$n())!==u&&(Me?(Si(Li(Bn(0))),ni()):(function(){if(Ee){if(Et&&P&&(ut.style.margin=""),Jt)for(var t="tns-transparent",e=Jt;e--;)$&&b(mt[e],t),b(mt[$t-e-1],t);ei(),Ee=!1}}(),r=!0)),An(we||Me),Ft||(Kt=Vt=!1),Dt!==f&&(Dt?H(e,Ne):q(e,Ne)),It!==d&&(It?Ve?A(Ve):(Qe&&A(Qe),Xe&&A(Xe)):Ve?L(Ve):(Qe&&L(Qe),Xe&&L(Xe))),_t!==h&&(_t?(A(Ze),Zi()):L(Ze)),zt!==g&&(zt?H(ft,ke,t.preventScrollOnTouch):q(ft,ke)),Wt!==x&&(Wt?H(ft,De):q(ft,De)),Ft!==w&&(Ft?(hn&&A(hn),fn||vn||Pi()):(hn&&L(hn),fn&&_i())),Kt!==C&&(Kt?H(ft,Se):q(ft,Se)),Vt!==T&&(Vt?H(e,Be):q(e,Be)),i){if(Mt===E&&St===N||(r=!0),Rt!==S&&(Rt||(ut.style.height="")),It&&Pt!==B&&(Qe.innerHTML=Pt[0],Xe.innerHTML=Pt[1]),hn&&Ut!==k){var R=Ft?1:0,I=hn.innerHTML,_=I.length-k[R].length;I.substring(_)===k[R]&&(hn.innerHTML=I.substring(0,_)+Ut[R])}}else St&&(Mt||Tt)&&(r=!0);if((s||Mt&&!Tt)&&(en=$i(),Zi()),(a=ae!==M)?(ye.emit("indexChanged",to()),r=!0):s?a||vi():(Mt||Tt)&&(si(),gi(),oi()),s&&!$&&function(){for(var t=ae+Math.min(pt,Bt),e=$t;e--;){var n=mt[e];e>=ae&&e<t?(y(n,"tns-moving"),n.style.left=100*(e-ae)/Bt+"%",y(n,nt),b(n,rt)):n.style.left&&(n.style.left="",y(n,rt),b(n,nt)),b(n,it)}setTimeout((function(){p(mt,(function(t){b(t,"tns-moving")}))}),300)}(),!we&&!Me){if(i&&!P&&(Et===O&&Lt===D||(ut.style.cssText=Pn(Et,Lt,Mt,Ot,Rt)),lt)){$&&(ft.style.width=_n(Mt,Lt,Bt));var z=zn(Mt,Lt,Bt)+Wn(Lt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Gt,m(Gt)-1),v(Gt,"#"+xe+" > .tns-item",z,m(Gt))}Rt&&fi(),r&&(Ai(),se=ae)}i&&ye.emit("newBreakpointEnd",to(n))}}function $n(){if(!Mt&&!Tt)return pt<=(St?Bt-(Bt-1)/2:Bt);var t=Mt?(Mt+Lt)*pt:yt[pt],e=Et?At+2*Et:At+Lt;return St&&(e-=Mt?(At-Mt)/2:(At-(yt[ae+1]-yt[ae]-Lt))/2),t<=e}function Zn(){for(var t in st=0,Y)t=parseInt(t),ht>=t&&(st=t)}function ti(){!Ft&&hn&&L(hn),!_t&&Ze&&L(Ze),It||(Ve?L(Ve):(Qe&&L(Qe),Xe&&L(Xe)))}function ei(){Ft&&hn&&A(hn),_t&&Ze&&A(Ze),It&&(Ve?A(Ve):(Qe&&A(Qe),Xe&&A(Xe)))}function ni(){if(!Ee){if(Et&&(ut.style.margin="0px"),Jt)for(var t="tns-transparent",e=Jt;e--;)$&&y(mt[e],t),y(mt[$t-e-1],t);ti(),Ee=!0}}function ii(){if(!Ce){if(Gt.disabled=!0,ft.className=ft.className.replace(be.substring(1),""),M(ft,["style"]),qt)for(var t=Jt;t--;)$&&L(mt[t]),L(mt[$t-t-1]);if(lt&&$||M(ut,["style"]),!$)for(var e=ae,n=ae+pt;e<n;e++){var i=mt[e];M(i,["style"]),b(i,nt),b(i,rt)}ti(),Ce=!0}}function oi(){var t=ri();ce.innerHTML!==t&&(ce.innerHTML=t)}function ri(){var t=ai(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ai(t){null==t&&(t=Li());var e,n,i,o=ae;if(St||Et?(Tt||Mt)&&(n=-(parseFloat(t)+Et),i=n+At+2*Et):Tt&&(n=yt[ae],i=n+At),Tt)yt.forEach((function(t,r){r<$t&&((St||Et)&&t<=n+.5&&(o=r),i-t>=.5&&(e=r))}));else{if(Mt){var r=Mt+Lt;St||Et?(o=Math.floor(n/r),e=Math.ceil(i/r-1)):e=o+Math.ceil(At/r)-1}else if(St||Et){var a=Bt-1;if(St?(o-=a/2,e=ae+a/2):e=ae+a,Et){var s=Et*Bt/At;o-=s,e+=s}o=Math.floor(o),e=Math.ceil(e)}else e=o+Bt-1;o=Math.max(o,0),e=Math.min(e,$t-1)}return[o,e]}function si(){if(Qt&&!we){var t=ai();t.push(Xt),ui.apply(null,t).forEach((function(t){if(!g(t,We)){var e={};e[K]=function(t){t.stopPropagation()},H(t,e),H(t,Fe),t.src=w(t,"data-src");var n=w(t,"data-srcset");n&&(t.srcset=n),y(t,"loading")}}))}}function li(t){y(t,"loaded"),ci(t)}function ci(t){y(t,We),b(t,"loading"),q(t,Fe)}function ui(t,e,n){var i=[];for(n||(n="img");t<=e;)p(mt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=ui.apply(null,ai());i((function(){di(t,pi)}))}function di(t,e){return le?e():(t.forEach((function(e,n){!Qt&&e.complete&&ci(e),g(e,We)&&t.splice(n,1)})),t.length?void i((function(){di(t,e)})):e())}function vi(){si(),gi(),oi(),Ci(),function(){if(_t&&(rn=on>=0?on:kn(),on=-1,rn!==an)){var t=$e[an],e=$e[rn];T(t,{tabindex:"-1","aria-label":ln+(an+1)}),b(t,sn),T(e,{"aria-label":ln+(rn+1)+cn}),M(e,"tabindex"),y(e,sn),an=rn}}()}function mi(t,e){for(var n=[],i=t,o=Math.min(t+e,$t);i<o;i++)n.push(mt[i].offsetHeight);return Math.max.apply(null,n)}function pi(){var t=Rt?mi(ae,Bt):mi(Jt,pt),e=at||ut;e.style.height!==t&&(e.style.height=t+"px")}function hi(){yt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=mt[0].getBoundingClientRect()[t];p(mt,(function(i,o){o&&yt.push(i.getBoundingClientRect()[t]-n),o===$t-1&&yt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=ai(),e=t[0],n=t[1];p(mt,(function(t,i){i>=e&&i<=n?x(t,"aria-hidden")&&(M(t,["aria-hidden","tabindex"]),y(t,_e)):x(t,"aria-hidden")||(T(t,{"aria-hidden":"true",tabindex:"-1"}),b(t,_e))}))}function yi(t){return t.nodeName.toLowerCase()}function bi(t){return"button"===yi(t)}function xi(t){return"true"===t.getAttribute("aria-disabled")}function wi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ci(){if(It&&!Ht&&!qt){var t=Ue?Qe.disabled:xi(Qe),e=Ke?Xe.disabled:xi(Xe),n=ae<=fe,i=!Ht&&ae>=de;n&&!t&&wi(Ue,Qe,!0),!n&&t&&wi(Ue,Qe,!1),i&&!e&&wi(Ke,Xe,!0),!i&&e&&wi(Ke,Xe,!1)}}function Ti(t,e){W&&(t.style[W]=e)}function Mi(t){return null==t&&(t=ae),Tt?(At-(Et?Lt:0)-(yt[t+1]-yt[t]-Lt))/2:Mt?(At-Mt)/2:(Bt-1)/2}function Ei(){var t=At+(Et?Lt:0)-(Mt?(Mt+Lt)*$t:yt[$t]);return St&&!qt&&(t=Mt?-(Mt+Lt)*($t-1)-Mi():Mi($t-1)-yt[$t-1]),t>0&&(t=0),t}function Li(t){var e;if(null==t&&(t=ae),lt&&!Tt)if(Mt)e=-(Mt+Lt)*t,St&&(e+=Mi());else{var n=_?$t:Bt;St&&(t-=Mi()),e=100*-t/n}else e=-yt[t],St&&Tt&&(e+=Mi());return Zt&&(e=Math.max(e,te)),e+(!lt||Tt||Mt?"px":"%")}function Ai(t){Ti(ft,"0s"),Si(t)}function Si(t){null==t&&(t=Li()),ft.style[ne]=ie+t+oe}function Bi(t,e,n,i){var o=t+Bt;qt||(o=Math.min(o,$t));for(var r=t;r<o;r++){var a=mt[r];i||(a.style.left=100*(r-ae)/Bt+"%"),ot&&F&&(a.style[F]=a.style[U]=ot*(r-t)/1e3+"s"),b(a,e),y(a,n),i&&Yt.push(a)}}function Ni(t,e){ee&&En(),(ae!==se||e)&&(ye.emit("indexChanged",to()),ye.emit("transitionStart",to()),Rt&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&_i(),he=!0,Ln())}function ki(t){return t.toLowerCase().replace(/-/g,"")}function Di(t){if($||he){if(ye.emit("transitionEnd",to(t)),!$&&Yt.length>0)for(var e=0;e<Yt.length;e++){var n=Yt[e];n.style.left="",U&&F&&(n.style[U]="",n.style[F]=""),b(n,it),y(n,rt)}if(!t||!$&&t.target.parentNode===ft||t.target===ft&&ki(t.propertyName)===ki(ne)){if(!ee){var i=ae;En(),ae!==i&&(ye.emit("indexChanged",to()),Ai())}"inner"===J&&ye.emit("innerLoaded",to()),he=!1,se=ae}}}function Oi(t,e){if(!Me)if("prev"===t)Hi(e,-1);else if("next"===t)Hi(e,1);else{if(he){if(ve)return;Di()}var n=Nn(),i=0;if("first"===t?i=-n:"last"===t?i=$?pt-Bt-n:pt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(pt-1,t))),i=t-n)),!$&&i&&Math.abs(i)<Bt){var o=i>0?1:-1;i+=ae+i-pt>=fe?pt*o:2*pt*o*-1}ae+=i,$&&qt&&(ae<fe&&(ae+=pt),ae>de&&(ae-=pt)),Nn(ae)!==Nn(se)&&Ni(e)}}function Hi(t,e){if(he){if(ve)return;Di()}var n;if(!e){for(var i=ji(t=Fi(t));i!==Ve&&[Qe,Xe].indexOf(i)<0;)i=i.parentNode;var o=[Qe,Xe].indexOf(i);o>=0&&(n=!0,e=0===o?-1:1)}if(Ht){if(ae===fe&&-1===e)return void Oi("last",t);if(ae===de&&1===e)return void Oi("first",t)}e&&(ae+=Nt*e,Tt&&(ae=Math.floor(ae)),Ni(n||t&&"keydown"===t.type?t:null))}function qi(){un=setInterval((function(){Hi(null,pn)}),jt),fn=!0}function Ri(){clearInterval(un),fn=!1}function Ii(t,e){T(hn,{"data-action":t}),hn.innerHTML=yn[0]+t+yn[1]+e}function Pi(){qi(),hn&&Ii("stop",Ut[1])}function _i(){Ri(),hn&&Ii("start",Ut[0])}function zi(){fn?(_i(),vn=!0):(Pi(),vn=!1)}function Wi(t){t.focus()}function Fi(t){return Ui(t=t||n.event)?t.changedTouches[0]:t}function ji(t){return t.target||n.event.srcElement}function Ui(t){return t.type.indexOf("touch")>=0}function Ki(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Vi(){return r=Cn.y-wn.y,a=Cn.x-wn.x,e=Math.atan2(r,a)*(180/Math.PI),n=me,i=!1,(o=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":o<=n&&(i="vertical"),i===t.axis;var e,n,i,o,r,a}function Gi(t){if(he){if(ve)return;Di()}Ft&&fn&&Ri(),Tn=!0,xn&&(r(xn),xn=null);var e=Fi(t);ye.emit(Ui(t)?"touchStart":"dragStart",to(t)),!Ui(t)&&["img","a"].indexOf(yi(ji(t)))>=0&&Ki(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,$&&(bn=parseFloat(ft.style[ne].replace(ie,"")),Ti(ft,"0s"))}function Qi(t){if(Tn){var e=Fi(t);Cn.x=e.clientX,Cn.y=e.clientY,$?xn||(xn=i((function(){Xi(t)}))):("?"===pe&&(pe=Vi()),pe&&(je=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&je&&t.preventDefault()}}function Xi(t){if(pe){if(r(xn),Tn&&(xn=i((function(){Xi(t)}))),"?"===pe&&(pe=Vi()),pe){!je&&Ui(t)&&(je=!0);try{t.type&&ye.emit(Ui(t)?"touchMove":"dragMove",to(t))}catch(t){}var e=bn,n=Mn(Cn,wn);!lt||Mt||Tt?(e+=n,e+="px"):(e+=_?n*Bt*100/((At+Lt)*$t):100*n/(At+Lt),e+="%"),ft.style[ne]=ie+e+oe}}else Tn=!1}function Yi(e){if(Tn){xn&&(r(xn),xn=null),$&&Ti(ft,""),Tn=!1;var n=Fi(e);Cn.x=n.clientX,Cn.y=n.clientY;var o=Mn(Cn,wn);if(Math.abs(o)){if(!Ui(e)){var a=ji(e);H(a,{click:function t(e){Ki(e),q(a,{click:t})}})}$?xn=i((function(){if(lt&&!Tt){var t=-o*Bt/(At+Lt);t=o>0?Math.floor(t):Math.ceil(t),ae+=t}else{var n=-(bn+o);if(n<=0)ae=fe;else if(n>=yt[$t-1])ae=de;else for(var i=0;i<$t&&n>=yt[i];)ae=i,n>yt[i]&&o<0&&(ae+=1),i++}Ni(e,o),ye.emit(Ui(e)?"touchEnd":"dragEnd",to(e))})):pe&&Hi(e,o>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(je=!1),me&&(pe="?"),Ft&&!fn&&qi()}function Ji(){(at||ut).style.height=yt[ae+Bt]-yt[ae]+"px"}function $i(){var t=Mt?(Mt+Lt)*pt/At:pt/Bt;return Math.min(Math.ceil(t),pt)}function Zi(){if(_t&&!qe&&en!==nn){var t=nn,e=en,n=A;for(nn>en&&(t=en,e=nn,n=L);t<e;)n($e[t]),t++;nn=en}}function to(t){return{container:ft,slideItems:mt,navContainer:Ze,navItems:$e,controlsContainer:Ve,hasControls:Oe,prevButton:Qe,nextButton:Xe,items:Bt,slideBy:Nt,cloneCount:Jt,slideCount:pt,slideCountNew:$t,index:ae,indexCached:se,displayIndex:Sn(),navCurrentIndex:rn,navCurrentIndexCached:an,pages:en,pagesCached:nn,sheet:Gt,isOn:gt,event:t||{}}}G&&console.warn("No slides found in",t.container)};e.U=I}},l={};t=function(){const t=document.querySelector(".mobile-nav-btn"),e=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon"),i=(document.querySelector(".cta__btn--mobile"),document.querySelectorAll(".mobile-nav__list li"));t.onclick=function(){e.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll"),i.forEach((t=>{t.addEventListener("click",(()=>{e.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}))}))}},e=function(){const t=document.querySelectorAll("[data-modal]"),e=document.body,n=document.querySelectorAll(".modal__close"),i=document.querySelectorAll(".modal");function o(t){t.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{t.classList.remove("show"),e.classList.remove("no-scroll")}),200)}t.forEach((t=>{t.addEventListener("click",(t=>{let n=t.currentTarget.getAttribute("data-modal"),i=document.getElementById(n),o=i.querySelector(".modal__content");o.addEventListener("click",(t=>{t.stopPropagation()})),i.classList.add("show"),e.classList.contains("no-scroll")&&e.classList.add("no-scroll"),setTimeout((()=>{o.style.transform="none",o.style.opacity="1"}),1)}))})),n.forEach((t=>{t.addEventListener("click",(t=>{o(t.currentTarget.closest(".modal"))}))})),i.forEach((t=>{t.addEventListener("click",(t=>{o(t.currentTarget)}))}))},n=function(){const t=document.querySelector(".select-menu"),e=t.querySelector(".select-btn"),n=t.querySelectorAll(".option"),i=t.querySelector(".sBtn-text");e.addEventListener("click",(()=>t.classList.toggle("active"))),n.forEach((e=>{e.addEventListener("click",(()=>{let n=e.innerText;i.innerText=n,t.classList.remove("active")}))}))},i=function t(e){var n=l[e];if(void 0!==n)return n.exports;var i=l[e]={exports:{}};return s[e](i,i.exports,t),i.exports}(756),o=function(){const t=document.querySelectorAll(".catalog .catalog__list"),e=[];if(t)for(let n=0;n<t.length;n++){let t=(0,i.U)({container:`.catalog-${n+1}`,items:3,slideBy:1,mouseDrag:!0,swipeAngle:!1,speed:400,arrowKeys:!0,loop:!1,controlsText:['<svg class="icon icon--chevron-left">\n                        <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>\n                    </svg>','<svg class="icon icon--chevron-right">\n                        <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>\n                    /svg>'],responsive:{320:{disable:!0,items:1,controls:!0},768:{disable:!1,items:2},1440:{items:3,gutter:20}}});e.push(t)}(0,i.U)({container:".training__slider",items:2,slideBy:1,mouseDrag:!0,swipeAngle:!1,speed:400,arrowKeys:!0,loop:!1,controlsText:['<svg class="icon icon--chevron-left">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>\n            </svg>','<svg class="icon icon--chevron-right">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>\n            /svg>'],responsive:{320:{items:1,controls:!0},768:{items:2}}}),(0,i.U)({container:".objects__slider",items:4,slideBy:1,gutter:10,mouseDrag:!0,swipeAngle:!1,speed:400,arrowKeys:!0,loop:!1,controlsText:['<svg class="icon icon--chevron-left">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>\n            </svg>','<svg class="icon icon--chevron-right">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>\n            /svg>'],responsive:{320:{items:1,controls:!0},425:{items:2},768:{items:3},1024:{items:4}}}),(0,i.U)({container:".modal__slider",items:1,navContainer:"#customize-thumbnails",navAsThumbnails:!0,swipeAngle:!1,speed:400,loop:!1,gutter:10,controlsText:['<svg class="icon icon--chevron-left">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>\n            </svg>','<svg class="icon icon--chevron-right">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>\n            /svg>']}),(0,i.U)({container:".card__slider",items:1,slideBy:1,gutter:10,swipeAngle:!1,speed:400,loop:!0,controlsText:['<svg class="icon icon--chevron-left">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>\n            </svg>','<svg class="icon icon--chevron-right">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>\n            /svg>'],responsive:{320:{disable:!0},425:{disable:!1}}}),(0,i.U)({container:".detailed__slider",items:1,slideBy:1,gutter:10,swipeAngle:!1,speed:400,loop:!0,controlsText:['<svg class="icon icon--chevron-left">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-left"></use>\n            </svg>','<svg class="icon icon--chevron-right">\n                <use href="img/svgsprite/sprite.symbol.svg#chevron-right"></use>\n            /svg>']})},r=function(){const t=document.querySelectorAll("[data-tab]"),e=document.querySelectorAll("[data-tab-content]");let n=[...document.querySelectorAll(".catalog .tns-controls")].filter((t=>!t.closest(".card")));n.forEach((function(t){t.classList.add("none")})),n[0].classList.remove("none"),t.forEach((function(i){i.addEventListener("click",(function(){let o=this.dataset.tab,r=o[o.length-1];const a=document.querySelector("#"+o);t.forEach((function(t){t.classList.remove("active")})),n.forEach((function(t){t.classList.add("none")})),n[r-1].classList.remove("none"),i.classList.add("active"),e.forEach((function(t){t.classList.add("none")})),a.classList.remove("none")}))}))},a=function(){let t=document.querySelector(".modal__count-minus"),e=document.querySelector(".modal__count-plus"),n=document.querySelector(".modal__count-number"),i=1;e&&t&&(e.addEventListener("click",(function(){i++,n.textContent=i})),t.addEventListener("click",(function(){1!==i&&(i--,n.textContent=i)})))},window.addEventListener("DOMContentLoaded",(()=>{t(),e(),a(),o(),r(),n()}))}();