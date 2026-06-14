document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const visor = document.getElementById('visor-contenido');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remover clase activo de todos y poner al actual
            menuItems.forEach(i => i.classList.remove('activo'));
            item.classList.add('activo');

            const tipo = item.getAttribute('data-tipo');
            visor.innerHTML = '<p>Cargando información...</p>'; // Placeholder de carga

            if (tipo === 'md') {
                cargarMarkdown(item.getAttribute('data-md'));
            } else if (tipo === 'n8n') {
                cargarN8N(item.getAttribute('data-img'), item.getAttribute('data-json'), item.innerText);
            }
        });
    });

    // Función para procesar y mostrar un archivo .md
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

    // Función para procesar una vista de n8n (Imagen + JSON)
    function cargarN8N(rutaImg, rutaJson, titulo) {
        let htmlContenido = `
            <div class="n8n-container">
                <h2>${titulo}</h2>
                <hr>
                <h3>Vista Panorámica del Flujo</h3>
                <img src="${rutaImg}" alt="La imagen del flujo aún no ha sido cargada en la ruta: ${rutaImg}" class="n8n-image" onerror="this.style.display='none';">
                
                <h3>Código JSON Exportado</h3>
                <pre class="json-viewer" id="caja-json">Cargando JSON...</pre>
            </div>
        `;
        visor.innerHTML = htmlContenido;

        // Cargar el archivo JSON y formatearlo
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
            <div class="mensaje-error">
                <strong>Atención:</strong> ${mensaje}<br>
                <small>Asegúrate de colocar el archivo en la ruta: <code>${ruta}</code></small>
            </div>
        `;
    }
});