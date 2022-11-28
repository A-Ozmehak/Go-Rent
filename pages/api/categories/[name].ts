// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ListingDoc } from '../../../utils/interface'
import { getListings } from '../listings';


export default async function categoriesNameDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<ListingDoc[]>
) {
  /**
   * Get listings from a specific category name
   */
    let listings : ListingDoc[] = await getListings()
    let name = req.query.name
    listings = listings.filter(item => item.category === name)
    // const {id} = req.query
    // console.log(id)
    if(listings.length) {
        console.log(listings)
        res.status(200).json(listings)
    }
}
