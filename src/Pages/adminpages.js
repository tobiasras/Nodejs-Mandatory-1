import fs from 'fs'
import { createPage } from '../TemplateEngine/CreatePage.js'

export function createAdminLogin (title) {
  const main = fs.readFileSync('./public/html/pages/admin/loginMain.html').toString()
  return createPage(`${title} | login`, main)
}

export function createAdminPage (title) {
  const article = fs.readFileSync('./public/html/pages/admin/adminMain.html').toString()
  const main = fs.readFileSync('./public/html/pages/standard/main/standardMainTemplate.html').toString()
    .replace('$ARTICLE', article)

  return createPage(`${title} | admin`, main)
}
