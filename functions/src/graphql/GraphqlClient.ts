import fetch from 'node-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'

const GraphqlClient = () => {

  return {
    exec: async () => {
      const client = new ApolloClient({
        link: createHttpLink({
          fetch: fetch,
          uri: "https://api.graphcms.com/simple/v1/swapi ",
        }),
        cache: new InMemoryCache(),
      })

      let films
      await client.query({
        query: gql`
        query {
          allFilms {
            title
          }
        }`
      }).then(
        result => {
          films = result.data
        }  
      )
      return films
    },
  }
}

export default GraphqlClient