import express from 'express'
import pages from './util/pages.js'
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(pages.frontpage)
})

app.get('/notes', (req, res) => {
  res.send(pages.admin)
})

app.listen(8080, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('server is running')
  }
})
