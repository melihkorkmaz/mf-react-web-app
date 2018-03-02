import axios from 'axios';
import config from 'config';

const headers = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-source': 'web-app',
        'x-access-token': localStorage.getItem("token")
    }
}

const axiosOptions = (httpMethod) => {
    return (data) => {
        let response = {
            method: httpMethod.toUpperCase(),
            headers: headers()
        }
        
        if(data)
            response.data = data;

        return response
    }
}

const postOptions = (data) => {
    return axiosOptions("POST")(data)
}

const getOptions = () => {
    return axiosOptions("GET")(null);
}

const deleteOptions = () => {
    return axiosOptions("DELETE")(null);
}

const post = (url) => {
    return (data) => {
        if(url.substring(0,1) !== "/")
            url = "/" + url;
        return axios(`${config.api}${url}`, postOptions(data));
    }
}

const get = (url) => {
    return axios(`${config.api}${url}`, getOptions());
}

const deleteMethod = (url) => {
    return axios(`${config.api}${url}`, deleteOptions());
}

export default {
    post,
    get,
    delete : deleteMethod
}