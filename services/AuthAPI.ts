import axiosClient from "../api/api";

const authAPI = {
  Login: (data: any) => {
    const url = `/authencation/login`;
    return axiosClient.post(url, data );
  },
  Register: (data: any) => {
    const url = `/authencation/register`;
    return axiosClient.post(url, data );
  },
};

export default authAPI;
