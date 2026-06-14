# Informe de Insights Scrum – Sprint 1 – Daily Scrum

## 1. Resumen Ejecutivo

El Sprint 1 se caracterizó por una fuerte curva de aprendizaje tecnológica y una dependencia crítica en la infraestructura de automatización (IA y N8N). El equipo logró completar hitos funcionales (HU01, HU03, HU17), pero operó bajo un modelo de **dependencia secuencial** (cascada interna) más que en una colaboración orgánica. Se detectó una vulnerabilidad crítica en el rol de DevOps y una gestión reactiva de los impedimentos técnicos. A pesar de esto, el equipo demostró capacidad de adaptación al pivotar herramientas y mejorar el versionamiento de su documentación tras un incidente de pérdida de datos.

---

## 2. Insights Principales

### Insight 1: Riesgo del "Bus Factor" en DevOps e Infraestructura

**Descripción:** El equipo padece de una centralización excesiva de conocimiento y accesos en el rol de DevOps (Estefano). Cuando el responsable de infraestructura no está presente o tiene problemas personales, el flujo de valor se detiene completamente.
**Evidencia observada:** En la Daily #6, la aplicación está caída. Anthony (SM) menciona: _"Es el problema que estamos teniendo... porque Estefano es el que levantó la instancia AWS"_. El equipo se queda "estancado" sin poder realizar despliegues ni pruebas.
**Impacto:** Paralización del equipo, incumplimiento de objetivos y aumento del estrés al depender de una sola persona para desbloquear el entorno de pruebas.
**Recomendación ágil:** Implementar **Shared Ownership**. Estefano debe documentar y compartir accesos/scripts de AWS con al menos un desarrollador más (Emilio o José) para asegurar la resiliencia del equipo.

### Insight 2: Patrón de "Espera Activa" (Silos entre Front y Back)

**Descripción:** Se observa un flujo de trabajo secuencial donde el Frontend (José) termina sus tareas rápidamente pero queda bloqueado durante días esperando la confirmación o el despliegue del Backend (Emilio).
**Evidencia observada:** José repite en múltiples sesiones: _"Me encuentro a la espera de la confirmación de Backend para implementar la última tarea de integración"_ (Daily #4, #7, #8).
**Impacto:** Reducción de la velocidad del Sprint y aumento del desperdicio (_Waste_) por subutilización de la capacidad de José.
**Recomendación ágil:** Adoptar **API First / Contract-First Development**. Definir el contrato de la API antes de programar para que José pueda usar _mocks_ y terminar la integración sin depender de la lógica final del Backend.

### Insight 3: Inestabilidad de la Automatización como Impedimento

**Descripción:** El equipo utiliza IA y N8N no solo como apoyo, sino como eje central, lo que ha generado bloqueos por límites de tokens, fallos de enrutamiento y alucinaciones en los resultados.
**Evidencia observada:** Anthony reporta límites de 8,000 tokens en Copilot (Daily #4); Emilio menciona problemas de enrutamiento en N8N (Daily #1); David reporta fallos en los resultados de la IA (Daily #2).
**Impacto:** La automatización, diseñada para acelerar, está consumiendo tiempo en _debugging_ de flujos, lo que pone en duda su ROI actual.
**Recomendación ágil:** Establecer un **"Manual Fallback"**. Si la IA no genera el resultado en un tiempo determinado (ej. 30 mins), el equipo debe proceder manualmente para proteger el compromiso del Sprint.

### Insight 4: Evolución del Empirismo (Transparencia en la Documentación)

**Descripción:** El equipo experimentó un fallo en la transparencia y adaptó sus procesos de ingeniería tras perder datos en la Wiki de Azure.
**Evidencia observada:** Anthony (SM) reporta que se eliminaron páginas por error y decide migrar a un repositorio Git para wikis (Daily #5). En la Daily #8, recomienda a todos seguir este enfoque de versionamiento.
**Impacto:** Fortalecimiento de la integridad de los artefactos y mejora en la gestión de la configuración del proyecto.
**Recomendación ágil:** Felicitar la transparencia del SM al admitir el error y formalizar esta práctica como un estándar del equipo para el Sprint 2.

### Insight 5: SM actuando como Líder Técnico (Facilitador Directo)

**Descripción:** Anthony (Scrum Master) trasciende el rol de facilitador de procesos para involucrarse en el diagnóstico técnico (logs de bases de datos y enrutamiento N8N).
**Evidencia observada:** Anthony ayuda a Estefano a diagnosticar por qué se borraban las tablas en el pipeline (Daily #7) y realiza pruebas de concepto de modelos de IA (Daily #3).
**Impacto:** Aumenta la velocidad de resolución de problemas, pero puede generar una dependencia del equipo hacia su figura para resolver bloqueos técnicos.
**Recomendación ágil:** Anthony debe balancear su apoyo técnico con la mentoría para que el equipo sea quien resuelva estos problemas en el futuro, protegiendo su tiempo para la gestión del valor y los stakeholders.

---

## 3. Patrones Detectados

1.  **Bloqueos por Despliegue (Deploy-Driven Blocks):** El equipo es productivo escribiendo código local, pero el flujo se rompe al intentar llegar al entorno de AWS (Daily #3, #6, #10).
2.  **Ausentismo con Impacto Técnico:** Las ausencias de Estefano y Emilio no son solo "falta de manos", son bloqueos totales debido a la especialización de tareas.
3.  **Refinamiento Reactivo:** Se detectan problemas de lógica (reglas de negocio SOL-02) al final del Sprint (Daily #10), lo que indica que las HUs no fueron suficientemente refinadas antes del Planning.

---

## 4. Evaluación de Madurez Scrum

- **Transparencia (Media):** Los miembros son honestos sobre lo que no saben y sus errores (como PRs olvidados o Wiki borrada), pero falta visibilidad sobre la infraestructura AWS para el resto del equipo.
- **Inspección (Alta):** El equipo inspecciona diariamente los resultados de la IA y el estado de la aplicación caída.
- **Adaptación (Media):** El equipo cambia herramientas (Jose pasa de Low-Code a Copilot), pero no logra adaptar la dinámica de dependencias para evitar que el Front espere al Back.
- **Autoorganización (Baja):** El equipo sigue esperando instrucciones o aprobaciones externas (DevOps/SM) para avanzar en temas técnicos críticos.
- **Orientación a Valor (Media):** Se enfocan en completar HUs, pero a veces se distraen con la perfección de los flujos de N8N por encima de la funcionalidad del producto.

**Valoración General: Media-Baja.** El equipo está en la etapa "Storming". Hay mucha fricción técnica y dependencia de roles individuales.

---

## 5. Riesgos Identificados

| Riesgo                                 | Evidencia                                                    | Consecuencia potencial                                                                 |
| :------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Silo de DevOps**                     | Solo Estefano puede arreglar AWS (Daily #6).                 | El Sprint Review puede fallar si el entorno cae y el SM no puede contactar a Estefano. |
| **Inestabilidad del Stack (N8N/IA)**   | Errores constantes en flujos de tareas (Daily #2).           | Generación de código de baja calidad o con bugs lógicos difíciles de rastrear.         |
| **Fricción de Integración (Big Bang)** | José acumulando integración de 3 tareas al final (Daily #8). | Fallos masivos de integración en las últimas horas del Sprint.                         |

---

## 6. Oportunidades de Mejora

1.  **Pair Programming Interfuncional:** Emilio y Estefano deben hacer sesiones con el equipo para transferir conocimientos básicos de despliegue.
2.  **Definición de "Done" (DoD) para IA:** Incluir que todo código generado por IA debe pasar por un linter y una revisión humana antes de ser considerado "Hecho".
3.  **Daily más ejecutiva:** Anthony debe reforzar el enfoque en el **Sprint Goal** en lugar de solo listar tareas técnicas, para que José y Emilio busquen formas de colaborar más temprano.

---

## Conclusión General

El equipo ha demostrado resiliencia técnica pero sufre de una **fragilidad operativa** alta debido a silos de conocimiento y una excesiva dependencia de herramientas de automatización inestables. Han superado la fase inicial de configuración, pero para el Sprint 2 deben enfocarse en **desacoplar el desarrollo de Frontend y Backend** y **democratizar el acceso a la infraestructura**. El rol del SM ha sido clave para salvar el Sprint desde lo técnico, pero debe evolucionar hacia un coach que empodere al equipo a resolver sus propios cuellos de botella.
