import {React,useState,useEffect} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const btn = {
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"#73c9ee",
        color:"white",
        border:"none",
        margin:"5px",
        cursor:"pointer"
    }
    // without dependencies
    // useEffect(() =>{
    //     console.log("without dependencies")
    // },[])
    // with dependencies
    // useEffect(() =>{
    //     console.log("with dependencies")
    // },[count])
    // empty dependencies
    // useEffect(() =>{
    //     console.log("empty dependencies")
    // },)

    function timeOut(){
        setTimeout(
            ()=>{
              console.log("test")
            },1000
        );
    }
    function interval(){
        setInterval( ()=>{
         console.log("interval test")
        },1000)
    }
  return (
    <div>
      <h1> Counte : {count} </h1>
      <button style={btn} onClick={() => setCount(count+1)}>INCREMENT</button>
      <button style={btn} onClick={() => setCount(count-1)}>DECREMENT</button>
      <button style={btn} onClick={() => setCount(0)}>RESET</button>

      <button style={btn} onClick={timeOut}>TIME</button>
      <button style={btn} onClick={interval}>INTERVAL</button>
        </div>
  )
}

export default Counter