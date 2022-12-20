const userCache = new Map<string, any>();

export const getUser = async (username: string) => {
  return await getResolveUser(username)();
}

export const getResolveUser = (username: string) => async () => {
  if(userCache.has(username)) return userCache.get(username)
  try{
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${username}.json`)
    const result = await response.json()
    userCache.set(username, result)
    return result;
  }
  catch(e){
    return;
  }
}