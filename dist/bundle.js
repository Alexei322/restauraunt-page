(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>M});var r=n(81),o=n.n(r),c=n(645),a=n.n(c),d=n(667),i=n.n(d),s=new URL(n(101),n.b),l=new URL(n(850),n.b),u=new URL(n(767),n.b),m=new URL(n(949),n.b),p=new URL(n(486),n.b),h=new URL(n(946),n.b),f=new URL(n(982),n.b),g=new URL(n(502),n.b),v=new URL(n(641),n.b),b=new URL(n(721),n.b),x=a()(o()),y=i()(s),C=i()(l),E=i()(u),L=i()(m),w=i()(p),k=i()(h),S=i()(f),q=i()(g),T=i()(v),R=i()(b);x.push([e.id,'@font-face {\r\n  font-family: "xenofont";\r\n  src: url('+y+');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: "xenofont", Helvetica, sans-serif;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  background-image: url('+C+');\r\n  background-size: cover;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n}\r\n\r\nheader {\r\n  background: rgba(0, 0, 0, 0.6);\r\n  width: 100vw;\r\n  color: white;\r\n  font-family: "xenofont";\r\n  font-size: 3rem;\r\n}\r\n\r\n.navBar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.listitems {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 5rem;\r\n  justify-content: space-between;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.listitems button {\r\n  width: 4rem;\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-family: "xenofont";\r\n}\r\n\r\n.shulkwithcaption {\r\n  display: flex;\r\n  margin-top: 6.5rem;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  width: 400px;\r\n  height: 375px;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n  padding: 2rem;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n.shulk {\r\n  background: url('+E+");\r\n  background-size: cover;\r\n  border-radius: 100px;\r\n  height: 200px;\r\n  width: 200px;\r\n}\r\n\r\nfooter {\r\n  width: 100vw;\r\n  position: fixed;\r\n  bottom: 0;\r\n}\r\n\r\n.bottomsection {\r\n  display: flex;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  width: 100vw;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  color: white;\r\n}\r\n\r\n.menugrid {\r\n  width: max-content;\r\n  padding: 2rem;\r\n  margin-top: 6rem;\r\n  margin-bottom: 3rem;\r\n  gap: 3rem;\r\n  width: 50%;\r\n  border-radius: 5px;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  color: white;\r\n  text-align: center;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n}\r\n\r\n.section {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.image {\r\n  /* border-radius: 50px; */\r\n  height: 200px;\r\n  width: 200px;\r\n}\r\n\r\n.imageone {\r\n  background: url("+L+");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.imagetwo {\r\n  background: url("+w+");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n.imagethree {\r\n  background: url("+k+");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n.imagefour {\r\n  background: url("+S+");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n.imagefive {\r\n  background: url("+q+");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n.imagesix {\r\n  background: url("+T+");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.contactinfo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  color: white;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  padding: 3rem;\r\n  border-radius: 5px;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.map {\r\n  background: url("+R+");\r\n  background-size: contain;\r\n  height: 400px;\r\n  width: 400px;\r\n}\r\n",""]);const M=x},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],d=0;d<e.length;d++){var i=e[d],s=r.base?i[0]+r.base:i[0],l=c[s]||0,u="".concat(s," ").concat(l);c[s]=l+1;var m=n(u),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=o(p,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var d=n(c[a]);t[d].references--}for(var i=r(e,o),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},101:(e,t,n)=>{e.exports=n.p+"4d57ebc3f0a4bb2e123f.otf"},767:(e,t,n)=>{e.exports=n.p+"785dc6f2f9dea9be8a2a.png"},850:(e,t,n)=>{e.exports=n.p+"8f64daa22746f5d203c0.jpg"},721:(e,t,n)=>{e.exports=n.p+"bcb1453dc7ede0a025ed.png"},641:(e,t,n)=>{e.exports=n.p+"27cedf4eb92a84e946ee.png"},949:(e,t,n)=>{e.exports=n.p+"3d3ee047607d2b81785c.png"},486:(e,t,n)=>{e.exports=n.p+"775b8b26143be3a89a33.png"},946:(e,t,n)=>{e.exports=n.p+"94dcc1837c38ad774d1d.png"},982:(e,t,n)=>{e.exports=n.p+"027816c21af3e0f58e89.png"},502:(e,t,n)=>{e.exports=n.p+"236e82b818a3b781d0c8.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("shulkwithcaption");const n=document.createElement("div");n.textContent="The best food on Bionis!";const r=document.createElement("div");r.textContent="Making sandwiches since 4010";const o=document.createElement("div");o.classList.add("shulk");const c=document.createElement("div");return c.textContent="I'm really feeling it!",t.append(n,r,o,c),e.appendChild(t),e}function t(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menugrid");const n=document.createElement("div");n.classList.add("section");const r=document.createElement("div");r.classList.add("dish"),r.textContent="Ramen!";const o=document.createElement("div");o.classList.add("image","imageone");const c=document.createElement("div");o.classList.add("description"),c.textContent="The most delicious food - £3.99",n.append(r,o,c),t.appendChild(n);const a=document.createElement("div");a.classList.add("section");const d=document.createElement("div");d.classList.add("dish"),d.textContent="Ramen again?";const i=document.createElement("div");i.classList.add("image","imagetwo"),i.classList.add("description");const s=document.createElement("div");s.textContent="The most delicious food - £3.99",a.append(d,i,s),t.appendChild(a);const l=document.createElement("div");l.classList.add("section");const u=document.createElement("div");u.classList.add("dish"),u.textContent="Ramen!";const m=document.createElement("div");m.classList.add("image","imagethree"),m.classList.add("description");const p=document.createElement("div");p.textContent="The most delicious food - Can you guess the price?",l.append(u,m,p),t.appendChild(l);const h=document.createElement("div");h.classList.add("section");const f=document.createElement("div");f.classList.add("dish"),f.textContent="???";const g=document.createElement("div");g.classList.add("image","imagefour"),g.classList.add("description");const v=document.createElement("div");v.textContent="The most delicious food - £3.99!",h.append(f,g,v),t.appendChild(h);const b=document.createElement("div");b.classList.add("section");const x=document.createElement("div");x.classList.add("dish"),x.textContent="Do you have anything else?";const y=document.createElement("div");y.classList.add("image","imagefive"),y.classList.add("description");const C=document.createElement("div");C.textContent="The most delicious food - £3.99!",b.append(x,y,C),t.appendChild(b);const E=document.createElement("div");E.classList.add("section");const L=document.createElement("div");L.classList.add("dish"),L.textContent="ONLY RAMEN";const w=document.createElement("div");w.classList.add("image","imagesix"),w.classList.add("description");const k=document.createElement("div");return k.textContent="The most delicious food - £3.20!",E.append(L,w,k),t.appendChild(E),e.appendChild(t),e}function r(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contactinfo");const n=document.createElement("div");n.classList.add("aboutHeading"),n.textContent="About us!";const r=document.createElement("div");r.classList.add("sentence"),r.textContent="Hello! We are located in Satoryl Marsh (waist of Bionis).";const o=document.createElement("div");o.classList.add("sentence"),o.textContent="We started this little venture due to the popularity of Shulk's sandwiches, Fiora thought it would be a great idea.";const c=document.createElement("div");c.classList.add("sentence"),c.textContent="We are not heavily in debt as a result of starting this, absolutely not at all.";const a=document.createElement("div");a.classList.add("sentence"),a.textContent="If you could please come down it would be amazing.";const d=document.createElement("div");d.classList.add("map");const i=document.createElement("div");i.classList.add("sentence"),i.textContent="Contact us on: 9992-011-1111";const s=document.createElement("div");s.classList.add("sentence"),s.textContent="Opening times:";const l=document.createElement("div");l.classList.add("sentence"),l.textContent="Monday - Friday 7 - 19:00";const u=document.createElement("div");return u.classList.add("sentence"),u.textContent="Weekends 9 - 16:00",t.append(n,r,o,c,a,d,i,s,l,u),e.appendChild(t),e}var o=n(379),c=n.n(o),a=n(795),d=n.n(a),i=n(569),s=n.n(i),l=n(565),u=n.n(l),m=n(216),p=n.n(m),h=n(589),f=n.n(h),g=n(426),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=p(),c()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,document.body.appendChild(function(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("div");n.classList.add("navBar"),t.appendChild(n);const r=document.createElement("h2");r.classList.add("titleheading"),r.textContent="Xenoblade eatery",n.appendChild(r);const o=document.createElement("ul");o.classList.add("listitems");const c=document.createElement("button");c.classList.add("home"),c.textContent="Home";const a=document.createElement("button");a.classList.add("menu"),a.textContent="Menu";const d=document.createElement("button");d.classList.add("contact"),d.textContent="Contact us",o.append(c,a,d),n.appendChild(o),e.appendChild(t);const i=document.createElement("footer"),s=document.createElement("div");s.classList.add("bottomsection");const l=document.createElement("div");l.textContent="2022",l.classList.add("bottomitem");const u=document.createElement("div");u.textContent="Alexei Bradshaw",u.classList.add("bottomitem"),s.append(l,u),i.appendChild(s),e.appendChild(i);const m=document.createElement("div");m.classList.add("shulkwithcaption");const p=document.createElement("div");p.textContent="The best food on Bionis!";const h=document.createElement("div");h.textContent="Making sandwiches since 4010";const f=document.createElement("div");f.classList.add("shulk");const g=document.createElement("div");return g.textContent="I'm really feeling it!",m.append(p,h,f,g),e.appendChild(m),e}());const b=document.querySelector(".home"),x=document.querySelector(".menu"),y=document.querySelector(".contact");b.addEventListener("click",(t=>{if(document.querySelector(".menugrid")){const t=document.querySelector(".menugrid");t.parentNode.removeChild(t),document.body.appendChild(e())}else if(document.querySelector(".contactinfo")){const t=document.querySelector(".contactinfo");t.parentNode.removeChild(t),document.body.appendChild(e())}})),x.addEventListener("click",(e=>{if(document.querySelector(".shulkwithcaption")){const e=document.querySelector(".shulkwithcaption");e.parentNode.removeChild(e),document.body.appendChild(t())}else if(document.querySelector(".contactinfo")){const e=document.querySelector(".contactinfo");e.parentNode.removeChild(e),document.body.appendChild(t())}})),y.addEventListener("click",(e=>{if(document.querySelector(".shulkwithcaption")){const e=document.querySelector(".shulkwithcaption");e.parentNode.removeChild(e),document.body.appendChild(r())}else if(document.querySelector(".menugrid")){const e=document.querySelector(".menugrid");e.parentNode.removeChild(e),document.body.appendChild(r())}}))})()})();