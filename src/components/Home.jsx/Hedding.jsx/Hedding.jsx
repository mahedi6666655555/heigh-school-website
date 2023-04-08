import React from 'react';

const Hedding = () => {
    return (
        <div>
            <div className='w-full h-screen shadow-lg flex items-center'>
                <div className=' w-1/2  '>
                    <img className='ml-5' src="https://img.freepik.com/free-photo/close-up-portrait-young-guy-with-curly-hair_176532-8156.jpg?size=626&ext=jpg&ga=GA1.2.2099233669.1673796942&semt=ais" alt="" />
                </div>
                <div className='w-1/2 ml-5'>
                    <h1 className='text-3xl font-bold '>Hi THer`e</h1>
                    <p className='py-5 px-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, voluptatibus? Veniam vero, molestias dicta dolores sunt fugiat consequuntur nobis sit? Quos molestiae in commodi natus necessitatibus itaque vel. Reprehenderit, esse.</p>
                    <button className='py-3 px-7 rounded-lg text-white bg-gray-800'>read more</button>
                </div>
            </div>
        </div>
    );
};

export default Hedding;