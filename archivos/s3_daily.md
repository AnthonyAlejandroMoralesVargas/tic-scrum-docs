# Informe de Insights Scrum – Sprint 3 – Daily Scrum

## 1. Resumen Ejecutivo

El Sprint 3 representó un punto de inflexión en la **autoorganización** del equipo. Se implementó una estrategia de **"Swarming"** (trabajo en enjambre), donde roles de QA, DevOps y Scrum Master asumieron tareas de desarrollo para mitigar cuellos de botella. Aunque el equipo demostró una alta capacidad de respuesta ante impedimentos externos (cortes de luz, cambios en APIs de IA), se detectó un patrón crítico de **disparidad de entornos**, con bugs que solo se manifiestan en producción, lo que puso en riesgo la estabilidad del incremento.

---

## 2. Insights Principales

### Insight 1: Colaboración Radical ("Swarming") como Fortaleza y Riesgo

- **Descripción:** El equipo ha trascendido los silos funcionales. QA (David), DevOps (Estefano) y el SM (Anthony) programaron Backend bajo la tutela de Emilio. Discovery (Sebastián) programó Frontend.

- **Evidencia observada:** Anthony (SM) desarrolló las tareas 21 a 26 de la HU33 (Daily #5). David (QA) se capacitó para apoyar en Backend (Daily #3). Sebastián (Discovery) apoyó en el Frontend de la HU33 (Daily #5).

- **Impacto:** Se aceleró la entrega de Historias de Usuario complejas, pero el SM y QA sacrificaron tiempo de sus funciones core (facilitación y diseño de pruebas) para codificar.

- **Recomendación ágil:** Mantener el apoyo cruzado pero asegurar que QA valide los criterios de aceptación _antes_ de sumarse al desarrollo, para evitar sesgos de "autovalidación".

### Insight 2: Fragilidad del Stack Tecnológico basado en IA Externa

- **Descripción:** La dependencia de herramientas de IA externas (GitHub Copilot/OpenAI) generó bloqueos operativos fuera del control del equipo.
  
- **Evidencia observada:** El equipo perdió acceso a los modelos de Claude en Copilot (Daily #3). Anthony reportó saturación de la API de OpenAI por el uso intensivo de agentes (Daily #5). José reportó resultados incompletos de la IA en la HU11 (Daily #10).

- **Impacto:** Incertidumbre en la capacidad de entrega y necesidad de retrabajo manual cuando la automatización falla.

- **Recomendación ágil:** Establecer un **Plan de Contingencia de Herramientas**. Si la IA falla o el rate-limit se alcanza, el equipo debe tener prompts simplificados o guías de codificación manual pre-aprobadas.

### Insight 3: Patrón de Fallos de "Última Milla" (Entornos Inconsistentes)

- **Descripción:** Surge un patrón recurrente donde las funcionalidades pasan las pruebas locales pero fallan sistemáticamente al ser desplegadas.

- **Evidencia observada:** José (Daily #5): _"El programa no está funcionando en producción... ya reporté una posible causa"_. Estefano (Daily #6): _"Generar un logging... para solventar lo que tenemos ahorita en producción"_.

- **Impacto:** Desperdicio (_Waste_) masivo en diagnóstico de errores y erosión de la confianza en el proceso de despliegue.

- **Recomendación ágil:** Implementar **Paridad de Entornos**. DevOps debe automatizar el "Seeding" de datos (Daily #9) y asegurar que las variables de entorno de Staging sean idénticas a Producción.

### Insight 4: Madurez en Empirismo (Ajuste de Reglas de Negocio)

- **Descripción:** El equipo demostró una excelente capacidad de **Inspección y Adaptación** sobre el producto mismo, no solo sobre el proceso, al identificar que una regla de negocio era contraproducente.

- **Evidencia observada:** Anthony (Daily #10) ajustó la regla SOL-02 reduciendo la anticipación de tutorías de 12h a 4h porque "bloqueaba demasiados slots".

- **Impacto:** Mejora directa en la usabilidad y valor del producto basada en la observación técnica y lógica.

- **Recomendación ágil:** Formalizar este tipo de hallazgos en la Sprint Review como una "mejora de valor" para transparentar el criterio del equipo ante los stakeholders.

### Insight 5: Erosión del Rol del Scrum Master

- **Descripción:** Anthony está actuando casi exclusivamente como un **Desarrollador/Technical Lead**, descuidando la facilitación de la agilidad.

- **Evidencia observada:** Anthony programa Backend, configura entornos locales (Daily #4), arregla conflictos de lógica y soluciona bugs de otros componentes (Daily #6).

- **Impacto:** Falta de una figura neutral que observe las dinámicas del equipo. La Daily se vuelve un reporte de estatus técnico y no una sesión de replanificación del Sprint Goal.

- **Recomendación ágil:** Anthony debe delegar la resolución de bugs técnicos de "Header" o "Logic" a los desarrolladores y retomar su rol de observador para identificar por qué el equipo sigue teniendo problemas de comunicación en los merges (Daily #6).

---

## 3. Patrones Detectados

- **Bloqueos por Factores Externos Reincidentes:** Cortes de luz e inestabilidad de internet (Estefano y Emilio) afectaron el 40% de las Dailies.

- **Delegación Orgánica:** El equipo no espera al SM para delegar; Emilio asigna tareas a otros componentes proactivamente (Daily #9).

- **Deuda Técnica en Testing:** David tuvo que actualizar _todas_ las pruebas de los sprints pasados (Daily #9), lo que indica que las pruebas automatizadas no son resilientes a cambios en la UI.

---

## 4. Evaluación de Madurez Scrum

- **Transparencia (Alta):** El equipo es brutalmente honesto sobre sus errores, falta de luz o fallos de la IA.

- **Inspección (Alta):** QA y Devs inspeccionan constantemente el comportamiento en producción vs local.

- **Adaptación (Alta):** Cambian de modelos de IA y ajustan reglas de negocio sobre la marcha.

- **Autoorganización (Alta):** El equipo decidió autónomamente hacer swarming para salvar el sprint.

- **Colaboración (Baja):** **(Anti-patrón)** Existe colaboración técnica, pero la comunicación sobre los "merges" y contratos de API (POST vs GET en Daily #3) sigue siendo reactiva y no preventiva.

- **Orientación a Valor (Media):** Se enfocan mucho en el "cómo" tecnológico (orquestadores, SCD, agentes) y a veces pierden de vista el incremento funcional estable.

**Valoración General: Media-Alta.** El equipo es técnicamente muy capaz y unido, pero opera en un caos controlado.

---

## 5. Riesgos Identificados

| Riesgo                                  | Evidencia                                                        | Consecuencia potencial                                              |
| :-------------------------------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------ |
| **Inestabilidad de Producción**         | Fallos constantes solo en URL desplegada (Daily #6).             | Demo fallida en la Sprint Review.                                   |
| **Fragilidad de Pruebas Automatizadas** | David rehaciendo pruebas de Sprint 1 y 2 (Daily #9).             | QA se vuelve un cuello de botella incapaz de mantener la regresión. |
| **Pérdida de Contexto de IA**           | Emilio reporta problemas de "memoria" en los agentes (Daily #4). | Generación de código que contradice funcionalidades previas.        |

---

## 6. Oportunidades de Mejora

1.  **Contratos de API (Contract-First):** Definir el JSON de entrada/salida _antes_ de programar para evitar discusiones como la de la Daily #3 sobre métodos HTTP.

2.  **QA as a Consultant:** En lugar de que David programe Backend, debería guiar a los desarrolladores en cómo escribir código más "testeable" para que las pruebas no se rompan tanto.

3.  **Implementar Smoke Tests en CD:** Automatizar una prueba básica de "Health Check" que impida el despliegue si el login o las rutas core fallan, evitando que producción esté caída tanto tiempo.

---

## Conclusión General

El equipo del Sprint 3 es un ejemplo de **resiliencia y polivalencia**. Han logrado integrar a todos los miembros en la construcción del producto, superando barreras de rol. Sin embargo, esta agilidad es "heroica" y depende mucho del esfuerzo individual de Anthony y Emilio. Para el Sprint 4, el equipo debe dejar de "apagar incendios" en producción y enfocarse en la **estandarización de su infraestructura** y la robustez de sus pruebas para que la velocidad ganada con la IA sea sostenible.
