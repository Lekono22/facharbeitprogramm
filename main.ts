input.onButtonPressed(Button.A, function () {
    schritt = 1
})
let schritt = 0
schritt = 0
basic.forever(function () {
    if (Math.round(JoyCar.sonar()) < 30) {
        JoyCar.stop(StopIntensity.Intense)
        JoyCar.hazardlights(ToggleSwitch.On)
    }
})
basic.forever(function () {
    if (schritt == 1) {
        JoyCar.drive(FRDirection.Forward, 100)
        basic.pause(2000)
        schritt = 2
    }
})
basic.forever(function () {
    if (schritt == 2) {
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Left,
        50,
        1
        )
    }
})
