import * as React from "react";
import HouseOne from "../common/assets/img/house-1.jpeg";
import HouseTwo from "../common/assets/img/house-2.jpeg";
import HouseThree from "../common/assets/img/house-3.jpeg";
import HouseFour from "../common/assets/img/house-4.jpeg";
import HouseFiv from "../common/assets/img/house-5.jpeg";
import HouseSix from "../common/assets/img/house-6.jpeg";
import {useNavigate} from "react-router-dom";
export default function AllProperty() {
    const navigate = useNavigate ();
    const handelSingelProperty = (e) => {
        e.preventDefault();
        navigate('/PropertyImageList');

    }
  return (
    <>

<div className="container  custom-cards">
<div className="row mb-5">
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
