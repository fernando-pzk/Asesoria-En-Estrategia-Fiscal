
    document.addEventListener("DOMContentLoaded", function () {
        const startButton = document.querySelector(".button-start");
        const overlay = document.getElementById("overlay");
        const startMessage = document.getElementById("start-message");

        startButton.addEventListener("click", function () {
            // Muestra la capa de sombra y el mensaje
            overlay.style.display = "flex";
            startMessage.style.display = "block";

            // Oculta el resto de la página
            document.body.style.overflow = "hidden";
        });

        overlay.addEventListener("click", function () {
            // Oculta la capa de sombra y el mensaje
            overlay.style.display = "none";
            startMessage.style.display = "none";

            // Vuelve a mostrar el resto de la página
            document.body.style.overflow = "visible";
        });
    });
