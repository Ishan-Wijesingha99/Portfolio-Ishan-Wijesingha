
import React from "react";
import heroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'



export const Home = function() {
    return (
        <div name="home" className="py-32 w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-12">
                <div className="flex flex-col justify-center h-full mx-4">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md text-justify">
                        When it comes to JavaScript and React JS, I'm your guy!
                        I've dedicated myself to becoming an expert in all things React, check out my portfolio below and you can be the judge!
                    </p>

                    <div>
                        <Link
                        to="portfolio"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-110"
                        >
                            Portfolio

                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={20} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="md:ml-8">
                    <img src={heroImage} alt="my profile pic" className="mt-16 rounded-2xl w-2/3 md:w-4/5 md:mt-0 mx-auto"/>
                </div>
            </div>
        </div>
    )
}