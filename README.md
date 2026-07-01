# Litus Legal Services

Mockup de la página principal (homepage) para **Litus Legal Services**, bufete en Tamarindo, Guanacaste, Costa Rica. Especializado en derecho inmobiliario y traslado de tierras en la costa del Pacífico.

Sitio estático de una sola página (`index.html`), sin backend. Solo diseño y maquetación para aprobación del cliente.

## Características

- **Bilingüe ES / EN** con toggle en el header (y en el menú móvil).
- **Modo día / noche** (sol / luna) con el mismo estilo de toggle segmentado; el modo día usa tonos arena cálidos y el nocturno el turquesa oscuro del mar. Preferencia guardada en `localStorage`.
- **Totalmente responsive**, con menú móvil (hamburguesa) a pantalla completa.
- **Scrollspy**: resalta en el header la sección visible al desplazarse.
- Secciones: Hero, franja de confianza, Quiénes somos, Servicios, Proceso, Equipo, Testimonios (con banderas por nacionalidad), Calendario de citas, Contacto y footer.
- Botón flotante de WhatsApp.
- Tipografías Cormorant Garamond + Inter, íconos y logo en SVG en línea.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo (Vite) en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # previsualiza el build
```

## Notas

- Las fotos de las personas son marcadores de ejemplo ("FOTO PROFESIONAL"); reemplazar por fotos reales con licencia antes de producción.
- Es un mockup de diseño: los formularios, calendario y enlaces son solo visuales, sin funcionalidad de backend.
