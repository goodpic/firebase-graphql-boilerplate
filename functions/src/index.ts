import * as functions from 'firebase-functions';

import GraphqlClient from './graphql/GraphqlClient'
import FireStore from './firebase/myfirestore'

const client = GraphqlClient()
const firestore = new FireStore()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(async (request, response) => {
  const result: any = await client.exec()
  let list = []
  if (result) {
    list = result.allFilms.map((film: any) => { 
      return `<li>${film.title}</li>`
    })
  }

  const record = await firestore.getDocument('test', 'testDoc')
  response.send(`<p>Hello ${record.first}!</p><ul>${list.join('')}<ul>`);
});
