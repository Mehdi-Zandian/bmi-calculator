/* eslint-disable class-methods-use-this */
export default class CalculateBMI {
  calculateBMIResult(values) {
    const bmi = values.weight / (values.height / 100) ** 2;
    let calculatedBMIResult = {
      status: "",
      color: "",
      result: "",
    };
    if (bmi > 0 && bmi <= 18.4) {
      calculatedBMIResult = {
        status: "UNDERWEIGHT",
        color: "text-yellow-400",
        result:
          "That's Ok! Eat more frequently based on a nutrient-dense diet.",
      };
    } else if (bmi > 18.4 && bmi <= 24.9) {
      calculatedBMIResult = {
        status: "NORMAL",
        color: "text-green-400",
        result: "You have a normal body weight. keep up the Good job!",
      };
    } else if (bmi > 24.9 && bmi <= 39.9) {
      calculatedBMIResult = {
        status: "OVERWEIGHT",
        color: "text-orange-400",
        result:
          "Eat a balanced, calorie-controlled diet as recommended by your health professional ",
      };
    } else if (bmi > 39.9) {
      calculatedBMIResult = {
        status: "OBESE",
        color: "text-red-400",
        result:
          "Careful! Eat a healthy, reduced-calorie diet and exercise regularly",
      };
    }
    return [calculatedBMIResult, bmi];
  }
}
