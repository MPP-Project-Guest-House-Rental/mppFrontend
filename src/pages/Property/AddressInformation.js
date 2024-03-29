import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addAddressInformation from '../../redux/actions/addAddressInformationAction';

 const AddressInformation = forwardRef((props, ref) => { 
  ;
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  let prevInfo = counter.addressInformation[counter.addressInformation.length - 1];
  const [addressData, setAddressData] = useState({
    country: prevInfo ? prevInfo.country : null,
    city: prevInfo ? prevInfo.city : null,
    state: prevInfo ? prevInfo.state : null,
    street_number: prevInfo ? prevInfo.street_number : null,
    zip_code: prevInfo ? prevInfo.zip_code : null,
    lat: prevInfo ? prevInfo.lat : null,
    lon: prevInfo ? prevInfo.lon : null,
  });
  const handleChange = (event) => {
    ;
    const { name, value } = event.target;
   
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    dispatch(addAddressInformation(addressData));
  };


  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.country : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="State"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.city : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="City"
            fullWidth
            autoComplete="city"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.state : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zipCode"
            name="zip_code"
            label="Zip Code"
            fullWidth
            autoComplete="zipCode"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.zip_code : null}
            onChange={handleChange}
          />
        </Grid>
   
        <Grid item xs={12} sm={6}>
          <TextField
            id="lat"
            name="lat"
            label="Lat"
            fullWidth
            variant="standard"
            defaultValue={prevInfo ? prevInfo.lat : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField

            id="lon"
            name="lon"
            label="Lon"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.lon : null}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField

            id="streetNumber"
            name="street_number"
            label="Street Number"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.street_number : null}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
});
export default  AddressInformation;