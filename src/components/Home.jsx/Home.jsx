import React, { useEffect, useState } from 'react';

import Lottie from 'lottie-react'
import aname from "./aname.json";

import './Home.css'
import Hedding from './Hedding.jsx/Hedding';
import Curses from './curses.jsx/curses';
import { data } from 'autoprefixer';


const Home = () => {

    let [set, setApi] = useState([])

    useEffect(() => {


        let url = `Fake.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setApi(data))

    }, [])




    return (
        <div>
            <div className='banner-c flex items-center mt-5 '>
                <div className=' w-1/2 ml-20'>
                    <h1 className='text-7xl font-bold text-gray-700'>Hi THer`e</h1>
                    <p className=' text-gray-900 py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae quidem sequi veniam cupiditate dignissimos praesentium doloribus culpa perferendis, nulla cum recusandae, temporibus aspernatur iste odit accusantium aliquid. Labore voluptate consequuntur quas placeat. Ipsam officia earum architecto deleniti. Architecto fuga recusandae eum aperiam vel accusamus!</p>
                    <button className='px-7 py-3 bg-gray-700 rounded-lg text-white'> read more </button>
                </div>
                <div className='w-1/2'>
                    <Lottie loop={true} animationData={aname} />
                </div>
            </div>
            <hr className='h-10' />
            <div className="   ">
                <Hedding>

                </Hedding>
            </div>
            <div>
                <Curses

                    key={set.id}
                    set={set}
                >

                </Curses>
            </div>
        </div>
    );
};

export default Home;