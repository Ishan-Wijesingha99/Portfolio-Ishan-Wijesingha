
import React from "react";



export const About = function() {
    return (
        <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-32">
            <div className="max-w-screen-lg p-4 mx-auto fkex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
                </div>

                <p className="text-xl mt-12">
                    I am full stack developer that is highly experienced in JavaScript and React JS. I've created multiple high-quality full stack applications using the MERN stack. I can work end-to-end, alone or in teams to create a product that people will love.
                </p>
                <br />

                <p className="text-xl">
                    I have an utter devotion to learning and remaining curious. I love incrementally improving my skills one day at a time. If I do not know something, I will not rest until I have mastered it.
                    I've used many technologies, many of which are listed below, but I have plenty of passion to learn any technology I must.
                </p>
            </div>
        </div>
    )
}