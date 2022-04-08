
var percentage = document.querySelector("#percentage")
var pixels = document.querySelector("#pixels")
var units = true

export function checkUnit(){
    if(percentage.checked){ 
        return units = true
    }else if(pixels.checked){
        return units = false
    }
}