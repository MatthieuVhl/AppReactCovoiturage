import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

  const token = useSelector((state) => state.auth.token)

  useEffect(()=>{
    if(token != null){
      console.log(token)
    }
  })

  return (
    <div className="container">
      <h1 className="my-4">Réservez votre voyage</h1>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="depart"
            placeholder="Départ"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="passager"
            placeholder="Nombre de passagers"
            value={passager}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
  
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRecherche}
        >
          Rechercher
        </button>
      </form>
    </div>
  );
}

export default HomePage;