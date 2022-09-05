import{pagesOptions} from "../../src/model.js";
(function () {
   const heroEl = document.querySelector(".new-hero");
   const heroOp = pagesOptions.heroCertificados;
   addHero(heroEl,heroOp);
   const headerEl =  document.querySelector(".new-header");
   const headerOp = pagesOptions.header;
   addHeader(headerEl, headerOp);
   const appEl = document.querySelector(".new-app");
   const appOp = pagesOptions.appCertificados;
   addApp(appEl,appOp);
   const footerEl = document.querySelector(".new-footer");
   const footerOp = pagesOptions.footer;
   addFooter(footerEl,footerOp);
})();