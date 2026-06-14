# Informe de Insights Scrum – Sprint 4 – Sprint Retrospective

### 1. Resumen Ejecutivo

El equipo ha alcanzado un nivel de madurez operativa y colaborativa notable en el Sprint 4, evidenciado por la consolidación de prácticas de Integración/Entrega Continua (CI/CD) y el trabajo en enjambre (_Swarming_). Han superado las fricciones de comunicación de Sprints anteriores, logrando una sincronización efectiva que permite a los roles de apoyo (_backups_) asumir responsabilidades sin fricción.

Sin embargo, el equipo se enfrenta a un desafío sociotécnico avanzado: la pérdida de control arquitectónico frente a la Inteligencia Artificial. La transición hacia un desarrollo basado en agentes (Spec-Driven Development vía OpenCode) ha generado un anti-patrón de "confianza ciega", donde la amnesia temporal de los LLMs (compactación de tokens) provoca la sobreescritura de Incrementos previamente aprobados y la omisión de validaciones críticas. La decisión de adaptar la práctica extrema de _Pair Programming_ para auditar a la IA demuestra un empirismo excepcional y una profunda comprensión de la ingeniería de software moderna.

### 2. Insights Principales

**Insight 1: Adaptación del "Pair Programming" al paradigma de IA**

- **Descripción:** El equipo ha reconocido que la generación masiva de código por IA requiere un nuevo nivel de inspección. Han decidido implementar una variación del _Pair Programming_ donde un humano actúa como _Driver_ (orquestando la IA) y otro como _Navigator/Reviewer_ (auditando el contexto arquitectónico).
- **Evidencia observada:** Propuesta aceptada: _"Adoptar la práctica de pair programming para la revisión de código generado con IA... para que uno mismo no sea juez y parte."_
- **Impacto en el equipo/proyecto:** Convierte a la IA de un "desarrollador autónomo y riesgoso" a una herramienta controlada, protegiendo la calidad del Incremento y mitigando la deuda técnica.
- **Recomendación ágil:** Formalizar este acuerdo incluyéndolo explícitamente en la **Definición de Terminado (DoD)**. Ningún código generado por IA debe integrarse a la rama principal sin la revisión (Pull Request/Code Review) de un "Navigator" humano.

###

**Insight 2: El Anti-patrón de la "Confianza Ciega" y omisión de Calidad (DoD)**

- **Descripción:** La velocidad de la IA ha seducido al equipo para saltarse fundamentos de ingeniería, asumiendo que las respuestas de la IA son estructuralmente perfectas, lo que introduce vulnerabilidades y errores lógicos.
- **Evidencia observada:** _"Dejar de asumir que la IA siempre devolverá la estructura de datos perfecta. Debemos dejar de omitir las validaciones de formato..."_
- **Impacto en el equipo/proyecto:** Ingreso de defectos al sistema que rompen la integración, requiriendo múltiples revisiones y desperdiciando el tiempo ganado por el uso de la IA.
- **Recomendación ágil:** Implementar un enfoque de _Test-Driven Development (TDD)_ estricto en las validaciones. Las pruebas unitarias de formato deben fallar intencionalmente hasta que el código (humano o de IA) demuestre que maneja los casos de error correctamente.

###

**Insight 3: Pérdida de contexto del Producto por "Amnesia de la IA"**

- **Descripción:** Emilio (Backend) realizó un diagnóstico técnico brillante sobre por qué la IA destruye código funcional: al distribuir el trabajo entre varios desarrolladores (_backups_), las sesiones de los agentes pierden el historial y, debido al límite de tokens (compactación), la IA "olvida" los _endpoints_ construidos en Sprints pasados.
- **Evidencia observada:** Emilio: _"A medida que ya se iba adaptando hacia otras HU... la memoria que se establecía de cada agente se iba perdiendo y por eso se establecía el sobreescrito del código."_
- **Impacto en el equipo/proyecto:** Regresión constante del producto. Funcionalidades de Sprints anteriores se rompen, violando el principio Scrum de mantener un Incremento potencialmente entregable en todo momento.
- **Recomendación ágil:** La arquitectura de la aplicación debe protegerse mediante pruebas de regresión automatizadas en el pipeline de CI/CD. Si la IA elimina un _endpoint_ antiguo, el pipeline debe bloquear el despliegue inmediatamente.

###

**Insight 4: Silos de Discovery y diseño basado solo en "Happy Paths"**

- **Descripción:** Los prototipos de UX/UI se están diseñando y aprobando considerando únicamente el escenario ideal, dejando vacíos sobre cómo debe reaccionar el sistema ante errores o acciones atípicas del usuario.
- **Evidencia observada:** _"No profundizar en todos los escenarios de comportamiento en el prototipo. Ejemplo: cuando se envía una reseña sin comentario."_
- **Impacto en el equipo/proyecto:** Genera bloqueos o suposiciones incorrectas durante el desarrollo (Front/Back) que resultan en una mala experiencia de usuario.
- **Recomendación ágil:** Fomentar la práctica de los **"Tres Amigos" (Negocio/UX, Desarrollo, QA)** o el _Shift-Left Testing_. El QA y los desarrolladores deben revisar y cuestionar el prototipo antes de que pase a la columna de desarrollo, buscando activamente los flujos alternativos y de error.

###

**Insight 5: Madurez en Colaboración (_Swarming_) y CI/CD**

- **Descripción:** A diferencia del Sprint 2, donde los _backups_ no sabían qué hacer, el equipo ahora se autoorganiza fluidamente para cubrirse mutuamente y utilizar integraciones continuas.
- **Evidencia observada:** _"Compromiso y colaboración de los componentes en el apoyo de desarrollo... uso riguroso de pipelines de CI/CD para los despliegues."_
- **Impacto en el equipo/proyecto:** Minimiza el impacto del factor "ausencia", reduce los silos de conocimiento y acelera el _Time to Market_ de la resolución de bugs.
- **Recomendación ágil:** Celebrar y mantener esta práctica. El Scrum Master debe asegurar que esta fluidez se refleje de manera transparente en el tablero para proteger la carga de trabajo del equipo.

### 3. Patrones Detectados

- **Inspección Técnica Profunda:** El equipo no se queda en quejas superficiales ("la IA falló"); analizan la raíz sistémica ("el gestor de memoria compactó los tokens").
- **Evolución del Trabajo en Enjambre:** Ha pasado de ser una idea a una realidad operativa ("apoyo por parte de los componentes de backup").
- **Liderazgo Facilitador Directivo:** El Scrum Master (Julio) sigue dirigiendo fuertemente la mecánica de la ceremonia (agrupar, pedir votos, sugerir soluciones), lo que indica que el equipo, aunque maduro técnicamente, aún confía la facilitación del proceso a una figura de autoridad.
- **Ausencia de Documentación Asíncrona:** Patrón emergente de falta de documentación para despliegues a producción, síntoma de un equipo enfocado excesivamente en la codificación rápida.

### 4. Evaluación de Madurez Scrum

| Dimensión               | Valoración       | Justificación                                                                                                                                           |
| :---------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Transparencia**       | **Alta**         | Reconocimiento abierto de los fallos técnicos, omisión de validaciones y problemas con el código sobreescrito.                                          |
| **Inspección**          | **Muy Alta**     | Diagnóstico avanzado del comportamiento de los agentes IA y su impacto en la arquitectura de la aplicación.                                             |
| **Adaptación**          | **Alta**         | Creación proactiva de una nueva regla de trabajo (Pair Programming para IA) para contrarrestar el problema inspeccionado.                               |
| **Autoorganización**    | **Media - Alta** | Altamente autoorganizados en la asignación de tareas operativas y _swarming_, pero dependientes del facilitador para la estructura de mejora continua.  |
| **Colaboración**        | **Alta**         | Propuestas transversales, como involucrar a QA y Devs en el área de Discovery (UX/UI).                                                                  |
| **Orientación a valor** | **Alta**         | Preocupación genuina por proteger las funcionalidades previamente entregadas (evitar regresiones) y asegurar casos borde en la experiencia del usuario. |

### 5. Riesgos Identificados

| Riesgo                                          | Evidencia en la Transcripción                                          | Consecuencia Potencial                                                                                                         |
| :---------------------------------------------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **1. Regresión del Incremento**                 | "La IA... inhabilitaba endpoints de anteriores HU."                    | Pérdida de valor ya entregado. Rechazo del producto por parte de los stakeholders al ver que lo que funcionaba ya no funciona. |
| **2. Vulnerabilidades por falta de validación** | "Dejar de omitir las validaciones en formato."                         | Sistemas inestables, fallos de seguridad (inyecciones), o corrupción de la base de datos por datos mal formados.               |
| **3. Bloqueos por dependencias de despliegue**  | "Falta de documentación para el despliegue en entornos de producción." | Creación de un "Cuello de botella de DevOps". Solo una persona sabrá cómo desplegar el proyecto.                               |

### 6. Oportunidades de Mejora (Priorizadas para próximos Sprints)

1.  **Actualizar la Definition of Done (DoD):** Incluir de forma obligatoria que todo código (especialmente el generado por IA) debe ser revisado por un humano distinto al que operó el _prompt_, verificando que no elimine lógica previa y contenga validaciones de entrada.
2.  **Shift-Left Testing en Discovery:** Implementar una regla de "Revisión de Casos Borde". El diseño de Figma/Magic Patterns no puede entrar a la Sprint Planning si QA y Backend no han revisado y cuestionado los "caminos tristes" (errores, desconexiones, campos vacíos).
3.  **Documentación Continua de Despliegues:** Crear un _Working Agreement_ donde cualquier cambio en la infraestructura o CI/CD deba ir acompañado de una actualización en un archivo `README.md` o Wiki, evitando la centralización del conocimiento de despliegue.

### 7. Conclusión General

El equipo ha ingresado claramente en la fase de **Alto Rendimiento (Performing)** desde una perspectiva de ingeniería colaborativa. Los problemas de indisciplina y aislamiento de Sprints anteriores han desaparecido, dando paso a debates arquitectónicos de alto nivel.

Es fascinante observar cómo este equipo está siendo pionero en la adaptación de marcos ágiles a la era de la Inteligencia Artificial generativa. Han descubierto empíricamente que la IA, si bien es un codificador hiper-veloz, es un arquitecto con "amnesia", carente de visión sistémica a largo plazo. Su decisión de utilizar prácticas ágiles clásicas (como el _Pair Programming_ y el trabajo interfuncional en el prototipado) como un "arnés de seguridad" para controlar a la inteligencia artificial, demuestra un nivel superlativo de empirismo y madurez profesional. El desafío final será documentar estas prácticas y estandarizarlas en sus artefactos (DoD) para garantizar la escalabilidad del proyecto.
