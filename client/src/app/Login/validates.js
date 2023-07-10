export const validateForm = (formData) => {
  let errors = {};

  if (!formData.email) {
    errors.email = 'Ingrese un correo electrónico';
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Email inválido, debe tener nombre@dominio.com';
  };

  if (!formData.password) {
    errors.password = 'Ingrese su contraseña';
  }
  else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(formData.password)) {
    errors.password = 'Debe tener al menos 6 caracteres, una letra y un número';
  }

  return errors;
};
