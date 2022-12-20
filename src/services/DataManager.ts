import { addItem } from "./BackgroundWorkerService"
import { resolveComments } from "./CommentService"
import { getItem } from "./ItemResolverService"
import { getTopStories } from "./StoriesService"

let addNewStory = (story: any) => {}
let addNewComment = (storyId: any, comment: any) => {}

export const registerAddNewStoryHandler = ( handler: (story: any) => void) => {
  addNewStory = handler;
}

export const registerAddNewCommentHandler = (handler: (storyId: any, comment: any) => void) => {
  addNewComment = handler;
}

export const init = async () => {
  const stories = await getTopStories()
  stories?.forEach(storyId =>  {
    const resolver = async () => {
      const item = await getItem(storyId as number)
      if(item) {
        const comments = item.kids;
        addNewStory({id: item.id, title: item.title, commenters: []})
        if(comments && Array.isArray(comments)){
          resolveComments(storyId, comments)
          .then(comments => {
            comments.forEach(comment => {
              addNewComment(storyId, comment)
            })
          })
        }
      }
    }
    addItem(resolver)
  })
}
