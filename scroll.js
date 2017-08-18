var header = document.getElementById('header')
var nav = document.getElementById('navigator')
var throttle = null
var fixed = false
document.addEventListener('scroll', function () {
    if (throttle === null) {
        throttle = setTimeout(function () {
            if (header.getBoundingClientRect().top <= -128 && !fixed) {
                fixed = true
                nav.style.position = 'fixed'
                nav.style.top = 0
            } else if (header.getBoundingClientRect().top > -128 && fixed){
                fixed = false
                nav.style.position = null
                nav.style.top = null
            }
            throttle = null       
        }, 0)
    }
})