import React from 'react';
import {StoryList} from "../../components/StoryList"
import { render, screen } from '@testing-library/react';

test('renders empty story list outside provider', () => {

  const {container} = render(<StoryList />);
  const element = container.querySelector('.story')
  expect(element).not.toBeInTheDocument();
});