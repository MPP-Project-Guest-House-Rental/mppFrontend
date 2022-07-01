import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import AddressInformation from './AddressInformation';
import { useDispatch, useSelector } from 'react-redux';
import addPropertyInformation from '../../redux/actions/addPropertyInformationAction';

const PropertyInformation = forwardRef((props, ref) => { 
  debugger;
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  let prevInfo = counter.propertyInformation[counter.propertyInformation.length - 1];
  const [propertyData, setPropertyData] = useState({
    title: '',
    type: '',
    bath_room_number: '',
    price_per_night: '',
    bed_number: '',
    bed_room_number: '',
    property_description: '',
    user_id: '',
    space: '',
    capacity: '',
  });

  const handleChange = (event) => {
    debugger;
    const { name, value } = event.target;
   
    setPropertyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    dispatch(addPropertyInformation(propertyData));
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
            defaultValue={prevInfo ? prevInfo.title : null}
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
            defaultValue={prevInfo ? prevInfo.type : null}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            
            name="price_per_night"
            label="Price Per Night"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.price_per_night : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="bath_room_number"
            label="Bath Room Number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.bath_room_number : null}
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
            defaultValue={prevInfo ? prevInfo.space : null}
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
            defaultValue={prevInfo ? prevInfo.capacity : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="bed_room_number"
            label="Bed Room Number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.bed_room_number : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="bed_number"
            label="Bed Number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.bed_number : null}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
        
          name="property_description"
            label="Property Description"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.property_description : null}
            onChange={handleChange}
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
});

export default  PropertyInformation;