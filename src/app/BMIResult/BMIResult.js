export default class BMIResult {
  constructor() {
    this.values = {};
  }

  init(formValues) {
    this.values = formValues;
    console.log(this.values);
  }
}
