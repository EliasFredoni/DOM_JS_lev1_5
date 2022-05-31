let click = document.getElementById("clickMe");


let zaehler = 0

let myFunction = () => {
    zaehler += 1
    click.innerHTML = "click me: " + zaehler;
}

