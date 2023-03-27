
Running a file with: 
```
npm .\nameOfJsFile.js  
```

Can be be very tedius if you're making fast changes or debugging. instead of running the command over and over you can get a node package that listents to file changes and reloads the application: 

## Nodemon.js
To install:
```
npm install -g nodemon
```

To run js files.
```
nodemon .\nameOfJsFile.js
```

As a default nodemon will only listen to .js files. if you wanna listens to other files than .js, you can create a json file in the root of the project files.

the file takes a key called ext. and the file extenstions to be listent to.

``` json
{  
  "ext": "js,json,html,md,css"  
}
```
