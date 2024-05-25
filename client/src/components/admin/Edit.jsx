import React, { useEffect, useState } from "react";
import NavBar from "../Nav/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CreateDog = ({dog , setDog , update}) => {
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
                            <img src={dog.image} className="w-20 m-2" alt="dog.pic" />
                            <input type="file" className="border rounded px-2 py-1 border-slate-500" onChange={(e) => setDog({...dog , image : URL.createObjectURL(e.target.files[0]) })}/>
                            <p>ose link per image</p>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500" value={dog.image}
                            onChange={(e) => e.nativeEvent.inputType === 'insertFromPaste' ? setDog({...dog , image : e.target.value}) : setDog({...dog , image : e.target.value})  }/>
                    </div>
                <button className="border py-2 px-4 rounded bg-blue-700 text-white mt-3 self-center" type="submit" 
                onClick={(e) => update(e,'Dog')}>Update</button>
                </div>
        </>
    )
}
const CreateCat = ({cat , setCat , update}) => {
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
                            <img src={cat.image} className="w-20 m-2" alt="cat.pic"/>
                            <input type="file" className="border rounded px-2 py-1 border-slate-500" 
                            onChange={(e) => setCat({...cat , image : URL.createObjectURL(e.target.files[0]) })}/>
                            <p>ose link per image</p>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={cat.image}
                            onChange={(e) => e.nativeEvent.inputType === 'insertFromPaste' ? setCat({...cat , image : e.target.value}) : setCat({...cat , image : e.target.value})  }/>
                    </div>
                <button className="border py-2 px-4 rounded bg-blue-700 text-white mt-3 self-center" onClick={(e) => update(e,'Cat')}>Update</button>
                </div>
        </>
    )
}
const CreateBird = ({bird, setBird, update }) => {
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
                            <img src={bird.image} className="w-20 m-2" alt="bird.pic"/>
                            <input type="file" className="border rounded px-2 py-1 border-slate-500"
                            onChange={(e) => setBird({...bird , image : URL.createObjectURL(e.target.files[0]) })}/>
                            <p>ose link per image</p>
                            <input type="text" className="border rounded px-2 py-1 border-slate-500"
                            value={bird.image}
                            onChange={(e) => e.nativeEvent.inputType === 'insertFromPaste' ? setBird({...bird , image : e.target.value}) : setBird({...bird , image : e.target.value})  }/>
                    </div>
                <button className="border py-2 px-4 rounded bg-blue-700 text-white mt-3 self-center" onClick={(e) => update(e,'Bird')}>Update</button>
                </div>
        </>
    )
}

const Edit = () => {

    const {item , type} = useParams();
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
    const navigate = useNavigate();

    const [errors ,setErrors] = useState('');

    useEffect(() =>{
        type == 'dog' ?
        axios.get(`http://localhost:8000/api/getdogbyid/${item}`)
            .then(res => setDog(res.data))
            .catch(err => console.log(err))

        : type == 'cat' ?
            axios.get(`http://localhost:8000/api/getcatbyid/${item}`)
                .then(res => setCat(res.data))
                .catch(err => console.log(err))

        : type == 'bird' ?
            axios.get(`http://localhost:8000/api/getbirdbyid/${item}`)
                .then(res => {setBird(res.data) ; console.log(res.data)})
                .catch(err => console.log(err))
        : ''
        
    },[])

    const update = (e,animal) => {
        e.preventDefault();
        animal == 'Dog' 
        ? axios.patch(`http://localhost:8000/api/update/dog/${dog._id}` , dog)
            .then(res => {
                setDog({ 
                name : '',
                breed_group : '',
                size : '',
                lifespan : '' ,
                origin : '',
                temperament : '',
                colors : '' ,
                description : '',
                image : ''}); 
                navigate('/admin')
            } )
            .catch(err => err.response.data.errors ? setErrors('Ploteso te gjitha fushat') : '')

        : animal == 'Cat' 
        ?   axios.patch(`http://localhost:8000/api/update/cat/${cat._id}` , cat)
            .then(res => {setCat({  
                name : '',
                origin : '',
                temperament : '',
                colors : '',
                description : '',
                image : ''}) ; navigate('/admin')}  )
            .catch(err => err.response.data.errors ? setErrors('Ploteso te gjitha fushat') : '')

        : animal == 'Bird' 
        ? axios.patch(`http://localhost:8000/api/update/bird/${bird._id}` , bird)
            .then(res => {setBird({
                name : '',
                species : '',
                family : '',
                habitat : '',
                place_of_found : '',
                diet : '',
                description : '',
                weight_kg : '',
                height_cm : '',
                image : ''}) ; navigate('/admin') })
            .catch(err => err.response.data.errors ? setErrors('Ploteso te gjitha fushat') : '')
        
        : ''
    }

    return(
        <>
            <NavBar />
            <div className="flex items-center flex-col">
            {errors ?
                <p className="text-red-600 text-2xl absolute left-80 top-2/3">{errors}</p>
                : ''}
            {dog._id ? <CreateDog dog={dog} setDog={setDog} update={update}/>
            : cat._id ? <CreateCat cat={cat} setCat={setCat} update={update}/>
            : bird._id ? <CreateBird bird={bird} setBird={setBird} update={update}/> 
            : ''}
            </div>
        </>
    )
}

export default Edit;