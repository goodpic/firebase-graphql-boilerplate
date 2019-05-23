const admin = require('firebase-admin');
const serviceAccount = require("../../config/scanner-dbb3e-firebase-adminsdk-qrebv-6fa390b357.json");

class FireStore {
  db: any
  
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://scanner-dbb3e.firebaseio.com"
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
      last: 'Kaneko',
      born: 1974
    });
    return user
  }

}

export default FireStore