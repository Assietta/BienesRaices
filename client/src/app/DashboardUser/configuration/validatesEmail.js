import bcrypt from 'bcryptjs'
export default async function validateEmail (formEmailData,userPassword )  {
    let errors = {};
   
    const passwordMatch = await bcrypt.compare(
      formEmailData.password,
        userPassword)
  


     if (!formEmailData.password) {
      errors.password = 'Contraseña vacía';
    } else if (!passwordMatch)
    // si mi contraseña es diferente a la actual arroja error
    {
      errors.password = 'Contraseña incorrecta';
    }
  
    if (!formEmailData.newEmail) {
      errors.newEmail = 'Nuevo email vacío';
    } 
    else if (!/^\S+@\S+\.\S+$/.test(formEmailData.newEmail)) {
        errors.newEmail = 'Correo invalido, usa nombre@dominio.com';
      }
  
    if (!formEmailData.repeatNewEmail) {
      errors.repeatNewEmail = 'Nuevo email vacío';
    } else if (formEmailData.repeatNewEmail !== formEmailData.newEmail) {
      errors.repeatNewEmail = 'La confirmación de contraseña no coincide con la nueva contraseña';
    }
    return errors
}