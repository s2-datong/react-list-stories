import { useStoriesContext } from "../context/StoriesContext";
import { StoryComponent } from "./StoryComponent";

export const StoryList = () => {
  const stories = useStoriesContext()

  return <>
    {stories.map((story, index) => <StoryComponent key={story.id} story={story} index={index + 1}/> )}
  </>
}