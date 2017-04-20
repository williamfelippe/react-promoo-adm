import axios from "axios";

export const signin = (data) => {
    return axios.post('authentication/signin', data);
};

export const forgotPassword = (data) => {
    return axios.post('authentication/forgot_password', data);
};