import {startWorkers, addItem, getItem, stopWorker} from "../../services/BackgroundWorkerService"

describe("Background worker service test suite", () => {
  it('should add a job to the queue for processing', () => {
    const item = jest.fn()
    addItem(item)
    const _item = getItem()
    expect(item === _item).toBe(true)
  })

  it('should not process jobs if start workers is not called', () => {
    //
  })
})