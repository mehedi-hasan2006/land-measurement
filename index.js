document.getElementById('calculate-btn-1').addEventListener('click', function(){
    
    let east = getValueFromInput('east');
    let west = getValueFromInput('west');
    let north = getValueFromInput('north');
    let south = getValueFromInput('south');

    if(east===0 || west===0 || north===0 || south===0){
        alert("সবগুলো ঘর পূরণ করুন। ")
        return
    }

    let avg1= ((east+west)/2);
    let avg2 = ((north+south)/2)

    let totalLand = ((avg1 * avg2) / 435.6);

    let result = document.getElementById('result');
    result.innerText = `${totalLand} শতাংশ`;

    let resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove("hidden");
})