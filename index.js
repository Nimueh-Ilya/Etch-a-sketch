const container = document.querySelector('.container')
const gridNumber = 900

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
        e.target.style.backgroundColor = 'black'
    }
}
nodes.forEach(node => {
    node.addEventListener('mouseover',applyColor)
    node.addEventListener('mousedown',applyColor)
})
