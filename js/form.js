const formHandler = () =>{
  let contactSubmit = document.getElementById("contactSubmit")
  let contactForm = document.getElementById("contactForm")
  let privacyCheckbox = document.getElementById("privacyCheckbox")

  
  const policyCheckboxHandler = () => {
  
    window.addEventListener('load',  () => {
      privacyCheckbox.checked = false
    })
  
    privacyCheckbox.addEventListener("change", () => {
  
      if (privacyCheckbox.checked) {
        contactSubmit.removeAttribute("disabled")
        return null
      }
      contactSubmit.setAttribute("disabled", "disabled")
  
    })
  
  }
 
  const submitHandler = () =>{
    contactSubmit.addEventListener("click", (e) => {
  
      e.preventDefault()
    
      const requiredFields = contactForm.querySelectorAll('[required]');
    
      let allFieldsFilled = true;
    
      // Controlla se tutti i campi obbligatori sono stati compilati
      requiredFields.forEach(function (field) {
        console.log('field', field.type)
        if (!field.value.trim()) { // Controlla se il campo è vuoto
          allFieldsFilled = false;
    
          // Aggiungi una classe di stile per evidenziare il campo mancante
          field.classList.add('is-invalid');
        } else if (field.type === "text" && field.value.trim().length < 3) {
    
          allFieldsFilled = false;
          field.classList.add('is-invalid');
    
        } else if (field.type === "email" && !field.value.toLowerCase().match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    
          allFieldsFilled = false;
          field.classList.add('is-invalid');
    
        } else if (field.type === "textarea" && field.value.trim().length < 10) {
    
          allFieldsFilled = false;
          field.classList.add('is-invalid');
    
        } else {
          // Rimuovi la classe di stile se il campo è compilato correttamente
          field.classList.remove('is-invalid');
        }
      });
    
      if (allFieldsFilled) {
        contactForm.submit()
        let header = document.querySelector('header')
        let spinner = document.getElementById('spinnerHome')
        let contactHeader = document.getElementById('contactHeader')
        let headerTitle = document.getElementById('headerTitle')
        header.style.height = "100%"
        header.style.backgroundColor=  "rgba(var(--bs-dark-rgb), 1)"
        spinner.classList.remove("d-none")
        document.body.style.overflow = "hidden";
        contactHeader.classList.remove("d-none")
        headerTitle.addEventListener("click", (e) => {
          e.preventDefault()
        })
        headerTitle.style.cursor="auto"
      }
    })
  }

  policyCheckboxHandler()
  submitHandler()
}

formHandler()