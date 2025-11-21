// src/components/AddProjectForm.jsx
import { useState } from "react";

export default function AddOrUpdateProjectForm({ onAdd }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            alert("Project name is required");
            return;
        }

        onAdd(name, description);
        setName("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <input
                type="text"
                placeholder="Project Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginRight: 10 }}
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginRight: 10 }}
            />

            <button type="submit">Add Project</button>
        </form>
    );
}
