import { Box, Grid, Typography } from "@mui/material";
import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects, onToggle, onDelete }) {
    if (projects.length === 0) {
        return (
            <Box 
                sx={{
                    width: "100%",
                    textAlign: "center",
                    paddingY: 8,
                    opacity: 0.6
                }}
            >
                <Typography variant="h6">
                    No projects found.
                </Typography>
                <Typography variant="body2" color="text.warning">
                    Add a project to get started.
                </Typography>
            </Box>
        );
    }

    return (
        <Grid container spacing={2}>
            {projects.map((project) => (
                <Grid item xs={12} sm={6} md={6} key={project.projectId}>
                    <ProjectItem
                        project={project}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
