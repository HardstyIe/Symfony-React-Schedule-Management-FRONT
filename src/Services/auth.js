import axios from "axios";

function setAxiosToken() {

    const storedToken = localStorage.getItem('accessToken');

    axios.defaults.headers['Authorization'] = `Bearer ${storedToken}`;
}

export default {
    setAxiosToken
}