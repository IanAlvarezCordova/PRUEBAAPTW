
document.addEventListener('DOMContentLoaded', function() {
    var tabla = document.querySelector('.table thead');
    var cuerpoTabla = document.getElementById('tablaCuerpo');
    var cambiarColorBtn = document.getElementById('cambiarColor');
    var colorCabeceraInput = document.getElementById('colorCabecera');
    var agregarFilaBtn = document.getElementById('agregarFila');
    var eliminarFilaBtn = document.getElementById('eliminarFila');
    var codigoFuente = document.getElementById('codigoFuente');

    function actualizarCodigoFuente() {
        var htmlContent = `
<table class="table table-condensed table-bordered table-striped text-center">
    <thead style="background-color: ${tabla.style.backgroundColor};">
        <tr class="aspecto">
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Apellido</th>
            <th>Twitter</th>
            <th>Curso</th>
        </tr>
    </thead>
    <tbody>
        ${cuerpoTabla.innerHTML.trim()}
    </tbody>
</table>`;
        codigoFuente.textContent = htmlContent;
        hljs.highlightElement(codigoFuente);
    }

    cambiarColorBtn.addEventListener('click', function() {
        var color = colorCabeceraInput.value;
        tabla.style.backgroundColor = color;
        actualizarCodigoFuente();
    });

    agregarFilaBtn.addEventListener('click', function() {
        var filas = cuerpoTabla.getElementsByTagName('tr').length;
        var nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${filas + 1}</td>
            <td>Nombre${filas + 1}</td>
            <td>Apellido1-${filas + 1}</td>
            <td>Apellido2-${filas + 1}</td>
            <td>@Twitter${filas + 1}</td>
            <td>Curso ${filas + 1}</td>
        `;
        cuerpoTabla.appendChild(nuevaFila);
        actualizarCodigoFuente();
    });

    eliminarFilaBtn.addEventListener('click', function() {
        if (cuerpoTabla.rows.length > 0) {
            cuerpoTabla.deleteRow(cuerpoTabla.rows.length - 1);
            actualizarCodigoFuente();
        } else {
            alert("No hay filas para eliminar.");
        }
    });

    actualizarCodigoFuente();
});
