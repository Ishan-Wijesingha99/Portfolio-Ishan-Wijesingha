
import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import resumeLink from '../assets/resume/Ishan-Wijesingha-RESUME.pdf'



export const SocialLinks = function() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/ishan-wijesingha-497222239/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Ishan-Wijesingha99'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:ishanwijes@gmail.com',
        }
    ]



    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>

                {links.map(element => {
                    return (
                        <li 
                        key={element.id}
                        className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${element.style}`}
                        >
                            <a 
                            href={element.href}
                            className="flex justify-between items-center w-full text-white"
                            download={element.download}
                            target='_blank'
                            rel="noreferrer"
                            >
                                {element.child}
                            </a>
                        </li>
                    )
                })}

                <li 
                key="4"
                className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-br-md"
                >
                    <a 
                    href={resumeLink}
                    className="flex justify-between items-center w-full text-white"
                    target='_blank'
                    rel="noreferrer"
                    >
                        <>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </>
                    </a>
                </li>

            </ul>
        </div>
    )
}