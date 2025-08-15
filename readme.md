# Mi Lista de Tareas Diarias 📝

Esta es una aplicación web simple, pero muy útil para gestionar las tareas diarias. Permite agregar, priorizar, marcar como completadas y eliminar tareas de una manera intuitiva y visualmente agradable.

## Características principales de uso.

* **Agregar Tareas**: Añada nuevas tareas fácilmente a través de un campo de texto.
* **Priorización**: Asigne una de tres prioridades a cada tarea: **Baja**, **Moderada** o **Urgente**. Cada prioridad tiene un color distintivo para una rápida identificación.
* **Marcar como Completada**: Use un `checkbox` para marcar una tarea como realizada. Las tareas completadas se tachan visualmente.
* **Eliminar Tareas**: El botón de eliminar se activa **sólo** cuando una tarea ha sido marcada como completada, previniendo borrados accidentales.
* **Registro de Fecha**: Cada tarea guarda y muestra automáticamente la fecha en que fue creada.
* **Interfaz Limpia**: Los encabezados de la lista de tareas aparecen solamente cuando hay tareas en la lista.
* **Diseño Responsivo**: La aplicación se adapta a diferentes tamaños de pantalla, funcionando bien tanto en computadoras como en dispositivos móviles.

## Tecnologías Utilizadas

Este proyecto fue elaborado utilizando tecnologías web fundamentales:

* **HTML5**: Para la estructura y el contenido de la aplicación.
* **CSS3**: Para el diseño visual, incluyendo layout con Flexbox, estilos para prioridades y diseño responsivo (`@media queries`).
* **JavaScript (Vanilla)**: Para toda la lógica interactiva, como la manipulación del DOM, gestión de eventos y manejo del estado de las tareas.

## Cómo poder utilizar la aplicación en tu dispositivo.

Para ejecutar este proyecto en tu máquina local, sigue estos sencillos pasos:

1.  **Descarga los archivos**: Descarga los archivos desde el repositorio y guárdalos en tu dispositivo: `index.html`, `script3.js` y `style3.css`.

2.  **Organiza los archivos**: Crea una estructura de carpetas como la siguiente para que las rutas funcionen correctamente:
    ```bash
    /tu-proyecto
    ├── index.html
    ├── assets/
    │   ├── css/
    │   │   └── style3.css
    │   └── js/
    │       └── script3.js
    └── readme.md
    ```

3.  **Abre la aplicación**: Haz doble clic en el archivo `index.html` para abrirlo en tu navegador web preferido (como Chrome, Firefox, etc.).

## Uso de la Aplicación

1.  **Escriba una tarea** en el campo de texto que dice "Escribe una nueva tarea...".
2.  **Seleccione una prioridad** en el menú desplegable.
3.  **Haga clic en el botón "Agregar"** o presione la tecla `Enter` (Estando marcado el input).
4.  Para marcar una tarea como completada, **active el checkbox** a su izquierda.
5.  Una vez completada la tarea, **el botón "Eliminar" se habilitará** para que pueda borrar la tarea de la lista.

---