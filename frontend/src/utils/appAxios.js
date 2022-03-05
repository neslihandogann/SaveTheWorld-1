
import axios from 'axios'

const appAxios = axios.create({
    baseURL: 'http://localhost:3008',
});
export default appAxios;