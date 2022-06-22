import axiosClient from "../api/api";

const authAPI = (data:any) => {
    const url = `/authencation/login` ;
    const params = {
      login: data.login,
      register: data.register,
    };
    return axiosClient.get(url, { params });
};

export default authAPI;