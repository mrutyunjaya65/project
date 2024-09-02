//detecting Button press
var noofButtons = document.querySelectorAll(".drum").length
for(var i=0; i<noofButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
        var buttonInnerhtml = this.innerHTML;
        makeSound(buttonInnerhtml);
        buutonAnimation(buttonInnerhtml);
    })
}


//detecting keyboard press
document.addEventListener("keypress",function (event){
    
    makeSound(event.key);
    buutonAnimation(event.key);
})

//
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play()
        break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play()
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play()
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play()
        break;

        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play()
        break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play()
        break;

        default:
    }
}

function buutonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    },100)
}

