import axios from "axios";


const axiosInstance = axios.create({
        baseURL: "http://localhost:8000/api/",
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