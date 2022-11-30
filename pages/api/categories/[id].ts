// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CategoryDoc} from '../../../utils/interface'
import { getCategories } from '../categories';
import { getListings } from '../listings';


export default async function categoriesNameDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryDoc>
) {
  /**
   * Get listings from a specific category name
   */
    let categories : CategoryDoc[] = await getCategories()
    let id = req.query.id
    categories = categories.filter(item => item.id === id)
    // const {id} = req.query
    // console.log(id)
    if(categories.length) {
        res.status(200).json(categories[0])
    }
}
