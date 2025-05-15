import {axiosInstance} from "@/services/instance";

export const getLessonById = async (id: string, token: string) => {
    return (await axiosInstance.get('lesson/' + id, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })).data
}