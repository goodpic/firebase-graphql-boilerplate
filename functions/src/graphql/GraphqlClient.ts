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

      let films = null
      try {
        const result =  await client.query({
          query: gql`
          query {
            allFilms {
              title
            }
          }`
        })
        films = result.data
      }
      catch (error) {
        console.log(error);
      }
      return films
    },
  }
}

export default GraphqlClient