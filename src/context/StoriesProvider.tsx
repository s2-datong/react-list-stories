import { useStories } from "../hooks/useStories"
import { Provider } from "./StoriesContext"
import { init, registerAddNewCommentHandler, registerAddNewStoryHandler } from "../services/DataManager"

interface ProviderProps {
  children: JSX.Element
}

export const StoriesProvider = ({children}: ProviderProps) => {
  const [stories, addStories, addComment] = useStories()
  registerAddNewCommentHandler(addComment)
  registerAddNewStoryHandler(addStories)
  init()

  console.log(stories)
  
  return <Provider value={stories}>
    {children}
  </Provider>
}