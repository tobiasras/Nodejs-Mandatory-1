# Import vs require

Import and require are used to import modules into javascript. The diffrence between import and require is that require can pnly be used to import modules, while import can be used to import both modules and individual exports.

## Import
import was introduced in ecmascript 6 ( 2015 ) and is used to import specific functions, objects, or values from an external module.

in node.js, It is important that in the package.json there is added "type="module"

``` json
{  
  "name": "import vs require",  
  "version": "1.0.0",  
  "description": "What is import?.",  
  "type": "module"
}
```

In this example i collect all the pages into object and use the export default keyword so i can use the pages in the app.js files.

``` javascript
const title = 'Notes'    
const pages = {}  
pages.frontpage = createFrontpage(title)  
pages.notes = createNotePages(title)  
pages.loginAdmin = createAdminLogin(title)  
pages.adminPage = createAdminPage(title)  
export default pages
```

To use the pages you use the import keyword and specify the path to the file

``` javascript
import pages from './src/Pages/pages.js'   

app.get('/', (req, res) => {  
  res.send(pages.frontpage)  
})

```

## Require
Require is a build in function in node.js. the purporse of the require is to load modules require can be used like this:

``` javascript
const title = 'Notes'    
const pages = {}  
pages.frontpage = createFrontpage(title)  
pages.notes = createNotePages(title)  
pages.loginAdmin = createAdminLogin(title)  
pages.adminPage = createAdminPage(title)  
export default pages
```

```javascript
const pages = require('./src/Pages/pages.js')
```

One of the diffrences with import and require is that import is used on top of the file while require can be use in the code. 

```javascript
app.get('/', (req, res) => {  
  pages = require('./src/Pages/pages.js')
  res.send(pages.frontpage)  
})
```



