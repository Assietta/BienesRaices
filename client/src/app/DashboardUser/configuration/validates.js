export default function validateForm (formInfoData)  {
    let errors = {};

  
    if (!formInfoData.username) {
      errors.username = 'Nombre vacío';
    } else if (!/^[a-zA-Z\s]+$/.test(formInfoData.username)) {
      errors.username = 'Nombre inválido';
    }
  
    return errors;
  };