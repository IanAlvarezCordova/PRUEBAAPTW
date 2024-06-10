function addNewIconButton() {
    var iconName = document.getElementById("newIconButton").value;
    var buttonText = document.getElementById("newButtonText").value;

    if (!iconName || !buttonText) {
        alert("Por favor, ingrese el nombre del icono y el texto para el botón.");
        return;
    }

    var newButtonHTML = `
        <div class="centrar">
            <button class="btn btn-danger">
                <span class="icon-${iconName} app2">${buttonText}</span>
            </button>
        </div>
    `;

    // Agregar el nuevo botón al contenedor
    document.getElementById("buttonContainer").innerHTML += newButtonHTML;

    // Actualizar el código fuente
    updateCodeSnippet();
}

function updateCodeSnippet() {
    var codeSnippet = document.getElementById("buttonContainer").innerHTML;
    document.getElementById("codeSnippet").textContent = codeSnippet;
}
