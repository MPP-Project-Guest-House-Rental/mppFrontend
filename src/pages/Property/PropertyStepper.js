import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressInformation from './AddressInformation';
import PropertyInformation from './PropertyInformation';
import ImageInformation from './ImageInformation';
import Summary from './Summary'
import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';





const theme = createTheme();

export default function PropertyStepper(props) {
  debugger;
  const steps = ['Property Information', 'Address Information', 'Image', 'Summary'];
  const { field1, field2, field3, field4, field5, field6, } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = useState({
    field1, field2, field3, field4, field5, field6
  });
 

  const handleNext = (newValues) => {
    debugger;
    setFormValues({ ...formValues, ...newValues });
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    const isLastStep = (activeStep === steps.length - 1);
    switch (step) {
      case 0:
        return <PropertyInformation {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
      case 1:
        return <AddressInformation {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
      case 2:
        return <ImageInformation {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
        case 3:
          return <Summary {...formValues} activeStep={activeStep} isLastStep={isLastStep} handleBack={handleBack} handleNext={handleNext}/>;
       
        default:
        throw new Error('Mis-step!');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Host your home
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
   
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Host Property' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}