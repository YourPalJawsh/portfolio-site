let calcVal = []
console.log(calcVal);

function updateValue() {
    let valuePool = "";
    for (let i = 0; i < calcVal.length; i++) {
        valuePool += calcVal[i];
        if (i < calcVal.length - 1)
            valuePool += ", ";
    }
    document.getElementById("valDisplay").innerHTML = valuePool;
}

function findMean() {
    let mean = 0;
    for (num in calcVal) {
        mean += parseFloat(calcVal[num]);  
    }
    mean /= calcVal.length;
    document.getElementById("meanDisplay").innerHTML = "Mean: " + mean;
}

function addValue() {
    let tempVal = document.getElementById("dataEntry").value;

    if ( tempVal === "" || isNaN(tempVal) ) 
        alert("Not a valid input: Enter a number!");
    
    else if ( !isNaN(tempVal) ) {
        calcVal.push(tempVal);
        console.log(calcVal);
        document.getElementById("dataEntry").value = "";
        updateValue();
        findMean();
    }
    else 
        alert("Not a valid input.");

    
}

function removeValue() {
    let tempVal = document.getElementById("dataEntry").value;
    let valLocation = calcVal.indexOf(tempVal);

    if ( tempVal === "" || isNaN(tempVal) )
        alert("Not a valid input: Enter a number!");

    else if ( !isNaN(tempVal) && (valLocation !== -1) ) {
        calcVal.splice(valLocation, 1);
        console.log(calcVal);
        document.getElementById("dataEntry").value = "";
        updateValue();    
        findMean();
    }
    else if (tempVal !== calcVal[valLocation]) {
        alert("Not inside value pool.")
    }
    else 
        alert("Not a valid input.");
    
}