import { createPage } from './templateEngine.js'
import { html } from './notes.js'

const title = 'Nodejs notes'

const pages = {}

pages.frontpage = createPage(title, {
  type: 'frontpage',
  articlePath: './public/components/article/article.html'
})

pages.notes = createPage(title + ' | notes', {
  type: 'notes'
})

pages.admin = createPage(title + ' | notes', {
  type: 'notes',
  articleContent: html,
  asideContent: '<h1>Hello</h1>'

})

export default pages
