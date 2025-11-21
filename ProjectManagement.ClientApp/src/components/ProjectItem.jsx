// src/components/ProjectItem.jsx
export default function ProjectItem({ project, onToggle, onDelete }) {
    return (
        <div
            style={{
                padding: 10,
                border: "1px solid #ddd",
                marginBottom: 10,
                borderRadius: 6,
            }}
        >
            <h3>{project.projectName}</h3>
            <p>{project.description}</p>
            <p>
                Status:{" "}
                <strong style={{ color: project.isActive ? "green" : "red" }}>
                    {project.isActive ? "Active" : "Inactive"}
                </strong>
            </p>

            <button onClick={() => onToggle(project.projectId)} style={{ marginRight: 10 }}>
                Toggle Status
            </button>

            <button onClick={() => onDelete(project.projectId)} style={{ color: "red" }}>
                Delete
            </button>
        </div>
    );
}
