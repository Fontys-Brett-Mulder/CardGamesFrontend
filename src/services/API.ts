import axios, {AxiosInstance} from "axios";

export const GamesAPI: AxiosInstance = axios.create({
    baseURL: "https://localhost:7000/api/",
    headers: {
        "Content-type": "application/json",
    },
});

export const SessionAPI: AxiosInstance = axios.create({
    baseURL: "https://localhost:7001/api/",
    headers: {
        "Content-type": "application/json",
    },
});

