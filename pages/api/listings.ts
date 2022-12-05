import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { listingInterface } from '../../utils/interface';
import { getUser } from './users';

const listingsCollection = collection(db, "listing");

export const getListings = async () => {
    const documents = await getDocs(listingsCollection)
    let listings: any = []

    for (const doc of documents.docs) {
        let listing = doc.data()
        listing = { ...listing, "id": doc.id }
        listing.seller = await getUser(listing.seller)
        listings.push(listing)
    }
    return listings
};


export const getListingsByUser = async (id: string) => {
    let listings = await getListings()
    let userListings: any = []
    for (let listing of listings) {
        if (listing.seller === id) {
            userListings.push(listing)
        }
    }
    return userListings
}

export const getListing = async (id: string) => {
    let listings: listingInterface[] = await getListings()
    let listing = listings.find(item => item.id === id)
    return listing
}

