import { CommentList } from "./CommentList"
import BrowseIcon from "../assets/browse.svg";
import { Story } from "../types";

export const StoryComponent = ({story, index}: {story: Story, index: number}) => {
  return <>
    <div className="story">
      <div className="story-index">{index}</div>
      <div>
        <header className="flex">
          <h3>{story.title} </h3>
          <a href={story.url} target="_blank" rel="noreferrer" >
            <img src={BrowseIcon} alt="open link" />
          </a>
        </header>
        <CommentList key={story.id} comments={story.commenters} />
      </div>
    </div>
  </>
}