function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  let ParisElement = document.querySelector("#Paris");
  if (ParisElement) {
    let ParisDateElement = ParisElement.querySelector(".date");
    let ParisTimeElement = ParisElement.querySelector(".time");
    let ParisTime = moment().tz("Europe/Paris");

    ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
    ParisTimeElement.innerHTML = ParisTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  let CanadaElement = document.querySelector("#Canada");
  if (CanadaElement) {
    let CanadaDateElement = CanadaElement.querySelector(".date");
    let CanadaTimeElement = CanadaElement.querySelector(".time");
    let CanadaTime = moment().tz("Canada/Eastern");

    CanadaDateElement.innerHTML = CanadaTime.format("MMMM Do YYYY");
    CanadaTimeElement.innerHTML = CanadaTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  let LisbonElement = document.querySelector("#Lisbon");
  if (LisbonElement) {
    let LisbonDateElement = LisbonElement.querySelector(".date");
    let LisbonTimeElement = LisbonElement.querySelector(".time");
    let LisbonTime = moment().tz("Europe/Lisbon");

    LisbonDateElement.innerHTML = LisbonTime.format("MMMM Do YYYY");
    LisbonTimeElement.innerHTML = LisbonTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  let JohannesburgElement = document.querySelector("#Johannesburg");
  if (JohannesburgElement) {
    let JohannesburgDateElement = JohannesburgElement.querySelector(".date");
    let JohannesburgTimeElement = JohannesburgElement.querySelector(".time");
    let JohannesburgTime = moment().tz("Africa/Johannesburg");

    JohannesburgDateElement.innerHTML = JohannesburgTime.format("MMMM Do YYYY");
    JohannesburgTimeElement.innerHTML = JohannesburgTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  let AccraElement = document.querySelector("#Accra");
  if (AccraElement) {
    let AccraDateElement = AccraElement.querySelector(".date");
    let AccraTimeElement = AccraElement.querySelector(".time");
    let AccraTime = moment().tz("Africa/Accra");

    AccraDateElement.innerHTML = AccraTime.format("MMMM Do YYYY");
    AccraTimeElement.innerHTML = AccraTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
