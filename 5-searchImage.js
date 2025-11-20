import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as g,S as h,i as l}from"./assets/vendor-Bz7jjc0t.js";const y="https://pixabay.com/api/",d="53324015-4659ca59c2f407a377d78da87";function L(e){const t=new URLSearchParams({key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return g.get(`${y}?${t}`)}const c=document.querySelector(".gallery"),i=document.querySelector(".loader-container");function S(e){c.innerHTML=e.map(({webformatURL:t,largeImageURL:s,tags:a,likes:f,views:u,comments:m,downloads:p})=>`<li class="gallery-item">
  <a class="item-link" href="${s}">
    <img class="img" src="${t}" alt="${a}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${f}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${u}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${m}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${p}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function n(){c.innerHTML=""}function v(){i&&i.classList.remove("is-hidden")}function o(){i&&i.classList.add("is-hidden")}function x(){new h(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}const r={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery")},B={message:"Search field cannot be empty. Please enter your request.",backgroundColor:"#ff9900",messageColor:"#ffffff",position:"topRight"},C={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#ffffff",position:"topRight"},R={title:"ERROR",titleColor:"#ffffff",message:"Error connecting to server",messageColor:"#ffffff",backgroundColor:"#B51B1B",position:"topRight"};r.searchForm.addEventListener("submit",$);function $(e){e.preventDefault(),n();const t=r.searchForm.elements["search-text"].value.trim();if(!b(t)){r.searchForm.reset();return}v(),L(t).then(s=>{const a=s.data.hits;k(a)&&(o(),S(a),x())}).catch(s=>{console.log("Server Error:",s.message),o(),l.show(R)}).finally(()=>{r.searchForm.reset()})}function b(e){return e?!0:(l.show(B),!1)}function k(e){return e.length?!0:(l.show(C),n(),o(),!1)}
//# sourceMappingURL=5-searchImage.js.map
