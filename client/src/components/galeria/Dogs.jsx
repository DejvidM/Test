import React, { useEffect, useState } from "react";
import axios from 'axios';
import Popup from "./Popup";

const Dogs = ({openPopup , setOpenPopup, dogos ,searchVar }) => {

    const [oneDog , setOneDog] = useState({});

    const popUp = (id) => {
        axios.get(`http://localhost:8000/api/dog/${id}`) 
            .then(res => setOneDog(res.data))
            .catch(err => console.log(err))
    }

    return(
        <>
            <div className="flex flex-wrap align-center items-center justify-evenly">
                {dogos ? 
                    dogos.map( dog => 
                        searchVar == '' ?
                        <div key={dog.id} 
                        className="w-1/6 my-5 mx-2 border-2 rounded p-6 flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-2 text-center h-80"
                        onClick={() => {popUp(dog.id) ; setOpenPopup(true) }}>
                            <img src={dog.image} className="mb-2"/>
                            <p>Name : {dog.name}</p>
                            <p>Origin : {dog.origin}</p>
                        </div>
                        : 
                        dog.name.toLowerCase().includes(searchVar.toLowerCase()) ? 
                        <div key={dog.id} 
                        className="w-1/6 my-5 mx-2 border-2 rounded p-6 flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-2 text-center h-80"
                        onClick={() => {popUp(dog.id) ; setOpenPopup(true) }}>
                            <img src={dog.image} className="mb-2"/>
                            <p>Name : {dog.name}</p>
                            <p>Origin : {dog.origin}</p>
                        </div> : ''
                    )

                : ''}
            </div>

            {openPopup ?
            <Popup oneAnimal={oneDog} type='Dog' setOpenPopup={setOpenPopup}/>
            : '' }
        </>
    )
}

export default Dogs;