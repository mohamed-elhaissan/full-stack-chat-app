import axios from "axios";


const axiosInstance = axios.create({
        baseURL: "http://localhost:5000/",
        headers: {
            "Content-Type": "application/json",
        }
    }
)
const token = window.localStorage.getItem("token")
if (token) {
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
}
export default axiosInstance;