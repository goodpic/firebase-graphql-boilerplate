# Firebase Graphql Boilerplate

GraphQL Client to run on the Firebase (cloud) functions. 

Using:
- Node 8
- TypeScript
- Apollo Client (GraphQL)
- Jest

# Configure

Add .firebaserc to the project root directory to specify your Firebase project.

```json
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_NAME"
  }
}
```

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
