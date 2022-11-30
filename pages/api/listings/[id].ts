// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listingInterface} from '../../../utils/interface'
import { getListings } from '../listings';

export default async function listingsIdDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<listingInterface>
) {
  /**
   * Get specific listing with ID
   */
    let listings : listingInterface[] = await getListings()
    let id = req.query.id
    let listing = listings.find(item => item.id === id)
    if(listing) {
        res.status(200).json(listing)
    }
}
