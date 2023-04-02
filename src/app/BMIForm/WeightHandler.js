export default class weightHandler {
  constructor() {
    this.weight = document.querySelector(".weight");
    this.weightBtns = document.querySelector(".weightBtns");
    this.weightBtns.children[0].addEventListener(
      "click",
      this.addWeightHandler.bind(this),
    );
    this.weightBtns.children[1].addEventListener(
      "click",
      this.reduceWeightHandler.bind(this),
    );
  }

  addWeightHandler() {
    if (this.weight.textContent >= 180) return;
    this.weight.textContent = +this.weight.textContent + 1;
  }

  reduceWeightHandler() {
    if (this.weight.textContent <= 5) return;
    this.weight.textContent = +this.weight.textContent - 1;
  }
}
