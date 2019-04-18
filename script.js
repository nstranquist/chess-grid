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
    alert(color + " was toggled!");
}