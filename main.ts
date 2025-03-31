input.onButtonPressed(Button.A, function () {
    Timer = 300
})
input.onSound(DetectedSound.Loud, function () {
    klappen = !(klappen)
})
input.onButtonPressed(Button.B, function () {
    Timer = 180
})
let klappen = false
let Timer = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
loops.everyInterval(1000, function () {
    if (klappen == true) {
        Timer += -1
    }
})
basic.forever(function () {
    basic.showNumber(Timer)
})
