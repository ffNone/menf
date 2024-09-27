'use client';
import * as ReactHookForm from 'react-hook-form';

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = ReactHookForm.useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('username', { required: 'Username is required' })}
        placeholder="Username"
      />
      {errors.username && <span>{errors.username.message}</span>}
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
        })}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}


/*
import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to an API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2">Username</label>
        <input
          id="username"
          {...register("username", { required: "Username is required", minLength: { value: 3, message: "Username must be at least 3 characters" } })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.username && <p className="text-red-500 mt-1">{errors.username.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { 
            required: "Email is required",
            pattern: { 
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", { 
            required: "Password is required", 
            minLength: { value: 8, message: "Password must be at least 8 characters" }
          })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  );
}

*/