import React, { useEffect, useRef } from "react";

const Popup = ({oneAnimal,type,setOpenPopup}) => {

        const popupRef = useRef(null);
    
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setOpenPopup(false);
            }
        };
    
        useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

    return(
        <>  
            {type == 'Cat' ?
            <div className="fixed left-80 top-24 w-3/5 border h-3/4 content-center text-center text-xl bg-violet-200 opacity-95 flex flex-col items-center justify-between p-6 popup-animate"
            ref={popupRef}
            >
                <button className="border py-3 px-6 absolute right-0 top-0 bg-red-700 text-gray-200" 
                onClick={() => setOpenPopup(false)}
                >Close</button>
                <img src={oneAnimal.image} className="w-1/5"></img>
                <p>Name : {oneAnimal.name}</p>
                <p>Origin : {oneAnimal.origin}</p>
                <p>Temperament : {oneAnimal.temperament}</p>
                <p>Colors : {oneAnimal.colors}</p>
                <p>Description : {oneAnimal.description}</p>
            </div>
            : type == 'Dog' ?
                <div className="fixed left-80 top-24 w-3/5 border h-3/4 content-center text-center text-xl  bg-violet-200 opacity-95 flex flex-col items-center justify-between p-6 popup-animate "
                ref={popupRef}>
                    <button className="border py-3 px-6 absolute right-0 top-0 bg-red-700 text-gray-200"
                    onClick={() => setOpenPopup(false)}
                    >Close</button>
                    <img src={oneAnimal.image} className="w-1/5"></img>
                    <p>Name : {oneAnimal.name}</p>
                    <p>Breed Group : {oneAnimal.breed_group}</p>
                    <p>Size : {oneAnimal.size}</p>
                    <p>Lifespan : {oneAnimal.lifespan}</p>
                    <p>Origin : {oneAnimal.origin}</p>
                    <p>Temperament : {oneAnimal.temperament}</p>
                    <p>Colors : {oneAnimal.colors}</p>
                    <p>Description : {oneAnimal.description}</p>
                </div>
            : type == 'Bird' ?
                <div className="fixed left-80 top-24 w-3/5 border h-3/4 content-center text-center text-xl  bg-violet-200 opacity-95 flex flex-col items-center justify-between p-6 popup-animate "
                ref={popupRef}>
                    <button className="border py-3 px-6 absolute right-0 top-0 bg-red-700 text-gray-200"
                    onClick={() => setOpenPopup(false)}
                    >Close</button>
                    <img src={oneAnimal.image} className="w-1/5"></img>
                    <p>Name : {oneAnimal.name}</p>
                    <p>Species : {oneAnimal.species}</p>
                    <p>Family : {oneAnimal.family}</p>
                    <p>Habitat : {oneAnimal.habitat}</p>
                    <p>Place of found : {oneAnimal.place_of_found}</p>
                    <p>Diet : {oneAnimal.diet}</p>
                    <p>Wheight in kg : {oneAnimal.weight_kg}</p>
                    {oneAnimal.height_cm ?
                    <p>Height in cm : {oneAnimal.height_cm}</p>
                    : '' }
                    <p>Description : {oneAnimal.description}</p>
                </div>
            : ''}
        </>
    )
}

export default Popup;