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

        // NÚMERO DEL LOCAL (Asegúrate de que sea el tuyo)
        const telefonoComercio = "5493424231853"; 

        // Mensaje limpio y profesional
        const mensaje = encodeURIComponent(
            `*● NUEVA RESERVA DE TURNO ●*\n\n` +
            `*Cliente:* ${nombre}\n` +
            `*WhatsApp:* ${clienteTel}\n` +
            `*Servicio:* ${servicio}\n\n` +
            `*📅 Fecha:* ${fechaFormateada}\n` +
            `*⏰ Horario:* ${hora}\n\n` +
            `_Por favor, responda este mensaje para confirmar el turno._`
        );

        const url = `https://wa.me/${telefonoComercio}?text=${mensaje}`;
        window.open(url, '_blank');
    });
