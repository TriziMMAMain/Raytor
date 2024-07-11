import axios from 'axios';

const interceptors = axios.create({
    baseURL: 'http://smataruev.fvds.ru:10000',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNzIwODU5MTMzfQ.YGeM5m3svgSOHqRnIZ_Irc4FXW8iQKtsS5P8gR-A7aY"
    }
});

export default interceptors;