export const validateForm = (formInfoData, user) => {
    let errors = {};

  
    if (!formInfoData.name) {
      errors.name = 'Nombre vacío';
    } else if (!/^[a-zA-Z\s]+$/.test(formInfoData.name)) {
      errors.name = 'Nombre inválido';
    }
  
    if (!formInfoData.lastName) {
      errors.lastName = 'Apellido vacío';
    } else if (!/^[a-zA-Z\s]+$/.test(formInfoData.lastName)) {
      errors.lastName = 'Apellido inválido';
    }
  
    // if (!formData.email) {
    //   errors.email = 'Email vacío';
    // } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    //   errors.email = 'Correo inválido, usa nombre@dominio.com';
    // }
  
    // if (!formData.phone) {
    //   errors.phone = 'Teléfono vacío';
    // } else if (!/^[0-9+\-() ]+$/.test(formData.phone)) {
    //   errors.phone = 'Teléfono inválido';
    // }
  
    // if (!formData.mobile) {
    //   errors.mobile = 'Celular vacío';
    // } else if (!/^[0-9+\-() ]+$/.test(formData.mobile)) {
    //   errors.mobile = 'Celular inválido';
    // }
  
    // if (!formData.comment) {
    //   errors.comment = 'Comentario vacío';
    // } else if (!/^[a-zA-Z0-9\s.,!?-]+$/.test(formData.comment)) {
    //   errors.comment = 'Comentario inválido';
    // }
  
    // if (!formData.password) {
    //   errors.password = 'Contraseña vacía';
    // } else if (formData.password !== user.password)
    // //si mi contraseña es diferente a la actual arroja error
    // {
    //   errors.password = 'Contraseña incorrecta';
    // }
  
    // if (!formData.newPassword) {
    //   errors.newPassword = 'Nueva contraseña vacía';
    // } else if (formData.newPassword === formData.password) {
    //   errors.newPassword = 'Esta contraseña es igual a la anterior';
    // } else if (formData.newPassword.length < 8 || formData.newPassword.length > 16) {
    //   errors.newPassword = 'La contraseña debe tener entre 8 y 16 caracteres';
    // }
  
    // if (!formData.repeatNewPassword) {
    //   errors.repeatNewPassword = 'Confirmación de contraseña vacía';
    // } else if (formData.repeatNewPassword !== formData.newPassword) {
    //   errors.repeatNewPassword = 'La confirmación de contraseña no coincide con la nueva contraseña';
    // }
  
    return errors;
  };