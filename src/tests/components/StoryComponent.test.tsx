import React from 'react';
import {StoryComponent} from "../../components/StoryComponent"
import { render, screen } from '@testing-library/react';

test('renders story component', () => {
  const story = {
    id: 1,
    title: 'Top Story Title',
    url: '#',
    commenters: []
  }
  render(<StoryComponent story={story} index={1} />);
  const element = screen.getByText(/Top Story Title/);
  expect(element).toBeInTheDocument();

  const commentSection = screen.getByText(/No Comments/i);
  expect(commentSection).toBeInTheDocument();
});