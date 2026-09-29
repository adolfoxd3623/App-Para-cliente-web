// Revisa los datos y muestra los errores en español dentro de la página
const formulario = document.querySelector("#formulario-cliente");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const cedula = document.querySelector("#cedula").value.trim();
  const nombre = document.querySelector("#nombre").value.trim();
  const direccion = document.querySelector("#direccion").value.trim();
  const telefono = document.querySelector("#telefono").value.trim();
  const correo = document.querySelector("#correo").value.trim();
  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let error = "";

  if (!cedula || !nombre || !direccion || !telefono || !correo) {
    error = "Completa todos los campos.";
  } else if (!/^\d{10}$/.test(cedula)) {
    error = "La cédula debe tener exactamente 10 dígitos.";
  } else if (nombre.length > 30) {
    error = "El nombre no puede superar 30 caracteres.";
  } else if (direccion.length > 50) {
    error = "La dirección no puede superar 50 caracteres.";
  } else if (!/^\d{10}$/.test(telefono)) {
    error = "El teléfono debe tener exactamente 10 dígitos.";
  } else if (!formatoCorreo.test(correo)) {
    error = "Escribe un correo electrónico válido.";
  }

  if (error) {
    mensaje.textContent = error;
    mensaje.className = "error";
  } else {
    mensaje.textContent = "Cliente registrado correctamente.";
    mensaje.className = "exito";
  }
});

formulario.addEventListener("reset", function () {
  mensaje.textContent = "";
  mensaje.className = "";
});
