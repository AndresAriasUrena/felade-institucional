# Deployment Guide - FELADE Institucional

## Static Export Configuration

El sitio web FELADE ha sido configurado para exportación estática usando Next.js static export feature. Esto permite subirlo a cualquier hosting que soporte archivos estáticos.

## Build Process

### 1. Configuración Actualizada

El archivo `next.config.mjs` ha sido configurado con:
```javascript
{
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  }
}
```

### 2. Comando de Build

```bash
npm run build
```

Este comando:
- Compila el sitio completo
- Genera páginas estáticas para todas las rutas
- Crea el directorio `out/` con todos los archivos necesarios
- Incluye todas las imágenes y assets

### 3. Estructura de Archivos Exportados

```
out/
├── index.html (página principal)
├── images/ (todas las imágenes)
│   ├── hero/ (imágenes del slider)
│   ├── icons/ (logos FELADE, UPAZ, etc.)
│   ├── backgrounds/ (fondos parallax)
│   └── partners/ (logos de instituciones)
├── _next/ (archivos JS y CSS)
├── certificaciones/
├── contacto/
├── servicios/
├── sobre-nosotros/
└── [otras páginas]
```

## Características del Sitio Exportado

### ✅ Incluido en la Exportación
- ✅ Todas las páginas estáticas (13 rutas)
- ✅ Componentes React compilados
- ✅ Imágenes optimizadas (71MB total)
- ✅ CSS y JavaScript minificado
- ✅ Logos institucionales (FELADE, UPAZ)
- ✅ Imágenes de fondo para parallax
- ✅ Iconografía completa
- ✅ Animaciones CSS y JavaScript
- ✅ Responsive design
- ✅ SEO metadata

### ⚠️ Limitaciones de Static Export
- ❌ Server-side redirects (configurados en `next.config.mjs`)
- ❌ Security headers (configurados en `next.config.mjs`)
- ❌ API routes (no aplicable para este sitio)
- ❌ Image optimization automática (images unoptimized: true)

## Deployment Options

### Opción 1: Hosting Tradicional
1. Comprimir el directorio `out/`
2. Subir vía FTP/SFTP al hosting
3. Extraer en el directorio público (public_html, www, etc.)

### Opción 2: Servicios de CDN
- **Netlify**: Drag & drop del directorio `out/`
- **Vercel**: `vercel --prod` desde el directorio
- **GitHub Pages**: Push del contenido de `out/` a rama gh-pages
- **Firebase Hosting**: `firebase deploy` configurando `out/` como public

### Opción 3: Cloud Storage
- **AWS S3**: Static website hosting
- **Google Cloud Storage**: Website configuration
- **Azure Blob Storage**: Static website feature

## Performance

### Métricas del Build
- **Páginas generadas**: 13 páginas estáticas
- **Tamaño total**: 71MB
- **Archivo principal**: 135KB (First Load JS)
- **Tiempo de build**: ~3 segundos

### Optimizaciones Aplicadas
- Minificación automática de CSS/JS
- Tree shaking para código no utilizado
- Compresión de imágenes (JPEG 80% quality)
- Lazy loading de componentes
- Optimización de fuentes

## Verificación Post-Deployment

### Checklist de Verificación
- [ ] Página principal carga correctamente
- [ ] Navegación entre páginas funciona
- [ ] Imágenes del hero slider se muestran
- [ ] Logos FELADE y UPAZ se visualizan
- [ ] Animaciones parallax funcionan (desktop)
- [ ] Enlaces externos funcionan (certificaciones)
- [ ] Formularios de contacto funcionan (si aplicable)
- [ ] Responsive design en móvil
- [ ] Velocidad de carga aceptable

### Enlaces Importantes a Verificar
- `https://ciplad.felade.com/#inscripciones`
- `https://cimar.felade.com/#inscripciones`
- `https://cibca.felade.com/#inscripciones`
- `https://worldcomplianceforum.com`
- `https://www.upeace.org`

## Troubleshooting

### Problema: Imágenes no cargan
- Verificar que el directorio `images/` esté completo
- Comprobar paths relativos en el hosting

### Problema: CSS no aplica
- Verificar que `_next/` esté presente
- Comprobar configuración de MIME types en servidor

### Problema: Navegación no funciona
- Verificar `trailingSlash: true` en configuración
- Comprobar rewrite rules del servidor

## Contact Information

Para soporte técnico del deployment:
- Repositorio: https://github.com/AndresAriasUrena/felade-institucional
- Build más reciente: c02f751

---

**Nota**: Este sitio está listo para production deployment. Todas las optimizaciones y configuraciones necesarias han sido aplicadas.