import React from "react";
import { useDispatch } from 'react-redux';
import { openEditForm } from "../store/projectFormSlice";

import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Chip,
    Stack
} from "@mui/material";

import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ProjectItem({ project, onToggle, onDelete }) {
    const dispatch = useDispatch();
    
    return (
        <Card elevation={3} sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {project.projectName}
                </Typography>

                {project.description && (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                    >
                        {project.description}
                    </Typography>
                )}

                <Chip
                    label={project.isActive ? "Active" : "Inactive"}
                    color={project.isActive ? "success" : "default"}
                    size="small"
                    sx={{ mt: 1 }}
                />
            </CardContent>

            <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                    size="small"
                    variant="contained"
                    startIcon={project.isActive ? <ToggleOffIcon /> : <ToggleOnIcon />}
                    color={project.isActive ? "warning" : "primary"}
                    onClick={() => onToggle(project.projectId)}
                >
                    Toggle
                </Button>

                <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    startIcon={<EditIcon />}
                    onClick={() =>
                        dispatch(openEditForm({
                            id: project.projectId,
                            name: project.projectName,
                            description: project.description,
                        }))
}

                >
                    Edit
                </Button>

                <Button
                    size="small"
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => onDelete(project.projectId)}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
