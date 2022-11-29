// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listingDoc} from '../../../utils/interface'
import { getListings } from '../listings';

export default async function listingsIdDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<listingDoc>
) {
  /**
   * Get specific listing with ID
   */
    let listings : listingDoc[] = await getListings()
    let id = req.query.id
    let listing = listings.find(item => item.id === id)
    if(listing) {
        res.status(200).json(listing)
    }
}
