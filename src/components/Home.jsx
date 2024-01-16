import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import purpleImage from '../img/book.png'; // Replace with the actual path to your image

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Perform actions with the form data, such as sending it to a server

    // Navigate to the "about" page after submitting the form
    navigate('/about');
  };

  return (
    <div className="flex h-screen">
      {/* Left side with background and image */}
      <div className="flex-1 bg-indigo-500 relative">
        <img src={purpleImage} alt="Purple Side Image" className="absolute inset-0 object-cover w-full h-full" />
        {/* Add your background content here */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-5xl font-bold mb-6 text-shadow-lg">Welcome to Our Website</h1>
          <p className="text-2xl font-bold mb-6  ">Explore amazing features and services.</p>
        </div>
      </div>

      {/* Right side with extended registration form */}
      <div className="flex-1 bg-gray-800 p-8 flex flex-col justify-between">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-white">Name:</label>
              <input
                type="text"
                {...register('name')}
                className="w-full border-b-2 border-red-500 py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-white">Email:</label>
              <input
                type="text"
                {...register('email')}
                className="w-full border-b-2 border-red-500 py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-white">Password:</label>
              <input
                type="password"
                {...register('password')}
                className="w-full border-b-2 border-red-500 py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none transform transition-transform hover:scale-105"
            >
              Register
            </button>
          </form>
        </div>

        {/* Contact info at the bottom, centered */}
        <div className="text-white text-center mt-8">
          <p className="text-lg">Contact Information:</p>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
