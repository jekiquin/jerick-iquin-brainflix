import axios from "axios";

const BASE_URL = 'http://project-2-api.herokuapp.com';
export const API_KEY = 'c7a1fe2e-f6b9-4706-983d-e6cb5717fafa';

export const brainflix = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

