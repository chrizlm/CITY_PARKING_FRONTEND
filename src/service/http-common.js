import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/apiv1",
    headers: {

        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
});