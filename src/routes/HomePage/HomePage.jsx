import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import HomeImg from '../../component/homeTuktuk';
import image from "../../asset/hometuktuk.jpg";

=======
>>>>>>> ad659bfedf99d06528402f81c1de3b212f352345
const HomePage = () => {
  const [depart, setDepart] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passager, setNombre] = useState('');

  const handleRecherche = () => {
    console.log('Départ:', depart);
    console.log('Destination:', destination);
    console.log('Date:', date);
    console.log('Passager:', passager);
  };

  // const token = useSelector((state) => state.auth.token)
  // const user = useSelector((state) => state.auth.user)
  // useEffect(()=>{
  //   if(token != null && user !=null){
  //     console.log(token)
  //     console.log(user)
  //   }
  // })

  return (
    <div style={{backgroundImage : `url(${image})` }}>
      <h1 className="my-4 titleHome">Bienvenu sur le site tuKtuKGo</h1>
      
      <form className="form">
        <div className="form-group">
        
         
        </div>
  
        
  
       
  
       
  
       
      </form>
  
    </div>
    
  );
}

export default HomePage;