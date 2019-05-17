import * as functions from 'firebase-functions';

import GraphqlClient from './graphql/GraphqlClient'
const client = GraphqlClient()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(async (request, response) => {
  const result: any = await client.exec()
  if (result) {
    const list = result.allFilms.map((film: any) => { 
      return `<li>${film.title}</li>`
    })
    response.send(`<p>Hello from GraphQL!</p><ul>${list.join('')}<ul>`);
  }
});
