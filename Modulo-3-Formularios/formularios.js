
  document.addEventListener('DOMContentLoaded', function() {
    var formularioInicial = document.getElementById('formularioInicial');
    var botonAgregarCampo = document.getElementById('agregarCampo');

    botonAgregarCampo.addEventListener('click', function() {
      var nuevoCampo = document.createElement('div');
      nuevoCampo.classList.add('form-group', 'input-group');
      nuevoCampo.innerHTML = `
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-user"></span>
        </span>
        <input type="text" class="form-control" name="campoExtra" placeholder="Nuevo Campo" required>
      `;
      formularioInicial.appendChild(nuevoCampo);
    });
  });

