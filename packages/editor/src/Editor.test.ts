import { render } from '@testing-library/svelte'
import { expect, it } from 'vitest'
import Editor from './Editor.svelte'
import '@testing-library/jest-dom'

it('should render editor with content', () => {
  const { container } = render(Editor, { id: 'text01', content: 'Hello, World!' })
  const textarea = container.querySelector('textarea')
  expect(textarea).toBeInTheDocument()
  expect(textarea?.value).toBe('Hello, World!')
})
