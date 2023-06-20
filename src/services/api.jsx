import axios from 'axios';
// Base url : https://api.themoviedb.org/3/

// Url da Api : https://api.themoviedb.org/3/movie/now_playing?api_key=1cca7794dad49aed8dd0994e6418498d


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


export default api;