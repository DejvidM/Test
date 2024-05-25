import React, { useState } from "react";
import axios from 'axios'

const CreateDog = ({dog , setDog ,create}) => {
    return (
        <>
            <div className="flex flex-col items-start text-base">
                    <div className="mt-3 flex flex-col items-start">
                            <label>Name : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500" 
                            value={dog.name} 
                            onChange={(e) => setDog({...dog , name : e.target.value }) } />
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Breed Group : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={dog.breed_group} 
                            onChange={(e) => setDog({...dog , breed_group : e.target.value }) }/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Size : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={dog.size} 
                            onChange={(e) => setDog({...dog , size : e.target.value }) }/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Lifespan : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={dog.lifespan} 
                            onChange={(e) => setDog({...dog , lifespan : e.target.value }) }/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Origin : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={dog.origin} 
                            onChange={(e) => setDog({...dog , origin : e.target.value }) }/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Temperament : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={dog.temperament} 
                            onChange={(e) => setDog({...dog , temperament : e.target.value }) }/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Colors : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={dog.colors} 
                            onChange={(e) => setDog({...dog , colors : e.target.value }) }/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Description : </label>
                            <textarea rows='3' cols='22' className="border rounded px-2 py-1 border-slate-500 "
                            value={dog.description} 
                            onChange={(e) => setDog({...dog , description : e.target.value }) }/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Image : </label>
                            <input type="file" className="border rounded px-2 py-1 border-slate-500" onChange={(e) => setDog({...dog , image : URL.createObjectURL(e.target.files[0]) })}/>
                            <p>ose link per image</p>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500" value={dog.image}
                            onChange={(e) => e.nativeEvent.inputType === 'insertFromPaste' ? setDog({...dog , image : e.target.value}) : setDog({...dog , image : e.target.value})  }/>
                    </div>
                <button className="border py-2 px-4 rounded bg-blue-700 text-white mt-3" type="submit" 
                onClick={(e) => create(e,'Dog')}>Create</button>
                </div>
        </>
    )
}
const CreateCat = ({cat , setCat ,create}) => {
    return (
        <>
            <div className="flex flex-col items-start text-base">
                    <div className="mt-3 flex flex-col items-start">
                            <label>Name : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={cat.name} 
                            onChange={(e) => setCat({...cat , name : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Origin : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={cat.origin} 
                            onChange={(e) => setCat({...cat , origin : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Temperament : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={cat.temperament} 
                            onChange={(e) => setCat({...cat , temperament : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Colors : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={cat.colors} 
                            onChange={(e) => setCat({...cat , colors : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Description : </label>
                            <textarea rows='3' cols='22' className="border rounded px-2 py-1 border-slate-500 "
                            value={cat.description} 
                            onChange={(e) => setCat({...cat , description : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Image : </label>
                            <input type="file" className="border rounded px-2 py-1 border-slate-500" 
                            onChange={(e) => setCat({...cat , image : URL.createObjectURL(e.target.files[0]) })}/>
                            <p>ose link per image</p>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={cat.image}
                            onChange={(e) => e.nativeEvent.inputType === 'insertFromPaste' ? setCat({...cat , image : e.target.value}) : setCat({...cat , image : e.target.value})  }/>
                    </div>
                <button className="border py-2 px-4 rounded bg-blue-700 text-white mt-3" onClick={(e) => create(e,'Cat')}>Create</button>
                </div>
        </>
    )
}
const CreateBird = ({bird, setBird ,create}) => {
    return (
        <>
            <div className="flex flex-col items-start text-base">
                    <div className="mt-3 flex flex-col items-start">
                            <label>Name : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.name}
                            onChange={(e) => setBird({...bird, name : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Species : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.species}
                            onChange={(e) => setBird({...bird, species : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Family : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.family}
                            onChange={(e) => setBird({...bird, family : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Habitat : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.habitat}
                            onChange={(e) => setBird({...bird, habitat : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Place of found : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.place_of_found}
                            onChange={(e) => setBird({...bird, place_of_found : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Diet : </label>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.diet}
                            onChange={(e) => setBird({...bird, diet : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Description : </label>
                            <textarea rows='3' cols='22' className="border rounded px-2 py-1 border-slate-500 "
                            value={bird.description}
                            onChange={(e) => setBird({...bird, description : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Weight in kg : </label>
                            <input type="number" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.weight_kg}
                            onChange={(e) => setBird({...bird, weight_kg : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Height in cm : </label>
                            <input type="number" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.height_cm}
                            onChange={(e) => setBird({...bird, height_cm : e.target.value})}/>
                    </div>
                    <div className="mt-3 flex flex-col items-start">
                            <label>Image : </label>
                            <input type="file" className="border rounded px-2 py-1 border-slate-500"
                            onChange={(e) => setBird({...bird , image : URL.createObjectURL(e.target.files[0]) })}/>
                            <p>ose link per image</p>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.image}
                            onChange={(e) => e.nativeEvent.inputType === 'insertFromPaste' ? setBird({...bird , image : e.target.value}) : setBird({...bird , image : e.target.value})  }/>
                    </div>
                <button className="border py-2 px-4 rounded bg-blue-700 text-white mt-3" onClick={(e) => create(e,'Bird')}>Create</button>
                </div>
        </>
    )
}

const CreateAnimal = () => {
    const [place , setPlace] = useState(0);
    
    const [dog , setDog ] = useState({
        name : '',
        breed_group : '',
        size : '',
        lifespan : '' ,
        origin : '',
        temperament : '',
        colors : '' ,
        description : '',
        image : ''
    });
    const [cat , setCat ] = useState({
            name : '',
            origin : '',
            temperament : '',
            colors : '',
            description : '',
            image : ''
    }) 
    const [bird , setBird] = useState({
        name : '',
        species : '',
        family : '',
        habitat : '',
        place_of_found : '',
        diet : '',
        description : '',
        weight_kg : '',
        height_cm : '',
        image : ''
    })
    const [errors , setErrors ] = useState('');

    const create = (e,animal) => {

        e.preventDefault();
        animal == 'Dog' 
        ? axios.post('http://localhost:8000/api/create/dog' , dog)
            .then(res => setDog({ 
                name : '',
                breed_group : '',
                size : '',
                lifespan : '' ,
                origin : '',
                temperament : '',
                colors : '' ,
                description : '',
                image : ''}))
            .catch(err => err.response.data.errors ? setErrors('Ploteso te gjitha fushat') : '')

        : animal == 'Cat' 
        ?   axios.post('http://localhost:8000/api/create/cat' , cat)
            .then(res => setCat({  
                name : '',
                origin : '',
                temperament : '',
                colors : '',
                description : '',
                image : ''}))
            .catch(err => err.response.data.errors ? setErrors('Ploteso te gjitha fushat') : '')

        : animal == 'Bird' 
        ? axios.post('http://localhost:8000/api/create/bird' , bird)
            .then(res => setBird({
                name : '',
                species : '',
                family : '',
                habitat : '',
                place_of_found : '',
                diet : '',
                description : '',
                weight_kg : '',
                height_cm : '',
                image : ''}))
            .catch(err => err.response.data.errors ? setErrors('Ploteso te gjitha fushat') : '')
        
        : ''
    }

    return(
        <>
            <form className="flex flex-col items-start w-max mt-10 ml-10 text-xl p-2">
                {errors ?
                <p className="text-red-600 text-2xl absolute left-80 top-2/3">{errors}</p>
                : ''}
                <p className="text-center cursor-pointer m-3" onClick={() =>{ setPlace(0) ; setErrors('')}}>Zgjidh tipin</p>
                <div className="flex w-1/4 justify-around ">
                <label className="cursor-pointer border py-1 px-3 rounded m-1 border-slate-700 hover:border-slate-500 hover:text-blue-800 transition" onClick={() => {setPlace(1) ; setErrors('')}} 
                    style={place == 1 ? {backgroundColor : '#3f3f3f' , color : 'white'} : {}} >Dog</label>

                    <label className="cursor-pointer border py-1 px-3 rounded m-1 border-slate-700 hover:border-slate-500 hover:text-blue-800 transition" onClick={() => {setPlace(2) ; setErrors('')}}
                    style={place == 2 ? {backgroundColor : '#3f3f3f' , color : 'white'} : {}}>Cat</label>

                    <label className="cursor-pointer border py-1 px-3 rounded m-1 border-slate-700 hover:border-slate-500 hover:text-blue-800 transition" onClick={() => {setPlace(3) ; setErrors('')   } }
                    style={place == 3 ? {backgroundColor : '#3f3f3f' , color : 'white'} : {}}>Bird</label>
                </div>

                {place == 1 
                ?   <CreateDog dog={dog} setDog={setDog} create={create}/>
                : place == 2 
                ?   <CreateCat cat={cat} setCat={setCat} create={create}/>
                : place == 3
                ?   <CreateBird bird={bird} setBird={setBird} create={create}/>
                : ''
                }
            </form>


        </>
    )
}

export default CreateAnimal;