import {axiosInstance} from "@/services/instance";

export const signIn = async (email:string, password:string) => {
 return ( await axiosInstance.post('/auth/sign-in', {email, password})).data
}

export const verifyEmail = async (code: number, token: string) => {
 return (
     await axiosInstance.post(
         '/auth/verify',
         { code },
         {
          headers: {
           Authorization: `Bearer ${token}`,
          },
         }
     )
 ).data;
};
