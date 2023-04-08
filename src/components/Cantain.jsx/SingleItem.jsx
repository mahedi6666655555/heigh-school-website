import React from 'react';

const Single = ({ api }) => {
    let { strMealThumb, strTags, strArea, strCategory } = api

    return (
        <div className=' w-[400px]  h-[500px] border-2 rounded-lg shadow-lg  relative'>
            <div>
                <img className='h-[300px] w-full' src={strMealThumb} alt="" />
            </div>
            <div className='ml-5 mt-5'>

                <h5>{strArea}</h5>
                <h5>{strCategory}</h5>
                <h5>{strTags}</h5>
            </div>
            <div>
                <button className='py-3 absolute w-full bottom-0 px-7 bg-gray-800 text-white rounded-lg '>buy now</button>
            </div>
        </div>
    );
};

export default Single;