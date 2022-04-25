console.log("werkt dit allemaal");
const zoekKnop = document.getElementById("zoek-knop");
zoekKnop.addEventListener("click", func);
function func() {
    const countryInput = document.getElementById("country-input").value;
    console.log(countryInput);
}
function getInputValue() {
    // Selecting the input element and get its value
    let inputVal = document.getElementById("country-input").value;
    // Displaying the value
    alert(inputVal);
}

//# sourceMappingURL=index.816e7b21.js.map
