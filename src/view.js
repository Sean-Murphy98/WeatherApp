export function displayData(cityData, unitMode) {
  let unitSymbol = unitMode ? "°F" : "°C";
  let displayContainer = document.getElementById("weatherDisplayContainer");
  while (displayContainer.hasChildNodes()) {
    displayContainer.removeChild(displayContainer.firstChild);
  }
  const conditionsElement = document.createElement("h2");
  const iconElement = document.createElement("img");
  const tempElement = document.createElement("h3");
  const lowTempElement = document.createElement("h4");
  const highTempElement = document.createElement("h4");
  conditionsElement.textContent = cityData.conditions;
  tempElement.textContent = `Current: ${cityData.temp}${unitSymbol}`;
  lowTempElement.textContent = `Low: ${cityData.lowTemp}${unitSymbol}`;
  highTempElement.textContent = `High: ${cityData.highTemp}${unitSymbol}`;
  import(`./images/${cityData.icon}.svg`).then((iconSrc) => {
    iconElement.src = iconSrc.default;
  });
  iconElement.alt = cityData.conditions;
  iconElement.width = 100;
  iconElement.height = 100;
  displayContainer.appendChild(conditionsElement);
  displayContainer.appendChild(iconElement);
  displayContainer.appendChild(tempElement);
  displayContainer.appendChild(lowTempElement);
  displayContainer.appendChild(highTempElement);
}
const spinner = document.getElementById("spinner");
export function showSpinner() {
  spinner.style.display = "block";
}

export function hideSpinner() {
  spinner.style.display = "none";
}
