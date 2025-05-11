import axios from "axios";

console.log('BASE URL:')

export const axiosInstance = axios.create({
    baseURL: 'http://192.168.31.134:5500/api/v1'
})