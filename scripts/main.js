import { checkUnit } from "./choice-units.js"

var divBorder = document.querySelector('.border')
var submitButton = document.querySelector('.submit__button')
var unitsButton = document.querySelector('.units__button')
var outputCSS = document.querySelector('.output__css')

var bRadius = document.querySelector('#radius')
var bRadiusTL = document.querySelector('#radius-top-left')
var bRadiusTR = document.querySelector('#radius-top-right')
var bRadiusBL = document.querySelector('#radius-bottom-left')
var bRadiusBR = document.querySelector('#radius-bottom-right')
var cssTitle = document.querySelector('#title__css')
var form = document.querySelector('#modifier__form')

var unidade = 0

var ian = true
var negative = true

var borderArray, arrayCSS = []

submitButton.onclick = function(event) {
    event.preventDefault()

    borderArray = [
        bRadius.value, 
        bRadiusTL.value,
        bRadiusTR.value,
        bRadiusBL.value,
        bRadiusBR.value
    ]

    isANumber()

    if(!ian || !negative){
        cssTitle.classList.add('output__paragraph')
        arrayCSS = []
        outputCSS.textContent = arrayCSS
        return
    }
    
    voidSpace()
    addUnity()
    addBorder()
    createCSS()
    form.reset()
}

function isANumber() {

    ian = true
    negative = true

    borderArray.forEach((value) => {

        if(isNaN(value)){
            error(1)
            return ian = false              
        }
        if(value < 0){
            error(2)
            return negative = false
        }
    })
}

function error(whichError){
    
    if(whichError == 1){
        alert("O valor digitado não é um número")
    }else if(whichError == 2){
        alert("O valor digitado é um número negativo")
    }
}


unitsButton.addEventListener("click", function(event){
    event.preventDefault()
    
    if(checkUnit()){
        unidade = 0
    }else if(!checkUnit()){
        unidade = 1
    }

})

function addUnity() {

    var unity

    if(unidade === 0){
        unity = "%"
    }else if(unidade === 1){
        unity = "px"
    }

    return borderArray = borderArray.map(i => i + unity)
    
}

function voidSpace() {

    borderArray = borderArray.map(i => i.replace(/\s+/g, ''))

    for(var i = 0; i<borderArray.length; i++){

        if(borderArray[i].length == 0){
            borderArray[i] = borderArray[0]
        } 
    }
}

function addBorder() {

    divBorder.style.borderRadius = borderArray[0]
    divBorder.style.borderTopLeftRadius = borderArray[1]
    divBorder.style.borderTopRightRadius = borderArray[2]
    divBorder.style.borderBottomLeftRadius = borderArray[3]
    divBorder.style.borderBottomRightRadius = borderArray[4]
}

function createCSS() {

    var a = borderArray[0]
    var b = borderArray[1]
    var c = borderArray[2]
    var d = borderArray[3]
    var e = borderArray[4]

    arrayCSS = []

    if(a == b && a == c && a == d && a == e){
        arrayCSS.push(`border-radius: ${borderArray[0]}`)
    }else{
        arrayCSS.push(`border-top-left-radius: ${borderArray[1]}; `)
        arrayCSS.push(`border-top-right-radius: ${borderArray[2]}; `)
        arrayCSS.push(`border-bottom-left-radius: ${borderArray[3]}; `)
        arrayCSS.push(`border-bottom-right-radius: ${borderArray[4]}; `)
        
    }

    cssTitle.classList.remove('output__paragraph')

    outputCSS.textContent = arrayCSS
}
