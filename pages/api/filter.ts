// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, getDocs } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../config/firebase";
import { getCategories } from "./categories";
import { getListings } from "./listings";

async function filterData() {
  let categories = await getListings();
  let listings = await getCategories();
  let obj = {
    categories: categories,
    listings: listings,
  };
  return listings;
}

// export default async function listingsDatahandler(
//   req: NextApiRequest,
//   res: NextApiResponse<{}>
// ) {
//     /**
//      * Get all listings from database
//      */
//     let data = await filterData()
//     res.status(200).json(data)
// }
