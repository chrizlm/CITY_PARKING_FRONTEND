import http from "./http-common"

const getAll = () => {
    return http.get("/parkingdetails/all");
};

const get = numberPlate => {
    return http.get(`/parkingdetails/get/${numberPlate}`);
};

const create = data => {
    return http.post("/parkingdetails/save", data);
};

const updateAlt = (id, data) => {
    return http.put(`/parkingdetails/update/${id}`, data);
};

const update = (data) => {
    return http.put(`/parkingdetails/update`, data);
};

const remove = id => {
    return http.delete(`/parkingdetails/${id}`);
};

const removeAll = () => {
    return http.delete(`/parkingdetails/all`);
};

/*
const findByLocation = location => {
    return http.get(`/parkingdetails/get/${location}`);
};
 */

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
};