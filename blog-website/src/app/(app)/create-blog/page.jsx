'use client'
import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import Image from 'next/image'
import Input from '@/components/Input'
import Select from '@/components/Select'
import TextArea from '@/components/TextArea'
import demoImage from '../../../../public/nahid.jpg'
import Button from '@/components/Button'
import RedCircles from '@/components/ui/RedCircles'

function CreateBlog() {
    const categories = [
        "history",
        "photography",
        "science fiction",
        "technology",
        "art",
        "travel",
        "programming",
        "trending"
    ];

    const initialFormData = {
        title: '',
        description: '',
        excerpt: '',
        qoute: '',
        category: '',
    };

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null); // New state for preview image

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle image input changes
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {  // Check if a file is selected
            setImageFile(file);
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setImageFile(null);
            setPreviewImage(null);
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let imageUrl = '';
            let imageId = '';
            if (imageFile) {
                const imageFormData = new FormData();
                imageFormData.append('image', imageFile);
                const imageUploadRes = await axios.post('/api/uploadImage', imageFormData);
                
                if (!imageUploadRes) throw new Error("Failed to upload image");

                imageUrl = imageUploadRes.data.url;
                imageId = imageUploadRes.data.id;
            }

            const blogData = {
                ...formData,
                image: { url: imageUrl, id: imageId },
            };

            const blogRes = await axios.post('/api/create-blog', blogData);
            if (!blogRes) throw new Error("Failed to create Blog!");

            toast.success('Blog created successfully');
            setFormData(initialFormData);
            setImageFile(null);
            setPreviewImage(null); // Clear preview
        } catch (error) {
            console.error('Error creating blog:', error);
            toast.error('Failed to create blog');
        } finally {
            setIsLoading(false);
            setFormData(initialFormData);
            setImageFile(null);
            setPreviewImage(null);
        }
    };

    return (
        <div className='container max-w-3xl overflow-hidden md:overflow-visible min-h-screen'>
            <h2 className='mt-5 '>
                Create <span className='text-red-400'> Blog </span>
            </h2>

            <form onSubmit={handleSubmit} className='relative space-y-5 shadow rounded-md p-5 my-5 md:my-10 border-y-4 border-red-500'>
                <RedCircles />
                
                <Input
                    label="Title"
                    type="text"
                    name="title"
                    placeholder="Enter your blog title here"
                    value={formData.title}
                    onChange={handleChange}
                />
                <TextArea
                    label="Add Descriptions"
                    name="description"
                    placeholder="Enter your blog descriptions"
                    value={formData.description}
                    onChange={handleChange}
                />
                <TextArea
                    label="Excerpt"
                    name="excerpt"
                    placeholder="Enter a short excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                />
                <TextArea
                    label="Quote"
                    name="qoute"
                    placeholder="Enter a notable quote"
                    value={formData.qoute}
                    onChange={handleChange}
                />
                
                <Select
                    label="Select Category"
                    name="category"
                    options={categories}
                    value={formData.category}
                    onChange={handleChange}
                />

                <div>
                    <Input
                        onChange={handleImageChange}
                        label="Upload Image"
                        type="file"
                        name="photo"
                        accept="image/*"
                    />
                    {previewImage && (
                        <Image
                            src={previewImage}
                            alt="Selected image preview"
                            width={100}
                            height={100}
                            className='w-32 mt-5 rounded-lg shadow border-2 border-red-400'
                        />
                    )}
                </div>

                <Button type="submit" isLoading={isLoading}>
                    Submit Blog
                </Button>
            </form>
        </div>
    );
}

export default CreateBlog;
