const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){t.toggleAttribute("disabled"),document.body.style.backgroundColor=n(),o=setInterval((()=>{document.body.style.backgroundColor=n()}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.toggleAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.b0de6749.js.map
