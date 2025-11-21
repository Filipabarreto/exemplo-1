// Importe outros serviços conforme necessário

import { initializeApp } from "firebase/app";
import { key } from "./Key";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;

  constructor() {
    const firebaseConfig = {
      apiKey: key,
    authDomain: "ebook-exemplo1.firebaseapp.com",
    projectId: "ebook-exemplo1",
    storageBucket: "ebook-exemplo1.firebasestorage.app",
    messagingSenderId: "104389209398",
    appId: "1:104389209398:web:e81a0bd7dd59224afe9797",
    measurementId: "G-JZPPE5E9ZS"
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
function Injectable(arg0: { providedIn: string; }): (target: typeof Firebase) => void | typeof Firebase {
  throw new Error("Function not implemented.");
}

