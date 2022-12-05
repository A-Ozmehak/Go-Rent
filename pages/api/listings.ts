import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { listingInterface } from '../../utils/interface';
import { getUser } from './users';

const listingsCollection = collection(db, "listing");

export const getListings = async () => {
  const documents = await getDocs(listingsCollection);
  let listings: any = [];

  for (const doc of documents.docs) {
    let listing = doc.data();
    listing = { ...listing, id: doc.id };
    listing.seller = await getUser(listing.seller);
    listings.push(listing);
  }
  return listings;
};

export const getListingsByUser = async (id: string) => {
    const q = query(listingsCollection, where("seller", "==", id))
    let listings: listingInterface[] = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        const listingData = doc.data() as listingInterface
        const listing = { ...listingData, "id": doc.id }
        listings.push(listing)
    })

    return listings
}

export const getListing = async (id: string) => {
    const listingDocRef = doc(db, "listing", id);
    const docSnap = await getDoc(listingDocRef)
    if (docSnap.exists()) {
        const listing = docSnap.data()
        const seller = await getUser(listing.seller)
        return { ...listing, "id": docSnap.id, seller }
    }
    else { return null }
}

