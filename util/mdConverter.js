import showdown from 'showdown'
import fs from 'fs'

const converter = new showdown.Converter({
  noHeaderId: true
})

export function mdPathtoHtml (path) {
  const note = fs.readFileSync(path).toString()
  return converter.makeHtml(note)
}
