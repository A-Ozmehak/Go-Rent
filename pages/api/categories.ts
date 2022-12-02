// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
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




export default async function categoriesDatahandler(
    req: NextApiRequest,
    res: NextApiResponse<CategoryDoc[]>
) {
    /**
     * Get all categories from database
     */
    let categories = await getCategories()
    //console.log(categories)
    res.status(200).json(categories)
}
