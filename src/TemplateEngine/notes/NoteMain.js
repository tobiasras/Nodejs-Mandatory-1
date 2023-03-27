import fs from 'fs'
import createNoteArticle from './noteArticle.js'

export default function createNoteMain (aside, noteHTML, noteTitle) {
  const mainTemplate = fs.readFileSync('./public/html/pages/notes/main/noteMainTemplate.html').toString()

  const article = createNoteArticle(noteHTML, noteTitle)

  const main = mainTemplate
    .replace('$ASIDE', aside)
    .replace('$ARTICLE', article)

  return main
}
