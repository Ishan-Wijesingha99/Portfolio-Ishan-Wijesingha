
import React from "react";
import reactWeatherAppImg from '../assets/portfolio/react-weather-app.png'
import moviesAndMusicDatabaseImg from '../assets/portfolio/movies-and-music-database.png'
import aGameOfChanceImg from '../assets/portfolio/a-game-of-chance.png'
import randomPasswordGeneratorImg from '../assets/portfolio/random-password-generator.png'
import hourlyPlannerForEmployeesImg from '../assets/portfolio/hourly-planner-for-employees.png'



export const Portfolio = function() {
    
    const portfolios = [
        {
            id: 1,
            title: 'React Weather App',
            src: reactWeatherAppImg
        },
        {
            id: 2,
            title: 'A Game of Chance',
            src: aGameOfChanceImg
        },
        {
            id: 3,
            title: 'Movies and Music Database',
            src: moviesAndMusicDatabaseImg
        },
        {
            id: 4,
            title: 'Random Password Generator',
            src: randomPasswordGeneratorImg
        },
        {
            id: 5,
            title: 'Hourly Planner for Employees',
            src: hourlyPlannerForEmployeesImg
        },
    ]


    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-32">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                    {portfolios.map((element, i) => {
                        return (
                                <div key={element.id} className="shadow-md shadow-gray-600 rounded-lg pt-2">
                                    <p className="text-center my-4 mx-2 font-bold tracking-wider">{element.title}</p>

                                    <img
                                        src={element.src}
                                        alt={`project ${i}`}
                                        className="h-1/2 object-fill mx-auto w-full"
                                    />

                                    <div className="flex items-center justify-around pt-6 pb-6">
                                        <button
                                        className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-105 sm:mb-6"
                                        >
                                            Demo
                                        </button>
                                        <button
                                        className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-105 sm:mb-6"
                                        >
                                            Code
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            
            </div>
        </div>
    )
}