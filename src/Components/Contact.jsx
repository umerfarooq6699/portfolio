import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
    const { mode, selectedColor } = useSelector(state => state.Management)
    return (
        <div className={`px-2 lg:px-[150px] py-9 ${mode !== "light-mode" ? "bg-black" : "bg-[rgb(241,242,251)]"}`}>
            <div>
                <div className='w-[195px]'>
                    <h1 className='text-2xl font-[600]'>Contact Me</h1>
                    <div className={`w-[60px] bg-[${selectedColor}] h-[4px] mt-2`}></div>
                    <div className={`w-[30px] mt-1 bg-[${selectedColor}] h-[4px]`}></div>
                </div>
                <div className='w-[250px] mx-auto'>
                    <h1 className={`text-[${selectedColor}] text-xl font-[500] mt-9 md:mt-0`}>Have You Any Questions ?</h1>
                    <h1 className='text-[13px] text-center mt-2 font-[500]'>I'M AT YOUR SERVICE</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 mt-9'>

                    <div className={`flex justify-center items-center flex-col`}>
                        <div>
                            <i class={`fa-solid text-2xl text-[${selectedColor}] fa-phone`}></i>
                        </div>
                        <h1 className='mt-2 font-[500]'>Call Us On</h1>
                        <span className='mt-1'>+923303737084</span>
                    </div>

                    <div className={`flex justify-center items-center flex-col mt-9 md:mt-0`}>
                        <div>
                            <i class={`fa-solid text-[${selectedColor}] text-2xl fa-location-dot`}></i>
                        </div>
                        <h1 className='mt-2 font-[500]'>Location</h1>
                        <span className='mt-1'>lahore , Pakistan</span>
                    </div>

                    <div className={`flex justify-center items-center flex-col mt-9 md:mt-0`}>
                        <div>
                            <i class={`fa-solid text-[${selectedColor}] text-2xl fa-envelope`}></i>
                        </div>
                        <h1 className='mt-2 font-[500]'>Email</h1>
                        <span className='mt-1'>umer66997@gmail.com</span>
                    </div>

                    <div className={`flex justify-center items-center flex-col mt-9 md:mt-0`}>
                        <div>
                            <i class={`fa-solid text-2xl text-[${selectedColor}] fa-phone`}></i>
                        </div>
                        <h1 className='mt-2 font-[500]'>Call Us On</h1>
                        <span className='mt-1'>+923303737084</span>
                    </div>

                </div>

                <div className='w-[250px] mx-auto mt-[50px]'>
                    <h1 className={`text-[${selectedColor}] text-xl text-center font-[500]`}>SEND ME AN EMAIL</h1>
                    <h1 className='text-[13px] text-center mt-2 font-[500]'>I'M VERY RESPONSIVE TO MESSAGES</h1>
                </div>

                <div className='mt-9'>
                    <form action="">
                        <div className='md:flex justify-between'>
                            <input type="text" placeholder='Name' className={`w-full md:w-[49%] rounded-full px-4 py-2 mt-6    ${mode === "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"}`} />
                            <input type="text" placeholder='Email' className={`w-full md:w-[49%] rounded-full px-4 py-2 mt-6   ${mode === "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"}`} />
                        </div>
                        <input type="text" placeholder='Subject' className={`w-full rounded-full px-4 py-2 mt-6  ${mode === "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"}`} />
                        <textarea name="" cols={30} rows={5} placeholder='Message' className={`w-full rounded-3xl px-4 py-2 mt-6   ${mode === "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"}`} id=""></textarea>
                        <button className={`bg-[${selectedColor}] rounded-full px-9 py-2 mt-5`}>Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact