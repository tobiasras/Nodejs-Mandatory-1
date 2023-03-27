import createFrontpage from './frontpages.js'
import { createNotePages } from './notePages.js'

const pages = {}

const title = 'Notes'

pages.frontpage = createFrontpage(title)

pages.notes = createNotePages(title)

export default pages
