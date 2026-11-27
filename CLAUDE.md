# Instrucciones para Claude

@AGENTS.md

## Vault de Obsidian: contexto empresarial

`Astodev/` es un vault de Obsidian con la documentación interna de Astodev. Es la fuente principal de contexto del negocio y está ignorado en git: nunca lo agregues a un commit ni copies su contenido a archivos versionados o públicos sin confirmación.

Índice (se carga en cada sesión):

@Astodev/00-Indice.md

### Cómo usarlo

1. **Antes de actuar**, revisa en `Astodev/` las notas relacionadas con la tarea (usa el mapa del índice o busca con grep). Esto aplica a código, contenido, ventas, propuestas y decisiones.
2. Si falta un dato o el vault contradice el código o la web pública, dilo y pregunta antes de asumir.
3. Cuando el propietario confirme o cambie información del negocio, actualiza la nota correspondiente y, si es una nota nueva, enlázala desde `00-Indice.md`.
4. Mantén `00-Indice.md` breve: es un mapa, no el detalle.
5. Usa enlaces de Obsidian (`[[Carpeta/Nota]]`) entre notas.

## Regla obligatoria: Haiku para lectura en fuerza bruta

Toda tarea que consista en **leer o extraer mucha información de forma repetitiva** usando el computador del propietario debe delegarse a un subagente con `model: "haiku"`. Esto incluye:

- Recorrer chats de WhatsApp, correos, CRMs, hojas de cálculo o cualquier app en el navegador.
- Scraping de páginas, listados, perfiles o directorios, uno por uno.
- Copiar datos a CSV, tablas u otros formatos estructurados.
- Revisar en bloque muchos archivos para encontrar o clasificar información.

El modelo principal (Opus/Sonnet) solo:

1. Planifica la extracción y define el esquema exacto de salida (por ejemplo, columnas del CSV).
2. Lanza el o los subagentes Haiku con instrucciones claras, el formato de salida y la ruta del archivo.
3. Revisa una muestra del resultado y hace el análisis, las conclusiones y las recomendaciones.

Reglas del subagente Haiku: solo lee, nunca envía mensajes, hace clic en enviar, borra, archiva ni cambia nada en la app; guarda los datos crudos con nombres o teléfonos únicamente en `Astodev/_fuentes/` (ignorado en git); informa cuántos elementos procesó y cuáles no pudo leer.
