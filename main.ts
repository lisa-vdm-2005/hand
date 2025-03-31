input.onButtonPressed(Button.A, function () {
    Timer = 300
})
input.onSound(DetectedSound.Loud, function () {
    klappen = !(klappen)
    if (klappen) {
        start = 1
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    Timer = 180
})
let start = 0
let klappen = false
let Timer = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
loops.everyInterval(1000, function () {
    if (start == 1) {
        basic.showNumber(Timer - 1)
    }
})
