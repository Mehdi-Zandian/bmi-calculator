export default class BMIFormValues {
  constructor() {
    this.bmiForm = document.querySelector(".bmiForm"); // container
    this.bmiResult = document.querySelector(".bmiResult"); // container
    this.submitBtn = document.querySelector("button[type=submit]");
    this.genders = document.querySelector(".genders");
    this.height = document.querySelector(".height");
    this.heightNumber = document.querySelector(".heightNumber");
    this.weight = document.querySelector(".weight");
    this.weightBtns = document.querySelector(".weightBtns");
    this.age = document.querySelector(".age");
    this.ageBtns = document.querySelector(".ageBtns");
  }

  getBMIFormValue() {
    const bmiValues = {
      gender: document.querySelector(".activeGender label").textContent,
      height: this.height.value,
      weight: this.weight.textContent,
      age: this.age.textContent,
    };
    return bmiValues;
  }
}
