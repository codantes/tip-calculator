
var  bill, tipPercent, noOfppl;

// funtion to take in the input values

function tipPercentage(percent) {
    tipPercent = percent;
    console.log(tipPercent);
}

document.querySelector("#bill")
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            bill = document.querySelector("#bill").value;
            console.log(bill);
        }
    });

document.querySelector("#no-of-people")
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            noOfppl = document.querySelector("#no-of-people").value;
            console.log(noOfppl);
            calculation(bill, tipPercent, noOfppl);
        }
    });

// funtion to do calculation

function calculation(billAmt, tipPercentAmt, pplAmt) {
    let tipAmt = billAmt * tipPercentAmt
    let tipPerson = tipAmt / pplAmt;
    display(tipAmt, tipPerson) ;
}

// fuction to display the result

function display(tip, Person) {
    let totalTip = "$" + tip; 
    let tipPerPerson = "$" + Person;
    document.getElementById("total-tip-display").innerHTML = totalTip;
    document.getElementById("each-person-display").innerHTML = tipPerPerson;
}

// function reset the display

function reset() {
    document.getElementById("total-tip-display").innerHTML = "$0.00";
    document.getElementById("each-person-display").innerHTML = "$0.00";
    document.getElementById("bill").value = "";
    document.getElementById("no-of-people").value = "";
}