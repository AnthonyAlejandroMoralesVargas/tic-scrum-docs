document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const btnToggle = document.getElementById('btn-toggle');
    const menuItems = document.querySelectorAll('.menu-item');
    const visor = document.getElementById('visor-contenido');
    
    // Elementos del Nuevo Logo y Modal
    const logoBtn = document.getElementById('logo-btn');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('img-ampliada');
    const btnCerrarModal = document.querySelector('.close-modal');

    // Botones de Zoom
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const btnZoomReset = document.getElementById('btn-zoom-reset');

    let anchoActual = 90; // Empezamos al 90% del tamaño de la pantalla
    const zoomPaso = 25;  // Cuánto crece/se reduce por cada clic (25%)

    // 0. Guardar la portada inicial en memoria
    const htmlPortadaInicial = visor.innerHTML;

    // Lógica para regresar a la portada al hacer clic en el nuevo logo
    logoBtn.addEventListener('click', () => {
        visor.innerHTML = htmlPortadaInicial;
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
            const submenu = titulo.nextElementSibling;
            titulo.classList.toggle('abierto');
            submenu.classList.toggle('activo');
        });
    });

    // 3. Lógica para cargar contenido al hacer clic en un ítem
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('seleccionado'));
            item.classList.add('seleccionado');

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

    // 4. Lógica del VISOR DE IMÁGENES (Delegación de eventos)
    // Escuchamos los clics dentro del visor, si el elemento clickeado tiene la clase 'n8n-image', abrimos el modal
   // 4. Lógica del VISOR DE IMÁGENES y REDIRECCIÓN DE ÍNDICE (Delegación de eventos)
    visor.addEventListener('click', (e) => {
        // --- A. Lógica existente para el visor de imágenes ---
        if (e.target.classList.contains('n8n-image')) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            
            // Restauramos el zoom por defecto
            anchoActual = 90;
            modalImg.style.width = `${anchoActual}%`;
        }

        // --- B. NUEVA LÓGICA: Clic en el índice de la portada ---
        // closest() busca si hicimos clic en la fila o dentro de un <td> de esa fila
        const filaIndice = e.target.closest('.indice-item');
        
        if (filaIndice) {
            // Extraemos a qué ID de menú debemos apuntar
            const idObjetivo = filaIndice.getAttribute('data-target');
            const elementoMenu = document.getElementById(idObjetivo);
            
            if (elementoMenu) {
                // 1. Simulamos el clic en el ítem del menú para cargar el contenido
                elementoMenu.click();
                
                // 2. Buscamos la sección padre en el menú y la desplegamos visualmente
                const submenuPadre = elementoMenu.closest('.submenu');
                if (submenuPadre) {
                    const tituloSeccion = submenuPadre.previousElementSibling;
                    if (tituloSeccion && !tituloSeccion.classList.contains('abierto')) {
                        tituloSeccion.classList.add('abierto');
                        submenuPadre.classList.add('activo');
                    }
                }
                
                // 3. (Opcional) Si la barra lateral estaba oculta, la mostramos
                if (sidebar.classList.contains('oculta') && window.innerWidth >= 768) {
                    sidebar.classList.remove('oculta');
                }
            }
        }
    });

    // Control: Acercar
    btnZoomIn.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el clic cierre el modal
        anchoActual += zoomPaso;
        modalImg.style.width = `${anchoActual}%`;
    });

    // Control: Alejar
    btnZoomOut.addEventListener('click', (e) => {
        e.stopPropagation();
        if (anchoActual > 40) { // Límite para que no se haga microscópica
            anchoActual -= zoomPaso;
            modalImg.style.width = `${anchoActual}%`;
        }
    });

    // Control: Restaurar 100%
    btnZoomReset.addEventListener('click', (e) => {
        e.stopPropagation();
        anchoActual = 90;
        modalImg.style.width = `${anchoActual}%`;
        
        // Centramos las barras de desplazamiento (scroll)
        containerImg.scrollTop = 0;
        containerImg.scrollLeft = 0;
    });

    // Cerrar Modal al hacer clic en la X
    btnCerrarModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cerrar Modal al hacer clic en el fondo oscuro (fuera de la imagen)
    containerImg.addEventListener('click', (e) => {
        if (e.target === containerImg) {
            modal.style.display = "none";
        }
    });

    // Funciones de renderizado (Markdown y n8n)
    function cargarMarkdown(rutaArchivo) {
        fetch(rutaArchivo)
            .then(respuesta => {
                if (!respuesta.ok) throw new Error('No se ha subido este anexo aún.');
                return respuesta.text();
            })
            .then(texto => {
                visor.innerHTML = marked.parse(texto);
            })
            .catch(error => mostrarError(error.message, rutaArchivo));
    }

    // Función de seguridad para mostrar caracteres especiales en los prompts (<, >)
    function escaparHTML(texto) {
        if (!texto) return 'No definido';
        return texto
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

function cargarN8N(rutaImg, rutaJson, titulo) {
        visor.innerHTML = '<p style="text-align:center; padding: 40px;">Cargando flujo, agentes y configuraciones...</p>';

        fetch(rutaJson)
            .then(respuesta => {
                if (!respuesta.ok) throw new Error('No se ha subido el JSON aún.');
                return respuesta.json();
            })
            .then(datosJson => {
                // 1. Extraer dinámicamente los Agentes de IA del JSON de n8n
                let htmlAgentes = '';
                // Filtramos solo los nodos que corresponden a Agentes de LangChain
                const agentes = datosJson.nodes.filter(n => n.type === '@n8n/n8n-nodes-langchain.agent');
                
                if (agentes.length > 0) {
                    htmlAgentes += `<h3 style="margin-top: 40px; margin-bottom: 15px;">Configuración de los Agentes</h3>`;
                    
                    agentes.forEach(ag => {
                        const nombreAgente = ag.name || 'Agente Desconocido';
                        // En n8n, el System Message está en options.systemMessage
                        const sysPrompt = ag.parameters?.options?.systemMessage || '';
                        // En n8n, el User Message / Prompt de la tarea está en text
                        const userPrompt = ag.parameters?.text || '';
                        
                        htmlAgentes += `
                            <div class="agent-card">
                                <div class="agent-header">
                                    <span>${nombreAgente}</span>
                                </div>
                                <div class="agent-body">
                                    ${sysPrompt ? `
                                    <div class="prompt-label">Prompt de Sistema (System Message)</div>
                                    <div class="prompt-content">${escaparHTML(sysPrompt)}</div>
                                    ` : ''}
                                    
                                    ${userPrompt ? `
                                    <div class="prompt-label">Prompt de Tarea (Contexto y Acción)</div>
                                    <div class="prompt-content">${escaparHTML(userPrompt)}</div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    });
                }

                // 2. Construir la vista completa ordenando las secciones
                visor.innerHTML = `
                    <div class="n8n-container">
                        <h2>${titulo}</h2>
                        <hr>
                        
                        <h3>Vista Panorámica del Flujo</h3>
                        <p style="color: #666; font-size: 0.9em; margin-bottom: 10px;"><em>Haz clic sobre la imagen para ampliarla.</em></p>
                        <img src="${rutaImg}" alt="Imagen del flujo no encontrada en: ${rutaImg}" class="n8n-image" onerror="this.style.display='none';">
                        
                        ${htmlAgentes}
                        
                        <h3 style="margin-top: 40px;">Código JSON Exportado</h3>
                        <pre class="json-viewer" id="caja-json">${escaparHTML(JSON.stringify(datosJson, null, 2))}</pre>
                    </div>
                `;
            })
            .catch(error => {
                mostrarError(error.message, rutaJson);
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