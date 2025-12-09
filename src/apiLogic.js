export async function getData(city, unitMode) {
  let unitGroup = unitMode ? "us" : "metric";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=${unitGroup}&key=JF5XXEBJYQ25JGN2VL7NZ7MYS&contentType=json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 400 || response.status === 404) {
        alert(
          `City "${city}" not found. Please check the city name and try again.`
        );
        throw new Error(`City "${city}" not found (404)`);
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    let data = parseData(result);
    console.log("Hello");
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

const parseData = function (data) {
  //parse data here
  const conditions = data.currentConditions.conditions;
  const icon = data.currentConditions.icon;
  const temp = data.currentConditions.temp;
  const lowTemp = data.days[0].tempmin;
  const highTemp = data.days[0].tempmax;

  //display data here
  return {
    conditions: conditions,
    icon: icon,
    temp: temp,
    lowTemp: lowTemp,
    highTemp: highTemp,
  };
};
