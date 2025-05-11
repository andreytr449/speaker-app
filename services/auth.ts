import {axiosInstance} from "@/services/instance";

export const signIn = async (email:string, password:string) => {
 return ( await axiosInstance.post('/auth/sign-in', {email, password})).data
}