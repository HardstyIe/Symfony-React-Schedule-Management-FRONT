import axios from "axios";
import { urlGetToken, urlGetUsers } from "./uri";

function getAllUsers() {
    return axios.get(urlGetUsers);
}


function getUserToken(email: any, password: any) {
    return axios.post(urlGetToken, {
        username: email,
        password: password
    });
}

export default {
    getAllUsers,
    getUserToken
}