import axios from "axios";


 
export const axiosInstance = axios.create({
    baseURL : "http://localhost:5000/v1/payment",
    headers: {
        "Content-Type": "application/json",
    },
});


// Add a request interceptor to include the Authorization header    
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );
