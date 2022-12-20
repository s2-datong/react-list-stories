export const getTopStories = async () => {
  try{
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const result = await response.json() as any[]
    return result;
  }
  catch(e) {
    console.log(e)
  }
}