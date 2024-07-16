import axios from 'axios';

const interceptors = axios.create({
    baseURL: 'http://smataruev.fvds.ru:10000',
});

export default interceptors;