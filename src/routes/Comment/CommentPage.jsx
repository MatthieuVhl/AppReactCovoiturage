import React, { useState } from 'react';
import './CommentPage.css'



const CommentPage = () => {
  const [formData, setFormData] = useState({
    id_user: '',
    id_user_driver: '',
    id_carRide: '',
    date: '',
    note: '',
    comment: '',
  });
  // const handleChange =(e) =>{
  //   const {name,value} = e.target;
  //   setFormData({
  //       ...formData,
  //       [name]:value,
  //   });
  // };

  return (
    <>
      <div className='globaleContainerComment'>
       <div className='commentContainer'>
        <div className='comment-form '>
          <div className='text '>commentaire:</div>
       <textarea className='comment-avis'></textarea>
          
            <input type="button" value="valider" className='btn-comment' />
          </div>
          </div>
          </div>
   

    </>
  )

}

export default CommentPage;