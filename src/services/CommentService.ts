import { getItem } from "./ItemResolverService";

export const resolveComments = async (storyId: number, commentIds: number[]) => {
  const results: any[] = [];

  const resolveComment = async (iterator: IterableIterator<[number, number]>) => {
    for (const [index, commentId] of iterator) {
      const comment = await getItem(commentId);
      if(comment) results[index] = comment;
    }
  }

  const iterator = commentIds.entries()
  const workers = new Array(2).fill(iterator).map(resolveComment);
  await Promise.allSettled(workers);

  const comments = results.reduce((prev: any, current: any, index: number) => {
    if(!prev[current.by]) prev[current.by] = []
    prev[current.by].push(current)
    return prev;
  }, {})

  const keys = Object.keys(comments);
  return keys.map(key => ({
    name: key,
    totalComments: comments[key]?.length
  }))
}