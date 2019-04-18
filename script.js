function $(id) {
    return document.getElementById(id);
}
HTMLElement.prototype.removeClass = function(remove) {
    var newClassName = "";
    var i;
    var classes = this.className.split(" ");
    for(i = 0; i < classes.length; i++) {
        if(classes[i] !== remove) {
            newClassName += classes[i] + " ";
        }
    }
    this.className = newClassName;
}

$("toggle-bw").addEventListener("click", function() {
    changeColor("black", "white");
});
$("toggle-rb").addEventListener("click",  function() {
    changeColor("red", "brown");
});
$("toggle-yg").addEventListener("click",  function() {
    changeColor("yellow", "green");
});

function changeColor(darkColor, lightColor) {
    /* change chess board */
    const darkSquares = document.getElementsByClassName('dark');
    for(let i=0; i<darkSquares.length; i++) {
        removeColors(darkSquares[i], 1);
        darkSquares[i].classList.add("class", darkColor);
        console.log(i, darkSquares[i]);
    }

    const lightSquares = document.getElementsByClassName('light');
    for(let i=0; i<lightSquares.length; i++) {
        removeColors(lightSquares[i], 2);
        lightSquares[i].classList.add("class", lightColor);
    }

    /* change active */
    let colorName = darkColor + " / " + lightColor;
    $("active-options").innerHTML = colorName;
}

function removeColors(squareItem, darkOrLight) {
    // 1 is for dark
    if(darkOrLight === 1) {
        squareItem.removeClass("black");
        squareItem.removeClass("red");;
        squareItem.removeClass("yellow");
    }
    //2 is for light
    else if(darkOrLight===2 ) {
        squareItem.removeClass("white");
        squareItem.removeClass("brown");
        squareItem.removeClass("green");
    }
}