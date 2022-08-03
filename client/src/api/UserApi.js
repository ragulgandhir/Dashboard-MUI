import axios from 'axios';

const URL = "http://localhost:3000/api"

export const userDetail = () => {
    return axios.get(`${URL}/users/details/{id}`)
}

export const userUpdate = () => {
    return axios.put(`${URL}/users/update/{id}`)
}

export const userDelete = (_id) => {
    return axios.delete(`${URL}/users/delete/{id}`)
}

export const adminLogin = () => {
    return axios.post(`${URL}/admin/login`)
}