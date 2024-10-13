'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ahasan from '../../public/nahid.jpg';
import Image from 'next/image';
import { FaFeatherAlt, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

function Navbar() {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { data: session, status } = useSession();
    const user = session?.user;
    const pathname = usePathname();

    const handleShowDropDown = () => {
        setShowDropDown(prevState => !prevState);
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

  

    return (
        <div className="relative bg-background shadow container h-16 flex justify-between border-x-4 border-x-accent">
            <Link href="/Home">
                <h2 className="h-full flex items-center gap-2">
                    <FaFeatherAlt size={30} color="#f56565" />
                    Bro's<span className="text-accent font-mono">word </span> 
                </h2>
            </Link>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={handleMobileMenuToggle} aria-label="Toggle Mobile Menu">
                    {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} className="text-accent" />}
                </button>
            </div>

            <ul className={`hidden md:flex space-x-4`}>
                {user ? (
                    <>
                        <li className={`navlink ${pathname === '/blog' ? 'text-accent' : ''}`}>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className={`navlink ${pathname === '/create' ? 'text-accent' : ''}`}>
                            <Link href="/create">Create</Link>
                        </li>
                        <li className="navlink no-underline relative">
                            <div className='flex items-center space-x-2'>
                             <span className='text-sm text-accent'>@{user?.name}</span>
                                <Image
                                    onClick={handleShowDropDown}
                                    src={ahasan}
                                    alt="avatar"
                                    sizes="100vw"
                                    className="w-10 h-10 rounded-full border-2 border-accent shadow-lg cursor-pointer"
                                />
                            </div>
                            {showDropDown && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white border-x border-x-accent shadow-lg rounded-lg z-50">
                                    <ul className="text-primary">
                                        <Link href="/profile" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                                            <FaUser className="text-accent" />
                                            <li>Profile</li>
                                        </Link>
                                        <button  onClick={() => signOut()} className="flex items-center w-full space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                                            <FaSignOutAlt className="text-accent" />
                                            <li>Logout</li>
                                        </button>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </>
                ) : (
                    <>
                        <li className="navlink no-underline space-x-2 hover:text-accent">
                            <FaSignInAlt />
                            <Link href="/login">Login</Link>
                        </li>
                        <li className="navlink no-underline font-mono">
                            <Link href="/signup" className="nav-auth">Signup</Link>
                        </li>
                    </>
                )}
            </ul>

            {isMobileMenuOpen && (
                <ul className="md:hidden absolute top-full right-0 w-1/2 bg-background shadow-lg flex flex-col items-start space-y-2 py-4 px-6 border-t-2 border-l border-accent z-50">
                    {user ? (
                        <>
                            <li className="navlink no-underline flex items-center space-x-2 mb-4" onClick={handleShowDropDown}>
                                <Image
                                    src={ahasan}
                                    alt="avatar"
                                    sizes="100vw"
                                    className="w-10 h-10 rounded-full border-2 border-accent shadow-lg cursor-pointer"
                                />
                             <span className='text-sm text-accent'>@{user?.name}</span>
                            </li>
                            {showDropDown && (
                                <div className="w-full mt-2">
                                    <ul className="text-primary">
                                        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                                            <FaUser className="text-accent" />
                                            <Link href="/profile">Profile</Link>
                                        </li>
                                        <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
                                            <FaSignOutAlt className="text-accent" />
                                            <button onClick={() => signOut()}>Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <li className={`${pathname === '/blog' ? 'text-accent' : ''} px-4 text-lg`}>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className={`${pathname === '/create' ? 'text-accent' : ''} px-4 text-lg`}>
                                <Link href="/create">Create</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="navlink no-underline space-x-2 hover:text-accent flex items-center">
                                <FaSignInAlt />
                                <Link href="/login">login</Link>
                            </li>
                            <li className="navlink no-underline font-mono flex items-center space-x-2 hover:text-accent">
                                <FaUserPlus />
                                <Link href="/signup">signup</Link>
                            </li>
                        </>
                    )}
                </ul>
            )}
        </div>
    );
}

export default Navbar;
