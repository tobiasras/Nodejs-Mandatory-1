import { getAllFiles, getNotes } from '../MarkdownConverter/ReadNotes.js'
import cleanLink from '../util/links.js'
import { createPage } from '../TemplateEngine/CreatePage.js'
import { createNoteAside } from '../TemplateEngine/notes/noteAside.js'
import createNoteMain from '../TemplateEngine/notes/NoteMain.js'
import { getNoteHtml } from '../MarkdownConverter/mdConverter.js'
import fs from 'fs'
import createNoteArticle from '../TemplateEngine/notes/noteArticle.js'

export const createNotePages = (title) => {
  const aside = createNoteAside(getAllFiles('./public/notes', 0))

  const allNotes = getNotes().map(note => {
    let url = note.path
      .replace('./public', '')
      .replace(/\d\d\./i, '') // removes -> 02. from path
    url = url.substring(0, url.lastIndexOf('.')) // removes .md
    url = cleanLink(url)

    const nameOfNote = note.name.substring(0, note.name.lastIndexOf('.'))

    // const goToText = `${note.dirName} / ${nameOfNote}`
    const noteHTML = getNoteHtml(note.path)

    const main = createNoteMain(aside, noteHTML, nameOfNote)
    const html = createPage(`${title} | ${note.name}`, main)

    return {
      url,
      html
    }
  })

  allNotes.push(createRootNotePage(title, aside, '/notes'))
  return allNotes
  // Intro Note Page
}

function createRootNotePage (title, aside, url) {
  // CREATES THE FIRST NOTE PAGE
  // TODO CREATE CONTENT TABLE FOR ALL NOTES ON THIS PAGE
  const content = fs.readFileSync('./public/html/pages/notes/article/content/noteIntro.html').toString()
  const article = fs.readFileSync('./public/html/pages/notes/article/noteArticleTemplate.html').toString()
    .replace('$CONTENT', content)

  let main = fs.readFileSync('./public/html/pages/notes/main/noteMainTemplate.html').toString()
  main = main
    .replace('$ASIDE', aside)
    .replace('$ARTICLE', article)

  return {
    url,
    html: createPage(title, main)
  }
}
