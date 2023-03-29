# Creating a endpoint

``` javascript
app.get('/admin', (req, res) => {  
  res.send(pages.adminPage)  
})
```

**To send a html page:**

res.send(<'h1>This is html</h1'>)

**To send json**:

res.send({
	"jsondata": "data" 
})





## Http methods
in express there are a standard for ordering the http methods:

it follows:
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE