import  Axios  from "axios";

const axiosInstance = Axios.create({
    baseURL:"https://dev.octilus.in/api",
    headers: {
        "Content-Type": "application/json",
      },
})

export default axiosInstance