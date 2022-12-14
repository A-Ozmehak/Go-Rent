import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { CategoryDoc } from "../../utils/interface";

const categoriesCollection = collection(db, "category");

export const getCategories = async () => {
  // console.log("getCategories");
  let categories: CategoryDoc[] = [];
  try {
    const documents = await getDocs(categoriesCollection);
    documents.forEach((doc) => {
      let category = doc.data() as CategoryDoc;
      category = { ...category, id: doc.id };
      categories.push(category);
    });

    return categories;
  } catch (e) {
    return categories;
  }
};

export const getCategory = async (id: string) => {
  // console.log("getCategory");
  try {
    const categoryDocRef = doc(db, "category", id);
    const docSnap = await getDoc(categoryDocRef);
    if (docSnap.exists()) {
      const category = docSnap.data();
      return { ...category, id: docSnap.id };
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
