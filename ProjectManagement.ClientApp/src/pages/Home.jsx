import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeForm, openAddForm } from "../store/projectFormSlice";


import { Box, Typography, Divider, Button, Stack, Collapse, Snackbar, Alert } from "@mui/material";

import AddOrUpdateProjectForm from "../components/AddOrUpdateProjectForm";
import ProjectList from "../components/ProjectList";

import {
    fetchAllProjects,
    addProject,
    toggleProjectStatus,
    updateProject,
    deleteProject
} from "../api/projectApi";

import useAlerts from "../utils/useAlerts";

export default function Home() {
    const [projects, setProjects] = useState([]);
    
    const { alert, showSuccess, showError, closeAlert } = useAlerts();
    const { editingProjectId, isFormOpen } = useSelector((state) => state.projectForm);

    const dispatch = useDispatch();

    const loadProjects = async () => {
        try {
            const data = await fetchAllProjects();
            setProjects(data);
        } catch (err) {
            console.error("Error loading projects:", err);
        }
    };

    useEffect(() => {
        loadProjects();
    }, []);

    const handleAddProject = async (name, description) => {
        try {
            await addProject(name, description);
            loadProjects();
            showSuccess("Project added successfully!");
        } catch (err) {
            console.error("Error adding project:", err);
            showError("Failed to add project.");
        } finally {
            dispatch(closeForm());
        }
    };

    const handleToggleProject = async (projectId) => {
        try {
            await toggleProjectStatus(projectId);
            loadProjects();
            showSuccess("Project status toggled successfully!");
        } catch (err) {
            console.error("Error toggling project status:", err);
            showError("Failed to toggle project status.");
        }
    };

    const handleUpdateProject = async (projectId, name, description) => {
        try {
            await updateProject(projectId, name, description);
            loadProjects();
            showSuccess("Project details updated successfully!");
        } catch (err) {
            console.error("Error updating project:", err);
            showError("Failed to update project.");
        } finally {
            dispatch(closeForm());
        }
    };

    const handleDeleteProject = async (projectId) => {
        try {
            await deleteProject(projectId);
            loadProjects();
            showSuccess("Project deleted successfully!");
        } catch (err) {
            console.error("Error deleting project:", err);
            showError("Failed to delete project.");
        } 
    };

    return (
        <>
        <Box sx={{ width: "100%" }}>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
                Project Management
            </Typography>

            {/* Add Project Button */}
            <Stack direction="row" justifyContent="flex-start" sx={{ mb: 2 }}>
                <Button
                    variant="contained"
                    onClick={() => {
                        if (isFormOpen) {
                            dispatch(closeForm());
                        } else {
                            dispatch(openAddForm());
                        }
                    }}
                >
                    {isFormOpen ? "Cancel" : editingProjectId ? "Update Project" : "Add Project"}
                </Button>
            </Stack>

            {/* Conditionally show form */}
            {isFormOpen && (
                <>
                    <AddOrUpdateProjectForm onAdd={handleAddProject} onUpdate={handleUpdateProject} />
                    <Divider sx={{ my: 3 }} />
                </>
            )}

            {/* Project List */}
            <ProjectList
                projects={projects}
                onToggle={handleToggleProject}
                onDelete={handleDeleteProject}
            />
        </Box>
        <Snackbar
    open={alert.open}
    autoHideDuration={3000}
    onClose={closeAlert}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
>
    <Alert
        onClose={closeAlert}
        severity={alert.severity}
        variant="filled"     // solid color
        sx={{ width: "100%" }}
    >
        {alert.message}
    </Alert>
</Snackbar>
        </>
    );
}
