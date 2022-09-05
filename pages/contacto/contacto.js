import{pagesOptions} from "../../src/model.js";
(function () {
    const heroEl = document.querySelector(".new-hero");
   const heroOp = pagesOptions.heroContactForm;
   addHero(heroEl,heroOp);
   const headerEl =  document.querySelector(".new-header");
   const headerOp = pagesOptions.header;
   addHeader(headerEl, headerOp);
   const contactFormEl = document.querySelector(".new-contact-form");
   addContactForm(contactFormEl,true);
   const footerEl = document.querySelector(".new-footer");
   const footerOp = pagesOptions.footer;
   addFooter(footerEl,footerOp);
})();