// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");


setInterval(update, "1000")


function update() {
    time = time+1
    counterElement.innerText = time
}

