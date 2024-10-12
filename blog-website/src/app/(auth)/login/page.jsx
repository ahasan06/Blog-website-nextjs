'use client'
import React, { useState } from 'react';
import Input from '@/components/Input';
import RedCircles from '@/components/ui/RedCircles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';

function Signup() {
  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassWord = () => {
    setShowPassword(toggleState => !toggleState)
  }


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

          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            {
              showPassword ? (
                <button type="button" onClick={handleShowPassWord} className="absolute right-0 top-1/2 translate-y-1/2 mr-3 text-lg text-accent opacity-70 cursor-pointer">
                  <AiOutlineEyeInvisible />
                </button>
              ) :
                (
                  <button type="button" onClick={handleShowPassWord} className="absolute right-0 top-1/2 translate-y-1/2 mr-3 text-lg text-accent opacity-70 cursor-pointer">
                    <AiOutlineEye
                    />
                  </button>
                )
            }
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-red-500 transition-colors">
            Login
          </button>
        </form>

        <div className="flex space-x-2 pt-4">
          <p className="text-red-950">Don't have an account? </p>
          <Link href="/signup" className="text-accent font-bold underline">
            Sign up 
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Signup
