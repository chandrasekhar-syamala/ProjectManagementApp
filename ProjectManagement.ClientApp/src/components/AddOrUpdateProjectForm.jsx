import { useSelector, useDispatch } from "react-redux";
import { updateName, updateDescription } from "../store/projectFormSlice";

import {
    TextField,
    Button,
    Paper,
    Stack,
    Typography
} from "@mui/material";

export default function AddProjectForm({ onAdd, onUpdate }) {
    
    const dispatch = useDispatch();
    const { name, description, editingProjectId } = useSelector((state) => state.projectForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            alert("Project name is required");
            return;
        }
        if (editingProjectId) {
            onUpdate(editingProjectId, name, description);
        } else {
            onAdd(name, description);
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 4, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>
                { editingProjectId ? "Update Project" : "Add New Project" }
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Project Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => dispatch(updateName(e.target.value))}
                        required
                    />

                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={description}
                        onChange={(e) => dispatch(updateDescription(e.target.value))}
                    />

                    <Button variant="contained" color="primary" type="submit">
                        {editingProjectId ? "Update Project" : "Add Project"}
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}
