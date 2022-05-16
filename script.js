const loadtext = document.querySelector('.loading-text')
const newvar = document.querySelector('.progress')
const bg = document.querySelector('.bg')
const butt = document.querySelector('.button')

let load = 0
let c = 1
let p = 30

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load > 99){
        loadtext.style.opacity =c
        newvar.style.opacity =c
        butt.style.opacity =load
        clearInterval(int)
    }
    c=1-(load/100)
    p = (100-load)*30/100
    loadtext.innerText = load + '%'
     
    bg.style.filter = 'blur('+p+'px)'
}