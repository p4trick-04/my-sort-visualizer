const u=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}};u();const v="modulepreload",m=function(t){return"/"+t},a={},p=function(r,l,s){return!l||l.length===0?r():Promise.all(l.map(e=>{if(e=m(e),e in a)return;a[e]=!0;const i=e.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");if(n.rel=i?"stylesheet":v,i||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),i)return new Promise((c,d)=>{n.addEventListener("load",c),n.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())};function f(){const t=document.createElement("div");return t.innerHTML=`
    <div class="main-setting">
      <div>
        <label for="size">Size</label>
        <div class="size-wrap">
          <!-- range bar input  here -->
          <input type="range" class="size-range" min="8" max="500" value="8">
          
          <span>
            <!-- user input here -->
            <input type="text" class="size-input" minlength="1" maxlength="3">
            <span>Elements</span>
          </span>
        </div>
      </div>

      <div>
        <label for="speed">Speed</label>
        <div class="speed-wrap">
          <input type="range" id="set-speed" min="1" max="2000" value="1000">
          <span class="tooltip">
            <span class="speed-verbose">1000</span>ms
            <span class="tooltip-txt">1 second = 1000 millisecond</span>
          </span>
        </div>
      </div>
    </div>`,t.innerHTML}function h(){const t=document.createElement("div");return t.innerHTML=`
    <div class="setting-section">
      ${f()}
    </div>
  `,t.innerHTML}function g(){const t=document.createElement("div");return t.innerHTML=`
    <ul class="algo-menu" style="border:1px solid black">
      <li>Quick (Lomuto Partition)</li>
      <li>Merge</li>
      <li>Bubble</li>
      <li>Insertion</li>
      <li>Selection</li>
      <li class="algo-menu-line"></li>
    </ul>
    <button class="more-algo-btn">
      More
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  `,t.innerHTML}function b(){const t=document.createElement("div");return t.innerHTML=`
  <div class="more-algo-container">
    <div>
      <h3>Comparasion sorts</h3>
      <ul class="more-algo-pick">
        <li>In-place merge sort</li>
        <li>Heap sort</li>
        <li>Tim sort</li>
        <li>Shell sort</li>
        <li>Exchange sort</li>
        <li>Cycle sort</li>
        <li>Patience sort</li>
        <li>Strand sort</li>
        <li>Coktail shaker sort</li>
        <li>Comb sort</li>
        <li>Gnome sort</li>
        <li>Odd-even sort</li>
      </ul>
    </div>
    <div>
      <h3>Non-comparasion sorts(Integer)</h3>
      <ul class="more-algo-pick">
        <li>LSD Radix sort</li>
      </ul>
    </div>
    <div>
      <h3>Other sorts</h3>
      <ul class="more-algo-pick">
        <li>Pancake sort</li>
        <li>Bogosort</li>
        <li>Stooge sort</li>
        <li>Slowsort</li>
      </ul>
    </div>
  </div>
  `,t.innerHTML}function y(){const t=document.createElement("div");return t.innerHTML=`
    <header>
      <div class="left-wrap">
        <button class="start-btn" type="button">Start</button>

        <button class="shuffle-array" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="shuffle-array bi bi-shuffle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
          </svg>
        </button>

        ${h()}
      </div>

      <div class="algo-wrap">
        ${g()}
        ${b()}
      </div>
    </header>
  `,t.innerHTML}function L(){const t=document.createElement("div");return t.innerHTML='<div class="arr-style bar-container-1"></div>'}document.querySelector("#app").innerHTML=`
  ${y()}
  <div id="a-timer">
    Time
  </div>
  <div class="arr-container">
    ${L()}
  </div>
`;(async()=>{let{default:t}=await p(()=>import("./main.5156fd38.js"),[]);t()})();
