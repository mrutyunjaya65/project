//generate random color
const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randomcolor())

//start button function
let colorchange = function(){
    document.body.style.backgroundColor = randomcolor()
}
let intervalid 
const startchangingcolor = function(){
    if (!intervalid){
        intervalid  = setInterval(colorchange, 1000)
    }
}

//stop button function
const stopchangingcolor = function(){
    clearInterval(intervalid)
    intervalid= null
}

document.querySelector("#start").addEventListener('click',startchangingcolor)

document.querySelector("#stop").addEventListener('click',stopchangingcolor)