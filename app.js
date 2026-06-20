// NUEVA FUNCIÓN: Protege etiquetas como <rol> pero permite el Markdown
function protegerEtiquetas(texto) {
    if (!texto) return '';
    // Reemplaza <algo> por &lt;algo&gt; sin dañar los blockquotes (>) de Markdown
    return texto.replace(/<([^>]+)>/g, "&lt;$1&gt;");
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const btnToggle = document.getElementById('btn-toggle');
    const menuItems = document.querySelectorAll('.menu-item');
    const visor = document.getElementById('visor-contenido');
    
    // Elementos del Logo y Modal
    const logoBtn = document.getElementById('logo-btn');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('img-ampliada');
    const btnCerrarModal = document.querySelector('.close-modal');
    const containerImg = document.getElementById('modal-img-container');

    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const btnZoomReset = document.getElementById('btn-zoom-reset');

    let anchoActual = 90;
    const zoomPaso = 25;

    const htmlPortadaInicial = visor.innerHTML;

    function procesarNavegacion() {
        const hash = window.location.hash.substring(1); 
        
        if (!hash) {
            visor.innerHTML = htmlPortadaInicial;
            menuItems.forEach(i => i.classList.remove('seleccionado'));
            return;
        }

        const hashParts = hash.split('&');
        const menuId = hashParts[0];      
        const seccionId = hashParts[1];   

        const itemObjetivo = document.getElementById(menuId);
        
        if (itemObjetivo) {
            menuItems.forEach(i => i.classList.remove('seleccionado'));
            itemObjetivo.classList.add('seleccionado');

            let submenu = itemObjetivo.closest('.submenu');
            while (submenu) {
                submenu.classList.add('activo');
                const titulo = submenu.previousElementSibling;
                if (titulo) titulo.classList.add('abierto');
                submenu = submenu.parentElement.closest('.submenu'); 
            }

            if(window.innerWidth < 768) {
                sidebar.classList.add('oculta');
            }

            if (seccionId) {
                window.seccionPendienteScroll = seccionId;
            }

            const tipo = itemObjetivo.getAttribute('data-tipo');
            visor.innerHTML = '<p style="text-align:center; padding: 40px;">Cargando documento...</p>';

            if (tipo === 'md') {
                cargarMarkdown(itemObjetivo.getAttribute('data-md'));
            } else if (tipo === 'n8n') {
                cargarN8N(itemObjetivo.getAttribute('data-img'), itemObjetivo.getAttribute('data-json'), itemObjetivo.innerText);
            }
        }
    }

    window.addEventListener('hashchange', procesarNavegacion);

    menuItems.forEach(item => {
        item.addEventListener('click', () => { window.location.hash = item.id; });
    });

    logoBtn.addEventListener('click', () => {
        history.pushState("", document.title, window.location.pathname + window.location.search);
        procesarNavegacion(); 
    });

    btnToggle.addEventListener('click', () => { sidebar.classList.toggle('oculta'); });

    const titulosSeccion = document.querySelectorAll('.section-title, .sprint-title');
    titulosSeccion.forEach(titulo => {
        titulo.addEventListener('click', () => {
            const submenu = titulo.nextElementSibling;
            titulo.classList.toggle('abierto');
            submenu.classList.toggle('activo');
        });
    });

    visor.addEventListener('click', (e) => {
        if (e.target.classList.contains('n8n-image')) {
            modal.style.display = "block";
            modalImg.src = e.target.src; 
            anchoActual = 90;
            modalImg.style.width = `${anchoActual}%`;
        }

        const filaIndice = e.target.closest('.indice-item');
        if (filaIndice) {
            const idObjetivo = filaIndice.getAttribute('data-target');
            window.location.hash = idObjetivo; 
        }
    });

    btnZoomIn.addEventListener('click', (e) => {
        e.stopPropagation();
        anchoActual += zoomPaso;
        modalImg.style.width = `${anchoActual}%`;
    });

    btnZoomOut.addEventListener('click', (e) => {
        e.stopPropagation();
        if (anchoActual > 40) { 
            anchoActual -= zoomPaso;
            modalImg.style.width = `${anchoActual}%`;
        }
    });

    btnZoomReset.addEventListener('click', (e) => {
        e.stopPropagation();
        anchoActual = 90;
        modalImg.style.width = `${anchoActual}%`;
        containerImg.scrollTop = 0;
        containerImg.scrollLeft = 0;
    });

    btnCerrarModal.addEventListener('click', () => { modal.style.display = "none"; });
    containerImg.addEventListener('click', (e) => {
        if (e.target === containerImg) modal.style.display = "none";
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
            .catch(error => mostrarError(error.message, rutaArchivo));
    }

    // --- FUNCIÓN N8N ACTUALIZADA ---
    function cargarN8N(rutaImg, rutaJson, titulo) {
        visor.innerHTML = '<p style="text-align:center; padding: 40px;">Cargando flujo, agentes y configuraciones...</p>';

        fetch(rutaJson)
            .then(respuesta => {
                if (!respuesta.ok) throw new Error('No se ha subido el JSON aún.');
                return respuesta.json();
            })
            .then(datosJson => {
                let htmlAgentes = '';
                const agentes = datosJson.nodes.filter(n => n.type === '@n8n/n8n-nodes-langchain.agent');
                
                if (agentes.length > 0) {
                    htmlAgentes += `<h3 id="agentes" style="margin-top: 40px; margin-bottom: 15px;">Configuración de los Agentes</h3>`;
                    
                    agentes.forEach(ag => {
                        const nombreAgente = ag.name || 'Agente Desconocido';
                        let sysPrompt = ag.parameters?.options?.systemMessage || '';
                        let userPrompt = ag.parameters?.text || '';

                        // 1. ELIMINAR EL SÍMBOLO '=' DE N8N
                        if (sysPrompt.trim().startsWith('=')) sysPrompt = sysPrompt.trim().substring(1);
                        if (userPrompt.trim().startsWith('=')) userPrompt = userPrompt.trim().substring(1);
                        
                        // 2. PROTEGER ETIQUETAS Y RENDERIZAR MARKDOWN
                        const sysPromptHTML = sysPrompt ? marked.parse(protegerEtiquetas(sysPrompt)) : '';
                        const userPromptHTML = userPrompt ? marked.parse(protegerEtiquetas(userPrompt)) : '';

                        htmlAgentes += `
                            <div class="agent-card">
                                <div class="agent-header">
                                    <span>${nombreAgente}</span>
                                </div>
                                <div class="agent-body">
                                    ${sysPromptHTML ? `
                                    <div class="prompt-label">Prompt de Sistema (System Message)</div>
                                    <div class="prompt-content">${sysPromptHTML}</div>
                                    ` : ''}
                                    
                                    ${userPromptHTML ? `
                                    <div class="prompt-label">Prompt de Tarea (Contexto y Acción)</div>
                                    <div class="prompt-content">${userPromptHTML}</div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    });
                }

                visor.innerHTML = `
                    <div class="n8n-container">
                        <h2>${titulo}</h2>
                        <hr>
                        <h3>Vista Panorámica del Flujo</h3>
                        <p style="color: #666; font-size: 0.9em; margin-bottom: 10px;"><em>Haz clic sobre la imagen para ampliarla.</em></p>
                        <img src="${rutaImg}" alt="Imagen del flujo" class="n8n-image" onerror="this.style.display='none';">
                        
                        ${htmlAgentes}
                        
                        <h3 style="margin-top: 40px;">Código JSON Exportado</h3>
                        <pre class="json-viewer" id="caja-json">${protegerEtiquetas(JSON.stringify(datosJson, null, 2)).replace(/&lt;/g, '<').replace(/&gt;/g, '>')}</pre>
                    </div>
                `;

                if (window.seccionPendienteScroll) {
                    setTimeout(() => {
                        const elementoScroll = document.getElementById(window.seccionPendienteScroll);
                        if (elementoScroll) {
                            elementoScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                        window.seccionPendienteScroll = null; 
                    }, 150);
                }
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

    // =======================================================
    // EJECUCIÓN INICIAL AL ABRIR LA PÁGINA
    // =======================================================
    procesarNavegacion();
});