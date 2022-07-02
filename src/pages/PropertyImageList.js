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
import {useEffect, useState} from 'react'
import { useNavigate, Route, useLocation } from "react-router-dom";
import axios from "axios";

export default function PropertyImageList() {

  const { state } = useLocation()

  const [id, setId] = useState([])
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getProperty(){
        try{
            setId(state.id)
            const response = await axios.get(process.env.REACT_APP_BASE_URL+'/property/'+state.id)
            console.log(response.data.imagess)
            setImages(response.data.imagess)
          }catch(error){
            setLoginError('You have entered invalid username or password!')
            console.log(error);
            setLoading(false);
          }  
    }
    getProperty()
  },[])


  return (
    <>

    <div class="row mt-5">
      {images.length > 0 ? images.map((row, index, arr) => {
        return (
          <div class="col-md-3 myTestClass">
            <img src={row.url} alt={row.caption} class="img-thumbnail"></img>
          </div>     
        );
      })   
      :<div>Loading</div>
    }
  </div>


    
    <Checkout id={state.id}/>






    </>

  );
}


