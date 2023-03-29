``` javascript
import express from 'express'  
const app = express()  
  
app.use(express.static('public'))  
app.use(express.urlencoded({ extended: true }))  

...

app.listen(8080, (error) => {  
  if (error) {  
    console.log(error)  
  } else {  
    console.log('__ server is running __')  
  }})
```