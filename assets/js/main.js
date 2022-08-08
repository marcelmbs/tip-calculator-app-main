let bill
let people
let percent
let tip

function inputPercent(percentValue) {
    percent = percentValue;
    selectButton();
    calcTip();
    cutValue();
    selectPeople();
}

function selectButton() {
    let button_5 = document.querySelector('#button5')
    let button_10 = document.querySelector('#button10')
    let button_15 = document.querySelector('#button15')
    let button_25 = document.querySelector('#button25')
    let button_50 = document.querySelector('#button50')
    let button_custom = document.querySelector('#buttonCustom')
    let button_reset = document.querySelector('#buttonReset')

    switch (percent) {
        case 5:
            button_5.className = 'button-active'
            button_10.className = 'button'
            button_15.className = 'button'
            button_25.className = 'button'
            button_50.className = 'button'
            button_custom.className = 'button-custom'
            button_reset.className = 'reset-active'
            break

        case 10:
            button_5.className = 'button'
            button_10.className = 'button-active'
            button_15.className = 'button'
            button_25.className = 'button'
            button_50.className = 'button'
            button_custom.className = 'button-custom'
            button_reset.className = 'reset-active'
            break

        case 15:
            button_5.className = 'button'
            button_10.className = 'button'
            button_15.className = 'button-active'
            button_25.className = 'button'
            button_50.className = 'button'
            button_custom.className = 'button-custom'
            button_reset.className = 'reset-active'
            break

        case 25:
            button_5.className = 'button'
            button_10.className = 'button'
            button_15.className = 'button'
            button_25.className = 'button-active'
            button_50.className = 'button'
            button_custom.className = 'button-custom'
            button_reset.className = 'reset-active'
            break

        case 50:
            button_5.className = 'button'
            button_10.className = 'button'
            button_15.className = 'button'
            button_25.className = 'button'
            button_50.className = 'button-active'
            button_custom.className = 'button-custom'
            button_reset.className = 'reset-active'
            break;

        case 1000:
            button_custom.className = 'button-custom-active'
            button_reset.className = 'reset-active'
            button_5.className = 'button'
            button_10.className = 'button'
            button_15.className = 'button'
            button_25.className = 'button'
            button_50.className = 'button'
            inputCustom();
            break;

        case 0:
            button_5.className = 'button'
            button_10.className = 'button'
            button_15.className = 'button'
            button_25.className = 'button'
            button_50.className = 'button'
            button_custom.className = 'button-custom'
            button_reset.className = 'reset'
            reset();
            break;
        default:
            alert("Bora lá!")
    }
}

function inputBill() {
    bill = document.getElementById('inputBill').value
    bill = parseFloat(bill)
    bill = bill ? bill : 0
    calcTip();
    cutValue();
}

function inputCustom() {
    let custom = document.getElementById('buttonCustom').value
    percent = custom;
    selectPeople();
}

function selectPeople() {
    people = document.getElementById('inputPeople').value
    people = parseFloat(people)
    people = people ? people : 0
    calcTip();
    cutValue();
}

function calcTip() {
    if (percent > 0 && people > 0) {
        tip = (bill * (percent / 100)) / people;
        document.getElementById('outputTip').innerText = `$${tip.toFixed(2)}`
        cutValue();
    } else {
        document.getElementById('outputTip').innerText = '$0.00'
    }
}

function cutValue() {
    if (percent > 0 && people > 0) {
        let cut = (bill / people) + tip;
        cut = parseFloat(cut);
        cut = cut.toFixed(2);
        document.getElementById('outputTotal').innerText = `$${cut}`
    } else {
        document.getElementById('outputTotal').innerText = '$0.00'
    }
}

var reset = document.querySelector("#buttonReset");
reset.addEventListener("click", function () {
    location.reload();
});