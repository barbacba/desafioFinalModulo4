//ContactForm require <script defer src="https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js"></script> to work.
function addContactForm(el,h1=false){
  const formEl= document.createElement("div");
  formEl.classList.add("contact-form")
  formEl.innerHTML = `
  <div class="contact-form__container">
    <${h1?"h1":"h2"} class="contact-form__title">Contactame</${h1?"h1":"h2"}>
    <form class="contact-form__inputs-container">
      <label for="name" class="contact-form__input-label--name"
        >NOMBRE</label
      >
      <input
        type="text"
        name="name"
        id="name"
        class="contact-form__input--name"
        required
      />
      <label for="email" class="contact-form__input-label--email"
        >EMAIL</label
      >
      <input
        type="e-mail"
        name="email"
        id="email"
        class="contact-form__input--email"
        required
      />
      <label for="message" class="contact-form__input-label--message"
        >MENSAJE</label
      >
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        class="contact-form__input--message"
        required
      ></textarea>
      <button class="contact-form__send-button">Enviar</button>
    </form>
  </div>
  `;
  const form = formEl.querySelector(".contact-form__inputs-container");
  form.addEventListener("submit", (evnt)=>{
      evnt.preventDefault();
      const formData = new FormData(evnt.target);
      const formEntriesObj = Object.fromEntries(formData.entries());
      fetch("https://apx-api.vercel.app/api/utils/dwf",{
        method: "POST",
        headers: { "content-type": "application/json"},
        body:JSON.stringify({
          "to":"fernando_areosa@hotmail.com.ar",
          "message":`Nombre:${formEntriesObj.name} E-mail:${formEntriesObj.email} Mensaje:
          ${formEntriesObj.message} `
     }),
      })
      .then(r=>{
        swal({
              button: false,
              timer:3000,
              title:"Mensaje enviado.",
              icon: "success",
              text:" "
        });
        form.reset();
      })
      .catch(e=>swal({
        title:"Mensaje no enviado",
        text:"Por favor contactame por otro medio o intenta de nuevo más tarde.",
        icon:"error",
        dangerMode: true,
      }));
      
  })
  el.appendChild(formEl);
  };