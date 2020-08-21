import axios from 'axios'

export const getColors = () => {
    return axios
        .get("http://localhost:5000/api/colors")
        .then(res => {
            return res.data
        })
}