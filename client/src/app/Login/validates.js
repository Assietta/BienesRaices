export const validateForm = (formData) => {
  let errors = {};

  if (!formData.email) {
    errors.email = 'Email vacío';
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Email inválido, debe tener nombre@dominio.com';
  };

  if (!formData.password) {
    errors.password = 'Password vacío';
  }
   //else if (
  //   !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
  //   errors.password = 'Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un dígito y un carácter especial';
  // }

  return errors;
};
