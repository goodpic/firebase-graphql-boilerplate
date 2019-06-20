const admin = require('firebase-admin');
const serviceAccount = require("../../../config/YOUR-PROJECT-NAME-firebase-adminsdk-XXXX-XXXXXX.json");

describe('MyFirestore', () =>{
  it('getDocument', async () => {

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://unittest-dfb64.firebaseio.com"
    });
    const db = admin.firestore();
    const collectionRef = db.collection('test')
    const docRef = collectionRef.doc('testdata')
    const getDoc = await docRef.get()
    if (getDoc && getDoc.exists) {
      const { testParam } = getDoc.data()
      expect(testParam).toEqual('testValue')
    }

  }, 10000)
})