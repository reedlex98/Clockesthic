// Building the clock
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const updateSecondHand = function(now,secondHand) {
    const secToDegree = ((now.getSeconds() / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secToDegree}deg)`
}
const updateMinuteHand = function(now, minuteHand){
    const minToDegree = ((now.getMinutes()/60)*360)+90
    minuteHand.style.transform = `rotate(${minToDegree}deg)`
}
const updateHourHand = function(now, hourHand){
    const hourToDegree = ((now.getHours()/12)*360)+90
    hourHand.style.transform = `rotate(${hourToDegree}deg)`
}
function clockInit(now,secondHand,minuteHand,hourHand) {
    updateSecondHand(now,secondHand)
    updateMinuteHand(now,minuteHand)
    updateHourHand(now,hourHand)
}
clockInit(new Date(), secondHand, minuteHand, hourHand)
setInterval( ()=>clockInit(new Date(), secondHand, minuteHand, hourHand), 1000)
// End of clock section