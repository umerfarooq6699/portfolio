import React from 'react'
import Image1 from "../Images/web-development.PNG"
import Image2 from "../Images/graphic-designing.PNG"
import Image3 from "../Images/app-development.PNG"
import Image4 from "../Images/marketing.PNG"
import { useSelector } from 'react-redux'

const Services = () => {
    const { mode, selectedColor } = useSelector(state => state.Management)
    console.log(mode, "Services")
    return (
        <>
            <div className={`w-full ${mode !== "light-mode" ? "bg-black" : "bg-[rgb(241,242,251)]"} px-4 md:px-[100px] py-9`}>
                <div>
                    <div className='w-[195px] mx-auto'>
                        <h1 className='text-2xl font-[600]'>Services I Provide</h1>
                        <div className={`w-[100px] bg-[${selectedColor}] h-[4px] mt-2`}></div>
                        <div className={`w-[50px] mt-1 bg-[${selectedColor}] h-[4px]`}></div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-[50px] rounded-xl'>

                        <div className={`bg-white  shadow-lg hover:-translate-y-6 transition-all duration-300 cursor-pointer`}>
                            <div className='w-full h-[200px]'><img src={Image1} className='w-full h-full' alt="" /></div>
                            <div className={` pb-5 ${mode === "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"} pt-1`}>
                                <h1 className='text-center mt-4 text-2xl font-[500]'>Web Development</h1>
                                <p className='text-justify mt-5 px-3'>Building responsive, secure, and dynamic websites tailored to your business goals. I focus on user experience, modern design, and performance to create solutions that effectively represent your brand and engage your audience.</p>
                            </div>
                        </div>

                        <div className={`bg-white  shadow-lg hover:-translate-y-6 transition-all duration-300 cursor-pointer`}>
                            <div className='w-full h-[200px]'><img src={Image2} className='w-full h-full' alt="" /></div>
                            <div className={` pb-5 ${mode === "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"} pt-1`}>
                                <h1 className='text-center mt-4 text-2xl font-[500]'>Graphic Designing</h1>
                                <p className='text-justify mt-5 px-3'>Crafting visually stunning and impactful designs that reflect your brand's unique identity. From logos to marketing materials, I deliver creative solutions that engage your audience and elevate your brand's visual presence.</p>
                            </div>
                        </div>

                        <div className={`bg-white  shadow-lg hover:-translate-y-6 transition-all duration-300 cursor-pointer`}>
                            <div className='w-full h-[200px]'><img src={Image3} className='w-full h-full' alt="" /></div>
                            <div className={` pb-5 ${mode === "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"} pt-1`}>
                                <h1 className='text-center mt-4 text-2xl font-[500]'>App Development</h1>
                                <p className='text-justify mt-5 px-3'>Developing intuitive and powerful mobile and web applications tailored to your needs. Specializing in user-friendly interfaces and robust functionality, I turn ideas into efficient, high-performance apps that engage and delight.</p>
                            </div>
                        </div>

                        <div className={`bg-white  shadow-lg hover:-translate-y-6 transition-all duration-300 cursor-pointer`}>
                            <div className='w-full h-[200px]'><img src={Image4} className='w-full h-full' alt="" /></div>
                            <div className={` pb-5 ${mode === "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"} pt-1`}>
                                <h1 className='text-center mt-4 text-2xl font-[500]'>Digital Marketing</h1>
                                <p className='text-justify mt-5 px-3'>Boost your online presence with tailored digital marketing strategies. From SEO to social media management, I drive targeted traffic and enhance your brand's visibility, ensuring results that help your business grow.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services