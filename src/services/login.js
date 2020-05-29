import axios from "axios"

const baseUrl="/api/login"

const login=async credencials =>{
    try {
        const response = await axios.post(baseUrl,credencials)
        console.log(response)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
    

}

export default { login }