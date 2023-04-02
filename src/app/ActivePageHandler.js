/* eslint-disable no-unused-vars */
import BMIForm from "./BMIForm/BMIForm";
import BMIResult from "./BMIResult/BMIResult";

export default class ActivePageHandler {
  constructor() {
    this.bmiForm = document.querySelector(".bmiForm");
    this.bmiResult = document.querySelector(".bmiResult");
  }

  activePagesHandler() {
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) {
      // if params is empty string
      this.bmiForm.classList.add("activePage");
      this.bmiResult.classList.remove("activePage");
      const bmiFormClass = new BMIForm();
    } else if (params.toString() === "result=true") {
      // if params is set for result page
      this.bmiForm.classList.remove("activePage");
      this.bmiResult.classList.add("activePage");
      const bmiValues = JSON.parse(localStorage.getItem("bmiValues"));
      const bmiResultClass = new BMIResult(bmiValues);
      bmiResultClass.showBMIResultValues();
    }
  }
}
