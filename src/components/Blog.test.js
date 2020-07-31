import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
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

test('renders the url and likes when view is clicked', () => {
  const user = {
    name: 'Olav',
    username: 'olavfosse'
  }
  const blog = {
    title: 'Blog Title',
    author: 'Blog Author',
    likes: 100,
    url: 'https://sickurl.com',
    user
  }

  const component = render(
    <Blog blog={blog} user={user} onClickLike={() => undefined} onClickRemoveBlog={() => undefined}s/>
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  expect(component.container).toHaveTextContent(blog.likes)
  expect(component.container).toHaveTextContent(blog.url)
})

test('calls the designated event handler two times if the like button is clicked', () => {
  const user = {
    name: 'Olav',
    username: 'olavfosse'
  }

  const blog = {
    title: 'Blog Title',
    author: 'Blog Author',
    likes: 100,
    url: 'https://sickurl.com',
    user
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} user={user} onClickLike={mockHandler} onClickRemoveBlog={() => undefined}s/>
  )
  fireEvent.click(component.getByText('view'))

  const button = component.getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(2)
})