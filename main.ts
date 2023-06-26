let Temperatur = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("T")
    Temperatur = input.temperature()
    basic.showNumber(Temperatur)
    if (Temperatur >= 28) {
        basic.setLedColor(0xff0000)
    } else if (Temperatur <= 25) {
        basic.setLedColor(0x0000ff)
    } else {
        basic.setLedColor(0xffff00)
    }
    basic.pause(1000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("L")
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
})
basic.forever(function () {
    basic.showCompass(input.compassHeading())
})
