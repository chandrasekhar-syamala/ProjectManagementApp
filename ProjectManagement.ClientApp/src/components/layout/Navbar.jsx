import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5">
                    Project Manager
                </Typography>

                <Box>
                    <Button color="inherit" href="/">Home</Button>                    
                </Box>
            </Toolbar>
        </AppBar>
    );
}
