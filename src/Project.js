import {React,useState} from "react";
import './Project.css';

const Project = () => {
  
    const [form,setForm] = useState(
        {
        id:"",
        name:" ",
        age:" ",
        department: " ",
        marks:""
    })
    // const [value,setValue] = useState(false);
    const [value,SetValue] = useState({
        id:1,
        name:"",
        age:"",
        department: " ",
        marks:""
         
    }
);
    // const [input,setInput] = useState("your data will be visible here");
    // const [email,setEmail] = useState(""); 
    // const [age,SetAge] = useState(0);
    //  function add (){
    //     SetValue(!value)
    //  }

        // if(value == 0){
        //     SetValue(1);
        // }
        // else{
        //     SetValue(0);
        // }
        // SetValue(value == 0 ? 1 : 0);
    //    
    function changes(event){
        SetValue({
            ...value,
            // name:event.target.value
            [event.target.placeholder] : event.target.value
     }
     )
    }
    // function ageChanges(event){
    //     SetValue({
    //         ...value,
    //         age:event.target.value
    //  }
    //  )
    // }
    function submit(event){
        event.preventDefault();
        setForm({
           ...form,
           name:value.name,
           age:value.age,
           department:value.department

        })
    }

    
    return(
<>
    {/* //     <div style ={{background : value ? "#23272f" : "white", height : "100vh"}}>
    //    {value}
    //  <span style = {{cursor : "pointer"}} onClick ={add}> {value ? "✹" : " ❍ "} </span> */}
    {form.name}<br/>
    {form.department}<br/>
    {form.age}
       <form onSubmit = {submit}>

       NAME: <input onChange = {changes}  placeholder="name"/><br />
       DEPT: <input onChange={changes}  placeholder="department" /><br />
       AGE: <input onChange = {changes} placeholder="age"/><br />
       <button type ="submit">submit</button>

       </form>
       {/* {input} */}
        <div/>
        </>
    )
}
export default Project;