import "./styles.css";
import { getData } from "./apiLogic.js";
import { displayData, showSpinner, hideSpinner } from "./view.js";

let cityForm = document.getElementById("cityForm");
cityForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  showSpinner();
  const name = document.getElementById("cityName").value;
  const unitMode = document.getElementById("unitMode").checked;
  let cityData = await getData(name, unitMode);
  await new Promise((resolve) => setTimeout(resolve, 200));
  hideSpinner();
  cityData ? displayData(cityData, unitMode) : null;
  cityForm.reset();
  //newPrjContainer.classList.toggle("active");
  //projectListHeader.classList.toggle("active");
});
