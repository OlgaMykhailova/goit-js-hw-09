var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("iQIUW");const i=document.querySelector("button"),l=document.querySelector("input[name=delay]"),u=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]");function d(e,n){const o=Math.random()>.3;return new Promise(((t,r)=>{setTimeout((()=>{o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.addEventListener("click",(function(e){if(e.preventDefault(),l.value<=0||u.value<=0||a.value<=0)return void r.Notify.warning("Enter a positive number");let n=Number(l.value);for(let e=0;e<Number(a.value);e+=1)promise=d(e+1,n),promise.then((({position:e,delay:n})=>{console.log(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{console.log(`❌ Rejected promise ${e} in ${n}ms`)})),n+=Number(u.value)}));
//# sourceMappingURL=03-promises.83fd8166.js.map
