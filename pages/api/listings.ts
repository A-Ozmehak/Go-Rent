import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { listingInterface } from "../../utils/interface";
import { getUser } from "./users";

const listingsCollection = collection(db, "listing");

export const getListings = async () => {
  console.log("getListings");
  let listings: any = [];
  try {
    const documents = await getDocs(listingsCollection);
    for (const doc of documents.docs) {
      let listing = doc.data();
      listing = { ...listing, id: doc.id };
      listing.seller = await getUser(listing.seller);

      if (listing.seller === null) {
        return await getListing(listing.id);
      }

      if (!listing.media.length) {
        listing.media = "/images/fallback.jpg";
      }
      listings.push(listing);
    }
  } catch (e) {
    // console.log(e)
  }

  return listings;
};

export const getListingsByUser = async (id: string) => {
  console.log("getListingsByUser");
  let listings: listingInterface[] = [];
  try {
    const q = query(listingsCollection, where("seller", "==", id));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const listingData = doc.data() as listingInterface;
      const listing = { ...listingData, id: doc.id };
      if (!listing.media.length) {
        listing.media = "/images/fallback.jpg";
      }
      listings.push(listing);
    });
  } catch (e) {}
  return listings;
};

export const getListingsByCategory = async (id: string) => {
  console.log("getListingsByCategory");
  let listings: listingInterface[] = [];
  try {
    const q = query(listingsCollection, where("category", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const listingData = doc.data() as listingInterface;
      const listing = { ...listingData, id: doc.id };
      if (!listing.media.length) {
        listing.media = "/images/fallback.jpg";
      }
      listings.push(listing);
    });
  } catch (e) {}
  return listings;
};

export const getListing = async (id: string) => {
  console.log("getListing");
  try {
    const listingDocRef = doc(db, "listing", id);
    const docSnap = await getDoc(listingDocRef);
    if (docSnap.exists()) {
      const listing = docSnap.data();
      const seller = await getUser(listing.seller);
      if (seller === null) {
        return await deleteDoc(doc(db, "listing", id));
      }
      if (!listing.media.length) {
        listing.media = "/images/fallback.jpg";
      }
      return { ...listing, id: docSnap.id, seller };
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
