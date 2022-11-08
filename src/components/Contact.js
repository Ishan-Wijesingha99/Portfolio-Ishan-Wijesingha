
import React from "react";



export const Contact = function() {
    return (
        <div name="contact" className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-32">

            <div className="flex flex-col items-center mx-4">

                <div className="p-4 max-w-screen-lg w-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                        <p className="py-6">Submit the form below to get in touch with me</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <form 
                        action="https://getform.io/f/0904d584-4002-46db-b0f0-354c2b80e7a9" 
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                        >
                            <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />

                            <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />

                            <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter your message"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            >
                            </textarea>

                            <button
                            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 
                            mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                            >
                                Let's talk
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}