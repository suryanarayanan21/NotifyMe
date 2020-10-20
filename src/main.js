import run from "./nlp/tags.js";
import getAuthToken from "./infoget/searchReddit.js";

// Utility definitions

let close_window = () => {
  require("electron").remote.getCurrentWindow().close();
};

let minimise_window = () => {
  require("electron").remote.getCurrentWindow().minimize();
};

// Event Listener binding

document
  .getElementById("minimise-button")
  .addEventListener("click", minimise_window);

document.getElementById("close-button").addEventListener("click", close_window);

// Test
let test = async () => {
  let token = await getAuthToken();
  console.log(token);
};

test();
