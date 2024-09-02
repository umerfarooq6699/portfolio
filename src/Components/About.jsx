import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
    const {mode,selectedColor}=useSelector(state=>state.Management)
  return (
    <>
        <div className={`w-full h-auto lg:h-screen px-5 py-9 lg:px-[150px] lg:py-9 ${mode !== "light-mode" ? "bg-black" : "bg-[rgb(241,242,251)]"}`}>
            <div className='w-full'>
                <div>
                    <h1 className='text-2xl font-[500]'>About Me</h1>
                    <div className={`w-[37px] h-[3px] mt-2 bg-[${selectedColor}] `}></div>
                    <div className={`w-[25px] mt-1 h-[3px] bg-[${selectedColor}] `}></div>
                </div>
                <h1 className='mt-5 text-xl font-[700]'>I'm Umer Farooq and <span className={`text-[${selectedColor}] `}>Web Developer</span></h1>
                <p className={`mt-5 text-justify ${mode === "dark-mode" ? "text-[rgb(186,186,186)]" : "text-black"}`}>Passionate web developer and designer with a flair for crafting responsive, visually stunning websites. I specialize in innovative app development, creating seamless user experiences that stand out. With a strong background in modern technologies, I bring ideas to life with precision and creativity. Always eager to learn, adapt, and push the boundaries of what's possible in web design and development.</p>
            </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-9'>
            <div>
                <h1><span className='md:text-xl font-[500]'>Email :</span> <span className={`${mode === "dark-mode" ? "text-[rgb(186,186,186)]" : "text-black"} font-[500]`}>umer66997@gmail.com</span></h1>
                <h1 className='mt-3'><span className='md:text-xl font-[500]'>Phone :</span> <span className={`${mode === "dark-mode" ? "text-[rgb(186,186,186)]" : "text-black"} font-[500]`}>+923018067084</span></h1>
                <h1 className='mt-3'><span className='md:text-xl font-[500]'>City :</span> <span className={`${mode === "dark-mode" ? "text-[rgb(186,186,186)]" : "text-black"} font-[500]`}>Lahore</span></h1>
                <h1 className='mt-3'><span className='md:text-xl font-[500]'>Degree :</span> <span className={`${mode === "dark-mode" ? "text-[rgb(186,186,186)]" : "text-black"} font-[500]`}>umer66997@gmail.com</span></h1>
                <div className='mt-3 md:mt-6'>
                    <button className={`bg-[${selectedColor}] text-white rounded-2xl px-3 py-1`}>Download CV</button>
                    <button className={`bg-[${selectedColor}] ml-3 text-white rounded-2xl px-3 py-1`}>Hire Me</button>
                </div>
            </div>

            <div className='mt-7 md:mt-0'>

                <div>
                    <div className='flex justify-between'><h1>JS</h1><h1>84%</h1></div>
                    <div className={`w-full h-[5px] bg-gray-500 mt-1`}>
                        <div className={`w-[84%] h-[5px] bg-[${selectedColor}]`}></div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-between'><h1>React</h1><h1>88%</h1></div>
                    <div className={`w-full h-[5px] bg-gray-500 mt-1`}>
                        <div className={`w-[88%] h-[5px] bg-[${selectedColor}]`}></div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-between'><h1>Next</h1><h1>82%</h1></div>
                    <div className={`w-full h-[5px] bg-gray-500 mt-1`}>
                        <div className={`w-[82%] h-[5px] bg-[${selectedColor}]`}></div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-between'><h1>Node</h1><h1>80%</h1></div>
                    <div className={`w-full h-[5px] bg-gray-500 mt-1`}>
                        <div className={`w-[80%] h-[5px] bg-[${selectedColor}]`}></div>
                    </div>
                </div>

            </div>
            
        </div>

        </div>
    </>
  )
}

export default About