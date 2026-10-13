import {React,useState} from 'react'

function ThemeChanger() {

  const [value,setValue] = useState(false);

  function add (){
    setValue(!value)
  }
  return (
     <div style ={{background : value ? "#23272f" : "white", height : "100vh"}}>
      {value}
     <button  onClick ={add}> {value ? "Dark" : "white"} </button>  
    </div>
  )
}

export default ThemeChanger;