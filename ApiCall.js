import axios from 'axios'
import React,{ useEffect } from 'react'

function ApiCall(){

    const[users,setUsers]=React.useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/getPeople")
             .then((response)=>response.data)
             .then(res=>{
                setUsers(res)
             })
    },[])

    const[userObj,setUserObj]=React.useState()

    const sendData=()=>{

        axios.post("url",userObj)
             .then(response=>response.data)
             .then(res=>{
             // write if else code if username and password correct  
             // navigate Home page   
             })

    }
    

    return(
        <div>
            <h1>API CALL</h1>
            <ul>
                {users.map((user)=>(
                    <li>{user.name} <br></br> {user.password}</li>
                ))}
            </ul>

            {/* <button type='button' onClick={sendData}>Submit</button> */}
        </div>
    )
}

export default ApiCall