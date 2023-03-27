import fs from 'fs'
import path from 'path'

export const getAllFiles = (dirPath, level, dirName = 'notes') => {
  const files = []
  level++

  fs.readdirSync(dirPath).forEach(file => {
    const newPath = dirPath + '/' + file
    const metaInfo = fs.statSync(newPath)
    if (metaInfo.isDirectory()) {
      file = file.substring(file.indexOf('.') + 1, file.length)
      files.push(getAllFiles(newPath, level, file))
    } else {
      if (path.extname(newPath) === '.md') {
        files.push({
          dirName,
          depth: level,
          name: file,
          path: newPath
        })
      }
    }
  })
  // reverse makes folder go last instead of first
  return files
}

function readNestedNotes (nestedNotes) {
  const notes = []
  nestedNotes.forEach(item => {
    if (Array.isArray(item)) {
      notes.push(...readNestedNotes(item))
    } else {
      notes.push(item)
    }
  })

  return notes
}

export function getNotes () {
  const noteDirectory = getAllFiles('./public/notes', 0)
  return readNestedNotes(noteDirectory)
}
