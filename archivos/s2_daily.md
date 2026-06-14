# Informe de Insights Scrum – Sprint 2 – Daily Scrum

## 1. Resumen Ejecutivo

El Sprint 2 estuvo marcado por una alta volatilidad técnica y una paradoja de productividad: mientras el equipo intentaba automatizar procesos con IA para satisfacer la demanda de velocidad del Product Owner (PO), la inestabilidad de las herramientas (Gemini) y fallos críticos de integración (JWT) actuaron como anclas.

A nivel humano, el equipo demostró una notable **colaboración interdisciplinaria**, con roles técnicos apoyando en fases de Discovery. Sin embargo, la madurez del proceso se vio comprometida por una planificación que se arrastró hasta casi la mitad del Sprint y un entorno de producción que terminó el ciclo "muerto" o inestable, obligando a inspecciones en entornos locales.

---

## 2. Insights Principales

### Insight 1: La IA como Impedimento ("Hallucinations Trap")

**Descripción:** El equipo confía en modelos de IA (Gemini) para generar tareas y lógica, pero el modelo empezó a "alucinar" o contradecir análisis previos, generando retrabajo y desconfianza en el proceso automatizado.
**Evidencia observada:** Emilio (Daily #7): _"El uso de Gemini... no tiene un buen benchmark... las tareas se están distorsionando"_. Anthony (Daily #7): _"El modelo de Gemini alucina un poco... sobreescribió o no entendía... discrepancias entre análisis"_.
**Impacto en el equipo:** Pérdida de tiempo corrigiendo salidas de la IA y riesgo de implementar lógica de negocio inconsistente.
**Recomendación ágil:** Implementar una etapa de **curaduría humana obligatoria** inmediata tras la generación por IA y evaluar el cambio de modelo (ej. GPT-4 o Claude) para tareas críticas de arquitectura.

### Insight 2: Fragilidad de la Infraestructura y Bloqueos de Despliegue (JWT)

**Descripción:** Un problema técnico recurrente con el JWT (autenticación) paralizó la integración y dejó la aplicación inoperativa en producción durante los últimos 3 días del Sprint.
**Evidencia observada:** David (Daily #9): _"La aplicación está muerta... la aplicación está caída por temas del JWT"_. José (Daily #8): _"Errores que está dando el endpoint... con respecto al JWT"_.
**Impacto en el equipo:** QA bloqueado para pruebas en entornos reales, forzando pruebas manuales y locales que rompen el principio de transparencia sobre el estado del incremento.
**Recomendación ágil:** Realizar un **"Spike" técnico** al inicio del Sprint 3 para estabilizar el módulo de seguridad y asegurar que DevOps (Estefano) garantice la paridad de entornos (Local vs Prod).

### Insight 3: Colaboración Interfuncional Elevada (Cross-skilling)

**Descripción:** Ante la carga de trabajo y ausencias, los miembros asumieron tareas fuera de su rol tradicional, especialmente apoyando al componente de Discovery (entrevistas).
**Evidencia observada:** David (QA) y Estefano (DevOps) realizaron entrevistas a estudiantes (Daily #3). José (Front) apoyó en entrevistas a tutores (Daily #4).
**Impacto en el equipo:** Fortalecimiento del conocimiento compartido del producto y flexibilidad operativa.
**Recomendación ágil:** Mantener esta dinámica pero formalizarla en el Sprint Planning para evitar que el apoyo a Discovery retrase las tareas críticas de desarrollo (DoD).

### Insight 4: Presión Externa vs. Deuda de Planificación

**Descripción:** El PO percibe lentitud, lo que empuja al Scrum Master a realizar tareas manuales para acelerar, descuidando la mejora de los flujos automatizados.
**Evidencia observada:** Anthony (Daily #2): _"Retraso de que me tocó actualizar el release planning manual debido a los comentarios del PO de que estamos un poco lentos"_.
**Impacto en el equipo:** Se sacrifica la visión de largo plazo (automatización) por la urgencia del corto plazo, generando estrés en el SM.
**Recomendación ágil:** El SM debe gestionar las expectativas del PO, demostrando que la inversión en flujos (IA) pagará con velocidad en los Sprints 3 y 4, protegiendo al equipo de la presión externa.

### Insight 5: Ambigüedad en el Rol del Scrum Master

**Descripción:** Anthony (SM) está asumiendo una carga pesada de implementación técnica (Backend) además de sus responsabilidades de facilitación y planificación.
**Evidencia observada:** Anthony (Daily #5): _"Desarrolló tareas 8, 9, 10 y 11 correspondientes al backend"_. (Daily #8): _"Resolviendo los bugs... ya lo estoy solventando"_.
**Impacto en el equipo:** Riesgo de "cuello de botella" en la facilitación si el SM se concentra demasiado en el código. Puede nublar su capacidad de inspeccionar el proceso de forma neutral.
**Recomendación ágil:** Delegar más tareas de desarrollo a Emilio y José, permitiendo que Anthony se enfoque en resolver los bloqueos sistémicos (como la caída de producción).

---

## 3. Patrones Detectados

1.  **Bloqueos por Dependencia Serial:** El Frontend (José) termina tareas rápido pero queda bloqueado esperando confirmaciones de Backend (Daily #2, #4, #8). **(Anti-patrón: Cascada dentro del Sprint)**.
2.  **Planificación Tardía:** Las tareas y criterios terminan de definirse entre la Daily #2 y #3. **(Patrón: Sprint Planning incompleto al inicio del ciclo)**.
3.  **Inspección Local como Salida de Emergencia:** Ante fallos de servidor, se recurre a "pruebas en local" (Daily #9). **(Riesgo: Falta de paridad y errores ocultos de integración)**.
4.  **Uso Mecánico de la Daily:** En las últimas sesiones, el SM tiene que pedir comportamiento profesional (Daily #10). **(Señal: Fatiga del equipo o falta de respeto al "Time-box")**.

---

## 4. Evaluación de Madurez Scrum

| Valor                   | Nivel     | Justificación                                                                                                           |
| :---------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Transparencia**       | **Media** | Se informan los errores, pero el estado "muerto" de la app en producción oculta el progreso real ante los stakeholders. |
| **Inspección**          | **Alta**  | QA (David) detecta errores rápidamente y los reporta, incluso ayudando a otros componentes.                             |
| **Adaptación**          | **Media** | El equipo cambia herramientas de IA cuando fallan, pero no logra corregir la dependencia de Estefano para despliegues.  |
| **Autoorganización**    | **Alta**  | El equipo decide quién apoya en entrevistas y se redistribuyen tareas ante ausencias de forma orgánica.                 |
| **Colaboración**        | **Alta**  | Gran disposición para ayudar entre componentes (QA ayudando a Back, SM ayudando a Dev).                                 |
| **Orientación a Valor** | **Media** | Se prioriza "sacar las tareas" sobre la estabilidad del sistema (JWT), lo que degrada el valor final del incremento.    |

---

## 5. Riesgos Identificados

| Riesgo                   | Evidencia                                                                 | Consecuencia potencial                                             |
| :----------------------- | :------------------------------------------------------------------------ | :----------------------------------------------------------------- |
| **Bus Factor en DevOps** | Estefano reporta falta de tiempo (Daily #3) y la orquestación se detiene. | Bloqueo total del pipeline de entrega y falta de automatización.   |
| **Regresiones Críticas** | Al arreglar filtros se dañó el registro (Daily #8).                       | El producto pierde funcionalidades básicas ganadas en el Sprint 1. |
| **Agotamiento del SM**   | Anthony planifica, desarrolla, corrige bugs y atiende al PO.              | Errores de juicio en la facilitación y posible burnout.            |

---

## 6. Oportunidades de Mejora

1.  **Implementar Contratos de API (Mocks):** Para que José no espere a Emilio, deben definir el JSON de respuesta antes de codificar.
2.  **Establecer un "AI Sandbox":** Probar los prompts de Gemini fuera de la ruta crítica del Sprint para evitar que las "alucinaciones" contaminen el Board de tareas.
3.  **Fortalecer el DoD (Definition of Done):** Incluir "Desplegado en Producción y verificado" como requisito, no solo "probado en local".
4.  **Rotación de Facilitación:** Permitir que otros miembros moderen la Daily para aumentar el compromiso y profesionalismo en la ceremonia.

---

## Conclusión General

El Sprint 2 fue un ciclo de **aprendizaje duro sobre los límites de la automatización**. El equipo tiene una cultura de colaboración excepcional, pero está siendo saboteado por la inestabilidad técnica y la falta de un entorno de despliegue sólido. La evolución de "Storming" a "Norming" dependerá de que en el Sprint 3 el equipo priorice la **estabilidad del núcleo (Seguridad/JWT)** sobre la **velocidad de nuevas funcionalidades**, y que el Scrum Master logre soltar la carga técnica para enfocarse en la salud del proceso ágil.
