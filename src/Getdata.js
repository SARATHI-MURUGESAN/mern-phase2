import {React,useEffect,useState} from 'react';
import axios from 'axios'

const Getdata = () => {

    const[data,setData]=useState([])

useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    // .then((res) => console.log(res.data))
    .then((res)=>{setData(res.data)})

},[])
  return (
    <>
     <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL
                    
                </th>
            </tr>
        </thead>
        {
            data.map((i)=>{
                return(
                    <>
             <tbody>
                <tr>
                <th>{i.id}</th>
                <th>{i.name}</th>
                <th>{i.email}</th>
                </tr>
             </tbody>
                    </>
                )
            })
        }
     </table>
    </>
  )
}

export default Getdata