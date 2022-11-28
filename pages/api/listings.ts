// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, getDocs } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../config/firebase';

const listingsCollection = collection(db, "listing");

export const getListings = async () => {
    const documents = await getDocs(listingsCollection)
    let listings : any = []
    documents.forEach(doc => {
        let listing = doc.data()
        listing = {...listing, "id": doc.id}
        listings.push(listing)
    });
    return listings
};




export default async function listingsDatahandler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
    /**
     * Get all listings from database
     */
    let listings = await getListings()
    res.status(200).json(listings)
}
