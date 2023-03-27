import { createNavAside, createPage } from './templateEngine.js'
import { getAllFiles, getNotes } from './notes.js'
import { mdPathtoHtml } from './mdConverter.js'
import cleanLink from './links.js'

const pages = {}

const title = 'note.js'

pages.frontpage = createPage(title, {
  type: 'frontpage',
  articlePath: './public/components/article/frontpageArticle.html'
})

pages.notes = createPage(title + ' | notes', {
  type: 'notes'
})

export const notes = () => {
  const navSideHtml = createNavAside(getAllFiles('./public/notes', 0))

  const allNotes = getNotes().map(note => {
    let url = note.path
      .replace('./public', '')
      .replace(/\d\d\./i, '') // removes -> 02.
    url = url.substring(0, url.lastIndexOf('.')) // removes .md
    url = cleanLink(url)

    const nameOfNote = note.name.substring(0, note.name.lastIndexOf('.'))
    const goToText = `${note.dirName} / ${nameOfNote}`

    const html = createPage(`${title} | ${note.name}`, {
      type: 'notes',
      articleContent: mdPathtoHtml(note.path),
      asideContent: navSideHtml,
      name: goToText

    })

    return {
      url,
      html
    }
  })

  // First notes page
  allNotes.push({
    url: '/notes',
    html: createPage(title + ' | notes', {
      type: 'notes',
      articleContentPath: './public/components/article/notes.html',
      asideContent: navSideHtml,
      name: 'Node.js documentation'
    })
  })

  return allNotes
}

export default pages
