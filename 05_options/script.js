const citiesByCountry = {
    "Germany": ["Hannover", "Hamburg", "Berlin"],
    "England": ["London", "Manchester", "Liverpool"],
    "France": ["Paris", "Bordeaux", "Straßburg"]
}

const countrySelect = document.getElementById("countries");
const citySelect = document.getElementById("cities");

countrySelect.addEventListener("change", function() {
    citySelect.innerHTML = "";

    const selectedCountry = countrySelect.value;
    //console.log(selectedCountry);

    const selectedCities = citiesByCountry[selectedCountry];
    //console.log(selectedCities);

    for(let i = 0; i < selectedCities.length; i++) {
        const city = selectedCities[i];

        const newCityOption = document.createElement("option");
        newCityOption.classList.add("cities");
        newCityOption.textContent = city;
        citySelect.appendChild(newCityOption);
    }
})