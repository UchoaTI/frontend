import React, { useState } from 'react'

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
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>

    );
}

export default App;