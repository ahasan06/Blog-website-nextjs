'use client'
import React, { useState } from 'react';
import Input from '@/components/Input';
import RedCircles from '@/components/ui/RedCircles';
import Link from 'next/link';

function Signup() {
  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center container py-10">
      <div className="relative shadow p-10 border-t-4 border-accent">
        <RedCircles />
        <h1 className="text-3xl font-bold mb-6 text-center">Log <span className=" bg-accent text-white px-8 rounded-full">in</span></h1>
        <form onSubmit={handleSubmit} className="space-y-4">

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


          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-red-500 transition-colors">
            Sign Up
          </button>
        </form>

        <div className="flex space-x-2 pt-4">
          <p className="text-red-950">Don't have an account? </p>  
          <Link href="/signup" className="text-accent font-bold underline">
            Signup now
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Signup
