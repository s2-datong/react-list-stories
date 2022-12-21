type AsyncFunc = () => Promise<void>
const itemsCache: AsyncFunc[] = [];
let stopBackgroundWork = false;

export const addItem = (item: AsyncFunc) => itemsCache.push(item)
export const getItem = (): AsyncFunc | undefined => itemsCache.shift()
export const stopWorker = () => {
  itemsCache.length = 0;
  stopBackgroundWork = true;
}

async function worker() {
  const inlineWorker = async () => {
    if(itemsCache.length > 0 && stopBackgroundWork === false) {
      const job = getItem()
      if(job) {
        await job()
      }
    }
    if(stopBackgroundWork === false){
      setTimeout(inlineWorker);
    }
  }
  setTimeout(inlineWorker);
}

export const startWorkers = () => {
  worker();
  worker();
  worker();
}