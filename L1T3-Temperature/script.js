function convertToCelsius() {
    var input = document.getElementById("input").value;
    var celsius = (input - 32) * 5 / 9;
    document.getElementById("output").textContent = celsius + " °C";
  }
  
  function convertToFahrenheit() {
    var input = document.getElementById("input").value;
    var fahrenheit = (input * 9 / 5) + 32;
    document.getElementById("output").textContent = fahrenheit + " °F";
  }
  
  function convertToKelvin() {
    var input = document.getElementById("input").value;
    var kelvin = parseFloat(input) + 273.15;
    document.getElementById("output").textContent = kelvin + " K";
  }
  