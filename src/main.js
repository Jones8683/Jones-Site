const nav = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("minimized");
  } else {
    nav.classList.remove("minimized");
  }
});
