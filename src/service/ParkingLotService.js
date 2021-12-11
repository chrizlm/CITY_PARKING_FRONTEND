import http from "./http-common"

const getAll = () => {
    return http.get("/parkingLot/all");
};

const get = parkinglocation => {
    return http.get(`/parkingLot/get/${parkinglocation}`);
};

const create = data => {
    return http.post("/parkingLot/save", data);
};

const updateAlt = (id, data) => {
    return http.put(`/parkingLot/update/${id}`, data);
};

const update = (data) => {
    return http.put(`/parkingLot/update`, data);
};

const remove = id => {
    return http.delete(`/parkingLot/${id}`);
};

const removeAll = () => {
    return http.delete(`/parkingLot/all`);
};

const findByLocation = location => {
    return http.get(`/parkingLot/get/${location}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByLocation
};