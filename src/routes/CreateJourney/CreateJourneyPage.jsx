import React, { useState } from 'react';
import './CreateJourneyPage.css';

const CreateJourneyPage = () => {
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
          <div className="journey-form">
            <h2>Créer un nouveau voyage</h2>
            <form>
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
                Créer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJourneyPage;