import React, { useEffect, useState } from 'react';
import './CarRideComponent.css';
import { useSelector } from 'react-redux';
import { get, post } from '../../../service/data.service';
import { useNavigate } from 'react-router-dom';


const CarRideComponent = (props) => {

  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()

  const [status,setStatus]=useState(false)

  const onClickHandler = async ()=>{
    if(token != ""){
      const response = await get("booking/book_car_ride/"+user.id_user+"/"+props.id,token)
      navigate("/")
    }
    else{
      navigate("/login")
    }
  }

  console.log(props.listBooking)
  useEffect(()=>{
      //A REGARDER
    props.listBooking.forEach(b => {
        if(b.id_User === user.id_user){
          console.log(true)
          setStatus(true)
        }
      });
  },[])



  return (
    <>

      <div className='globalContainerCarRide'>

        <div className="card carride-form text" >
          <div className='carRideContainer'>
            <div className="start-end ">

           
              <div className="postext"> Ville de départ : {props.start}</div>
              <div className="postext">Ville d' arrivée : {props.end}</div>
              <div className="postext">Nombre de places : {props.places}</div>
              <div className="postext"> date : {props.date}</div>
            </div>

            <div className='priceContainer'>
              <div className=" price">Prix : {props.price}€</div>
            </div>
          
            <button className={props.id_driver === user.id_user ? 'buttonBooking buttonBookingDisable' : props.places === 0 ? 'buttonBooking buttonBookingDisable' : status ? 'buttonBooking buttonBookingDisable' : 'buttonBooking'} onClick={onClickHandler} disabled={props.id_driver === user.id_user ? true : props.places === 0 ? true : status ? true :false} >Book</button>
            
          </div>

        </div>
      </div>




    </>
  )
};

export default CarRideComponent;