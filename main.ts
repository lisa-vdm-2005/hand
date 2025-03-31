input.onButtonPressed(Button.A, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("3 2 1")
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("5 4 3 2 1")
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
