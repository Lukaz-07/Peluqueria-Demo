// --- 3. ENVÍO A WHATSAPP (VERSIÓN LIMPIA SIN EMOJIS) ---
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
        const telefonoComercio = "5493424231853"; 

        // Texto plano con formato básico de WhatsApp (negritas y saltos de línea)
        const textoMensaje = 
            "*NUEVA RESERVA DE TURNO*\n\n" +
            "*Nombre:* " + nombre + "\n" +
            "*Telefono:* " + clienteTel + "\n" +
            "*Servicio:* " + servicio + "\n" +
            "*Fecha:* " + fechaFormateada + "\n" +
            "*Horario:* " + hora + "\n\n" +
            "Favor de confirmar disponibilidad.";

        // Usamos encodeURIComponent para que los espacios y saltos de línea no den error
        const mensajeFinal = encodeURIComponent(textoMensaje);

        const url = "https://wa.me/" + telefonoComercio + "?text=" + mensajeFinal;
        window.open(url, '_blank');
    });
