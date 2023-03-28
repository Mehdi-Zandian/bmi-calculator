import URLParams from "../URLParams";
import BMIFormValues from "./BMIFormValues";
import BMIResult from "../BMIResult/BMIResult";

export default class BMIForm extends BMIFormValues {
  removeActiveGenderClass() {
    this.genders.children[0].classList.remove("activeGender");
    this.genders.children[1].classList.remove("activeGender");
  }

  // active css style for selected gender
  activeGender() {
    const genderChoice = (e) => {
      this.removeActiveGenderClass(); // reset choice
      e.target.closest(".formItem").classList.add("activeGender"); // set the choice
    };
    this.genders.addEventListener("click", genderChoice);
  }

  // dynamic height number in html
  heightSliderHandler() {
    this.heightNumber.textContent = this.height.value;
    const heightNumberChanger = (e) => {
      this.heightNumber.textContent = e.target.value; // heightNumber textcontent by slider value
    };
    this.height.addEventListener("input", heightNumberChanger);
  }

  // dynamic weight number + -
  weightHandler() {
    const addWeight = () => {
      if (this.weight.textContent >= 180) return;
      this.weight.textContent = +this.weight.textContent + 1;
    };
    this.weightBtns.children[0].addEventListener("click", addWeight);

    const reduceWeight = () => {
      if (this.weight.textContent <= 5) return;
      this.weight.textContent = +this.weight.textContent - 1;
    };
    this.weightBtns.children[1].addEventListener("click", reduceWeight);
  }

  // dynamic age number + -
  ageHandler() {
    const addAge = () => {
      if (this.age.textContent >= 150) return;
      this.age.textContent = +this.age.textContent + 1;
    };
    this.ageBtns.children[0].addEventListener("click", addAge);

    const reduceAge = () => {
      if (this.age.textContent <= 1) return;
      this.age.textContent = +this.age.textContent - 1;
    };
    this.ageBtns.children[1].addEventListener("click", reduceAge);
  }

  submitFormHandler() {
    const urlParams = new URLParams();
    const bmiResult = new BMIResult();
    const submitButtonActions = (e) => {
      e.preventDefault();
      urlParams.resultPageParamsHandler(true);
      bmiResult.init(this.getBMIFormValue()); // pass values to result page
    };
    this.submitBtn.addEventListener("click", submitButtonActions);
  }

  init() {
    this.activeGender();
    this.heightSliderHandler();
    this.weightHandler();
    this.ageHandler();
    this.submitFormHandler();
  }
}
