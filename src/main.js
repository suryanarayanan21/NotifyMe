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

document.getElementById("size-toggle").addEventListener("click", () => {
  require("electron").remote.getCurrentWindow().setSize(1200, 600, true);
});
