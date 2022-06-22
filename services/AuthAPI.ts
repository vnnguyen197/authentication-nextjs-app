import axiosClient from "../api/api";

const authAPI = (data:any) => {
    const url = `process.env.NEXT_PUBLIC_API_URL`;
    const params = {
      page: data.page,
    };
    return axiosClient.get(url, { params });
};
console.log(authAPI, 'daaaaaa ');


export default authAPI;