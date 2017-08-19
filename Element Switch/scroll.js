var body = document.documentElement || document.body
var nav = document.getElementById('nav')
var left = document.getElementById('left')
var leftAbbr = document.getElementById('left-abbr')
var navFixed = false
var leftSwitched = false
document.addEventListener('scroll', function () {
    if (body.getBoundingClientRect().top <= -104 && !navFixed) {
        nav.style.position = 'fixed'
        nav.style.top = 0
        nav.style.left = ((body.clientWidth - 1024) / 2 + 264) + 'px'
        navFixed = true
    } else if (body.getBoundingClientRect().top > -104 && navFixed) {
        nav.style.position = null
        nav.style.top = null
        nav.style.left = null
        navFixed = false
    }
    if (body.getBoundingClientRect().top <= -514 && !leftSwitched) {
        leftAbbr.style.display = 'block'
        leftAbbr.style.position = 'fixed'
        leftAbbr.style.top = 0
        leftSwitched = true
    } else if (body.getBoundingClientRect().top > -514 && leftSwitched) {
        leftAbbr.style.display = null
        leftAbbr.style.position = null
        leftAbbr.style.top = 0
        leftSwitched = false
    }
})
window.addEventListener('resize', function () {
    if (navFixed) {
        nav.style.left = ((body.clientWidth - 1024) / 2 + 264) + 'px'
    }
})