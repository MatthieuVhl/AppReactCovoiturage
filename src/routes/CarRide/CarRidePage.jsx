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
    
    <div class="card border-primary mb-3 carride-form text" >
      <div class='form-group'>
        <div class=" marge"> 
         
          Heure de départ : 
        

        </div>
       
        <div class=" marge"> 
       
          Heure d' arrivée :
          

        </div>
      
        <div  class=" marge "> 
      
          Ville de départ :
          

        </div>
        
        <div  class="marge  "> 
        
          Ville d' arrivée :
          

        </div>
        </div>
        <div  className=" price">
      
         Prix : 
        
 
        </div>
  
        </div>
         

   

    </>
    )
  };
  
  export default CarRidePage;