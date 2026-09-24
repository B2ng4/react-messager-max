import axios from "axios";

export function sendMessage({ idInstance, apiTokenInstance, message }) {
    return axios.post(`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,{message})
}

export function receiveNotification({ idInstance, apiTokenInstance, seconds }) {
    return axios.get(`/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=
    ${seconds}`)
}

export function deleteNotification({ idInstance, apiTokenInstance, receiptId }) {
    return axios.delete(`/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`)
}