import http from "../components/controls/http-common";


export function getAll(){
    return JSON.parse(http.get("/all"));
}

export function get(motoristId){
    return http.get(`/${motoristId}`);
}

export function create(data){
    return http.post("/create", data);
}

export function update(motoristId, data){
    return http.put(`/update/${motoristId}`, data)
}

export function deleteMotorist(motoristId){
    return http.delete(`/${motoristId}`);
}

export function deleteAll(){
    return http.delete(`/removeAll`);
}



/* class MotoristService{
    getAll(){
        return http.get("/all");
    }

    get(motoristId){
        return http.get(`/${motoristId}`);
    }

    create(data){
        return http.post("/create", data);
    }

    update(motoristId, data){
        return http.put(`/update/${motoristId}`, data)
    }

    delete(motoristId){
        return http.delete(`/${motoristId}`);
    }

    deleteAll(){
        return http.delete(`/removeAll`);
    }
}

export default new MotoristService(); */