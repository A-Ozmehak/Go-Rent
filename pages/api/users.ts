import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { userInterface } from '../../utils/interface';

const usersCollection = collection(db, "users");

export const getUsers = async () => {
    const documents = await getDocs(usersCollection)
    let users: any = []
    documents.forEach(doc => {
        let user = doc.data()
        user = { ...user, "id": doc.id }
        users.push(user)
    });
    return users
};

export const getUser = async (id: string) => {
    let users: userInterface[] = await getUsers()
    let user = users.find(item => item.id === id)
    return user
}