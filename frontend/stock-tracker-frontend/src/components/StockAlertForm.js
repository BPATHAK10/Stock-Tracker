import React, { useState } from "react";
import {
  Button,
  Box,
  Grid,
  Select,
  MenuItem,
  Alert,
  Stack,
  AlertTitle,
  FormHelperText,
  InputLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";

function StockAlertForm() {
  const [formData, setformData] = useState({
    stock_symbol: "",
    threshold_price: 1000,
    frequency: "daily",
    notification_type: "email",
  });
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    console.log("submitted");

    event.preventDefault();
    fetch("http://localhost:5000/check-stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          setSuccess("not success");
          throw new Error(response.status);
        }
        setSuccess("success");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setformData({
          stock_symbol: "",
          threshold_price: 1000,
          frequency: "daily",
          notification_type: "email",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //   console.log(formData);

  //   const [frequency, setFrequency] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="stock-form" onSubmit={handleSubmit}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "whitesmoke",
          borderRadius: "10px",
          padding: "25px",
          marginTop: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Stock Symbol"
              variant="outlined"
              onChange={handleChange}
              name="stock_symbol"
              value={formData.stock_symbol}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Threshold Price
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formData.threshold_price}
                name="threshold_price"
                onChange={handleChange}
                inputProps={{
                  pattern: "^[0-9]*$",
                  title: "Price threshold must be a number",
                }}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Frequency of notification
              </InputLabel>
              <Select
                value={formData.frequency}
                label="Frequency"
                name="frequency"
                onChange={handleChange}
              >
                <MenuItem value={"hourly"}>Hourly</MenuItem>
                <MenuItem value={"daily"}>Daily</MenuItem>
                <MenuItem value={"weekly"}>Weekly</MenuItem>
                <MenuItem value={"monthly"}>Monthly</MenuItem>
              </Select>
              <FormHelperText>Stock price check frequency</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-required-label">
                Notification Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={formData.notification_type}
                name="notification_type"
                label="Notification Type"
                onChange={handleChange}
              >
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="text">SMS</MenuItem>
              </Select>
              <FormHelperText>Medium to receive notifications</FormHelperText>
            </FormControl>
          </Grid>
          <Grid sm={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {success == "not success" && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Please enter a correct stock symbol
              </Alert>
            )}
            {success == "success" && (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                You will now receive notifications about the stock
              </Alert>
            )}
          </Stack>
        </Grid>
      </Box>
    </form>
  );
}

export default StockAlertForm;
