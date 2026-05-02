document.getElementById('form-reserva').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar

    // 1. Captura de datos del formulario
    const servicio = document.getElementById('servicio').value;
    const fechaInput = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const nombre = document.getElementById('nombre').value;

    // 2. Formateo de fecha (Convierte AAAA-MM-DD a DD/MM/AAAA)
    const [anio, mes, dia] = fechaInput.split('-');
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    // 3. Configuración del número de destino (Argentina)
    // Estructura: 54 (Argentina) + 9 (Celular) + Código de Área (ej. 342) + Número
    const telefonoComercio = "5493421234567"; // Reemplaza "3421234567" por el celular real

    // 4. Estructuración del mensaje profesional
    // Utilizamos %0A para los saltos de línea y asteriscos para las negritas en WhatsApp
    const mensaje = `*[ NUEVA SOLICITUD DE TURNO ]*%0A%0A` +
                    `Estimados, me comunico para agendar un turno a través del sistema web.%0A%0A` +
                    `📌 *DETALLES DE LA RESERVA:*%0A` +
                    `👤 *Cliente:* ${nombre}%0A` +
                    `✂️ *Servicio:* ${servicio}%0A` +
                    `🗓️ *Fecha:* ${fechaFormateada}%0A` +
                    `⏰ *Horario:* ${hora}%0A%0A` +
                    `Aguardamos la confirmación del mismo. Muchas gracias.`;

    // 5. Generación del enlace y redirección a la API de WhatsApp
    const url = `https://wa.me/${telefonoComercio}?text=${mensaje}`;
    window.open(url, '_blank');
});
