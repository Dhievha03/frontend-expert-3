class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Copyright © 2023 - Foodies</p>
    </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
