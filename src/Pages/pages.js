import createFrontpage from './frontpages.js'
import { createNotePages } from './notePages.js'
import { createAdminLogin, createAdminPage } from './adminpages.js'

const title = 'Notes'

const pages = {}
pages.frontpage = createFrontpage(title)
pages.notes = createNotePages(title)
pages.loginAdmin = createAdminLogin(title)
pages.adminPage = createAdminPage(title)
export default pages
