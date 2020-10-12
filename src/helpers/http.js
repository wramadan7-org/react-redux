import { default as axios } from 'axios'

// const { REACT_APP_BACKEND_URL } = process.env

// console.log(REACT_APP_BACKEND_URL)

const http = (token = false) => {
    return axios.create({
        // baseURL: REACT_APP_BACKEND_URL,
        baseURL: `http://localhost:8080/`,
        headers: {
            'Authorization': token ? `Bearer ${token}` : undefined
        }
    })
}

export default http