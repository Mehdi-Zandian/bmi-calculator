import "./main.css";
import URLParams from "./app/URLParams";
import BMIForm from "./app/BMIForm/BMIForm";

class App {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const urlParams = new URLParams();
    urlParams.activePagesHandler();

    const bmiForm = new BMIForm();
    bmiForm.init();
  }
}

const app = new App();
app.render();
