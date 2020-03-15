import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const ExampleForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {console.log('submission data is...', data)}
  console.log('watchinnngg', watch())
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>first name please</label>
    <input name="firstName" placeholder="your first name" ref={register({ required: true})} />
    {errors.firstName && <span>This field is required</span>}

    <label>last name sir</label>
    <input name="lastName" placeholder="your last name" ref={register({ required: true})} />
    {errors.lastName && <span>This field is required</span>}

    <label>Shoot the breeze</label>
    <textarea name="about" placeholder="tell us about you..." ref={register({ required: true, minLength: 20, maxLength: 100})} />
    {errors.about && errors.about.type === "required" && <span>This field is required.</span>}
    {errors.about && errors.about.type === "minLength" && <span>Please write at LEAST 20 characters.</span>}
    {errors.about && errors.about.type === "maxLength" && <span>Please shorten your response to less than 100 characters.</span>}
    <input type="submit" />
    </form>
  )
}

export default ExampleForm;