# Node

Node is a server envoirment that enables javscript code to be run outside of a browser. it is often used to create backend webservices like REST api's and server side rendered webapps. 

To run a file with node.js  you can use the following command:

```
npm .\nameOfJsFile.js  
```

## Package.json

The package.json contains 3 types of information
1. Meta data
2. Dependecies
3. Build scripts 

### Metadata
These information is reqierd to run an application, but contains important information about the authuer, license and version of the software. 

### Script
You can create scripts that can build the project. in this project i have 2 scripts. 

**Runnig a script**
```
npm run scriptname
```

#### Start: 

 i created this scritp so i only had to run to run the script isntead of typing nodemon "nodemon ./app.js". i dont have to type run beaucse start is defined in note as a 'lifecycle script'
```
npm start
```

#### Tailwind:

i use the styling framework called talwind. This framework checks my html classes for tailwind.css classes, and then builds a stylesheet only ussing the classes i chose to use. there for i need to compile tailwind when making changes in the html stylling classes. the script builds the css and then 'watches html' for changes.

``` json
{  
  "name": "nodejs-mandatory-1",  
  "version": "0.0.1",  
  "description": "Create a website that contains documentation for what you have learned so far.",  
  "type": "module",  
  "main": "app.js",  
  "scripts": {  
    "start": "nodemon ./app.js",  
    "test": "echo \"Error: no test specified\" && exit 1",  
    "tailwind": "npx tailwindcss -i ./input.css -o ./public/styling/main.css --watch\n"  
  },  
  "dependencies": {  
    "express": "^4.18.2",  
    "lang-detector": "^1.0.6",  
    "prismjs": "1.28.0",  
    "showdown": "^2.1.0"  
  },  
  "repository": {  
    "type": "git",  
    "url": "git+https://github.com/tobiasras/Nodejs-Mandatory-1.git"  
  },  
  "author": "Tobiasras",  
  "license": "MIT",  
  "bugs": {  
    "url": "https://github.com/tobiasras/Nodejs-Mandatory-1/issues"  
  },  
  "homepage": "https://github.com/tobiasras/Nodejs-Mandatory-1#readme",  
  "devDependencies": {  
    "eslint": "^8.36.0",  
    "eslint-config-semistandard": "^17.0.0",  
    "eslint-config-standard": "^17.0.0",  
    "eslint-plugin-import": "^2.27.5",  
    "eslint-plugin-n": "^15.6.1",  
    "eslint-plugin-promise": "^6.1.1",  
    "tailwindcss": "^3.2.7"  
  }  
}
```

