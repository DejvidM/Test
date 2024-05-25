import React, { useEffect, useState } from "react";
import axios from 'axios';
import Popup from "./Popup";

const Cats = ({openPopup , setOpenPopup , cats , searchVar}) => {

    const [oneCat , setOneCat] = useState({});

    const popUp = (id) => {
        axios.get(`http://localhost:8000/api/cat/${id}`) 
            .then(res => setOneCat(res.data))
            .catch(err => console.log(err))
    }

    return(
        <>
            <div className="flex flex-wrap align-center items-center justify-evenly">
                {cats ? 
                    cats.map( cat => 
                        searchVar == '' ?
                        <div key={cat.id} 
                        className="w-1/6 my-5 mx-2 border-2 rounded p-6 flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-2 text-center h-80"
                        onClick={() => {popUp(cat.id) ; setOpenPopup(true) }}>
                            <img src={cat.image} className="mb-2"/>
                            <p>Name : {cat.name}</p>
                            <p>Origin : {cat.origin}</p>
                        </div>
                        : cat.name.toLowerCase().includes(searchVar.toLowerCase()) 
                        ? 
                        <div key={cat.id} 
                        className="w-1/6 my-5 mx-2 border-2 rounded p-6 flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-2 text-center h-80"
                        onClick={() => {popUp(cat.id) ; setOpenPopup(true) }}>
                            <img src={cat.image} className="mb-2"/>
                            <p>Name : {cat.name}</p>
                            <p>Origin : {cat.origin}</p>
                        </div>
                        : ''
                    )
                : ''}
            </div>
            {openPopup ?
            <Popup oneAnimal={oneCat} type='Cat' setOpenPopup={setOpenPopup}/>
            : '' }
        </>
    )
}

export default Cats;