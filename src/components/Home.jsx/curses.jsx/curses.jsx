import React from 'react';

const Curses = ({ set }) => {

    let { name, age, img, subject } = set


    return (
        <div className=''>


            <div className='w-[400px] mx-auto rounded-lg relative shadow-lg border-2 mt-10 h-[500px]'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='pl-5 pt-5'>
                    <h5 className='text-lg font bold  pb-2'>name: {name}</h5>
                    <p className='text-lg font bold  pb-2'>age: {age}</p>
                    <p className='text-lg font bold  pb-2'>subject: {subject}</p>



                </div>
                <div>
                    <button className=' w-full hover:bg-gray-700 py-3 px-7 bg-gray-800 absolute bottom-0 rounded-lg text-white    '>
                        read more

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Curses;