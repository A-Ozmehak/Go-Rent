// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { userInterface } from '../../../utils/interface'
import { getUsers } from '../users';

export async function getUser(id: string) {
    let users: userInterface[] = await getUsers()
    let user = users.find(item => item.id === id)
    return user
}


export default async function usersIdDataHandler(
    req: NextApiRequest,
    res: NextApiResponse<userInterface>
) {
    /**
     * Get specific user with ID
     */
    let users: userInterface[] = await getUsers()
    let id = req.query.id
    let user = users.find(item => item.id === id)
    if (user) {
        res.status(200).json(user)
    }
}
