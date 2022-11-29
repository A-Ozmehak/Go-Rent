// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { profileInterface } from '../../../utils/interface'
import { getUsers } from '../users';

export default async function usersIdDataHandler(
    req: NextApiRequest,
    res: NextApiResponse<profileInterface>
) {
    /**
     * Get specific listing with ID
     */
    let users: profileInterface[] = await getUsers()
    let id = req.query.id
    let user = users.find(item => item.id === id)
    if (user) {
        res.status(200).json(user)
    }
}
