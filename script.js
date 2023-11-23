document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos referencias a los elementos del DOM
    const updateButton = document.getElementById('update-button');
    const messageElement = document.getElementById('message');

    let clics = 0;

    // Event listener en el componente del botón
    updateButton.addEventListener('click', function () {
        clics++;
        // Dispatch del evento desde el componente del botón
        const customEvent = new CustomEvent('actualizar-mensaje', { detail: { mensaje: `Número de clics: ${clics}` } });
        document.dispatchEvent(customEvent);
    });

    // Event listener en el componente del mensaje
    document.addEventListener('actualizar-mensaje', function (event) {
        // Actualización del mensaje en respuesta al evento
        const nuevoMensaje = event.detail.mensaje;
        messageElement.textContent = nuevoMensaje;
    });
});
