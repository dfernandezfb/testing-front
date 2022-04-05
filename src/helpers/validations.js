export const validationRegister = values => {
  let errors = {};

  if(!values.name) {
    errors.name = 'El nombre es obligatorio';
  } else if(values.name.length > 30) {
    errors.name = 'El nombre no puede tener más de 30 caracteres';
  }
  if (!values.lastname) {
    errors.lastname = 'El apellido es obligatorio';
  } else if (values.lastname.length > 30) {
    errors.lastname = 'El apellido no puede tener más de 30 caracteres';
  }

  if (!values.email) {
    errors.email = 'El email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'El email no es válido';
  } else if (values.email.length > 30) {
    errors.email = 'El email no debe poseer más de 30 caracteres';
  }

  if (!values.phone) {
    errors.phone = 'El número de teléfono es obligatorio';
  } else if (values.phone.length > 15) {
    errors.phone = 'El número de teléfono no puede tener más de 15 caracteres';
  }

  if (!values.password) {
    errors.password = 'La contraseña es obligatoria'
  } else if (values.password !== values.confirmPassword) {
    errors.password = 'Las contraseñas no coinciden'
  } else if (values.password.length < 8) {
    errors.password = 'La contraseña debe tener como mínimo 8 caracteres'
  } else if (values.password.length > 30) {
    errors.password = 'La contraseña no debe poseer más de 30 caracteres'
  }


  return errors
}

export const validationLogin = values => {
  let errors = {};
  if (!values.email) {
    errors.email = 'El email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'El email no es válido';
  } else if (values.email.length > 30) {
    errors.email = 'El email no debe poseer más de 30 caracteres';
  }

  if (!values.password) {
    errors.password = 'La contraseña es obligatoria'
  } else if (values.password.length < 8) {
    errors.password = 'La contraseña debe tener como mínimo 8 caracteres'
  } else if (values.password.length > 30) {
    errors.password = 'La contraseña no debe poseer más de 30 caracteres'
  }
  return errors;
}