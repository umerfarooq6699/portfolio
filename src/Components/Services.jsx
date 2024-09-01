import React from 'react'
import Image1 from "../Images/web-development.PNG"
import Image2 from "../Images/graphic-designing.PNG"
import Image3 from "../Images/app-development.PNG"
import Image4 from "../Images/marketing.PNG"

const Services = () => {
    return (
        <>
            <div className='w-full px-4 md:px-[100px] py-9'>
                <div>
                    <h1 className='text-center text-2xl font-[600]'>Services I Provide</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-[50px] rounded-xl'>

                        <div className='bg-white shadow-lg rounded-2xl pb-5'>
                            <div><img src={Image1} className='w-full h-full' alt="" /></div>
                            <h1 className='text-center mt-4 text-2xl font-[500]'>Web Development</h1>
                            <p className='text-justify mt-5 px-3'>Building responsive, secure, and dynamic websites tailored to your business goals. I focus on user experience, modern design, and performance to create solutions that effectively represent your brand and engage your audience.</p>
                        </div>
                        <div className='bg-white shadow-lg rounded-2xl pb-5'>
                            <div><img src={Image2} className='w-full h-full' alt="" /></div>
                            <h1 className='text-center mt-4 text-2xl font-[500]'>Graphic Designing</h1>
                            <p className='text-justify mt-5 px-3'>Crafting visually stunning and impactful designs that reflect your brand's unique identity. From logos to marketing materials, I deliver creative solutions that engage your audience and elevate your brand's visual presence.</p>
                        </div>
                        <div className='bg-white shadow-lg rounded-2xl pb-5'>
                            <div className=''><img src={Image3} className='w-full h-full' alt="" /></div>
                            <h1 className='text-center mt-4 text-2xl font-[500]'>App Development</h1>
                            <p className='text-justify mt-5 px-3'>Developing intuitive and powerful mobile and web applications tailored to your needs. Specializing in user-friendly interfaces and robust functionality, I turn ideas into efficient, high-performance apps that engage and delight.</p>
                        </div>
                        <div className='bg-white shadow-lg rounded-2xl pb-5'>
                            <div className=''><img src={Image4} className='w-full h-full' alt="" /></div>
                            <h1 className='text-center mt-4 text-2xl font-[500]'>Digital Marketing</h1>
                            <p className='text-justify mt-5 px-3'>Boost your online presence with tailored digital marketing strategies. From SEO to social media management, I drive targeted traffic and enhance your brand's visibility, ensuring results that help your business grow.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services