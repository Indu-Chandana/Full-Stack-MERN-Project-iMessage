import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://imessage-backend-indu.herokuapp.com'
})

export default instance