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

function postUser(email: any, password: any, firstName: any, lastName: any, birthday: any, phone: any, id: any) {
    return axios.post(urlGetUsers, {
        "email": email,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
        "birthday": birthday,
        "phone": phone,
        "classe": {
            'id': id
        }
    })
}

export default {
    getAllUsers,
    getUserToken,
    postUser
}