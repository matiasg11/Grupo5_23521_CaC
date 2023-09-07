// Animación Bandoneon
let hojas = document.querySelectorAll(".hoja");

function toggleSelec() {
    hojas.forEach((hoja) => hoja.classList.remove("seleccionada"));
    this.classList.toggle("seleccionada");
}
function toggleActiva(event) {
    if (event.propertyName.includes("flex")) {
        this.classList.toggle("seleccionada-activa");
    }
}

hojas.forEach((hoja) => hoja.addEventListener("click", toggleSelec));
hojas.forEach((hoja) => hoja.addEventListener("transitionend", toggleActiva));
