/* eslint-disable class-methods-use-this */
export default class URLParamsHandler {
  updateParams(val = true) {
    const params = new URLSearchParams(window.location.search);
    if (val) {
      params.set("result", "true");
      window.location.search = params.toString();
    } else {
      params.delete("result");
      window.location.search = params.toString();
    }
  }
}
