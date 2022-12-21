export type Story = {
  id: number;
  title: string;
  url: string;
  commenters: Commenter[];
}

export type Commenter = {
  name: string;
  totalComments: number;
}

export enum StoriesAction {
  ADDSTORY = 'ADDSTORY',
  ADDCOMMENTER = 'ADDCOMMENTER',
}

// An interface for our actions
export interface ReducerAction {
  type: StoriesAction.ADDSTORY;
  payload: Story;
}

export interface ReducerAction2 {
  type: StoriesAction.ADDCOMMENTER;
  payload: {
    storyId: number;
    comment: Commenter;
  };
}

export type Action = ReducerAction | ReducerAction2;