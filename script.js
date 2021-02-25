/*let Car = function(brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;
}
tesla = new Car("tesla", "x", "black");
console.log(tesla);

hundai = new Car("hundai", "sss", "brown");
console.log(hundai);*/
let clock = document.getElementById("clock");
let isTimeShowed = false;
let interval;

function timer() {
    let time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();
    if (h.length < 2) {
        h = "0" + h;
    }
    if (m.length < 2) {
        m = "0" + m;
    }
    if (s.length < 2) {
        s = "0" + s;
    }
    clock.innerHTML = h + ":" + m + ":" + s;
    document.body.style.background = "#" + h + m + s;
    document.querySelector("h1").style.color = "#" + s + "ffff";
}

function enableTimer() {
    interval = setInterval(timer, 1000);
}

function disableTimer() {
    clearInterval(interval);
    document.body.style.background = "white";
    document.querySelector("h1").style.color = "black";
    clock.innerHTML = "00:00:00";
}

function start() {
    isTimeShowed = !isTimeShowed;
    timer();
    isTimeShowed ? enableTimer(): disableTimer();
}
