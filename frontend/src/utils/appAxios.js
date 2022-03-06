
import axios from 'axios'

const appAxios = axios.create({
    baseURL: process.env.BACKEND_IP,
});
export default appAxios;