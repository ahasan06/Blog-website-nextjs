import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-background py-4 border-t border-accent">
      <div className="container mx-auto text-center space-y-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-red-500 transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-500 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-pink-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-700 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
    
        <p className="text-sm font-semibold text-red-950">&copy; {new Date().getFullYear()} Bro'sWord. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
