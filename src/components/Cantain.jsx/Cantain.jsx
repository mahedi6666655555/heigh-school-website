import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Single from './SingleItem';
import './SingleItem.css'


const Cantain = () => {
    let [food, setfood] = useState([])

    useEffect(() => {

        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish&fbclid=IwAR1qe8Q8XDAeRX79KJOZrF_QakdNzidPt-HstbXgegNFkikUfWAN1MYTjkI`
        fetch(url)
            .then(res => res.json())
            .then(data => setfood(data.meals))

    }, [])
    return (
        <div className='ccn'>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    food.map(res => {
                        <Single
                            api={res}
                            key={res.id}
                        >

                        </Single>
                    })
                }
            </div>
            <div className='bg-green-500 h-20'>

            </div>
        </div>
    );
};

export default Cantain;