
//Declaring all variables


const container = document.querySelector('.container')
const colorPicker = document.querySelector('.color-choice')
const grid = document.querySelector('.grid-number')
const colorInput = document.querySelector('.colorChoice')
const standardMode = document.querySelector('.standard-toggle')
const rainbowMode = document.querySelector('.rainbow-toggle')
const gridReset = document.querySelector('.reset-grid')
let nodes = document.querySelectorAll('div.etch-node')
let mouseDown = false
let R 
let G 
let B 
let color = colorInput.value
let mode = 'standard'


//Generating standard 4x4 grid


standardGrid()


//functions



//function to generate grid

function loadGrid(gridNumber) {
    container.innerHTML = ''
    for (let index = 1; index <= gridNumber;  index++) {
        let divLoop = document.createElement('div')
        divLoop.classList.add('etch-node')
        divLoop.style.width = `${(container.clientWidth-2*Math.sqrt(gridNumber))/Math.sqrt(gridNumber)}px`
        divLoop.style.height = `${(container.clientHeight-2*Math.sqrt(gridNumber))/Math.sqrt(gridNumber)}px`
        container.appendChild(divLoop)
        nodes = document.querySelectorAll('div.etch-node')
        nodes.forEach(node => {
            node.addEventListener('mouseover',applyColor)
            node.addEventListener('mousedown',applyColor)
        })
    }
}

//function to generate standard grid

function standardGrid() {
    loadGrid(16)
    grid.value=''
}


//function to randomize colors

function randomColors() {
    R = Math.random()* 255
    G = Math.random()* 255
    B = Math.random()* 255
}

//function to apply mode depending on button selected

function applyColor (e) {
    if (e.type === 'mouseover' && mouseDown == false) {
        return
    }
    else {
        if (mode == 'standard') {
            color = colorInput.value
            e.target.style.backgroundColor = `${color}`
        }
        else if (mode == 'rainbow') {
            randomColors()
            e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`        
        }
    }
}


//event listners

container.addEventListener('mousedown',()=>{
    mouseDown = true
})
container.addEventListener('mouseup',()=>{
    mouseDown = false
})
standardMode.addEventListener('click',()=> {
    mode = 'standard'
})
rainbowMode.addEventListener('click',()=> {
    mode = 'rainbow'
})
grid.addEventListener('change',()=>{
    loadGrid(Number(grid.value)**2)
})
gridReset.addEventListener('click',standardGrid)
