import { initializeApp } from "firebase/app";
import { collection, doc, setDoc, getFirestore, getDocs } from "firebase/firestore";
import { createList } from "./helpar";
const firebaseConfig = {
    apiKey: "AIzaSyAczHi6KA79GB20v5OnGUZxxCB5SqFUXfk",
    authDomain: "useful-links-fa1cf.firebaseapp.com",
    databaseURL: "https://useful-links-fa1cf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "useful-links-fa1cf",
    storageBucket: "useful-links-fa1cf.appspot.com",
    messagingSenderId: "313872860667",
    appId: "1:313872860667:web:dab989a46c772e868ff75e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const CategoriesRef = collection(db, "Categories");
const LinksRef = collection(db, "Links");

export const getCategories = async () => {
    const querySnapshot = await getDocs(CategoriesRef);
    let categories = querySnapshot.docs.map((item) => item.data());
    categories.forEach((item) => {
        $("#category").append(`<option value="${item.category}">${item.category}</option>`);
    });
    $("#category").trigger("change");
};

export const getLinkList = async () => {
    const querySnapshot = await getDocs(LinksRef);
    let links = querySnapshot.docs.map((item) => item.data());
    const categorizedLinks = links.reduce((categorizedLinks, item) => {
        const category = categorizedLinks[item.category] || [];
        category.push(item);
        categorizedLinks[item.category] = category;
        return categorizedLinks;
    }, {});

    for (const [key, value] of Object.entries(categorizedLinks)) {
        $(".main").append(createList(key, value));
    }
    $(".main").isotope({
        itemSelector: "div",
    });
};

export const addCategory = async (data) => {
    await setDoc(doc(CategoriesRef), data);
};
export const addLink = async (data) => {
    await setDoc(doc(LinksRef), data);
};

const deleteLink = () => {};
