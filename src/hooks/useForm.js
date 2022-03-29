import { useState, useEffect } from 'react';

const useForm = (initialState, validate, submit) => {
  
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if(submitting) {
      if(Object.keys(errors).length === 0) {
        submit();
      }
      setSubmitting(false);
    }
  }, [errors])
  
  const handleKeyUp = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errorsValidate = validate(values);
    setErrors(errorsValidate);
    setSubmitting(true)
  }

  return {
    values,
    errors,
    handleKeyUp,
    handleSubmit
  }

}
 
export default useForm;