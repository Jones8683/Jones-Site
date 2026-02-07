class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let lastScrollY = window.scrollY;

    this.classList.toggle("minimized", lastScrollY > 20);

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      this.classList.toggle("minimized", currentScrollY > 20);

      this.dataset.show = (
        currentScrollY < 350 || currentScrollY < lastScrollY
      ).toString();

      lastScrollY = currentScrollY;
    });
  }
}

customElements.define("header-component", HeaderComponent);
