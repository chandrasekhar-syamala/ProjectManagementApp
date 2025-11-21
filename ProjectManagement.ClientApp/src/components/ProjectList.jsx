// src/components/ProjectList.jsx
import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects, onToggle, onDelete }) {
    
    if (!Array.isArray(projects) || projects.length === 0) {
        return <p>No projects available.</p>;
    }

    return (
        <div>
            {projects.map((p) => (
                <ProjectItem
                    key={p.projectId}
                    project={p}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
