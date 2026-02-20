document
  .getElementById("calculate-btn-3")
  .addEventListener("click", function () {
    let a = getValueFromInput("firstValue");
    let b = getValueFromInput("secondValue");
    let c = getValueFromInput("thirdValue");

    let s = (a + b + c) / 2;
    let area = Number(Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(3);

    console.log(a, b, c, s, area);

    let result2 = document.getElementById("result2");
    result2.innerText = `${area} বর্গ একক`;

    let resultContainer = document.getElementById("result-container2");
    resultContainer.classList.remove("hidden");
  });
