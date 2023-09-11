import React, { useEffect, useState } from 'react';
import './CreateCarRidePage.css'
import { useSelector } from 'react-redux';
import { formToJSON } from 'axios';
import { post } from '../../service/data.service';

const CreateCarRidePage = () => {

  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.auth.user)

  const [formData, setFormData] = useState({
    id_user_driver: 0,
    start_point: '',
    end_point: '',
    startDateStr: '',
    seatMax: 0,
    price: 0
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      id_user_driver: user.id_user
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await post("car_ride/create",formData,token)
    if(response != null){
      console.log(response.data)
    }
  };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
          <div className="journey-form">
            <h2>Créer un nouveau voyage</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="start_point"
                  name="start_point"
                  placeholder='Start point'
                  value={formData.start_point}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="end_point"
                  name="end_point"
                  placeholder='End point'
                  value={formData.end_point}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="startDateStr"
                  name="startDateStr"
                  value={formData.startDateStr}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="seatMax"
                  name="seatMax"
                  placeholder='Number of seat'
                  min={0}
                  value={formData.seatMax}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  min={0}
                  step={0.1}
                  placeholder='Price'
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCarRidePage;