import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchColors, setMode } from './Slice'

const Navbar = () => {
    const [gearIcon, setgear] = useState(false)
    const colorsArray = ["rgb(255,46,55)", "rgb(13,79,175)", "rgb(28,162,130)", "rgb(254,102,16)", "rgb(255,61,178)"]

    const dispatch = useDispatch()
    const { mode, selectedColor } = useSelector(state => state.Management)

    const handleIcon = () => {
        const newMode = mode === "dark-mode" ? "light-mode" : "dark-mode"
        dispatch(setMode(newMode))
    }
    useEffect(() => {
        document.querySelector("body").className = mode
        localStorage.setItem("color", mode)
    }, [mode])

    const handleGear = () => {
        setgear(!gearIcon)
    }

    const handleColors = (clr) => {
        // setcolor(clr)
        dispatch(dispatchColors(clr))
    }

    console.log(gearIcon)
    console.log(selectedColor)

    return (

        <div className={`w-full h-[60px] lg:h-[100px] ${mode !== "light-mode" ? "bg-black" : "bg-[rgb(241,242,251)]"}  flex items-center justify-between px-5 lg:px-12`}>
            <div className='relative hidden lg:block'>
                <div className="w-[20px] h-[20px] absolute -top-3 -right-3" style={{ borderTop: `3px solid ${selectedColor}`, borderRight: `3px solid ${selectedColor}` }}></div>
                <h1 className='developer'>Developer</h1>
                <div className="w-[20px] h-[20px] absolute -bottom-3 -left-3" style={{ borderBottom: `3px solid ${selectedColor}`, borderLeft: `3px solid ${selectedColor}` }}></div>
            </div>
            <div className='w-[30px] h-[30px] block lg:hidden'><i class={`fa-solid text-[${selectedColor}] text-2xl font-[600] fa-bars`}></i></div>
            <ul className='developer hidden lg:flex'>
                <li className={`ml-4 cursor-pointer hover:text-[${selectedColor}] hover:border-b border-[${selectedColor}] transition-all duration-300`}>HOME</li>
                <li className={`ml-4 cursor-pointer hover:text-[${selectedColor}] hover:border-b border-[${selectedColor}] transition-all duration-300`}>ABOUT</li>
                <li className={`ml-4 cursor-pointer hover:text-[${selectedColor}] hover:border-b border-[${selectedColor}] transition-all duration-300`}>SERVEICES</li>
                <li className={`ml-4 cursor-pointer hover:text-[${selectedColor}] hover:border-b border-[${selectedColor}] transition-all duration-300`}>WORK</li>
                <li className={`ml-4 cursor-pointer hover:text-[${selectedColor}] hover:border-b border-[${selectedColor}] transition-all duration-300`}>CONTACT US</li>
            </ul>

            <div className={`fixed top-[70px] ${gearIcon ? "right-5" : "-right-[150px]"} flex transition-all duration-300`}>
            
                <div className=''>
                    <div onClick={handleGear} className={`w-[33px] h-[33px] ${mode == "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"} rounded-full flex justify-center items-center  cursor-pointer`}>
                        <i class="gear fa-solid fa-gear text-xl"></i>
                    </div>
                    <div onClick={handleIcon} className={`w-[35px] h-[35px] ${mode == "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"} mt-3 rounded-full flex justify-center items-center cursor-pointer`}>
                        {
                            mode === "light-mode"
                                ?
                                <i class="fa-solid fa-moon text-xl"></i>
                                :
                                <i class="fa-regular fa-sun text-xl"></i>
                        }
                    </div>
                </div>
            
                <div className={`${mode == "dark-mode" ? "bg-[rgb(34,34,34)]" : "bg-white"} ml-5 rounded p-2`}>
                    <h1 className='text-center'>Theme Colors</h1>
                    <div className='flex'>
                        {
                            colorsArray.map((e, i) => {
                                return (
                                    <div onClick={() => handleColors(e)} className={`w-[20px] h-[20px] bg-[${e}] ${i !== 0 ? "ml-2" : "ml-0"} mt-2 cursor-pointer rounded-full`}></div>
                                )
                            })
                        }
                    </div>
                </div>
            
            </div>

        </div>

)
}

export default Navbar