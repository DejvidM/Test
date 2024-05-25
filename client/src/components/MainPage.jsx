import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavBar from "./Nav/NavBar";
import Dogs from './galeria/Dogs'
import Cats from './galeria/Cats'
import Birds from './galeria/Birds'


const MainPage = () => {

    const [animal , setAnimal] = useState('');
    const [openPopup , setOpenPopup] = useState('');

    const [dogos ,setDogos ] = useState([]);
    const [cats ,setCats ] = useState([]);
    const [birds ,setBirds ] = useState([]);

    
    useEffect(() => {

        axios.get('http://localhost:8000/api/dogs') 
            .then(res => setDogos(res.data))
            .catch(err => console.log(err))

        axios.get('http://localhost:8000/api/cats') 
            .then(res => setCats(res.data))
            .catch(err => console.log(err))

        axios.get('http://localhost:8000/api/birds') 
            .then(res => setBirds(res.data))
            .catch(err => console.log(err))

    },[])

    const [searchVar , setSearchVar ] = useState('');

    return (
        <>
            <NavBar />
            <div>
                <h1 className="text-center text-2xl m-2">Tipet e kafsheve</h1>
                <div className="text-center"> 
                    <select className="shadow-sm cursor-pointer text-lg rounded-lg p-2 border" onChange={(e) => setAnimal(e.target.value)} value={animal}>
                        <option value={''}>---</option>
                        <option value={'Dogs'}>Dogs</option>
                        <option value={'Cats'}>Cats</option>
                        <option value={'Birds'}>Birds</option>
                    </select>
                </div>
            </div>
            <div className="text-center mt-3">
                <label className="mr-3">Kerko me emer</label>
                <input type="text" className="border py-1 px-2 rounded outline-none" onChange={(e) => setSearchVar(e.target.value)}/>
            </div>

            {animal == 'Dogs' 
            ? <Dogs openPopup={openPopup} setOpenPopup={setOpenPopup} dogos={dogos} searchVar={searchVar}/>

            : animal == 'Cats'
            ? <Cats openPopup={openPopup} setOpenPopup={setOpenPopup} cats={cats} searchVar={searchVar}/>

            : animal == 'Birds'
            ? <Birds openPopup={openPopup} setOpenPopup={setOpenPopup} birds={birds} searchVar={searchVar}/> 
            
            : <p className="text-center m-4">Zgjidh nje tip</p>
            }
        </>
    )
}

export default MainPage;