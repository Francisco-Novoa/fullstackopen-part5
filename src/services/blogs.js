import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const newToken = (token) => {
  return{headers:{Authorization: `bearer ${token}`}}
}

const newBlog = async (newBlog,token) => {
  let header=newToken(token) 
  const request = await axios.post(baseUrl, newBlog, header )
  return request
}

const editBlog = async(newBlog)=>{
  const request = await axios.put(`${baseUrl}/${newBlog.id}`, newBlog )
  return request
}

const deleteBlog = async (newBlog,token) => {
  let header=newToken(token) 
  const request = await axios.delete(`${baseUrl}/${newBlog.id}`, header )
  return request
}

export default { getAll, newBlog, editBlog, deleteBlog }