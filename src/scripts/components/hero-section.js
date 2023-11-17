class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
      <picture class="hero-img-container">
          <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg" crossorigin="anonymous">
          <img class="hero-img lazyload" src="./images/hero-image_2-large.jpg" alt="hero images" crossorigin="anonymous"/>
      </picture>
      <div class="hero-content">
        <h1>Mau makan apa hari ini?</h1>
      </div>
    </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
