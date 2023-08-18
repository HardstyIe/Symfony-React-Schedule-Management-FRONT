import axios from "axios";

function setAxiosToken(token: any) {
    if (token) {
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        console.log(token);
    } else {
        console.log("pas header");
    }
}

export default {
    setAxiosToken
}
