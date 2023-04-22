import "./App.css";
import StockAlertForm from "./components/StockAlertForm";
import { Container, Box, Typography } from "@mui/material";
import heroImage from "./assets/hero-image.jpg"

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" color="white" align="center" gutterBottom>
          Stock Tracker
        </Typography>
        <StockAlertForm />
      </Container>
    </Box>
  );
}

export default App;
