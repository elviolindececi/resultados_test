# El Violín de Ceci — Results Dashboard

Dashboard para reuniones: permite seleccionar arquetipo principal/secundario e intensidad musical y ver el mismo resultado completo del test (incluye análisis + setlist + add-on por intensidad).

## Cómo usar
1. Abrir la web (GitHub Pages).
2. Elegir:
   - Arquetipo principal
   - Arquetipo secundario
   - Intensidad
3. (Opcional) Ajustar importancia de música / venue / invitados.
4. Click en **Ver resultado**.

## Link compartible
Botón **Generar link compartible** crea un link con parámetros:
- p = arquetipo principal (A–E)
- s = arquetipo secundario (A–E)
- i = intensidad (M1–M3)
- mi = music importance (0–10)

Ejemplo:
`...?p=A&s=B&i=M2&mi=8`

## Deploy en GitHub Pages
1. Crear repo y subir archivos.
2. Settings → Pages → Source: Deploy from a branch
3. Branch: main / root
4. Guardar. Tu URL quedará disponible en Pages.
