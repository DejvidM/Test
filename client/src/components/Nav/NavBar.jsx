import React from "react";
import {useNavigate} from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    return(
        <>
            <div className="flex justify-between py-4 px-24 bg-slate-300 text-gray-600 shadow-md mb-2 md:text-3xl">
                <h1 className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/')}>Main</h1>
                <h1 className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/admin')}>Admin</h1>
                <h1 className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/about')}>About us</h1>
                <h1 className="hover:text-gray-800 cursor-pointer" onClick={() => navigate('/contact')}>Contact us</h1>
            </div>
        </>
    )
}

export default NavBar;