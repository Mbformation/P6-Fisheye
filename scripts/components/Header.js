class Header {
  constructor() {
    this.compEl = document.createElement("header");
  }
  render() {
    this.compEl.innerHTML = `
    <a href="index.html">
      <img src="assets/images/logo.png" class="logo" alt="fisheye logo"/>
    </a>
    <h1>Nos photographes</h1>`;
    return this.compEl;
  }
}

export default Header;
