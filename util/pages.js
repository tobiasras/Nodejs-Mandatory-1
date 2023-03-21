import { createNavAside, createPage } from './templateEngine.js'
import { getAllFiles, getNotes } from './notes.js'
import { mdPathtoHtml } from './mdConverter.js'
import cleanLink from './links.js'

const pages = {}

const title = 'note.js'

pages.frontpage = createPage(title, {
  type: 'frontpage',
  articlePath: './public/components/article/article.html'
})

pages.notes = createPage(title + ' | notes', {
  type: 'notes'
})

export const notes = () => {
  const navSideHtml = createNavAside(getAllFiles('./public/notes', 0))

  const allnotes = getNotes().map(note => {
    let url = note.path.replace('./public', '')
    url = url.substring(0, url.lastIndexOf('.'))
    url = cleanLink(url)

    const html = createPage(`${title} | ${note.name}`, {
      type: 'notes',
      articleContent: mdPathtoHtml(note.path),
      asideContent: navSideHtml
    })

    return {
      url,
      html
    }
  })

  // First notes page
  allnotes.push({
    url: '/notes',
    html: createPage(title + ' | notes', {
      type: 'notes',
      articleContentPath: './public/components/article/notes.html',
      asideContent: navSideHtml
    })
  })

  return allnotes
}

export default pages
