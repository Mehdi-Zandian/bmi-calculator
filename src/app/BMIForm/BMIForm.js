/* eslint-disable class-methods-use-this */
import GenderHandler from "./GenderHandler";
import WeightHandler from "./WeightHandler";
import AgeHandler from "./AgeHandler";
import URLParamsHandler from "../URLParamsHandler";

export default class BMIForm {
  constructor() {
    // instances
    this.genderHandler = new GenderHandler();
    this.weightHandler = new WeightHandler();
    this.ageHandler = new AgeHandler();
    // height
    this.height = document.querySelector(".height");
    this.heightNumber = document.querySelector(".heightNumber");
    this.height.addEventListener("input", this.heightSliderHandler.bind(this));
    // submit button
    this.submitBtn = document.querySelector("button[type=submit]");
    this.submitBtn.addEventListener("click", this.submitFormHandler);
  }

  heightSliderHandler(e) {
    this.heightNumber.textContent = e.target.value;
  }

  submitFormHandler(e) {
    e.preventDefault();
    const bmiValues = {
      gender: document.querySelector(".activeGender label").textContent,
      height: +document.querySelector(".heightNumber").textContent,
      weight: +document.querySelector(".weight").textContent,
      age: +document.querySelector(".age").textContent,
    };
    localStorage.setItem("bmiValues", JSON.stringify(bmiValues));
    const urlParamsHandler = new URLParamsHandler();
    urlParamsHandler.updateParams(true); // true => shows result page
  }
}
