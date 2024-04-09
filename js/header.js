const handleHeader = () => {
  let header = document.querySelector('header')
  let spinner = document.getElementById('spinnerHome')

  header.style.height = "100%"
  header.style.transitionDelay = "0.4s";

  window.addEventListener('load', function () {
    header.style.height = "100px"
    header.style.background = "linear-gradient(rgba(var(--bs-dark-rgb), 1), rgba(var(--bs-dark-rgb), 0))"
    setTimeout(() => {
      spinner.classList.add('d-none')
      header.style.transitionDelay = "";
    }, 400);
  })

  document.addEventListener("scroll", (event) => {
    if (window.scrollY) {
      header.style.height = "130px"
    } else {
      header.style.height = "100px"
      header.style.background = "linear-gradient(rgba(var(--bs-dark-rgb), 1), rgba(var(--bs-dark-rgb), 0))"
    }
  });

}
handleHeader()












