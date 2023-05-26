function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var mensaje = document.getElementById('mensaje').value;

  if (nombre === '' || correo === '' || mensaje === '') {
    alert('Por favor, completa todos los campos.');
    return false;
  }

  var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return false;
  }

  return true;
}

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('error-message');
  
  // Aquí puedes realizar la lógica de validación del inicio de sesión
  // Puedes comparar los valores ingresados con una base de datos, un servicio API, o cualquier otro mecanismo de autenticación que estés utilizando

  if (username === 'codo' && password === 'codoacodo') {
    // Inicio de sesión exitoso
    errorMessage.textContent = '';
    alert('Inicio de sesión exitoso');
    // Aquí puedes redirigir al usuario a otra página, mostrar contenido adicional, etc.
  } else {
    // Credenciales incorrectas
    errorMessage.textContent = 'Credenciales incorrectas. Por favor, inténtalo nuevamente.';
  }
});






