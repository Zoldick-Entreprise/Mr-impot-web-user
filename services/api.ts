import axios from "axios";

const api = axios.create({
  baseURL: "https://mr-impots-back.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ✅ Interceptor request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("api_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Interceptor response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    switch (status) {
      case 401:
        localStorage.removeItem("api_token");
        window.location.href = "/login";
        break;

      case 403:
        console.error("Accès refusé");
        break;

      case 500:
        console.error("Erreur serveur");
        break;
    }
    return Promise.reject(error);
  }
);

export default api;