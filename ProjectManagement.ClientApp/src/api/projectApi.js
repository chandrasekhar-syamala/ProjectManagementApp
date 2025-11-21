import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // Adjust port if backend runs on a different one
});

// GET: api/projects
export async function fetchAllProjects() {
    const response = await API.get("/projects");
    return response.data;
}

// POST: api/projects
export async function addProject(name, description = "") {
    const payload = { name, description };
    const response = await API.post("/projects", payload);
    return response.data;
}

// PATCH: api/projects/{projectId}/toggle-status
export async function toggleProjectStatus(projectId) {
    const response = await API.patch(`/projects/${projectId}/toggle-status`);
    return response.data;
}

// GET: api/projects/{projectId}
export async function fetchProjectById(projectId) {
    const response = await API.get(`/projects/${projectId}`);
    return response.data;
}

// PUT: api/projects/{projectId}
export async function updateProject(projectId, name, description = "") {
    const payload = { name, description };
    const response = await API.put(`/projects/${projectId}`, payload);
    return response.data;
}

// DELETE: api/projects/{projectId}
export async function deleteProject(projectId) {
    const response = await API.delete(`/projects/${projectId}`);
    return response.data;
}
