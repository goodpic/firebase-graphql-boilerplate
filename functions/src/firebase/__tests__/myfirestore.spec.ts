const admin = require('firebase-admin');
const serviceAccount = require("../../../config/YOUR-PROJECT-NAME-firebase-adminsdk-XXXX-XXXXXX.json");

// const myfirestore: any = new MyFireStore()

describe('MyFirestore', () =>{
  it('getDocument', async () => {
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://unittest-dfb64.firebaseio.com"
    });

    let result = false
    const db = admin.firestore();
    const collectionRef = db.collection('test')
    const docRef = collectionRef.doc('testDoc')
    const getDoc = await docRef.get()
    if (getDoc && getDoc.exists) {
      result = getDoc.data()
    }

    expect(result).toEqual('testdata')
  }, 100000)
})