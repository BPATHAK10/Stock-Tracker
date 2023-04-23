import React, { useState } from "react";
import {
  Button,
  Box,
  Grid,
  Select,
  MenuItem,
  Typography,
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
  const initialFormData = {
    stock_symbol: "",
    threshold_price: 1000,
    frequency: "daily",
    notification_type: "email",
    email: "",
    phone: "",
  };
  const [formData, setformData] = useState(initialFormData);
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "email") {
      if (!value || !value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else if (name === "phone") {
      if (!value || !value.match(/^\d{10}$/)) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    }
  };

  const handleSubmit = (event) => {
    if (!emailError && !phoneError) {
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
          setformData(initialFormData);
        })
        .catch((error) => {
          console.error(error);
        });

      setformData(initialFormData);
      setSuccess("");
    }
  };
  //   console.log(formData);

  //   const [frequency, setFrequency] = useState("");
  const handlereset = () => {
    setformData(initialFormData);
    setSuccess("");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "whitesmoke",
          border: 0,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "black",
          // height: 50,
          borderRadius: 3,
          padding: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Arial",
                fontSize: "18px",
                paddingBottom: "10px",
              }}
            >
              Stock Symbol
            </Typography>
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
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Arial",
                  fontSize: "18px",
                  paddingBottom: "10px",
                }}
              >
                Threshold Price
              </Typography>
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
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Arial",
                  fontSize: "18px",
                  paddingBottom: "10px",
                }}
              >
                Frequency of notification
              </Typography>
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
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Arial",
                  fontSize: "18px",
                  paddingBottom: "10px",
                }}
              >
                Notification Type
              </Typography>
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
          <Grid item sm={6}>
            {formData.notification_type === "email" && (
              <TextField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleInputBlur}
                margin="normal"
                variant="outlined"
                error={emailError}
                helperText={
                  emailError ? "Please enter a valid email address" : ""
                }
              />
            )}
          </Grid>
          <Grid item sm={6}>
            {formData.notification_type === "text" && (
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleInputBlur}
                margin="normal"
                variant="outlined"
                error={phoneError}
                helperText={
                  phoneError ? "Please enter a 10-digit phone number" : ""
                }
              />
            )}
          </Grid>
          <Grid item sm={10}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
          <Grid item sm={2}>
            <Button onClick={handlereset} color="secondary" variant="outlined">
              Reset
            </Button>
          </Grid>
          <Grid item sm={12}>
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
        </Grid>
      </Box>
    </form>
  );
}

export default StockAlertForm;
