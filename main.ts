let Stop = 0
basic.forever(function () {
    if (Stop == 2) {
        JoyCar.stop(StopIntensity.Intense)
        JoyCar.hazardlights(ToggleSwitch.On)
    }
})
basic.forever(function () {
    if (Math.round(JoyCar.sonar()) < 30) {
        Stop = 2
    }
    if (Math.round(JoyCar.sonar()) > 30) {
        Stop = 1
    }
})
basic.forever(function () {
    if (Stop == 1) {
        JoyCar.drive(FRDirection.Forward, 100)
    }
})
