<p>
    <a href="https://www.npmjs.com/package/graphql-simple-request"><img src="https://img.shields.io/npm/v/graphql-simple-request.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/graphql-simple-request"><img src="https://img.shields.io/npm/dt/graphql-simple-request.svg?maxAge=3600" alt="NPM downloads" /></a>
</p>


# GRAPHQL SIMPLE REQUEST

> A package made to make graphql requests simple

This package is as simple as it's name is saying! You only need 4 variables to make it work

The only thing you need to do is import this package into your application

## NodeJS
```js
const gsr = require('graphql-simple-request')
```

## Babel
```js
import gsr from 'graphql-simple-request'
```

Now you only need to invoke this function passing 2 arguments
- URL
- GraphqlQuery (As string)
- (OPTIONAL!) Variables (As json)
- (OPTIONAL!) headers (As json)

```js
const url = 'localhost:3000/graphql';
const query = `
  query($id: Int) {
    getPerson(id: $id) {
      person {
        id
        name
      }
    }
  }
`;
const variables = {
  id: 10
};
const response = await gsr(url, query, variables)
```

This package will return the response object back to you, so you'll be able to get additional information, like headers, status code, config, etc...

# Why I made this package?
Because graphql clients are too hard to use. I've found some clients easy to use (like simple-graphql-client), but this package only gives me back the response data, so I was unnable to get aditional information from the request.

# Upgrades on this package?
I'll try to improve this package once in a while, but pull requests are always welcome (and please, open issues with your problems/feedbacks)
