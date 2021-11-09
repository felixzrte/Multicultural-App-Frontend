import axios from 'axios';

export default axios.create({
    baseURL: 'https://mcapp-api.herokuapp.com/api/v1/'
})