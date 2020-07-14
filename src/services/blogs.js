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
  const remoteLikedBlog = {
    user: updatedBlog.user.id,
    likes: updatedBlog.likes + 1,
    author: updatedBlog.author,
    title: updatedBlog.title,
    url: updatedBlog.url
  }

  const config = {
    headers: { Authorization: `bearer ${token}`}
  }
  const response = await axios.put(`/api/blogs/${updatedBlog.id}`, remoteLikedBlog, config)
  return response.data
}

export default { getAll, create, update }