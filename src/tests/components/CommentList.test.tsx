import React from 'react';
import {CommentList} from "../../components/CommentList"
import { render, screen } from '@testing-library/react';

test('renders comment list', () => {
  const comments = [
    {name: 'username', totalComments: 10}
  ]
  render(<CommentList comments={comments} />);
  const element = screen.getByText(/username/i);
  expect(element).toBeInTheDocument();
});