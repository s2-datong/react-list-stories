import {useReducer} from "react";
import { stopWorker } from "../services/BackgroundWorkerService";
import { Action, Commenter, StoriesAction, Story } from "../types";

const reducer = (state: Story[], action: Action) => {
  switch(action.type) {
    case StoriesAction.ADDSTORY: {
      if(state.length >= 30) {
        stopWorker()
        return state;
      }
      return [...state, action.payload]
    }
    case StoriesAction.ADDCOMMENTER: {
      const {storyId, comment} = action.payload
      return [
        ...state.filter(story => story.id !== storyId),
        ...(state.filter(story => story.id === storyId).map(story => ({
          ...story,
          commenters: [...story.commenters, comment]
        })))
      ]
    }
  }
}

export const useStories = (): [Story[], (story: Story) => void, (storyId: number, comment: Commenter) => void] => {
  const [stories, dispatch] = useReducer(reducer, [])

  const addStory = (story: Story) => dispatch({type: StoriesAction.ADDSTORY, payload: story})
  const addComment = (storyId: number, comment: Commenter) => dispatch({type: StoriesAction.ADDCOMMENTER, payload: {storyId, comment}})

  return [stories, addStory, addComment];
}