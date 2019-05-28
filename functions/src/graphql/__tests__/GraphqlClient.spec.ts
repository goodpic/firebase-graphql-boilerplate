import GraphqlClient from '../GraphqlClient'

const client = GraphqlClient()

describe('Star Wars', () => {
  it('get films', async () => {
    const result: any = await client.exec()

    if (result) {
      expect(result.allFilms).toHaveLength(7);
    }
  }, 100000)
})