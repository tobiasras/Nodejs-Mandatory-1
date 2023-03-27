import fs from 'fs'

export default function createNoteArticle (content, title) {
  const article = fs.readFileSync('./public/html/pages/notes/article/noteArticleTemplate.html').toString()

  return article
    .replace('$CONTENT', content)
    .replace('$TITLE', title)
}
