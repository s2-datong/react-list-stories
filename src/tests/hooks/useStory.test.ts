import { act, renderHook } from '@testing-library/react'
import { useStories } from "../../hooks/useStories"

test('should increment counter', () => {
  const { result } = renderHook(() => useStories())
  const [stories, addStory, addComment] = result.current;
  expect(stories.length).toBe(0)

  act(() => {
    addStory({
      id: 1,
      title: 'Hello',
      commenters: [],
      url: ''
    })
  })

  const [_story] = result.current;
  expect(_story.length).toBe(1);
  expect(_story[0]?.commenters?.length).toBe(0)

  act(() => {
    addComment(1, {
      name: 'username',
      totalComments: 10
    })
  })


  const [__story] = result.current;
  expect(__story.length).toBe(1);
  expect(__story[0]?.commenters?.length).toBe(1)

})