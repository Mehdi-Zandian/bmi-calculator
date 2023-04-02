/* eslint-disable class-methods-use-this */
import CalculateBMI from "./CalculateBMI";
import URLParamsHandler from "../URLParamsHandler";

export default class BMIResult {
  constructor(values) {
    this.values = values;
    // instances
    this.calculateBMI = new CalculateBMI();
    // recalculate button
    this.recalculateBtn = document.querySelector("button[type=button]");
    this.recalculateBtn.addEventListener(
      "click",
      this.recalculateButtonHandler.bind(this),
    );
  }

  showBMIResultValues() {
    const [calculatedBMIResult, bmi] = this.calculateBMI.calculateBMIResult(
      this.values,
    );
    document.querySelector(".status").classList.add(calculatedBMIResult.color);
    document.querySelector(".status").textContent = calculatedBMIResult.status;
    document.querySelector(".result").textContent = calculatedBMIResult.result;
    document.querySelector(".score").textContent = JSON.stringify(
      Math.floor(bmi),
    );
  }

  recalculateButtonHandler(e) {
    e.preventDefault();
    const urlParamsHandler = new URLParamsHandler();
    urlParamsHandler.updateParams(false); // false => shows bmiForm page
  }
}
