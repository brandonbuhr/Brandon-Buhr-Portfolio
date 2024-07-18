// template_bjnc6eh
// service_hfo86ei
// rexLx4CEHQ3hhyqBd
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector("modal__overlay--loading");
  const success = document.querySelector("modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_hfo86ei",
      "template_bjnc6eh",
      event.target,
      "tjsrI99fy5p18CUFI"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on brandonbuhr35@gmail.com"
      );
    });
}
