import express from 'express'
import pages from './src/Pages/pages.js'
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(pages.frontpage)
})

pages.notes.forEach(note => {
  console.log(note.url)
  app.get(note.url, (req, res) => {
    res.send(note.html)
  })
})

app.listen(8080, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('__ server is running __')
  }
})
