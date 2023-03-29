import express from 'express'
import pages from './src/Pages/pages.js'
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send(pages.frontpage)
})

app.get('/login', (req, res) => {
  res.send(pages.loginAdmin)
})

pages.notes.forEach(note => {
  app.get(note.url, (req, res) => {
    res.send(note.html)
  })
})

app.get('/admin', (req, res) => {
  res.send(pages.adminPage)
})

// API
app.post('/api/login', (req, res) => {
  if (req.body.password !== '1234') {
    res.redirect('/login')
  } else {
    res.redirect('/admin')
  }
})

app.listen(8080, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('__ server is running __')
  }
})
