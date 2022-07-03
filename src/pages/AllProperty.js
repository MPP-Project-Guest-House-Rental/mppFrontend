import * as React from "react";
import Header from '../common/header';
import {useEffect, useState} from 'react'
import { useNavigate, Route } from "react-router-dom";
import axios from "axios";
export default function AllProperty() {
    const navigate = useNavigate ();
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const [data, setData] = useState([])

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
    <Header/>
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
