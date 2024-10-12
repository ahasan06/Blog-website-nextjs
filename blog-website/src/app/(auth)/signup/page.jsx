'use client'
import React, { useState } from 'react';
import Input from '@/components/Input';
import RedCircles from '@/components/ui/RedCircles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { signUpSchema } from '@/schemas/signUpSchema';
import Link from 'next/link';
import axios from 'axios';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

function Signup() {

  const router = useRouter()
  const initialFormData = {
    name: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((toggleState) => !toggleState);
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', 
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validatedFormData = signUpSchema.parse(formData);
      console.log('Validated Data:', validatedFormData);
      const response = await axios.post('/api/sign-up', validatedFormData);
      toast.success('Signed up successfully!');
      router.push('/login')
    } catch (error) {
      console.log('Error occurred during signup:', error);
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.'; 
        console.log('errorMessage', errorMessage);
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center container py-10">
      <div className="relative shadow p-10 border-t-4 border-accent">
        <RedCircles />
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign <span className="bg-accent text-white px-8 rounded-full">Up</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              label="Name"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <Input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="relative ">
            
            <Input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute right-0 top-1/2 translate-y-1/2 mr-3 text-lg text-accent opacity-70 cursor-pointer"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>

            <div className="mb-5">
             {errors.password && <p className="text-red-500 text-sm absolute">{errors.password}</p>}
            </div>
            
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold py-3  rounded-lg hover:bg-red-500 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="flex space-x-2 pt-4">
          <p className="text-red-950">Already have an account? </p>
          <Link href="/login" className="text-accent font-bold underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
