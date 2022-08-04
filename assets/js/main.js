let bill = 0;
let people = 0;
let percent = 0;
let tip = 0;

function inputPercent(percentValue) {
    percent = percentValue;
    selectedOption();
    calcTip();
    cutValue();
    selectPeople();
}

function selectedOption() {

    document.getElementById("button5").addEventListener("click", function () {
        document.querySelector(`#button5`).classList.add("active");
        document.querySelector(`#button10`).className = "button";
        document.querySelector(`#button15`).className = "button";
        document.querySelector(`#button25`).className = "button";
        document.querySelector(`#button50`).className = "button";
        document.querySelector(`#custom`).className = "button";
        percent = document.querySelector(`button5 button`);
        valor(percent);
        inputBill();
        calcTip();
        selectPeople();
        inputCustom();
        cutValue();
    });

    document.getElementById("button10").addEventListener("click", function () {
        document.querySelector(`#button10`).classList.add("active");
        document.querySelector(`#button5`).className = "button";
        document.querySelector(`#button15`).className = "button";
        document.querySelector(`#button25`).className = "button";
        document.querySelector(`#button50`).className = "button";
        document.querySelector(`#custom`).className = "button";
        percent = document.querySelector(`button10 button`);
        valor(percent);
        inputBill();
        calcTip();
        selectPeople();
        inputCustom();
        cutValue();
    });

    document.getElementById("button15").addEventListener("click", function () {
        document.querySelector(`#button15`).classList.add("active");
        document.querySelector(`#button5`).className = "button";
        document.querySelector(`#button10`).className = "button";
        document.querySelector(`#button25`).className = "button";
        document.querySelector(`#button50`).className = "button";
        document.querySelector(`#custom`).className = "button";
        percent = document.querySelector(`button15 button`);
        valor(percent);
        inputBill();
        calcTip();
        selectPeople();
        inputCustom();
        cutValue();
    });

    document.getElementById("button25").addEventListener("click", function () {
        document.querySelector(`#button25`).classList.add("active");
        document.querySelector(`#button5`).className = "button";
        document.querySelector(`#button10`).className = "button";
        document.querySelector(`#button15`).className = "button";
        document.querySelector(`#button50`).className = "button";
        document.querySelector(`#custom`).className = "button";
        percent = document.querySelector(`button25 button`);
        valor(percent);
        inputBill();
        calcTip();
        selectPeople();
        inputCustom();
        cutValue();
    });

    document.getElementById("button50").addEventListener("click", function () {
        document.querySelector(`#button50`).classList.add("active");
        document.querySelector(`#button5`).className = "button";
        document.querySelector(`#button10`).className = "button";
        document.querySelector(`#button15`).className = "button";
        document.querySelector(`#button25`).className = "button";
        document.querySelector(`#custom`).className = "button";
        percent = document.querySelector(`button50 button`);
        valor(percent);
        inputBill();
        calcTip();
        selectPeople();
        inputCustom();
        cutValue();
    });

    document.getElementById("custom").addEventListener("click", function () {
        document.querySelector(`#custom`).classList.add("active");
        document.querySelector(`#button5`).className = "button";
        document.querySelector(`#button10`).className = "button";
        document.querySelector(`#button15`).className = "button";
        document.querySelector(`#button25`).className = "button";
        document.querySelector(`#button50`).className = "button";
        inputCustom();
        percent = document.querySelector(`custom button`);
        valor(percent);
        inputBill();
        calcTip();
        selectPeople();
        inputCustom();
        cutValue();
    });

    document.getElementById("reset").addEventListener("click", function () {
        // document.querySelector(`#custom`).classList.add("button");
        // document.querySelector(`#button5`).className = "button";
        // document.querySelector(`#button10`).className = "button";
        // document.querySelector(`#button15`).className = "button";
        // document.querySelector(`#button25`).className = "button";
        // document.querySelector(`#button50`).className = "button";
        document.getElementById('inputBill').value = '';
        document.getElementById('inputPeople').value = '';
        // inputCustom(0);
        // percent = document.querySelector(`custom button`);
        // valor(percent);
    });
}


function inputBill() {
    bill = document.getElementById('inputBill').value
    bill = parseFloat(bill)
    bill = bill ? bill : 0
    calcTip();
    selectPeople();
    inputCustom();
    cutValue();
}

function calcTip() {
    if (percent > 0 && people > 0) {
        tip = (bill * (percent / 100)) / people;
        document.getElementById('outputTip').innerText = `$${tip.toFixed(2)}`
        console.log(`tip = ${tip}`)
        cutValue();
    } else {
        document.getElementById('outputTip').innerText = '$0.00'
    }
}

function selectPeople() {
    people = document.getElementById('inputPeople').value
    people = parseFloat(people)
    people = people ? people : 0
    inputBill();
    calcTip();
    inputCustom();
    cutValue();
}

// numberOfPeopleInput.addEventListener("change", ({ target }) => {
//     const value = Number(target.value);
//     if (value === 0) {
//         target.classList.add("error")
//         labelError.textContent = "Can't be zero";
//     } else {
//         target.classList.remove("error");
//         labelError.textContent = "";   
//     }

//     target.value = Math.floor(value);
//     onInputChange();
// });

function inputCustom() {
    let custom = document.getElementById('custom').value
    console.log(custom)
    if (custom > 0) {
        percent = custom
        selectPeople();
        console.log('custom:' + percent)
    } else if (custom == '') {
        document.getElementById('custom').value = '';
    } else {
        console.log('normal: ' + percent)
    }
}

function cutValue() {
    if (percent > 0 && people > 0) {
        let cut = (bill / people) + tip;
        cut = parseFloat(cut);
        cut = cut.toFixed(2);
        console.log(`cut = ${cut}`)
        document.getElementById('outputTotal').innerText = `$${cut}`
    } else {
        document.getElementById('outputTotal').innerText = '$0.00'
    }
}