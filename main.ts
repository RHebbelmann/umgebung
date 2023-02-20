input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("T")
    basic.showNumber(input.temperature())
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
