var signed = false;
var x = document.getElementById("sup");
var y = document.getElementById("sin");
var ui = document.getElementById("u-i");
var navlinks = document.getElementById("navlinks");

if (signed) {
    x.style.display = "none";
    y.style.display = "none";
    ui.style.display = "inline";
    navlinks.classList.toggle("active");
} else {
    x.style.display = "inline";
    y.style.display = "inline";
    ui.style.display = "none";
    navlinks.classList.toggle("none");
}