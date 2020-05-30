import axios from "axios"

const baseUrl = "/api/users"

const signup = async credencials => {

    const password = credencials.password
    const username = credencials.username
    const name = credencials.username
    const response = await axios.post(baseUrl, { password, username, name })
    return response.data

}

export default { signup }