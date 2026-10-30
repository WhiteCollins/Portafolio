# Portafolio · Eric Alberto Jiménez Collins

Portafolio personal en React + Vite + Tailwind CSS v4, en español e inglés, con tres paletas inspiradas en Code Geass que el visitante puede cambiar:

| Paleta | Estilo |
|---|---|
| **Zero** (por defecto) | Modo oscuro, púrpura real, rojo Geass y detalles dorados |
| **Britannia** | Modo claro, crema imperial, azul de la armada y oro |
| **C.C. & Guren** | Cabina táctica: teal profundo, verde C.C. y carmesí |

## Comandos

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # verifica tipos y genera dist/
npm run lint      # oxlint
npm run preview   # sirve el build
```

## Dónde editar

| Para cambiar | Archivo |
|---|---|
| Textos en español / inglés | `src/i18n/es.ts`, `src/i18n/en.ts` (admiten `**negrita**` y `[enlace](https://…)`) |
| Proyectos, tecnologías, cifras y enlaces | `src/data/profile.ts` |
| Colores, fuentes y animaciones de cada paleta | `src/index.css` |

La paleta se puede enlazar directamente: `/#zero`, `/#britannia` o `/#guren`. El idioma y la paleta elegidos se recuerdan en el navegador del visitante.

## Animaciones

- Entrada del hero en cascada, nombre que se "descifra" y sigilo Geass que se despliega.
- Cambio de paleta con revelado circular (View Transitions API).
- Secciones que aparecen al hacer scroll y barra de progreso de lectura (animaciones ligadas al scroll).
- Contadores del proyecto principal y tarjetas con foco que sigue al cursor e inclinación.

Las animaciones ligadas al scroll y las View Transitions funcionan en Chrome y Edge; en otros navegadores el contenido se muestra sin animar. Con "reducir movimiento" activado en el sistema, todo queda estático.

## Despliegue

Vercel detecta Vite automáticamente: comando `npm run build`, carpeta de salida `dist`.
