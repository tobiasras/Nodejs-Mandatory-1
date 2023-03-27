import { createPage } from '../TemplateEngine/CreatePage.js'
import fs from 'fs'

export default function createFrontpage (tabTitle) {
  const article = fs.readFileSync('./public/html/pages/standard/articles/content/frontpageArticle.html').toString()
  let main = fs.readFileSync('./public/html/pages/standard/main/standardMainTemplate.html').toString()
  main = main.replace('$ARTICLE', article)
  return createPage(tabTitle, main)
}
