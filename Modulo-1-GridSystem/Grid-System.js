document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('applyOffset').addEventListener('click', function() {
      
      var offset = document.getElementById('offsetInput').value;
      var columns = document.querySelectorAll('.column');
  
      columns.forEach(function(column) {
        column.className = 'col-md-4 column'; // Reiniciar clases de columna
      });
  
      if(offset >= 0 && offset <= 8) {
        columns[1].classList.add('col-md-offset-' + offset);
       
      } else {
        alert('Ingrese un número de desplazamiento válido (0-8)');
      }
    });
  });
  
  