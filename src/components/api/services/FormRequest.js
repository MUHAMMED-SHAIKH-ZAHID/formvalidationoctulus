import axiosInstance from "../axiosinstance";

export const SubmitData = async (data) => {
    try {
        const response = await axiosInstance.post("/create.php",{data})
        return response
    } catch (error) {
        return error.response
    }
}

export const UpdateData = async (data) => {
    console.log(data,"in axios instance");
    try {
        const response = await axiosInstance.post("/update.php",data)
        return response
    } catch (error) {
        return error.response
    }
}

