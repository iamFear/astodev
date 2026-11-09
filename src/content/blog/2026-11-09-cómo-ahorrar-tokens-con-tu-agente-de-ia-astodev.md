---
title: Cómo ahorrar tokens con tu agente de IA | Astodev
description: >
  Aprende a reducir el contexto, las respuestas y las acciones innecesarias en
  tu agente de IA con 10 hábitos prácticos y una plantilla lista para copiar.
date: 2026-11-09T08:50:00.000-05:00
author: Daniel Burgoa
tags:
  - agentes de IA tokens productividad consultoría tecnológica
draft: false
---
Preparar una propuesta con IA puede terminar en una conversación llena de archivos, versiones y correcciones. A veces, el agente sigue trabajando sobre información que ya no necesitas o genera páginas para resolver algo que cabía en un párrafo.

Si utilizas ChatGPT, Claude, Gemini u otro agente, puedes empezar por definir mejor el encargo y revisar qué información le estás pidiendo procesar. Estos diez hábitos te ayudarán a identificar trabajo innecesario y a probar mejoras en tareas reales. 🧠

## Qué son los tokens y por qué importa el contexto

Los tokens son las unidades con las que los modelos procesan texto. Pueden representar parte de una palabra, una palabra completa o un signo. Su cantidad cambia según el modelo y el idioma; contar palabras no da una medida exacta.

También cuenta lo que el modelo genera. En algunos modelos hay razonamiento interno que consume tokens aunque la respuesta visible sea corta. La [explicación de OpenAI sobre los tokens](https://help.openai.com/en/articles/4936856-understanding-and-counting-tokens) distingue esas categorías.

Piensa en el contexto como una mochila de trabajo. Conviene llevar los documentos y las decisiones que necesita la tarea actual. Cargar material de otros encargos puede añadir volumen sin aportar una respuesta mejor.

Hay tres conceptos que conviene distinguir:

| Concepto | Qué representa |
| --- | --- |
| Tokens | La información que procesa o genera el modelo. |
| Ventana de contexto | La cantidad de información con la que puede trabajar en una solicitud. |
| Límite de uso | La cuota de uso disponible durante un periodo, según la plataforma y el plan. |

Una conversación nueva puede reducir el contexto innecesario. Abrirla no reinicia por sí solo las cuotas de la cuenta. Claude explica esta diferencia en su [guía de límites de uso y de longitud](https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work).

## 10 hábitos para aprovechar mejor tu agente de IA

### 1. Define cómo debe verse el trabajo terminado

Antes de enviar la instrucción, decide qué resultado necesitas revisar. «Ayúdame con mis ventas» deja muchas decisiones abiertas. Un encargo concreto orienta mejor el trabajo:

> Redacta un correo para enviar una cotización a un cliente que ya conoce nuestro servicio. El objetivo es que confirme si desea avanzar.

Añade el destinatario y el propósito cuando sean relevantes. Así puedes evaluar la primera respuesta con criterios claros.

### 2. Comparte el contexto que hace falta

Selecciona el archivo, la sección o los datos relacionados con el encargo. Para corregir la descripción de un servicio, quizá baste con ese texto y una explicación del público.

Conserva los antecedentes que cambian la respuesta. Si un dato depende de otras partes del documento, inclúyelas o permite que el agente las consulte. Recortar información útil puede provocar errores y nuevas rondas de trabajo.

### 3. Pide una extensión y un formato útiles

Indica si necesitas un resumen, una tabla o una versión lista para enviar. Puedes pedir, por ejemplo:

> Resume este informe en cinco puntos. Incluye las decisiones pendientes y una conclusión de máximo 60 palabras.

Es una orientación sobre el resultado visible, no una medición exacta de tokens. Pedir menos texto innecesario es una de las recomendaciones de [OpenAI para optimizar respuestas](https://developers.openai.com/api/docs/guides/latency-optimization).

### 4. Agrupa las correcciones del mismo encargo

Si ya sabes que quieres cambiar el tono, la extensión y el cierre de un correo, reúne esos ajustes en un mensaje:

> Hazlo más cercano, limita el texto a 80 palabras y termina con una invitación a confirmar la cita.

Agrupa cambios relacionados. Cuando una decisión depende del resultado anterior, trabajar por etapas sigue siendo útil. Anthropic recomienda planificar y [reunir solicitudes relacionadas](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) para reducir intercambios evitables.

### 5. Pide cambios en la parte que necesitas

Un pequeño ajuste puede terminar en una reescritura completa si el alcance queda abierto. Señala qué parte debe cambiar y qué debe conservarse:

> Reescribe únicamente la sección de preguntas frecuentes. Conserva los datos y el resto del documento. Devuelve solo la sección revisada.

En un agente que edita archivos, especificar el archivo y el apartado también facilita revisar el cambio.

### 6. Cambia de conversación cuando cambies de tarea

Revisar una propuesta y organizar las vacaciones son encargos distintos. Separarlos ayuda a mantener el contexto enfocado.

Si necesitas continuar un trabajo largo en otro chat, lleva un resumen breve con el objetivo, las decisiones confirmadas y el siguiente paso. Revisa que ese resumen conserve los datos indispensables. Dentro de una misma tarea, puedes referirte a información anterior en lugar de copiarla otra vez.

### 7. Organiza los documentos que consultas con frecuencia

Cuando la herramienta permita trabajar con proyectos o colecciones de archivos, guarda allí las referencias estables. Mantén las instrucciones generales breves y retira material que ya no corresponda al trabajo.

En Claude, los Proyectos pueden reutilizar contenido en caché con un menor impacto en los límites mientras esa caché siga vigente. En una integración por API, el tratamiento y los precios dependen del proveedor.

La caché puede reducir costes de reutilización aunque el contenido siga formando parte de la entrada. Por eso, conviene distinguir ahorro económico y reducción de tokens. La [documentación de caché de Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) explica esa diferencia.

### 8. Ajusta el esfuerzo a la complejidad

Corregir puntuación y resolver un problema técnico complejo requieren trabajos distintos. Si tu herramienta ofrece un selector de modelo o de esfuerzo, prueba la opción que resuelva bien cada tarea.

Evalúa el resultado antes de adoptar un nivel menor para todo. Un ajuste insuficiente puede producir errores y repeticiones. Google documenta este equilibrio entre razonamiento y consumo en su [guía de pensamiento de Gemini](https://ai.google.dev/gemini-api/docs/thinking). Los controles disponibles varían entre productos.

### 9. Da a las herramientas un propósito y un punto de parada

Un agente puede buscar, leer archivos y ejecutar acciones en varios pasos. Define dónde debe trabajar y cuándo debe detenerse:

> Revisa los dos archivos adjuntos y compara sus condiciones comerciales. Entrega una tabla con las diferencias. Si falta un dato indispensable, indícalo y detente antes de asumirlo.

Para una corrección de estilo sobre un texto pegado, puedes limitar el encargo a ese contenido. Para comprobar información actual, permite la búsqueda y pide fuentes. El alcance debe responder a la necesidad del trabajo.

### 10. Compara el consumo por tarea terminada

Evalúa cuánto trabajo cuesta conseguir una respuesta que puedas usar. En una API, revisa los datos de uso y facturación. En una aplicación con suscripción, utiliza el indicador que ofrezca, sin convertir porcentajes de cuota en tokens exactos.

Compara tareas parecidas con el mismo modelo y registra las correcciones necesarias. Una primera respuesta breve puede salir poco útil y exigir varios intentos. Conserva el ajuste que mejore el conjunto del trabajo y cumpla tus criterios de calidad.

## Una plantilla para tu próximo encargo 📋

Copia esta estructura y completa únicamente los apartados que aporten información:

```text
Necesito: [resultado concreto].
Lo utilizaré para: [destinatario o propósito].
Contexto y fuentes: [datos o archivos relevantes].
Entrega: [formato y extensión orientativa].
Alcance: [qué debe cambiar y qué debe conservarse].
Herramientas: [cuáles necesita la tarea y para qué].
Si falta información indispensable: indícala antes de asumirla.
Finaliza cuando: [criterios para considerar el trabajo terminado].
```

Por ejemplo, para preparar una respuesta comercial:

> Necesito responder a una solicitud de cotización. Usa la información del servicio que adjunto. Entrega un correo cercano de máximo 100 palabras. Conserva los precios y condiciones del documento. Si falta un dato necesario, señálalo. Finaliza con una invitación a confirmar el siguiente paso.

Empieza por un encargo que repitas cada semana. Usa la plantilla, revisa el resultado y compara el trabajo que te exige llegar a una versión útil. El ahorro dependerá de la tarea y de cómo tu herramienta gestione el contexto, el razonamiento y sus funciones.

**Copia la plantilla y pruébala en tu próxima tarea con IA.**

*Astodev · Tecnología que hace crecer tu negocio.*
