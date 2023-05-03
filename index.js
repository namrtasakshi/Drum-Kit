// alert("working!");

// Detects button press
for (var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// in the above line it searches and finds the first button in the html code then adds a even listener to that button
// so the event listener listens to the any event (in this case click) that happens on the button and when it does it runs the code/ function calling of handleClick
// also the function is given as a input here for the event listner to do when a click occurs i.e we are not calling it like handleClick() because then it will call the function as soon as we referesh the page
// basically passing a function as a input so that it can be called at a later time 
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);// over here we pass the value of innerHMTL that we have to check against the value of the key pressed on the keyboard 
// so when the value of they key pressed on the keyboard is equal to the value of case we have given in the switch the sound plays.
// at the end we are sending the innerHTML to the function in makeSound which has switch in it
buttonAnimation(buttonInnerHTML);
}
}


// detecting keyboard press

document.addEventListener("keypress", function(event){
    // key press in above is the action for which the event listener is add and once it listens it does the thing (over here it is the function). Lastly event is the call back in the function.
    makeSound(event.key);
    buttonAnimation(event.key); //.key telles whivch key triggered the event
})//over here we added eventlistener to the whole document or web page for any keypress alert 
// if keypress is detected then it is send to the makeSound function to check with the values in the switch

function makeSound(key){
// key over here is a property which can essentially read which key is pressed on the keyboard 
    switch (key) {
        case "w":
            var tom1 = new Audio('tom-1.mp3'); // tom1 is the object having our sound in it
            tom1.play();//.play() is a method that we call on the object Audio 
            break;
            case "a":
                var tom2 = new Audio('tom-2.mp3'); // tom2 is the object having our sound in it
                tom2.play();//.play() is a method that we call on the object Audio 
                break;
    
                case "s":
            var tom3 = new Audio('tom-3.mp3'); // tom3 is the object having our sound in it
            tom3.play();//.play() is a method that we call on the object Audio 
            break;
    
            case "d":
            var tom4 = new Audio('tom-4.mp3'); // tom4 is the object having our sound in it
            tom4.play();//.play() is a method that we call on the object Audio 
            break;
    
            case "j":
            var snare = new Audio('snare.mp3'); // snare is the object having our sound in it
            snare.play();//.play() is a method that we call on the object Audio 
            break;
    
            case "k":
            var crash = new Audio('crash.mp3'); // crash is the object having our sound in it
            crash.play();//.play() is a method that we call on the object Audio 
            break;
    
            case "l":
            var kick = new Audio('kick-bass.mp3'); // kick is the object having our sound in it
            kick.play();//.play() is a method that we call on the object Audio 
            break;
            
        default: console.log(buttonInnerHTML);
    
            break;
    }
}

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("."+ currentkey);//current key is the return input of buttonAnimation function

    activeButton.classList.add("pressed"); // .classList is a property accesser which access the properities of activeButton and then .add adds class pressed class which is already styled in css

    setTimeout(function () {
        activeButton.classList.remove("pressed");//In function that needs to happen after a time duration we have passed to delete the class pressed
    }, 100);// 100=0.1 sec 
// here syntax is setTimeout (function on which you want the timeout, time duration)
}