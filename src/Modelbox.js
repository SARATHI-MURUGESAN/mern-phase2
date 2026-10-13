import {React,useState} from 'react';
import './Modelbox.css';

function Modelbox() {

  const [Model,setModel] = useState(false);

  return (
    <>
    <div>Modelbox</div>

    {Model ? <div className = "model">
      <span> ARE YOUR SURE, DO YOU WANT CONTINUE..</span>
      <button className = "con" onClick ={ () => setModel(false)}> OK </button>
      </div> : ""}

      <button className = "con" onClick ={ () => setModel(true)}>CONFIRM</button>
      </>
  )
}

export default Modelbox

