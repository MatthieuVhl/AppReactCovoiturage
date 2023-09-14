import React, { useEffect, useState } from "react"
import { get } from "../../../service/data.service"
import CarRideComponent from "../Component/CarRideComponent"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import "./CarRidePage.css"



export default function CarRidePage (){

    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)

    const [list,setListe]=useState([])    
    const [listBooking,setListeBooking]=useState([])

    useEffect(()=>{
        fetchCarRide()
    },[])

    const fetchCarRide = async ()=>{

        if(token == ""){
            const response = await get("car_ride")
            setListe([...response.data])
        }
        else{
            const response = await get("car_ride/car_ride_without/"+user.id_user)
            setListe([...response.data])
        }
       

        if(user.id_user != null){
            const responseBooking = await get("booking/user/"+user.id_user,token)
            setListeBooking([...responseBooking.data])
        }   
    }


    return(
        <> 
          {
            list.length === 0?
            <>
            <div className="messageContainer">
                <div className="noCarride">No Car Ride available</div>
                <NavLink className="nav-link" to={`/carride/add`}><i class="bi bi-plus-circle-fill"></i> Créer ton trajet</NavLink>
            </div>
            
            </>
            :
            list.map((elem) => <CarRideComponent key={elem.id_carRide} carRide={elem} listBooking={listBooking} isBooking={true} ></CarRideComponent>)
          }
        </>
    )
}