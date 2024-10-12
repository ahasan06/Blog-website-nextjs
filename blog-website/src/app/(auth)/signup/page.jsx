'use client'
import React, { useState } from 'react';
import Input from '@/components/Input';
import RedCircles from '@/components/ui/RedCircles';
import Link from 'next/link';

function Signup() {
  const initialFormData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form validation or API submission logic here
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center container py-10">
      <div className="relative shadow p-10 border-t-4 border-accent">
        <RedCircles />
        <h1 className="text-3xl font-bold mb-6 text-center">Sign <span className=" bg-accent text-white px-8 rounded-full">Up</span></h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            label="Name"
            placeholder="Enter your name"
          />

          <Input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />

          <Input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <Input
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
          />

          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-red-500 transition-colors">
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
  )
}

export default Signup
