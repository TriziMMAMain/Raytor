import axios from 'axios';

const interceptors = axios.create({
    baseURL: 'http://smataruev.fvds.ru:10000',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNzIwMTk0NTk4fQ.TQ2OjY4cgv0CwDNGipVs9WiX0ugJQQy2OAimp5oR1qY`
    }
});

export default interceptors;