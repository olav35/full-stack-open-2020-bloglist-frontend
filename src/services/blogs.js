import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newBlog, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}`}
  }
  const response = await axios.post('/api/blogs', newBlog, config)
  return response.data
}

const update = async (updatedBlog, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}`}
  }
  const response = await axios.post('/api/blogs',updatedBlog, config)
  return response.data
}

export default { getAll, create, update }