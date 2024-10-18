import {initializeApp} from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDL4UCUjI-at1z83pzHqvdvuirf-Oj9x1k",
    authDomain: "creamier-menu.firebaseapp.com",
    projectId: "creamier-menu",
    storageBucket: "creamier-menu.appspot.com",
    messagingSenderId: "166985635209",
    appId: "1:166985635209:web:842e50b5b53903f7a57d58",
    measurementId: "G-VPLKGFW341"
};

export function addOrderToFirebase(order) {
    const db = getFirestore(app)
    const orders = collection(db, 'orders')
    return addDoc(orders, order)
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);