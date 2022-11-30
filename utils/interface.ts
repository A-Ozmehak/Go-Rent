import { DocumentData } from "firebase/firestore";

export interface listingInterface {
    title: string,
    id?: string,
    location?: string,
    price: number,
    media: string,
    description: string,
    category: string,
    seller: any,
}

export interface userInterface extends DocumentData {
    image?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    bio?: string;
    id?: string;
}



export interface CategoryDoc extends DocumentData {
    id: string,
    icon:
    "Celebration" |
    "House" |
    "DirectionsCar" |
    "Construction" |
    "SportsTennis" |
    "Checkroom" |
    "Smartphone",
    name: string,
    url: string
}

export interface listingProfile {
    media: string;
    id: string;
}