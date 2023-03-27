import fs from 'fs'
import cleanLink from './links.js'

const template = fs.readFileSync('./public/components/base/base.html').toString()
const header = fs.readFileSync('./public/components/header/header.html').toString()

function twoColumnMain (config) {
  const mainTemplate = fs.readFileSync('./public/components/main/twoColumn.html').toString()
  let article = fs.readFileSync('./public/components/article/articleTwoColumn.html').toString()
  let aside = fs.readFileSync('./public/components/aside/aside.html').toString()

  let articleContent
  if (config.articleContentPath) {
    articleContent = fs.readFileSync(config.articleContentPath).toString()
  } else {
    const wrapper = fs.readFileSync('./public/components/wrapper/noteWrapper.html').toString()
    articleContent = wrapper.replace('$CONTENT', config.articleContent)
  }
  article = article
    .replace('$CONTENT', articleContent)
    .replace('$TITLE', config.name)

  let asideContent
  if (config.asideContentPath) {
    asideContent = fs.readFileSync(config.asideContentPath).toString()
  } else {
    asideContent = config.asideContent
  }
  aside = aside.replace('$CONTENT', asideContent)

  const main = mainTemplate
    .replace('$ASIDE', aside)
    .replace('$ARTICLE', article)

  return main
}

function oneColumnMain (config) {
  const mainTemplate = fs.readFileSync('./public/components/main/oneColumn.html').toString()
  let article

  if (config.articlePath) {
    article = fs.readFileSync(config.articlePath).toString()
  } else {
    article = config.article
  }

  const main = mainTemplate
    .replace('$ARTICLE', article)

  return main
}

export function createPage (tabTitle, config = {}) {
  let main

  switch (config.type) {
    case 'notes':
      main = twoColumnMain(config)
      break

    case 'frontpage':
      main = oneColumnMain(config)
      break
  }

  return template
    .replace('$HEADER', header)
    .replace('$MAIN', main)
    .replace('$SCRIPTS', config.scripts || '')
    .replace('$TAB_TITLE', tabTitle)
}

export function createNavAside (notes) {
  const noteLink = fs.readFileSync('./public/components/aside/link/link.html').toString()
  const folder = fs.readFileSync('./public/components/aside/link/folder.html').toString()

  let html = ''
  const linkTree = (notes) => {
    notes.forEach((note, index) => {
      if (Array.isArray(note)) {
        linkTree(note)
      } else {
        if (index === 0) {
          const folderHtml = folder
            .replace('$TEXT', note.dirName)
            .replace('$PADDING', 'pl-1')// `pl-${1 + 2 * note.depth}`

          html += folderHtml
        }

        const name = note.name.substring(0, note.name.lastIndexOf('.'))

        const notePath = note.path
          .substring(0, note.path.lastIndexOf('.'))
          .replace('./public', '')

        const linkHtml = noteLink
          .replace('$TEXT', name)
          .replace('$HREF', cleanLink(notePath).replace(/\d\d\./i, ''))
          .replace('$PADDING', 'pl-3') // `pl-${1 + 4 * note.depth}`

        html += linkHtml
      }
    })
  }
  linkTree(notes)

  return html
}
