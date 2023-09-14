import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { post } from '../../service/data.service';
import { setToken, setUser } from './AuthSlice';
import "./LoginPage.css"

const RegistrationForm = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    phone: '',
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

    let responseRegister = await post("auth/register",formData)

    if(responseRegister != null){

      dispatch(setToken(responseRegister.data.token))

      let responseUser = await post("user/finduser",{email : formData.email},responseRegister.data.token)
      
      if(responseUser != null){
        dispatch(setUser(responseUser.data))
     }
    }
  };

  return (
    <div className='AuthContainer'>
      <form onSubmit={handleSubmit} className='formLoginContainer'>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      
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

        <button type="submit" className="btn btn2">
          Register
        </button>

      </form>
    </div>
     
  );
}

export default RegistrationForm;