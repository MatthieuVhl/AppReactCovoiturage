import { useEffect, useState } from "react"
import { get } from "../../../service/data.service"
import CarRideComponent from "../Component/CarRideComponent"
import { useSelector } from "react-redux"



export default function CarRidePage (){

    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)

    const [list,setListe]=useState([])    
    const [listBooking,setListeBooking]=useState([])


    useEffect(()=>{
        fetchCarRide()
    },[])

    const fetchCarRide = async ()=>{
        const response = await get("car_ride")
        setListe([...response.data])

        if(user.id_user != null){
            const responseBooking = await get("booking/user/"+user.id_user,token)
            setListeBooking([...responseBooking.data])
        }   
    }


    return(
        <>
            <div>     
          {
            list.length === 0?
            <div>No carRide</div>
            :
            list.map((elem) => <CarRideComponent key={elem.id_carRide} id={elem.id_carRide} start={elem.start_point} id_driver={elem.id_user_driver}  end={elem.end_point} places={elem.seatAvailable} date={elem.startDate} price={elem.price} listBooking={listBooking}></CarRideComponent>)
          }
            </div>
        </>
    )
}