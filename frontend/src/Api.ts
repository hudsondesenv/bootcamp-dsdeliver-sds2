import axios from 'axios';

const API_URL = 'http://localhost:8080'

export function FechProdutcs(){
    return axios(`${API_URL}/products`);
}