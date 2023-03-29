import showdown from 'showdown'
import fs from 'fs'
import xss from 'xss'
import { syntaxHighlighting } from './syntaxHighlighting.js'

const converter = new showdown.Converter({
  noHeaderId: true
})

export function getNoteHtml (path) {
  const note = fs.readFileSync(path).toString()
  let html = converter.makeHtml(note)

  html = syntaxHighlighting(xss(html))

  return html
}
