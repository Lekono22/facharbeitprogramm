def on_button_pressed_a():
    global schritt
    schritt = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

schritt = 0
schritt = 0

def on_forever():
    if Math.round(JoyCar.sonar()) < 30:
        JoyCar.stop(StopIntensity.INTENSE)
        JoyCar.hazardlights(ToggleSwitch.ON)
basic.forever(on_forever)

def on_forever2():
    global schritt
    if schritt == 1:
        JoyCar.drive(FRDirection.FORWARD, 100)
        basic.pause(2000)
        schritt = 2
basic.forever(on_forever2)

def on_forever3():
    if schritt == 2:
        JoyCar.turn(FRDirection.FORWARD, LRDirection.LEFT, 50, 1)
basic.forever(on_forever3)
