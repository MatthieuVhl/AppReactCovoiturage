import { useSelector } from 'react-redux';
import './ProfilPage.css';
import { useEffect, useState } from 'react';
import { get } from '../../service/data.service';
import CarRideComponent from '../CarRide/Component/CarRideComponent';
const ProfilPage = () => {

    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)

    const [listBooking,setListeBooking]=useState([])

    const fetchBooking = async()=>{
        if(user.id_user != null){
            const responseBooking = await get("booking/user/"+user.id_user,token)
            setListeBooking([...responseBooking.data])
        }   
    }

    useEffect(()=>{
        fetchBooking()
    })

    return (
        <>

            <div className='globalContainerProfil'>

                <div className=" profil-form " >
                    <div className='profilContainer'>

                        <div className='nameProfil'>   {user.lastname} {user.firstname}</div>
                        <div className='textProfil'>Email : {user.email}</div>
                     
                        <div className='textProfil'>Phone : {user.phone}</div>
                        <div >Role : {user.role === 1 ? 'User' : 'Admin'}</div>
                        </div>
                </div>   
            </div>

    
            <div className='globalContainerProfil'>
                <div className='profil-Booking'>
                <div className='textBooking'>Booking :</div>
                            {
                                listBooking.map((elem) =><CarRideComponent key={elem.carRide.id_carRide} id={elem.carRide.id_carRide} start={elem.carRide.start_point} id_driver={elem.carRide.id_user_driver}  end={elem.carRide.end_point} places={elem.carRide.seatAvailable} date={elem.carRide.startDate} price={elem.carRide.price} listBooking={listBooking} ></CarRideComponent>)
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

