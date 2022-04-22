import axios from "axios";

const apiUrl = 'http://localhost:3001/persons' 


const getAll = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)           
}

const create = (newObject) => {
    const request = axios.post(apiUrl, newObject)
    return request.then(response => response.data)
}

const del = (id) => {
    axios.delete(`${apiUrl}/${id}`)

}

const update = (id, newObject) => {
    const request = axios.put(`${apiUrl}/${id}`,newObject)
    return request.then(response=> response.data)
}

export default {
    getAll,
    create,
    del,
    update
}