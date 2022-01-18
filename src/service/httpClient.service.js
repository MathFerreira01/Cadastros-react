import axios from 'axios'

const httpClient = axios.create ({
    baseURL: "https://random-persons.herokuapp.com",
}); 

export default httpClient