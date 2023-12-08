import { App } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";

export class TestFunctions {
  async func1() {
    const db = getFirestore();
    const docRef = db.collection("card_templates").doc("FREN19-T01-001-03-EN-FREN002-001");
    const cardTemplate = await docRef.get();
    return cardTemplate;
  }

  async func2(app: App) {
    const db = getFirestore(app);
    const docRef = db.collection("card_templates").doc("FREN19-T01-001-03-EN-FREN002-001");
    const cardTemplate = await docRef.get();
    return cardTemplate;
  }

  async func3(db: Firestore) {
    const docRef = db.collection("card_templates").doc("FREN19-T01-001-03-EN-FREN002-001");
    const cardTemplate = await docRef.get();
    return cardTemplate;
  }
}
