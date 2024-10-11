'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import ahasan from '../../public/nahid.jpg'
import Image from 'next/image';
import { FaFeatherAlt, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation'

function Navbar() {
    const [showDropDown, setShowDropDown] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const LoggedIn = true
    const handleShowDropDown = () => {
        setShowDropDown(prevState => !prevState)
    }
    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(prevState => !prevState)
    }

    return (
        <div className="relative bg-background shadow container h-16 flex  justify-between  border-x-4  border-x-accent">

            <Link href="/">
                <h2 className="h-full flex items-center gap-2"><FaFeatherAlt size={30} color="#f56565" /> Bro's<span className="text-accent font-mono">word</span></h2>
            </Link>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={handleMobileMenuToggle} aria-label="Toggle Mobile Menu">
                    {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} className="text-accent"/>}
                </button>
            </div>


            <ul className={`hidden md:flex space-x-4`}>

                {
                    LoggedIn ? (
                        <>
                            <li className={`navlink ${pathname === '/blog' ? 'text-accent' : ''}`}>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className={`navlink ${pathname === '/create' ? 'text-accent' : ''}`}>
                                <Link href="/create">Create</Link>
                            </li>
                            <li className="navlink no-underline relative">
                                <div>
                                    <Image
                                        onClick={handleShowDropDown}
                                        src={ahasan}
                                        alt="avatar"
                                        sizes="100vw"
                                        className="w-10 h-10 rounded-full border-2 border-accent shadow-lg cursor-pointer "
                                    >

                                    </Image>
                                </div>
                                {
                                    showDropDown &&
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-white border-x border-x-accent shadow-lg rounded-lg z-50">
                                        <ul className="text-primary">
                                            <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                                                <FaUser className="text-accent" />
                                                <Link href="/profile">Profile</Link>
                                            </li>
                                            <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                                                <FaSignOutAlt className="text-accent" />
                                                <Link href="/logout">Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                }

                            </li>

                        </>
                    ) : (

                        <>
                            <li className="navlink no-underline space-x-2 hover:text-accent">
                                <FaSignInAlt />
                                <Link href="/">Login</Link>
                            </li>
                            <li className="navlink no-underline font-mono">
                                <Link href="/" className="nav-auth">signup</Link>
                            </li>
                        </>

                    )
                }


            </ul>

            {isMobileMenuOpen && (
                <ul className="md:hidden absolute top-full  right-0 w-1/2 bg-background shadow-lg flex flex-col items-start space-y-2 py-4 px-6  border-t-2 border-l border-accent z-50">
                    {LoggedIn ? (
                        <>
                            <li className="navlink no-underline flex items-center space-x-2 mb-4" onClick={handleShowDropDown}>
                                <Image
                                    src={ahasan}
                                    alt="avatar"
                                    sizes="100vw"
                                    className="w-10 h-10 rounded-full border-2 border-accent shadow-lg cursor-pointer"
                                />
                                <span>Ahasan</span>
                            </li>

                            {showDropDown && (
                                <div className="w-full mt-2 ">
                                    <ul className="text-primary">
                                        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                                            <FaUser className="text-accent" />
                                            <Link href="/profile">Profile</Link>
                                        </li>
                                        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                                            <FaSignOutAlt className="text-accent" />
                                            <Link href="/logout">Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            <li className={` ${pathname === '/blog' ? 'text-accent' : ''} px-4 text-lg`}>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className={` ${pathname === '/create' ? 'text-accent' : ''} px-4 text-lg`}>
                                <Link href="/create">Create</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="navlink no-underline space-x-2 hover:text-accent flex items-center">
                                <FaSignInAlt />
                                <Link href="/">Login</Link>
                            </li>
                            <li className="navlink no-underline font-mono flex items-center space-x-2">
                                <FaUserPlus />
                                <Link href="/">Signup</Link>
                            </li>
                        </>
                    )}
                </ul>
            )}
   

        </div>
    )
}

export default Navbar