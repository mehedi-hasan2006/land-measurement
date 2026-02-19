document
  .getElementById("calculate-btn-2")
  .addEventListener("click", function () {
    let east1 = getValueFromInput("east1");
    let west1 = getValueFromInput("west1");
    let north1 = getValueFromInput("north1");
    let south1 = getValueFromInput("south1");

    if (east1 === 0 || west1 === 0 || north1 === 0 || south1 === 0) {
      alert("সবগুলো ঘর পূরণ করুন। ");
        return;
    }

    let hyperbola1 = Math.sqrt(east1 * east1 + south1 * south1);
    let s1 = (east1 + south1 + hyperbola1) / 2;
    let area1 = Math.sqrt(
      s1 * (s1 - east1) * (s1 - south1) * (s1 - hyperbola1),
    );

    
    let hyperbola2 = Math.sqrt(west1 * west1 + north1 * north1);
    let s2 = (west1 + north1 + hyperbola2)/2;
    let area2 = Math.sqrt(
      s2 * (s2 - west1) * (s2 - north1) * (s2 - hyperbola2),
    );



    const totalArea = area1 + area2;
    const totalLand = totalArea / 435.6;


    let result1 = document.getElementById("result1");
    result1.innerText = `${totalLand} শতাংশ`;

    let resultContainer = document.getElementById("result-container1");
    resultContainer.classList.remove("hidden");
  });
