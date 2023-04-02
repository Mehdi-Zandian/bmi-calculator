export default class AgeHandler {
  constructor() {
    this.age = document.querySelector(".age");
    this.ageBtns = document.querySelector(".ageBtns");
    this.ageBtns.children[0].addEventListener(
      "click",
      this.addAgeHandler.bind(this),
    );
    this.ageBtns.children[1].addEventListener(
      "click",
      this.reduceAgeHandler.bind(this),
    );
  }

  addAgeHandler() {
    if (this.age.textContent >= 150) return;
    this.age.textContent = +this.age.textContent + 1;
  }

  reduceAgeHandler() {
    if (this.age.textContent <= 1) return;
    this.age.textContent = +this.age.textContent - 1;
  }
}
