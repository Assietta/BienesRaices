export const validatePassword = (formData, user) => {
    let errors = {};
    user.password

     if (!formData.password) {
      errors.password = 'Contraseña vacía';
    } else if (formData.password !== user.password)
    //si mi contraseña es diferente a la actual arroja error
    {
      errors.password = 'Contraseña incorrecta';
    }
  
    if (!formData.newPassword) {
      errors.newPassword = 'Nueva contraseña vacía';
    } else if (formData.newPassword === formData.password) {
      errors.newPassword = 'Esta contraseña es igual a la anterior';
    } else if (formData.newPassword.length < 8 || formData.newPassword.length > 16) {
      errors.newPassword = 'La contraseña debe tener entre 8 y 16 caracteres';
    }
  
    if (!formData.repeatNewPassword) {
      errors.repeatNewPassword = 'Confirmación de contraseña vacía';
    } else if (formData.repeatNewPassword !== formData.newPassword) {
      errors.repeatNewPassword = 'La confirmación de contraseña no coincide con la nueva contraseña';
    }
    return errors
}