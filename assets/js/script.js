//  M3_Evaluación de portafolio.

//  Constantes para manipular elementos del DOM.
const nuevaTareaInput = document.getElementById('nueva-tarea-input');
const prioridadSelect = document.getElementById('prioridad-select');
const agregarBtn = document.getElementById('agregar-btn');
const listaTareas = document.getElementById('lista-tareas');
const listaEncabezado = document.getElementById('lista-encabezado'); // NUEVO

//  Variable paraa almacenar las tareas
let tareas = [];


/*  Función para mostrar los encabezados de la lista de tareas.
    (Se muestra al agregar la primera tarea)*/
function gestionarVisibilidadEncabezado() {
    if (tareas.length > 0) {
        listaEncabezado.classList.remove('hidden');
    } else {
        listaEncabezado.classList.add('hidden');
    }
}

/*  Función para mostrar todas las tareas en la interfaz de usuario.
 */
function mostrarTareas() {
    listaTareas.innerHTML = '';

    tareas.forEach(tarea => {
        
        const tareaItem = document.createElement('li');
        tareaItem.className = 'tarea-item';

        if (tarea.realizada) {
            tareaItem.classList.add('completada');
        }
        //  Constante para manejar el checkbox.
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.realizada;
        checkbox.addEventListener('change', () => alternarEstadoTarea(tarea.id));
        
        //  Constante para manejar el texto de la tarea.
        const textoTarea = document.createElement('span');
        textoTarea.className = 'texto';
        textoTarea.textContent = tarea.texto;

        //  Constante para manejar la prioridad de la tarea ingresada.
        const prioridadTarea = document.createElement('span');
        prioridadTarea.className = `prioridad prioridad-${tarea.prioridad}`;
        prioridadTarea.textContent = tarea.prioridad;

        //  Constante para manejar la fecha en que se ingresa la tarea.
        const fechaTarea = document.createElement('span');
        fechaTarea.className = 'fecha';
        fechaTarea.textContent = tarea.fecha.toLocaleDateString('es-ES');

        //  Constante para manejar el botón que permite eliminar alguna tarea.
        const eliminarBtn = document.createElement('button');
        eliminarBtn.className = 'eliminar-btn';
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.setAttribute('disabled', 'true');
        eliminarBtn.addEventListener('click', () => eliminarTarea(tarea.id));
        if (checkbox.checked = tarea.realizada) {
            eliminarBtn.removeAttribute('disabled');
        }

        //  Métodos para agregar los elementos de cada tarea ingresada.
        tareaItem.appendChild(checkbox);
        tareaItem.appendChild(textoTarea);
        tareaItem.appendChild(prioridadTarea);
        tareaItem.appendChild(fechaTarea);
        tareaItem.appendChild(eliminarBtn);
        listaTareas.appendChild(tareaItem);
    });

    // Se llama a la función para mostrar u ocultar los encabezados de la lista de tareas.
    gestionarVisibilidadEncabezado();
}

//  Función para agregar una nueva tarea a la lista.
function agregarTarea() {
    const textoNuevaTarea = nuevaTareaInput.value.trim();
    const prioridad = prioridadSelect.value;

    //  Se valida que se escriba una tarea para poder agregarla con el botón.
    if (textoNuevaTarea === '') {
        //alert('Por favor, escribe una tarea a realizar para poder ingresarla.');
        document.getElementById("avisos").innerText = 'Por favor, ingresa una tarea a realizar para poder agregarla.';
        return;
    }

    //  Se valida que se seleccione una prioridad para la tarea a ingresar.
    if (prioridad === '') {
        //alert('Por favor, selecciona una prioridad para la tarea a ingresar.');
        document.getElementById("avisos").innerText = 'Por favor, selecciona la prioridad de la tarea a agregar.';
        return;
    }

    //  Objeto que establece las propiedades de la tarea a ingresar.
    const nuevaTarea = {
        id: Math.random() * 1000,   //  Se establece un ID aleatorio para cada nueva tarea.
        texto: textoNuevaTarea,
        prioridad: prioridad,
        realizada: false,
        fecha: new Date()
    };

    //  Se agrega la tarea ingresada al arreglo de tareas.
    tareas.push(nuevaTarea);
    nuevaTareaInput.value = '';
    document.getElementById("avisos").innerText = "";
    //  Se resetea el select a la opción por defecto.
    prioridadSelect.value = ""; 
    mostrarTareas();
}

/*  Función para eliminar una o varias tareas de la lista usando su ID.
    (Si se eliminan todas las tareas se actualiza la visibilidad de los encabezados)*/
function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    mostrarTareas();
}

//  Función para cambiar el estado 'realizada' de una tarea.
function alternarEstadoTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.realizada = !tarea.realizada;
    }
    mostrarTareas();
}

//  Método para agregue una tarea al hacer click en el botón Agregar.
agregarBtn.addEventListener('click', agregarTarea);
/*  Método para que también se agregue una tarea al persionar Enter.
    (Funciona al estar ubicado en el input)*/
nuevaTareaInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});

// Se llama la función para asegurar que los encabezados estén ocultos al inicio.
gestionarVisibilidadEncabezado();