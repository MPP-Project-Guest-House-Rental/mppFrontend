import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import AddressInformation from './AddressInformation';

export default function PropertyInformation(props) {
  debugger;
  const { values, field1, field2, activeStep, isLastStep, handleBack, handleNext } = props;
  const [registrationData, setRegistrationData] = useState({
    title: '',
    type: '',
    bath_room_number: '',
    price_per_night: '',
    bed_number: '',
    bed_room_number: '',
    property_description: '',
    user_id: '',
    space: '',
    description: '',
    capacity: '',
  });

  const handleChange = (event) => {
    debugger;
    const { name, value } = event.target;
   
    setRegistrationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="title"
            label="Property Title"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="type"
            label="Property Type"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
        
          name="description"
            label="Property Description"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="bathRoomNo"
            label="Bath Room Number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="space"
            label="Space"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="capacity"
            label="Capacity"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="bedRoomNo"
            label="Bed Room Number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="bedNumber"
            label="Bed Number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="pricePerNight"
            label="Price Per Night"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}