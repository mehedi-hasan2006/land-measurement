document.getElementById('calculate-btn-1').addEventListener('click', function(){
    
    let east = getValueFromInput('east');
    let west = getValueFromInput('west');
    let north = getValueFromInput('north');
    let south = getValueFromInput('south');

    let avg1= ((east+west)/2);
    let avg2 = ((north+south)/2)

    let totalLand = ((avg1 * avg2) / 435.6).toFixed(4);

    let result = document.getElementById('result');
    result.innerText = totalLand;

    let resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove("hidden");
})