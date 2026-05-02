document.addEventListener('DOMContentLoaded', function() {
    const fechaInput = document.getElementById('fecha');

    // --- 1. LÓGICA PARA BLOQUEAR FECHAS INVÁLIDAS ---
    const hoy = new Date();
    
    // Formatear hoy (Min)
    const yyyyMin = hoy.getFullYear();
    const mmMin = String(hoy.getMonth() + 1).padStart(2, '0');
    const ddMin = String(hoy.getDate()).padStart(2, '0');
    const fechaMinima = `${yyyyMin}-${mmMin}-${ddMin}`;
    fechaInput.min = fechaMinima; // Nadie puede sacar turno ayer

    // Formatear máximo (2 meses en el futuro) para evitar años como 20005
    const maxima = new Date();
    maxima.setMonth(maxima.getMonth() + 2);
    const yyyyMax = maxima.getFullYear();
    const mmMax = String(maxima.getMonth() + 1).padStart(2, '0');
    const ddMax = String(maxima.getDate()).padStart(2, '0');
    const fechaMaxima = `${yyyyMax}-${mmMax}-${ddMax}`;
    fechaInput.max = fechaMaxima;

    // --- 2. LÓGICA PARA BLOQUEAR DOMINGOS ---
    fechaInput.addEventListener('change', function() {
        // Al leer la fecha, le sumamos T00:00:00 para que no haya errores de zona horaria
        const fechaSeleccionada = new Date(this.value + 'T00:00:00'); 
        const diaDeLaSemana = fechaSeleccionada.getDay(); // 0 es Domingo

        if (diaDeLaSemana === 0) {
            alert('Lo sentimos, los domingos el local se encuentra cerrado. Por favor, elegí otro día.');
            this.value = ''; // Borra la fecha ingresada para que tenga que elegir otra
        }
    });

    // --- 3. ENVÍO A WHATSAPP ---
    document.getElementById('form-reserva').addEventListener('submit', function(e) {
        e.preventDefault();

        const servicio = document.getElementById('servicio').value;
        const fechaVal = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const nombre = document.getElementById('nombre').value;
        const clienteTel = document.getElementById('whatsapp').value;

        // Convertir formato AAAA-MM-DD a DD/MM/AAAA
        const [anio, mes, dia] = fechaVal.split('-');
        const fechaFormateada = `${dia}/${mes}/${anio}`;

        // NÚMERO DEL LOCAL (549 + Característica + Número)
        const telefonoComercio = "5493421234567"; // Modificá este número con el tuyo

        const mensaje = `*[ NUEVA RESERVA DE TURNO ]*%0A%0A` +
                        `Detalles de la solicitud ingresada:%0A%0A` +
                        `- CLIENTE: ${nombre}%0A` +
                        `- TELÉFONO: ${clienteTel}%0A` +
                        `- SERVICIO: ${servicio}%0A%0A` +
                        `📅 FECHA: ${fechaFormateada}%0A` +
                        `⏰ HORARIO: ${hora}%0A%0A` +
                        `_Responder este mensaje para confirmar la reserva al cliente._`;

        const url = `https://wa.me/${telefonoComercio}?text=${mensaje}`;
        window.open(url, '_blank');
    });
});
