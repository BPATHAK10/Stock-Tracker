import React from "react";
import { Typography } from "@mui/material"

export default function About() {
  return (
    <div>
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
        Enter the stock symbol you want to monitor in the "Stock Symbol" field.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Step 2:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter the price threshold at which you want to receive notifications in
        the "Price Threshold" field.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Step 3:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Choose how often you want to receive notifications about the stock's
        price by selecting one of the options in the "Notification Frequency"
        dropdown.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Step 4:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Select the type of notification you want to receive by checking either
        the "Email" or "SMS" box.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Step 5:
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you selected "Email" notification, enter your email address in the
        "Email Address" field. If you selected "SMS" notification, enter your
        phone number in the "Phone Number" field.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Step 6:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click the "Submit" button to start monitoring the stock!
      </Typography>
    </div>
  );
}
