let percent;


document.getElementById("button5").addEventListener("click", function () {
    document.querySelector(`#button5`).classList.add("active");
    document.querySelector(`#button10`).className = "button";
    document.querySelector(`#button15`).className = "button";
    document.querySelector(`#button25`).className = "button";
    document.querySelector(`#button50`).className = "button";
    document.querySelector(`#custom`).className = "button";
    percent = document.querySelector(`button5 button`).innerHTML;
    valor(percent);
    console.log(percent);
});

document.getElementById("button10").addEventListener("click", function () {
    document.querySelector(`#button10`).classList.add("active");
    document.querySelector(`#button5`).className = "button";
    document.querySelector(`#button15`).className = "button";
    document.querySelector(`#button25`).className = "button";
    document.querySelector(`#button50`).className = "button";
    document.querySelector(`#custom`).className = "button";
    percent = document.querySelector(`button10 button`).innerHTML;
    valor(percent);
    console.log(percent);
});

document.getElementById("button15").addEventListener("click", function () {
    document.querySelector(`#button15`).classList.add("active");
    document.querySelector(`#button5`).className = "button";
    document.querySelector(`#button10`).className = "button";
    document.querySelector(`#button25`).className = "button";
    document.querySelector(`#button50`).className = "button";
    document.querySelector(`#custom`).className = "button";
    percent = document.querySelector(`button15 button`).innerHTML;
    valor(percent);
    console.log(percent);
});

document.getElementById("button25").addEventListener("click", function () {
    document.querySelector(`#button25`).classList.add("active");
    document.querySelector(`#button5`).className = "button";
    document.querySelector(`#button10`).className = "button";
    document.querySelector(`#button15`).className = "button";
    document.querySelector(`#button50`).className = "button";
    document.querySelector(`#custom`).className = "button";
    percent = document.querySelector(`button25 button`).innerHTML;
    valor(percent);
    console.log(percent);
});

document.getElementById("button50").addEventListener("click", function () {
    document.querySelector(`#button50`).classList.add("active");
    document.querySelector(`#button5`).className = "button";
    document.querySelector(`#button10`).className = "button";
    document.querySelector(`#button15`).className = "button";
    document.querySelector(`#button25`).className = "button";
    document.querySelector(`#custom`).className = "button";
    percent = document.querySelector(`button50 button`).innerHTML;
    valor(percent);
    console.log(percent);
});

document.getElementById("custom").addEventListener("click", function () {
    document.querySelector(`#custom`).classList.add("active");
    document.querySelector(`#button5`).className = "button";
    document.querySelector(`#button10`).className = "button";
    document.querySelector(`#button15`).className = "button";
    document.querySelector(`#button25`).className = "button";
    document.querySelector(`#button50`).className = "button";
    percent = document.querySelector(`custom button`).innerHTML;
    valor(percent);
    console.log(percent);
});