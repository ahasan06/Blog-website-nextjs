import React from 'react'
import { FaPen,FaFeatherAlt } from 'react-icons/fa';
import Image from 'next/image';
import Blog_Icon from '../../../../public/blog_icon.png'
function page() {
  return (
    <div className="container flex flex-col-reverse md:flex-row h-[calc(100vh-4rem)]">
      <div className="basis-full md:basis-2/3 lg:basis-2/6 flex flex-col justify-center">
        <p className="special-word text-xs font-mono capitalize font-semibold">world largest blogging website</p>
        <h1 className="pb-5">Create your Own <span className="text-accent">Blog</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat vel fugiat ipsam dolor at laborum ex optio doloremque dolorum.</p>
      </div>
      <div className="hidden basis-full lg:basis-4/6 md:flex flex-col justify-center items-center">
        <Image
         src={Blog_Icon}
         alt="avatar"
         sizes="100vw"
        >
        </Image>
      </div>
    </div>
  )
}

export default page
