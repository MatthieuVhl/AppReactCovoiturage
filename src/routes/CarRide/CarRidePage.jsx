import React, { useState } from 'react';
import './CarRidePage.css';


const CarRidePage = () => {
  const [formData, setFormData] = useState({
    startride: '',
    arrivalride: '',
    citystart: '',
    cityarrival: '',
    price: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    // postCarRide("auth/carride",formData).then(res =>{
    // dispatch(setToken(res.data.token))
    // }); 
  };


  return (
    <>

      <div className='globalContainerCarRide'>

        <div class="card carride-form text" >
          <div class='carRideContainer'>
            <div class="start-end ">

              <div class="postext">Heure de départ : </div>
              <div class="postext"> Heure d' arrivée :</div>
              <div class="postext"> Ville de départ :</div>
              <div class="postext">Ville d' arrivée :</div>
            </div>

            <div className=" price">

              Prix :


            </div>

          </div>

        </div>
      </div>




    </>
  )
};

export default CarRidePage;