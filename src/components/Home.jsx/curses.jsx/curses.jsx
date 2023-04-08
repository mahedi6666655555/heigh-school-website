import React from 'react';

const Curses = ({ set }) => {

    let { name, age, img, subject } = set


    return (
        <div className=''>
            <div className='w-[400px] mx-auto rounded-lg relative shadow-lg border-2 mt-10 h-[500px]'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h5></h5>
                    <p></p>
                    <p></p>

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