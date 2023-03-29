# Javascripts 5 primatives & Type Coercion


## Javascripts 5 Primatives
1.  Number
2.  String
3.  Boolean
4.  Undefined
5.  Null

## Type coercion
Coercion = to force people to do something

Type coercion = conversion of values from one data type to another

when using the == operator, javascript uses type coercion on the values to check if they are the same. this means: 

``` javascript
2 == "2" // true
```

Using the == is slow beacause javascript checks what the values can be compared to and if the 2 values are the same. therefor it is very rare that you should be using the == operator.

In most cases the === operator is the best equality operator to use.
the strict equalltiy operator ( === ) only checks if the values are the same in the same example 

``` javascript
2 === "2" // false
```