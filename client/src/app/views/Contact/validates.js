export const validateForm = (formData, setErrors, errors) => {
  if (!formData.firstName) setErrors({ ...errors, firstName: 'Nombre vacio' });
  else {
    if (/^[a-zA-Z\s]+$/.test(formData.firstName))
      setErrors({ ...errors, firstName: '' });
    else setErrors({ ...errors, firstName: 'Nombre invalido' });
  }

  if (!formData.lastName) setErrors({ ...errors, lastName: 'Apellido vacio' });
  else {
    if (/^[a-zA-Z\s]+$/.test(formData.lastName))
      setErrors({ ...errors, lastName: '' });
    else setErrors({ ...errors, lastName: 'Apellido invalido' });
  }

  if (!formData.email) setErrors({ ...errors, email: 'Email vacio' });
  else {
    if (/^\S+@\S+\.\S+$/.test(formData.email))
      setErrors({ ...errors, email: '' });
    else setErrors({ ...errors, email: 'Email invalido' });
  }

  if (!formData.phone) setErrors({ ...errors, phone: 'Telefono vacio' });
  else {
    if (/^[0-9+\-() ]+$/.test(formData.phone))
      setErrors({ ...errors, phone: '' });
    else setErrors({ ...errors, phone: 'Telefono invalido' });
  }

  if (!formData.mobile) setErrors({ ...errors, mobile: 'Celular vacio' });
  else {
    if (/^[0-9+\-() ]+$/.test(formData.mobile))
      setErrors({ ...errors, mobile: '' });
    else setErrors({ ...errors, mobile: 'Celular invalido' });
  }

  if (!formData.comment) setErrors({ ...errors, comment: 'Comentario vacio' });
  else {
    if (/^[a-zA-Z0-9\s.,!?-]+$/.test(formData.comment))
      setErrors({ ...errors, comment: '' });
    else setErrors({ ...errors, comment: 'Comentario invalido' });
  }
};
