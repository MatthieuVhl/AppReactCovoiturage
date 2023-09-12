import axios from 'axios'

const urlapi = "http://localhost:8080/api/"

export const post = async (extendApi,body,token = "") =>{
    return await axios.post(urlapi+extendApi,body,{headers: {'Authorization': `Bearer ${token}` }})
  }

export const get = async (extendApi,token="") =>{
  return await axios.get(urlapi+extendApi,{headers: {'Authorization': `Bearer ${token}` }})
}

