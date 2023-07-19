export const validateForm = (formData) => {
  let errors = {};

  if (!formData.username) {
    errors.username = 'Nombre vacío';
  } else if (!/^[a-zA-Z\s]+$/.test(formData.username)) {
    errors.username = 'Nombre inválido';
  }

  if (!formData.lastName) {
    errors.lastName = 'Apellido vacío';
  } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
    errors.lastName = 'Apellido inválido';
  }

  if (!formData.email) {
    errors.email = 'Email vacío';
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Invalido, nombre@dominio.com';
  }

  if (!formData.mobile) {
    errors.mobile = 'Celular vacío';
  } else if (!/^[0-9+\-() ]+$/.test(formData.mobile)) {
    errors.mobile = 'Celular inválido';
  }

  if (!formData.password) {
    errors.password = 'Contraseña vacía';
  } else if (!/^.{6,}$/.test(formData.password)) {
    errors.password = ' minimo 6 caracteres';
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Confirmación de contraseña vacía';
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = 'Las contraseñas no coinciden';
  }

  return errors;
};
