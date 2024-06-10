var modalCounter = 0; // Contador para generar IDs únicos para los modales

function addNewModal() {
    modalCounter++; // Incrementar el contador de modales

    var modalName = prompt("Ingrese el nombre del botón para el nuevo modal:");
    if (!modalName) return; // Salir si no se ingresó ningún nombre

    // Crear el HTML del nuevo modal
    var newModalHTML = `
        <button class="btn btn-danger btn-lg" data-toggle="modal" data-target="#miModal${modalCounter}">${modalName}</button>

        <div class="modal fade" id="miModal${modalCounter}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button class="close" aria-hidden="true" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">${modalName}</h4>
                    </div>
                    <div class="modal-body">
                        <!-- Contenido del modal -->
                        <p>Contenido del nuevo modal.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary">Aceptar</button>
                        <button class="btn btn-default" data-dismiss="modal">Cancelar</button>                           
                    </div>
                </div>
            </div>
        </div>
    `;

    // Agregar el nuevo modal al contenedor
    document.getElementById("modalContainer").innerHTML += newModalHTML;
}
