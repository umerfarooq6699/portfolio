import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import wingos from '../Images/wingos.PNG'
import pets from '../Images/pets.PNG'
import movies from '../Images/movies.PNG'

const Works = () => {
    const { mode, selectedColor } = useSelector(state => state.Management)
    return (
        <div className={`w-full px-5 md:px-[150px] py-9 border border-red-500 ${mode !== "light-mode" ? "bg-black" : "bg-[rgb(241,242,251)]"}`}>
            <div>
                <div>
                    <h1 className='text-xl font-[500]'>Portfolio</h1>
                    <div className={`w-[50px] h-[3px] mt-1 bg-[${selectedColor}]`}></div>
                    <div className={`w-[25px] h-[3px] mt-1 bg-[${selectedColor}]`}></div>
                </div>
                <h1 className='text-xl font-[500] mt-4'>My Last Projects :</h1>

                <div className='grid grid-cols-1 gap-5 md:grid-cols-4 mt-9'>

                    <div>
                        <a href="https://wingos-food.vercel.app/">
                            <div className='w-full h-[200px]'>
                                <img className='w-full h-full' src={wingos} alt="image" />
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://tumiepetsapp.netlify.app/">
                            <div className='w-full h-[200px]'>
                                <img className='w-full h-full' src={pets} alt="image" />
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://popularmoviesapp.netlify.app/">
                            <div className='w-full h-[200px]'>
                                <img className='w-full h-full' src={movies} alt="image" />
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://wingos-food.vercel.app/">
                            <div className='w-full h-[200px]'>
                                <img className='w-full h-full' src={wingos} alt="image" />
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Works