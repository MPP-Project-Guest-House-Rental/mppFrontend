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
    const [data, setData] = useState([])


    // async function handelSingelProperty(){
    //     console.log("hello")
    //     navigate('/PropertyImageList', { state: { id: 7, color: 'green' } });
    // }

    useEffect(() => {
        async function getProperties(){
            try{
                const response = await axios.get(process.env.REACT_APP_BASE_URL+'/property')
                console.log(response.data)
                setData(response.data)
              }catch(error){
                setLoginError('You have entered invalid username or password!')
                console.log(error);
                setLoading(false);
              }  
        }
        getProperties()
      },[])


  return (
    <>
<div className="container  custom-cards">
<div className="row my-5">
{data.length > 0 ? data.map((row, index, arr) => {
    return (
        
            <div className="col-md-4">
                <div class="home">
                    <img src={row.cover_image} alt="House 1" class="home__img"></img>
                    <h5 class="home__name">{row.title}</h5>
                    <div class="home__location">
                
                        <p>{row.address.country}</p>
                    </div>
                    <div class="home__rooms">
                
                        <p>{row.homeProperty.bedNumber} rooms</p>
                    </div>
                    <div class="home__area">
                    
                        <p>{row.address.city}</p>
                    </div>
                    <div class="home__price">

                        <p>${row.pricePerNight}</p>
                    </div>
                    <button class="btn home__btn" onClick={() => {
                        navigate('/PropertyImageList',  { state: { id: row.id }})
                    }}>Explore More</button>
                </div>
            </div>
        
    );
})   
:<div>Loading</div>
}
</div> 

</div>
<div class="text-center u-margin-huge">
    <a href="#" class="btn-custome btn--green">Discover all Homes</a>
</div>

 
    </>
  );
}
