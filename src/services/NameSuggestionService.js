import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/suggestions";

export function createSuggestion(suggestion) {
    return axios.post(`${BASE_URL}`, suggestion);
}

export const update = (id, suggestion) => {
    return axios.put(`${BASE_URL}/${id}`, suggestion)
}