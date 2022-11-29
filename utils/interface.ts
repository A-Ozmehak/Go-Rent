export interface listingInterface {
    title: string,
    id: string,
    location: string,
    price: number,
    imageSrc: string,
    description: string,
    user: {
        image: string,
        name: string
    }
}


export interface profileInterface {
    image?: string;
    username?: string;
    location?: string;
    bio?: string;
    id?: string;
}

export interface ListingDoc {
    title: string;
    description: string;
    category: string;
    media: string;
    price: number;

}