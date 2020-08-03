import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import CreateBlog from './CreateBlog'

const expectedBehaviour = 'the form calls the event handler it received as props when a new blog is created'
test(expectedBehaviour, () => {
  const blog = {
    title: '',
    author: '',
    likes: 0,
    url: ''
  }

  const handleBlogChange = (event) => {
    const key = event.target.getAttribute('data-key')
    blog[key] = event.target.value
  }

  const mockHandler = jest.fn()

  const component = render(
    <CreateBlog blog={blog} onChange={handleBlogChange} onSubmit={mockHandler} />
  )

  const form = component.container.querySelector('form')
  const titleInput = component.container.querySelector('input[data-key="title"]')
  fireEvent.change(titleInput, {
    target: { value: 'this is the new title' }
  })
  fireEvent.submit(form)

  expect(mockHandler.mock.calls).toHaveLength(1)
})