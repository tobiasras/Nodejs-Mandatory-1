import detectLang from 'lang-detector'
import Prism from 'prismjs'
import 'prismjs/components/prism-java.js'

export function syntaxHighlighting (htmlDocument) {
  const regex = /<pre><code.*?>([\s\S]*?)<\/code><\/pre>/g

  const codeEx = htmlDocument.match(regex)

  if (codeEx) {
    codeEx.forEach(code => {
      const insideTags = code.replace(/<\/?pre>|<\/?code.*?>/g, '')
      const language = detectLang(insideTags).toLowerCase()

      if (language !== 'unknown') {
        try {
          const highlightCode = Prism.highlight(insideTags, Prism.languages[language], language)
          htmlDocument = htmlDocument.replace(insideTags, highlightCode)
        } catch (Error) {
          console.log(language + ': is not supported for this application \n' + 'code: ' + insideTags)
        }
      }
    })
  }

  return htmlDocument
}
