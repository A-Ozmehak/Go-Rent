// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listingInterface} from '../../../utils/interface'
import { getListings } from '../listings';

export default async function listingsIdDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<listingInterface[]>
) {
  /**
   * Get specific listings from a seller
   */
    let listings : listingInterface[] = await getListings()
    let seller = req.query.seller
    let filteredListings = listings.filter(item => item.user?.name === seller)
    if(filteredListings.length) {
        res.status(200).json(filteredListings)
    }
}
