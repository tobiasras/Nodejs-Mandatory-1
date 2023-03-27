import fs from 'fs'

export function createPage (tabTitle, main, scripts) {
  const template = fs.readFileSync('./public/html/base/base.html').toString()
  const header = fs.readFileSync('./public/html/header/header.html').toString()

  return template
    .replace('$HEADER', header)
    .replace('$MAIN', main)
    .replace('$SCRIPTS', scripts || '')
    .replace('$TAB_TITLE', tabTitle)
}
