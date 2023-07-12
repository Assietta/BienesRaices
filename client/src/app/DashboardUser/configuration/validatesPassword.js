import bcrypt from 'bcryptjs'
export default async function validatePassword (formPasswordData, userPassword )  {
    let errors = {};

   
    const passwordMatch = await bcrypt.compare(
      formPasswordData.password,
      userPassword
      )


     if (!formPasswordData.password) {
      errors.password = 'Contraseña vacía';
    } else if (passwordMatch === false)
    // si mi contraseña es diferente a la actual arroja error
    {
      errors.password = 'Contraseña incorrecta';
    }
  
    if (!formPasswordData.newPassword) {
      errors.newPassword = 'Nueva contraseña vacía';
    } else if (formPasswordData.newPassword === formPasswordData.password) {
      errors.newPassword = 'Esta contraseña es igual a la anterior';
    } else if (formPasswordData.newPassword.length < 8 || formPasswordData.newPassword.length > 16) {
      errors.newPassword = 'La contraseña debe tener entre 8 y 16 caracteres';
    }
  
    if (!formPasswordData.repeatNewPassword) {
      errors.repeatNewPassword = 'Confirmación de contraseña vacía';
    } else if (formPasswordData.repeatNewPassword !== formPasswordData.newPassword) {
      errors.repeatNewPassword = 'La confirmación de contraseña no coincide con la nueva contraseña';
    }
    return errors
}