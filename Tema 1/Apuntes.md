# Tema 1

### 26/09/2018

**Preguntas más importantes del tema**:

4, 8, 9, 10

## Introducción

Disciplina  relacionada  con  el 
diseño,  la  implementación  y evaluación de  sistemas  informáticos  interactivos para  uso  de  seres humanos  y  con  el estudio  de  los  fenómenos  más importantes  con los  que  están relacionados. 

El estudio general que hay detrás de una aplicación web para que resulte atractiva para el usuario.

**Buscar psicología con los colores**

### 27/09/2018

- Landing Page: Página web que se usa con un objetivo específico (Presentar concierto y comprar entrada). Tiene un tiempo de vida corto en comparación con un sitio web o un microsite.
- Microsite: Sitio web que sustituye las páginas web por secciones de una sola página web.
- Site: Sitio web.
<hr>

## Práctica 1: Restaurante
<hr>

**tip: menos es más. Hay que intentar descansar la vista**

**Microsite con varias secciones:**

- **Fluid Layout - Tema de CSS3**

- Entrada: Main. Información mínima. Foto o fotos espectaculares. Logo. Nombre. Slogan, nav.
- Presentar el restaurante: Edificio en sí. Fotos del sitio. Reseña histórica...
- Chefs: Cocina, reseña sobre el chef, inspiraciones, etc.
- Carta: Presentar las especialidades del restaurante.
- Contacto: Dónde está, como llegar, tripadvisor, etc.
- Footer: Información extra -> Copiar nav principal

**Para nota:**

- Scroll progresivo una vez clicado un elemento en el nav (JQuery o JavaScript).
- Simular un sistema de reservas en el apartado de _Contacto_.

**Qué tenemos que entregar**

- Carpeta con Apellidos + Nombre + Practica 1 (Comprimida)
    - index.html
    - assets
        - imágenes
        - style.css
        - script.js 

- No mandar la carpeta con recursos inútiles

- Formatos de imagen permitidos:
    - jpg/jpeg
    - png
    - svg
    - gif

- Evitar:
    - Más de **cuatro o cinco** colores
    - Más de **dos o tres** fuentes: [google fonts](https://fonts.google.com/)
        - Una Fantasy para el nombre del restaurante y ya
        - Una para títulos
        - Otra para textos
    - Fuentes que recuerden a años 90
    - Párrafos de más de 70 caracteres

**Resumen de Familias tipográficas**

- Sans Serif => Sin sérifa -> El pie de la A -> **Verdana**
- Serif => Con sérifa -> **Times New Roman**
- monospace => Todos los caracteres ocupan el mismo tamaño -> **Consola**
- Fantasy => El resto de fuentes

**Tutorial google fonts**

Seleccionar fuentes tal cual y cuando se añaden abajo abrimos el desplegable y pulsamos **@import**:

Copiamos el código interior de ```<style>``` y lo metemos dentro del archivo ```style.css```

```
@import url('https://fonts.googleapis.com/css?family=Kodchasan:300|Krub');
```

Si queremos descargar, pulsamos el botón de descarga dentro del desplegable y descargaremos un ```.zip``` con todos los tipos de fuente. 

No es recomendable por ahora porque no sabemos ligar la fuente con la página aún.

    