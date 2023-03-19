import fs from 'fs'

const template = fs.readFileSync('./public/components/base/base.html').toString()
const header = fs.readFileSync('./public/components/header/header.html').toString()

function twoColumnMain (config) {
  const mainTemplate = fs.readFileSync('./public/components/main/twoColumn.html').toString()
  let article
  let aside

  if (config.articlePath) {
    article = fs.readFileSync('./public/components/article/article.html').toString()
  } else {
    article = config.article
  }

  if (config.asidePath) {
    aside = fs.readFileSync('./public/components/aside/aside.html').toString()
  } else {
    article = config.aside
  }

  const main = mainTemplate
    .replace('$ASIDE', aside)
    .replace('$ARTICLE', article)

  return main
}

function oneColumnMain (config) {
  const mainTemplate = fs.readFileSync('./public/components/main/oneColumn.html').toString()
  let article

  if (config.articlePath) {
    article = fs.readFileSync('./public/components/article/article.html').toString()
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

  const page = template
    .replace('$HEADER', header)
    .replace('$MAIN', main)
    .replace('$SCRIPTS', config.scripts || '')
    .replace('$TAB_TITLE', tabTitle)

  return page
}
