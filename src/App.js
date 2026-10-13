import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Object from './Object'
import New from './New'
import Project from './Project'
import Task1 from './Task1'
//import './Project.css'
import Accordian from './Accordian';
import Model from './Model';
import Spread from './Spread';
import Acco2 from './Acco2';
import Shopping from './Shopping';
import ErrorHandle from './ErrorHandle';
import Product from './Product';
import Home from './Home'
import { Routes,Route,Link } from 'react-router-dom';
import Admission from './Admission';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';

import About_task from './Task/About_Task';
import Contect_task from './Task/Contect_Task';
import Accordion_task from './Task/Accordion_Task';
import Projects_task from './Task/Projects_Task';
import Skills_task from './Task/Skills_Task';
import Login_task from './Task/Login_Task';

function App() {
const [data, setData] = useState([]);

useEffect(() => {
    axios.get('https://dummyjson.com/c/05dc-f8fa-46cc-9339')
        .then((res) => {
            setData(res.data);
        })
}, []);

return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="about" element={<About_task data={data} />} />
                <Route path="contact" element={<Contect_task data={data} />} />
                <Route path="accordion" element={<Accordion_task data={data} />} />
                <Route path="projects" element={<Projects_task data={data} />} />
                <Route path="skills" element={<Skills_task data={data} />} />
                <Route path="login" element={<Login_task />} />
            </Route>
        </Routes>
    </div>
);

}

  export default App;