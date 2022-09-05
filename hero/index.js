function addHero (el, {tag,content,urlMovil,urlDesktop,gradient}){
    const heroEl = document.createElement("section");
    heroEl.classList.add("hero-header");
    gradient? heroEl.classList.add("hero-header__background-gradient"):
    heroEl.classList.add("hero-header__background");
    heroEl.innerHTML = `
      <div class="hero-header__gradient"></div>
      <${tag} class="hero-header__content">${content}</${tag}>
    `;
    const newHeaderEl = document.createElement("div");
    newHeaderEl.classList.add("new-header");
    el.appendChild(newHeaderEl);
    el.appendChild(heroEl);
    const style = document.documentElement.style;
    urlMovil && urlDesktop? style.setProperty("--url-movil", `url("${urlMovil}")`) & style.setProperty("--url-desktop", `url("${urlDesktop}")`)
    :style.setProperty("--gradient", `linear-gradient(${gradient})`);
};