'use client';
import { useState } from 'react';
import styles from './appraisals.module.css';
import { validateForm } from './validates';

export default function Appraisals() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    comment: '',
    address: '',
    timeSlot: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(validateForm({ ...formData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData, setErrors, errors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Aquí puedes realizar el envío del formulario o cualquier acción adicional
    }
  };

  return (
    <div className={styles['form-container']}>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="firstName"
            placeholder="Ingrese su nombre"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="lastName"
            placeholder="Ingrese su apellido"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="nombre@dominio.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div>
          <label>Celular</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          {errors.mobile && <p>{errors.mobile}</p>}
        </div>
        <div>
          <label>Comentario</label>
          <textarea
            name="comment"
            placeholder="Ingrese un comentario"
            value={formData.comment}
            onChange={handleInputChange}
          />
          {errors.comment && <p>{errors.comment}</p>}
        </div>
        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="address"
            placeholder="Ingrese su dirección"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div>
          <label>Franja Horaria</label>
          <input
            type="text"
            name="timeSlot"
            placeholder="Ingrese la franja horaria"
            value={formData.timeSlot}
            onChange={handleInputChange}
          />
          {errors.timeSlot && <p>{errors.timeSlot}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
