import fs from 'fs'
import cleanLink from '../../util/links.js'

export function createNoteAside (notes) {
  const noteLink = fs.readFileSync('./public/html/pages/notes/aside/folderTree/link.html').toString()
  const folder = fs.readFileSync('./public/html/pages/notes/aside/folderTree/folder.html').toString()
  let asideContent = ''
  const linkTree = (notes) => {
    notes.forEach((note, index) => {
      if (Array.isArray(note)) {
        linkTree(note)
      } else {
        if (index === 0) {
          const folderHtml = folder
            .replace('$TEXT', note.dirName)
            .replace('$PADDING', 'pl-1')// `pl-${1 + 2 * note.depth}`

          asideContent += folderHtml
        }

        const name = note.name.substring(0, note.name.lastIndexOf('.'))

        const notePath = note.path
          .substring(0, note.path.lastIndexOf('.'))
          .replace('./public', '')

        const linkHtml = noteLink
          .replace('$TEXT', name)
          .replace('$HREF', cleanLink(notePath).replace(/\d\d\./i, ''))
          .replace('$PADDING', 'pl-3') // `pl-${1 + 4 * note.depth}`

        asideContent += linkHtml
      }
    })
  }

  linkTree(notes)

  const asideTemplate = fs.readFileSync('./public/html/pages/notes/aside/asideTemplate.html').toString()
  return asideTemplate.replace('$CONTENT', asideContent)
}
