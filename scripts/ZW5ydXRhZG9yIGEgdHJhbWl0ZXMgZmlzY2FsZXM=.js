
        function mostrarInformacion(numeroBoton) {
            var infoContainer = document.getElementById("info-container");
            var informacion = obtenerInformacion(numeroBoton);
            infoContainer.innerHTML = informacion;
        }

        function obtenerInformacion(numeroBoton) {
            // Aquí puedes definir la información que deseas mostrar para cada botón.
            switch (numeroBoton) {
                case 1:
                    return "Información para el Botón 1.";
                case 2:
                    return "Información para el Botón 2.";
                case 3:
                    return "Información para el Botón 3.";
                // Agrega casos para los botones del 4 al 28
                default:
                    return "Información no disponible.";
            }
        }