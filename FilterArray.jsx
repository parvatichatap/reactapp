import './App.css';
import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';

function FilterArray() {

    const [data,setData]=React.useState([])

    const [records, setRecords]=React.useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=> {
            setData(res.data)
            setRecords(res.data);
        })
        .catch(err=> console.log(err))

    },[])

    const handleFilter=(event)=>{
        setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }

  return (

    <div className='p-5 bg-light'>
        <div className='bg-white shadow border'>
            <input type='text' className='form-control' placeholder='Search Contacts' onChange={handleFilter} />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((data,index)=>(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
       
    </div>
  )
}

export default FilterArray