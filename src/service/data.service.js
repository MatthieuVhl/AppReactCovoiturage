import axios from 'axios'

const urlapi = "http://localhost:8080/api/"

export const postRegister = (extendApi,userDetail) =>{
    return axios.post(urlapi+extendApi,userDetail)
  }

