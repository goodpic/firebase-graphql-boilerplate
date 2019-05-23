# Firebase GraphQL Client Boilerplate

This is a starter template for the GraphQL Client to run on the Cloud Functions for Firebase.

Using:
- Node 8
- TypeScript
- Apollo Client (GraphQL)
- Jest

## Why?

There are a couple of pitfalls to configure TypeScript and Apollo Client on Node environment such as:

- https://github.com/apollographql/apollo-link/issues/513
- https://github.com/apollographql/graphql-subscriptions/issues/83

So just to make the start easy.

# Configure

## firebaserc

Add .firebaserc to the project root directory to specify your Firebase project.

```json
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_NAME"
  }
}
```

## adminsdk JSON

Add Firebase Admin SDK such as YOUR-PROJECT-NAME-firebase-adminsdk-XXXX-XXXXXX.json under 'functions/config'.


## Jest test

```zsh
% npm run test
```

## Build

```zsh
% npm run build
```

## Local server (emulation)

```zsh
% npm run serve
```
