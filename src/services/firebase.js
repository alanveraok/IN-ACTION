import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore"
import dataItems from "../components/Data/Data";
const firebaseConfig = {
  apiKey: "AIzaSyCdSXEAxQ8uXyT_VqyUKKTd55Vy2b370eI",
  authDomain: "vera-react.firebaseapp.com",
  projectId: "vera-react",
  storageBucket: "vera-react.appspot.com",
  messagingSenderId: "367379961100",
  appId: "1:367379961100:web:2fa4e9f61e0fee45d62529",
};
initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig)
 const firestoreDB = getFirestore(app)

export async function saveProductsToFirebase(){
    const collectionProducts = collection(firestoreDB, "figuras")
    for(let item of dataItems){
        const docref = await addDoc(collectionProducts, item)
         console.log(docref.id)
    }
}
 /*para subir todos los productos de una con boton en app una sola vez*/ 

export default firestoreDB