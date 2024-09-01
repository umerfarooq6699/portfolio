import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const HeroSection = () => {
    const { selectedColor } = useSelector(state => state.Management)
    const { mode } = useSelector(state => state.Management)
    // useEffect(()=>{
    //     localStorage.getItem("color")
    // },[mode])
    console.log(mode, "hero section mode")
    return (
        <>
            <div className={`w-[100%] h-auto ${mode !== "light-mode" ? "bg-black" : "bg-[rgb(241,242,251)]"} grid grid-cols-1 lg:grid-cols-2 py-5 lg:px-[120px] lg:py-[93px]`}>

                <div className='w-[99%] flex justify-center items-center'>
                    <div className='w-[90%]'>
                        <h1 className='text-2xl md:text-3xl'>Hello, my name is <span className={`text-[${selectedColor}]`}>umer farooq</span></h1>

                        <div className='main'>
                            <h1 className='text-[20px] font-[500]'>I'm a </h1>
                            <div class="digital_div" style={{borderRight:`4px solid ${selectedColor}`}}>
                                <h1 className={`headings text-[${selectedColor}] digital1`}>Web Developer</h1>
                                <h1 className={`headings text-[${selectedColor}] digital2`}>Web Designer</h1>
                                <h1 className={`headings text-[${selectedColor}] digital3`}>Freelancer</h1>
                            </div>
                        </div>

                        <p className='md:mt-5 text-justify'>Passionate web developer and designer with expertise in crafting responsive websites and innovative app development solutions, delivering exceptional user experiences, and staying updated with the latest industry trends and technologies</p>
                        <button className={`bg-[${selectedColor}] text-white rounded-2xl px-4 mt-5 py-1`}>More About Me</button>
                    </div>
                </div>

                <div className='w-full justify-center items-center hidden lg:flex'>
                    <div className=' relative'>
                        <div className="w-[60px] h-[60px] absolute -top-9 -left-9" style={{ borderTop: `7px solid ${selectedColor}`, borderLeft: `7px solid ${selectedColor}` }}></div>
                        <div>
                            <img src="https://i.pinimg.com/236x/b2/fb/0e/b2fb0ee8e28da1cc2bacaea09b8c981b.jpg" alt="" />
                        </div>
                        <div className="w-[60px] h-[60px] absolute -bottom-9 -right-9" style={{ borderBottom: `7px solid ${selectedColor}`, borderRight: `7px solid ${selectedColor}` }}></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection