!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(){"use strict";let e=document.querySelector('link[rel="next"]')?.getAttribute("href");function t(e){const t=document.getElementById(e);t?t.classList.toggle("expanded"):console.warn(`expandPost: Post element with ID ${e} not found.`)}document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".gh-card-content").forEach((e=>{const n=e.querySelector("p");if(n&&n.textContent.length>200){n.classList.add("long-content");const o=document.createElement("a");o.href="#",o.className="gh-card-readmore",o.innerText="Read more";const r=e.closest(".gh-card").id;o.onclick=function(e){e.preventDefault(),r?t(r):console.warn("Read more: Post ID not found.")},e.appendChild(o)}}))})),document.querySelector(".gh-burger").addEventListener("click",(function(){document.body.classList.toggle("gh-head-open")})),function(){if(!e)return;new IntersectionObserver(((t,n)=>{try{t.forEach((t=>{t.isIntersecting&&e&&async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch page");const n=await t.text(),o=(new DOMParser).parseFromString(n,"text/html"),r=o.querySelectorAll(".post"),c=o.querySelector('link[rel="next"]')?.getAttribute("href");return{posts:r,nextLink:c}}catch(e){throw new Error(e)}}(e).then((t=>{let{posts:o,nextLink:r}=t;o.forEach((e=>{document.querySelector(".gh-postfeed").append(e)})),r?(e=r,n.observe(document.querySelector(".post:last-of-type"))):n.disconnect()}))}))}catch(e){console.log(e)}}),{rootMargin:"150px"}).observe(document.querySelector(".post:last-of-type"))}(),t()}();
//# sourceMappingURL=index.js.map
