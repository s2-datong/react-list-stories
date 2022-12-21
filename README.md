# Fetch Stories Project

This is a simple React project that fetches HackerNews top 30 stories and renders them.

There is a significant amount of background data fetching required due to the the structure of the API

## Architecture

![Project Architecture](src/assets/architecture.png?raw=true "Project Architecture")

The image above shows the high level project architecture. Main components are highlighted below.

### Overview
Project is about efficiently fetching large amounts of data in the background, procesing and then rendering this data.

### Components/Services

- Data Manager: The Data Manager encapsulates 3 other services. It is responsible for orchestrating the fetching of data in a way that does not degrade the performance of the app. The Data manager comprises of:
    - Background worker service: This service manages a task queue and a number of worker instances responsible for running the jobs added to the queue
    - Data Cache: Responsible for caching data based on the data id so that we don't make API calls twice to resolve an id
    - Item Resolver Service: The resolver contains the actual logic responsible for fetching and returning stories either from the cache or by making an api call
- React State: State is managed via a reducer. Two dispatch methods are exported from this module. One to add Stories and the other to add comments to the stories.
- Context API: The Context API is where it all comes together. The StoriesProvider brings together the DataManager and the React state and links it all together while exposing just the list of stories to it's children. The Provider represents the public API as it's encapsulates all the other work that's going on in the background