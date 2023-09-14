import React, { useEffect, useState } from 'react';
import './CommentPage.css'
import { useSelector } from 'react-redux';
import { get, post } from '../../service/data.service';
import { useNavigate, useParams } from 'react-router-dom';



const CommentPage = () => {

  let { id } = useParams();
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.auth.user)
  const [carRide,setCarRide]=useState({})
  const navigate = useNavigate()
  const datelocal = new Date().toJSON().slice(0, 10)

  const [formData, setFormData] = useState({
    idUser: 0,
    idDriver: 0,
    idCarRide: 0,
    date: '',
    note: 0,
    comment: '',
  });
  const handleChangeComment = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      idUser: user.id_user,
      idDriver: carRide.id_user_driver !== null ? carRide.id_user_driver : 0,
      idCarRideo: carRide.id_carRide !== null ? carRide.id_carRide : 0,
      date : datelocal
    });
  };

  const handleChangeNote = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      note: Number(value),
      idUser: user.id_user,
      idDriver: carRide.id_user_driver !== null ? carRide.id_user_driver : 0,
      idCarRide: carRide.id_carRide !== null ? carRide.id_carRide : 0,
      date : datelocal
    });
  };

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    const response = await post("comment/create",formData,token)
    if(response.data !=null){
      navigate("/")
    }
  }

  const getCarRide = async ()=>{
    const response = await get("car_ride/"+id)
    setCarRide({...response.data})
  }


  useEffect(()=>{
    getCarRide()
  },[])
  return (
    <>
      <div className='globaleContainerComment'>
       <div className='commentContainer'>
        <div className='comment-form '>
          <div className='text '>commentaire:</div>
          <form onSubmit={onSubmitHandler} >

          <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  min={0} max={10} step={0.1}
                  id="note"
                  name="note"
                  placeholder='note'
                  value={formData.note}
                  onChange={handleChangeNote}
                  required
                />
              </div>

              <div>
                <textarea 
                className='comment-avis' 
                id="comment"
                name="comment"
                placeholder='comment'
                value={formData.comment}
                onChange={handleChangeComment}
                required
                ></textarea>
              </div>
            
            <button className='btn-comment' >Valider</button>

          </form>
           
          </div>
          </div>
          </div>
   

    </>
  )

}

export default CommentPage;