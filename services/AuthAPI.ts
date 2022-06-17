import axiosClient from "../api/api";

const authAPI = (data:any) => {
    const url = `process.env.REACT_APP_KEY_API`;
    const params = {
      page: data.page,
    };
    return axiosClient.get(url, { params });
};
console.log(authAPI, 'daaaaaa ');


export default authAPI;