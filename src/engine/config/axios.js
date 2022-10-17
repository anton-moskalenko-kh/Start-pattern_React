// Core
import axios from 'axios';

const instance = axios.create({
    baseURL: '#',
    headers: {
        'Content-Type': 'application/json',
    },
});

const api = Object.freeze({
    method() {
        return instance.get('');
    },
});

export default api;