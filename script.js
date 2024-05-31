const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdown = document.querySelectorAll(".dropdown select");

for (const code in countryList) {
  console.log(code, countryList[code]);
}

for (const select of dropdown) {
  for (const currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value.currcode;
    select.append(newOption);

    if (select.name === "from" && currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currcode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    upDateFlag(evt.target);
  });
}

const upDateFlag = (element) => {
  let currcode = element.value;
  console.log("code ", currcode);
  let countryCode = countryList[currcode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  console.log(element.parentElement.parentElement.querySelector("img"));

  let img = element.parentElement.parentElement.querySelector("img");
  img.src = newSrc;
};
