
import React from "react";
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import bootstrap from '../assets/bootstrap.png'
import jquery from '../assets/jquery.png'
import handlebars from '../assets/handlebars.png'
import mysql from '../assets/mysql.png'
import sequelize from '../assets/sequelize.png'
import jest from '../assets/jest.png'
import insomnia from '../assets/insomnia.png'
import postman from '../assets/postman.png'
import vscode from '../assets/vscode.png'
import materialize from '../assets/materialize.png'
import heroku from '../assets/heroku.png'
import figma from '../assets/figma.png'
import mongoose from '../assets/mongoose.png'

import redux from '../assets/redux.png'
import jwt from '../assets/jwt.png'
import graphql from '../assets/graphql.png'
import apollo from '../assets/apollo.png'
import webpack from '../assets/webpack.png'



export const Experience = function() {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-cyan-400'
        },
        {
            id: 5,
            src: redux,
            title: 'Redux',
            style: 'shadow-violet-400'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: git,
            title: 'Git',
            style: 'shadow-red-600'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id: 9,
            src: node,
            title: 'Node',
            style: 'shadow-lime-300'
        },
        {
            id: 10,
            src: mongo,
            title: 'MongoDB',
            style: 'shadow-green-400'
        },
        {
            id: 11,
            src: mongoose,
            title: 'Mongoose',
            style: 'shadow-red-800'
        },
        {
            id: 12,
            src: jest,
            title: 'Jest',
            style: 'shadow-orange-700'
        },
        {
            id: 13,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600'
        },
        {
            id: 14,
            src: jquery,
            title: 'jQuery',
            style: 'shadow-sky-700'
        },
        {
            id: 15,
            src: graphql,
            title: 'GraphQL',
            style: 'shadow-pink-600'
        },
        {
            id: 16,
            src: apollo,
            title: 'Apollo',
            style: 'shadow-indigo-700'
        },
        {
            id: 17,
            src: jwt,
            title: 'JSON Web Token',
            style: 'shadow-pink-600'
        },
        {
            id: 18,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-cyan-500'
        },
        {
            id: 19,
            src: sequelize,
            title: 'Sequelize',
            style: 'shadow-blue-400'
        },
        {
            id: 20,
            src: heroku,
            title: 'Heroku',
            style: 'shadow-violet-800'
        },
        {
            id: 21,
            src: figma,
            title: 'Figma',
            style: 'shadow-gray-600'
        },
        {
            id: 22,
            src: express,
            title: 'Express',
            style: 'shadow-zinc-600'
        },
        {
            id: 23,
            src: webpack,
            title: 'Webpack',
            style: 'shadow-sky-300'
        },
        {
            id: 24,
            src: insomnia,
            title: 'Insomnia',
            style: 'shadow-violet-700'
        },
        {
            id: 25,
            src: vscode,
            title: 'Visual Studio Code',
            style: 'shadow-sky-500'
        },
        {
            id: 26,
            src: materialize,
            title: 'Materialize',
            style: 'shadow-rose-300'
        },
        {
            id: 27,
            src: handlebars,
            title: 'Handlebars',
            style: 'shadow-yellow-800'
        },
        {
            id: 28,
            src: postman,
            title: 'Postman',
            style: 'shadow-orange-600'
        },
    ]

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full py-32">
            <div className="flex flex-col items-center mx-4">

                <div className="max-w-screen-lg p-4 h-full text-white w-full">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
                        <p className="py-6">These are the technologies I've worked with</p>
                    </div>

                    <div className="w-full grid grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                        {
                            techs.map(element => {
                                return (
                                    <div key={element.id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${element.style}`}>
                                        <img alt={element.title} src={element.src} className="w-20 mx-auto"/>
                                        <p className="mt-4">{element.title}</p>
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