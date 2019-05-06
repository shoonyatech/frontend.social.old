import axios from 'axios'

export default() =>{
    return axios.create({
      baseURL: `https://frontend-social-api.herokuapp.com/`
    })
  }
  