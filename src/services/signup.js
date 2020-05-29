import axios from "axios"

const baseUrl="/api/users"

const signup=async credencials =>{
    try {
        const password=credencials.passwordSing
        const username=credencials.usernameSing
        const name=credencials.usernameSing
        const response = await axios.post(baseUrl,{password,username,name})
        return response.data
    } catch (error) {
        return error.response.data.error
    }
}

export default { signup }