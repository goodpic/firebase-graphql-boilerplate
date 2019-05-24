const admin = require('firebase-admin');
const serviceAccount = require("../../config/YOUR-PROJECT-NAME-firebase-adminsdk-XXXX-XXXXXX.json");

class MyFireStore {
  db: any
  
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://unittest-dfb64.firebaseio.com"
    });
    this.db = admin.firestore();
  }

  public async getDocument(collection: string, index: string) {
    try { 
      const collectionRef = this.db.collection(collection)
      const docRef = collectionRef.doc(index)
      const getDoc = await docRef.get()
      if (getDoc && getDoc.exists) {
        return getDoc.data()
      } else {
        return false
      }
    }
    catch (error) {
      console.log(`Error getting documents : ${index} : ${error}`);
      return false
    }
  }

  public set() {
    const docRef = this.db.collection('test').doc('testDoc');
    const user = docRef.set({
      first: 'Jun',
    });
    return user
  }

}

export default MyFireStore
