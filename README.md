# Landing Page Viaservin - Astro

Este proyecto es una **Landing Page** desarrollada con [Astro](https://astro.build), diseñada para la empresa Viaservin. Incluye secciones como banners, servicios, equipo, clientes, certificaciones, formulario de contacto y un banner de cookies responsivo que se muestra en todas las páginas.

## 🚀 ¿Qué hace este proyecto?
- Presenta la información de la empresa Viaservin de manera profesional y moderna.
- Incluye un carrusel de servicios, equipo, clientes y certificaciones.
- Integra un formulario de contacto funcional.
- Muestra un banner de cookies responsivo y configurable en todas las páginas.
- Diseño completamente responsive y optimizado para SEO.

## 📁 Estructura del Proyecto

```
/
├── public/                # Archivos públicos (imágenes, favicon, PDFs, etc.)
├── src/
│   ├── components/        # Componentes reutilizables (Navbar, Footer, WhatsAppButton, etc.)
│   ├── layouts/           # Layout global (Layout.astro)
│   └── pages/             # Páginas principales (index.astro, politicas.astro, etc.)
├── package.json           # Dependencias y scripts del proyecto
└── README.md              # Este archivo
```

## ⚙️ Configuración y dependencias
- **Astro** como framework principal.
- **TailwindCSS** para estilos utilitarios (si está configurado en tu proyecto).
- Integración de scripts para el banner de cookies y Google Analytics.
- Archivos PDF y recursos en la carpeta `/public/assets/docs`.

## 🧑‍💻 ¿Cómo correr el proyecto?

1. **Instala las dependencias:**
   ```sh
   pnpm install
   # o
   npm install
   # o
   yarn install
   ```

2. **Inicia el servidor de desarrollo:**
   ```sh
   pnpm dev
   # o
   npm run dev
   # o
   yarn dev
   ```
   El sitio estará disponible en [http://localhost:4321](http://localhost:4321)

3. **Construye para producción:**
   ```sh
   pnpm build
   # o
   npm run build
   # o
   yarn build
   ```
   Los archivos finales estarán en la carpeta `/dist`.

4. **Previsualiza la build de producción:**
   ```sh
   pnpm preview
   # o
   npm run preview
   # o
   yarn preview
   ```

## 📝 Notas adicionales
- Puedes modificar los textos, imágenes y secciones editando los archivos en `src/pages` y `src/components`.
- El banner de cookies está en el layout global (`src/layouts/Layout.astro`) y se muestra en todas las páginas.
- Para agregar nuevas páginas, crea archivos `.astro` en la carpeta `src/pages`.
- Si usas TailwindCSS, asegúrate de tener el archivo de configuración correspondiente.

## 📚 Más información
- [Documentación oficial de Astro](https://docs.astro.build/es/)
- [Guía de estructura de proyectos Astro](https://docs.astro.build/es/core-concepts/project-structure/)

## ☁️ Imágenes con Cloudinary

Este proyecto utiliza [Cloudinary](https://cloudinary.com/) para alojar y servir las imágenes de manera optimizada y rápida. Todas las imágenes (banners, servicios, equipo, clientes, etc.) se cargan mediante URLs directas de Cloudinary, lo que permite:

- Mejor rendimiento y carga más rápida de la web.
- Optimización automática de imágenes para diferentes dispositivos.
- Facilidad para actualizar imágenes sin necesidad de subirlas al repositorio.

### ¿Cómo cambiar una imagen?
1. Sube tu nueva imagen a tu cuenta de Cloudinary.
2. Copia la URL pública que te da Cloudinary.
3. Reemplaza la URL correspondiente en el archivo `.astro` donde se use la imagen (por ejemplo, en `src/pages/index.astro`).

**Ejemplo de URL de Cloudinary:**
```
https://res.cloudinary.com/dzgixneim/image/upload/v1747955073/banners/emfzw7s2q5andpaoy5da.jpg
```

Puedes usar Cloudinary gratis con ciertas limitaciones o con planes de pago para más capacidad y funcionalidades.

## 📥 Cómo clonar el repositorio

Para obtener una copia local de este proyecto, ejecuta en tu terminal:

```sh
git clone https://github.com/viaservin/landingpage.git
cd landingpage
```

Luego, sigue las instrucciones para instalar dependencias y correr el proyecto.

## 🌐 Sitio en producción

El sitio está desplegado y disponible en producción en:

[https://www.viaservin.com/](https://www.viaservin.com/)

---

**Desarrollado con Astro para Viaservin**

