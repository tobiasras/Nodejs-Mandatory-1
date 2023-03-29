## Anatomy of a HTTP request





## 2 ways of sending information with a get request
the 2 ways of sending a http request

```
localhost:8080/api/domain/pathvariable/?stringQuery=datais
```

### Pathvariable
```
app.get("/birds/:id", (req, res) => {  
    const foundBird = birds.find(bird => bird.id === Number(req.params.id));  
    res.send({ data: foundBird });  
});
```

### Query strings
``` javascript
app.get('/', (req, res) {   
  const page = req.query.stringQuery // = datais
})
```