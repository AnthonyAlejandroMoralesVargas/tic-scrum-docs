**Informe de Insights Scrum – Sprint 2 – Sprint Retrospective**

### 1. Resumen Ejecutivo

El equipo demostró durante este Sprint 2 una excelente capacidad de **inspección técnica**, identificando de manera temprana que su enfoque de desarrollo asistido por Inteligencia Artificial ("vibe coding") estaba generando deuda técnica y sobreescritura de código. Además, mostraron altos niveles de colaboración mediante el trabajo en enjambre (_swarming_) para sacar adelante las Historias de Usuario (HU).

Sin embargo, desde la perspectiva metodológica y cultural, el equipo presenta **disfunciones y anti-patrones severos**. La falta de una planificación sólida en el Sprint Backlog genera un sistema de trabajo empujado (_Push_) donde los miembros quedan inactivos esperando que se les asigne trabajo de forma informal (WhatsApp), limitando la autoorganización. Adicionalmente, comportamientos poco profesionales durante la Daily Scrum amenazan la seguridad psicológica y la transparencia del equipo.



### 2. Insights Principales

**Insight 1: Trabajo en Enjambre (_Swarming_) como acelerador de entrega**

- **Descripción:** El equipo ha adoptado orgánicamente la práctica de agruparse alrededor de historias de usuario específicas ("colaborar por equipos en cada HU") y realizar reuniones rápidas focalizadas para destrabar impedimentos.
- **Evidencia observada:** Aportes en la columna de continuar: "colaborar por equipos en cada HU", "reuniones para solucionar errores focalizados", y menciones de apoyo cuando el componente principal no está disponible.
- **Impacto en el equipo/proyecto:** Aumenta el flujo de trabajo (Throughput), reduce el trabajo en progreso (WIP) y fomenta la propiedad colectiva del código, mitigando cuellos de botella.
- **Recomendación ágil:** Fomentar esta práctica pero institucionalizarla visualmente en el tablero. Las tareas de apoyo deben reflejarse en Azure Boards para medir el esfuerzo real y evitar dependencias ocultas.

###

**Insight 2: Anti-patrón de asignación de tareas (Sistema _Push_ vs _Pull_)**

- **Descripción:** Los desarrolladores de apoyo (ej. David) experimentan tiempos muertos prolongados porque esperan que un líder o responsable les _asigne_ trabajo, evidenciando una falta de autoorganización y un Sprint Backlog opaco.
- **Evidencia observada:** David menciona: _"nunca recibí ayuda en esta HU nada, sino que tenía que yo preguntar y pues no tenía a alguien que me diga qué estoy haciendo"_.
- **Impacto en el equipo/proyecto:** Subutilización de la capacidad del equipo, frustración personal y creación de un "cuello de botella de gestión" (el responsable de Back/Front tiene que hacer micro-management).
- **Recomendación ágil:** Transicionar a un sistema _Pull_. El Sprint Backlog debe ser lo suficientemente granular y claro para que cualquier miembro disponible pueda "jalar" (_pull_) la siguiente tarea de mayor prioridad sin esperar autorización.

###

**Insight 3: Planificación de Sprint deficiente (Ausencia de Tácticas)**

- **Descripción:** El facilitador rechazó una idea de mejora sobre planificar tareas desde el inicio, argumentando que el trabajo se descubre de forma improvisada. Esto es un grave anti-patrón de Scrum. El Sprint Backlog debe contener un plan (táctica) para alcanzar el Sprint Goal.
- **Evidencia observada:** Anthony dice: _"no se tiene un plan de esta historia de usuario se hace este día y así es conforme nuestra velocidad... vamos sobre la marcha iniciando"_.
- **Impacto en el equipo/proyecto:** Altera la previsibilidad, dificulta el seguimiento en la Daily Scrum y justifica el desorden en la delegación de tareas mencionado en el Insight 2.
- **Recomendación ágil:** El Scrum Master debe coachear al equipo en la Sprint Planning. Si bien no se debe planificar cada hora de cada día, sí debe existir una descomposición técnica clara (tareas) de las HU seleccionadas antes de arrancar el Sprint.

###

**Insight 4: Identificación temprana de riesgos técnicos por IA ("Vibe Coding")**

- **Descripción:** El equipo demostró madurez técnica al inspeccionar que el uso indiscriminado de IA sin contexto estructurado estaba rompiendo la arquitectura del software.
- **Evidencia observada:** Emilio y Anthony reportan que la IA _"sobreescribía lo que estaba anteriormente programado porque no había esa memoria"_ y generaba lógicas incoherentes con los tokens.
- **Impacto en el equipo/proyecto:** Generación masiva de deuda técnica y retrabajo (falsos positivos de avance).
- **Recomendación ágil:** Excelente la decisión de pasar a un "Desarrollo basado en Specs". Asegurar que estas especificaciones estén ligadas a los Criterios de Aceptación de la HU en Azure Boards para que la IA actúe como un asistente guiado y no como un ente autónomo.

###

**Insight 5: Comportamiento tóxico que rompe los pilares de Scrum**

- **Descripción:** Se reportó que miembros del equipo están siendo expulsados de la reunión de Daily Scrum. Esto destruye la confianza, el respeto (valor de Scrum) y la transparencia.
- **Evidencia observada:** Anthony pide _"dejar de expulsar a las personas en la Daily... se deben de comportar, porque de igual manera se pierde la transparencia"_.
- **Impacto en el equipo/proyecto:** Rompe la seguridad psicológica, genera resentimientos y sabotea el único evento oficial de sincronización e inspección diaria.
- **Recomendación ágil:** El Scrum Master debe actuar de inmediato como _Facilitador_ y _Servant Leader_, estableciendo normas de convivencia estrictas (Working Agreements). Si el comportamiento persiste, es un problema disciplinario que debe escalarse fuera del marco técnico.


### 3. Patrones Detectados

- **Desalineación entre Comunicación Formal e Informal:** Patrón de depender de WhatsApp ("grupos de WhatsApp") para la gestión del trabajo, dejando la herramienta oficial (Azure Boards) desactualizada, lo que causa confusión.
- **Colaboración Reactiva:** El equipo es excelente ayudando _cuando hay un fuego_ o cuando se les pide, pero no son proactivos al tomar el trabajo del tablero.
- **Liderazgo Centralizado:** Anthony (SM Proxy) actúa más como un Project Manager tradicional (leyendo por los demás, descartando ideas unilateralmente, dirigiendo las votaciones) que como un facilitador neutral.
- **Madurez en Feedback Cross-funcional:** Patrón muy positivo donde el Frontend y el Scrum Master revisan activamente el trabajo de Discovery (UX/UI) de forma continua.


### 4. Evaluación de Madurez Scrum

| Dimensión               | Valoración | Justificación                                                                                                                                          |
| :---------------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Transparencia**       | **Media**  | Aunque se habla de los problemas en la Retro, el flujo de trabajo real está oculto (se hace por WhatsApp, no en el Board) y las Dailys son saboteadas. |
| **Inspección**          | **Alta**   | Gran capacidad para auditar sus propias prácticas de ingeniería (ej. analizar por qué falla el "vibe coding" de la IA).                                |
| **Adaptación**          | **Alta**   | Logran acuerdos técnicos sólidos (migrar a Spec-driven development y configurar agentes) para resolver problemas complejos.                            |
| **Autoorganización**    | **Baja**   | Alta dependencia de que un "líder" asigne tareas. Mentalidad de _Push_ (empujar trabajo) en lugar de _Pull_ (jalar trabajo).                           |
| **Colaboración**        | **Alta**   | Evidencia sólida de _Swarming_ y feedback temprano entre diseño y desarrollo.                                                                          |
| **Orientación a valor** | **Media**  | El enfoque sigue centrado en la mecánica de las tareas y las herramientas, más que en el valor entregado al usuario.                                   |


### 5. Riesgos Identificados

| Riesgo                                       | Evidencia en la Transcripción                           | Consecuencia Potencial                                                                                                        |
| :------------------------------------------- | :------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **1. Deterioro de la Seguridad Psicológica** | "Dejar de expulsar a las personas en la Daily."         | Pérdida de talento, ocultamiento de errores críticos y colapso del trabajo en equipo.                                         |
| **2. Sprint Backlog Inoperante**             | "No se tiene un plan... vamos sobre la marcha."         | Imposibilidad de medir la velocidad, cuellos de botella ocultos y miembros inactivos.                                         |
| **3. Regresión de Código por IA**            | "Sobreescribía lo que estaba anteriormente programado." | Caos en los repositorios, conflictos de ramas (merge conflicts) y fallos en producción de funcionalidades que ya funcionaban. |


### 6. Oportunidades de Mejora (Priorizadas para próximos Sprints)

1.  **Establecer "Working Agreements" (Inmediato):** El equipo debe crear y firmar un código de conducta que prohíba estrictamente comportamientos infantiles o disruptivos en los eventos Scrum (como expulsar compañeros).
2.  **Transición a Tablero Pull (Proceso):** Eliminar la delegación informal. Toda tarea técnica, bug o especificación debe existir en Azure Boards. Durante la Daily, el equipo debe responder a la pregunta: _"¿Qué tarea del tablero voy a jalar hoy para acercarnos al Sprint Goal?"_ en lugar de esperar órdenes.
3.  **Refinamiento de la Estrategia IA (Técnica):** Ejecutar el compromiso de Emilio: Definir las "Specs" (especificaciones) claras en el tablero _antes_ de alimentar a los agentes de IA, para limitar su ventana de contexto y evitar la sobreescritura de código.


### 7. Conclusión General

El equipo se encuentra en un estado de **dicotomía de madurez**. Por un lado, exhiben una madurez técnica y de ingeniería de software sobresaliente, siendo capaces de diagnosticar limitaciones arquitectónicas de modelos de IA avanzados y adaptar sus flujos de CI/CD (Spec-driven). Por otro lado, su madurez ágil y cultural es precaria. Operan bajo una mentalidad tradicional de "esperar órdenes", carecen de la disciplina para estructurar un Sprint Backlog funcional y toleran comportamientos que dañan el núcleo del equipo.

El Scrum Master debe intervenir urgentemente no en la parte técnica (que el equipo domina bien), sino en el plano de las **interacciones humanas y los fundamentos mecánicos de Scrum** (Sprint Planning efectivo, tableros transparentes y respeto en los eventos diarios). Si logran acoplar su brillantez técnica con una verdadera autoorganización ágil, su capacidad de entrega será excepcional.
