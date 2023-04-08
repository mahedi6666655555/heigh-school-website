import React from 'react';
import { Link } from 'react-router-dom';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'
// import { BuildingLibraryIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div>
            <nav className='w-full h-20 flex justify-between items-center px-20 bg-gray-800 text-white '>
                <h1>digitalwork</h1>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link className='inline-flex gap-3' to="/Cantain">Cantain <span><BuildingLibraryIcon className="h-6 w-6 text-blue-400" /></span>  </Link>
                    <Link className='inline-flex gap-4' to="/Contact">Contact <span><ChatBubbleBottomCenterIcon className="h-6 w-6 text-blue-400" /></span></Link>
                    <Link to="/Aboutus">Aboutus</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;