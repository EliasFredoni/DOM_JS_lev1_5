let click = document.getElementById("clickMe");

let zaehler = 0

let myFunction = () => {
    zaehler += 1
    click.innerHTML = "click me: " + zaehler;
}

//******LEV 2.1*****/

let umschalter = document.getElementById("umschalter");
let li = document.querySelectorAll("li");

let farbschema = () => {
    console.log(li[0])
    li[0].style.Backgroundcolor = "grey";
    li[1].style.backgroundColor = "white";
    li[2].style.backgroundColor = "blue";
    li[3].style.backgroundColor = "yellow";
}

