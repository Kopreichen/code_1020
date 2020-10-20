basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let Y = 0; Y <= 4; Y++) {
            if ((I + Y) % 2 == 0) {
                led.plot(I, Y)
            } else {
                led.unplot(Y, I)
            }
        }
    }
})
