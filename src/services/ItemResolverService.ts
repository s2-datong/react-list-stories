const itemsCache = new Map<number, any>();
const invalidIds = new Set();

export const getItem = async (id: number) => {
  return await getResolveItem(id)();
}

export const getResolveItem = (id: number) => async () => {
  if(invalidIds.has(id)) return;
  if(itemsCache.has(id)) return itemsCache.get(id);

  // resolve item
  try{
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    const result = await response.json()
    // if not story or comment add to invalidIds
    if(result.dead === true || result.deleted === true) return;
    if(result.type === 'story' || result.type === 'comment') {
      itemsCache.set(id, result);
      return result;
    }else {
      invalidIds.add(id);
    }
  }
  catch(e) {
    // do nothing
    return;
  }
}