// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, getDocs } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../config/firebase';
import { userInterface } from '../../utils/interface';

const usersCollection = collection(db, "users");

export const getUsers = async () => {
    const documents = await getDocs(usersCollection)
    let users : userInterface[] = []
    documents.forEach(doc => {
        let user = doc.data() as userInterface
        user = {...user, "id": doc.id}
        users.push(user)
    });
    return users
};




export default async function usersDatahandler(
  req: NextApiRequest,
  res: NextApiResponse<userInterface[]>
) {
    /**
     * Get all users from database
     */
    let users = await getUsers()
    res.status(200).json(users)
}
