import { createPage } from './templateEngine.js'

const title = 'Nodejs notes'

const pages = {}

pages.frontpage = createPage(title, {
  type: 'frontpage',
  articlePath: './public/components/article/article.html'
})

pages.notes = createPage(title + ' | notes', {
  type: 'notes',
  articlePath: './public/components/article/article.html',
  asidePath: './public/components/aside/aside.html'
})

export default pages
