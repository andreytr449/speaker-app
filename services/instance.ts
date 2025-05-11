import axios from "axios";
import {BACKEND_URL} from "@/config/env";

export const axiosInstance = axios.create({
    baseURL: BACKEND_URL
})