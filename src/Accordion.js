import React, { useState } from "react";
import './Accordion.css';

const Accordion = () =>{
    // const [open,setOPen] = useState(false);
    const [open,setOPen] = useState(null);

    const accor = [
      
        { id: 1, title : "Accordion 1", para : "paragraph 1"},
        { id: 2, title : "Accordion 2", para : "paragraph 2"}
    ]
    function handleId(id){
     console.log(id);
     setOPen(id)
     setOPen(open == id ? null : id)
    }

    return(
        <>
       {/* {// <p className = 'head' onClick = {expend}> Accordion</p>}
       {open ? <p> I AM SARATHI </P> : ""}
        */}
        {
            accor.map((res) =>{
                
                return(
                    <>
                    {/* <p className = "head" onClick = {() => setOPen(!open)}>{res.title}</p>
                    {open ? <p>{res.para}</p> : ""} */}
                    <p className = "head" onClick = {() => handleId(res.id)}>{res.title}</p>
                    {open == res.id ? <p>{res.para}</p> : ""}
                    </>
                )
            })
        }
        </>
    )
}
export default Accordion;
