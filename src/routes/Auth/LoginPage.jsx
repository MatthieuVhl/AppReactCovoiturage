import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRegister } from '../../service/data.service';
import { setToken } from './AuthSlice';

const LoginPage = () => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRegister("auth/login",formData).then(res =>{
      dispatch(setToken(res.data.token))
    }); 
  };


  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Adresse e-mail
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Mot de passe
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>

    <button type="submit" className="btn btn-primary">
      Connection
    </button>

  </form>
  );
};

export default LoginPage;