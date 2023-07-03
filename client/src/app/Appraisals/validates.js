export const validateForm = (formData) => {
  let errors = {};

  if (!formData.name) {
    errors.name = 'Nombre vacío';
  } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
    errors.firstName = 'Nombre inválido';
  }

  if (!formData.lastName) {
    errors.lastName = 'Apellido vacío';
  } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
    errors.lastName = 'Apellido inválido';
  }

  if (!formData.email) {
    errors.email = 'Email vacío';
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Correo invalido, usa nombre@dominio.com';
  }

  if (!formData.phone) {
    errors.phone = 'Teléfono vacío';
  } else if (!/^[0-9+\-() ]+$/.test(formData.phone)) {
    errors.phone = 'Teléfono inválido';
  }

  if (!formData.mobile) {
    errors.mobile = 'Celular vacío';
  } else if (!/^[0-9+\-() ]+$/.test(formData.mobile)) {
    errors.mobile = 'Celular inválido';
  }

  if (!formData.comment) {
    errors.comment = 'Comentario vacío';
  } else if (!/^[a-zA-Z0-9\s.,!?-]+$/.test(formData.comment)) {
    errors.comment = 'Comentario inválido';
  }

  if (!formData.address) {
    errors.address = 'Dirección vacía';
  } else if (!/^[a-zA-Z0-9\s.,!?-]+$/.test(formData.address)) {
    errors.address = 'Dirección inválida';
  }

  // if (!formData.callTime) {
  //   errors.callTime = 'Franja horaria vacía';
  // } else if (!/^[a-zA-Z0-9\s.,!?-]+$/.test(formData.callTime)) {
  //   errors.callTime = 'Franja horaria inválida';
  // }

  return errors;
};
