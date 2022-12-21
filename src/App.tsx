import React from 'react';
import "./App.css"
import { StoryList } from './components/StoryList';
import { StoriesProvider } from './context/StoriesProvider';

function App() {
  return (
    <div className="App">
      <StoriesProvider>
        <StoryList />
      </StoriesProvider>
    </div>
  );
}

export default App;
