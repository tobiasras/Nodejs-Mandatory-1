import express from 'express'
import pages, { notes } from './util/pages.js'
import cleanLink from './util/links.js'

const app = express()

app.use(express.static('public'))

console.log()
console.log(123)
console.log('__________________NEW PROCESS____________________')

console.log(cleanLink('æøåaædasd æåøæååæ adåæasdpæ adsål aåædaåsdpl'))

app.get('/', (req, res) => {
  res.send(pages.frontpage)
})

notes().forEach(note => {
  console.log(note.url)
  app.get(note.url, (req, res) => {
    res.send(note.html)
  })
})

app.listen(8080, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('server is running')
  }
})
