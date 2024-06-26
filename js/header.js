const handleHeader = () => {
  let header = document.querySelector('header')
  let spinner = document.getElementById('spinnerHome')

  header.style.height = "100%"
  header.style.transitionDelay = "0.4s";

  window.addEventListener('load',  () => {
    header.style.height = "130px"
    header.style.background = "linear-gradient(rgba(var(--bs-dark-rgb), 1) 0%,rgba(var(--bs-dark-rgb), 0.75) 40%, rgba(var(--bs-dark-rgb), 0.6) 60%, rgba(var(--bs-dark-rgb), 0))"
    setTimeout(() => {
      spinner.classList.add('d-none')
      header.style.transitionDelay = "";
    }, 400);
  })

  document.addEventListener("scroll", (event) => {
    if (window.scrollY) {
      header.style.height = "160px"
    } else {
      header.style.height = "130px"
      header.style.background = "linear-gradient(rgba(var(--bs-dark-rgb), 1) 0%,rgba(var(--bs-dark-rgb), 0.75) 40%, rgba(var(--bs-dark-rgb), 0.6) 60%, rgba(var(--bs-dark-rgb), 0))"
    }
  });

}
handleHeader()