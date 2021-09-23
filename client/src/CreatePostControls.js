import { useState } from 'react';
import axios from 'axios';

const createBlogPost = async (values, successCallback, errorCallback) => {
  const post = {
    title: values.title,
    preamble: values.preamble,
    text: values.text,
    author: values.author,
    email: values.email,
  };

  await axios
    .post('/api/posts', post)
    .then((res) => {
      successCallback();
    })
    .catch(() => errorCallback());
};

const initialFormValues = {
  title: '',
  preamble: '',
  text: '',
  author: '',
  email: '',
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    // title validation
    if ('title' in fieldValues)
      temp.title = fieldValues.title ? '' : 'Please enter a title';
    if (fieldValues.title) {
      temp.title = fieldValues.title.length > 50 ? 'Max 50 letters' : '';
    }

    // preamble validation
    if ('preamble' in fieldValues)
      temp.preamble = fieldValues.preamble ? '' : 'Please enter a preamble';
    if (fieldValues.preamble) {
      temp.preamble =
        fieldValues.preamble.length > 250 ? 'Max 250 letters' : '';
    }

    // text validation
    if ('text' in fieldValues)
      temp.text = fieldValues.text.length !== 0 ? '' : 'Please enter a text';

    // author validation
    if ('author' in fieldValues)
      temp.author = fieldValues.author ? '' : 'Please enter an author';
    if (fieldValues.author) {
      temp.author = fieldValues.author.length > 40 ? 'Max 40 letters' : '';
    }

    // email validation
    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'Please enter an e-mail';
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Email is not valid';
    }

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.title &&
      fieldValues.preamble &&
      fieldValues.text &&
      fieldValues.author &&
      fieldValues.email &&
      Object.values(errors).every((x) => x === '');

    return isValid;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === '') && formIsValid();
    if (isValid) {
      await createBlogPost(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};
