import axios from 'axios';
//base da url: /https://api.themoviedb.org/3/
// api: /movie/now_playing?api_key=cfb58711e7afb393a4b54db263d762fa&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;