export const validateForm = async (formData) => {
  let errors = {};

  async function getUsers() {
    const response = await fetch('http://localhost:3001/users');
    const data = await response.json();
    return data.users;
  }

  if (!formData.email) {
    errors.email = 'Ingrese un correo electrónico';
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Email inválido, debe tener nombre@dominio.com';
  } else {
    // Get the list of users
    const users = await getUsers();
    const user = users.find((user) => user.email === formData.email);
    if (user && user.disabled) {
      errors.email = 'El email está registrado pero está deshabilitado';
    }
  }

  if (!formData.password) {
    errors.password = 'Ingrese su contraseña';
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(formData.password)
  ) {
    errors.password = 'Debe tener al menos 6 caracteres, una letra y un número';
  }

  return errors;
};


