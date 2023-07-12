import bcrypt from 'bcryptjs'
export default async function validateDelete  (formDeleteData,userPassword ) {
    let errors = {};
    console.log(formDeleteData,"soy el delete del validate");
   
    const passwordMatch = await bcrypt.compare(
    formDeleteData.deleteAccountPassword,
      userPassword)


     if (!formDeleteData.deleteAccountPassword) {
    errors.deleteAccountPassword = 'Contraseña vacía';
    } else if (!passwordMatch)
    // si mi contraseña es diferente a la actual arroja error
    {
    errors.deleteAccountPassword = 'Contraseña incorrecta';
    }
  
 
    return errors
}