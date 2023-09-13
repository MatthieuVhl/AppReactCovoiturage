import { useSelector } from 'react-redux';
import './ProfilPage.css';
import { useEffect, useState } from 'react';
import { get } from '../../service/data.service';
import CarRideComponent from '../CarRide/Component/CarRideComponent';
const ProfilPage = () => {

    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)

    const [listBooking,setListeBooking]=useState([])
    const [listCarRide,setListCarRide]=useState([])

    const fetchBooking = async()=>{
        if(user.id_user != null){
            const responseBooking = await get("booking/user/"+user.id_user,token)
            setListeBooking([...responseBooking.data])
        }   
    }

    const fetchCarRide = async ()=>{
        if(user.id_user != null){
            const responseCarRide = await get("car_ride/car_ride/"+user.id_user,token)
            setListCarRide([...responseCarRide.data])
        }   
    }

    useEffect(()=>{
        fetchBooking()
        fetchCarRide()
    },[])

    return (
        <>

            <div className='globalContainerProfil'>

                <div className=" profil-form " >
                    <div className='profilContainer'>

                        <div className='nameProfil'>   {user.lastname} {user.firstname}</div>
                        <div className='textProfil'>Email : {user.email}</div>
                     
                        <div className='textProfil'>Phone : {user.phone}</div>
                        <div className='textProfil'>Role : {user.role === 1 ? 'User' : 'Admin'}</div>
                        </div>
                </div>   
            </div>

    
            <div className='globalContainerProfil'>
                <div className='profil-Booking'>
                <div className='textBooking'>Booking :</div>
                            {
                                listBooking.map((elem) =><CarRideComponent key={elem.carRide.id_carRide} carRide={elem.carRide} listBooking={listBooking} comment={true} isBooking={true}></CarRideComponent>)
                            }
                        </div>
            </div>


            <div className='globalContainerProfil'>
                <div className='profil-Booking'>
                <div className='textBooking'>My Ride :</div>
                            {
                                listCarRide.map((elem) =><CarRideComponent key={elem.id_carRide}  carRide={elem} listBooking={listBooking} delete={true}  ></CarRideComponent>)
                            }
                        </div>
            </div>
             

            <div className='globalContainerProfil'></div>
              <div className='profil-comment'>
                        Commentaire :
                      </div>
        </>

    )
};

export default ProfilPage;

