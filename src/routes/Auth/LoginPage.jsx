import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { post } from '../../service/data.service';
import { setToken, setUser } from './AuthSlice';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"

const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    let responseLogin = await post("auth/login",formData)

    if(responseLogin != null){

      dispatch(setToken(responseLogin.data.token))

      let responseUser = await post("user/finduser",{email : formData.email},responseLogin.data.token)
      
      if(responseUser != null){
        dispatch(setUser(responseUser.data))
        navigate("/")
     }
    }
  };

  return (
    <div className='AuthContainer'>
        <form onSubmit={handleSubmit} className='formLoginContainer'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
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
            Password
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

        <button type="submit" className="btn btn1">
          Login
        </button>

      </form>
    </div>
    
  );
};

export default LoginPage;