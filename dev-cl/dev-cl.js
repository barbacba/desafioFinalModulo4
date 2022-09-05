function addDevCl(el,{img,title,paragraph}){
 const devClEl = document.createElement("section");
 devClEl.classList.add("dev-cover-letter")
 devClEl.innerHTML=`
    <div class="dev-cl__container">
      <div class="dev-cl__img-container">
        <img src=${img.src} alt=${img.alt} class="dev-cl__img" />
      </div>
      <div class="dev-cl__text-container">
        <h2 class="dev-cl__title">${title}</h2>
        <p class="dev-cl__paragraph">${paragraph}</p>
      </div>
    </div>
 `;
 el.appendChild(devClEl);
};