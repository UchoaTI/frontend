import React, { useState,useEffect } from 'react'
import api from './services/api';

import './App.css'



import Header from './components/Header'
function App() {
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        api.get('projects').then(response=>{
            setProjects(response.data)
        })
    },[]);

    async function handleAddProject() {
        //projects.push(`novo projeto ${Date.now()}`)

        //setProjects([...projects,`novo projeto ${Date.now()}`]);

       const response = await api.post('projects',{
            
                title: `novo projeto ${Date.now()}`,
                owner: "lucas"
            
        });
        
        const project = response.data;

        setProjects([...projects,project])
    }

    return (
        <>

            <Header title="projects" />

            
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>

    );
}

export default App;