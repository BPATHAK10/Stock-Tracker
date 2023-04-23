import "./App.css";
import StockAlertForm from "./components/StockAlertForm";
import { Container, Box, Grid, Typography } from "@mui/material";
import heroImage from "./assets/hero-image.jpg";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "rgba(0,20,30,0.69)",
      }}
    >
      <Box sx={{ margin: "50px" }}>
        <Typography variant="h1" color="white" align="center" gutterBottom>
          Stock Tracker
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "15px",
          margin: "100px",
          backgroundColor: "rgba(128, 128, 128, 0.8) ",
          textAlign: "left"
        }}
      >
        {/* <Container maxWidth="lg"> */}
        <Grid container spacing={2}>
          <Grid item sm={12}></Grid>
          <Grid sx={{ color: "whitesmoke" }} item sm={4}>
            <Typography variant="h5" gutterBottom>
              How to Use
            </Typography>

            <Typography variant="body1" gutterBottom>
              Follow these simple steps to start monitoring a stock:
            </Typography>

            <Typography variant="h6" gutterBottom>
              Step 1:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Enter the stock symbol you want to monitor in the "Stock Symbol"
              field.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Step 2:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Enter the price threshold at which you want to receive
              notifications in the "Price Threshold" field.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Step 3:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Choose how often you want to receive notifications about the
              stock's price by selecting one of the options in the "Notification
              Frequency" dropdown.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Step 4:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Select the type of notification you want to receive by checking
              either the "Email" or "SMS" box.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Step 5:
            </Typography>
            <Typography variant="body1" gutterBottom>
              If you selected "Email" notification, enter your email address in
              the "Email Address" field. If you selected "SMS" notification,
              enter your phone number in the "Phone Number" field.
            </Typography>

            <Typography variant="h6" gutterBottom>
              Step 6:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Click the "Submit" button to start monitoring the stock!
            </Typography>
          </Grid>
          <Grid item sm={8}>
            <StockAlertForm />
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
    </Box>
  );
}

export default App;
