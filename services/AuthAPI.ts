import axiosClient from "../api/api";

const authAPI = {
  getLogin: (data: any) => {
    const url = `/authencation/login`;
    // const params = {
    //   login: data.login,
    // };
    console.log(data,'data');
    return axiosClient.post(url, data );
  },
  getRegister: (data: any) => {
    const url = `/authencation/register`;
    return axiosClient.post(url, data );
  },
};

export default authAPI;
