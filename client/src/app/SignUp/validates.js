export const validateForm = (formData) => {
  let errors = {};

  if (!formData.username) {
    errors.username = 'Nombre vacío';
  } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
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
    errors.email = 'Email inválido';
  }

  if (!formData.mobile) {
    errors.mobile = 'Celular vacío';
  } else if (!/^[0-9+\-() ]+$/.test(formData.mobile)) {
    errors.mobile = 'Celular inválido';
  }

  return errors;
};
