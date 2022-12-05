import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { CategoryDoc } from '../../utils/interface';

const categoriesCollection = collection(db, "category");

export const getCategories = async () => {
    const documents = await getDocs(categoriesCollection)
    let categories: CategoryDoc[] = []
    documents.forEach(doc => {
        let category = doc.data() as CategoryDoc
        category = { ...category, "id": doc.id }
        categories.push(category)
    });

    return categories
};


export const getCategory = async (id: string) => {
    const categoryDocRef = doc(db, "category", id);
    const docSnap = await getDoc(categoryDocRef)
    if (docSnap.exists()) {
        const category = docSnap.data()
        console.log(category)
        return { ...category, "id": docSnap.id }
    }
    else { return null }
}

