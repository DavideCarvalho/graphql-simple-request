# SIMPLE GRAPHQL REQUEST

> A package made to make graphql requests simple

This package is as simple as it's name is saying! You only need 4 variables to make it work

The only thing you need to do is import this package into your application

## NodeJS
```const sgq = require('simple-graphql-client')```

## Babel
```import sgq from 'simple-graphql-client'```

Now you only need to invoke this function passing 2 arguments
- URL
- GraphqlQuery (As string)
- (OPTIONAL!) Variables (As json)
- (OPTIONAL!) headers (As json)

```
const url = 'localhost:3000/graphql';
const query = `
  query($login: LoginInput) {
    login(login: $login) {
      person {
        cid
        name
        isAdmin
      }
      authentication
    }
  }
`;
const variables = {
  login: {
    cid,
    password
  }
};
const response = await graphqlRequest(url, query, variables)
```

This package will return the response object back to you, so you'll be able to get additional information, like headers, status code, config, etc...

# Why I made this package?
Because graphql clients are too hard to be used. I've found some clients easy to use (like simple-graphql-client), but this package only gives me back the response data, so I was unnable to get aditional information from the request.

# Upgrades on this package?
I'll try to improve this package once in a while, but pull requests are always welcome (and please, open issues with your ploblems/feedback)