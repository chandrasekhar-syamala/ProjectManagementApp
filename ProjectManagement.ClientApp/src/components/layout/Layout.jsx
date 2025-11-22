import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Box } from "@mui/material";

export default function Layout({ children }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "80%", alignContent: "center", margin: "0 auto" }}>
            <Navbar />

            <Container maxWidth={false} sx={{ flex: 1, py: 4 }}>
                <Box sx={{ width: "100%" }}>
                    {children}
                </Box>
            </Container>

            <Footer />
        </Box>
    );
}
