import axios from "axios";

export const BASE_URL = 'http://localhost:5002';

export const API_KEY_QSTRING = '';

export const brainflix = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

