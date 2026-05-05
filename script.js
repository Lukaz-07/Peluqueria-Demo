document.getElementById('form-reserva').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Capturar datos
    const nombre = document.getElementById('nombre').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const servicio = document.getElementById('servicio').value;
    const fechaInput = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // 2. Formatear fecha (de AAAA-MM-DD a DD/MM/AAAA)
    const partes = fechaInput.split('-');
    const fechaFinal = partes[2] + "/" + partes[1] + "/" + partes[0];

    // 3. Configurar número del local
    const telLocal = "5493424231853";

    // 4. Crear mensaje (Texto 100% limpio)
    const mensaje = "NUEVA RESERVA" + "\n\n" +
                    "Cliente: " + nombre + "\n" +
                    "Tel: " + whatsapp + "\n" +
                    "Servicio: " + servicio + "\n" +
                    "Fecha: " + fechaFinal + "\n" +
                    "Hora: " + hora + "\n\n" +
                    "Confirmar turno por favor.";

    // 5. Enviar
    const url = "https://wa.me/" + telLocal + "?text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
});
