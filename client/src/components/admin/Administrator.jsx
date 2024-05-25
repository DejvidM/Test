import React, { useState } from "react";
import NavBar from "../Nav/NavBar";
import CreateAnimal from "./CreateAnimal";
import ShowAnimals from './ShowAnimals'

const Administrator = () => {

    const [create , setCreate] = useState('');
    const [showAnimals , setShowsAnimals ] = useState('');

    return(
        <>
            <NavBar />
            <div className="flex w-1/3 justify-between m-auto mt-5 text-xl">
                <label className="cursor-pointer px-2 py-1 rounded text-red-700" onClick={() => setCreate(!create)}>Krijo nje kafshe</label>
                <label className="cursor-pointer px-2 py-1 rounded text-red-700" onClick={() => setShowsAnimals(!showAnimals)}>Shfaq te gjitha kafshet</label>
            </div>
            <div className="flex justify-between">
            {create ?
                <CreateAnimal />
            : ''}
            {showAnimals ?
                <ShowAnimals />
            : ''}
            </div>
        </>
    )
}

export default Administrator;