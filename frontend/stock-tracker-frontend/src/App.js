import "./App.css";
import StockAlertForm from "./components/StockAlertForm";
import { Container, Box, Grid, Typography } from "@mui/material";
import heroImage from "./assets/hero-image.jpg";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "rgba(0,20,30,0.69)",
      }}
    >
      <Box sx={{ margin: "10px" }}>
        <Typography variant="h1" color="white" align="center" gutterBottom>
          Stock Tracker
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "15px",
          marginLeft: "50px",
          marginRight: "50px",
          marginBottom: "30px",
          backgroundColor: "rgba(128, 128, 128, 0.8) ",
          textAlign: "left"
        }}
      >
        {/* <Container maxWidth="lg"> */}
        <Grid container spacing={2}>
          <Grid item sm={12}></Grid>
          <Grid sx={{ color: "whitesmoke" }} item sm={4}>
           <About /> 
          </Grid>
          <Grid item sm={8}>
            <StockAlertForm />
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
      <Footer />
    </Box>

  );
}

export default App;
