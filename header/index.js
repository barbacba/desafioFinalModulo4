function addHeader (el, {logo:{src,alt,url},links,shortcutIcon}){
    const headerEl= document.createElement("header");
    headerEl.classList.add("header")
    headerEl.innerHTML =`
        <nav class="nav">
         <a class="nav__logo-container" href="${url}">
           <img src="${src}" alt="${alt}" class="nav__logo" />
         </a>
         <div class="nav__menu">
           <div class="nav__menu--burger__container">
           <a class="nav__menu--burger" aria-label="menu" aria-expanded="false">
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
           </a>
           <div class="nav__menu--nav-bar">
             <div class="nav-bar"></div>
           </div>
         </div>
         </div>
        </nav>
    `;
    const navBarEl = headerEl.querySelector(".nav-bar")
    links.forEach(link =>{
        const aEl = document.createElement("a");
        aEl.classList.add("nav-bar__link");
        aEl.href = link.href;
        aEl.innerHTML = `${link.name}`;
        navBarEl.appendChild(aEl);
    })
    const burgerIconEl = headerEl.querySelector(".nav__menu--burger");
    const menuContainerEl = headerEl.querySelector(".nav__menu--nav-bar");
    burgerIconEl.addEventListener("click", e=>{
      e.preventDefault;
        if (burgerIconEl.classList.contains("burger-is-active")){
            burgerIconEl.classList.remove("burger-is-active");
            menuContainerEl.classList.remove("burger-is-active");
            }else{
            burgerIconEl.classList.add("burger-is-active");
            menuContainerEl.classList.add("burger-is-active");           
        };
    });
    el.appendChild(headerEl);
    const headEl = document.querySelector("head");
    const shortcutIconEl = document.createElement("link");
    shortcutIconEl.setAttribute("rel", "shortcut icon");
    shortcutIconEl.setAttribute("href", shortcutIcon);
    shortcutIconEl.setAttribute("type", "image/png")
    headEl.appendChild(shortcutIconEl)

};