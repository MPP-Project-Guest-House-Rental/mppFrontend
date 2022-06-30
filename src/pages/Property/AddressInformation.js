import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressInformation(props) {
  debugger;
  const { values, field1, field2, activeStep, isLastStep, handleBack, handleNext } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zipCode"
            name="zipCode"
            label="Zip Code"
            fullWidth
            autoComplete="zipCode"
            variant="standard"
          />
        </Grid>
   
        <Grid item xs={12} sm={6}>
          <TextField
            id="lat"
            name="lat"
            label="Lat"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lon"
            name="lon"
            label="Lon"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="streetNumber"
            name="streetNumber"
            label="Street Number"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}