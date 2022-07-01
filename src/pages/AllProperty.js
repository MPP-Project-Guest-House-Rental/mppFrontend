import * as React from "react";
import HouseOne from "../common/assets/img/house-1.jpeg";
import HouseTwo from "../common/assets/img/house-2.jpeg";
import HouseThree from "../common/assets/img/house-3.jpeg";
import HouseFour from "../common/assets/img/house-4.jpeg";
import HouseFiv from "../common/assets/img/house-5.jpeg";
import HouseSix from "../common/assets/img/house-6.jpeg";
import {useEffect, useState} from 'react'
import { useNavigate, Route } from "react-router-dom";
import axios from "axios";
export default function AllProperty() {
    const navigate = useNavigate ();
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("");

    // useEffect(async () => {   
    //     getProperties()
    // },[])

    async function getProperties(){
        try{
            let localValue = await localStorage.getItem('MppApp')
            const token = JSON.parse(localValue).jwt
            console.log(token)
            const config = {
                headers: { 
                  Authorization: `Bearer ${token}`
                }
              };
            const response = await axios.get(process.env.REACT_APP_BASE_URL+'/property', config)
            console.log(response)
      
          }catch(error){
            setLoginError('You have entered invalid username or password!')
            console.log(error);
            setLoading(false);
          }  
    }

    async function handelSingelProperty(){

    }
  return (
    <>

<div className="container  custom-cards">
<div className="row my-5">
          <div className="col-md-4">
          <div class="home">
                <img src={HouseOne} alt="House 1" class="home__img"></img>
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
          <div className="col-md-4">
          <div class="home">
                <img src={HouseTwo} alt="House 1" class="home__img"></img>
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
          <div className="col-md-4">
          <div class="home">
                <img src={HouseThree} alt="House 1" class="home__img"></img>
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

        <div className="row">
          <div className="col-md-4">
          <div class="home">
                <img src={HouseFour} alt="House 1" class="home__img"></img>
                <h5 class="home__name">Large Rustical Villa</h5>
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
          <div className="col-md-4">
          <div class="home">
                <img src={HouseFiv} alt="House 1" class="home__img"></img>
                <h5 class="home__name">Modern Familiy Apartment</h5>
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
                <button class="btn home__btn">Contact Host</button>
            </div>
          </div>
          <div className="col-md-4">
          <div class="home">
                <img src={HouseSix} alt="House 1" class="home__img"></img>
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
                <button class="btn home__btn">Contact Host</button>
            </div>
          </div>
        </div>
</div>
<div class="text-center u-margin-huge">
                    <a href="#" class="btn-custome btn--green">Discover all Homes</a>
                </div>

 
    </>
  );
}
