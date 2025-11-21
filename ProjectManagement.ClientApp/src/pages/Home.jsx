// src/pages/Home.jsx
import { useEffect, useState } from "react";
import {
    fetchAllProjects,
    addProject,
    deleteProject,
    toggleProjectStatus,
} from "../api/projectApi";

import ProjectList from "../components/ProjectList";
import AddProjectForm from "../components/AddOrUpdateProjectForm";

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function loadProjects() {
        try {
            setLoading(true);
            setError("");
            const data = await fetchAllProjects();
            setProjects(data);
        } catch (err) {
            setError(err.message || "Failed to load projects");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProjects();
    }, []);

    async function handleAdd(name, description) {
        try {
            await addProject(name, description);
            await loadProjects();
        } catch {
            alert("Failed to add project.");
        }
    }

    async function handleToggle(id) {
        await toggleProjectStatus(id);
        loadProjects();
    }

    async function handleDelete(id) {
        await deleteProject(id);
        loadProjects();
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Project Management</h1>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <AddProjectForm onAdd={handleAdd} />

            <ProjectList
                projects={projects}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </div>
    );
}
