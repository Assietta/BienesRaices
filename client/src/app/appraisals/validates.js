export const validateForm = (formData, setErrors, errors) => {
  if (!formData.firstName) setErrors({ ...errors, firstName: 'Nombre vacío' });
  else {
    if (/^[a-zA-Z\s]+$/.test(formData.firstName))
      setErrors({ ...errors, firstName: '' });
    else setErrors({ ...errors, firstName: 'Nombre inválido' });
  }

  if (!formData.lastName) setErrors({ ...errors, lastName: 'Apellido vacío' });
  else {
    if (/^[a-zA-Z\s]+$/.test(formData.lastName))
      setErrors({ ...errors, lastName: '' });
    else setErrors({ ...errors, lastName: 'Apellido inválido' });
  }

  if (!formData.email) setErrors({ ...errors, email: 'Email vacío' });
  else {
    if (/^\S+@\S+\.\S+$/.test(formData.email))
      setErrors({ ...errors, email: '' });
    else setErrors({ ...errors, email: 'Email inválido' });
  }

  if (!formData.phone) setErrors({ ...errors, phone: 'Teléfono vacío' });
  else {
    if (/^[0-9+\-() ]+$/.test(formData.phone))
      setErrors({ ...errors, phone: '' });
    else setErrors({ ...errors, phone: 'Teléfono inválido' });
  }

  if (!formData.mobile) setErrors({ ...errors, mobile: 'Celular vacío' });
  else {
    if (/^[0-9+\-() ]+$/.test(formData.mobile))
      setErrors({ ...errors, mobile: '' });
    else setErrors({ ...errors, mobile: 'Celular inválido' });
  }

  if (!formData.comment) setErrors({ ...errors, comment: 'Comentario vacío' });
  else {
    if (/^[a-zA-Z0-9\s.,!?-]+$/.test(formData.comment))
      setErrors({ ...errors, comment: '' });
    else setErrors({ ...errors, comment: 'Comentario inválido' });
  }

  if (!formData.address) setErrors({ ...errors, address: 'Dirección vacía' });
  else {
    if (/^[a-zA-Z0-9\s.,!?-]+$/.test(formData.address))
      setErrors({ ...errors, address: '' });
    else setErrors({ ...errors, address: 'Dirección inválida' });
  }

  if (!formData.timeSlot)
    setErrors({ ...errors, timeSlot: 'Franja horaria vacía' });
  else {
    if (/^[a-zA-Z0-9\s.,!?-]+$/.test(formData.timeSlot))
      setErrors({ ...errors, timeSlot: '' });
    else setErrors({ ...errors, timeSlot: 'Franja horaria inválida' });
  }
};
