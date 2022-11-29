// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, getDocs } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../config/firebase';

const categoriesCollection = collection(db, "category");

export const getCategories = async () => {
    const documents = await getDocs(categoriesCollection)
    let categories : any = []
    documents.forEach(doc => {
        let category = doc.data()
        category = {...category, "id": doc.id}
        categories.push(category)
    });
    console.log(categories)
    return categories
};




export default async function categoriesDatahandler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
    /**
     * Get all categories from database
     */
    let categories = await getCategories()
    console.log(categories)
    res.status(200).json(categories)
}
