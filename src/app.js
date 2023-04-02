import "./main.css";
import myImage from "./assets/github.svg";
import ActivePageHandler from "./app/ActivePageHandler";

class App {
  // eslint-disable-next-line class-methods-use-this
  render() {
    // add logo image to navbar
    const image = new Image();
    image.src = myImage;
    image.classList = "md:w-10 w-8";
    document.querySelector(".github").appendChild(image);

    // manages which page to show
    const activePageHandler = new ActivePageHandler();
    activePageHandler.activePagesHandler();
  }
}

const app = new App();
app.render();
