if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const a=e=>s(e,o),t={module:{uri:o},exports:l,require:a};i[o]=Promise.all(r.map((e=>t[e]||a(e)))).then((e=>(n(...e),l)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_astro/client.2ce19805.js",revision:null},{url:"_astro/heroImg.8e0769a2.png",revision:null},{url:"_astro/hoisted.0d288d5c.js",revision:null},{url:"_astro/imgtest1.a3cb38fb.png",revision:null},{url:"_astro/imgtest2.ac974a00.png",revision:null},{url:"_astro/imgtest3.ab192945.png",revision:null},{url:"_astro/index.170825bc.css",revision:null},{url:"_astro/index.c919704f.css",revision:null},{url:"_astro/index.ed373d49.js",revision:null},{url:"_astro/molecules.ca716258.js",revision:null},{url:"_astro/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"favicon.svg",revision:"8c13f40658976ea1dfb8ba37a8be0e8d"},{url:"HINKKU_isotipo.svg",revision:"f782376bfe93b51a25aa20c8366b9fc9"},{url:"/landing-page/",revision:"7fb06d5404a2bdf394beaa4e77fdd899"},{url:"registerSW.js",revision:"f5d78b195a2463bf0f112af23474d014"},{url:"favicon.svg",revision:"8c13f40658976ea1dfb8ba37a8be0e8d"},{url:"HINKKU_isotipo.svg",revision:"f782376bfe93b51a25aa20c8366b9fc9"},{url:"manifest.webmanifest",revision:"26f3ae1bf53b822a1f30d5f7efaad741"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/landing-page/")))}));
