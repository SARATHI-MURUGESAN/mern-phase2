import React from 'react';
import {useState} from 'react';

function Object(){
    const cars ={
        id:1,
        name:"Arun",
        age:21,
        department: "CSE",
        marks:90.5
    }
    const {id,name,age,...remains}=cars

    const updateCars = {
        ...cars,
        age:20
    }
    console.log(remains);
    console.log(updateCars);
     return(
        <>
        {/* {value.name} */}
        <form> onSubmit = {{}}</form>
        </>
     )
}
export default Object;
