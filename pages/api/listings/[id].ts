// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DocumentData, query, getDocs, collection } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../config/firebase';
import { listingInterface } from '../../../utils/interface'


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




export default async function idDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<listingInterface>
) {
    let listings : listingInterface[] = await getListings()
    let id = req.query.id
    let listing = listings.find(item => item.id === id)
    // const {id} = req.query
    // console.log(id)
    if(listing) {
        res.status(200).json(listing)
    }
}
