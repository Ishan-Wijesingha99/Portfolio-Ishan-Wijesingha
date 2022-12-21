
import React from "react";
import reactWeatherAppImg from '../assets/portfolio/react-weather-app.png'
import moviesAndMusicDatabaseImg from '../assets/portfolio/movies-and-music-database.png'
import aGameOfChanceImg from '../assets/portfolio/a-game-of-chance.png'
import randomPasswordGeneratorImg from '../assets/portfolio/random-password-generator.png'
import hourlyPlannerForEmployeesImg from '../assets/portfolio/hourly-planner-for-employees.png'
import ponderSocialMediaApp from '../assets/portfolio/ponder-social-media-app.png'
import musicMonkey from '../assets/portfolio/music-monkey.png'



const majorProjects = [
    {
        id: 1,
        title: 'Ponder - Social Media App',
        src: ponderSocialMediaApp,
        demoURL: 'https://ponder-social-media.netlify.app/',
        codeURL: 'https://github.com/Ishan-Wijesingha99/Ponder-Social-Media-App'
    },
    {
        id: 2,
        title: 'Music Monkey - Music Player',
        src: musicMonkey,
        demoURL: 'https://music-monkey.netlify.app/',
        codeURL: 'https://github.com/Ishan-Wijesingha99/Music-Monkey'
    },
    {
        id: 3,
        title: 'Movies and Music Database',
        src: moviesAndMusicDatabaseImg,
        demoURL: 'https://seangenge.github.io/m-mDB/',
        codeURL: 'https://github.com/SeanGenge/m-mDB'
    }
]



const smallerProjects = [
    {
        id: 1,
        title: 'React Weather App',
        src: reactWeatherAppImg,
        demoURL: 'https://ishan-wijesingha99.github.io/React-Weather-App/',
        codeURL: 'https://github.com/Ishan-Wijesingha99/React-Weather-App'
    },
    {
        id: 2,
        title: 'A Game of Chance',
        src: aGameOfChanceImg,
        demoURL: 'https://ishan-wijesingha99.github.io/A-Game-Of-Chance/',
        codeURL: 'https://github.com/Ishan-Wijesingha99/A-Game-Of-Chance'
    },
    {
        id: 3,
        title: 'Random Password Generator',
        src: randomPasswordGeneratorImg,
        demoURL: 'https://ishan-wijesingha99.github.io/Random-Password-Generator/',
        codeURL: 'https://github.com/Ishan-Wijesingha99/Random-Password-Generator'
    },
    {
        id: 4,
        title: 'Hourly Planner for Employees',
        src: hourlyPlannerForEmployeesImg,
        demoURL: 'https://ishan-wijesingha99.github.io/Hourly-Planner-For-Employees/',
        codeURL: 'https://github.com/Ishan-Wijesingha99/Hourly-Planner-For-Employees'
    },
]



export const Portfolio = function() {
    
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-32">
            <div className="flex flex-col items-center">

                <div className="max-w-screen-lg p-4 h-full mx-4">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                        <p className="py-6">Check out some of my work</p>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-4xl font-bold inline border-gray-500 mb-8">Major Projects</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-24">
                        {majorProjects.map((element, i) => {
                            return (
                                    <div key={element.id} className="shadow-md shadow-gray-600 rounded-lg pt-2">
                                        <p className="text-center my-4 mx-2 font-bold tracking-wider">{element.title}</p>

                                        <img
                                            src={element.src}
                                            alt={`project ${i}`}
                                            className="h-1/2 object-fill mx-auto w-full"
                                        />

                                        <div className="flex items-center justify-around pt-6 pb-6">

                                            <a href={element.demoURL} target="_blank">
                                                <button
                                                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-110 sm:mb-6"
                                                >
                                                    Demo
                                                </button>
                                            </a>
                                                
                                            <a href={element.codeURL} target="_blank">
                                                <button
                                                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-110 sm:mb-6"
                                                >
                                                    Code
                                                </button>
                                            </a>
                                        
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-4xl font-bold inline border-gray-500 mb-8">Smaller Projects</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                        {smallerProjects.map((element, i) => {
                            return (
                                    <div key={element.id} className="shadow-md shadow-gray-600 rounded-lg pt-2">
                                        <p className="text-center my-4 mx-2 font-bold tracking-wider">{element.title}</p>

                                        <img
                                            src={element.src}
                                            alt={`project ${i}`}
                                            className="h-1/2 object-fill mx-auto w-full"
                                        />

                                        <div className="flex items-center justify-around pt-6 pb-6">

                                            <a href={element.demoURL} target="_blank">
                                                <button
                                                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-110 sm:mb-6"
                                                >
                                                    Demo
                                                </button>
                                            </a>
                                                
                                            <a href={element.codeURL} target="_blank">
                                                <button
                                                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-200 hover:scale-110 sm:mb-6"
                                                >
                                                    Code
                                                </button>
                                            </a>
                                        
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                
                </div>

            </div>
        </div>
    )
}