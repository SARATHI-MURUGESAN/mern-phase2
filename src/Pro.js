
import React from "react";
import { useState } from "react";

function inc () {
    const [dark,setDark] = useState(false);
    const inc =() => {
        setDark(!dark);
    }
    console.log(dark)

    return (
        <div style={{background: dark ? "white" : "black" , color:dark ? "black" : "white" , height: "100vh"}}>

            <h1>Task Management Dashboard</h1>
            <h2>welcome SARATHI M👋</h2>
            <button onClick={inc}>Dark/Light</button>
            <hr />
            
        </div>
    );
}
export default app;
