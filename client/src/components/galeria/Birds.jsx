import React, { useEffect, useState } from "react";
import axios from 'axios';
import Popup from "./Popup";

const Birds = ({openPopup , setOpenPopup ,birds ,searchVar}) => {

    const [oneBird , setOneBird] = useState({});

    const popUp = (id) => {
        axios.get(`http://localhost:8000/api/bird/${id}`) 
            .then(res => setOneBird(res.data))
            .catch(err => console.log(err))
    }

    return(
        <>
            <div className="flex flex-wrap align-center items-center justify-evenly">
                {birds ? 
                    birds.map( bird => 
                        searchVar == '' ? 
                        <div key={bird.id} 
                        className="w-1/6 my-5 mx-2 border-2 rounded p-6 pt-5 flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-2 text-center h-80"
                        onClick={() => {popUp(bird.id) ; setOpenPopup(true) }}>
                            <img src={bird.image} className="mb-1"/>
                            <p>Name : {bird.name}</p>
                            <p>Place of found : {bird.place_of_found}</p>
                        </div>
                        : bird.name.toLowerCase().includes(searchVar.toLowerCase())
                        ? 
                        <div key={bird.id} 
                        className="w-1/6 my-5 mx-2 border-2 rounded p-6 pt-5 flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-2 text-center h-80"
                        onClick={() => {popUp(bird.id) ; setOpenPopup(true) }}>
                            <img src={bird.image} className="mb-1"/>
                            <p>Name : {bird.name}</p>
                            <p>Place of found : {bird.place_of_found}</p>
                        </div>
                        : ''
                    )
                    
                : ''}
            </div>

            {openPopup ?
            <Popup oneAnimal={oneBird} type='Bird' setOpenPopup={setOpenPopup}/>
            : '' }
        </>
    )
}

export default Birds;