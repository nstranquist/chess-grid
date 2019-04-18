function $(id) {
    return document.getElementById(id);
}

$("toggle-bw").addEventListener("click", function() {
    changeColor("toggle-bw");
});
$("toggle-rb").addEventListener("click",  function() {
    changeColor("toggle-rb");
});
$("toggle-yg").addEventListener("click",  function() {
    changeColor("toggle-yg");
});

function changeColor(color) {
    /* change chess board */
    
    /* change active */
    let colorName = "";
    switch(color){
        case "toggle-bw":
            colorName = "black / white";
            break; 
        case "toggle-rb":
            colorName = "red / blue";
            break;
        case "toggle-yg":
            colorName = "yellow / green";
            break;
        default:
            return;
    }
    $("active-options").innerHTML = colorName;
}

