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

  const onClickBookHandler = async ()=>{
    if(token != ""){
      await get("booking/book_car_ride/"+user.id_user+"/"+props.carRide.id_carRide,token)
      setStatus(true)
    }
    else{
      navigate("/login")
    }
  }


  const onClickUnBookHandler = async ()=>{
    if(token != ""){
      await get("booking/unbook_car_ride/"+user.id_user+"/"+props.carRide.id_carRide,token)
      setStatus(false)
    }
    else{
      navigate("/login")
    }
  }

  const onCLickCommentHandler = ()=>{
    navigate("/comment/"+props.carRide.id_carRide)
  }

  const onCLickDeleteHandler = async ()=>{
    await get("car_ride/delete/"+props.carRide.id_carRide,token)
    navigate("/")
  }


  const isBooked = async ()=>{
    if(token !== ""){
      const response = await get("booking/isbooked/"+user.id_user+"/"+props.carRide.id_carRide,token)
      if(response.data === ""){
        setStatus(false)
      }
      else{
        setStatus(true)
      }
    }

  }

  useEffect(()=>{
    isBooked()
  },[])



  return (
    <>

      <div className='globalContainerCarRide'>

        <div className="card carride-form text" >
          <div className='carRideContainer'>

            <div className="start-end ">
              <div className="postext">Departure point : {props.carRide.start_point}</div>
              <div className="postext">End point : {props.carRide.end_point}</div>
              <div className="postext">Numbers of places : {props.carRide.seatAvailable}</div>
              <div className="postext">Date : {props.carRide.startDate}</div>
            </div>

            <div className='priceContainer'>
              <div className=" price">Price : {props.carRide.price}€</div>
            </div>
          
          {
            props.comment &&
            <button className='buttonComment' onClick={onCLickCommentHandler}>Comment <i class="bi bi-arrow-right-circle"></i></button>
          }
         {
            props.delete && 
            <button className='buttonDelete' onClick={onCLickDeleteHandler}>Delete <i class="bi bi-trash"></i></button>
          }
            

          {
            props.isBooking && 
            <div className='positionBtnCard'> 
              <button 
              className={props.carRide.seatAvailable === 0 ? 'buttonBooking buttonBookingDisable' : status ? 'buttonBooking buttonBookingDisable' : 'buttonBookingbook'} 
              onClick={props.carRide.seatAvailable === 0 ? onClickUnBookHandler  : status ? onClickUnBookHandler :onClickBookHandler } >
              {props.carRide.seatAvailable === 0 ? "Unbook"  : status ? "Unbook"  :"Book" }
              </button>
            </div>
          }
           
            
          </div>

        </div>
      </div>




    </>
  )
};

export default CarRideComponent;