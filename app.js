document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const btnToggle = document.getElementById('btn-toggle');
    const menuItems = document.querySelectorAll('.menu-item');
    const visor = document.getElementById('visor-contenido');
    const logo = document.querySelector('.logo');

    // 0. Guardar la portada inicial en memoria
    const htmlPortadaInicial = visor.innerHTML;

    // Lógica para regresar a la portada al hacer clic en el logo
    logo.addEventListener('click', () => {
        visor.innerHTML = htmlPortadaInicial;
        // Desmarcar cualquier elemento del menú que estuviera seleccionado
        menuItems.forEach(i => i.classList.remove('seleccionado'));
    });

    // 1. Lógica para ocultar/mostrar la barra lateral
    btnToggle.addEventListener('click', () => {
        sidebar.classList.toggle('oculta');
    });

    // 2. Lógica para desplegar submenús (Acordeón)
    const titulosSeccion = document.querySelectorAll('.section-title, .sprint-title');
    
    titulosSeccion.forEach(titulo => {
        titulo.addEventListener('click', () => {
            // Encuentra el <ul> hermano (el submenú)
            const submenu = titulo.nextElementSibling;
            
            // Alterna las clases para mostrar/ocultar y rotar la flecha
            titulo.classList.toggle('abierto');
            submenu.classList.toggle('activo');
        });
    });

    // 3. Lógica para cargar contenido al hacer clic en un ítem
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('seleccionado'));
            item.classList.add('seleccionado');

            // Cierra la barra lateral automáticamente en pantallas pequeñas (Opcional pero recomendado)
            if(window.innerWidth < 768) {
                sidebar.classList.add('oculta');
            }

            const tipo = item.getAttribute('data-tipo');
            visor.innerHTML = '<p style="text-align:center; padding: 40px;">Cargando documento...</p>';

            if (tipo === 'md') {
                cargarMarkdown(item.getAttribute('data-md'));
            } else if (tipo === 'n8n') {
                cargarN8N(item.getAttribute('data-img'), item.getAttribute('data-json'), item.innerText);
            }
        });
    });

    function cargarMarkdown(rutaArchivo) {
        fetch(rutaArchivo)
            .then(respuesta => {
                if (!respuesta.ok) throw new Error('No se ha subido este anexo aún.');
                return respuesta.text();
            })
            .then(texto => {
                visor.innerHTML = marked.parse(texto);
            })
            .catch(error => {
                mostrarError(error.message, rutaArchivo);
            });
    }

    function cargarN8N(rutaImg, rutaJson, titulo) {
        let htmlContenido = `
            <div class="n8n-container">
                <h2>${titulo}</h2>
                <hr>
                <h3>Vista Panorámica del Flujo</h3>
                <img src="${rutaImg}" alt="Imagen del flujo no encontrada en: ${rutaImg}" class="n8n-image" onerror="this.style.display='none';">
                
                <h3>Código JSON Exportado</h3>
                <pre class="json-viewer" id="caja-json">Cargando JSON...</pre>
            </div>
        `;
        visor.innerHTML = htmlContenido;

        fetch(rutaJson)
            .then(respuesta => {
                if (!respuesta.ok) throw new Error('No se ha subido el JSON aún.');
                return respuesta.json();
            })
            .then(datosJson => {
                document.getElementById('caja-json').textContent = JSON.stringify(datosJson, null, 2);
            })
            .catch(error => {
                document.getElementById('caja-json').innerHTML = `<span style="color: #e06c75;">Error: ${error.message}<br>Ruta buscada: ${rutaJson}</span>`;
            });
    }

    function mostrarError(mensaje, ruta) {
        visor.innerHTML = `
            <div style="color: #d32f2f; background: #ffebee; padding: 20px; border-radius: 5px; text-align:center;">
                <strong>Atención:</strong> ${mensaje}<br><br>
                <small>Asegúrate de colocar el archivo en la ruta: <code>${ruta}</code></small>
            </div>
        `;
    }
});