document.addEventListener('DOMContentLoaded', () => {
    const examples = ['Modulo-1-GridSystem/Grid-System.html', 'Modulo-2-Botones/Botones.html', 'Modulo-3-Formularios/Formularios.html', 'Modulo-4-Tablas/Tablas.html', 'Modulo-5-BarraMenu/barra-menu.html', 'Modulo-6-Modal/Modal.html', 'Modulo-7-Icons/iconos.html', 'Modulo-8-Media/media.html']; // Añade más ejemplos aquí si es necesario
  
    const container = document.getElementById('examplesContainer');
  
    examples.forEach(example => {
      fetch(example)
        .then(response => response.text())
        .then(data => {
          const div = document.createElement('div');
          div.innerHTML = data;
          container.appendChild(div);
          // Resaltar el código cargado
          div.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
          });
        })
        .catch(error => console.error('Error al cargar el ejemplo:', error));
    });
  
    // Delegación de eventos para el botón
    container.addEventListener('click', event => {
      if (event.target && event.target.id === 'applyOffset') {
        var offset = document.getElementById('offsetInput').value;
        var columns = document.querySelectorAll('.column');
  
        columns.forEach(function (column) {
          column.className = 'col-md-4 column'; // Reiniciar clases de columna
        });
  
        if (offset >= 0 && offset <= 8) {
          columns[1].classList.add('col-md-offset-' + offset);
          console.log("Se modificó correctamente.");
        } else {
          alert('Ingrese un número de desplazamiento válido (0-8)');
        }
      } else if (event.target && event.target.id === 'agregarCampo') {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
        var formularioInicial = document.getElementById('formularioInicial');
        var camposExtra = document.getElementById('camposExtra');
        var nuevoCampo = document.createElement('div');
        nuevoCampo.classList.add('form-group', 'input-group');
        nuevoCampo.innerHTML = `
          <span class="input-group-addon">
            <span class="glyphicon glyphicon-user"></span>
          </span>
          <input type="text" class="form-control" name="campoExtra" placeholder="Nuevo Campo" required>
        `;
        camposExtra.appendChild(nuevoCampo);
      } else if (event.target && event.target.id === 'cambiarColor') {
        var color = document.getElementById('colorCabecera').value;
        var tabla = container.querySelector('.table thead');
        tabla.style.backgroundColor = color;
        actualizarCodigoFuente();
      } else if (event.target && event.target.id === 'agregarFila') {
        var cuerpoTabla = container.querySelector('#tablaCuerpo');
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
      } else if (event.target && event.target.id === 'eliminarFila') {
        var cuerpoTabla = container.querySelector('#tablaCuerpo');
        if (cuerpoTabla.rows.length > 0) {
          cuerpoTabla.deleteRow(cuerpoTabla.rows.length - 1);
          actualizarCodigoFuente();
        } else {
          alert("No hay filas para eliminar.");
        }
      }
    });
  
    function actualizarCodigoFuente() {
      var cuerpoTabla = container.querySelector('#tablaCuerpo');
      var tabla = container.querySelector('.table thead');
      var codigoFuente = document.getElementById('codigoFuente');
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
  });
