import React, { useState } from 'react'

import './App.css'

import backgroundImage from './assets/background.png'

import Header from './components/Header'
function App() {
    const [projects, setProjects] = useState(['desenvolvimento de app', 'frontend web']);

    function handleAddProject() {
        //projects.push(`novo projeto ${Date.now()}`)

        setProjects([...projects,`novo projeto ${Date.now()}`]);

        console.log(projects)
    }

    return (
        <>

            <Header title="projects" />

            <img width={300}src={backgroundImage}/>
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>

    );
}

export default App;