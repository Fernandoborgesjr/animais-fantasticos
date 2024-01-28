(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:String(n)}function n(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,e(i.key),i)}}var o,i,a,r,c,s,l,u,d,v,f,m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.list=document.querySelectorAll(e),this.activeClass="active"}var e,o;return e=t,(o=[{key:"init",value:function(){this.list.length&&(this.addEvent(),this.toggle(this.list[0]))}},{key:"addEvent",value:function(){var t=this;this.list.forEach((function(e){return e.addEventListener("click",(function(){return t.toggle(e)}))}))}},{key:"toggle",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t,e,n){var o=document.documentElement,i="data-outside";function a(r){t.contains(r.target)||(e.forEach((function(t){o.removeEventListener(t,a)})),t.removeAttribute(i),n())}t.hasAttribute(i)||(e.forEach((function(t){setTimeout((function(){return o.addEventListener(t,a)}),0)})),t.setAttribute(i,""))}function y(t){var e=t.sections,n=.6*window.innerHeight;e.forEach((function(t){var e=t.getBoundingClientRect().top-n<0,o=t.classList.contains("active");e?t.classList.add("active"):o&&t.classList.remove("active")}))}!function(){var t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("ativo")}null==t||t.addEventListener("click",o),null==e||e.addEventListener("click",o),null==n||n.addEventListener("click",(function(t){t.target===this&&o(t)}))}(),o=document.querySelectorAll("[data-tab='menu'] li"),i=document.querySelectorAll("[data-tab='content'] section"),o.length&&i.length&&(i[0].classList.add("active"),o.forEach((function(t,e){t.addEventListener("click",(function(){return function(t){if(!i[t].classList.contains("active")){i.forEach((function(t){t.classList.remove("active")}));var e=i[t].dataset.anime;i[t].classList.add("active",e)}}(e)}))}))),function(){function t(t){var o=function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);o.style.top="".concat(t.pageY,"px"),o.style.left="".concat(t.pageX,"px"),e.tooltipBox=o,e.element=this,this.addEventListener("mouseleave",e),n.tooltipBox=o,this.addEventListener("mousemove",n)}document.querySelectorAll("[data-tooltip]").forEach((function(e){e.addEventListener("mouseover",t)}));var e={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",e),this.element.removeEventListener("mousemove",n)}},n={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),this.tooltipBox.style.left="".concat(t.pageX+20,"px")}}}(),r=(a=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),c=a.dataset.horario.split(",").map(Number),l=(s=new Date).getDay(),u=s.getHours(),r.includes(l)&&u>=c[0]&&u<c[1]&&a.classList.add("open"),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function o(){e.classList.add("active"),t.classList.add("active"),h(e,n,(function(){e.classList.remove("active"),t.classList.remove("active")}))}t&&n.forEach((function(e){return t.addEventListener(e,o)}))}(),function(){function t(t){var e=this;t.preventDefault(),this.classList.add("active"),h(this,["touchstart","click"],(function(){e.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["touchstart","click"].forEach((function(n){e.addEventListener(n,t)}))}))}(),(d=document.querySelectorAll("[data-anime='scroll']")).length&&(y({sections:d}),window.addEventListener("scroll",(function(){return y({sections:d})}))),v=new MutationObserver((function(t){t[0].target.classList.contains("active")&&(v.disconnect(),document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),o=0,i=setInterval((function(){o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(i))}),25*Math.random())})))})),f=document.querySelector(".numeros"),v.observe(f,{attributes:!0}),new m("[data-anime='accordion'] dt").init()})();