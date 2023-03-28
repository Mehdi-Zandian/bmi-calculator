/* eslint-disable class-methods-use-this */
export default class URLParams {
  resultPageParamsHandler(val = true) {
    const params = new URLSearchParams(window.location.search);
    if (val) {
      params.set("result", "true");
      window.location.search = params.toString();
    } else {
      params.delete("result");
      window.location.search = params.toString();
    }
  }

  activePagesHandler() {
    const bmiForm = document.querySelector(".bmiForm");
    const bmiResult = document.querySelector(".bmiResult");
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) {
      // if params is empty string
      bmiForm.classList.add("activePage");
      bmiResult.classList.remove("activePage");
    } else if (params.toString() === "result=true") {
      // if params is set for result page
      bmiForm.classList.remove("activePage");
      bmiResult.classList.add("activePage");
    }
  }
}
