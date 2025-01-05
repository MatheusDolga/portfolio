reloadColors()

const myTransition = document.getElementById("transitionFade");

    /*if (event.which = 27)
    {
        if (myDialog.classList.contains("popOutTrigger") && !myDialog.classList.contains("popInTrigger"))
        {
            closeImagePopup() 
        }
    } */

function transitionBackground() {
    //document.body.setAttribute('animation', 'whiteFadeIn 0.3s ease-in-out');
    let transitionToGo = document.getElementById("transitionFade");
    transitionToGo.style.animation = 'whiteFadeIn 0.4s ease-in-out';
}

function animatedRedirect(destination) {
    transitionBackground();
    setTimeout( function() {window.location = destination}, 280);
    
}


function rvhDoMovement(triggeredButton,IsMovementToLeft) {
    let myButton = document.getElementById(triggeredButton);
    if(IsMovementToLeft)
    {myButton.classList.toggle("rvhDescriptionMovementLeft")}
    else
    {myButton.classList.toggle("rvhDescriptionMovementRight")}
}

function phoneMasking(inputName) {
    let myString = document.getElementById(inputName).value;

    console.log(myString.charAt(0))
    if (myString.length > 0)
    {
        if (myString.charAt(0) != "+") {
            myString = "+" + myString.slice(0,myString.length)
        }
    }

    if (myString.length > 3)
    {
        if (myString.charAt(3) != "-") {
            myString = myString.slice(0,3) + "-" + myString.slice(3,myString.length)
        }
    }

    if (myString.length > 8)
    {
        if (myString.charAt(8) != "-") {
            myString = myString.slice(0,8) + "-" + myString.slice(9,myString.length)
        }
    }

    console.log(myString)

    if (myString.length > 13)
    {myString = myString.slice(0,13)}

    if (myString.indexOf(",") > -1)
    {
        myString = myString.slice(0,myString.indexOf(",")) + myString.slice(myString.indexOf(",")+1,myString.length)
        
    }

    if (myString.indexOf(".") > -1)
    {
        myString = myString.slice(0,myString.indexOf(".")) + myString.slice(myString.indexOf(".")+1,myString.length)
    } 

    document.getElementById(inputName).value = myString

}

function openImagePopup(imageIndex) {
    let myImages = [
        "imgs/0047.gif",
        "imgs/0101.gif",
        "imgs/gift_neon.png",
        "imgs/KromerSmile.png",
        "imgs/tanea.png",
        "imgs/hdwgh_dersetheme_new.png",
        "imgs/zine_drawings.png",
        "imgs/Atlas_png.png",
        "imgs/limbus_SD_hongle.png",
        
    ];

    document.getElementById("dialogImage").src = myImages[imageIndex-1];

    let myDialog = document.getElementById("galleryDialog")
    myDialog.open = true;
    myDialog.classList.remove("popOutTrigger");
    myDialog.classList.add("popInTrigger")
}

function closeImagePopup() {
    let myDialog = document.getElementById("galleryDialog")
    myDialog.classList.add("popOutTrigger");
    setTimeout(checkForClose, 100);
    setTimeout(function() {myDialog.classList.remove("popInTrigger"), 100})
}

function checkForClose() {
    let myDialog = document.getElementById("galleryDialog")
    if (myDialog.classList.contains("popOutTrigger") && !myDialog.classList.contains("popInTrigger"))
    {
        document.getElementById("galleryDialog").open = false; 
    }
}

function connectEscKey()
{

    document.onkeydown = function(e)
    {

        if (e.which == 27)
        {
            closeImagePopup();
        }
    }
}

function switchColors() {
    console.log(localStorage.getItem("darkPallette") )
    if (localStorage.getItem("darkPallette") == "0")
    {
         console.log("it false");
         document.documentElement.classList.add("dark");
         localStorage.setItem("darkPallette", "1")
    }
    else
    {
         console.log("it true");
         document.documentElement.classList.remove("dark");
         localStorage.setItem("darkPallette", "0")
    }
}

function reloadColors() {
if (localStorage.getItem("darkPallette") == "1")
    {
         document.documentElement.classList.add("dark");
    }

}