export default class GenderHandler {
  constructor() {
    this.genders = document.querySelector(".genders");
    this.genders.addEventListener("click", this.genderChoice.bind(this));
  }

  genderChoice(e) {
    // remove active gender class
    this.genders.children[0].classList.remove("activeGender");
    this.genders.children[1].classList.remove("activeGender");
    // active css style for selected gender
    e.target.closest(".formItem").classList.add("activeGender");
  }
}
