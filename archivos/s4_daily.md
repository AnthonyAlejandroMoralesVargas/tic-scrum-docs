# Informe de Insights Scrum – Sprint 4 – Daily Scrum

## 1. Resumen Ejecutivo

El Sprint 4 representó la fase de consolidación y cierre del Release 1. El equipo demostró una **resiliencia excepcional y una colaboración interfuncional (Swarming)** de alto nivel, con roles no técnicos apoyando directamente el desarrollo para cumplir con los plazos. Sin embargo, el cierre se vio amenazado por **bloqueos técnicos recurrentes en los datos de prueba (Seed/SIT)**, inestabilidad en las herramientas de IA y fallos de hardware individuales. El Scrum Master (Anthony) tuvo que intervenir técnicamente para estabilizar el incremento final, evidenciando una transición exitosa de un equipo reactivo a uno altamente colaborativo, aunque todavía dependiente de "héroes" técnicos.

## 2. Insights Principales

### Insight 1: Swarming Extremo como Estrategia de Mitigación

**Descripción:** El equipo eliminó por completo los silos de rol para asegurar la entrega. Discovery (Sebastián) asumió tareas de Frontend y el Scrum Master (Anthony) asumió tareas críticas de Backend.
**Evidencia observada:** José (Daily #5): _"Realicé la asignación de tareas para el componente de Discovery que me apoyó con la resolución del HU48"_. Anthony (Daily #5): _"Me encargué de desarrollar tareas de implementación del HU48"_.
**Impacto en el equipo:** Se logró absorber la carga de trabajo de las últimas HUs (40, 43, 48, 22), compensando la capacidad reducida de otros miembros.
**Recomendación ágil:** Institucionalizar el **"Pair Programming"** preventivo en futuros lanzamientos para que este apoyo sea una práctica planificada y no una medida de emergencia.

### Insight 2: Fragilidad de la "Agilidad Asistida por IA" (IA-Fatigue)

**Descripción:** La dependencia de modelos de IA externos mostró sus límites en este sprint final. El equipo sufrió por el consumo de tokens y la calidad inconsistente de los modelos.
**Evidencia observada:** David (Daily #6): _"Tuve el problema con el número de tokens... se consumieron muchos"_. Emilio (Daily #2): _"Gemini Pro... me dio resultados problemáticos"_.
**Impacto:** El ahorro de tiempo esperado por la automatización se perdió parcialmente en la corrección manual de los resultados de la IA, generando frustración y retrabajo.
**Recomendación ágil:** Crear un **"Prompt Library"** validado por el equipo y establecer cuotas de uso para evitar bloqueos por límites de API en momentos críticos del cierre.

### Insight 3: El "Seed" de Datos como Punto Único de Fallo

**Descripción:** La falta de un entorno de datos estable (Seed/SIT) paralizó a QA y Frontend durante el 20% del sprint.
**Evidencia observada:** David (Daily #7): _"La HU40 no pasó por falta de datos en el Seed"_. Anthony (Daily #7): _"No se tuvo respuesta durante todo el día para que David pueda proceder"_.
**Impacto:** Se generó un cuello de botella artificial que retrasó la inspección del incremento y aumentó el riesgo de encontrar bugs críticos el último día.
**Recomendación ágil:** Implementar **"Database Seeding" automatizado** como parte del pipeline de CI/CD, asegurando que cada despliegue cuente con datos consistentes sin intervención manual del SM.

### Insight 4: Gestión de Configuración y Riesgo de Sobreescritura

**Descripción:** Se detectaron problemas en la sincronización de versiones, resultando en pérdida temporal de trabajo.
**Evidencia observada:** Anthony (Daily #6): _"Tuve el problema de que se sobreescribieron los archivos de la HU48... se logró solucionar satisfactoriamente"_.
**Impacto:** Riesgo alto de regresiones y pérdida de esfuerzo en la fase más crítica del Release.
**Recomendación ágil:** Reforzar el uso de **ramas protegidas y Pull Requests (PR)** más granulares. La sobreescritura indica que el equipo está trabajando sobre las mismas ramas sin una estrategia de integración clara.

### Insight 5: SM como "Salvavidas Técnico" (Anti-patrón persistente)

**Descripción:** Anthony continúa asumiendo la resolución de bugs complejos en lugar de facilitar que el equipo los resuelva, actuando como el desarrollador de última instancia.
**Evidencia observada:** Anthony (Daily #10): _"Colaboré el día de hoy solucionando algunas observaciones de la HU10... el endpoint estaba fallando"_.
**Impacto:** Si bien salva el release, oculta brechas de conocimiento en el equipo de desarrollo y sobrecarga al SM, impidiéndole enfocarse en la visión estratégica del Release Review.
**Recomendación ágil:** Transferencia de conocimiento formal. Anthony debe guiar a Emilio y José en la resolución de esos bugs de lógica de horarios para que el equipo gane autonomía técnica real.

## 3. Patrones Detectados

1.  **Confusión de Identificadores (IDs):** Se reportó confusión repetida entre los números de las HU (40, 43, 48). Esto sugiere una falta de claridad en el radiador de información (Azure Boards).
2.  **Impedimentos de Hardware/Infraestructura:** La PC de Emilio y el internet de Estefano fueron impedimentos críticos. El equipo no tiene un plan de contingencia para fallos de equipo físico.
3.  **Mantenimiento de Pruebas Reactivo:** David pasó gran parte del sprint actualizando pruebas de sprints pasados que se rompieron, indicando una baja resiliencia en la arquitectura de pruebas automatizadas.

## 4. Evaluación de Madurez Scrum

| Dimensión               | Valoración     | Justificación                                                                         |
| :---------------------- | :------------- | :------------------------------------------------------------------------------------ |
| **Transparencia**       | **Alta**       | David y Anthony son muy claros sobre lo que falla (Seed, alucinaciones de IA).        |
| **Inspección**          | **Alta**       | QA está realizando pruebas de regresión profundas para detectar incongruencias.       |
| **Adaptación**          | **Media-Alta** | El equipo adoptó el feriado nacional y ajustó su capacidad orgánicamente.             |
| **Autoorganización**    | **Alta**       | Sebastián apoyando en Frontend sin que el SM se lo ordene formalmente.                |
| **Colaboración**        | **Muy Alta**   | Todos los miembros programaron o probaron para cerrar el Release.                     |
| **Orientación a valor** | **Alta**       | Se priorizó el cierre de la funcionalidad de "Reseñas" (HU22) como cierre de impacto. |

## 5. Riesgos Identificados

| Riesgo                         | Evidencia                                                     | Consecuencia potencial                                                         |
| :----------------------------- | :------------------------------------------------------------ | :----------------------------------------------------------------------------- |
| **Agotamiento de Recursos IA** | David reporta falta de tokens al final del sprint (Daily #6). | Incapacidad de generar documentación o pruebas finales para el Release.        |
| **Regresiones en Producción**  | David descubre errores en flujos viejos al final (Daily #10). | El Release Review puede mostrar fallos en funcionalidades "ya terminadas".     |
| **Dependencia de Hardware**    | Emilio sin PC por mantenimiento (Daily #7).                   | Cuellos de botella si el responsable de una rama crítica pierde acceso físico. |

## 6. Oportunidades de Mejora

1.  **Estandarización de la Nomenclatura del Board:** Usar nombres descriptivos obligatorios, no solo números, para evitar la confusión reportada entre HU40/43/48.
2.  **Desacoplamiento de Pruebas y Datos:** QA debe usar datos estáticos o mocks controlados para no depender de la inestabilidad del "Seed" centralizado.
3.  **Post-mortem de IA:** Realizar una sesión específica para analizar qué modelos funcionaron mejor y por qué, ajustando el stack tecnológico para el próximo release.

## Conclusión General

El equipo cierra el Release 1 en un estado de **alta cohesión humana pero fatiga técnica**. La estrategia de "Swarming" salvó el compromiso del release, lo cual es una señal de alta madurez en el valor de _Compromiso_ y _Respeto_. Sin embargo, el equipo debe trabajar en la **estabilidad de sus cimientos** (datos de prueba, infraestructura y arquitectura de IA) para evitar que el próximo release se convierta nuevamente en una carrera contra los bloqueos técnicos de "última milla". El éxito de este cierre es un triunfo de la voluntad del equipo sobre las limitaciones de sus herramientas.
