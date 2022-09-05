function addApp (el,{appTitle, items}){
    const appEl = document.createElement("article");
    appEl.classList.add("app__container");
    appEl.innerHTML = `
    <hgroup>
        <h2 class="app__title">${appTitle}</h2>
    </hgroup>
    <div class="app__item-container"></div>
    `;
    const itemContainerEl = appEl.querySelector(".app__item-container");
    items.forEach(obj=>{
        const itemEl = document.createElement("section");
        itemEl.classList.add("item");
        const htmlContent = 
             obj.itemType == "img"? `
                <div class="item__media-container">
                    <img loading="lazy" src=${obj.media.src} alt="${obj.media.alt}" class="item__media"/>
                </div>
                <h3 class="item__title">${obj.title}</h2>
                <div class="item__text-container">
                    <p class="item__text">${obj.text}</p>
               </div>
               <br>
                `
            :obj.itemType == "imgLink"?`
               <div class="item__media-container">
                    <img loading="lazy" src=${obj.media.src} alt="${obj.media.alt}" class="item__media"/>
              </div>
                <h3 class="item__title">${obj.title}</h2>
                <div class="item__text-container">
                 <p class="item__text">${obj.text}</p>
                </div>
                <a href=${obj.link.url} class="item__link">${obj.link.aContent}</a>
                `
            :obj.itemType == "youtubeLink"?`
                <div class="item__media-container:youtube">
                <iframe loading="lazy" src=${obj.media.youSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
                <h3 class="item__title">${obj.title}</h2>
                <div class="item__text-container">
                    <p class="item__text">${obj.text}</p>
                </div>
                <a href=${obj.link.url} class="item__link">${obj.link.aContent}</a>
                `
            :"Defina el tipo de contenido";
        itemEl.innerHTML = htmlContent;
        itemContainerEl.appendChild (itemEl);
    });
    el.appendChild(appEl);
};