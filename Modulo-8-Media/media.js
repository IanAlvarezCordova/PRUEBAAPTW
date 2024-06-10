function agregarVideo() {
    var clase = document.getElementById("claseImagen").value.trim();
    if (clase === "") {
        alert("Por favor ingrese el tipo de clase (img-circle, img-rounded, img-thumbnail).");
        return;
    }

    var nuevoCodigo = `
        <div class="col-xs-12 col-sm-4">
            <video controls src="./img/ESPE.mp4" class="img-responsive ${clase}"></video>
        </div>
    `;

    document.getElementById("nuevoCodigo").innerHTML += nuevoCodigo;
    actualizarCodigoFuente(); // Actualizar el código fuente
}

function actualizarCodigoFuente() {
    var codigoHTML = document.getElementById("nuevoCodigo").innerHTML;
    document.getElementById("codeSnippet").textContent = codigoHTML;
}