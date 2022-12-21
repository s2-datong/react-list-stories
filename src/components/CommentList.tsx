import { Commenter } from "../types"

export const CommentList = ({comments}: {comments: Commenter[]}) => {
  return <div className="comment-list">
    {
      comments.length === 0 ? 
      <div className="no-comments">
       No comments
      </div> 
      : 
      comments.map(comment => <div key={comment.name} className="comment">
          <p>Name: {comment.name}</p>
          <span>Total Comments: {comment.totalComments}</span>
        </div>
      )
    }
  </div>
}