import axios from "axios";
import { urlClasses } from "./uri";

function getClasses() {
    return axios.get(urlClasses);
}

export default {
    getClasses
}