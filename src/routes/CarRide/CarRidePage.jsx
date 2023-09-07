import React, { useState } from 'react';
import 'my-app/src/routes/CarRide/CarRidePage.css';


const CarRidePage = () => {
 

    return (
    <>
    
    <div class="card border-primary mb-3 border-radius " >
      
        <div class="  "> 
          <strong>
          Heure de départ : 
          </strong>

        </div>
       
        <div class=" "> 
        <strong>
          Heure d' arrivée :
           </strong>

        </div>
      
        <div  class="  "> 
        <strong>
          Ville de départ :
           </strong>

        </div>
        
        <div  class="  "> 
        <strong>
          Ville d' arrivée :
           </strong>

        </div>
        <div  className="">
        <strong>
         Prix : 
         </strong> 
 
        </div>
        </div>
         

  
   

    </>
    )
  };
  
  export default CarRidePage;