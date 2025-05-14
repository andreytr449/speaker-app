import {axiosInstance} from "@/services/instance";

export const getUserData = async (token:string) => {
    return(
        await axiosInstance.get('/user',{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    ).data
}