import {axiosInstance} from "@/services/instance";

export const getChapters = async (token:string) => {
    return (await axiosInstance.get('chapter', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })).data
}