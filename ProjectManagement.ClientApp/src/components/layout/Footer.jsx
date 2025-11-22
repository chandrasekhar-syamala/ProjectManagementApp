import { Box, Typography, Paper } from "@mui/material";

export default function Footer() {
    return (
        <Paper elevation={3} square>
            <Box
                sx={{
                    padding: 2,
                    textAlign: "center",
                    backgroundColor: "#f7f7f7",
                    marginTop: 4
                }}
            >
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Chandrasekhar Syamala — All rights reserved.
                </Typography>
            </Box>
        </Paper>
    );
}
