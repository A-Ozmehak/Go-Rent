// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, query, getDocs, DocumentData, limit, limitToLast } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../config/firebase';

const listingsCollection = collection(db, "listing");

const getListings = async () => {
    const documents = await getDocs(listingsCollection)
    let listings : any = []
    documents.forEach(doc => {
        let listing = doc.data()
        listing = {...listing, "id": doc.id}
        listings.push(listing)
    });
    return listings
};




export default async function mockDatahandler(
  req: NextApiRequest,
  res: NextApiResponse<[]>
) {
    let listings = await getListings()
    console.log(listings)
    res.status(200).json(listings)
}
