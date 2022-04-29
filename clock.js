const currentTime = new Date()

let currentHours = currentTime.getHours()
if (currentHours > 12) {
    currentHours -= 12
}

const currentMinutes = currentTime.getMinutes()
const currentSeconds = currentTime.getSeconds()

console.dir(currentHours)

let secondDeg = (360 / 60) * currentSeconds
let minuteDeg = (360 / 60) * currentMinutes
let hourDeg = (360 / 12) * currentHours

const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

const digitalHours = document.querySelector("#digitalHours")
const digitalMinutes = document.querySelector("#digitalMinutes")
const digitalSeconds = document.querySelector("#digitalSeconds")

setInterval(function() {
    secondDeg += 6;
    minuteDeg += 0.1;
    hourDeg += 0.0016666666;

secondHand.style.transform = `rotate(${secondDeg}deg)`
minuteHand.style.transform = `rotate(${minuteDeg}deg)`
hourHand.style.transform = `rotate(${hourDeg}deg)`

}, 1000)

setInterval(() => {
    const currentTime = new Date()

    digitalHours.innerText = currentTime.getHours()
    digitalMinutes.innerText = currentTime.getMinutes()
    digitalSeconds.innerText = currentTime.getSeconds()
}, 1000)

digitalHours.innerText = currentHours
digitalMinutes.innerText = currentMinutes
digitalSeconds.innerText = currentSeconds