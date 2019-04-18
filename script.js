function $(id) {
    return document.getElementById(id);
}
/* used to remove color classes more easily */
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
    changeColor("brown", "red");
});
$("toggle-yg").addEventListener("click",  function() {
    changeColor("green", "yellow");
});

function changeColor(darkColor, lightColor) {
    /* change chess board */
    const darkSquares = document.getElementsByClassName('dark');
    const lightSquares = document.getElementsByClassName('light');
    for(let i=0; i<darkSquares.length; i++) {
        /* remove old dark color, add new dark color */
        removeColors(darkSquares[i], 1);
        darkSquares[i].classList.add("class", darkColor);

        /* remove old light color, add new light color */
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
        squareItem.removeClass("brown");;
        squareItem.removeClass("green");
    }
    //2 is for light
    else if(darkOrLight===2 ) {
        squareItem.removeClass("white");
        squareItem.removeClass("red");
        squareItem.removeClass("yellow");
    }
}