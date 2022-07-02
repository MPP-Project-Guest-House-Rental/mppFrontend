import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import HouseOne from "../../common/assets/img/house-1.jpeg";
import HouseTwo from "../../common/assets/img/house-2.jpeg";
import HouseThree from "../../common/assets/img/house-3.jpeg";
import GradeIcon from '@mui/icons-material/Grade';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
const labels = {
  0: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

async function handelSingelProperty(){

}



function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function RatingProperty() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlesubmit = () => {
  alert(value)
}
  return (
    <>

    <div className="container  custom-cards">
<div className="row my-5">
          <div className="col-md-4 review">
         
          <div class="home">
          
                <img src={HouseOne} alt="House 1" class="home__img"></img>
                <span onClick={handleClickOpen} className='fa-review'> <GradeIcon /></span>
               
                <h5 class="home__name">Beautiful Familiy House</h5>
                <div class="home__location">
            
                    <p>USA</p>
                </div>
                <div class="home__rooms">
           
                    <p>5 rooms</p>
                </div>
                <div class="home__area">
             
                    <p>325 m<sup>2</sup></p>
                </div>
                <div class="home__price">
       
                    <p>$1,200,000</p>
                </div>
                <button class="btn home__btn" onClick={handelSingelProperty}>Explore More</button>
            </div>
          </div>
          <div className="col-md-4 review">
          <div class="home">
                <img src={HouseTwo} alt="House 1" class="home__img"></img>
                <span onClick={handleClickOpen} className='fa-review'> <GradeIcon /></span>
                <h5 class="home__name">Modern Glass Villa</h5>
                <div class="home__location">
            
                    <p>USA</p>
                </div>
                <div class="home__rooms">
           
                    <p>5 rooms</p>
                </div>
                <div class="home__area">
             
                    <p>325 m<sup>2</sup></p>
                </div>
                <div class="home__price">
       
                    <p>$1,200,000</p>
                </div>
                <button class="btn home__btn" onClick={handelSingelProperty}>Explore More</button>
            </div>
          </div>
          <div className="col-md-4 review">
          <div class="home">
                <img src={HouseThree} alt="House 1" class="home__img"></img>
                <span onClick={handleClickOpen} className='fa-review'> <GradeIcon /></span>
                <h5 class="home__name">Cozy Country House</h5>
                <div class="home__location">
            
                    <p>USA</p>
                </div>
                <div class="home__rooms">
           
                    <p>5 rooms</p>
                </div>
                <div class="home__area">
             
                    <p>325 m<sup>2</sup></p>
                </div>
                <div class="home__price">
       
                    <p>$1,200,000</p>
                </div>
                <button class="btn home__btn" onClick={handelSingelProperty}>Explore More</button>
            </div>
          </div>
        </div>
</div>

    

    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Rate Property
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box
      sx={{
        width: 300,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handlesubmit}>
            Rate
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
 
    
    </>

  );
}
