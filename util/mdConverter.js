import showdown from 'showdown'
import fs from 'fs'
import detectLang from 'lang-detector'
import Prism from 'prismjs'

import 'prismjs/components/prism-java.js'

const converter = new showdown.Converter({
  noHeaderId: true
})

export function mdPathtoHtml (path) {
  const note = fs.readFileSync(path).toString()
  let html = converter.makeHtml(note)

  html = syntaxHighlighting(html)

  return html
}

function syntaxHighlighting (htmlDocument) {
  const regex = /<pre><code.*?>([\s\S]*?)<\/code><\/pre>/g

  const codeEx = htmlDocument.match(regex)

  if (codeEx) {
    codeEx.forEach(code => {
      const insideTags = code.replace(/<\/?pre>|<\/?code.*?>/g, '')
      const language = detectLang(insideTags).toLowerCase()

      if (language !== 'unknown') {
        const highlightCode = Prism.highlight(insideTags, Prism.languages[language], language)

        try {
          htmlDocument = htmlDocument.replace(insideTags, highlightCode)
        } catch (e) {
          console.log(language + ': is not supported for this application')
          console.log(e)
        }
      }
    })
  }

  return htmlDocument
}
