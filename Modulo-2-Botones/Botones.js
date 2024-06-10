// Función para crear un botón informativo
function createInfoButton() {
    console.log("SE CREO CORRECTAMTE")
    var buttonClass = document.getElementById('infoButtonClass').value;
    var button = document.createElement('button');
    button.className = 'btn ' + buttonClass;
    button.textContent = 'Nuevo Botón';
    document.getElementById('infoButtonResult').innerHTML = button.outerHTML;
}

// Función para crear un botón personalizado
function createCustomButton() {
    var buttonText = document.getElementById('customButtonText').value;
    var buttonSize = document.getElementById('customButtonSize').value;
    var button = document.createElement('button');
    button.className = 'btn btn-primary ' + buttonSize;
    button.textContent = buttonText;
    document.getElementById('customButtonResult').innerHTML = button.outerHTML;
}
