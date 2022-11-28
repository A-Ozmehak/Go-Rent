// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listingInterface } from '../../../utils/interface'
import { placeholderListing } from '../mockdata'


export default function idDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<listingInterface>
) {
    let id = req.query.id
    let listing = placeholderListing.find(item => item.id === id)
    // const {id} = req.query
    // console.log(id)
    if(listing) {
        res.status(200).json(listing)
    }
}
