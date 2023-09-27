const container = document.querySelector('.container')
console.log(container.style);
let number = 10
let gridNumber = number**2
let R = 255
let G = 255
let B = 255
let mode = 'rainbow'

for (let index = 1; index <= gridNumber;  index++) {
    let divLoop = document.createElement('div')
    divLoop.classList.add('etch-node')
    divLoop.style.width = `${(container.clientWidth-2*Math.sqrt(gridNumber))/Math.sqrt(gridNumber)}px`
    divLoop.style.height = `${(container.clientHeight-2*Math.sqrt(gridNumber))/Math.sqrt(gridNumber)}px`
    container.appendChild(divLoop)
}
const nodes = document.querySelectorAll('div.etch-node')

let mouseDown = false
container.addEventListener('mousedown',()=>{
    mouseDown = true
})
container.addEventListener('mouseup',()=>{
    mouseDown = false
})
function applyColor (e) {
    if (e.type === 'mouseover' && mouseDown == false) {
        return
    }
    else {
        if (mode == 'standard') {
            e.target.style.backgroundColor = 'blue'
        }
        else if (mode == 'rainbow') {
            randomColors()
            e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`        }
    }
}
nodes.forEach(node => {
    node.addEventListener('mouseover',applyColor)
    node.addEventListener('mousedown',applyColor)
})
function randomColors() {
    R = Math.random()* 255
    G = Math.random()* 255
    B = Math.random()* 255
}