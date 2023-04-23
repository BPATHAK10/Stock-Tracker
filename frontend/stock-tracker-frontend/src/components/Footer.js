import React from "react";
import { Grid, Container, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#a5c2b1",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Stock Tracker App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              © 2023. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              All data extracted from the{" "}
              <a href="https://finance.yahoo.com/"  target="_blank" rel="noopener noreferrer" >Yahoo Finance API</a>.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
