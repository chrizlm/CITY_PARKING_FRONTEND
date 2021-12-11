import http from "./http-common"

const getLocData = () => {
    return http.get("/booking/locdata");
};

const getParkingData = locationName => {
    return http.get(`/booking/parkingdata/${locationName}`);
};



export default {
    getLocData,
    getParkingData,
};