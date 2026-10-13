import React from 'react'
import Age from './Age';
import { Routes, Route, Link, Outlet} from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from './Layout';

import About_Task from './Task/About_Task';
import Contact_Task from './Task/Contact_Task';
import Accordion_Task from './Task/Accordion_Task';
import Projects_Task from './Task/Projects_Task';
import Skills_Task from './Task/Skills_Task';
import Login_Task from './Task/Login_Task';

 

function Sapp() {

   const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('https://dummyjson.com/c/09d0-bf30-4a0a-a423')
        .then((res) => {
            setData(res.data);
        })
}, []);
  return (
    <>
     <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/about" element={<About_Task data={data} />} />
                <Route path="/contact" element={<Contact_Task data={data} />} />
                <Route path="/accordion" element={<Accordion_Task data={data} />} />
                <Route path="/projects" element={<Projects_Task data={data} />} />
                <Route path="/skills" element={<Skills_Task data={data} />} />
                <Route path="/login" element={<Login_Task data={data}/>} />
            </Route>
        </Routes>

    </>
  )
}

export default Sapp;

// git status -use for tracking
// git add .file name-any change in add to git
// git commit -m message -for local save
// git branch -list of local branch
// git remote -v add url-to push and pull
