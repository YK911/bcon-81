import axios from "axios";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers["x-api-key"] = import.meta.env.VITE_API_KEY;
