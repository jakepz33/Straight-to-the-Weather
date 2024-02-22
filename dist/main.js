(()=>{"use strict";var n={36:(n,t,e)=>{e.d(t,{c:()=>c});var o=e(500),r=e.n(o),i=e(312),a=e.n(i)()(r());a.push([n.id,'* {\n  font-family: "Sans";\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.main {\n  height: 100vh;\n  min-height: 100vh;\n  width: 100%;\n  background-color: #000000;\n  position: relative;\n}\n.cloud {\n  max-width: 100%;\n  height: auto;\n  position: absolute;\n  top: -5%;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n  z-index: 1;\n}\n.content {\n  position: relative;\n  z-index: 99;\n  background-color: transparent;\n  height: 90%;\n  width: 80%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n}\n.content > div {\n  color: black;\n}\n.navBar {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  color: lightblue;\n  align-items: end;\n}\ninput[type="text"] {\n  float: right;\n  padding: 10px 10px;\n  border-radius: 99px;\n  width: 12%;\n}\n.error-message {\n  display: none;\n  width: 12%;\n  margin-top: 5px;\n}\n\n.row-container {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n\n.left-column {\n  /* background-color: aquamarine; */\n  max-width: 60%;\n  width: 60%;\n  color: white;\n  height: 100%;\n  position: relative;\n}\n.city-description {\n  position: absolute;\n  top: 15%;\n}\n\n.slide-In1 {\n  animation: slide-In1 0.8s;\n}\n.slide-In2 {\n  animation: slide-In2 1.1s;\n}\n\n@keyframes slide-In1 {\n  0% {\n    opacity: 0;\n    margin-top: 10px;\n  }\n  100% {\n    opacity: 1;\n    margin-top: 5px;\n  }\n}\n@keyframes slide-In2 {\n  0% {\n    opacity: 0.1;\n    transform: translate(30%, -5px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n\n/*  LEFT COLUMN */\n.city-header {\n  font-size: 40px;\n  margin-top: 75px;\n  margin-bottom: 5px;\n}\n.weather-description {\n  margin-top: 5px;\n  font-size: 25px;\n  font-weight: 400;\n}\n.temp-and-time {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  gap: 15px;\n}\n.temp-holder {\n  display: flex;\n  flex-direction: row;\n}\n.temp-holder span {\n  font-size: 35px;\n}\n.temp {\n  margin-top: 0;\n  font-size: 140px;\n  line-height: 1;\n}\n.time-and-date {\n  border-left: 2px solid white;\n  height: fit-content;\n  margin-top: 20px;\n  padding-left: 15px;\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n}\n.date {\n  margin-bottom: 5px;\n}\n.current-time {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.high-low {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n/* RIGHT COLUMN */\n.right-column {\n  background-color: transparent;\n  width: 40%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.info-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 30%;\n  gap: 18px;\n}\n.info-item p {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  color: white;\n  font-size: 19px;\n}\n.metric {\n  font-weight: bold;\n}\n\n.material-symbols-outlined {\n  font-size: 20px;\n  color: white;\n}\n.icon-text {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.feelsLike-holder {\n  color: white;\n  display: flex;\n  flex-direction: row;\n  font-weight: bold;\n}\n\n.temp-symbol {\n  color: white;\n  font-weight: 400;\n  font-size: 14px;\n}\n',""]);const c=a},312:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=e(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},176:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},808:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},120:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},936:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(596),t=e.n(n),o=e(520),r=e.n(o),i=e(176),a=e.n(i),c=e(120),s=e.n(c),l=e(808),d=e.n(l),u=e(936),p=e.n(u),f=e(36),m={};function h(n){const t=function(n){const[t,e]=n.split(":").map(Number),o=t>=12?"PM":"AM";let r=t%12;return r=r||12,`${r}:${e.toString().padStart(2,"0")} ${o}`}(n.location.localtime.split(" ")[1]),e=function(n){const t=new Date(n),e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],o=t.getDate(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],i=t.getFullYear(),a=`${e}, ${o}${function(n){if(n>10&&n<20)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(o)} ${r} ${i}`;return a}(n.forecast.forecastday[0].date);!function(n){const t=document.querySelector(".city-header"),e=document.querySelector(".weather-description"),o=document.querySelector(".temp"),r=document.querySelector(".date"),i=document.querySelector(".current-time"),a=document.querySelector(".maxtemp"),c=document.querySelector(".mintemp");t.textContent=`${n.cityName}, ${n.region}`,e.textContent=n.condition,o.textContent=n.temp,r.textContent=n.date,i.textContent=n.currentTime,a.textContent=`High: ${n.high}`,c.textContent=`Low: ${n.low}`}({cityName:n.location.name.toUpperCase(),region:n.location.region.toUpperCase(),condition:n.current.condition.text,temp:Math.round(n.current.temp_f),date:e,currentTime:t,high:n.forecast.forecastday[0].day.maxtemp_f,low:n.forecast.forecastday[0].day.mintemp_f})}function y(n){!function(n){const t=document.querySelector(".feels-temp"),e=document.querySelector("#humidity-metric"),o=document.querySelector("#wind-metric"),r=document.querySelector("#rain-metric");t.textContent=`${n.feelsLike}`,e.textContent=`${n.humidity}%`,o.textContent=`${n.wind}mph`,r.textContent=`${n.chanceOfRain}%`}({feelsLike:n.current.feelslike_f,humidity:n.current.humidity,wind:n.current.gust_mph,chanceOfRain:n.forecast.forecastday[0].day.daily_chance_of_rain})}async function g(n){const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=03d984259a17467b965230209241201&q=${n}&days=5`);return 400!==t.status&&await t.json()}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(f.c,m),f.c&&f.c.locals&&f.c.locals;const x=e.p+"50473896253616cf1c37.png",v=document.querySelector(".search-form");document.querySelector(".cloud").src=x,window.onload=async function(){document.querySelector(".city-description").classList.add("slide-In2");const n=await g("San Francisco");console.log("Initial load"),h(n),y(n)},v.addEventListener("submit",(async n=>{n.preventDefault();var t=document.querySelector(".city-description");const e=document.querySelector("input[type=text]"),o=e.value;e.value="",console.log(o);const r=await g(o);!1===r?function(){const n=document.querySelector(".error-message");console.log(n),n.style.display="block",n.classList.contains("slide-In1")?(n.style.display="none",n.classList.remove("slide-In1"),n.offsetWidth,n.classList.add("slide-In1"),n.style.display="block"):n.classList.add("slide-In1")}():(h(r),y(r),t.classList.contains("slide-In2")?(t.classList.remove("slide-In2"),t.offsetWidth,t.classList.add("slide-In2")):t.classList.add("slide-In2"))}))})()})();