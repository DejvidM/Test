import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowAnimals = () => {

    const [animals , setAnimals ] = useState([]);
    const [reload , setReload] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/createdAnimals')
            .then(res => {setAnimals(res.data) })
            .catch(err => console.log(err))
    },[reload])

    const deleteAnimal = (type,id) => {
        type == 'dog' ?
        axios.delete(`http://localhost:8000/api/delete/dog/${id}`)
            .then(res => {console.log(res) ; setReload(!reload)})
            .catch(err => console.log(err))
        
        : type == 'cat' ?
            axios.delete(`http://localhost:8000/api/delete/cat/${id}`)
                .then(res => {console.log(res) ; setReload(!reload)})
                .catch(err => console.log(err))
    
        : type == 'bird' 
        ?   axios.delete(`http://localhost:8000/api/delete/bird/${id}`)
                .then(res => {console.log(res) ; setReload(!reload)})
                .catch(err => console.log(err))
    
        :''
    }

    return(
        <>
        <div className="flex justify-end flex-1 h-max">
            <table className="w-2/4 mt-10 p-4">
                <thead>
                    <tr >
                        <th></th>
                        <th className="text-start">Number</th>
                        <th className="text-start">Type</th>
                        <th className="text-start">Name</th>
                        <th className="text-start">Description</th>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {animals
                    ?   animals.map( animal => 
                        animal.dog ?
                            animal.dog.map( (item , count)=> 
                                <tr key={item._id}>
                                    <td className="text-blue-500 cursor-pointer" onClick={() => navigate(`/edit/${item._id}/${'dog'}`)}>Edit</td>
                                    <td className="max-w-10">{count + 1}</td>
                                    <td>Dog</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td className="text-red-500 cursor-pointer" onClick={() => deleteAnimal('dog', item._id)}>Delete</td>
                                </tr>
                            )

                        : animal.cat ?
                            animal.cat.map( (item,count) => 
                                <tr key={item._id}>
                                    <td className="text-blue-500 cursor-pointer" onClick={() => navigate(`/edit/${item._id}/${'cat'}`)}>Edit</td>
                                    <td className="max-w-10">{count + 1}</td>
                                    <td>Cat</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td className="text-red-500 cursor-pointer" onClick={() => deleteAnimal('cat', item._id)}>Delete</td>
                                </tr>
                            )

                        : animal.bird ?
                            animal.bird.map( (item,count) => 
                                <tr key={item._id}> 
                                    <td className="text-blue-500 cursor-pointer" onClick={() => navigate(`/edit/${item._id}/${'bird'}`)}>Edit</td>
                                    <td className="max-w-10">{count + 1}</td>
                                    <td>Bird</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td className="text-red-500 cursor-pointer" onClick={() => deleteAnimal('bird', item._id)}>Delete</td>
                                </tr>
                            )
                        :''
                    )

                    :  '' }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ShowAnimals;