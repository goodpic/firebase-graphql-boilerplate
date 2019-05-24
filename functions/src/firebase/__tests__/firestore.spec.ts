import FireStore from '../firestore'

const firestore: any = new FireStore()

describe('Firestore', () =>{
  it('init', () => {
    
    console.log(typeof firestore);
    expect(true).toEqual(true)
  })
})