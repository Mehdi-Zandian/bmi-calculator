import "./main.css";
import BMIForm from "./app/BMIForm/BMIForm";

class App {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const bmiForm = new BMIForm();
    bmiForm.init();
  }
}

const app = new App();
app.render();
