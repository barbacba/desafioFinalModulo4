//footer require <script defer src="https://kit.fontawesome.com/1800543b49.js" crossorigin="anonymous"></script> to work.
function addFooter (el, {logo,whatsappUrl,githubUrl,linkedinUrl}){
const footerEl = document.createElement("footer");
footerEl.classList.add("footer__container");
footerEl.innerHTML = `
        <div class="footer__logo-container">
          <a href=${logo.url} class="footer__logo-link"
            ><br /><img src=${logo.img} alt="" class="footer__logo"
          /></a>
        </div>
        <div class="footer__sn-container">
          <div class="footer__sn">
            <a href=${whatsappUrl} class="footer__sn-link">
              <i class="fa-brands fa-whatsapp fa-2xl whatsapp"></i> Whatsapp
            </a>
          </div>
          <div class="footer__sn">
            <a href=${githubUrl} class="footer__sn-link">
              <i class="fa-brands fa-github fa-2xl github"></i> Github
            </a>
          </div>
          <div class="footer__sn">
            <a href=${linkedinUrl} class="footer__sn-link">
              <i class="fa-brands fa-linkedin fa-2xl linkedin"></i> Linkedin
            </a>
          </div>
        </div>
`;
el.appendChild(footerEl);
};