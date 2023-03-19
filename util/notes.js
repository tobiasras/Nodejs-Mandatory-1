import showdown from 'showdown'
import fs from 'fs'

const converter = new showdown.Converter({
  noHeaderId: true
})

const note = fs.readFileSync('./notes/FirstNote.md').toString()

export const html = converter.makeHtml(note)
