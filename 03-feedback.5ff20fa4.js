function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,i,a,r,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=i;return o=i=void 0,c=t,r=e.apply(a,n)}function w(e){return c=e,f=setTimeout(O,t),l?y(e):r}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=a}function O(){var e=v();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,a-(e-c)):n}(e))}function S(e){return f=void 0,g&&o?y(e):(o=i=void 0,r)}function h(){var e=v(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return w(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),r}return t=b(t)||0,p(n)&&(l=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},h.flush=function(){return void 0===f?r:S(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||r.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})},document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelector(".feedback-form");n.addEventListener("input",e(t)((function(){const e={email:n.email.value,message:n.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("load",(function(){const e=localStorage.getItem("feedback-form-state");if(e){const{email:t,message:o}=JSON.parse(e);n.email.value=t,n.message.value=o}})),n.addEventListener("submit",(function(e){e.preventDefault();const t=n.email.value,o=n.message.value;localStorage.removeItem("feedback-form-state"),n.reset(),console.log("Formularz wysłany",{email:t,message:o});const i=localStorage.getItem("feedback-form-state");if(i){const{email:e,message:t}=JSON.parse(i);console.log("Wcześniej zapisane dane",{email:e,message:t})}}))}));
//# sourceMappingURL=03-feedback.5ff20fa4.js.map