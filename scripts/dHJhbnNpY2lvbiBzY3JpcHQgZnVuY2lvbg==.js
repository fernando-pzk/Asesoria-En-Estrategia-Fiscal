// Obtener el elemento que se debe hacer clic
const mostrarBoton = document.getElementById("mostrar");

// Obtener el menú
const menu700px = document.getElementById("menu-700px");

// Agregar un evento de clic al botón para mostrar/ocultar el menú
mostrarBoton.addEventListener("click", function () {
    if (menu700px.classList.contains("hidden")) {
        menu700px.classList.remove("hidden");
    } else {
        menu700px.classList.add("hidden");
    }
});
