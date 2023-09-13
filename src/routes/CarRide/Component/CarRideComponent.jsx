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

  console.log(props.carRide.id_carRide)

  const onClickBookHandler = async ()=>{
    if(token != ""){
      const response = await get("booking/book_car_ride/"+user.id_user+"/"+props.carRide.id_carRide,token)
      navigate("/")
    }
    else{
      navigate("/login")
    }
  }


  const onClickUnBookHandler = async ()=>{
    if(token != ""){
      const response = await get("booking/unbook_car_ride/"+user.id_user+"/"+props.carRide.id_carRide,token)
      navigate("/")
    }
    else{
      navigate("/login")
    }
  }

  const onCLickCommentHandler = ()=>{
    navigate("/comment/"+props.carRide.id_carRide)
  }

  const onCLickDeleteHandler = async ()=>{
    const response = await get("car_ride/delete/"+props.carRide.id_carRide,token)
    navigate("/")
  }

  function alreadyBooked(booking) {
    return (booking.carRide.id_carRide === props.carRide.id_carRide) && (booking.iduser === user.id_user)
  }

  useEffect(()=>{
    props.listBooking.forEach(b => {
        if(alreadyBooked(b)){
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
              <div className="postext"> Ville de départ : {props.carRide.start_point}</div>
              <div className="postext">Ville d' arrivée : {props.carRide.end_point}</div>
              <div className="postext">Nombre de places : {props.carRide.seatAvailable}</div>
              <div className="postext"> date : {props.carRide.startDate}</div>
            </div>

            <div className='priceContainer'>
              <div className=" price">Prix : {props.carRide.price}€</div>
            </div>
          
          {
            props.comment &&
            <button className='buttonComment' onClick={onCLickCommentHandler}>Comment</button>
          }
          {
            props.delete &&
            <button className='buttonDelete' onClick={onCLickDeleteHandler}>Delete</button>
          }
            

          {
            props.isBooking && 
            <button 
            className={props.carRide.seatAvailable === 0 ? 'buttonBooking buttonBookingDisable' : status ? 'buttonBooking buttonBookingDisable' : 'buttonBooking'} 
            onClick={props.carRide.seatAvailable === 0 ? onClickUnBookHandler  : status ? onClickUnBookHandler :onClickBookHandler } >
            {props.carRide.seatAvailable === 0 ? "Unbook"  : status ? "Unbook"  :"Book" }
            </button>
          }
           
            
          </div>

        </div>
      </div>




    </>
  )
};

export default CarRideComponent;