import * as React from 'react';
import HouseOne from "../common/assets/img/house-1.jpeg";
import HouseTwo from "../common/assets/img/house-2.jpeg";
import HouseThree from "../common/assets/img/house-3.jpeg";
import HouseFour from "../common/assets/img/house-4.jpeg";
import HouseFiv from "../common/assets/img/house-5.jpeg";
import HouseSix from "../common/assets/img/house-6.jpeg";

import gallary1 from "../common/assets/img/gal-1.jpeg";
import gallary2 from "../common/assets/img/gal-2.jpeg";
import gallary3 from "../common/assets/img/gal-3.jpeg";
import gallary4 from "../common/assets/img/gal-4.jpeg";
import gallary5 from "../common/assets/img/gal-5.jpeg";
import Checkout from './Reservation/Checkout';

export default function PropertyImageList() {
  return (
    <>

    <div class="row mt-5">
    <div class="col-md-3 myTestClass">
    <img src={HouseThree} alt="Gallery image 1" class="img-thumbnail"></img>
    </div>
    <div class="col-md-3 myTestClass">
 <img src={gallary1} alt="Gallery image 2" class="img-thumbnail"></img>
    </div>
    <div class="col-md-3 myTestClass">
  <img src={gallary2} alt="Gallery image 3" class="img-thumbnail"></img>
    </div>
    <div class="col-md-3 myTestClass">
    <img src={gallary3} alt="Gallery image 4" class="img-thumbnail"></img>
    </div>
  </div>


    
    <Checkout />






    </>

  );
}


