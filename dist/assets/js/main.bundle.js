!function(e){function t(t){for(var n,o,l=t[0],s=t[1],i=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==c[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={0:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/js/";var l=(s=window.webpackJsonp=window.webpackJsonp||[]).push.bind(s);s.push=t;for(var s=s.slice(),i=0;i<s.length;i++)t(s[i]);var u=l;r.push([92,1]),a()}({150:function(e,t,a){"use strict";function n(e,t){e.style.opacity=0,e.style.display=t||"block",function t(){var a=parseFloat(e.style.opacity);1<(a+=.05)||(e.style.opacity=a,requestAnimationFrame(t))}()}a.r(t);var c=a(91);!function(){var e,t,a,r,o,l;document.addEventListener("DOMContentLoaded",(function(){var e,t,a,c,r,o=document.querySelector(".preloader"),l=document.querySelector(".page");o&&(e=document.querySelectorAll("[fade-in-preloader]"),t=function(){setTimeout((function(){var t;(t=o).style.opacity=1,function e(){(t.style.opacity-=.05)<0?t.style.display="none":requestAnimationFrame(e)}(),e.forEach((function(e){n(e)})),null!==l&&l.classList.add("loaded")}),200)},a=o.querySelector(".preloader__rocket"),o.classList.add("is-animate"),c=o.querySelector(".preloader__procent"),r=0,setInterval((function(){r<100&&(r+=1,c.innerHTML="".concat(r,"%"))}),20),a.addEventListener("webkitAnimationEnd",t),a.addEventListener("animationend",t))})),(r=document.querySelectorAll("[button-fadein]"))&&r.forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("button-fadein");n(document.querySelector(".".concat(t)))}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-scrollbar]").forEach((function(e){new c.a(e,{autoHide:!1})}))})),(r=document.querySelector(".about"))&&r.querySelectorAll(".about__message").forEach((function(e){var t=e.querySelector(".message__next");t.addEventListener("click",(function(){var a=t.getAttribute("data-message");e.classList.remove("is-active"),e.classList.add("is-no-active"),document.querySelector(".".concat(a)).classList.add("is-active")}))})),(r=document.querySelector(".planet"))&&r.querySelectorAll("[data-message]").forEach((function(e){var t=e.querySelector("[data-message-next]");null!==t&&t.addEventListener("click",(function(){var a=t.getAttribute("data-message-next");e.classList.remove("is-active"),e.classList.add("is-no-active"),null!==(a=document.querySelector('[data-message="'.concat(a,'"]')))&&a.classList.add("is-active")}))})),(e=document.querySelector(".corporulia"))&&(e.querySelectorAll("[data-message]").forEach((function(e){var t=e.querySelector("[data-message-next]"),a=e.querySelector("[data-message-close]");null!==t&&t.addEventListener("click",(function(){var a=t.getAttribute("data-message-next");e.classList.remove("is-active"),e.classList.add("is-no-active"),null!==(a=document.querySelector('[data-message="'.concat(a,'"]')))&&a.classList.add("is-active")})),null!==a&&a.addEventListener("click",(function(){e.classList.remove("is-active"),e.classList.add("is-no-active")}))})),r=e.querySelector("[data-visible-latitudeus]"),t=e.querySelector(".character_latitudeus"),a=e.querySelector(".latitudeus__layer_normal"),null!==r&&r.addEventListener("click",(function(){null!==t&&t.setAttribute("data-state","normal"),null!==a&&a.classList.add("is-active")})),r=e.querySelector("[data-move-latitudeus]"),o=e.querySelector(".character_answerus"),l=e.querySelector(".latitudeus"),null!==r&&r.addEventListener("click",(function(){null!==o&&o.setAttribute("data-state","disabled"),null!==l&&l.classList.add("is-active")})),e.querySelectorAll("[data-character-hover]").forEach((function(t){var a=e.querySelector(t.getAttribute("data-character-hover-layer"));t.addEventListener("mouseenter",(function(){t.setAttribute("data-state","active"),a.classList.add("is-active")})),t.addEventListener("mouseleave",(function(){t.setAttribute("data-state","normal"),a.classList.remove("is-active")}))}))),function(){var e,t;(e=document.querySelector(".artifact-parts"))&&(null!==(t=e.querySelector("#button-game-start"))&&t.addEventListener("click",(function(){var t=e.querySelector(".artifact-parts__block_game.is-blue"),a=e.querySelector("#block-welcome"),n=e.querySelector("#block-game");null!==a&&null!==n&&(a.classList.remove("is-active"),n.classList.add("is-active")),null!==t&&t.classList.remove("is-blue")})),null!==(t=document.querySelector("#button-artifact-parts-exit"))&&t.addEventListener("click",(function(){var t=e.querySelector("#block-termination");null!==t&&t.classList.add("is-active")})),null!==(t=e.querySelector("#button-return"))&&t.addEventListener("click",(function(){var t=e.querySelector("#block-termination");null!==t&&t.classList.remove("is-active")})),e.querySelector(".artifact-parts__block_result").classList.contains("is-active")&&function(){var t,a,n=document.querySelector(".page__border"),c=e.querySelector(".artifact-parts__particles");a=null!==n?(t=n.clientWidth,n.clientHeight):document.body&&(document.body.scrollLeft||document.body.scrollTop)?(t=document.body.offsetWidth,document.body.offsetHeight):document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?(t=document.documentElement.offsetWidth,document.documentElement.offsetHeight):t=500;for(var r,o=[],l=[],s=[],i=[],u=[],d=[],m=[],f=0;f<13;f++)m[f]=Math.floor(4*Math.random())+1,o[f]=0,l[f]=Math.random()*(t-50),s[f]=0,i[f]=20*Math.random(),u[f]=.02+Math.random()/10,d[f]=.7+Math.random(),null!==c&&((r=document.createElement("div")).classList.add("snow-flake"),r.classList.add("snow-flake-"+f),r.setAttribute("data-color",m[f]),r.id="snow-flake-"+f,c.append(r));!function e(){for(var n=0;n<13;n++){var c=!1;s[n]+=d[n],s[n]>a&&(c=!0,m[n]=Math.floor(4*Math.random())+1,l[n]=Math.random()*(t-i[n]-30),s[n]=0,u[n]=.2+Math.random()/10,d[n]=1.7+Math.random()),null!==document.getElementById("snow-flake-"+n)&&(c&&document.getElementById("snow-flake-"+n).setAttribute("data-color",m[n]),document.getElementById("snow-flake-"+n).style.top=s[n]+"px",document.getElementById("snow-flake-"+n).style.left=l[n]+i[n]*Math.sin(o[n])+"px")}setTimeout((function(){e()}),10)}()}())}(),function(){var e,t,a,n,c;(e=document.querySelector(".corporulian-code"))&&(t=e.querySelector("[data-game-counting]"),a=e.querySelector("[data-game-question]"),c=e.querySelectorAll("[data-question]"),n=e.querySelector("#question-number"),c.forEach((function(c){var r=c.querySelectorAll("[data-answer]"),o=c.querySelector("[data-question-character]"),l=c.querySelector("[data-question-next]");r.forEach((function(e){var t=e.querySelector("[data-answer-image]"),a=e.querySelector("[data-answer-close]"),n=e.querySelector("[data-answer-select]");null!==t&&t.addEventListener("click",(function(){var t=c.querySelector("[data-answer].is-active");null!==t&&t.classList.remove("is-active"),e.classList.add("is-active")})),null!==a&&a.addEventListener("click",(function(){e.classList.remove("is-active")})),null!==n&&n.addEventListener("click",(function(){var t=c.querySelector('[data-question-result="'.concat(n.getAttribute("data-answer-select"),'"]'));e.classList.remove("is-active"),c.classList.add("is-answered"),null!==t&&setTimeout((function(){t.classList.add("is-active")}),100),null!==o&&o.setAttribute("data-state",n.getAttribute("data-select-character"))}))})),null!==l&&l.addEventListener("click",(function(){var r=l.getAttribute("data-question-next"),o=e.querySelector('[data-question="'.concat(r,'"]'));c.classList.remove("is-active"),null!==t&&t.classList.remove("is-active"),setTimeout((function(){null!==a&&a.setAttribute("data-game-question",r),setTimeout((function(){null!==n&&(n.textContent=r),null!==o&&o.classList.add("is-active"),null!==t&&t.classList.add("is-active")}),1400)}),600)}))})),null!==(c=e.querySelector("#button-game-start"))&&c.addEventListener("click",(function(){var t=e.querySelector("#block-welcome"),a=e.querySelector("#block-game");null!==t&&null!==a&&(t.classList.remove("is-active"),a.classList.add("is-active"))})),null!==(c=document.querySelector("#button-questions-game-exit"))&&c.addEventListener("click",(function(){var t=e.querySelector("#block-termination");null!==t&&t.classList.add("is-active")})),null!==(c=e.querySelector("#button-return"))&&c.addEventListener("click",(function(){var t=e.querySelector("#block-termination");null!==t&&t.classList.remove("is-active")})),e.querySelector(".corporulian-code__block_result").classList.contains("is-active")&&function(){var t,a,n=document.querySelector(".page__border"),c=e.querySelector(".corporulian-code__particles");a=null!==n?(t=n.clientWidth,n.clientHeight):document.body&&(document.body.scrollLeft||document.body.scrollTop)?(t=document.body.offsetWidth,document.body.offsetHeight):document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?(t=document.documentElement.offsetWidth,document.documentElement.offsetHeight):t=500;for(var r,o=[],l=[],s=[],i=[],u=[],d=[],m=[],f=0;f<13;f++)m[f]=Math.floor(4*Math.random())+1,o[f]=0,l[f]=Math.random()*(t-50),s[f]=0,i[f]=20*Math.random(),u[f]=.02+Math.random()/10,d[f]=.7+Math.random(),null!==c&&((r=document.createElement("div")).classList.add("snow-flake"),r.classList.add("snow-flake-"+f),r.setAttribute("data-color",m[f]),r.id="snow-flake-"+f,c.append(r));!function e(){for(var n=0;n<13;n++){var c=!1;s[n]+=d[n],s[n]>a&&(c=!0,m[n]=Math.floor(4*Math.random())+1,l[n]=Math.random()*(t-i[n]-30),s[n]=0,u[n]=.2+Math.random()/10,d[n]=1.7+Math.random()),null!==document.getElementById("snow-flake-"+n)&&(c&&document.getElementById("snow-flake-"+n).setAttribute("data-color",m[n]),document.getElementById("snow-flake-"+n).style.top=s[n]+"px",document.getElementById("snow-flake-"+n).style.left=l[n]+i[n]*Math.sin(o[n])+"px")}setTimeout((function(){e()}),10)}()}(),null!==(c=e.querySelector("#button-get-artifact"))&&c.addEventListener("click",(function(){var t=e.querySelector(".corporulian-code__particles"),a=e.querySelector(".corporulian-code__block_artifact");null!==t&&(t.classList.add("hidden"),t.remove()),null!==a&&(a.classList.add("is-active"),setTimeout((function(){!function(){var t=e.querySelector(".get-artifact"),a=t.querySelector(".get-artifact__title_main"),n=t.querySelector(".get-artifact__title_result"),c=t.querySelector(".get-artifact__box"),r=t.querySelector(".get-artifact__astronaut"),o=t.querySelector(".get-artifact__button"),l=t.querySelector(".get-artifact__message_1"),s=t.querySelector(".get-artifact__message_2"),i=t.querySelector(".get-artifact__light"),u=t.querySelector(".get-artifact__rays"),d=t.querySelector(".get-artifact__bright-rays"),m=t.querySelector(".get-artifact__crystal");null!==t&&t.classList.add("is-active"),null!==i&&i.classList.add("is-active"),null!==u&&u.classList.add("is-active"),setTimeout((function(){null!==l&&l.classList.add("is-active")}),400),c.addEventListener("click",(function(){t.classList.contains("is-opened")||(t.classList.add("is-opened"),null!==l&&l.classList.remove("is-active"),null!==r&&r.classList.remove("is-active"),setTimeout((function(){null!==d&&d.classList.add("is-active"),null!==m&&m.classList.add("is-active"),null!==i&&i.classList.add("is-scale"),null!==c&&c.classList.add("is-hidden"),setTimeout((function(){null!==a&&a.classList.remove("is-active"),null!==n&&n.classList.add("is-active"),null!==s&&s.classList.add("is-active"),null!==r&&r.classList.add("is-active"),null!==o&&o.classList.add("is-active")}),1e3)}),1e3))}))}()}),1e3))})))}()}()},92:function(e,t,a){e.exports=a(150)}});