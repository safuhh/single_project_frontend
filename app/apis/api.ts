// import axios from "axios";
// import { store } from "../redux/store";
// import { setCredentials, logout } from "../redux/authSlice";

// const authBaseUrl =
//   process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5000/auth";

// const api = axios.create({
//   baseURL: authBaseUrl,
//   withCredentials: true,
// });

// // Add accessToken
// api.interceptors.request.use((config) => {
//   const token = store.getState().auth.accessToken;
//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Refresh token on 401
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const res = await axios.post(
//           `${authBaseUrl}/refresh`,
//           {},
//           { withCredentials: true }
//         );

//         const user = store.getState().auth.user;

//         store.dispatch(
//           setCredentials({ user: user!, accessToken: res.data.accessToken })
//         );

//         if (originalRequest.headers) {
//           originalRequest.headers.Authorization = "Bearer " + res.data.accessToken;
//         }

//         return axios(originalRequest);
//       } catch (err) {
//         store.dispatch(logout());
//         if (typeof window !== "undefined") {
//           window.location.href = "/";
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;


import axios from "axios";
import { store } from "../redux/store";
import { setCredentials, logout } from "../redux/authSlice";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

// attach token
api.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// refresh
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        const res = await axios.post(
          `${baseURL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        store.dispatch(
          setCredentials({
            user: store.getState().auth.user!,
            accessToken: res.data.accessToken,
          })
        );

        original.headers = original.headers || {};
        original.headers.Authorization = `Bearer ${res.data.accessToken}`;

        return api(original);
      } catch (err) {
        store.dispatch(logout());
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default api;