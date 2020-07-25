import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders the blog\'s title and author', () => {
  const blog = {
    title: 'Blog Title',
    author: 'Blog Author',
    likes: 100,
    url: 'https://sickurl.com'
  }

  const component = render(
    <Blog blog={blog} user={{}} onClickLike={() => undefined} onClickRemoveBlog={() => undefined}s/>
  )

  expect(component.container).toHaveTextContent(blog.title)
  expect(component.container).toHaveTextContent(blog.author)
  expect(component.container).not.toHaveTextContent(blog.likes)
  expect(component.container).not.toHaveTextContent(blog.url)
})