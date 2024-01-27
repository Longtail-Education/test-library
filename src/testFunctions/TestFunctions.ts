/* eslint-disable require-jsdoc */
import { FirebaseApp } from "firebase/app";
import { getFirestore, doc, setDoc, Firestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, FirebaseStorage } from "firebase/storage";

export class TestFunctions {
  // document writing tests
  async test1(): Promise<string> {
    try {
      const db = getFirestore();
      const docRef = doc(db, "tests", "test1");
      await setDoc(docRef, { isTrue: true });
      return "test1: success writing document";
    } catch (error) {
      console.log(error);
      return `test1 error: ${(error as Error).message}`;
    }
  }

  async test2(app: FirebaseApp): Promise<string> {
    try {
      const db = getFirestore(app);
      const docRef = doc(db, "tests", "test2");
      await setDoc(docRef, { isTrue: true });
      return "test2: success writing document";
    } catch (error) {
      console.log(error);
      return `test2 error: ${(error as Error).message}`;
    }
  }

  async test3(db: Firestore): Promise<string> {
    try {
      const docRef = doc(db, "tests", "test3");
      await setDoc(docRef, { isTrue: true });
      return "test3: success writing document";
    } catch (error) {
      console.log(error);
      return `test3 error: ${(error as Error).message}`;
    }
  }

  // storage get download url tests using relative path
  async test4(): Promise<string> {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, "images/test.png");
      const url = await getDownloadURL(fileRef);
      return `test4: success getting download url: ${url}`;
    } catch (error) {
      console.log(error);
      return `test4 error: ${(error as Error).message}`;
    }
  }

  async test5(app: FirebaseApp): Promise<string> {
    try {
      const storage = getStorage(app);
      const fileRef = ref(storage, "images/test.png");
      const url = await getDownloadURL(fileRef);
      return `test5: success getting download url: ${url}`;
    } catch (error) {
      console.log(error);
      return `test5 error: ${(error as Error).message}`;
    }
  }

  async test6(storage: FirebaseStorage): Promise<string> {
    try {
      const fileRef = ref(storage, "images/test.png");
      const url = await getDownloadURL(fileRef);
      return `test6: success getting download url: ${url}`;
    } catch (error) {
      console.log(error);
      return `test6 error: ${(error as Error).message}`;
    }
  }

  // storage get download url tests using gs path
  async test7(): Promise<string> {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, `gs://${storage.app.options.storageBucket}/images/test.png`);
      const url = await getDownloadURL(fileRef);
      return `test4: success getting download url: ${url}`;
    } catch (error) {
      console.log(error);
      return `test4 error: ${(error as Error).message}`;
    }
  }

  async test8(app: FirebaseApp): Promise<string> {
    try {
      const storage = getStorage(app);
      const fileRef = ref(storage, `gs://${storage.app.options.storageBucket}/images/test.png`);
      const url = await getDownloadURL(fileRef);
      return `test5: success getting download url: ${url}`;
    } catch (error) {
      console.log(error);
      return `test5 error: ${(error as Error).message}`;
    }
  }

  async test9(storage: FirebaseStorage): Promise<string> {
    try {
      const fileRef = ref(storage, `gs://${storage.app.options.storageBucket}/images/test.png`);
      const url = await getDownloadURL(fileRef);
      return `test6: success getting download url: ${url}`;
    } catch (error) {
      console.log(error);
      return `test6 error: ${(error as Error).message}`;
    }
  }
}
