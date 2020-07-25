const heapSort = require('../src/util/heapify')

const data = require('../src/data/dummy-data')

console.log('here')
const dateStart = new Date()
heapSort(data)
const dateEnd = new Date()
console.log('here1')
console.log(typeof dateStart)
console.log(dateStart.getTime())
console.log(dateEnd.getTime())

